# Technical build contract

## Stack and implementation scope

Use a currently supported stable **Next.js App Router + React + TypeScript** application, Tailwind CSS in a version compatible with the chosen framework, Lucide or an equivalent coherent SVG icon set, and Zod for server input validation. Match the official installation requirements, select a supported Node LTS version, lock dependencies and commit the package lockfile. Do not install canary versions or guess APIs from older framework releases. Use the host's existing compatible conventions if the workspace already contains an application.

Use JSON-driven content and centralized configuration; ordinary marketing content should be server-rendered. Client components are limited to the mobile drawer, tabs, accordions, forms, language control and interactive district selector. Use an i18n approach with explicit `/bn` and `/en` segments; a lightweight dictionary loader is sufficient if it handles all metadata and UI strings. Do not require a translation API. The project does not need an AI API or a generative service to operate.

Supabase PostgreSQL is the proposed backend for lead capture and protected admin; use the included SQL starter for a new database, adapting only where needed for current official APIs. A no-credential local demo must run without Supabase and must not collect PII. Do not pretend an unconnected backend is a functioning CRM.

First release includes all public pages, planned marketplace presentation, farmer/buyer/partner enquiries, newsletter integration hooks, protected lead administration, localized SEO and the required QA. It does not include money movement, real credit approval, transaction escrow or a falsely populated marketplace. The future platform specification remains a separate implementation stage.

## Proposed repository shape

```text
src/app/[locale]/layout.tsx
src/app/[locale]/page.tsx
src/app/[locale]/about/page.tsx
src/app/[locale]/ecosystem/page.tsx
src/app/[locale]/services/page.tsx
src/app/[locale]/services/[slug]/page.tsx
src/app/[locale]/farmers/page.tsx
src/app/[locale]/buyers/page.tsx
src/app/[locale]/partners/page.tsx
src/app/[locale]/network/page.tsx
src/app/[locale]/marketplace/page.tsx
src/app/[locale]/insights/page.tsx
src/app/[locale]/insights/[slug]/page.tsx
src/app/[locale]/faq/page.tsx
src/app/[locale]/contact/page.tsx
src/app/[locale]/privacy/page.tsx
src/app/[locale]/terms/page.tsx
src/app/[locale]/not-found.tsx
src/app/admin/...
src/app/api/leads/route.ts
src/app/api/admin/leads/...
src/app/api/newsletter/...
src/app/sitemap.ts
src/app/robots.ts
src/components/layout/...
src/components/sections/...
src/components/forms/...
src/components/ui/...
src/lib/content.ts
src/lib/i18n.ts
src/lib/config.ts
src/lib/validation.ts
src/lib/server/lead-repository.ts
src/lib/server/admin-auth.ts
src/lib/server/rate-limit.ts
src/content/...
public/brand/abad-logo-source.png
public/images/...
supabase/migrations/...
tests/e2e/...
README.md
OWNER_INPUTS.md
```

The tree is a design target, not already-built website source. The handoff package's `content/` and `design/` files can be copied or imported into the chosen application layout. Keep the original handoff files intact while adding implementation source.

## Data mode

`ABAD_DATA_MODE=demo|live` is a server-side setting. Render the current mode into the public form configuration. It is not controlled by a query parameter, browser localStorage or user-supplied payload.

**Demo:** render the notice from the public corpus; perform client-side validation only; show a demo completion message. Do not POST the entered personal details, save them in browser storage, log them, create a reference as if received, or insert them in a real database. A demo API implementation may accept synthetic QA fixtures, but real visitor fields must not be transmitted by the demo UI. Reset/success remains clearly marked demo.

**Live:** fail closed unless URL, database credentials, request-hash secret and required tables are configured. A success response requires the enquiry to be durably stored. If the notification provider is absent or fails after storage, still confirm the durable enquiry with its reference; notifications are secondary. If insertion fails, keep the user's values in component memory and show a retryable error. Do not lose or silently duplicate a submitted enquiry.

Production release is blocked if enquiry collection is represented as live but live mode has not passed persistence verification. Demo mode can be used for a private review. If a public informational deployment intentionally disables forms, render an honest unavailable state and a verified contact method instead of silently dropping enquiries.

