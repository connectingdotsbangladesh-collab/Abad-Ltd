-- Initial schema for a NEW Supabase project; not executed by this handoff task.
-- Service-side access only. Authentication alone is not administration.
-- Production migrations must be applied using the owner's trusted administration.
begin;

create table public.admin_members (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('admin','editor','viewer')),
  created_at timestamptz not null default now()
);

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique default ('ABAD-' || upper(substr(replace(gen_random_uuid()::text,'-',''),1,16))),
  kind text not null check (kind in ('farmer','buyer','hub','partner','sponsor','contact')),
  locale text not null check (locale in ('bn','en')),
  name text not null check (char_length(name) between 2 and 100),
  phone text,
  email text,
  district_id text,
  organization text,
  fields jsonb not null default '{}'::jsonb check (jsonb_typeof(fields) = 'object'),
  consent boolean not null check (consent = true),
  consent_version text not null,
  consented_at timestamptz not null default now(),
  idempotency_key uuid not null unique,
  request_hash text not null,
  status text not null default 'new' check (status in ('new','contacted','qualified','closed')),
  internal_notes text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (phone is not null or email is not null)
);
create index leads_created_idx on public.leads (created_at desc);
create index leads_filter_idx on public.leads (kind,status,district_id);

create table public.lead_events (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id) on delete cascade,
  actor_user_id uuid references auth.users(id) on delete set null,
  action text not null check (action in ('created','status_changed','note_updated','exported')),
  previous_status text,
  new_status text,
  created_at timestamptz not null default now()
);
create index lead_events_lead_idx on public.lead_events (lead_id,created_at desc);

create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  locale text not null check (locale in ('bn','en')),
  status text not null default 'pending' check (status in ('pending','confirmed','unsubscribed')),
  consent_version text not null,
  consented_at timestamptz not null default now(),
  confirmation_token_hash text,
  confirmation_expires_at timestamptz,
  confirmed_at timestamptz,
  unsubscribed_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.content_items (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  locale text not null check (locale in ('bn','en')),
  content_type text not null check (content_type in ('article','service','page')),
  title text not null,
  body jsonb not null default '{}'::jsonb,
  status text not null default 'draft' check (status in ('draft','published','archived')),
  evidence_note text,
  published_at timestamptz,
  updated_by uuid references auth.users(id) on delete set null,
  updated_at timestamptz not null default now(),
  unique (slug,locale,content_type),
  check (status <> 'published' or published_at is not null)
);

create table public.network_hubs (
  id uuid primary key default gen_random_uuid(),
  name_bn text not null,
  name_en text,
  district_id text not null,
  upazila text,
  status text not null default 'planned' check (status in ('planned','pilot','active','paused')),
  public_description_bn text,
  public_description_en text,
  public_address text,
  verified_at timestamptz,
  verification_note text,
  is_public boolean not null default false,
  created_at timestamptz not null default now(),
  check (not is_public or verified_at is not null)
);

-- Short-lived HMAC identifier, never raw client IP or phone.
-- For live operation, schedule deletion of expired rows; record actual retention.
create table public.lead_rate_limits (
  identity_hash text not null,
  bucket bigint not null,
  request_count integer not null default 1 check (request_count > 0),
  expires_at timestamptz not null,
  primary key (identity_hash,bucket)
);
create index lead_rate_limits_expiry_idx on public.lead_rate_limits (expires_at);

create function public.consume_lead_rate_limit(identity_hash_input text)
returns boolean
language plpgsql
security invoker
set search_path = public, pg_temp
as $$
declare
  current_bucket bigint := floor(extract(epoch from clock_timestamp()) / 600)::bigint;
  count_after integer;
begin
  if identity_hash_input is null or char_length(identity_hash_input) < 32 then
    raise exception 'invalid rate-limit identity';
  end if;
  insert into public.lead_rate_limits(identity_hash,bucket,request_count,expires_at)
  values (identity_hash_input,current_bucket,1,to_timestamp((current_bucket+2)*600))
  on conflict (identity_hash,bucket)
  do update set request_count = public.lead_rate_limits.request_count + 1
  returning request_count into count_after;
  return count_after <= 5;
end;
$$;

-- No client policies: all public browser/API access is denied by default.
alter table public.admin_members enable row level security;
alter table public.leads enable row level security;
alter table public.lead_events enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.content_items enable row level security;
alter table public.network_hubs enable row level security;
alter table public.lead_rate_limits enable row level security;

revoke all on public.admin_members, public.leads, public.lead_events,
  public.newsletter_subscribers, public.content_items, public.network_hubs,
  public.lead_rate_limits from public, anon, authenticated;
grant all on public.admin_members, public.leads, public.lead_events,
  public.newsletter_subscribers, public.content_items, public.network_hubs,
  public.lead_rate_limits to service_role;
revoke all on function public.consume_lead_rate_limit(text) from public, anon, authenticated;
grant execute on function public.consume_lead_rate_limit(text) to service_role;

commit;

-- Owner-admin bootstrap: after creating an actual trusted Supabase Auth user,
-- insert that EXACT user UUID into admin_members through trusted administration.
-- Do not seed a default user, expose a signup-admin endpoint or embed a password.
-- Application code must verify the auth user and role for EVERY admin action
-- because the server-side service_role can bypass RLS.
-- Public content/hub projections are returned only by validated server loaders;
-- never expose the raw tables with a client-side query.
