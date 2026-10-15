# Abad Limited / আবাদ লিমিটেড — Web Platform (First Release)

This repository contains the complete first-release bilingual web application and role-specific enquiry platform for **Abad Limited / আবাদ লিমিটেড**.

## Local Preview & Development Server

- **Local Preview URL**: [http://localhost:3000](http://localhost:3000) (Root redirects to `/bn`)
- **Default Locale**: বাংলা (`/bn`)
- **English Locale**: English (`/en`)
- **Protected Admin**: [http://localhost:3000/admin](http://localhost:3000/admin)

---

## Quick Start Commands

```bash
# 1. Install dependencies
npm.cmd install

# 2. Run TypeScript type check
npx.cmd tsc --noEmit

# 3. Build for production (Next.js 15 App Router)
npm.cmd run build

# 4. Start production server
npm.cmd run start

# 5. Run automated acceptance unit & HTTP integration tests
npx.cmd tsx scripts/test-acceptance.ts
npx.cmd tsx scripts/test-e2e-api.ts
```

---

## Architecture & Technology Stack

| Component | Selected Version & Purpose |
| --- | --- |
| **Framework** | Next.js 15 (App Router with `[locale]` dynamic routing) |
| **Runtime** | Node.js v24 LTS + React 19 |
| **Language** | TypeScript 5.8 |
| **Styling** | Tailwind CSS with design tokens (`design/tokens.css`: navy `#062B41`, green `#176B47`, canvas `#F7F8F3`, gold `#E1AE4A`) |
| **Icons** | Lucide React |
| **Validation** | Zod (discriminated schemas per enquiry kind, Bengali digit normalizer, BD mobile operator checks, Asia/Dhaka date checks) |
| **Database Adapter** | Supabase client architecture with service-role security and demo fallback |

---

## Implemented Route Coverage

### Public Routes (Available in `/bn` and `/en`)
- `/` -> 307 Redirect to `/bn`
- `/[locale]` — Full 12-section editorial homepage (Hero with manual controls, Goal strip, Problem & approach, Planned services, Connected ecosystem, Participation journeys, 64-District network browser, Leadership cards, Insights draft hub, Categorized FAQ, Closing CTA).
- `/[locale]/about` — Company vision, missions, 4 core values, sustainable business model, and 4 executive cards with authoritative Bangla names and expandable responsibilities.
- `/[locale]/ecosystem` — 5-step model (Farm, Data, Production, Hub, Market) with responsive top-down stacking.
- `/[locale]/services` — All 8 planned services overview.
- `/[locale]/services/[slug]` — All 8 individual service detail routes:
  1. `farmer-brands`
  2. `market-access`
  3. `data-traceability`
  4. `hubs-logistics`
  5. `contract-farming`
  6. `inputs-technology`
  7. `training-demonstration`
  8. `field-events`
  *(Invalid slugs return a localized 404)*
- `/[locale]/farmers` — Farmer value proposition, 3-step participation journey, and dedicated farmer interest form (18px text, accessible layout).
- `/[locale]/buyers` — Institutional sourcing explanation, quality requirements, and B2B sourcing enquiry form.
- `/[locale]/partners` — Hub, logistics, technology, finance, and sponsorship tabs with role-specific enquiry forms.
- `/[locale]/network` — 64-district ambition, division filtering, search, district cards with truthful planned status, and direct prefill to enquiry forms.
- `/[locale]/marketplace` — Multi-vendor future platform explainer, category list, and honest "in preparation" state.
- `/[locale]/insights` & `[slug]` — Editorial perspective hub with draft article viewer in local mode and empty state representation.
- `/[locale]/faq` — Categorized accordions for all 12 questions with search/filter.
- `/[locale]/contact` — General enquiry form and configured contact points.
- `/[locale]/privacy` & `/[locale]/terms` — Bilingual policy drafts with review banners.
- `/[locale]/not-found` — Localized 404 page with navigation links.

### Administration & API Endpoints
- `/admin` — Protected admin dashboard with lead status filtering, search by kind/district/name, lead inspection drawer, status update action, and CSV export. Shows unconfigured helper in demo mode without exposing fake data.
- `POST /api/leads` — Discriminated schema validation, rate-limiting, honeypot, body size check (<=16KB), HMAC deduplication, demo acknowledgment or live persistence.
- `GET /api/admin/leads` — Protected lead listing with pagination and filters.
- `PATCH /api/admin/leads/[id]` — Status and note updates.
- `GET /api/admin/leads/export` — Neutralized CSV export protecting against spreadsheet formula injection (`=`, `+`, `-`, `@`, `\t`, `\r` escaped).
- `POST /api/newsletter` — Guarded endpoint respecting the newsletter feature flag.
- `/sitemap.xml` & `/robots.txt` — Dynamic localized sitemap excluding admin, drafts, and private endpoints.

---

## Data Mode: Demo vs. Live

The platform operates under `ABAD_DATA_MODE=demo|live`:

1. **Demo Mode (`ABAD_DATA_MODE=demo`)**:
   - Runs honestly without any backend credentials.
   - Client-side validation checks all fields.
   - Displays a prominent preview notice banner.
   - **Never transmits, logs, or saves visitor personal information**.
   - Admin view displays synthetic demo fixtures for preview purposes.

2. **Live Mode (`ABAD_DATA_MODE=live`)**:
   - Requires Supabase project credentials in `.env.local`:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY`
     - `ABAD_REQUEST_HASH_SECRET`
   - Stores enquiries durably in the `leads` table and audit events in `lead_events`.
   - Enforces distributed rate-limiting and idempotency deduplication (same key + same payload -> 200 with existing reference; same key + changed payload -> 409 Conflict).

---

## Supabase Database Setup & Admin Bootstrap

1. Create a new Supabase project at [https://supabase.com](https://supabase.com).
2. In the Supabase SQL Editor, run `database/001_lead_platform.sql`.
3. Create your first trusted administrator in Supabase Auth (Dashboard -> Authentication -> Users -> Add User).
4. Run the SQL bootstrap query to authorize your user UUID in `admin_members`:
   ```sql
   INSERT INTO public.admin_members (user_id, role)
   VALUES ('YOUR-ACTUAL-AUTH-USER-UUID', 'admin');
   ```
5. Update `.env.local` with your live Supabase keys and set `ABAD_DATA_MODE=live`.

---

## Owner Configuration Checklist

The following items remain intentionally centralized in `site.config.json` and `OWNER_INPUTS.md`:
- Official company email (`email`)
- Official company phone / WhatsApp (`phone`, `whatsapp`)
- Physical office address (`addressBn`, `addressEn`)
- Production domain URL (`productionUrl`)
- Company registration identifiers (`tin`, `bin`, `tradeLicence`)
- Actual team portraits and confirmation of English transliterations
- Real licensed farm and facility photography (replacing SVG/CSS visual compositions)