## Lead endpoint

`POST /api/leads` receives a JSON envelope:

```json
{
  "kind": "farmer",
  "locale": "bn",
  "districtId": "gazipur",
  "consent": true,
  "consentVersion": "privacy-v1",
  "website": "",
  "idempotencyKey": "client-generated-uuid",
  "fields": {
    "name": "synthetic QA name",
    "phone": "valid test-only Bangladesh mobile",
    "farmType": "crops",
    "products": "rice"
  }
}
```

`name`, `phone`, `email` belong inside `fields`; `districtId`, consent and other envelope keys belong at envelope level only. Form labels in `content/form-spec.json` describe visual fields, not permission to duplicate them into both places. `website` is a honeypot. `idempotencyKey` must be a UUID, created once per logical submission and reused during retry; a changed payload uses a new key. A server-HMAC of the canonical validated payload ensures a reused key with different content returns 409 rather than revealing another record.

Return only minimal public fields. Live success: `201 {"ok":true,"mode":"live","reference":"ABAD-..."}`. A retry with the same valid key/payload returns `200` with the existing reference. Validation error: `422` with localized field codes; rate limit: `429`; oversized request: `413`; origin mismatch: `403`; unavailable configuration/database: `503`. Do not return stored name, phone, email, notes or internal IDs in public error responses. Client forms focus the first invalid field and show an error summary.

Allowed kinds: farmer, buyer, hub, partner, sponsor, contact. Implement an allow-listed discriminated schema from the form spec, not a generic pass-through JSON collector. Reject unknown keys and any additional secret/document fields. Require enquiry consent. `quantity` and `quantityUnit` are both present or both absent; quantities must be positive. A desired date is not in the past according to Asia/Dhaka. Normalize Bengali digits before validation. Bangladesh mobile normalization supports 013–019 prefixes and common national/international representations.

Per-form requiredness overrides:

| Kind | Override |
| --- | --- |
| contact | At least one valid phone or email; phone not mandatory if email supplied |
| hub | Organization/farm name is optional for individual local entrepreneurs |
| partner | District required for hub/logistics, optional for finance/technology/sponsor/other |
| sponsor | District optional |

For each “other” enum choice, define the corresponding allowed `...Other` string on client and server (2–200 characters). Do not let conditional text bypass the schema. Extend the data JSON accordingly during implementation.

Use request/body size limits, verified same-origin checks, honeypot and distributed throttling. Suggested initial throttle: five requests per ten minutes per short-lived HMAC identity; include a separate short-lived fingerprint for repeated same-contact spam where appropriate. Derive network identifiers only from trusted hosting headers. Do not store raw IP addresses in the leads table. Never log submitted form bodies. Protect admin routes separately against brute force using authentication-provider controls.

## Persistence and administration

The SQL starter creates lead, admin membership, event, newsletter, content, hub and throttle tables. Enable RLS and deny anonymous/authenticated direct table reads and writes. Lead submission occurs only through a server endpoint using a secret service-role client that is never imported into a client component. Private credentials are loaded from server modules, never JSON content or `NEXT_PUBLIC_*` variables.

For `/admin`, use Supabase Auth sessions and verify the authenticated user server-side. Membership comes from the protected `admin_members` table; the user's own form or editable auth metadata must not create an admin role. The owner provisions the first administrator separately through trusted database/account administration. Never ship a hard-coded admin password, open signup that grants admin, or use email suffix as authorization.

Admin UI requirements: actual login/logout; paginated lead list (20 per page); search by permitted fields; filter kind, district, status and date; detail view; status update new/contacted/qualified/closed; assigned internal notes; CSV export for authorized roles only; private event history. Protect GET, PATCH and export endpoints individually; hiding buttons is insufficient. Record actor/time/status change without duplicating PII into logs. Sanitize CSV cells beginning with `=`, `+`, `-`, `@`, tab or carriage return to prevent spreadsheet formula execution. Treat “viewer” as read-only: it may view enquiries but cannot export, edit or publish content. Only admin/editor can make allowed updates; only admin can manage membership.

Marketing content begins with the included static dictionaries. If a simple CMS is implemented, admins can update bilingual article drafts, service availability and verified hub listings through validated content records. Publish only when both required locale variants and ownership checks pass. Never let unsanitized HTML reach pages. Markdown or structured blocks are preferred; no raw script execution. Publishing an article, hub or approved metric requires deliberate authorization in the admin UI and a factual evidence field.

Lead status does not change service availability. An enquiry becoming “qualified” is not a loan approval. A farmer enquiry is not a live vendor account. A hub application is not an active hub. Keep these distinctions in data types as well as copy.

## Newsletter

Keep the feature hidden by default. Enable only with a working provider, explicit separate marketing consent and double opt-in. `POST /api/newsletter` validates email/consent and rate limits. Tokens are random, single-use, stored hashed with expiry; confirmation has its own endpoint. An already-subscribed email must not disclose a person's record. Provide an actual unsubscribe process. Use draft wording until sender identity, provider, retention and privacy contact are configured. Do not represent a validated email input as a confirmed subscription.

## Localization, SEO and rendering

Use complete bilingual dictionaries with the same shape, including validation, admin-unconfigured screens, navigation, service labels, district names, metadata, accessibility labels and success/error states. Admin operational interface may use Bangla or English but must preserve submitted locale and original enquiry text.

Language switching keeps the locale-relative pathname and safe relevant queries. Localize numbers for display using `Intl.NumberFormat`; keep stable IDs and phone strings in storage. Page `lang` and fonts follow active locale. Invalid locale routes return 404 or a deliberate documented redirect, not a broken renderer.

Use Next metadata per page. Canonical and hreflang URLs derive from the actual configured domain only. Draft articles, previews and admin are excluded from the public sitemap and set to noindex. Provide a working 404. Structured data is minimal Organization/WebSite, with only configured factual identifiers, address and URLs. Do not add Review, AggregateRating, investment returns or a fake LocalBusiness address.

## Performance and usability

Mobile first. Verify 360, 390, 768, 1024 and 1440px widths, both languages and 200% zoom. No horizontal scroll, clipped Bangla vowel marks, overlapping sticky controls or tiny tap targets. Reserve image dimensions to avoid layout shifts; serve appropriate sizes and lazy-load below-the-fold assets. Load only the first hero visual eagerly. Keep JavaScript and animation small; do not ship an entire map library for a district selector.

Targets for a representative production build under stated test conditions: LCP ≤2.5s, CLS ≤0.1, INP ≤200ms. Lighthouse mobile performance target ≥90 and accessibility ≥95, but report actual measured numbers and environment rather than claiming unmeasured scores. Essential flows must work on a slow connection and show useful failures. No audio autoplays. No third-party analytics or trackers until configured and reflected in privacy/consent settings.

## Build sequence and completion output

1. Inspect the workspace and its package manager; create a concise implementation plan, then implement without stopping at the plan.
2. Set up types, content/config loaders, locale routes, tokens and accessible shared components.
3. Build all public pages and service detail routes from the supplied content. Use designed media fallbacks and the included brand source.
4. Build validated role-specific forms and honest demo mode.
5. Implement database adapter, server validation/rate limits/idempotency and protected admin for live mode. Keep local UI review available without credentials.
6. Add metadata, sitemap/robots, policy drafts and availability gates.
7. Run install/build, type check/lint where configured and focused interaction/security checks from the acceptance matrix. Fix failures.
8. Produce a walkthrough showing implemented routes, responsive screenshots, test commands/results, environment setup, remaining owner configuration and deferred transaction features. Screenshots must be of the implementation, not the reference.

The final implementation README must include exact install/dev/build/start commands, chosen package versions, migration steps for a new backend, owner-managed admin bootstrap, env variable roles and a clear demo-to-live procedure. Start the local server and provide the exact localhost preview URL. External deployment or activation of payments is a separate owner action; do not claim it happened as part of preparation.

Official implementation references checked on 14 October 2026:

- https://nextjs.org/docs/app/getting-started/installation
- https://supabase.com/docs/guides/database/postgres/row-level-security
- https://antigravity.google/docs/rules/
- https://antigravity.google/docs/implementation-plan/
