# Google Antigravity master implementation prompt — Abad Limited

You are the implementation agent for Abad Limited / আবাদ লিমিটেড. Act as a senior frontend engineer, product designer and careful backend implementer. Build and locally verify the complete first-release website defined below. This is a concrete implementation instruction, not a request for a proposal, a wireframe or a plan alone.

## Start here

- Reference website: https://www.wegro.global/ . Use its agricultural storytelling and clear corporate-site hierarchy as inspiration; build Abad's own identity and all supplied content.
- Default language Bangla, full English version, mobile-first design, locale-prefixed routes, role-specific enquiries and protected lead administration.
- Build the exact first-release scope. Define the later transactional platform as described, without pretending it is already available.
- Make a concise implementation plan and then carry out the work through a production build, focused tests, responsive review and a local preview. Respect the installed Antigravity review settings if they require review of a plan, but do not declare completion after producing a plan.
- Missing owner contact settings, genuine portraits, real photographs or service availability must remain centralized. Use the deliberate fallbacks and continue local implementation. Do not invent facts to fill gaps.
- Without backend credentials, run honestly in demo mode and do not transmit or save visitor personal information. With live credentials, return success only after durable capture and verify all admin access controls.
- Do not deploy externally or activate payment/funding/escrow transactions as part of this build instruction.

## How to use the embedded files

If this prompt is pasted into a new empty workspace, create the supporting text files from the labelled embedded blocks below, then implement the application. If the same files already exist in the opened handoff folder, read and use them directly rather than duplicating them. Prefer current matching files to stale copies.

The blocks are UTF-8 text. Preserve Bangla strings, stable IDs, exact names and statuses. The four named leadership roles and Bangla spellings come from the supplied user brief. English spellings are provisional; render the authoritative Bangla name if the English review flag is false.

The full master document is a chat/reference prompt, not an always-on rule. Do not rename it to GEMINI.md or inline it into a rule: keep the small supplied GEMINI.md as a pointer and read the other documents when needed.

The sole binary asset is the existing original logo at public/brand/abad-logo-source.png, included in the ZIP folder but not embedded as base64 here. If the logo image is absent in a text-only handoff, use the defined text-header and navy brand-panel fallback until it is supplied; do not stop implementation or claim the raster source exists. Photographs are not included. Use the designed fallback compositions described in the asset brief.

## Source-file precedence

1. Factual source: content/company-model.json and exact supplied Bangla management names.
2. Public page copy: content/site-copy.bn.json and site-copy.en.json.
3. Scope, routes, visuals and behaviour: product, technical and acceptance specifications.
4. Runtime factual availability/contact settings: site.config.json; no unknown value becomes a public claim.
5. Database starter: use only for a new project; do not destructively apply it to an existing database.

If a real inconsistency is found, preserve the authoritative company facts, apply the explicit per-form overrides, make a sensible reversible implementation choice and document it. Do not require clarification for routine layout or engineering decisions.

## Required completion report

Return the actual preview URL, implemented route coverage, actual build/type/lint/test results, responsive screenshots, exact setup/migration/admin instructions, owner inputs still needed, and the explicitly deferred transactional modules. Do not claim live data collection, a production deployment or test results that did not happen.

The following labelled blocks contain the complete implementation source brief.


## Embedded file: `GEMINI.md`

````markdown
# Abad Limited workspace rules

This workspace is an implementation handoff for Abad Limited. Build the website described in `ANTIGRAVITY_MASTER_PROMPT.md`; this file is a compact rule, not the complete brief.

- Read `specs/PRODUCT_AND_DESIGN.md`, `specs/TECHNICAL_BUILD.md`, `specs/ACCEPTANCE_TESTS.md`, and the bilingual content files before implementation.
- Default language is Bangla, with a complete English equivalent and `/bn` / `/en` routes.
- The user-provided Bangla executive names in `content/company-model.json` are authoritative.
- 64 districts is an expansion goal. Do not invent active districts, stores, customers, revenue, funding, reviews, awards, app downloads or partnerships.
- biniyog.io and the 2% commission example are internal model references, not approved partner claims or prices.
- Use Abad’s supplied logo source. Photography must be owned or appropriately licensed. Do not import WeGro’s branding, images, contacts, testimonials or investment offers.
- All forms have honest demo/live states. Live success requires a durable database write; missing credentials must never cause a fake success.
- Keep credentials and service-role database access server-only. Protect every admin action with verified authentication and an allow-listed role.
- Implement all public pages, responsive states, accessibility, SEO, and the QA cases before claiming completion.
- Continue through local implementation and verification. Keep missing owner information in configuration and `OWNER_INPUTS.md` without blocking local development.
- Do not publish externally or enable payments, finance transactions or escrow as part of this build instruction.
````

## Embedded file: `specs/PRODUCT_AND_DESIGN.md`

````markdown
# Product and design specification

## Build outcome

Create a complete, polished, bilingual public website and enquiry platform for **Abad Limited / আবাদ লিমিটেড**. It should have the agricultural storytelling, large photography, confident navigation, services, participation journeys and FAQ depth that motivated the user's WeGro reference, expressed with Abad's own identity and content.

The supplied brief describes an intended agritech business model. It does not establish currently operating hubs, active farmers, verified product inventory, financing agreements, live applications, registration identifiers or launched software. The first release explains the model and receives interest enquiries. The transactional multi-vendor product is defined as the next platform stage; do not silently claim it already operates.

The requested deliverable in this project is a website implementation, not just a wireframe, mood board, plan or one static hero. Implement the whole defined first release, then run the verification cases. Antigravity should keep working until the defined routes and interactions run locally. Missing company contacts, photos or credentials should be collected in configuration without blocking the local site.

## Reference observations and adaptation

The WeGro homepage was reviewed on 14 October 2026. Observed UI includes a large agricultural photograph-led hero, navigation over the hero, a dark green variation, contrasting action buttons, company metrics, problem/solution content, service blocks, participation steps, project cards, news, partners and FAQ. This description records visual reference observations, not a claim about Abad.

Adapt the hierarchy and editorial confidence. Abad’s main conversion is farmer/buyer/partner interest, and its differentiator is the farmer as a distinct brand supported by data, hubs and logistics. Replace financial investment cards with clearly described ecosystem services. Replace unverified impact counters with a labelled expansion goal and model attributes. Add a complete language switch and farmer-friendly forms. Never import reference business statistics, testimonial quotes, contact details, awards, partner logos, project prices, rates of return or app store links.

Source: https://www.wegro.global/

## Identity and visual system

Use the included original Abad logo source. The proposed web palette is navy `#062B41` for brand identity, deeper navy `#041F2E` for photographic overlays and footer, agricultural green `#176B47` for primary actions, pale green `#EAF3EC` for service bands, warm white `#F7F8F3` for the canvas and harvest gold `#E1AE4A` sparingly. Use white text on navy or green. Use dark navy text on gold. Do not assume white text on gold has adequate contrast.

Typography: Inter for English and Noto Sans Bengali for Bangla using local/self-hosted font assets or Next's font tooling. Verify actual glyph support in the rendered page. Body text at least 16px, preferably 18px on farmer pages. Bengali body line-height 1.75–1.85; English 1.55–1.7. No letter spacing on Bangla words. Headline: desktop English 56–72px, Bangla 48–60px; mobile English 34–42px, Bangla 30–38px. Avoid clipping vowel marks. Keep hero copy to roughly three readable lines in Bangla and do not force identical English line breaks.

Use a 1200px content container, 64–96px section padding on desktop, 48–64px on mobile, 16px minimum mobile side gutters, mostly white/neutral backgrounds and 16px card corners. Buttons are at least 48px high. Keep a purposeful mix of large editorial sections and smaller cards; do not turn the entire page into an endless grid of boxes. Use restrained outlines and subtle shadows. Icons: one consistent outlined set, such as Lucide, rather than emoji icons.

Motion is subtle: 160–220ms UI transitions and an optional small reveal that does not hide server-rendered content. Respect reduced motion. Do not add hero auto-rotation, autoplay audio/video, parallax that obstructs reading, a loading screen, exaggerated counters or persistent pulsing elements.

## Information architecture

All public routes exist under `/bn` and `/en`. `/` redirects to `/bn`. Below paths are locale-relative. Slugs remain identical in both languages; navigation inserts the active locale. Main navigation: Home, About, Our ecosystem, Services, Network, Insights, Contact, plus the language control and “Connect with Abad”. Services has relevant dropdown links. The connect action opens an accessible three-choice panel for farmer, buyer or partner.

| Route | Required content and interactions | Primary action |
| --- | --- | --- |
| `/` | Homepage sections in the order below | Farmer / buyer / partner interest |
| `/about` | Overview, vision, missions, principles, operating model, revenue approach and four leadership cards | Contact |
| `/ecosystem` | Interactive but lightweight farmer/data/production/hub/buyer model; accessible equivalent text | Choose a participant journey |
| `/services` | Eight services with planned status, audience, short description and detail link | Open relevant service |
| `/services/[slug]` | Correct service title, intro, three benefits, audience, related services, planned status and contextual form action | Context-specific enquiry |
| `/farmers` | Farmer benefits, three-step journey, accessible farmer form | Farmer interest |
| `/buyers` | Institutional sourcing explanation, four benefits, process and buyer requirements form | Sourcing enquiry |
| `/partners` | Hub, logistics, technology, finance and sponsor collaboration types; general, hub and sponsor tabs/forms | Partnership enquiry |
| `/network` | Searchable division/district controls for 64 districts, selected district detail and truthful status | Prefill hub/farmer enquiry |
| `/marketplace` | Planned marketplace explainer, product categories and intentional no-live-store state | Farmer interest / buyer enquiry |
| `/insights` | Approved articles only, category/search controls and intentional empty state | Read article or contact |
| `/insights/[slug]` | Only approved/published article routes; accessible article layout and related posts | Related reading |
| `/faq` | Search/filter or category headings for all 12 questions | Contact |
| `/contact` | General enquiry and configured company contacts | Send enquiry |
| `/privacy` | Accurate website enquiry privacy draft, finalized for actual providers/configuration | Contact for privacy requests |
| `/terms` | Website-use draft, honest service/availability descriptions | Contact |
| unmatched route | Localized 404 with working links | Home / services |

Also implement a protected admin route outside public locale navigation: `/admin`. It receives and manages enquiries in live mode. Never expose it as a user registration or farmer dashboard. A polished admin-unconfigured screen can exist locally if the backend is unavailable; it must not reveal any leads.

## Homepage composition

1. **Header.** 76–84px desktop height. Clear Abad wordmark, navigation, active-page state, বাংলা / EN switch and an outlined connect action. It can overlay the hero but must have an intentional readable background at every scroll position. At mobile widths, use an accessible drawer with all destinations and language controls, focus management and Escape-to-close.
2. **Hero.** A large photograph-led agricultural composition at roughly 680–760px desktop height. Use 58% text / 42% human or farm visual emphasis without covering faces. Dark navy gradient supports a clear headline and 2-line introduction. Primary farmer interest, secondary buyer enquiry; partner as a quiet text action. Use one static primary slide by default. Two optional variations exist in the supplied content and can use labelled manual controls. On mobile use natural content height, text above/over a deliberately composed image, with two comfortably sized actions stacked. No unverified achievements.
3. **Goal strip.** Three attributes: a explicitly labelled 64-district expansion goal, farmer brands and data/technology. These are model statements, not operating metrics. Do not animate them as live counters.
4. **Problem and approach.** Four paired rows or compact cards connecting producer identity, market access, resource coordination and logistics. Farmer-friendly language, no invented sector statistics.
5. **Planned services.** Feature four main themes in large image/text modules, with access to all eight service details. Strong variation in composition: farmer brands + market access; data + traceability; hubs + logistics; production/training/technology. Label availability consistently.
6. **Connected ecosystem.** A clear five-part diagram with supporting two-column text, responsive top-down stacking on small screens. Selecting a step shows its explanation; keyboard users get the same content. Do not render a decorative map as an official district map.
7. **Participation journeys.** Accessible tabs: farmer, buyer, partner. Each includes what the person provides, what discussion follows, and the relevant enquiry button. Applying is not automatic approval. Tab state can live in the URL query and must not lose locale.
8. **Network ambition.** A designed Bangladesh-themed region panel, division chips and a district selector, with all districts marked planned/unpublished. Use an accurately licensed outline/map only if sourced and verified; otherwise use a region/list UI with no geographic claims. Choose a district and prefill it in the enquiry journey.
9. **Leadership.** Four equally weighted cards with the actual supplied names and roles. No invented degrees, employers, founder labels, awards or executive portraits. Detailed responsibilities belong on About, in accessible expand/collapse areas.
10. **Insights.** If approved articles exist, show the most recent three. All included sample editorial drafts start unpublished; otherwise show a thoughtful compact empty state. Never invent a news event, publication date, partnership announcement or press coverage.
11. **FAQ.** Show a useful selection of the supplied questions in accessible accordions and link to all questions. Preserve clear financing and coverage answers.
12. **Closing invitation and footer.** Strong contact invitation, role-specific links, privacy/terms, configured contact channels and dynamic copyright year. Newsletter is omitted until its email provider and consent process work. Social icons and WhatsApp appear only when Abad’s own URLs/number are configured.

## Page-specific detail

**About:** Keep vision and missions visually distinct. Explain how the business coordinates data, hubs, stores and transport. Show proposed revenue categories as an explanation of the model, not a price sheet. Display the five internal departments if useful under “How we organize the work”. Four executive cards use the exact Bangla names: রুবায়েত হোসেন — CEO; নায়েফ মোঃ হাসিব — CTO; ইউসুব ইলিয়াস — COO; শাহরিয়ার তানভীর আহমদ — CFO. English spellings in the corpus are provisional transliterations and need owner confirmation before release.

**Services:** Implement these eight stable slugs: `farmer-brands`, `market-access`, `data-traceability`, `hubs-logistics`, `contract-farming`, `inputs-technology`, `training-demonstration`, `field-events`. Each detail route resolves only to known content and returns a localized 404 for any other slug. Normalize the brief’s “কন্টাক্ট ফার্মিং” to “চুক্তিভিত্তিক কৃষি / Contract farming”.

**Farmers:** Use 18px Bangla text, visible labels and small helpful examples. Ask only for minimal enquiry information. Provide no NID upload, bank input, GPS collection or automated credit decision. Do not describe the enquiry form as a completed digital-store registration.

**Buyers:** A buyer can request a product specification, approximate quantity + unit, frequency, desired date and district. State that price, availability and delivery are discussed separately. No quote generator invents prices.

**Partners:** Hub tab highlights storage/collection/transport experience. General partnership allows logistics, technology, finance or other collaboration. Sponsor tab is an enquiry about approved future events; do not import ticket prices, dates, venue, benefits or sponsorship rates from other projects.

**Network:** district IDs come from the included authoritative geographic list. District presence means a geographical enquiry option, not an operational hub. A prefilled district must survive navigation and be validated on the server. A list/select is required even if a map exists. Never label a selected district “active” by default.

**Marketplace:** Phase-one public route has no fictitious farmer stores, prices, ratings, quantities or checkout. It clearly describes a planned multi-vendor platform and allows role-specific interest. A future authentic product list can be added only after inventory and readiness exist.

**Insights:** Three supplied articles are original educational drafts, not claims that real events happened. Preview drafts only in protected admin or a local-only preview. Hide their public URLs and remove them from sitemap/RSS until owner-approved publication. No fake date is added.

## Copy and factual rules

Use `content/site-copy.bn.json` and `.en.json` as the primary public corpus and preserve stable IDs. `content/company-model.json` preserves the operating model and all four executives’ responsibilities. Public copy is intentionally shorter than internal duties; do not paste the long company brief into hero cards.

No production page displays `TODO`, fake email/phone, “lorem ipsum”, undocumented pricing or fabricated evidence. Keep missing values in `site.config.json` and `OWNER_INPUTS.md`. In local preview a discreet preview badge can state that data submission is disabled. In public release, either live enquiry capture must work or the form must give an honest unavailable state with a configured real contact option.

64 districts is a vision/target. 2% commission and a tag costing Tk 70 vs Tk 60 are internal illustrative examples, not published rates. biniyog.io is an example in the brief, not an existing partner. There is no funding guarantee, guaranteed maximum sale price, fixed return, insurance claim, approved escrow claim, existing app or partner logo unless the owner supplies verification.

Treat company registration status, addresses, contact channels and team portraits as unset until provided. No CDB contact number or email is reused as Abad contact information. No WeGro information is relabelled as Abad.

## SEO and accessibility

Use unique bilingual titles/descriptions; start from the home SEO fields and create equivalent descriptive metadata for each route. Locale-aware canonical/hreflang links and a sitemap include only genuine public routes and published articles. `noindex` admin, drafts, demo previews and any staging deployment. Until a real production domain is configured, use relative links and no invented production canonical URL.

Use semantic landmarks, one H1 per page, meaningful H2 headings, keyboard navigation, skip link, visible focus, associated form labels, field errors and an error summary that focuses on submit failure. Status updates use appropriate aria-live regions. Accordions use real buttons with `aria-expanded`; drawers and tabs follow established accessible patterns. Hit targets ≥44×44px; main form actions ≥48px tall. Verify contrast to WCAG AA and 200% zoom. Do not rely on colour alone for status.

The switcher must maintain route, relevant query and scroll intent where practical. Both Bangla and English must work without hydration mismatch. Select/district labels localize; IDs remain stable. No English-only validation messages in Bangla mode.

## Deferred transactional platform

Prepare the extension described in `specs/FUTURE_PLATFORM.md`, without pretending it is live. Phase one does not accept money, approve loans or operate investment transactions. The next stage includes authorized farmer accounts, genuine storefronts/inventory, orders, verified fulfillment, tagging records and approved provider integrations. This separation follows the supplied business-model maturity, not an arbitrary reduction to a single landing page.
````

## Embedded file: `specs/TECHNICAL_BUILD.md`

````markdown
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
````

## Embedded file: `specs/ACCEPTANCE_TESTS.md`

````markdown
# Acceptance matrix for Antigravity

These are checks to run on the implemented website. They are not claims that a website already exists or that these tests have passed in this handoff-only task.

| ID | Check | Passing evidence |
| --- | --- | --- |
| A01 | Install and production build | Chosen package manager installs from the committed lockfile; build exits successfully |
| A02 | Types/lint | Relevant project checks pass with no suppressed errors to hide failures |
| A03 | Public routes | Every route in product spec renders in both languages; all eight known service slugs work |
| A04 | 404 handling | Unknown service/article/locale behaves deliberately and has a usable localized fallback |
| A05 | Navigation | Desktop/dropdown/mobile links reach the correct locale route; connect choices work |
| A06 | Language switch | Equivalent route preserved; selected district/context retained; metadata and html lang update |
| A07 | Responsive layout | Screenshots at 360, 390, 768, 1024 and 1440px show readable text and no overflow in BN/EN |
| A08 | Bengali typography | Vowel marks and wrapped headlines remain visible at mobile width and 200% zoom |
| A09 | Keyboard | Menu, dialog, tabs, accordions, selectors and forms work without a mouse; focus visible and restored |
| A10 | Contrast/reduced motion | WCAG AA contrast measured for actions/text; reduced-motion preference respected |
| A11 | Goal honesty | 64 districts always labelled as goal/planned; no fabricated metrics or active hub marker |
| A12 | Corporate data | All four names/roles match authoritative Bangla; no invented credentials/portraits/contacts |
| A13 | Reference independence | No WeGro image, contact, partner, testimonial, return percentage or investment offer reused |
| A14 | Form empty/invalid | Requiredness and conditional rules correct; localized errors focus the first invalid field |
| A15 | Mobile digits | Valid national/international Bangladesh numbers and Bengali digits normalize; invalid prefixes rejected |
| A16 | Buyer quantity/date | Quantity+unit pair enforced, positive quantity, past date rejected in Asia/Dhaka |
| A17 | Demo behaviour | Banner visible before input; valid form shows demo message; no network POST of PII, database write, localStorage or fake receipt |
| A18 | Live persistence | Controlled synthetic fixture stores exactly one lead and consent metadata, returns reference and appears only in authorized admin |
| A19 | Live failure/retry | Simulated database/network error preserves entries; retry uses same key and returns same durable record |
| A20 | Idempotency conflict | Same key + changed payload returns 409; no data from another record disclosed |
| A21 | Validation server-side | Direct invalid POST, unknown keys, body >16KB, absent consent and invalid district rejected |
| A22 | Abuse controls | Honeypot, wrong origin and throttle tests produce deliberate responses; concurrent replicas use shared throttling |
| A23 | Credentials | No service-role key/hash secret/notification key in browser bundles, source maps, content JSON or logs |
| A24 | Table access | Unauthenticated and regular authenticated clients cannot read/write leads or admin membership directly |
| A25 | Admin authorization | Logged-out, nonmember and viewer mutation/export calls fail; membership cannot be self-granted |
| A26 | Admin workflow | Allowed role can list/filter/view/update; CSV formula payload is neutralized; changes recorded privately |
| A27 | Newsletter | Feature hidden without provider; if enabled, double opt-in and unsubscribe work; lead consent does not subscribe |
| A28 | Marketplace | Planned/empty presentation clear, no fake live product listing/checkout/ratings |
| A29 | Article publication | Drafts hidden publicly and excluded from sitemap; approved bilingual articles have correct routes |
| A30 | Assets | No broken image; source logo not stretched; media rights and factual alt text recorded |
| A31 | Metadata | Actual domain-based canonical/hreflang only, correct localized title/description, no fake schema claims |
| A32 | Staging/privacy | Admin/staging/drafts noindex; no unexpected tracking; privacy copy matches implemented providers |
| A33 | Performance | Report measured production build conditions and scores; no false claim of target compliance |
| A34 | Full handoff | README, env roles, migration/admin setup, owner-input list, screenshots and truthful walkthrough supplied |

Use a small meaningful E2E set covering navigation/localization, role-specific form validation, demo honesty, live idempotency and admin authorization. Supplement with manual visual/accessibility review. Do not generate dozens of tests that merely repeat static content. For backend verification use synthetic contacts on an isolated test project; never contact or message actual people as a test. Report untested live paths as untested, not passed.

## Owner release checklist

- Correct Abad domain, company email, phone/WhatsApp and address entered where available; no borrowed CDB contacts.
- Bangla leadership names checked; English spellings and actual portraits supplied/confirmed.
- Company registration status and public identifiers verified before any registered-company badge.
- Photos cleared for use; header logo version supplied or owner accepts the text-header fallback.
- Actual service/hub statuses confirmed; planned features remain labelled planned.
- Privacy/terms and privacy contact reflect the backend, hosting, notifications and actual retention choices.
- Live lead persistence and private admin authorization proven with synthetic data.
- Production credentials securely configured; no secrets in repository/client.
- Public deployment reviewed separately; no payment or finance transaction feature enabled by this first-release task.
````

## Embedded file: `specs/FUTURE_PLATFORM.md`

````markdown
# Transactional platform extension

The brief's multi-vendor marketplace, livestock records, contract farming and finance coordination require a separate operational product stage after the corporate website and enquiry system. This file keeps that model ready for implementation without giving the public a false impression that transactions already work.

## Future user roles

Farmer/vendor; buyer; hub operator; field agent; logistics operator; finance coordinator; content/operations administrator. Permissions are explicit and scoped. A farmer must never view another farmer's private records. Hub operators see only assigned consignments and minimum required contact information. Credit/finance access is separate from ordinary marketplace roles.

## Required modules and data relationships

| Module | Core entities | Required behaviour |
| --- | --- | --- |
| Identity | users, farmer_profiles, approved_roles, consents | Phone-first onboarding through a configured OTP provider, optional assisted onboarding, role approval and editable profile |
| Farmer brands | vendor_stores, media_assets, store_reviews | Owner-controlled store details; moderated publication; no fabricated reviews |
| Catalog | products, categories, units, inventory_batches, availability | Actual stock, unit/grade, season, price history, photo rights and source information |
| Orders | carts, order_groups, vendor_orders, order_items | Multi-vendor order splitting, stock reservation, expiry, server-side price totals and status history |
| Fulfillment | hubs, consignments, assignments, shipments, proof_of_delivery | Verified locations, collection/storage steps, transport assignments, cancellation and return handling |
| Payments | payment_intents, provider_events, settlements, refunds | Approved gateway, server-verified webhooks, idempotency, reconciliation and owner-approved settlement rules |
| Livestock records | livestock, animal_tags, farm_events, record_visibility | Unique tag IDs, controlled health/production records, auditable edits and a limited public view if consent allows |
| Contract farming | production_plans, agreements, milestones, input_allocations | Actual written agreements and operator review; no automatic lending decision |
| Finance coordination | partner_refs, approvals, disbursement_records, settlement_records | Authorized provider integrations and controlled access; no fabricated loan or return promises |
| Reporting | operational_metrics, audit_events | Verified metrics with evidence/date/source; private operational data is not automatically an impact counter |

Recommended relation design: one vendor has many products and batches; one buyer order group has many vendor orders; vendor orders have order items and shipments; shipments reference assigned hubs; one farm has many livestock records; one animal has versioned tag and event records. Store raw provider event IDs uniquely to prevent duplicate settlements. Use separate finance records with stricter authorization and retention.

## Transaction lifecycle

Orders: draft → reserved → pending payment → paid → accepted → packed → dispatched → delivered. Exception branches include expired, cancelled, payment failed, return requested and refunded. Never move a record to “paid” based on the user's browser redirect alone. Stock reservation and release must be transactional. Delivery completion and settlement are distinct events.

Contract/funding workflows: interest → eligibility discussion → provider review → separately signed agreement → approved operational plan → monitored milestones → reconciliation. An enquiry form does not create a loan, contract or investment commitment. Do not launch an “invest now” button merely because the reference has one.

## Data tagging and public visibility

QR/RFID/ear tags identify records; they do not, by themselves, certify ownership, health or quality. If a public tag lookup is enabled, expose a deliberate minimal projection with the owner's permission. Hide private contact details, precise home location, financial records and sensitive livestock health history. Never use sequential IDs that allow unrestricted scraping of farmer records. All authenticated updates record actor/time and prior value safely.

## Readiness gates

Before activating commerce: actual inventory and suppliers, buyer/vendor terms, supported areas, logistics process, returns/refunds, accounting approach, approved fees, production security review and gateway configuration. Before money/funding/escrow features: owner-approved operating scope, provider agreements and verified legal/operational arrangements. These are concrete implementation dependencies, not a claim of compliance or legal advice.

The corporate website can be completed and reviewed while these operational decisions are outstanding. Next-stage dashboards can be designed with explicitly synthetic fixtures in a private preview, but cannot be called live stores, loan approvals or genuine orders.
````

## Embedded file: `site.config.json`

````json
{
  "companyNameBn": "আবাদ লিমিটেড",
  "companyNameEn": "Abad Limited",
  "defaultLocale": "bn",
  "locales": ["bn", "en"],
  "timezone": "Asia/Dhaka",
  "productionUrl": null,
  "email": null,
  "phone": null,
  "whatsapp": null,
  "addressBn": null,
  "addressEn": null,
  "privacyContactEmail": null,
  "socialLinks": {},
  "logoSource": "/brand/abad-logo-source.png",
  "headerLogo": null,
  "registration": {
    "verified": false,
    "number": null,
    "tradeLicence": null,
    "tin": null,
    "bin": null
  },
  "featureFlags": {
    "manualHeroSlides": false,
    "newsletter": false,
    "publishedInsights": false,
    "activeHubDirectory": false,
    "liveMarketplace": false,
    "payments": false,
    "financingTransactions": false,
    "publicTraceability": false,
    "analytics": false
  },
  "activeDistricts": [],
  "confirmedPartners": [],
  "approvedTestimonials": [],
  "verifiedMetrics": [],
  "ownerReview": {
    "teamEnglishSpellings": false,
    "privacyAndTerms": false,
    "photographyRights": false,
    "serviceAvailability": false
  }
}
````

## Embedded file: `.env.example`

````text
# Copy to .env.local after Antigravity creates the application.
# Demo mode works without credentials and NEVER stores or transmits enquiry PII.
ABAD_DATA_MODE=demo
NEXT_PUBLIC_SITE_URL=

# Supabase: public project URL and anon key support the admin authentication client.
# All enquiry/database writes happen server-side. Never expose the service role key.
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Long random server-only key for request fingerprints / rate-limit identifiers.
ABAD_REQUEST_HASH_SECRET=

# Optional notification/newsletter provider. Newsletter stays hidden until wired.
RESEND_API_KEY=
ABAD_FROM_EMAIL=
ABAD_NOTIFICATION_EMAIL=

# Site owner settings are in site.config.json. Do not put secrets there.
# No payment, escrow or financing credentials are needed for phase one.
````

## Embedded file: `design/tokens.css`

````css
/* Proposed Abad web palette: navy identity from the supplied logo source,
   agricultural green actions, warm neutral canvas. This is not a measured WeGro palette. */
:root {
  --color-brand-navy: #062b41;
  --color-brand-navy-deep: #041f2e;
  --color-brand-green: #176b47;
  --color-brand-green-dark: #0f5034;
  --color-accent-harvest: #e1ae4a;
  --color-ink: #122c2d;
  --color-muted: #50625f;
  --color-canvas: #f7f8f3;
  --color-surface: #ffffff;
  --color-surface-soft: #eaf3ec;
  --color-border: #d7e0d8;
  --color-danger: #a92f2f;
  --color-focus: #165ca4;
  --font-en: var(--font-inter), Arial, sans-serif;
  --font-bn: var(--font-noto-bengali), "Noto Sans Bengali", sans-serif;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --container-max: 1200px;
  --radius-button: 8px;
  --radius-card: 16px;
  --radius-large: 24px;
  --shadow-card: 0 12px 36px rgba(6,43,65,.07);
  --transition-ui: 160ms ease;
  --section-gap: clamp(48px, 6.5vw, 96px);
}

html[lang="bn"] { font-family: var(--font-bn); }
html[lang="en"] { font-family: var(--font-en); }
body { color: var(--color-ink); background: var(--color-canvas); }
:focus-visible { outline: 3px solid var(--color-focus); outline-offset: 4px; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto !important; }
}
````

## Embedded file: `design/ASSET_BRIEF.md`

````markdown
# Asset brief

## Included logo source

`public/brand/abad-logo-source.png` is the user's existing Abad logo design, retrieved from the named Abad asset on 14 October 2026. It is a 1254 × 1254 raster image with a navy background and a white wordmark, a leaf, and the word LIMITED. Preserve it unchanged. It is not a transparent header logo or vector asset.

Display it with its aspect ratio intact in an appropriately sized navy brand panel or the footer. For the first local header, use a clear text wordmark “আবাদ” / “Abad” with “Limited” until a production header lockup is supplied. Do not stretch the square source into a short horizontal image, turn it into a tiny unreadable square, invent a certification mark, or claim a new symbol is the approved logo. If a transparent or vector version is supplied later, update the centralized asset configuration.

## Photography art direction

Use Bangladesh-specific, respectful agricultural imagery: farmers as knowledgeable producers, real farms, local crop collection, practical technology and shared transport. Natural light, believable materials and workwear, uncluttered framing. Avoid generic foreign farms, exaggerated poverty, decorative sci-fi dashboards, distorted hands or vehicles, and visibly generated executive headshots. Keep colour treatment consistent with navy and agricultural green.

The site must look complete before these photos arrive: use intentional navy/green editorial panels and CSS/SVG process illustrations. The fallback is a designed composition, not a broken image or a giant generic photo placeholder. A CSS ecosystem illustration is appropriate; do not generate an inaccurate geographic map.

| File expected by app | Subject | Minimum dimensions | Placement | Bangla alt text | English alt text |
| --- | --- | --- | --- | --- | --- |
| `/images/hero-farmer.webp` | Bangladeshi farmer inspecting produce with a field team; left side quiet for text | 1920×1080; mobile crop 800×1000 | Primary hero | বাংলাদেশের খামারে উৎপাদন নিয়ে আলোচনা | Discussing production at a farm in Bangladesh |
| `/images/farm-technology.webp` | Suitable solar irrigation or drip-irrigation demonstration | 1600×1000 | Optional manual hero slide and technology page | খামারে সেচ প্রযুক্তির ব্যবহার | Irrigation technology in use on a farm |
| `/images/hub-logistics.webp` | Produce crates, a small local collection space and one realistic delivery vehicle | 1600×1000 | Logistics section | কৃষিপণ্য সংগ্রহ ও পরিবহন সমন্বয় | Coordinating collection and transport of agricultural produce |
| `/images/farmer-brand.webp` | Producer arranging product information in a modest work setting | 1200×900 | Farmer page | কৃষকের নিজস্ব পণ্যের পরিচিতি তৈরি | Preparing information about a farmer's products |
| `/images/b2b-sourcing.webp` | Real produce selection at an institutional buying location | 1200×900 | Buyer page | ব্যবসায়িক ক্রেতার পণ্য বাছাই | A business buyer reviewing agricultural products |
| `/images/livestock-tag.webp` | Ear tag on one healthy cow, no invented readable tag ID | 1200×900 | Traceability page | গবাদিপশুর পরিচিতি ট্যাগ | A livestock identification tag |
| `/images/field-learning.webp` | Adult farmers discussing practical technology outdoors | 1200×900 | Training or field initiatives | মাঠ পর্যায়ে কৃষকদের অভিজ্ঞতা বিনিময় | Farmers exchanging experience in the field |
| `/images/team/ceo.webp` etc. | Owner-supplied portraits of the four actual executives | 800×1000 each | About/leadership | Actual supplied name and role | Actual supplied name and role |

Keep the `src`, bilingual `alt`, focal point, rights holder, licence, attribution requirement and actual file existence in a media manifest. No source above is supplied as a real photograph in this kit. These are acquisition instructions. Do not download WeGro images. If using stock, retain the applicable licence; do not hotlink a third party's image endpoint in production.

Use responsive AVIF/WebP variants, explicit width/height and appropriate crops. Target ≤250KB for the main hero on desktop and ≤120KB for section images where visual quality permits. Do not bake navigation, hero copy or Bengali text into raster imagery. Hero and section text must remain real selectable text.

The four leadership cards must use typography and an understated neutral frame until authentic portraits arrive. Do not use lookalike AI portraits or photographs of unrelated people.
````

## Embedded file: `content/site-copy.bn.json`

````json
{
  "schemaVersion": 1,
  "brand": {
    "name": "আবাদ লিমিটেড",
    "shortName": "আবাদ",
    "tagline": "কৃষকের পরিচয়। প্রযুক্তির শক্তি। সবার বাজার।",
    "description": "কৃষক, ক্রেতা ও স্থানীয় উদ্যোক্তাকে যুক্ত করে একটি ডাটা-ভিত্তিক কৃষি ইকোসিস্টেম গড়ে তোলার উদ্যোগ।"
  },
  "nav": [
    {
      "id": "home",
      "href": "/",
      "label": "হোম"
    },
    {
      "id": "about",
      "href": "/about",
      "label": "আমাদের সম্পর্কে"
    },
    {
      "id": "ecosystem",
      "href": "/ecosystem",
      "label": "আমাদের ইকোসিস্টেম"
    },
    {
      "id": "services",
      "href": "/services",
      "label": "সেবাসমূহ"
    },
    {
      "id": "network",
      "href": "/network",
      "label": "নেটওয়ার্ক"
    },
    {
      "id": "insights",
      "href": "/insights",
      "label": "জ্ঞান ও আপডেট"
    },
    {
      "id": "contact",
      "href": "/contact",
      "label": "যোগাযোগ"
    }
  ],
  "common": {
    "join": "আবাদ-এর সঙ্গে যুক্ত হোন",
    "farmerCta": "কৃষক হিসেবে আগ্রহ জানান",
    "buyerCta": "পণ্যের চাহিদা জানান",
    "partnerCta": "পার্টনার হিসেবে আগ্রহ জানান",
    "learnMore": "বিস্তারিত জানুন",
    "readMore": "পড়ুন",
    "planned": "পরিকল্পিত সেবা",
    "target": "সম্প্রসারণের লক্ষ্য",
    "comingSoon": "চালুর প্রস্তুতিতে",
    "skipToContent": "মূল কনটেন্টে যান",
    "openMenu": "মেনু খুলুন",
    "closeMenu": "মেনু বন্ধ করুন",
    "selectLanguage": "ভাষা নির্বাচন",
    "required": "আবশ্যক",
    "optional": "ঐচ্ছিক",
    "submit": "অনুসন্ধান পাঠান",
    "sending": "পাঠানো হচ্ছে…",
    "liveSuccess": "আপনার তথ্য গ্রহণ করা হয়েছে। রেফারেন্স নম্বরটি সংরক্ষণ করুন।",
    "demoSuccess": "ডেমো যাচাই সম্পন্ন হয়েছে। আপনার তথ্য আবাদ টিমের কাছে পাঠানো বা সংরক্ষণ করা হয়নি।",
    "failure": "এই মুহূর্তে অনুসন্ধান পাঠানো যায়নি। আপনার লেখা বজায় আছে; আবার চেষ্টা করুন।",
    "demoBanner": "প্রিভিউ মোড: এই ফর্ম তথ্য পাঠায় বা সংরক্ষণ করে না।",
    "reference": "রেফারেন্স নম্বর",
    "privacyConsent": "আমার অনুসন্ধানের বিষয়ে যোগাযোগের জন্য তথ্য ব্যবহারে সম্মতি দিচ্ছি এবং গোপনীয়তা পেজটি পড়েছি।",
    "newsletterConsent": "আমি আবাদ-এর ভবিষ্যৎ আপডেট ইমেইলে পেতে চাই।",
    "newsletterPending": "সাবস্ক্রিপশন নিশ্চিত করতে আপনার ইমেইলের নির্দেশনা অনুসরণ করুন।",
    "notFoundTitle": "পেজটি পাওয়া যায়নি",
    "notFoundBody": "হোম পেজে ফিরে যান অথবা আমাদের সেবাসমূহ দেখুন।",
    "noResults": "এই অনুসন্ধানে কোনো ফল পাওয়া যায়নি। ফিল্টার পরিবর্তন করুন।",
    "validation": {
      "name": "২ থেকে ১০০ অক্ষরের নাম লিখুন।",
      "phone": "সঠিক বাংলাদেশি মোবাইল নম্বর লিখুন।",
      "email": "সঠিক ইমেইল ঠিকানা লিখুন।",
      "district": "তালিকা থেকে একটি জেলা নির্বাচন করুন।",
      "consent": "অনুসন্ধান পাঠাতে সম্মতি প্রয়োজন।",
      "quantity": "শূন্যের চেয়ে বেশি একটি পরিমাণ লিখুন।",
      "message": "২০ থেকে ২০০০ অক্ষরের বার্তা লিখুন।",
      "rateLimit": "অল্প সময়ে একাধিক অনুরোধ হয়েছে। কিছুক্ষণ পর চেষ্টা করুন।"
    }
  },
  "home": {
    "seo": {
      "title": "আবাদ লিমিটেড | কৃষক থেকে ক্রেতা, প্রযুক্তির সংযোগে",
      "description": "কৃষকের নিজস্ব ব্র্যান্ড, সরাসরি বাজার, কৃষি ডাটা, স্থানীয় হাব ও স্মার্ট লজিস্টিকস নিয়ে আবাদ লিমিটেডের পরিকল্পনা জানুন।"
    },
    "eyebrow": "বাংলাদেশের কৃষির জন্য একটি সংযুক্ত ভবিষ্যৎ",
    "heroSlides": [
      {
        "id": "farmer-identity",
        "title": "কৃষকের পরিচয় থেকে\nদেশজুড়ে বাজার।",
        "body": "কৃষক, ক্রেতা ও স্থানীয় উদ্যোক্তাকে এক নেটওয়ার্কে যুক্ত করে ডাটা, প্রযুক্তি ও বাজারের নতুন সম্ভাবনা গড়ে তুলছে আবাদ।",
        "image": "/images/hero-farmer.webp"
      },
      {
        "id": "technology",
        "title": "তথ্যের ভিত্তিতে কৃষি।\nপ্রযুক্তির সঙ্গে অগ্রগতি।",
        "body": "খামারের রেকর্ড, গবাদিপশুর পরিচিতি ও বাস্তব প্রযুক্তি প্রদর্শনের মাধ্যমে আরও তথ্যভিত্তিক কৃষির পথে আমাদের পরিকল্পনা।",
        "image": "/images/farm-technology.webp"
      },
      {
        "id": "shared-network",
        "title": "স্থানীয় হাব।\nআরও বড় বাজারের সম্ভাবনা।",
        "body": "সংগ্রহ, সংরক্ষণ ও শেয়ার্ড পরিবহনকে সমন্বয় করে কৃষক ও ক্রেতার দূরত্ব কমিয়ে আনার লক্ষ্য।",
        "image": "/images/hub-logistics.webp"
      }
    ],
    "objectiveCards": [
      {
        "id": "district-goal",
        "value": "৬৪ জেলা",
        "label": "নেটওয়ার্ক সম্প্রসারণের লক্ষ্য"
      },
      {
        "id": "farmer-brand",
        "value": "নিজস্ব ব্র্যান্ড",
        "label": "উৎপাদকের পরিচিতিকে সামনে আনা"
      },
      {
        "id": "data",
        "value": "ডাটা ও প্রযুক্তি",
        "label": "তথ্যের ভিত্তিতে কৃষি সমন্বয়"
      }
    ],
    "problemsHeading": "কৃষকের চ্যালেঞ্জ, আমাদের পরিকল্পিত সমাধান",
    "problemsIntro": "উৎপাদন থেকে বিক্রয় পর্যন্ত প্রতিটি ধাপকে একসঙ্গে ভাবার উদ্যোগ।",
    "problemSolutions": [
      {
        "id": "identity",
        "problem": "উৎপাদকের পরিচয় আড়ালে থাকে",
        "solution": "নিজস্ব ডিজিটাল স্টোর ও ব্র্যান্ড পরিচিতি"
      },
      {
        "id": "access",
        "problem": "বাজারের তথ্য ও বড় ক্রেতার সঙ্গে যোগাযোগ সীমিত",
        "solution": "কৃষক ও ক্রেতার সরাসরি যোগাযোগের চ্যানেল"
      },
      {
        "id": "resources",
        "problem": "উপকরণ, প্রযুক্তি ও মূলধনের সমন্বয় কঠিন",
        "solution": "উৎপাদন পরিকল্পনা ও সম্ভাব্য সহযোগীর সঙ্গে সংযোগ"
      },
      {
        "id": "logistics",
        "problem": "সংগ্রহ ও পরিবহনে বিচ্ছিন্নতা থাকে",
        "solution": "স্থানীয় হাব ও শেয়ার্ড লজিস্টিকসের পরিকল্পনা"
      }
    ],
    "servicesHeading": "আবাদ-এর পরিকল্পিত সেবাসমূহ",
    "servicesIntro": "কৃষকের পরিচিতি, উৎপাদন ও বাজারকে একই ইকোসিস্টেমে যুক্ত করার লক্ষ্য।",
    "ecosystemHeading": "একটি ইকোসিস্টেমে কৃষির প্রতিটি সংযোগ",
    "ecosystemIntro": "কৃষক ও খামার থেকে ডাটা, স্থানীয় হাব এবং ক্রেতা পর্যন্ত প্রতিটি ধাপে যোগাযোগ ও সমন্বয়ের পরিকল্পনা।",
    "journeyHeading": "আপনি যেভাবে যুক্ত হতে পারেন",
    "networkHeading": "স্থানীয় উদ্যোক্তা থেকে দেশব্যাপী নেটওয়ার্ক",
    "networkIntro": "বাংলাদেশের ৬৪ জেলায় কৃষক, ক্রেতা ও স্থানীয় হাবকে যুক্ত করা আমাদের দীর্ঘমেয়াদি লক্ষ্য। আপনার এলাকার সম্ভাবনা নিয়ে আমাদের সঙ্গে আলোচনা করুন।",
    "teamHeading": "আবাদ-এর নেতৃত্ব",
    "insightsHeading": "কৃষি, প্রযুক্তি ও বাজারের ভাবনা",
    "faqHeading": "আপনার প্রশ্ন, সহজ উত্তর",
    "ctaTitle": "আপনার কৃষি উদ্যোগের পরবর্তী সংযোগ শুরু হোক আবাদ-এর সঙ্গে।",
    "ctaBody": "আপনি কৃষক, ব্যবসায়িক ক্রেতা বা স্থানীয় উদ্যোক্তা—আপনার আগ্রহ ও প্রয়োজন আমাদের জানান।"
  },
  "about": {
    "title": "কৃষককে কেন্দ্র করে, ভবিষ্যতের কৃষির জন্য।",
    "intro": "আবাদ লিমিটেড কৃষক, ক্রেতা ও স্থানীয় উদ্যোক্তার মধ্যে যোগাযোগ, তথ্য ও সরবরাহ ব্যবস্থাকে একটি সমন্বিত ইকোসিস্টেমে আনার পরিকল্পনা করছে। আমরা চাই কৃষক নিজের পণ্যের পাশাপাশি নিজের পরিচিতি ও ব্র্যান্ডও গড়ে তুলতে পারেন।",
    "visionTitle": "আমাদের ভিশন",
    "vision": "বাংলাদেশের কৃষিখাতকে ডাটা-ড্রিভেন টেকনোলজির মাধ্যমে আধুনিকীকরণ করে এমন একটি স্বয়ংসম্পূর্ণ ইকোসিস্টেম গড়ে তোলা, যেখানে ৬৪ জেলার প্রান্তিক কৃষক থেকে সাধারণ ক্রেতা পর্যন্ত সবাই একটি শক্তিশালী, স্বচ্ছ ও লাভজনক নেটওয়ার্কের অংশ হতে পারবেন।",
    "missionTitle": "আমাদের মিশন",
    "missions": [
      "কৃষক ও ক্রেতার মধ্যে সরাসরি যোগাযোগের চ্যানেল তৈরি করে মধ্যস্বত্বভোগীর ওপর নির্ভরতা কমানোর সুযোগ তৈরি।",
      "প্রযুক্তির সাহায্যে আধুনিক সাপ্লাই চেইন, চুক্তিভিত্তিক কৃষি ও স্মার্ট লজিস্টিকস গড়ে তোলা।",
      "মাল্টি-ব্র্যান্ড ইকোসিস্টেমের মাধ্যমে কৃষককে স্বতন্ত্র ব্র্যান্ড হিসেবে পরিচিত হওয়ার সুযোগ দেওয়া।"
    ],
    "valuesTitle": "যে নীতিগুলোকে গুরুত্ব দিই",
    "values": [
      {
        "title": "কৃষককে কেন্দ্রে রাখা",
        "body": "উৎপাদকের পরিচয়, প্রয়োজন ও সিদ্ধান্তকে গুরুত্ব দেওয়া।"
      },
      {
        "title": "স্বচ্ছ তথ্য",
        "body": "পণ্য, প্রক্রিয়া ও শর্ত সহজভাবে জানানো।"
      },
      {
        "title": "প্রযুক্তির সহজ ব্যবহার",
        "body": "বাংলা ভাষা ও সহজ অভিজ্ঞতার মাধ্যমে অংশগ্রহণের সুযোগ।"
      },
      {
        "title": "স্থানীয় সহযোগিতা",
        "body": "স্থানীয় উদ্যোক্তা, কৃষক ও ক্রেতার সঙ্গে সমন্বয়।"
      }
    ],
    "businessModelTitle": "একটি টেকসই ব্যবসায়িক মডেলের পরিকল্পনা",
    "businessModelIntro": "স্বচ্ছ শর্তের ভিত্তিতে প্ল্যাটফর্ম, ট্রেডিং, লজিস্টিকস ও মাঠ পর্যায়ের কার্যক্রম থেকে আয় গড়ে তোলার পরিকল্পনা রয়েছে।",
    "revenueStreams": [
      {
        "title": "প্ল্যাটফর্ম ফি",
        "body": "প্রযোজ্য কমিশন বা সাবস্ক্রিপশনভিত্তিক সেবা।"
      },
      {
        "title": "ট্রেডিং মার্জিন",
        "body": "সম্মত শর্তে কৃষিপণ্য সংগ্রহ ও বিক্রয় থেকে আয়।"
      },
      {
        "title": "লজিস্টিকস ও প্রযুক্তি সেবা",
        "body": "পরিবহন সমন্বয় ও প্রয়োজনীয় প্রযুক্তিপণ্য সরবরাহ।"
      },
      {
        "title": "স্পন্সরশিপ ও আয়োজন",
        "body": "অনুমোদিত মাঠ পর্যায়ের আয়োজন ও সংশ্লিষ্ট সহযোগিতা।"
      }
    ],
    "team": [
      {
        "id": "ceo",
        "nameBn": "রুবায়েত হোসেন",
        "nameEn": "Rubayet Hossain",
        "role": "CEO",
        "title": "প্রধান নির্বাহী কর্মকর্তা",
        "bio": "আবাদ-এর সামগ্রিক ভিশন, ব্যবসায়িক দিকনির্দেশনা এবং সম্প্রসারণে নেতৃত্ব দেন। কৃষক, কর্পোরেট ক্রেতা ও সহযোগীদের মধ্যে দীর্ঘমেয়াদি সম্পর্ক গড়ে তোলাই তাঁর কার্যপরিধির মূল অংশ।",
        "responsibilities": [
          "কৃষকদের ডাটা-ভিত্তিক প্ল্যাটফর্মে যুক্ত করে স্বতন্ত্র ব্র্যান্ড হিসেবে প্রতিষ্ঠার দীর্ঘমেয়াদি কৌশল প্রণয়ন।",
          "এগ্রো-কোম্পানি, কর্পোরেট প্রতিষ্ঠান, রেস্টুরেন্ট চেইন ও সুপারশপের সঙ্গে B2B সম্পর্ক ও বিক্রয় চুক্তি গড়ে তোলা।",
          "সম্ভাব্য ফান্ডিং প্ল্যাটফর্ম ও স্পন্সরদের সঙ্গে সম্পর্ক তৈরি এবং কৃষিযাত্রা ও মাঠ পর্যায়ের আয়োজনে সহযোগিতা সংগ্রহ।",
          "আবাদ-এর ব্র্যান্ড কৌশল ও মাল্টি-ব্র্যান্ড ইকোসিস্টেমের প্রচার পরিকল্পনায় নেতৃত্ব।"
        ],
        "photo": null
      },
      {
        "id": "cto",
        "nameBn": "নায়েফ মোঃ হাসিব",
        "nameEn": "Nayeef Mohammad Hashib",
        "role": "CTO",
        "title": "চিফ টেকনোলজি অফিসার",
        "bio": "আবাদ-এর ডিজিটাল প্ল্যাটফর্ম, ডাটা ব্যবস্থাপনা ও প্রযুক্তিগত নিরাপত্তার দায়িত্বে আছেন। বাংলায় সহজ ব্যবহারযোগ্য অভিজ্ঞতা এবং ভবিষ্যৎ সম্প্রসারণের উপযোগী অবকাঠামো তাঁর কাজের কেন্দ্র।",
        "responsibilities": [
          "কৃষকের স্টোর, প্রোফাইল ও অর্ডার ড্যাশবোর্ডসহ মাল্টি-ভেন্ডর ওয়েবসাইট ও অ্যাপের উন্নয়ন।",
          "গবাদিপশুর ট্যাগিং সফটওয়্যার, ভবিষ্যৎ IoT সংযোগ এবং কৃষকদের কেন্দ্রীয় ডাটাবেজের স্থাপত্য তৈরি।",
          "স্কেলেবল ক্লাউড অবকাঠামো, নিরাপদ পেমেন্ট সংযোগ এবং অনুমোদিত হলে এসক্রো প্রক্রিয়ার প্রযুক্তিগত ব্যবস্থাপনা।",
          "প্রান্তিক কৃষকের জন্য সহজ, বাংলা-ভিত্তিক UI/UX ও ডাটা সুরক্ষা নিশ্চিত করা।"
        ],
        "photo": null
      },
      {
        "id": "coo",
        "nameBn": "ইউসুব ইলিয়াস",
        "nameEn": "Yousub Ilias",
        "role": "COO",
        "title": "চিফ অপারেটিং অফিসার",
        "bio": "মাঠ পর্যায়ের কার্যক্রম, কৃষক সম্পর্ক ও সরবরাহ ব্যবস্থাপনায় নেতৃত্ব দেন। স্থানীয় হাব, পরিবহন এবং পণ্যের মান নিয়ন্ত্রণের মধ্যে সমন্বয় গড়ে তোলেন।",
        "responsibilities": [
          "৬৪ জেলায় সম্প্রসারণের লক্ষ্যে স্থানীয় এজেন্ট ও ডিলারদের সঙ্গে জেলা ও উপজেলা পর্যায়ের হাব পরিকল্পনা ও পরিচালনা।",
          "খামার থেকে ক্রেতা পর্যন্ত সরবরাহ ব্যবস্থাপনা এবং নিজস্ব ও শেয়ার্ড পরিবহনের সমন্বয়।",
          "চুক্তিভিত্তিক কৃষি, সোলার পাম্প, ড্রিপ ইরিগেশন ও নতুন প্রযুক্তির মাঠ পর্যায়ের বাস্তবায়ন ও প্রশিক্ষণ।",
          "সংগ্রহ, সংরক্ষণ ও ডেলিভারির প্রতিটি ধাপে কৃষিপণ্য ও গবাদিপশুর মান নিয়ন্ত্রণ প্রক্রিয়া তদারকি।"
        ],
        "photo": null
      },
      {
        "id": "cfo",
        "nameBn": "শাহরিয়ার তানভীর আহমদ",
        "nameEn": "Shahriar Tanvir Ahmad",
        "role": "CFO",
        "title": "চিফ ফিন্যান্সিয়াল অফিসার",
        "bio": "আবাদ-এর আর্থিক পরিকল্পনা, আয়-ব্যয়ের হিসাব, মূলধন বণ্টন ও প্রতিষ্ঠান গঠনের কাজ পরিচালনা করেন। কার্যকর বাজেট ও স্বচ্ছ হিসাব ব্যবস্থার ওপর গুরুত্ব দেন।",
        "responsibilities": [
          "কমিশন, সাবস্ক্রিপশন, ট্রেডিং মার্জিন, লজিস্টিকস ও প্রযুক্তিপণ্য থেকে সম্ভাব্য আয় পরিকল্পনা ও হিসাব।",
          "অনুমোদিত সহযোগীর মাধ্যমে পাওয়া কৃষি অর্থায়নের বণ্টন, হিসাব, চুক্তির শর্ত ও নিষ্পত্তির তদারকি।",
          "স্থানীয় স্টোরেজ ও শেয়ার্ড লজিস্টিকসসহ পরিচালন ব্যয় নিয়ন্ত্রণ এবং বিপণন ও পরিবহনের বাজেট।",
          "RJSC-তে MoA/AoA, ট্রেড লাইসেন্স, TIN, VAT ও করসংক্রান্ত প্রয়োজনীয় প্রস্তুতি ও পরিপালন সমন্বয়।"
        ],
        "photo": null
      }
    ]
  },
  "services": {
    "title": "উৎপাদন থেকে বাজার, সমন্বয়ের পরিকল্পনা।",
    "intro": "আবাদ-এর প্রতিটি পরিকল্পিত সেবা কৃষক, ক্রেতা ও স্থানীয় উদ্যোক্তার মধ্যে একটি প্রয়োজনীয় সংযোগ তৈরি করতে চায়।",
    "items": [
      {
        "id": "farmer-brands",
        "icon": "Store",
        "title": "কৃষকের নিজস্ব ব্র্যান্ড ও ডিজিটাল স্টোর",
        "summary": "কৃষকের পরিচিতি, পণ্যের গল্প ও সরাসরি বিক্রির সুযোগকে এক জায়গায় আনার পরিকল্পনা।",
        "intro": "আবাদ এমন একটি মাল্টি-ভেন্ডর প্ল্যাটফর্ম গড়ে তুলতে চায়, যেখানে কৃষক নিজের পরিচিতি ও পণ্যের তথ্য দিয়ে একটি স্বতন্ত্র স্টোর তৈরি করতে পারবেন। ক্রেতা পণ্যের পাশাপাশি উৎপাদকের পরিচয়ও জানতে পারবেন।",
        "benefits": [
          "নিজস্ব স্টোর ও ব্র্যান্ড পরিচিতি",
          "পণ্য, মৌসুম ও উৎপাদন এলাকার তথ্য",
          "সরাসরি ক্রেতার আগ্রহ ও অনুসন্ধান পাওয়ার সুযোগ"
        ],
        "audience": "কৃষক, খামারি ও কৃষি উদ্যোক্তা",
        "ctaType": "farmer"
      },
      {
        "id": "market-access",
        "icon": "Handshake",
        "title": "সরাসরি বাজার ও B2B সংযোগ",
        "summary": "রেস্টুরেন্ট, সুপারশপ, পাইকার ও কর্পোরেট ক্রেতাদের সঙ্গে উৎপাদকদের সংযুক্ত করার উদ্যোগ।",
        "intro": "স্থানীয় বাজারের বাইরে ক্রেতা খুঁজে পাওয়া এবং চাহিদা অনুযায়ী সরবরাহ পরিকল্পনা করতে আবাদ কৃষক ও ব্যবসায়িক ক্রেতাদের মধ্যে যোগাযোগ গড়ে তুলবে। পণ্যের মান, পরিমাণ, সময় ও মূল্য আলোচনার ভিত্তিতে নির্ধারিত হবে।",
        "benefits": [
          "ব্যবসায়িক ক্রেতার চাহিদা সংগ্রহ",
          "পণ্যের মান ও পরিমাণের ভিত্তিতে সম্ভাব্য সরবরাহকারী খোঁজা",
          "দীর্ঘমেয়াদি সরবরাহ আলোচনার সুযোগ"
        ],
        "audience": "কৃষক, পাইকার, রেস্টুরেন্ট, সুপারশপ ও প্রতিষ্ঠান",
        "ctaType": "buyer"
      },
      {
        "id": "data-traceability",
        "icon": "ScanLine",
        "title": "কৃষি ডাটা ও গবাদিপশুর ট্রেসেবিলিটি",
        "summary": "কৃষক, খামার ও উৎপাদনের তথ্য সংরক্ষণ এবং গবাদিপশুর পরিচিতি ট্যাগ ব্যবস্থার পরিকল্পনা।",
        "intro": "কেন্দ্রীয় ডাটাবেজে কৃষক ও উৎপাদনের প্রাসঙ্গিক তথ্য রাখা এবং গবাদিপশুর জন্য ইউনিক ট্যাগ ব্যবহারের লক্ষ্য রয়েছে। অনুমতি অনুযায়ী প্রয়োজনীয় তথ্য দেখানো হবে; ব্যক্তিগত ও সংবেদনশীল তথ্য সুরক্ষিত থাকবে।",
        "benefits": [
          "খামার ও উৎপাদনের ধারাবাহিক রেকর্ড",
          "গবাদিপশুর ইউনিক পরিচিতি ও অনুমতিভিত্তিক তথ্য",
          "মান যাচাই ও পরিকল্পনার জন্য তথ্যের ব্যবহার"
        ],
        "audience": "খামারি, কৃষক ও অপারেশন টিম",
        "ctaType": "farmer"
      },
      {
        "id": "hubs-logistics",
        "icon": "Truck",
        "title": "স্থানীয় হাব ও স্মার্ট লজিস্টিকস",
        "summary": "জেলা ও উপজেলা পর্যায়ের হাব এবং শেয়ার্ড পরিবহনের মাধ্যমে সরবরাহ সমন্বয়ের লক্ষ্য।",
        "intro": "স্থানীয় উদ্যোক্তা ও ডিলারদের সহযোগিতায় সংগ্রহ, সংরক্ষণ ও ডিস্ট্রিবিউশন হাব গড়ে তোলার পরিকল্পনা রয়েছে। নিজস্ব ভ্যান ও অন্যান্য লজিস্টিক সেবার সঙ্গে সমন্বয় করে পরিবহনের খরচ ও সময় ব্যবস্থাপনায় গুরুত্ব দেওয়া হবে।",
        "benefits": [
          "স্থানীয় উদ্যোক্তার জন্য হাব পরিচালনার সুযোগ",
          "পণ্য সংগ্রহ ও সংরক্ষণে সমন্বয়",
          "শেয়ার্ড পরিবহন ও ডেলিভারি পরিকল্পনা"
        ],
        "audience": "স্থানীয় উদ্যোক্তা, ডিলার ও লজিস্টিক প্রতিষ্ঠান",
        "ctaType": "hub"
      },
      {
        "id": "contract-farming",
        "icon": "Sprout",
        "title": "চুক্তিভিত্তিক কৃষি ও অর্থায়ন সংযোগ",
        "summary": "উৎপাদন পরিকল্পনা, কৃষি উপকরণ ও সম্ভাব্য অর্থায়ন সহযোগীর সঙ্গে সংযোগ গড়ে তোলার উদ্যোগ।",
        "intro": "কৃষকের উৎপাদন পরিকল্পনার সঙ্গে প্রয়োজনীয় বীজ, সার, সরঞ্জাম ও সম্ভাব্য মূলধনের সমন্বয় করার লক্ষ্য রয়েছে। প্রতিটি প্রকল্পের যোগ্যতা, চুক্তি, অর্থায়ন ও ঝুঁকির বিষয় আলাদাভাবে নির্ধারিত হবে। ওয়েবসাইটে আগ্রহ জানানো অর্থায়নের নিশ্চয়তা নয়।",
        "benefits": [
          "উৎপাদনের প্রয়োজন বোঝা ও পরিকল্পনা",
          "উপকরণ ও সম্ভাব্য সহযোগীর সঙ্গে সংযোগ",
          "স্পষ্ট চুক্তি ও হিসাব ব্যবস্থার লক্ষ্য"
        ],
        "audience": "কৃষক, খামারি ও সম্ভাব্য অর্থায়ন সহযোগী",
        "ctaType": "farmer"
      },
      {
        "id": "inputs-technology",
        "icon": "Sun",
        "title": "কৃষি উপকরণ ও আধুনিক প্রযুক্তি",
        "summary": "প্রয়োজন অনুযায়ী কৃষি উপকরণ, ট্যাগিং টুল, সোলার পাম্প ও ড্রিপ ইরিগেশনের সঙ্গে পরিচয়।",
        "intro": "কৃষকের প্রয়োজন অনুযায়ী মানসম্মত উপকরণ ও উপযোগী প্রযুক্তির সঙ্গে পরিচয় করিয়ে দেওয়া এবং সরবরাহের পথ তৈরি করা আবাদ-এর পরিকল্পনার অংশ। মূল্য, প্রাপ্যতা ও সাপোর্ট প্রতিটি অফারের শর্ত অনুযায়ী জানানো হবে।",
        "benefits": [
          "প্রয়োজনভিত্তিক উপকরণ বাছাই",
          "সোলার পাম্প ও ড্রিপ ইরিগেশন সম্পর্কে ধারণা",
          "ট্যাগিং টুল ও সরঞ্জামের তথ্য"
        ],
        "audience": "কৃষক, খামারি ও প্রযুক্তি সরবরাহকারী",
        "ctaType": "farmer"
      },
      {
        "id": "training-demonstration",
        "icon": "GraduationCap",
        "title": "প্রশিক্ষণ ও মাঠ পর্যায়ের প্রদর্শনী",
        "summary": "বাস্তব খামারে প্রযুক্তির ব্যবহার দেখে শেখা এবং কৃষক থেকে কৃষকের মধ্যে জ্ঞান বিনিময়।",
        "intro": "একটি খামারে নতুন প্রযুক্তি বা উন্নত বীজের ব্যবহার দেখিয়ে আশেপাশের কৃষকদের শেখার সুযোগ তৈরি করা হবে। লক্ষ্য হলো সহজ ভাষায় বাস্তব অভিজ্ঞতা ভাগ করা এবং কৃষককে নিজের প্রয়োজন অনুযায়ী সিদ্ধান্ত নিতে সহায়তা করা।",
        "benefits": [
          "বাস্তব ব্যবহার দেখার সুযোগ",
          "প্রশ্ন, আলোচনা ও অভিজ্ঞতা বিনিময়",
          "স্থানীয় কৃষকদের মধ্যে শেখার নেটওয়ার্ক"
        ],
        "audience": "কৃষক, কৃষি উদ্যোক্তা ও প্রশিক্ষণ সহযোগী",
        "ctaType": "farmer"
      },
      {
        "id": "field-events",
        "icon": "MapPin",
        "title": "কৃষিযাত্রা ও মাঠ পর্যায়ের আয়োজন",
        "summary": "কৃষি উদ্যোগ ভিজিট, অভিজ্ঞতা বিনিময় ও স্পন্সরদের সঙ্গে সহযোগিতার সম্ভাবনা।",
        "intro": "কৃষিযাত্রা ও কৃষকদের নিয়ে মাঠ পর্যায়ের আয়োজনের মাধ্যমে কৃষি উদ্যোগ, প্রযুক্তি সরবরাহকারী এবং সম্ভাব্য সহযোগীদের মধ্যে যোগাযোগ গড়ে তোলার পরিকল্পনা রয়েছে। অনুমোদিত আয়োজনের বিস্তারিত তথ্য প্রকাশ করা হবে।",
        "benefits": [
          "কৃষি উদ্যোগের অভিজ্ঞতা জানার সুযোগ",
          "কৃষক ও উদ্যোক্তার সঙ্গে যোগাযোগ",
          "ব্র্যান্ডের জন্য প্রাসঙ্গিক স্পন্সরশিপের আলোচনা"
        ],
        "audience": "কৃষি উদ্যোক্তা, উপকরণ কোম্পানি ও স্পন্সর",
        "ctaType": "sponsor"
      }
    ]
  },
  "ecosystem": {
    "title": "খামার, তথ্য, হাব ও বাজার—একসঙ্গে।",
    "intro": "কৃষিকে বিচ্ছিন্ন সেবা হিসেবে দেখার পরিবর্তে আবাদ একটি সমন্বিত নেটওয়ার্কের পরিকল্পনা করছে। উৎপাদকের পরিচিতি, উপকরণ, ডাটা, পরিবহন ও ক্রেতার চাহিদা এই মডেলের বিভিন্ন অংশ।",
    "steps": [
      {
        "id": "farm",
        "title": "কৃষক ও খামার",
        "body": "কৃষিকাজের ধরন, উৎপাদন এলাকা ও সক্ষমতার প্রাসঙ্গিক তথ্য।"
      },
      {
        "id": "data",
        "title": "ডাটা ও পরিচিতি",
        "body": "অনুমতিভিত্তিক রেকর্ড, কৃষকের ব্র্যান্ড ও গবাদিপশুর পরিচিতি।"
      },
      {
        "id": "production",
        "title": "উৎপাদন সহায়তা",
        "body": "উপকরণ, প্রশিক্ষণ ও সম্ভাব্য চুক্তিভিত্তিক সহযোগিতা।"
      },
      {
        "id": "hub",
        "title": "স্থানীয় হাব ও লজিস্টিকস",
        "body": "সংগ্রহ, সংরক্ষণ ও পরিবহনের সমন্বয়।"
      },
      {
        "id": "market",
        "title": "ক্রেতা ও বাজার",
        "body": "সরাসরি যোগাযোগ, পণ্যের চাহিদা এবং সম্ভাব্য সরবরাহ আলোচনা।"
      }
    ],
    "dataNote": "ব্যক্তিগত কৃষক তথ্য, অর্থায়নের নথি বা স্বাস্থ্যসংক্রান্ত রেকর্ড স্বয়ংক্রিয়ভাবে পাবলিক করা হবে না।",
    "phaseNote": "এটি আবাদ-এর পরিকল্পিত কার্যপদ্ধতির পরিচিতি। বাস্তব সেবা ও প্রাপ্যতা এলাকা এবং প্রস্তুতি অনুযায়ী প্রকাশ করা হবে।"
  },
  "farmers": {
    "title": "আপনার খামার। আপনার পরিচয়। আরও বড় সম্ভাবনা।",
    "intro": "কৃষক ও খামারিদের নিজস্ব ব্র্যান্ড, বাজার সংযোগ ও তথ্যভিত্তিক কাজের সুযোগ তৈরি করতে আবাদ-এর পরিকল্পনায় আপনার আগ্রহ জানান।",
    "benefits": [
      {
        "title": "নিজস্ব ব্র্যান্ড",
        "body": "আপনার পরিচয় ও পণ্যের তথ্য তুলে ধরার সুযোগ।"
      },
      {
        "title": "বাজার সংযোগ",
        "body": "স্থানীয় বাজারের বাইরে সম্ভাব্য ক্রেতার সঙ্গে আলোচনা।"
      },
      {
        "title": "উৎপাদন পরিকল্পনা",
        "body": "উপকরণ, প্রশিক্ষণ ও সম্ভাব্য সহায়তার সমন্বয়।"
      },
      {
        "title": "তথ্যের ব্যবহার",
        "body": "খামার ও উৎপাদনের প্রাসঙ্গিক রেকর্ড রাখার লক্ষ্য।"
      }
    ],
    "steps": [
      "আপনার আগ্রহ ও কৃষিকাজের তথ্য জানান",
      "সম্ভাব্য সেবা ও পরবর্তী ধাপ নিয়ে আলোচনা",
      "প্রযোজ্য যাচাই ও শর্তের ভিত্তিতে যুক্ত হওয়ার পরিকল্পনা"
    ],
    "formTitle": "কৃষক হিসেবে আগ্রহ জানান",
    "formIntro": "সংক্ষিপ্ত তথ্য দিন। এখানে জমির দলিল, জাতীয় পরিচয়পত্র বা ব্যাংকের তথ্য প্রয়োজন নেই।"
  },
  "buyers": {
    "title": "উৎপাদকের সঙ্গে সরাসরি সংযোগে আপনার সরবরাহের পরিকল্পনা।",
    "intro": "রেস্টুরেন্ট, সুপারশপ, পাইকার বা প্রতিষ্ঠানের জন্য পণ্যের চাহিদা জানান। মান, পরিমাণ, সময় ও ডেলিভারি এলাকা অনুযায়ী সম্ভাব্য সরবরাহ নিয়ে আলোচনা করা যাবে।",
    "benefits": [
      "পণ্যের ধরন ও মান অনুযায়ী চাহিদা জানানো",
      "পরিমাণ ও সময়ের ভিত্তিতে সরবরাহ আলোচনা",
      "উৎপাদন এলাকার তথ্য জানার সুযোগ",
      "নিয়মিত B2B সরবরাহের সম্ভাবনা"
    ],
    "steps": [
      "পণ্যের চাহিদা জানান",
      "সম্ভাব্য সরবরাহ ও শর্ত নিয়ে আলোচনা",
      "সম্মত হলে আলাদা সরবরাহ চুক্তি"
    ],
    "formTitle": "ব্যবসায়িক পণ্যের চাহিদা"
  },
  "partners": {
    "title": "স্থানীয় অভিজ্ঞতা যুক্ত হোক বৃহত্তর কৃষি নেটওয়ার্কে।",
    "intro": "আবাদ-এর পরিকল্পনায় হাব উদ্যোক্তা, লজিস্টিক প্রতিষ্ঠান, প্রযুক্তি সরবরাহকারী, সম্ভাব্য অর্থায়ন সহযোগী এবং স্পন্সরদের সঙ্গে কাজের সুযোগ রয়েছে।",
    "types": [
      {
        "id": "hub",
        "title": "হাব ও ডিলার",
        "body": "স্থানীয় সংগ্রহ, স্টোরেজ ও ডিস্ট্রিবিউশন সক্ষমতা নিয়ে আলোচনা।"
      },
      {
        "id": "logistics",
        "title": "লজিস্টিকস",
        "body": "শেয়ার্ড পরিবহন ও ডেলিভারি সমন্বয়ের সম্ভাবনা।"
      },
      {
        "id": "technology",
        "title": "উপকরণ ও প্রযুক্তি",
        "body": "কৃষকের প্রয়োজন অনুযায়ী পণ্য ও প্রযুক্তি পরিচিতি।"
      },
      {
        "id": "finance",
        "title": "অর্থায়ন সহযোগিতা",
        "body": "সম্ভাব্য চুক্তিভিত্তিক কৃষি সহায়তার আলোচনা।"
      },
      {
        "id": "sponsor",
        "title": "স্পন্সরশিপ",
        "body": "অনুমোদিত মাঠ আয়োজনের প্রাসঙ্গিক সহযোগিতা।"
      }
    ],
    "formTitle": "পার্টনারশিপ নিয়ে আলোচনা করুন",
    "hubFormTitle": "হাব পার্টনার হিসেবে আগ্রহ জানান",
    "sponsorFormTitle": "স্পন্সরশিপের আগ্রহ জানান"
  },
  "network": {
    "title": "লক্ষ্য ৬৪ জেলা। শুরু স্থানীয় সংযোগ থেকে।",
    "intro": "বাংলাদেশের প্রতিটি জেলার কৃষক, ক্রেতা ও উদ্যোক্তাকে একটি নেটওয়ার্কে আনার লক্ষ্য নিয়ে আবাদ-এর পরিকল্পনা। আপনার জেলা নির্বাচন করে আগ্রহ জানান।",
    "status": "এই জেলার কার্যক্রমের প্রাপ্যতা এখনো প্রকাশ করা হয়নি।",
    "legendPlanned": "পরিকল্পিত সম্প্রসারণ",
    "districtSelect": "আপনার জেলা নির্বাচন করুন",
    "selectedDistrict": "নির্বাচিত জেলা",
    "noActiveHubs": "চালু হাবের যাচাইকৃত তালিকা প্রকাশের পর এখানে দেখানো হবে।"
  },
  "marketplace": {
    "title": "কৃষকের নিজস্ব স্টোরের একটি ভবিষ্যৎ।",
    "intro": "নিজস্ব ব্র্যান্ডের অধীনে কৃষিপণ্য তুলে ধরার একটি মাল্টি-ভেন্ডর মার্কেটপ্লেস আবাদ-এর পরিকল্পনার অংশ।",
    "notice": "মার্কেটপ্লেস চালুর প্রস্তুতিতে। এখানে এখন কোনো লাইভ স্টোর, মূল্য বা কেনাকাটা নেই।",
    "categories": [
      {
        "id": "produce",
        "title": "সবজি ও ফল"
      },
      {
        "id": "grains",
        "title": "শস্য"
      },
      {
        "id": "livestock",
        "title": "গবাদিপশু ও দুগ্ধ"
      },
      {
        "id": "fish",
        "title": "মাছ ও জলজ পণ্য"
      },
      {
        "id": "inputs",
        "title": "কৃষি উপকরণ"
      }
    ],
    "emptyTitle": "যাচাইকৃত স্টোর প্রকাশের অপেক্ষায়",
    "emptyBody": "কৃষক হিসেবে আগ্রহ জানান অথবা ব্যবসায়িক ক্রেতা হিসেবে চাহিদা পাঠান।"
  },
  "insights": {
    "title": "কৃষি, প্রযুক্তি ও বাজারের সংযোগ নিয়ে।",
    "intro": "আবাদ-এর পরিকল্পনা, জ্ঞানভিত্তিক আলোচনা এবং ভবিষ্যৎ মাঠ পর্যায়ের আপডেট।",
    "emptyTitle": "আপডেট প্রকাশের প্রস্তুতি চলছে",
    "emptyBody": "অনুমোদিত লেখা ও মাঠের আপডেট প্রকাশ হলে এখানে পাওয়া যাবে।",
    "all": "সব বিষয়",
    "articles": [
      {
        "id": "farmer-as-a-brand",
        "slug": "farmer-as-a-brand",
        "category": "brands",
        "isDraft": true,
        "publishedAt": null,
        "title": "কৃষক যখন নিজেই একটি ব্র্যান্ড",
        "excerpt": "পণ্যের সঙ্গে উৎপাদকের পরিচয় ও অভিজ্ঞতা যুক্ত হলে নতুন সম্পর্কের সুযোগ তৈরি হয়।",
        "paragraphs": [
          "কৃষিপণ্যের পেছনে একজন মানুষের শ্রম, অভিজ্ঞতা এবং একটি খামারের গল্প থাকে। সেই পরিচিতি ক্রেতার সামনে তুলে ধরতে পারলে কৃষক কেবল পণ্য সরবরাহকারী হিসেবে সীমাবদ্ধ থাকেন না।",
          "একটি ডিজিটাল স্টোরে কৃষক নিজের উৎপাদন এলাকা, পণ্যের ধরন, মৌসুম এবং সরবরাহের সক্ষমতা তুলে ধরতে পারেন। সঠিক ও নিয়মিত হালনাগাদ তথ্য ক্রেতাকে আলোচনা শুরু করতে সাহায্য করে।",
          "আবাদ-এর পরিকল্পনা হলো কৃষকদের এই পরিচিতি তৈরির জন্য একটি সহজ প্ল্যাটফর্ম গড়ে তোলা। লক্ষ্য থাকবে তথ্যের স্বচ্ছতা, পণ্যের পরিচয় এবং কৃষক ও ক্রেতার সরাসরি যোগাযোগে।"
        ]
      },
      {
        "id": "traceability-starts-with-data",
        "slug": "traceability-starts-with-data",
        "category": "technology",
        "isDraft": true,
        "publishedAt": null,
        "title": "উৎপাদনের তথ্য থেকেই শুরু ট্রেসেবিলিটি",
        "excerpt": "সহজ রেকর্ড এবং নির্ভরযোগ্য পরিচিতি ভবিষ্যতের তথ্যভিত্তিক কৃষির ভিত্তি।",
        "paragraphs": [
          "কোন খামারে একটি পণ্য উৎপাদিত হয়েছে, কবে সংগ্রহ করা হয়েছে এবং কোন ধাপে কী তথ্য যুক্ত হয়েছে—এসব নথিবদ্ধ করা তথ্যভিত্তিক কাজের প্রথম ধাপ।",
          "গবাদিপশুর ইউনিক ট্যাগ পরিচিতি ও রেকর্ডকে একসঙ্গে যুক্ত করতে সাহায্য করতে পারে। তবে ট্যাগ থাকলেই তথ্য যাচাইকৃত হয়ে যায় না; রেকর্ড হালনাগাদ ও যাচাইয়ের প্রক্রিয়াও প্রয়োজন।",
          "আবাদ-এর ডাটা ব্যবস্থাপনার পরিকল্পনায় অনুমতিভিত্তিক তথ্য ব্যবহার গুরুত্বপূর্ণ। ক্রেতার জন্য প্রাসঙ্গিক তথ্য এবং কৃষকের ব্যক্তিগত তথ্যের প্রবেশাধিকার আলাদাভাবে নির্ধারণ করা হবে।"
        ]
      },
      {
        "id": "local-hubs-shared-logistics",
        "slug": "local-hubs-shared-logistics",
        "category": "logistics",
        "isDraft": true,
        "publishedAt": null,
        "title": "স্থানীয় হাব, সমন্বিত সরবরাহ",
        "excerpt": "স্থানীয় উদ্যোক্তা ও শেয়ার্ড পরিবহনকে সঙ্গে নিয়ে সরবরাহ ব্যবস্থার পরিকল্পনা।",
        "paragraphs": [
          "কৃষিপণ্য সংগ্রহ, সাময়িক সংরক্ষণ এবং ক্রেতার কাছে পাঠানোর মধ্যে ভালো সমন্বয় প্রয়োজন। স্থানীয় হাব এই যোগাযোগের একটি কেন্দ্র হতে পারে।",
          "হাব পরিচালনায় এলাকার উদ্যোক্তা বা ডিলার যুক্ত হলে স্থানীয় বাস্তবতা বুঝে কাজ পরিকল্পনা করা সহজ হয়। পণ্যের ধরন অনুযায়ী সংরক্ষণ ও ব্যবস্থাপনার প্রয়োজনও ভিন্ন হয়।",
          "আবাদ নিজস্ব ভ্যানের পাশাপাশি অন্যান্য লজিস্টিক সেবার সঙ্গে সমন্বয়ের একটি মডেল বিবেচনা করছে। সেবা এলাকা, সক্ষমতা ও সময় যাচাই করে ডেলিভারি পরিকল্পনা করা হবে।"
        ]
      }
    ]
  },
  "contact": {
    "title": "আপনার প্রয়োজন ও সম্ভাবনা নিয়ে কথা বলি।",
    "intro": "কৃষক হিসেবে যুক্ত হতে, পণ্যের চাহিদা জানাতে বা সহযোগিতা নিয়ে আলোচনা করতে এই ফর্ম ব্যবহার করুন।",
    "formTitle": "আপনার বার্তা",
    "missingContact": "এই ফর্মে আপনার অনুসন্ধান জানাতে পারেন।",
    "newsletterTitle": "আবাদ-এর ভবিষ্যৎ আপডেট জানুন",
    "newsletterBody": "আপনার সম্মতিতে প্রকাশিত আপডেট ইমেইলে পাঠানো হবে।"
  },
  "faq": {
    "title": "সাধারণ জিজ্ঞাসা",
    "items": [
      {
        "id": "what-is-abad",
        "category": "general",
        "q": "আবাদ লিমিটেড কী?",
        "a": "আবাদ লিমিটেড একটি ডাটা-ভিত্তিক কৃষি ইকোসিস্টেম গড়ে তোলার উদ্যোগ। এর পরিকল্পনায় রয়েছে কৃষকের নিজস্ব ব্র্যান্ড, সরাসরি বাজার সংযোগ, স্থানীয় হাব, স্মার্ট লজিস্টিকস এবং প্রযুক্তিভিত্তিক কৃষি সহায়তা।"
      },
      {
        "id": "join-farmer",
        "category": "farmers",
        "q": "আমি কৃষক হিসেবে কীভাবে যুক্ত হব?",
        "a": "কৃষকদের পেজের আগ্রহ ফর্মে আপনার নাম, যোগাযোগ, জেলা এবং কৃষিকাজের ধরন জানান। ফর্ম গ্রহণের পর সম্ভাব্য পরবর্তী ধাপ নিয়ে আলোচনা করা যাবে। ফর্ম পূরণ মানেই স্টোর সক্রিয় বা চুক্তি অনুমোদিত হওয়া নয়।"
      },
      {
        "id": "national-network",
        "category": "network",
        "q": "আবাদ কি ইতোমধ্যে ৬৪ জেলায় কাজ করছে?",
        "a": "৬৪ জেলায় একটি নেটওয়ার্ক গড়ে তোলা আমাদের সম্প্রসারণের লক্ষ্য। চালু হাব বা সেবার তথ্য যাচাই হওয়ার পর সংশ্লিষ্ট এলাকায় প্রকাশ করা হবে।"
      },
      {
        "id": "commission",
        "category": "farmers",
        "q": "প্ল্যাটফর্ম ব্যবহারের খরচ কত?",
        "a": "কমিশন বা সাবস্ক্রিপশনভিত্তিক একটি মডেল বিবেচনায় রয়েছে। প্রযোজ্য ফি, কী সেবা পাওয়া যাবে এবং নিষ্পত্তির শর্ত চূড়ান্ত অফার বা চুক্তিতে জানানো হবে।"
      },
      {
        "id": "buyer-sourcing",
        "category": "buyers",
        "q": "ব্যবসায়িক ক্রেতা কীভাবে পণ্যের চাহিদা জানাবেন?",
        "a": "ক্রেতাদের পেজে প্রতিষ্ঠানের পরিচিতি, পণ্যের ধরন, আনুমানিক পরিমাণ, প্রয়োজনের সময় এবং ডেলিভারি জেলা জানান। সরবরাহ ও মূল্য সম্পর্কে আলোচনা করে সিদ্ধান্ত নেওয়া হবে।"
      },
      {
        "id": "hub-partner",
        "category": "partners",
        "q": "স্থানীয় হাব পার্টনার হওয়ার সুযোগ আছে কি?",
        "a": "স্থানীয় উদ্যোক্তা ও ডিলারদের আগ্রহ জানতে হাব পার্টনার ফর্ম রয়েছে। স্থান, অবকাঠামো ও প্রয়োজনীয় সক্ষমতা যাচাই করে সম্ভাব্য সহযোগিতা নিয়ে আলোচনা করা হবে।"
      },
      {
        "id": "funding",
        "category": "farmers",
        "q": "আবেদন করলেই কি অর্থায়ন পাওয়া যাবে?",
        "a": "অর্থায়ন নির্ভর করবে উপযুক্ত প্রকল্প, সহযোগী, মূল্যায়ন ও চুক্তির শর্তের ওপর। ওয়েবসাইটের ফর্ম কোনো ঋণ অনুমোদন বা বিনিয়োগ গ্রহণ প্রক্রিয়া নয়।"
      },
      {
        "id": "tagging",
        "category": "technology",
        "q": "গবাদিপশুর ট্যাগিং কেন প্রয়োজন?",
        "a": "ইউনিক ট্যাগের মাধ্যমে পশুর পরিচিতি ও প্রাসঙ্গিক রেকর্ড একসঙ্গে রাখার পরিকল্পনা রয়েছে। কোন তথ্য প্রকাশ করা হবে তা অনুমতি ও সেবার শর্ত অনুযায়ী নির্ধারিত হবে।"
      },
      {
        "id": "stores",
        "category": "marketplace",
        "q": "আমি কি এখনই অনলাইনে পণ্য কিনতে পারব?",
        "a": "মাল্টি-ভেন্ডর মার্কেটপ্লেস আমাদের পরিকল্পনার অংশ। লেনদেন চালু হওয়ার আগে পণ্য, মূল্য, ডেলিভারি ও পেমেন্টের শর্ত প্রকাশ করা হবে। আপাতত ব্যবসায়িক ক্রেতারা চাহিদা জানাতে পারবেন।"
      },
      {
        "id": "data",
        "category": "technology",
        "q": "আমার তথ্য কীভাবে ব্যবহার হবে?",
        "a": "আপনার অনুসন্ধান বা আগ্রহের বিষয়ে যোগাযোগ ও সম্ভাব্য সেবা সমন্বয়ের জন্য প্রাসঙ্গিক তথ্য ব্যবহার করা হবে। ফর্ম জমা দেওয়ার আগে গোপনীয়তা পেজের তথ্য পড়ুন।"
      },
      {
        "id": "sponsorship",
        "category": "partners",
        "q": "স্পন্সর হিসেবে কীভাবে যুক্ত হব?",
        "a": "পার্টনারদের পেজে স্পন্সরশিপের আগ্রহ জানান। অনুমোদিত আয়োজন, দর্শক, কার্যক্রম এবং প্রাসঙ্গিক সুবিধা নিয়ে আলাদাভাবে প্রস্তাব তৈরি করা হবে।"
      },
      {
        "id": "fair-price",
        "category": "farmers",
        "q": "ন্যায্য মূল্য বলতে কী বোঝানো হচ্ছে?",
        "a": "উৎপাদক ও ক্রেতার সরাসরি আলোচনা, মান ও চাহিদার তথ্য এবং স্বচ্ছ খরচের মাধ্যমে মূল্য নির্ধারণে সহায়তার লক্ষ্য। সর্বোচ্চ মূল্য, নির্দিষ্ট আয় বা সব পণ্য বিক্রির নিশ্চয়তা দেওয়া হচ্ছে না।"
      }
    ]
  },
  "footer": {
    "description": "ডাটা ও প্রযুক্তির মাধ্যমে কৃষক, ক্রেতা ও স্থানীয় উদ্যোক্তার মধ্যে একটি সংযুক্ত কৃষি ইকোসিস্টেম গড়ে তোলার লক্ষ্য।",
    "explore": "আবাদ সম্পর্কে",
    "connect": "যুক্ত হোন",
    "legal": "ব্যবহার ও গোপনীয়তা",
    "privacy": "গোপনীয়তা",
    "terms": "ব্যবহারের শর্ত",
    "rights": "আবাদ লিমিটেড। সর্বস্বত্ব সংরক্ষিত।",
    "availability": "সেবা ও নেটওয়ার্কের প্রাপ্যতা যাচাই করে প্রকাশ করা হবে।"
  }
}
````

## Embedded file: `content/site-copy.en.json`

````json
{
  "schemaVersion": 1,
  "brand": {
    "name": "Abad Limited",
    "shortName": "Abad",
    "tagline": "Farmer identity. Technology. A connected market.",
    "description": "An initiative to build a data-led agricultural ecosystem connecting farmers, buyers and local entrepreneurs."
  },
  "nav": [
    {
      "id": "home",
      "href": "/",
      "label": "Home"
    },
    {
      "id": "about",
      "href": "/about",
      "label": "About"
    },
    {
      "id": "ecosystem",
      "href": "/ecosystem",
      "label": "Our ecosystem"
    },
    {
      "id": "services",
      "href": "/services",
      "label": "Services"
    },
    {
      "id": "network",
      "href": "/network",
      "label": "Network"
    },
    {
      "id": "insights",
      "href": "/insights",
      "label": "Insights"
    },
    {
      "id": "contact",
      "href": "/contact",
      "label": "Contact"
    }
  ],
  "common": {
    "join": "Connect with Abad",
    "farmerCta": "Express farmer interest",
    "buyerCta": "Send a sourcing enquiry",
    "partnerCta": "Discuss a partnership",
    "learnMore": "Learn more",
    "readMore": "Read more",
    "planned": "Planned service",
    "target": "Expansion goal",
    "comingSoon": "In preparation",
    "skipToContent": "Skip to content",
    "openMenu": "Open menu",
    "closeMenu": "Close menu",
    "selectLanguage": "Choose language",
    "required": "Required",
    "optional": "Optional",
    "submit": "Send enquiry",
    "sending": "Sending…",
    "liveSuccess": "Your enquiry has been received. Please keep your reference number.",
    "demoSuccess": "Demo validation complete. Your details were not sent to or stored by Abad.",
    "failure": "Your enquiry could not be sent right now. Your entries are preserved; please try again.",
    "demoBanner": "Preview mode: this form does not send or save information.",
    "reference": "Reference number",
    "privacyConsent": "I consent to use of my information to respond to this enquiry and have read the privacy page.",
    "newsletterConsent": "I would like to receive future Abad updates by email.",
    "newsletterPending": "Follow the instructions in your email to confirm your subscription.",
    "notFoundTitle": "Page not found",
    "notFoundBody": "Return to the homepage or explore our services.",
    "noResults": "No results match this search. Try changing the filters.",
    "validation": {
      "name": "Enter a name between 2 and 100 characters.",
      "phone": "Enter a valid Bangladesh mobile number.",
      "email": "Enter a valid email address.",
      "district": "Select a district from the list.",
      "consent": "Consent is required to send this enquiry.",
      "quantity": "Enter a quantity greater than zero.",
      "message": "Enter a message between 20 and 2000 characters.",
      "rateLimit": "Too many requests were made. Please try again later."
    }
  },
  "home": {
    "seo": {
      "title": "Abad Limited | Connecting farmers, buyers and technology",
      "description": "Explore Abad Limited’s plans for farmer brands, direct markets, agricultural data, local hubs and smart logistics."
    },
    "eyebrow": "A connected future for Bangladesh’s agriculture",
    "heroSlides": [
      {
        "id": "farmer-identity",
        "title": "From farmer identity\nto a connected market.",
        "body": "Abad is building connections between farmers, buyers and local entrepreneurs through data, technology and market access.",
        "image": "/images/hero-farmer.webp"
      },
      {
        "id": "technology",
        "title": "Agriculture informed by data.\nProgress supported by technology.",
        "body": "Our plans bring farm records, livestock identity and practical technology demonstrations together to support more informed agriculture.",
        "image": "/images/farm-technology.webp"
      },
      {
        "id": "shared-network",
        "title": "Local hubs.\nWider market possibilities.",
        "body": "We aim to bring producers and buyers closer through coordinated collection, storage and shared transport.",
        "image": "/images/hub-logistics.webp"
      }
    ],
    "objectiveCards": [
      {
        "id": "district-goal",
        "value": "64 districts",
        "label": "Our network expansion goal"
      },
      {
        "id": "farmer-brand",
        "value": "Farmer brands",
        "label": "Put producer identity at the centre"
      },
      {
        "id": "data",
        "value": "Data & technology",
        "label": "Coordinate agriculture with information"
      }
    ],
    "problemsHeading": "Farmer challenges, our planned approach",
    "problemsIntro": "An approach that considers the journey from production to market together.",
    "problemSolutions": [
      {
        "id": "identity",
        "problem": "Producer identity is often overlooked",
        "solution": "Individual digital storefronts and brand identity"
      },
      {
        "id": "access",
        "problem": "Market information and access to larger buyers can be limited",
        "solution": "Direct communication channels between farmers and buyers"
      },
      {
        "id": "resources",
        "problem": "Inputs, technology and capital can be difficult to coordinate",
        "solution": "Production planning and potential collaborator connections"
      },
      {
        "id": "logistics",
        "problem": "Collection and transport can be fragmented",
        "solution": "Plans for local hubs and shared logistics"
      }
    ],
    "servicesHeading": "Abad’s planned services",
    "servicesIntro": "Our goal is to connect farmer identity, production and markets in one ecosystem.",
    "ecosystemHeading": "Connect the agricultural journey in one ecosystem",
    "ecosystemIntro": "A planned system for communication and coordination between farms, data, local hubs and buyers.",
    "journeyHeading": "How you can connect",
    "networkHeading": "From local enterprise to a national network",
    "networkIntro": "Our long-term goal is to connect farmers, buyers and local hubs across Bangladesh’s 64 districts. Talk to us about opportunities in your area.",
    "teamHeading": "Abad’s leadership",
    "insightsHeading": "Ideas on agriculture, technology and markets",
    "faqHeading": "Your questions, clear answers",
    "ctaTitle": "Start the next connection for your agricultural venture with Abad.",
    "ctaBody": "Whether you are a farmer, a business buyer or a local entrepreneur, tell us about your interest and needs."
  },
  "about": {
    "title": "Built around farmers. Looking toward the future.",
    "intro": "Abad Limited plans to connect communication, information and supply coordination between farmers, buyers and local entrepreneurs. Our vision is for farmers to develop their own identity and brand alongside their products.",
    "visionTitle": "Our vision",
    "vision": "Modernize Bangladesh’s agricultural sector through data-driven technology and build a self-sustaining ecosystem where smallholder farmers and everyday buyers across all 64 districts can participate in a strong, transparent and commercially viable network.",
    "missionTitle": "Our mission",
    "missions": [
      "Create direct farmer-buyer communication channels that can reduce reliance on intermediaries.",
      "Develop technology-enabled supply chains, contract farming and smart logistics.",
      "Help farmers develop a distinct brand identity through a multi-brand ecosystem."
    ],
    "valuesTitle": "Principles that guide our plans",
    "values": [
      {
        "title": "Farmer focus",
        "body": "Respect producer identity, needs and decisions."
      },
      {
        "title": "Clear information",
        "body": "Explain products, processes and terms clearly."
      },
      {
        "title": "Accessible technology",
        "body": "Support participation with Bangla language and simple experiences."
      },
      {
        "title": "Local collaboration",
        "body": "Coordinate with local entrepreneurs, farmers and buyers."
      }
    ],
    "businessModelTitle": "Planning a sustainable business model",
    "businessModelIntro": "Abad plans to build revenue from platform services, trading, logistics and field initiatives under clearly communicated terms.",
    "revenueStreams": [
      {
        "title": "Platform fees",
        "body": "Applicable commission or subscription-based services."
      },
      {
        "title": "Trading margin",
        "body": "Revenue from sourcing and selling agricultural products on agreed terms."
      },
      {
        "title": "Logistics & technology services",
        "body": "Transport coordination and supply of relevant technology tools."
      },
      {
        "title": "Sponsorship & initiatives",
        "body": "Approved field initiatives and relevant sponsorship collaborations."
      }
    ],
    "team": [
      {
        "id": "ceo",
        "nameBn": "রুবায়েত হোসেন",
        "nameEn": "Rubayet Hossain",
        "role": "CEO",
        "title": "Chief Executive Officer",
        "bio": "Leads Abad’s vision, business direction and growth, with a focus on long-term relationships between farmers, institutional buyers and ecosystem collaborators.",
        "responsibilities": [
          "Set the long-term strategy for a data-led platform that helps farmers develop independent brands.",
          "Develop B2B relationships and supply agreements with agro-businesses, corporations, restaurant chains and supermarkets.",
          "Build relationships with potential funding platforms and sponsors for Krishijatra and field initiatives.",
          "Lead Abad’s brand strategy and promotion of its multi-brand ecosystem."
        ],
        "photo": null
      },
      {
        "id": "cto",
        "nameBn": "নায়েফ মোঃ হাসিব",
        "nameEn": "Nayeef Mohammad Hashib",
        "role": "CTO",
        "title": "Chief Technology Officer",
        "bio": "Responsible for Abad’s digital platform, data systems and technical security, with an emphasis on accessible Bangla experiences and infrastructure that can grow with the network.",
        "responsibilities": [
          "Develop the multi-vendor website and app, including farmer profiles, storefronts and order dashboards.",
          "Design livestock tagging software, future IoT integrations and a central farmer database.",
          "Manage scalable cloud infrastructure, secure payment integrations and escrow workflows if approved for implementation.",
          "Create simple Bangla-first interfaces for smallholder farmers and protect platform data."
        ],
        "photo": null
      },
      {
        "id": "coo",
        "nameBn": "ইউসুব ইলিয়াস",
        "nameEn": "Yousub Ilias",
        "role": "COO",
        "title": "Chief Operating Officer",
        "bio": "Leads field operations, farmer relationships and supply coordination, connecting local hubs, transport arrangements and product quality processes.",
        "responsibilities": [
          "Plan and coordinate district and upazila hubs with local agents and dealers toward the 64-district expansion goal.",
          "Coordinate the farm-to-buyer supply chain and owned or shared transport.",
          "Manage field implementation and training for contract farming, solar pumps, drip irrigation and new technologies.",
          "Oversee quality processes across collection, storage and delivery of agricultural produce and livestock."
        ],
        "photo": null
      },
      {
        "id": "cfo",
        "nameBn": "শাহরিয়ার তানভীর আহমদ",
        "nameEn": "Shahriar Tanvir Ahmad",
        "role": "CFO",
        "title": "Chief Financial Officer",
        "bio": "Manages financial planning, income and expenditure, capital allocation and company formation, with a focus on practical budgeting and transparent accounting.",
        "responsibilities": [
          "Plan and account for potential commission, subscription, trading, logistics and technology-product revenue.",
          "Oversee allocation, accounting, contractual terms and settlement for agricultural funding arranged through approved collaborators.",
          "Control operating costs through local storage and shared logistics, and prepare marketing and transport budgets.",
          "Coordinate company-formation documentation, MoA/AoA, trade licensing, TIN, VAT and tax-related preparation and compliance."
        ],
        "photo": null
      }
    ]
  },
  "services": {
    "title": "Connecting production and markets.",
    "intro": "Each planned Abad service is designed to create a useful connection between farmers, buyers and local entrepreneurs.",
    "items": [
      {
        "id": "farmer-brands",
        "icon": "Store",
        "title": "Farmer brands & digital storefronts",
        "summary": "A planned space for farmer identity, product stories and direct market connections.",
        "intro": "Abad plans a multi-vendor platform where farmers can establish a storefront with their identity and product information. Buyers will be able to learn about the producer as well as the product.",
        "benefits": [
          "An individual storefront and brand identity",
          "Product, season and production-area information",
          "An opportunity to receive direct buyer enquiries"
        ],
        "audience": "Farmers, livestock producers and agricultural entrepreneurs",
        "ctaType": "farmer"
      },
      {
        "id": "market-access",
        "icon": "Handshake",
        "title": "Direct market access & B2B sourcing",
        "summary": "An initiative to connect producers with restaurants, supermarkets, wholesalers and institutional buyers.",
        "intro": "Abad will help producers reach buyers beyond local markets and plan supply around demand. Product specifications, quantities, schedules and prices will be agreed through discussion.",
        "benefits": [
          "Collect business-buyer requirements",
          "Identify potential suppliers by specification and quantity",
          "Support discussions for recurring supply"
        ],
        "audience": "Farmers, wholesalers, restaurants, supermarkets and institutions",
        "ctaType": "buyer"
      },
      {
        "id": "data-traceability",
        "icon": "ScanLine",
        "title": "Farm data & livestock traceability",
        "summary": "Planned farmer, farm and production records with livestock identification tags.",
        "intro": "Abad aims to maintain relevant farmer and production records in a central database and use unique identification tags for livestock. Information will be shared according to permission, with personal and sensitive records protected.",
        "benefits": [
          "Consistent farm and production records",
          "Unique livestock identification and permission-based information",
          "Use information to support quality review and planning"
        ],
        "audience": "Livestock producers, farmers and operations teams",
        "ctaType": "farmer"
      },
      {
        "id": "hubs-logistics",
        "icon": "Truck",
        "title": "Local hubs & smart logistics",
        "summary": "A planned network of local hubs and shared transport for coordinated supply.",
        "intro": "Abad plans collection, storage and distribution hubs with local entrepreneurs and dealers. Coordination between owned vans and other logistics services will focus on managing transport costs and delivery schedules.",
        "benefits": [
          "Potential hub-operation opportunities for local entrepreneurs",
          "Coordinate product collection and storage",
          "Plan shared transport and delivery"
        ],
        "audience": "Local entrepreneurs, dealers and logistics providers",
        "ctaType": "hub"
      },
      {
        "id": "contract-farming",
        "icon": "Sprout",
        "title": "Contract farming & funding connections",
        "summary": "A planned approach to production coordination, inputs and connections with potential funding collaborators.",
        "intro": "Abad aims to coordinate production plans with seeds, fertilizer, tools and possible capital support. Eligibility, agreements, funding terms and risks will be assessed separately for each project. Expressing interest through the website does not guarantee funding.",
        "benefits": [
          "Understand production needs and develop a plan",
          "Connect input needs with potential collaborators",
          "Aim for clear agreements and financial records"
        ],
        "audience": "Farmers, livestock producers and potential funding collaborators",
        "ctaType": "farmer"
      },
      {
        "id": "inputs-technology",
        "icon": "Sun",
        "title": "Agricultural inputs & modern technology",
        "summary": "Access to information on agricultural inputs, tagging tools, solar pumps and drip irrigation.",
        "intro": "Abad plans to introduce suitable technologies and quality inputs based on farmer needs and develop supply arrangements. Pricing, availability and support will be described for each offer.",
        "benefits": [
          "Select inputs according to need",
          "Learn about solar pumps and drip irrigation",
          "Information on tagging tools and equipment"
        ],
        "audience": "Farmers, livestock producers and technology suppliers",
        "ctaType": "farmer"
      },
      {
        "id": "training-demonstration",
        "icon": "GraduationCap",
        "title": "Training & field demonstrations",
        "summary": "Learn from technology demonstrations on farms and exchange practical knowledge between farmers.",
        "intro": "Field demonstrations will show how suitable technologies or improved seeds are used on a farm. The goal is to share practical experience in accessible language and help farmers make decisions suited to their needs.",
        "benefits": [
          "See practical applications",
          "Ask questions and exchange experience",
          "Develop local farmer-learning networks"
        ],
        "audience": "Farmers, agricultural entrepreneurs and training collaborators",
        "ctaType": "farmer"
      },
      {
        "id": "field-events",
        "icon": "MapPin",
        "title": "Krishijatra & field initiatives",
        "summary": "Potential farm visits, knowledge exchange and sponsorship collaboration.",
        "intro": "Abad plans to build connections between agricultural ventures, technology providers and potential collaborators through Krishijatra and field initiatives. Details will be published for approved events.",
        "benefits": [
          "Learn from agricultural ventures",
          "Connect with farmers and entrepreneurs",
          "Discuss relevant sponsorship opportunities"
        ],
        "audience": "Agricultural entrepreneurs, input companies and sponsors",
        "ctaType": "sponsor"
      }
    ]
  },
  "ecosystem": {
    "title": "Farms, information, hubs and markets—connected.",
    "intro": "Abad plans a coordinated network that connects producer identity, inputs, data, transport and buyer requirements.",
    "steps": [
      {
        "id": "farm",
        "title": "Farmers & farms",
        "body": "Relevant information about farming activity, production area and capacity."
      },
      {
        "id": "data",
        "title": "Data & identity",
        "body": "Permission-based records, farmer brands and livestock identity."
      },
      {
        "id": "production",
        "title": "Production coordination",
        "body": "Inputs, training and potential contract-farming collaboration."
      },
      {
        "id": "hub",
        "title": "Local hubs & logistics",
        "body": "Coordinated collection, storage and transport."
      },
      {
        "id": "market",
        "title": "Buyers & markets",
        "body": "Direct communication, sourcing requirements and potential supply discussions."
      }
    ],
    "dataNote": "Personal farmer information, financing documents or health records will not be made public automatically.",
    "phaseNote": "This describes Abad’s planned operating model. Actual services and availability will be published according to location and readiness."
  },
  "farmers": {
    "title": "Your farm. Your identity. Wider possibilities.",
    "intro": "Express your interest in Abad’s plans for farmer brands, market connections and data-led agricultural activity.",
    "benefits": [
      {
        "title": "Your own brand",
        "body": "An opportunity to present your identity and product information."
      },
      {
        "title": "Market connections",
        "body": "Discussions with potential buyers beyond your local market."
      },
      {
        "title": "Production planning",
        "body": "Coordination around inputs, training and possible support."
      },
      {
        "title": "Useful information",
        "body": "A planned approach to relevant farm and production records."
      }
    ],
    "steps": [
      "Tell us about your interest and farming activity",
      "Discuss possible services and next steps",
      "Plan participation based on relevant review and terms"
    ],
    "formTitle": "Farmer interest form",
    "formIntro": "Provide a few details. Land deeds, national identification and bank information are not needed here."
  },
  "buyers": {
    "title": "Plan your sourcing with direct producer connections.",
    "intro": "Tell us about sourcing needs for your restaurant, supermarket, wholesale business or institution. Potential supply can be discussed around specifications, quantities, schedules and delivery locations.",
    "benefits": [
      "Describe product types and quality requirements",
      "Discuss quantities and schedules",
      "Explore production-area information",
      "Discuss potential recurring B2B supply"
    ],
    "steps": [
      "Submit your sourcing requirements",
      "Discuss potential supply and terms",
      "Use a separate supply agreement if terms are agreed"
    ],
    "formTitle": "Business sourcing enquiry"
  },
  "partners": {
    "title": "Connect local expertise with a wider agricultural network.",
    "intro": "Abad’s plans include potential collaboration with hub entrepreneurs, logistics providers, technology suppliers, funding collaborators and sponsors.",
    "types": [
      {
        "id": "hub",
        "title": "Hubs & dealers",
        "body": "Discuss local collection, storage and distribution capacity."
      },
      {
        "id": "logistics",
        "title": "Logistics",
        "body": "Explore shared transport and delivery coordination."
      },
      {
        "id": "technology",
        "title": "Inputs & technology",
        "body": "Introduce products and technologies suited to farmer needs."
      },
      {
        "id": "finance",
        "title": "Funding collaboration",
        "body": "Discuss potential contract-farming support arrangements."
      },
      {
        "id": "sponsor",
        "title": "Sponsorship",
        "body": "Explore relevant collaboration for approved field initiatives."
      }
    ],
    "formTitle": "Partnership enquiry",
    "hubFormTitle": "Hub partnership interest",
    "sponsorFormTitle": "Sponsorship interest"
  },
  "network": {
    "title": "A 64-district goal. Built through local connections.",
    "intro": "Abad plans a network that connects farmers, buyers and entrepreneurs across Bangladesh’s districts. Select your district to express interest.",
    "status": "Service availability for this district has not yet been published.",
    "legendPlanned": "Planned expansion",
    "districtSelect": "Select your district",
    "selectedDistrict": "Selected district",
    "noActiveHubs": "Verified operational hubs will be shown here when the list is published."
  },
  "marketplace": {
    "title": "A future of farmer-owned storefronts.",
    "intro": "A multi-vendor marketplace where farmers can present products under their own brands is part of Abad’s plan.",
    "notice": "The marketplace is in preparation. There are no live stores, prices or purchases here yet.",
    "categories": [
      {
        "id": "produce",
        "title": "Vegetables & fruit"
      },
      {
        "id": "grains",
        "title": "Grains"
      },
      {
        "id": "livestock",
        "title": "Livestock & dairy"
      },
      {
        "id": "fish",
        "title": "Fish & aquatic products"
      },
      {
        "id": "inputs",
        "title": "Agricultural inputs"
      }
    ],
    "emptyTitle": "Awaiting verified storefronts",
    "emptyBody": "Express interest as a farmer or send a business sourcing enquiry."
  },
  "insights": {
    "title": "Exploring the connections between agriculture, technology and markets.",
    "intro": "Abad’s plans, educational perspectives and future field updates.",
    "emptyTitle": "Updates are being prepared",
    "emptyBody": "Approved articles and field updates will appear here when published.",
    "all": "All topics",
    "articles": [
      {
        "id": "farmer-as-a-brand",
        "slug": "farmer-as-a-brand",
        "category": "brands",
        "isDraft": true,
        "publishedAt": null,
        "title": "When the farmer becomes a brand",
        "excerpt": "Connecting a product with its producer’s identity can create opportunities for stronger relationships.",
        "paragraphs": [
          "Every agricultural product represents someone’s work, experience and farm. Making that identity visible gives the producer a presence beyond a single supply transaction.",
          "A digital storefront can present production area, product types, seasonality and supply capacity. Accurate, regularly updated information helps buyers start informed conversations.",
          "Abad plans to build an accessible platform for this identity. Its focus will be transparent information, product context and direct communication between producers and buyers."
        ]
      },
      {
        "id": "traceability-starts-with-data",
        "slug": "traceability-starts-with-data",
        "category": "technology",
        "isDraft": true,
        "publishedAt": null,
        "title": "Traceability begins with production records",
        "excerpt": "Simple records and reliable identification form a foundation for data-led agriculture.",
        "paragraphs": [
          "Recording where a product was grown, when it was collected and what information was added at each stage is an early step toward data-led operations.",
          "A unique livestock tag can connect identity and records. A tag alone does not make the information verified; records also need update and review processes.",
          "Permission-based access is important to Abad’s data plans. Buyer-relevant information and access to a farmer’s personal information will be managed separately."
        ]
      },
      {
        "id": "local-hubs-shared-logistics",
        "slug": "local-hubs-shared-logistics",
        "category": "logistics",
        "isDraft": true,
        "publishedAt": null,
        "title": "Local hubs, coordinated supply",
        "excerpt": "Planning supply around local entrepreneurs and shared transport.",
        "paragraphs": [
          "Agricultural supply needs coordination between collection, temporary storage and delivery. A local hub can serve as a point for that coordination.",
          "Involving local entrepreneurs or dealers can help planning reflect local conditions. Storage and handling requirements also vary by product.",
          "Abad is considering a model that combines owned vans with other logistics services. Delivery plans will depend on verified service areas, capacity and timing."
        ]
      }
    ]
  },
  "contact": {
    "title": "Let’s discuss your needs and opportunities.",
    "intro": "Use this form to express farmer interest, describe sourcing needs or discuss collaboration.",
    "formTitle": "Your message",
    "missingContact": "You can send your enquiry through this form.",
    "newsletterTitle": "Receive future Abad updates",
    "newsletterBody": "Published updates will be sent by email with your consent."
  },
  "faq": {
    "title": "Frequently asked questions",
    "items": [
      {
        "id": "what-is-abad",
        "category": "general",
        "q": "What is Abad Limited?",
        "a": "Abad Limited is an initiative to build a data-led agricultural ecosystem. Its plans include farmer brands, direct market connections, local hubs, smart logistics and technology-enabled agricultural support."
      },
      {
        "id": "join-farmer",
        "category": "farmers",
        "q": "How can I express interest as a farmer?",
        "a": "Use the farmer interest form to provide your name, contact details, district and farming activity. After receipt, possible next steps can be discussed. A submitted form does not automatically activate a store or approve an agreement."
      },
      {
        "id": "national-network",
        "category": "network",
        "q": "Is Abad already operating in all 64 districts?",
        "a": "Building a network across 64 districts is our expansion goal. Information about operational hubs and services will be published after it is verified."
      },
      {
        "id": "commission",
        "category": "farmers",
        "q": "What will platform use cost?",
        "a": "A commission or subscription model is under consideration. Applicable fees, included services and settlement terms will be stated in the final offer or agreement."
      },
      {
        "id": "buyer-sourcing",
        "category": "buyers",
        "q": "How can a business buyer request supply?",
        "a": "Use the buyer enquiry form to describe your organization, product type, indicative quantity, timing and delivery district. Supply and price arrangements will be discussed separately."
      },
      {
        "id": "hub-partner",
        "category": "partners",
        "q": "Can I express interest in becoming a local hub partner?",
        "a": "Local entrepreneurs and dealers can use the hub-partner form. Potential collaboration will be discussed after reviewing location, facilities and relevant capacity."
      },
      {
        "id": "funding",
        "category": "farmers",
        "q": "Does submitting an enquiry guarantee funding?",
        "a": "Funding depends on suitable projects, collaborators, assessment and contractual terms. Website forms are not a loan-approval or investment-payment process."
      },
      {
        "id": "tagging",
        "category": "technology",
        "q": "What is livestock tagging intended to do?",
        "a": "Unique tags are intended to connect an animal’s identity with relevant records. Public information will depend on permissions and the service terms."
      },
      {
        "id": "stores",
        "category": "marketplace",
        "q": "Can I purchase products online immediately?",
        "a": "A multi-vendor marketplace is part of our plan. Product, price, delivery and payment terms will be published before transactions are enabled. Business buyers can express sourcing requirements in the meantime."
      },
      {
        "id": "data",
        "category": "technology",
        "q": "How will my information be used?",
        "a": "Relevant information will be used to respond to your enquiry or interest and coordinate potential services. Please read the privacy page before submitting a form."
      },
      {
        "id": "sponsorship",
        "category": "partners",
        "q": "How can an organization discuss sponsorship?",
        "a": "Express sponsorship interest on the partners page. A separate proposal can be prepared around approved initiatives, audiences, activities and relevant benefits."
      },
      {
        "id": "fair-price",
        "category": "farmers",
        "q": "What does fair pricing mean in this model?",
        "a": "The aim is to support pricing through direct producer-buyer discussions, quality and demand information, and transparent costs. It does not guarantee the highest price, a fixed income or sale of every product."
      }
    ]
  },
  "footer": {
    "description": "Working toward a connected agricultural ecosystem through data, technology and relationships between farmers, buyers and local entrepreneurs.",
    "explore": "Explore Abad",
    "connect": "Get involved",
    "legal": "Use & privacy",
    "privacy": "Privacy",
    "terms": "Terms of use",
    "rights": "Abad Limited. All rights reserved.",
    "availability": "Service and network availability will be published after verification."
  }
}
````

## Embedded file: `content/company-model.json`

````json
{
  "companyNameBn": "আবাদ লিমিটেড",
  "companyNameEn": "Abad Limited",
  "authoritativeSource": "Company model and leadership names supplied in the user brief on 14 October 2026.",
  "termNormalization": {
    "input": "কন্টাক্ট ফার্মিং",
    "publicBn": "চুক্তিভিত্তিক কৃষি",
    "publicEn": "Contract farming",
    "reason": "The described model is contractual production coordination. This is a terminology correction, not a change of business model."
  },
  "launchAssumptions": {
    "companyRegistrationVerified": false,
    "servicesOperationalVerified": false,
    "activeDistricts": [],
    "confirmedPartners": [],
    "realTestimonials": [],
    "publicMetrics": []
  },
  "vision": {
    "bn": "বাংলাদেশের কৃষিখাতকে ডাটা-ড্রিভেন টেকনোলজির মাধ্যমে আধুনিকীকরণ করে এমন একটি স্বয়ংসম্পূর্ণ ইকোসিস্টেম গড়ে তোলা, যেখানে ৬৪ জেলার প্রান্তিক কৃষক থেকে সাধারণ ক্রেতা পর্যন্ত সবাই একটি শক্তিশালী, স্বচ্ছ ও লাভজনক নেটওয়ার্কের অংশ হতে পারবেন।",
    "en": "Modernize Bangladesh’s agricultural sector through data-driven technology and build a self-sustaining ecosystem where smallholder farmers and everyday buyers across all 64 districts can participate in a strong, transparent and commercially viable network."
  },
  "missions": {
    "bn": [
      "কৃষক ও ক্রেতার মধ্যে সরাসরি যোগাযোগের চ্যানেল তৈরি করে মধ্যস্বত্বভোগীর ওপর নির্ভরতা কমানোর সুযোগ তৈরি।",
      "প্রযুক্তির সাহায্যে আধুনিক সাপ্লাই চেইন, চুক্তিভিত্তিক কৃষি ও স্মার্ট লজিস্টিকস গড়ে তোলা।",
      "মাল্টি-ব্র্যান্ড ইকোসিস্টেমের মাধ্যমে কৃষককে স্বতন্ত্র ব্র্যান্ড হিসেবে পরিচিত হওয়ার সুযোগ দেওয়া।"
    ],
    "en": [
      "Create direct farmer-buyer communication channels that can reduce reliance on intermediaries.",
      "Develop technology-enabled supply chains, contract farming and smart logistics.",
      "Help farmers develop a distinct brand identity through a multi-brand ecosystem."
    ]
  },
  "operatingModel": [
    {
      "id": "database",
      "bn": "দেশব্যাপী কৃষকের ডাটাবেজ ও গবাদিপশুর ট্যাগিং সিস্টেমে উৎপাদন ও মানসংক্রান্ত রেকর্ড।",
      "en": "A national farmer database and livestock identification system for production and quality records."
    },
    {
      "id": "hubs",
      "bn": "স্থানীয় ডিলার ও উদ্যোক্তার মাধ্যমে উপজেলা ও জেলা পর্যায়ের ওয়্যারহাউজ বা হাব; লক্ষ্য ৬৪ জেলা।",
      "en": "Upazila and district warehouses or hubs operated with local dealers and entrepreneurs, with a 64-district ambition."
    },
    {
      "id": "vendors",
      "bn": "কৃষকের নিজস্ব পেজ বা স্টোরসহ মাল্টি-ভেন্ডর ই-কমার্স প্ল্যাটফর্ম।",
      "en": "A multi-vendor e-commerce platform with farmer-owned pages or storefronts."
    },
    {
      "id": "logistics",
      "bn": "নিজস্ব ভ্যান ও অন্যান্য লজিস্টিক সেবার সঙ্গে শেয়ার্ড পরিবহন।",
      "en": "Shared transport combining owned vans and other logistics services."
    }
  ],
  "farmerEngagement": [
    {
      "id": "finance",
      "bn": "চুক্তিভিত্তিক কৃষির জন্য উপকরণ ও মূলধনের ব্যবস্থা করতে সম্ভাব্য ক্রাউডফান্ডিং প্ল্যাটফর্মের সঙ্গে সংযোগ।",
      "en": "Connect with potential crowdfunding platforms to coordinate inputs and capital for contract farming."
    },
    {
      "id": "training",
      "bn": "বাস্তব খামারে নতুন প্রযুক্তি ও উন্নত বীজ প্রদর্শন করে আশেপাশের কৃষকদের শেখানো।",
      "en": "Demonstrate suitable technologies and improved seeds on farms for neighbouring farmers to learn."
    },
    {
      "id": "inputs",
      "bn": "প্রয়োজনীয় কৃষি সরঞ্জাম ও প্রযুক্তি প্রতিযোগিতামূলক মূল্যে পৌঁছে দেওয়ার লক্ষ্য।",
      "en": "Aim to supply relevant tools and technologies at competitive prices."
    }
  ],
  "farmerBenefits": [
    {
      "bn": "নিজস্ব পরিচিতি ও ব্র্যান্ড গড়ে তোলা।",
      "en": "Develop an individual identity and brand."
    },
    {
      "bn": "সরাসরি ক্রেতা, বৃহত্তর বাজার ও স্বচ্ছ মূল্য আলোচনার সুযোগ।",
      "en": "Access direct buyer discussions, wider markets and transparent pricing."
    },
    {
      "bn": "প্রযোজ্য চুক্তির মাধ্যমে সম্ভাব্য মূলধন ও উপকরণের সমন্বয়।",
      "en": "Coordinate possible capital and inputs through applicable agreements."
    }
  ],
  "revenueModel": [
    {
      "id": "platform",
      "bn": "কমিশন অথবা সাবস্ক্রিপশন ফি",
      "en": "Commission or subscription fees"
    },
    {
      "id": "trading",
      "bn": "পাইকারি সংগ্রহ ও পুনর্বিক্রয় থেকে ট্রেডিং মার্জিন",
      "en": "Trading margins from wholesale sourcing and resale"
    },
    {
      "id": "logistics",
      "bn": "পরিবহন ও সেবা ফি",
      "en": "Logistics and service fees"
    },
    {
      "id": "tools",
      "bn": "ট্যাগ ও প্রযুক্তিপণ্য সরবরাহের মার্জিন",
      "en": "Margins on tags and technology tools"
    },
    {
      "id": "sponsorship",
      "bn": "কৃষিযাত্রা ও মাঠ আয়োজনের স্পন্সরশিপ",
      "en": "Krishijatra and field-initiative sponsorship"
    }
  ],
  "illustrativeExamplesInternalOnly": {
    "commissionPercent": 2,
    "tagMarketPriceBDT": 70,
    "proposedTagPriceBDT": 60,
    "crowdfundingReference": "biniyog.io",
    "instruction": "These are examples in the brief, not approved live pricing or a confirmed partnership. Do not publish rates, partner logos, guaranteed funding, return percentages, or investment offers based on these examples."
  },
  "departments": [
    {
      "id": "management",
      "bn": "বোর্ড অফ ডিরেক্টরস / ম্যানেজমেন্ট",
      "en": "Board of Directors / Management",
      "scopeBn": "কৌশলগত সিদ্ধান্ত, পার্টনারশিপ ও ভিশন বাস্তবায়ন।",
      "scopeEn": "Strategic decisions, partnerships and vision delivery."
    },
    {
      "id": "operations",
      "bn": "অপারেশনস ও লজিস্টিকস",
      "en": "Operations & Logistics",
      "scopeBn": "হাব, এজেন্ট, ট্রান্সপোর্টেশন ও ডেলিভারি চেইন।",
      "scopeEn": "Hubs, agents, transport and delivery coordination."
    },
    {
      "id": "technology",
      "bn": "টেক ও ডাটা ম্যানেজমেন্ট",
      "en": "Technology & Data Management",
      "scopeBn": "ই-কমার্স, অ্যাপ, কৃষকের ডাটাবেজ ও গবাদিপশুর ট্যাগিং।",
      "scopeEn": "E-commerce, apps, farmer databases and livestock tagging."
    },
    {
      "id": "farming-finance",
      "bn": "কৃষক সম্পর্ক ও ফাইন্যান্স",
      "en": "Farmer Relations & Finance",
      "scopeBn": "চুক্তিভিত্তিক কৃষি, প্রশিক্ষণ ও অর্থায়ন সমন্বয়।",
      "scopeEn": "Contract farming, training and funding coordination."
    },
    {
      "id": "marketing",
      "bn": "মার্কেটিং ও B2B সেলস",
      "en": "Marketing & B2B Sales",
      "scopeBn": "কৃষকের ব্র্যান্ড প্রচার ও কর্পোরেট সরবরাহ সম্পর্ক।",
      "scopeEn": "Farmer-brand promotion and institutional supply relationships."
    }
  ],
  "leadership": {
    "bn": [
      {
        "id": "ceo",
        "nameBn": "রুবায়েত হোসেন",
        "nameEn": "Rubayet Hossain",
        "role": "CEO",
        "title": "প্রধান নির্বাহী কর্মকর্তা",
        "bio": "আবাদ-এর সামগ্রিক ভিশন, ব্যবসায়িক দিকনির্দেশনা এবং সম্প্রসারণে নেতৃত্ব দেন। কৃষক, কর্পোরেট ক্রেতা ও সহযোগীদের মধ্যে দীর্ঘমেয়াদি সম্পর্ক গড়ে তোলাই তাঁর কার্যপরিধির মূল অংশ।",
        "responsibilities": [
          "কৃষকদের ডাটা-ভিত্তিক প্ল্যাটফর্মে যুক্ত করে স্বতন্ত্র ব্র্যান্ড হিসেবে প্রতিষ্ঠার দীর্ঘমেয়াদি কৌশল প্রণয়ন।",
          "এগ্রো-কোম্পানি, কর্পোরেট প্রতিষ্ঠান, রেস্টুরেন্ট চেইন ও সুপারশপের সঙ্গে B2B সম্পর্ক ও বিক্রয় চুক্তি গড়ে তোলা।",
          "সম্ভাব্য ফান্ডিং প্ল্যাটফর্ম ও স্পন্সরদের সঙ্গে সম্পর্ক তৈরি এবং কৃষিযাত্রা ও মাঠ পর্যায়ের আয়োজনে সহযোগিতা সংগ্রহ।",
          "আবাদ-এর ব্র্যান্ড কৌশল ও মাল্টি-ব্র্যান্ড ইকোসিস্টেমের প্রচার পরিকল্পনায় নেতৃত্ব।"
        ],
        "photo": null
      },
      {
        "id": "cto",
        "nameBn": "নায়েফ মোঃ হাসিব",
        "nameEn": "Nayeef Mohammad Hashib",
        "role": "CTO",
        "title": "চিফ টেকনোলজি অফিসার",
        "bio": "আবাদ-এর ডিজিটাল প্ল্যাটফর্ম, ডাটা ব্যবস্থাপনা ও প্রযুক্তিগত নিরাপত্তার দায়িত্বে আছেন। বাংলায় সহজ ব্যবহারযোগ্য অভিজ্ঞতা এবং ভবিষ্যৎ সম্প্রসারণের উপযোগী অবকাঠামো তাঁর কাজের কেন্দ্র।",
        "responsibilities": [
          "কৃষকের স্টোর, প্রোফাইল ও অর্ডার ড্যাশবোর্ডসহ মাল্টি-ভেন্ডর ওয়েবসাইট ও অ্যাপের উন্নয়ন।",
          "গবাদিপশুর ট্যাগিং সফটওয়্যার, ভবিষ্যৎ IoT সংযোগ এবং কৃষকদের কেন্দ্রীয় ডাটাবেজের স্থাপত্য তৈরি।",
          "স্কেলেবল ক্লাউড অবকাঠামো, নিরাপদ পেমেন্ট সংযোগ এবং অনুমোদিত হলে এসক্রো প্রক্রিয়ার প্রযুক্তিগত ব্যবস্থাপনা।",
          "প্রান্তিক কৃষকের জন্য সহজ, বাংলা-ভিত্তিক UI/UX ও ডাটা সুরক্ষা নিশ্চিত করা।"
        ],
        "photo": null
      },
      {
        "id": "coo",
        "nameBn": "ইউসুব ইলিয়াস",
        "nameEn": "Yousub Ilias",
        "role": "COO",
        "title": "চিফ অপারেটিং অফিসার",
        "bio": "মাঠ পর্যায়ের কার্যক্রম, কৃষক সম্পর্ক ও সরবরাহ ব্যবস্থাপনায় নেতৃত্ব দেন। স্থানীয় হাব, পরিবহন এবং পণ্যের মান নিয়ন্ত্রণের মধ্যে সমন্বয় গড়ে তোলেন।",
        "responsibilities": [
          "৬৪ জেলায় সম্প্রসারণের লক্ষ্যে স্থানীয় এজেন্ট ও ডিলারদের সঙ্গে জেলা ও উপজেলা পর্যায়ের হাব পরিকল্পনা ও পরিচালনা।",
          "খামার থেকে ক্রেতা পর্যন্ত সরবরাহ ব্যবস্থাপনা এবং নিজস্ব ও শেয়ার্ড পরিবহনের সমন্বয়।",
          "চুক্তিভিত্তিক কৃষি, সোলার পাম্প, ড্রিপ ইরিগেশন ও নতুন প্রযুক্তির মাঠ পর্যায়ের বাস্তবায়ন ও প্রশিক্ষণ।",
          "সংগ্রহ, সংরক্ষণ ও ডেলিভারির প্রতিটি ধাপে কৃষিপণ্য ও গবাদিপশুর মান নিয়ন্ত্রণ প্রক্রিয়া তদারকি।"
        ],
        "photo": null
      },
      {
        "id": "cfo",
        "nameBn": "শাহরিয়ার তানভীর আহমদ",
        "nameEn": "Shahriar Tanvir Ahmad",
        "role": "CFO",
        "title": "চিফ ফিন্যান্সিয়াল অফিসার",
        "bio": "আবাদ-এর আর্থিক পরিকল্পনা, আয়-ব্যয়ের হিসাব, মূলধন বণ্টন ও প্রতিষ্ঠান গঠনের কাজ পরিচালনা করেন। কার্যকর বাজেট ও স্বচ্ছ হিসাব ব্যবস্থার ওপর গুরুত্ব দেন।",
        "responsibilities": [
          "কমিশন, সাবস্ক্রিপশন, ট্রেডিং মার্জিন, লজিস্টিকস ও প্রযুক্তিপণ্য থেকে সম্ভাব্য আয় পরিকল্পনা ও হিসাব।",
          "অনুমোদিত সহযোগীর মাধ্যমে পাওয়া কৃষি অর্থায়নের বণ্টন, হিসাব, চুক্তির শর্ত ও নিষ্পত্তির তদারকি।",
          "স্থানীয় স্টোরেজ ও শেয়ার্ড লজিস্টিকসসহ পরিচালন ব্যয় নিয়ন্ত্রণ এবং বিপণন ও পরিবহনের বাজেট।",
          "RJSC-তে MoA/AoA, ট্রেড লাইসেন্স, TIN, VAT ও করসংক্রান্ত প্রয়োজনীয় প্রস্তুতি ও পরিপালন সমন্বয়।"
        ],
        "photo": null
      }
    ],
    "en": [
      {
        "id": "ceo",
        "nameBn": "রুবায়েত হোসেন",
        "nameEn": "Rubayet Hossain",
        "role": "CEO",
        "title": "Chief Executive Officer",
        "bio": "Leads Abad’s vision, business direction and growth, with a focus on long-term relationships between farmers, institutional buyers and ecosystem collaborators.",
        "responsibilities": [
          "Set the long-term strategy for a data-led platform that helps farmers develop independent brands.",
          "Develop B2B relationships and supply agreements with agro-businesses, corporations, restaurant chains and supermarkets.",
          "Build relationships with potential funding platforms and sponsors for Krishijatra and field initiatives.",
          "Lead Abad’s brand strategy and promotion of its multi-brand ecosystem."
        ],
        "photo": null
      },
      {
        "id": "cto",
        "nameBn": "নায়েফ মোঃ হাসিব",
        "nameEn": "Nayeef Mohammad Hashib",
        "role": "CTO",
        "title": "Chief Technology Officer",
        "bio": "Responsible for Abad’s digital platform, data systems and technical security, with an emphasis on accessible Bangla experiences and infrastructure that can grow with the network.",
        "responsibilities": [
          "Develop the multi-vendor website and app, including farmer profiles, storefronts and order dashboards.",
          "Design livestock tagging software, future IoT integrations and a central farmer database.",
          "Manage scalable cloud infrastructure, secure payment integrations and escrow workflows if approved for implementation.",
          "Create simple Bangla-first interfaces for smallholder farmers and protect platform data."
        ],
        "photo": null
      },
      {
        "id": "coo",
        "nameBn": "ইউসুব ইলিয়াস",
        "nameEn": "Yousub Ilias",
        "role": "COO",
        "title": "Chief Operating Officer",
        "bio": "Leads field operations, farmer relationships and supply coordination, connecting local hubs, transport arrangements and product quality processes.",
        "responsibilities": [
          "Plan and coordinate district and upazila hubs with local agents and dealers toward the 64-district expansion goal.",
          "Coordinate the farm-to-buyer supply chain and owned or shared transport.",
          "Manage field implementation and training for contract farming, solar pumps, drip irrigation and new technologies.",
          "Oversee quality processes across collection, storage and delivery of agricultural produce and livestock."
        ],
        "photo": null
      },
      {
        "id": "cfo",
        "nameBn": "শাহরিয়ার তানভীর আহমদ",
        "nameEn": "Shahriar Tanvir Ahmad",
        "role": "CFO",
        "title": "Chief Financial Officer",
        "bio": "Manages financial planning, income and expenditure, capital allocation and company formation, with a focus on practical budgeting and transparent accounting.",
        "responsibilities": [
          "Plan and account for potential commission, subscription, trading, logistics and technology-product revenue.",
          "Oversee allocation, accounting, contractual terms and settlement for agricultural funding arranged through approved collaborators.",
          "Control operating costs through local storage and shared logistics, and prepare marketing and transport budgets.",
          "Coordinate company-formation documentation, MoA/AoA, trade licensing, TIN, VAT and tax-related preparation and compliance."
        ],
        "photo": null
      }
    ]
  },
  "nameReview": "Bangla names are authoritative. English spellings are provisional transliterations: confirm with each named person before public release. Do not substitute spellings remembered from another organization.",
  "unprovidedOwnerItems": [
    "Abad contact email",
    "Abad phone/WhatsApp",
    "office address",
    "production domain",
    "registration status and identifiers",
    "executive portraits",
    "English name spellings",
    "approved active services/hubs",
    "actual partners and case studies",
    "legal/privacy owner contact",
    "hosting and database credentials",
    "authorized farm photographs"
  ]
}
````

## Embedded file: `content/form-spec.json`

````json
{
  "schemaVersion": 1,
  "endpoint": "POST /api/leads",
  "submissionKinds": [
    "farmer",
    "buyer",
    "hub",
    "partner",
    "sponsor",
    "contact"
  ],
  "transportEnvelope": {
    "kind": "enum",
    "locale": "bn|en",
    "districtId": "district id when required",
    "consent": true,
    "consentVersion": "privacy-v1",
    "website": "honeypot; must be empty",
    "idempotencyKey": "UUID per logical submission",
    "fields": "only allowed fields for selected kind"
  },
  "fields": {
    "name": {
      "type": "text",
      "required": true,
      "minLength": 2,
      "maxLength": 100,
      "label": {
        "bn": "আপনার নাম",
        "en": "Your name"
      }
    },
    "phone": {
      "type": "tel",
      "required": true,
      "format": "BD mobile normalized to +8801XXXXXXXXX",
      "label": {
        "bn": "মোবাইল নম্বর",
        "en": "Mobile number"
      }
    },
    "email": {
      "type": "email",
      "required": false,
      "maxLength": 254,
      "label": {
        "bn": "ইমেইল",
        "en": "Email"
      }
    },
    "districtId": {
      "type": "select",
      "required": true,
      "optionsSource": "content/districts.json",
      "label": {
        "bn": "জেলা",
        "en": "District"
      }
    },
    "upazila": {
      "type": "text",
      "required": false,
      "maxLength": 100,
      "label": {
        "bn": "উপজেলা / এলাকা",
        "en": "Upazila / area"
      }
    },
    "farmType": {
      "type": "select",
      "required": true,
      "options": [
        "crops",
        "vegetables-fruit",
        "livestock-dairy",
        "fish",
        "mixed",
        "other"
      ],
      "label": {
        "bn": "কৃষিকাজের ধরন",
        "en": "Farming activity"
      }
    },
    "farmName": {
      "type": "text",
      "required": false,
      "maxLength": 150,
      "label": {
        "bn": "খামার / উদ্যোগের নাম",
        "en": "Farm / venture name"
      }
    },
    "products": {
      "type": "text",
      "required": false,
      "maxLength": 300,
      "label": {
        "bn": "পণ্য বা উৎপাদনের ধরন",
        "en": "Products or production types"
      }
    },
    "notes": {
      "type": "textarea",
      "required": false,
      "maxLength": 2000,
      "label": {
        "bn": "অতিরিক্ত তথ্য",
        "en": "Additional information"
      }
    },
    "organization": {
      "type": "text",
      "required": true,
      "minLength": 2,
      "maxLength": 150,
      "label": {
        "bn": "প্রতিষ্ঠানের নাম",
        "en": "Organization name"
      }
    },
    "buyerType": {
      "type": "select",
      "required": true,
      "options": [
        "restaurant",
        "supermarket",
        "wholesaler",
        "institution",
        "other"
      ],
      "label": {
        "bn": "ক্রেতার ধরন",
        "en": "Buyer type"
      }
    },
    "productCategory": {
      "type": "select",
      "required": true,
      "options": [
        "produce",
        "grains",
        "livestock-dairy",
        "fish",
        "inputs",
        "other"
      ],
      "label": {
        "bn": "পণ্যের বিভাগ",
        "en": "Product category"
      }
    },
    "quantity": {
      "type": "number",
      "required": false,
      "exclusiveMinimum": 0,
      "label": {
        "bn": "আনুমানিক পরিমাণ",
        "en": "Indicative quantity"
      }
    },
    "quantityUnit": {
      "type": "select",
      "required": false,
      "options": [
        "kg",
        "tonne",
        "litre",
        "piece",
        "other"
      ],
      "label": {
        "bn": "পরিমাণের একক",
        "en": "Quantity unit"
      }
    },
    "deliveryFrequency": {
      "type": "select",
      "required": true,
      "options": [
        "one-time",
        "daily",
        "weekly",
        "monthly",
        "to-discuss"
      ],
      "label": {
        "bn": "সরবরাহের প্রয়োজন",
        "en": "Supply frequency"
      }
    },
    "requiredBy": {
      "type": "date",
      "required": false,
      "notBefore": "today in Asia/Dhaka",
      "label": {
        "bn": "সম্ভাব্য প্রয়োজনের তারিখ",
        "en": "Indicative required date"
      }
    },
    "specification": {
      "type": "textarea",
      "required": true,
      "minLength": 20,
      "maxLength": 2000,
      "label": {
        "bn": "পণ্যের মান ও প্রয়োজন",
        "en": "Product specification and requirements"
      }
    },
    "partnerType": {
      "type": "select",
      "required": true,
      "options": [
        "hub",
        "logistics",
        "technology",
        "finance",
        "sponsor",
        "other"
      ],
      "label": {
        "bn": "পার্টনারশিপের ধরন",
        "en": "Partnership type"
      }
    },
    "spaceDescription": {
      "type": "textarea",
      "required": false,
      "maxLength": 2000,
      "label": {
        "bn": "স্থান ও সুবিধার বিবরণ",
        "en": "Space and facilities"
      }
    },
    "storageType": {
      "type": "select",
      "required": false,
      "options": [
        "ambient",
        "cold",
        "both",
        "to-discuss"
      ],
      "label": {
        "bn": "স্টোরেজের ধরন",
        "en": "Storage type"
      }
    },
    "transportAvailable": {
      "type": "select",
      "required": false,
      "options": [
        "yes",
        "no",
        "to-discuss"
      ],
      "label": {
        "bn": "পরিবহনের ব্যবস্থা আছে কি?",
        "en": "Is transport available?"
      }
    },
    "collaborationInterest": {
      "type": "textarea",
      "required": true,
      "minLength": 20,
      "maxLength": 2000,
      "label": {
        "bn": "সহযোগিতার আগ্রহ",
        "en": "Collaboration interest"
      }
    },
    "topic": {
      "type": "select",
      "required": true,
      "options": [
        "general",
        "farmer",
        "buyer",
        "hub",
        "partnership",
        "sponsorship"
      ],
      "label": {
        "bn": "বিষয়",
        "en": "Subject"
      }
    },
    "message": {
      "type": "textarea",
      "required": true,
      "minLength": 20,
      "maxLength": 2000,
      "label": {
        "bn": "বার্তা",
        "en": "Message"
      }
    },
    "consent": {
      "type": "checkbox",
      "required": true,
      "mustEqual": true,
      "label": {
        "bn": "আমার অনুসন্ধানের বিষয়ে যোগাযোগের জন্য তথ্য ব্যবহারে সম্মতি দিচ্ছি এবং গোপনীয়তা পেজটি পড়েছি।",
        "en": "I consent to use of my information to respond to this enquiry and have read the privacy page."
      }
    },
    "marketingConsent": {
      "type": "checkbox",
      "required": false,
      "default": false,
      "label": {
        "bn": "আমি আবাদ-এর ভবিষ্যৎ আপডেট ইমেইলে পেতে চাই।",
        "en": "I would like to receive future Abad updates by email."
      }
    },
    "farmTypeOther": {
      "type": "text",
      "required": "when farmType equals other",
      "minLength": 2,
      "maxLength": 200,
      "label": {
        "bn": "অন্যান্য হলে বিস্তারিত জানান",
        "en": "Describe the other option"
      }
    },
    "buyerTypeOther": {
      "type": "text",
      "required": "when buyerType equals other",
      "minLength": 2,
      "maxLength": 200,
      "label": {
        "bn": "অন্যান্য হলে বিস্তারিত জানান",
        "en": "Describe the other option"
      }
    },
    "productCategoryOther": {
      "type": "text",
      "required": "when productCategory equals other",
      "minLength": 2,
      "maxLength": 200,
      "label": {
        "bn": "অন্যান্য হলে বিস্তারিত জানান",
        "en": "Describe the other option"
      }
    },
    "partnerTypeOther": {
      "type": "text",
      "required": "when partnerType equals other",
      "minLength": 2,
      "maxLength": 200,
      "label": {
        "bn": "অন্যান্য হলে বিস্তারিত জানান",
        "en": "Describe the other option"
      }
    },
    "quantityUnitOther": {
      "type": "text",
      "required": "when quantityUnit equals other",
      "minLength": 2,
      "maxLength": 200,
      "label": {
        "bn": "অন্যান্য হলে বিস্তারিত জানান",
        "en": "Describe the other option"
      }
    }
  },
  "forms": {
    "farmer": [
      "name",
      "phone",
      "email",
      "districtId",
      "upazila",
      "farmType",
      "farmTypeOther",
      "farmName",
      "products",
      "notes",
      "consent"
    ],
    "buyer": [
      "name",
      "phone",
      "email",
      "organization",
      "buyerType",
      "buyerTypeOther",
      "districtId",
      "productCategory",
      "productCategoryOther",
      "quantity",
      "quantityUnit",
      "quantityUnitOther",
      "deliveryFrequency",
      "requiredBy",
      "specification",
      "consent"
    ],
    "hub": [
      "name",
      "phone",
      "email",
      "organization",
      "districtId",
      "upazila",
      "spaceDescription",
      "storageType",
      "transportAvailable",
      "collaborationInterest",
      "consent"
    ],
    "partner": [
      "name",
      "phone",
      "email",
      "organization",
      "partnerType",
      "partnerTypeOther",
      "districtId",
      "collaborationInterest",
      "consent"
    ],
    "sponsor": [
      "name",
      "phone",
      "email",
      "organization",
      "districtId",
      "collaborationInterest",
      "consent"
    ],
    "contact": [
      "name",
      "phone",
      "email",
      "topic",
      "message",
      "consent"
    ]
  },
  "rules": [
    "For contact only, require at least one of phone/email, not a mandatory phone if a valid email is supplied.",
    "Normalize Bengali digits and spaces before BD mobile validation; accept 01XXXXXXXXX, +8801XXXXXXXXX, 8801XXXXXXXXX, and 008801XXXXXXXXX; require supported operator prefix 013-019 after normalization.",
    "Quantity and quantityUnit must be supplied together or both omitted.",
    "Other selections reveal a required explanation of 2-200 characters; include the corresponding otherText field in the server allow-list.",
    "Marketing consent belongs only to newsletter; never infer it from lead consent.",
    "For a partner form, district is optional for technology, finance, sponsor or other organizations; required for hub and logistics.",
    "No form accepts identity documents, bank details, passwords, exact GPS, medical records, files or investment payments.",
    "Server validates a discriminated schema per kind, trims all strings, rejects unknown keys, normalizes allowed values and enforces a 16KB body limit.",
    "In live mode return 201 only after durable insertion; in demo mode return 200 mode=demo and do not persist PII.",
    "Rate limit production requests using a distributed store; do not rely on process memory in serverless deployment.",
    "Use Origin allow-list, honeypot and a short-lived privacy-preserving HMAC fingerprint for throttling. Do not log form bodies.",
    "Persist the consent text/version, timestamp and enquiry purpose. Keep marketing subscriptions separate.",
    "Deduplicate retries with idempotency key; never claim receipt on a network error. Return the same reference for a valid repeated request."
  ],
  "uiOptions": {
    "bn": {
      "crops": "ফসল",
      "vegetables-fruit": "সবজি ও ফল",
      "livestock-dairy": "গবাদিপশু ও দুগ্ধ",
      "fish": "মাছ",
      "mixed": "মিশ্র কৃষি",
      "other": "অন্যান্য",
      "restaurant": "রেস্টুরেন্ট",
      "supermarket": "সুপারশপ",
      "wholesaler": "পাইকার",
      "institution": "প্রাতিষ্ঠানিক ক্রেতা",
      "produce": "সবজি ও ফল",
      "grains": "শস্য",
      "inputs": "কৃষি উপকরণ",
      "one-time": "একবার",
      "daily": "প্রতিদিন",
      "weekly": "প্রতি সপ্তাহ",
      "monthly": "প্রতি মাস",
      "to-discuss": "আলোচনা সাপেক্ষে",
      "hub": "হাব / ডিলার",
      "logistics": "লজিস্টিকস",
      "technology": "উপকরণ / প্রযুক্তি",
      "finance": "অর্থায়ন সহযোগিতা",
      "sponsor": "স্পন্সরশিপ",
      "ambient": "সাধারণ স্টোরেজ",
      "cold": "কোল্ড স্টোরেজ",
      "both": "উভয় ধরনের",
      "yes": "হ্যাঁ",
      "no": "না",
      "general": "সাধারণ অনুসন্ধান",
      "farmer": "কৃষক",
      "buyer": "ব্যবসায়িক ক্রেতা",
      "partnership": "পার্টনারশিপ",
      "sponsorship": "স্পন্সরশিপ",
      "kg": "কেজি",
      "tonne": "টন",
      "litre": "লিটার",
      "piece": "পিস"
    },
    "en": {
      "crops": "Crops",
      "vegetables-fruit": "Vegetables & fruit",
      "livestock-dairy": "Livestock & dairy",
      "fish": "Fish",
      "mixed": "Mixed farming",
      "other": "Other",
      "restaurant": "Restaurant",
      "supermarket": "Supermarket",
      "wholesaler": "Wholesaler",
      "institution": "Institutional buyer",
      "produce": "Vegetables & fruit",
      "grains": "Grains",
      "inputs": "Agricultural inputs",
      "one-time": "One-time",
      "daily": "Daily",
      "weekly": "Weekly",
      "monthly": "Monthly",
      "to-discuss": "To discuss",
      "hub": "Hub / dealer",
      "logistics": "Logistics",
      "technology": "Inputs / technology",
      "finance": "Funding collaboration",
      "sponsor": "Sponsorship",
      "ambient": "Ambient storage",
      "cold": "Cold storage",
      "both": "Both",
      "yes": "Yes",
      "no": "No",
      "general": "General enquiry",
      "farmer": "Farmer",
      "buyer": "Business buyer",
      "partnership": "Partnership",
      "sponsorship": "Sponsorship",
      "kg": "kg",
      "tonne": "tonne",
      "litre": "litre",
      "piece": "piece"
    }
  },
  "newsletter": {
    "endpoint": "POST /api/newsletter",
    "fields": [
      "email",
      "marketingConsent",
      "locale",
      "website",
      "idempotencyKey"
    ],
    "doubleOptIn": true,
    "modeWithoutProvider": "disabled or demo; never live success"
  },
  "requirednessOverrides": {
    "contact": {
      "phone": "required only if email absent",
      "email": "required only if phone absent"
    },
    "hub": {
      "organization": false
    },
    "partner": {
      "districtId": "required for hub/logistics; optional for other types"
    },
    "sponsor": {
      "districtId": false
    }
  },
  "conditionalOtherFields": {
    "farmType": "farmTypeOther",
    "buyerType": "buyerTypeOther",
    "productCategory": "productCategoryOther",
    "partnerType": "partnerTypeOther",
    "quantityUnit": "quantityUnitOther"
  }
}
````

## Embedded file: `content/districts.json`

````json
{
  "source": "https://bangladesh.gov.bd/views/district-list",
  "checkedAt": "2026-10-14",
  "note": "Geographic list only. Presence does not mean Abad operates in a district. English names are readable transliterations. No geocoordinates or district-boundary data are included.",
  "districts": [
    {
      "id": "dhaka",
      "nameBn": "ঢাকা",
      "nameEn": "Dhaka",
      "divisionId": "dhaka",
      "divisionBn": "ঢাকা",
      "divisionEn": "Dhaka",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "faridpur",
      "nameBn": "ফরিদপুর",
      "nameEn": "Faridpur",
      "divisionId": "dhaka",
      "divisionBn": "ঢাকা",
      "divisionEn": "Dhaka",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "gazipur",
      "nameBn": "গাজীপুর",
      "nameEn": "Gazipur",
      "divisionId": "dhaka",
      "divisionBn": "ঢাকা",
      "divisionEn": "Dhaka",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "gopalganj",
      "nameBn": "গোপালগঞ্জ",
      "nameEn": "Gopalganj",
      "divisionId": "dhaka",
      "divisionBn": "ঢাকা",
      "divisionEn": "Dhaka",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "kishoreganj",
      "nameBn": "কিশোরগঞ্জ",
      "nameEn": "Kishoreganj",
      "divisionId": "dhaka",
      "divisionBn": "ঢাকা",
      "divisionEn": "Dhaka",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "madaripur",
      "nameBn": "মাদারীপুর",
      "nameEn": "Madaripur",
      "divisionId": "dhaka",
      "divisionBn": "ঢাকা",
      "divisionEn": "Dhaka",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "manikganj",
      "nameBn": "মানিকগঞ্জ",
      "nameEn": "Manikganj",
      "divisionId": "dhaka",
      "divisionBn": "ঢাকা",
      "divisionEn": "Dhaka",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "munshiganj",
      "nameBn": "মুন্সীগঞ্জ",
      "nameEn": "Munshiganj",
      "divisionId": "dhaka",
      "divisionBn": "ঢাকা",
      "divisionEn": "Dhaka",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "narayanganj",
      "nameBn": "নারায়ণগঞ্জ",
      "nameEn": "Narayanganj",
      "divisionId": "dhaka",
      "divisionBn": "ঢাকা",
      "divisionEn": "Dhaka",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "narsingdi",
      "nameBn": "নরসিংদী",
      "nameEn": "Narsingdi",
      "divisionId": "dhaka",
      "divisionBn": "ঢাকা",
      "divisionEn": "Dhaka",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "rajbari",
      "nameBn": "রাজবাড়ী",
      "nameEn": "Rajbari",
      "divisionId": "dhaka",
      "divisionBn": "ঢাকা",
      "divisionEn": "Dhaka",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "shariatpur",
      "nameBn": "শরীয়তপুর",
      "nameEn": "Shariatpur",
      "divisionId": "dhaka",
      "divisionBn": "ঢাকা",
      "divisionEn": "Dhaka",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "tangail",
      "nameBn": "টাঙ্গাইল",
      "nameEn": "Tangail",
      "divisionId": "dhaka",
      "divisionBn": "ঢাকা",
      "divisionEn": "Dhaka",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "bandarban",
      "nameBn": "বান্দরবান",
      "nameEn": "Bandarban",
      "divisionId": "chattogram",
      "divisionBn": "চট্টগ্রাম",
      "divisionEn": "Chattogram",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "brahmanbaria",
      "nameBn": "ব্রাহ্মণবাড়িয়া",
      "nameEn": "Brahmanbaria",
      "divisionId": "chattogram",
      "divisionBn": "চট্টগ্রাম",
      "divisionEn": "Chattogram",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "chandpur",
      "nameBn": "চাঁদপুর",
      "nameEn": "Chandpur",
      "divisionId": "chattogram",
      "divisionBn": "চট্টগ্রাম",
      "divisionEn": "Chattogram",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "chattogram",
      "nameBn": "চট্টগ্রাম",
      "nameEn": "Chattogram",
      "divisionId": "chattogram",
      "divisionBn": "চট্টগ্রাম",
      "divisionEn": "Chattogram",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "cumilla",
      "nameBn": "কুমিল্লা",
      "nameEn": "Cumilla",
      "divisionId": "chattogram",
      "divisionBn": "চট্টগ্রাম",
      "divisionEn": "Chattogram",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "coxsbazar",
      "nameBn": "কক্সবাজার",
      "nameEn": "Cox’s Bazar",
      "divisionId": "chattogram",
      "divisionBn": "চট্টগ্রাম",
      "divisionEn": "Chattogram",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "feni",
      "nameBn": "ফেনী",
      "nameEn": "Feni",
      "divisionId": "chattogram",
      "divisionBn": "চট্টগ্রাম",
      "divisionEn": "Chattogram",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "khagrachhari",
      "nameBn": "খাগড়াছড়ি",
      "nameEn": "Khagrachhari",
      "divisionId": "chattogram",
      "divisionBn": "চট্টগ্রাম",
      "divisionEn": "Chattogram",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "lakshmipur",
      "nameBn": "লক্ষ্মীপুর",
      "nameEn": "Lakshmipur",
      "divisionId": "chattogram",
      "divisionBn": "চট্টগ্রাম",
      "divisionEn": "Chattogram",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "noakhali",
      "nameBn": "নোয়াখালী",
      "nameEn": "Noakhali",
      "divisionId": "chattogram",
      "divisionBn": "চট্টগ্রাম",
      "divisionEn": "Chattogram",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "rangamati",
      "nameBn": "রাঙ্গামাটি",
      "nameEn": "Rangamati",
      "divisionId": "chattogram",
      "divisionBn": "চট্টগ্রাম",
      "divisionEn": "Chattogram",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "bagerhat",
      "nameBn": "বাগেরহাট",
      "nameEn": "Bagerhat",
      "divisionId": "khulna",
      "divisionBn": "খুলনা",
      "divisionEn": "Khulna",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "chuadanga",
      "nameBn": "চুয়াডাঙ্গা",
      "nameEn": "Chuadanga",
      "divisionId": "khulna",
      "divisionBn": "খুলনা",
      "divisionEn": "Khulna",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "jashore",
      "nameBn": "যশোর",
      "nameEn": "Jashore",
      "divisionId": "khulna",
      "divisionBn": "খুলনা",
      "divisionEn": "Khulna",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "jhenaidah",
      "nameBn": "ঝিনাইদহ",
      "nameEn": "Jhenaidah",
      "divisionId": "khulna",
      "divisionBn": "খুলনা",
      "divisionEn": "Khulna",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "khulna",
      "nameBn": "খুলনা",
      "nameEn": "Khulna",
      "divisionId": "khulna",
      "divisionBn": "খুলনা",
      "divisionEn": "Khulna",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "kushtia",
      "nameBn": "কুষ্টিয়া",
      "nameEn": "Kushtia",
      "divisionId": "khulna",
      "divisionBn": "খুলনা",
      "divisionEn": "Khulna",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "magura",
      "nameBn": "মাগুরা",
      "nameEn": "Magura",
      "divisionId": "khulna",
      "divisionBn": "খুলনা",
      "divisionEn": "Khulna",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "meherpur",
      "nameBn": "মেহেরপুর",
      "nameEn": "Meherpur",
      "divisionId": "khulna",
      "divisionBn": "খুলনা",
      "divisionEn": "Khulna",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "narail",
      "nameBn": "নড়াইল",
      "nameEn": "Narail",
      "divisionId": "khulna",
      "divisionBn": "খুলনা",
      "divisionEn": "Khulna",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "satkhira",
      "nameBn": "সাতক্ষীরা",
      "nameEn": "Satkhira",
      "divisionId": "khulna",
      "divisionBn": "খুলনা",
      "divisionEn": "Khulna",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "bogura",
      "nameBn": "বগুড়া",
      "nameEn": "Bogura",
      "divisionId": "rajshahi",
      "divisionBn": "রাজশাহী",
      "divisionEn": "Rajshahi",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "joypurhat",
      "nameBn": "জয়পুরহাট",
      "nameEn": "Joypurhat",
      "divisionId": "rajshahi",
      "divisionBn": "রাজশাহী",
      "divisionEn": "Rajshahi",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "naogaon",
      "nameBn": "নওগাঁ",
      "nameEn": "Naogaon",
      "divisionId": "rajshahi",
      "divisionBn": "রাজশাহী",
      "divisionEn": "Rajshahi",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "natore",
      "nameBn": "নাটোর",
      "nameEn": "Natore",
      "divisionId": "rajshahi",
      "divisionBn": "রাজশাহী",
      "divisionEn": "Rajshahi",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "chapainawabganj",
      "nameBn": "চাঁপাইনবাবগঞ্জ",
      "nameEn": "Chapainawabganj",
      "divisionId": "rajshahi",
      "divisionBn": "রাজশাহী",
      "divisionEn": "Rajshahi",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "pabna",
      "nameBn": "পাবনা",
      "nameEn": "Pabna",
      "divisionId": "rajshahi",
      "divisionBn": "রাজশাহী",
      "divisionEn": "Rajshahi",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "rajshahi",
      "nameBn": "রাজশাহী",
      "nameEn": "Rajshahi",
      "divisionId": "rajshahi",
      "divisionBn": "রাজশাহী",
      "divisionEn": "Rajshahi",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "sirajganj",
      "nameBn": "সিরাজগঞ্জ",
      "nameEn": "Sirajganj",
      "divisionId": "rajshahi",
      "divisionBn": "রাজশাহী",
      "divisionEn": "Rajshahi",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "habiganj",
      "nameBn": "হবিগঞ্জ",
      "nameEn": "Habiganj",
      "divisionId": "sylhet",
      "divisionBn": "সিলেট",
      "divisionEn": "Sylhet",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "moulvibazar",
      "nameBn": "মৌলভীবাজার",
      "nameEn": "Moulvibazar",
      "divisionId": "sylhet",
      "divisionBn": "সিলেট",
      "divisionEn": "Sylhet",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "sunamganj",
      "nameBn": "সুনামগঞ্জ",
      "nameEn": "Sunamganj",
      "divisionId": "sylhet",
      "divisionBn": "সিলেট",
      "divisionEn": "Sylhet",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "sylhet",
      "nameBn": "সিলেট",
      "nameEn": "Sylhet",
      "divisionId": "sylhet",
      "divisionBn": "সিলেট",
      "divisionEn": "Sylhet",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "dinajpur",
      "nameBn": "দিনাজপুর",
      "nameEn": "Dinajpur",
      "divisionId": "rangpur",
      "divisionBn": "রংপুর",
      "divisionEn": "Rangpur",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "gaibandha",
      "nameBn": "গাইবান্ধা",
      "nameEn": "Gaibandha",
      "divisionId": "rangpur",
      "divisionBn": "রংপুর",
      "divisionEn": "Rangpur",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "kurigram",
      "nameBn": "কুড়িগ্রাম",
      "nameEn": "Kurigram",
      "divisionId": "rangpur",
      "divisionBn": "রংপুর",
      "divisionEn": "Rangpur",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "lalmonirhat",
      "nameBn": "লালমনিরহাট",
      "nameEn": "Lalmonirhat",
      "divisionId": "rangpur",
      "divisionBn": "রংপুর",
      "divisionEn": "Rangpur",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "nilphamari",
      "nameBn": "নীলফামারী",
      "nameEn": "Nilphamari",
      "divisionId": "rangpur",
      "divisionBn": "রংপুর",
      "divisionEn": "Rangpur",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "panchagarh",
      "nameBn": "পঞ্চগড়",
      "nameEn": "Panchagarh",
      "divisionId": "rangpur",
      "divisionBn": "রংপুর",
      "divisionEn": "Rangpur",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "rangpur",
      "nameBn": "রংপুর",
      "nameEn": "Rangpur",
      "divisionId": "rangpur",
      "divisionBn": "রংপুর",
      "divisionEn": "Rangpur",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "thakurgaon",
      "nameBn": "ঠাকুরগাঁও",
      "nameEn": "Thakurgaon",
      "divisionId": "rangpur",
      "divisionBn": "রংপুর",
      "divisionEn": "Rangpur",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "jamalpur",
      "nameBn": "জামালপুর",
      "nameEn": "Jamalpur",
      "divisionId": "mymensingh",
      "divisionBn": "ময়মনসিংহ",
      "divisionEn": "Mymensingh",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "mymensingh",
      "nameBn": "ময়মনসিংহ",
      "nameEn": "Mymensingh",
      "divisionId": "mymensingh",
      "divisionBn": "ময়মনসিংহ",
      "divisionEn": "Mymensingh",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "netrokona",
      "nameBn": "নেত্রকোণা",
      "nameEn": "Netrokona",
      "divisionId": "mymensingh",
      "divisionBn": "ময়মনসিংহ",
      "divisionEn": "Mymensingh",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "sherpur",
      "nameBn": "শেরপুর",
      "nameEn": "Sherpur",
      "divisionId": "mymensingh",
      "divisionBn": "ময়মনসিংহ",
      "divisionEn": "Mymensingh",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "barguna",
      "nameBn": "বরগুনা",
      "nameEn": "Barguna",
      "divisionId": "barishal",
      "divisionBn": "বরিশাল",
      "divisionEn": "Barishal",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "barishal",
      "nameBn": "বরিশাল",
      "nameEn": "Barishal",
      "divisionId": "barishal",
      "divisionBn": "বরিশাল",
      "divisionEn": "Barishal",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "bhola",
      "nameBn": "ভোলা",
      "nameEn": "Bhola",
      "divisionId": "barishal",
      "divisionBn": "বরিশাল",
      "divisionEn": "Barishal",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "jhalokathi",
      "nameBn": "ঝালকাঠি",
      "nameEn": "Jhalokathi",
      "divisionId": "barishal",
      "divisionBn": "বরিশাল",
      "divisionEn": "Barishal",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "patuakhali",
      "nameBn": "পটুয়াখালী",
      "nameEn": "Patuakhali",
      "divisionId": "barishal",
      "divisionBn": "বরিশাল",
      "divisionEn": "Barishal",
      "networkStatus": "planned",
      "hubCount": null
    },
    {
      "id": "pirojpur",
      "nameBn": "পিরোজপুর",
      "nameEn": "Pirojpur",
      "divisionId": "barishal",
      "divisionBn": "বরিশাল",
      "divisionEn": "Barishal",
      "networkStatus": "planned",
      "hubCount": null
    }
  ]
}
````

## Embedded file: `content/route-manifest.json`

````json
{
  "locales": [
    "bn",
    "en"
  ],
  "defaultLocale": "bn",
  "rootRedirect": "/bn",
  "publicRoutes": [
    "/",
    "/about",
    "/ecosystem",
    "/services",
    "/farmers",
    "/buyers",
    "/partners",
    "/network",
    "/marketplace",
    "/insights",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
    "/services/farmer-brands",
    "/services/market-access",
    "/services/data-traceability",
    "/services/hubs-logistics",
    "/services/contract-farming",
    "/services/inputs-technology",
    "/services/training-demonstration",
    "/services/field-events"
  ],
  "optionalArticleRoutes": [],
  "privateRoutes": [
    "/admin"
  ],
  "excludedFromSitemap": [
    "/admin",
    "draft articles",
    "demo preview routes"
  ],
  "note": "The root redirects to /bn. Article drafts are not public until approved. All relative public paths get the active locale prefix."
}
````

## Embedded file: `content/POLICY_DRAFTS.md`

````markdown
# Website policy copy for implementation

These are editable website-copy drafts for the **first-release enquiry website**. They do not certify legal compliance. Before public release, the owner must confirm the actual company/operator identity, providers, retention, email contact and handling practices. Render only statements that match the implemented product; keep the pages clearly marked draft in private preview until finalized. The launch checklist contains the specific missing settings.

## গোপনীয়তা — বাংলা খসড়া

### এই ওয়েবসাইটে আপনার তথ্য

আবাদ লিমিটেডের সঙ্গে কৃষক হিসেবে যুক্ত হওয়ার আগ্রহ, ব্যবসায়িক পণ্যের চাহিদা বা সম্ভাব্য সহযোগিতা নিয়ে যোগাযোগ করতে আপনি তথ্য দিতে পারেন। আপনার অনুসন্ধান বোঝা, তার বিষয়ে যোগাযোগ করা এবং সম্ভাব্য পরবর্তী ধাপ সমন্বয়ের জন্য প্রয়োজনীয় তথ্য ব্যবহার করা হবে।

### কী তথ্য দেওয়া হতে পারে

ফর্ম অনুযায়ী আপনার নাম, মোবাইল নম্বর বা ইমেইল, জেলা, কৃষিকাজ বা প্রতিষ্ঠানের পরিচিতি, পণ্যের চাহিদা এবং আপনার লেখা বার্তা নেওয়া হতে পারে। এই ওয়েবসাইটের আগ্রহ ফর্মে জাতীয় পরিচয়পত্র, জমির দলিল, ব্যাংক বা কার্ডের তথ্য প্রয়োজন নেই। অনুগ্রহ করে বার্তার মধ্যে এসব তথ্য পাঠাবেন না।

### ডেমো ও চালু ফর্ম

প্রিভিউ বা ডেমো মোডে দেখানো ফর্ম আপনার তথ্য আবাদ-এর কাছে পাঠায় বা সংরক্ষণ করে না। চালু ফর্মে তথ্য সফলভাবে গ্রহণ করা হলে একটি রেফারেন্স নম্বর দেখানো হবে। ব্যর্থ বা অসম্পূর্ণ জমা গ্রহণ হয়েছে বলে দেখানো হবে না।

### তথ্য কারা ব্যবহার করতে পারেন

আপনার অনুসন্ধান পরিচালনার দায়িত্বে থাকা অনুমোদিত আবাদ টিম এবং প্রয়োজন অনুযায়ী ব্যবহৃত হোস্টিং, ডাটাবেজ বা যোগাযোগ সেবা প্রাসঙ্গিক তথ্য প্রক্রিয়াকরণ করতে পারে। চালুর আগে ব্যবহৃত সেবা, তাদের ভূমিকা এবং প্রয়োজনীয় তথ্যের পরিধি এই পেজে নির্দিষ্ট করতে হবে। আপনার অনুসন্ধানের তথ্য স্বয়ংক্রিয়ভাবে পাবলিক কৃষক স্টোর বা জেলা তালিকায় প্রকাশ করা হবে না।

### নিরাপত্তা ও সংরক্ষণ

ফর্মের তথ্য অনুমোদিত প্রবেশাধিকার ও প্রযুক্তিগত সুরক্ষার মাধ্যমে ব্যবস্থাপনার পরিকল্পনা রয়েছে। চালুর আগে বাস্তব সংরক্ষণ সময়, অপসারণের পদ্ধতি এবং প্রয়োজনীয় রেকর্ড রাখার সিদ্ধান্ত এই পেজে যুক্ত করতে হবে। কোনো সিস্টেমের নিরাপত্তা সম্পূর্ণ নিশ্চয়তার দাবি করা হচ্ছে না।

### আপডেট, সংশোধন ও যোগাযোগ

আপনার দেওয়া তথ্য সংশোধন বা অপসারণের অনুরোধের জন্য আবাদ-এর নির্ধারিত গোপনীয়তা যোগাযোগ ব্যবহার করুন। পরিচয় নিশ্চিত করা এবং প্রযোজ্য প্রয়োজন বিবেচনা করে অনুরোধ পরিচালনা করা হবে। আলাদা ইমেইল আপডেট চালু থাকলে তা পেতে পৃথক সম্মতি প্রয়োজন; সাধারণ অনুসন্ধান পাঠানো ইমেইল সাবস্ক্রিপশন নয়।

### কুকি ও প্রযুক্তিগত তথ্য

ওয়েবসাইটের ভাষা বা প্রয়োজনীয় ব্যবহার অভিজ্ঞতার জন্য সীমিত সেটিং থাকতে পারে। চালুর সময় কোন কুকি, প্রয়োজনীয় সেশন বা অ্যানালিটিকস ব্যবহৃত হচ্ছে তা স্পষ্ট করতে হবে। কোনো অ্যানালিটিকস বা মার্কেটিং ট্র্যাকার চালু না থাকলে তার দাবি বা সম্মতি ব্যবস্থা বানিয়ে দেখানো যাবে না।

## Privacy — English draft

### Your information on this website

You may provide information to discuss farmer participation, business sourcing or possible collaboration with Abad Limited. Relevant information will be used to understand your enquiry, respond to it and coordinate possible next steps.

### Information you may provide

Depending on the form, this may include your name, phone number or email, district, farming or organization details, sourcing requirements and your message. Initial website enquiries do not require national identification, land deeds, bank details or payment-card information. Please do not include these in your message.

### Preview and live forms

Forms marked preview or demo do not send or store your details with Abad. A live form displays a reference number after an enquiry is successfully received. Failed or incomplete submissions will not be represented as received.

### Who may process information

Authorized Abad personnel handling your enquiry and relevant hosting, database or communication providers may process necessary information. The actual providers, their roles and the information involved must be described here before launch. Enquiry details will not automatically be published as farmer stores or public district records.

### Security and retention

Information is intended to be managed using appropriate access controls and technical safeguards. Before launch, this page must describe the actual retention period, deletion process and any necessary recordkeeping. No claim of absolute system security is made.

### Updates, requests and contact

Use Abad’s designated privacy contact to request correction or deletion of information you supplied. Requests will be handled with appropriate identity verification and consideration of relevant requirements. If email updates are enabled, separate marketing consent is needed; sending an enquiry is not a newsletter subscription.

### Cookies and technical information

Limited settings may support language preference or essential website functionality. Before launch, describe the actual cookies, sessions or analytics in use. Do not create claims about analytics or marketing trackers that are not enabled.

## ব্যবহার শর্ত — বাংলা খসড়া

এই ওয়েবসাইট আবাদ লিমিটেডের পরিকল্পনা, সম্ভাব্য সেবা ও যোগাযোগের সুযোগ সম্পর্কে তথ্য দেয়। প্রকাশিত সেবার প্রাপ্যতা, এলাকা, মূল্য ও শর্ত সংশ্লিষ্ট অফার বা আলাদা চুক্তি অনুযায়ী নির্ধারিত হবে। ৬৪ জেলার নেটওয়ার্ক একটি সম্প্রসারণের লক্ষ্য; প্রতিটি জেলায় চালু সেবার দাবি নয়।

ওয়েবসাইটে আগ্রহ জানানো বা পণ্যের চাহিদা পাঠানো কোনো বিক্রয়, সরবরাহ, ঋণ, বিনিয়োগ বা পার্টনারশিপ চুক্তি তৈরি করে না। অর্থায়ন, সরবরাহ বা অন্য সেবায় অংশগ্রহণের আগে প্রযোজ্য যাচাই ও লিখিত শর্ত প্রয়োজন হতে পারে। নির্দিষ্ট আয়, সর্বোচ্চ বিক্রয়মূল্য, অর্থায়ন বা বিনিয়োগের লাভের নিশ্চয়তা দেওয়া হচ্ছে না।

সঠিক তথ্য দিয়ে যোগাযোগ করুন। অন্যের ব্যক্তিগত তথ্য অনুমতি ছাড়া পাঠাবেন না এবং ওয়েবসাইটের নিরাপত্তা বা স্বাভাবিক কার্যক্রমে হস্তক্ষেপ করবেন না। এই ওয়েবসাইটের কনটেন্ট ও ব্র্যান্ড উপকরণ ব্যবহারের অনুমতি আলাদাভাবে প্রযোজ্য। সংশ্লিষ্ট তৃতীয় পক্ষের লিংক বা সেবার নিজস্ব শর্ত থাকতে পারে।

আবাদ-এর চূড়ান্ত যোগাযোগ তথ্য, পরিচালন পরিচিতি এবং প্রয়োজনীয় শর্ত যাচাইয়ের পর এই পেজের কার্যকর তারিখ প্রকাশ করা হবে। কোনো প্রকৃত লেনদেন চালুর আগে সেই সেবার জন্য আলাদা ক্রয়, ডেলিভারি, ফেরত, অর্থপ্রদান ও নিষ্পত্তির শর্ত প্রকাশ করতে হবে।

## Terms of use — English draft

This website describes Abad Limited’s plans, possible services and ways to make enquiries. Service availability, locations, prices and terms depend on the relevant offer or separate agreement. A 64-district network is an expansion goal, not a claim of operational service in every district.

Expressing interest or sending a sourcing requirement does not create a sale, supply, loan, investment or partnership agreement. Relevant review and written terms may be needed before participation in funding, supply or other services. No fixed income, highest sale price, financing approval or investment return is guaranteed.

Please provide accurate information, do not submit another person's private information without permission, and do not interfere with website security or normal operation. Permissions for website content and brand materials apply separately. Linked third-party services may have their own terms.

The effective date will be published after the operator details, contact information and final terms are confirmed. Before genuine transactions are enabled, separate purchase, delivery, returns, payment and settlement terms must be provided for those services.

## Implementation note

The text above is deliberately a draft with explicit owner-editing instructions. Do not expose those editing instructions on a finalized production policy page. Generate final policy variants from verified configuration and retain the draft in the repository. A real privacy contact is a production dependency for live enquiry collection. Use the configured general company contact only if the owner designates it for that purpose.
````

## Embedded file: `database/001_lead_platform.sql`

````sql
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
````

## Embedded file: `OWNER_INPUTS.md`

````markdown
# Owner inputs for production release

Local development must proceed with the defaults in this handoff. Keep these values centralized; do not replace missing information with another company's details.

| Input | Current status | Local default | When needed |
| --- | --- | --- | --- |
| Company name and operating model | Supplied | Abad Limited / আবাদ লিমিটেড | Now |
| Four executive roles and Bangla names | Supplied | Exact names in corpus | Now |
| Executive English spellings | Provisional transliterations | Show authoritative Bangla names even on English cards until confirmed | Before English names are published |
| Official company email | Not supplied | Hide email link; preview form remains available | Live enquiry website |
| Company phone/WhatsApp | Not supplied | Hide those actions | Before those links appear |
| Office address | Not supplied | Hide address/map block | Before address/map appears |
| Actual domain | Not supplied | Relative URLs; staging noindex | Canonical SEO/public release |
| Company registration status/IDs | Not verified | No registration badge or identifier | Before registration claims appear |
| Logo | Original raster source included | Navy brand panel + clear text header | Transparent/vector header version optional |
| Actual portraits | Not supplied | Name/role typographic cards | Before portraits appear |
| Farm/logistics photographs and rights | Not supplied | Designed CSS/SVG compositions | Before photographs are used |
| Service availability/hubs | Not verified | Planned model and 64-district expansion goal | Before active labels appear |
| Partners/testimonials/impact metrics | Not supplied | Omit evidence sections | Before they appear |
| Commission/input pricing | Illustrative examples only | No published rates | Before commercial offers appear |
| Live backend/hosting account | Not configured by this task | Demo forms; no data collection | Before live receipt is represented |
| First trusted admin account | Not configured | No public admin access | Before admin use |
| Privacy contact/provider/retention decisions | Not supplied | Draft policies in private preview | Before live personal-data collection |
| Newsletter sender/provider | Not supplied | Newsletter hidden | Before subscribe feature appears |
| Payments/funding provider/escrow operations | Outside first release | Features disabled | Transactional platform stage |

There are no existing Abad phone numbers, addresses or email accounts established by this brief. In particular, do not reuse Connecting Dots Bangladesh's contacts or the reference company's identifiers.

Defaults are intentional reviewable choices. They do not prevent the site being built locally. The owner can supply several inputs together when moving from the private review to public operations.
````

## Embedded file: `SOURCES.md`

````markdown
# Source and provenance notes

- Company vision, mission, operating model, illustrative rates and the four named leadership roles: the user's complete brief in this conversation, supplied 14 October 2026.
- Website structure and visual reference: https://www.wegro.global/ — reviewed through web retrieval and a rendered browser view on 14 October 2026. Proposed Abad tokens/layout decisions are original implementation choices, not measured source code or copied assets.
- Antigravity workspace rules: https://antigravity.google/docs/rules/ — checked 14 October 2026. Compact `GEMINI.md` is used as a persistent pointer; the large master prompt stays a chat/reference document.
- Antigravity implementation plans: https://antigravity.google/docs/implementation-plan/ — checked 14 October 2026.
- Framework installation reference: https://nextjs.org/docs/app/getting-started/installation — current requirements must be matched at implementation time.
- Database RLS reference: https://supabase.com/docs/guides/database/postgres/row-level-security — informs server-side protected data design; no remote database was configured or tested in this handoff task.
- Bangladesh district list: https://bangladesh.gov.bd/views/district-list — checked 14 October 2026. The kit includes a geographic selection list, not official boundary geometry and not Abad operating coverage.
- Original Abad logo source: the user's existing “Minimal Abad Logo with Leaf Connector.png”, created 13 October 2026. Included unchanged under a filename suitable for web assets. Treat as the existing design source, without asserting trademark registration or image-rights clearance for third-party content.
- Public bilingual copy, educational article drafts, design tokens, forms, migration starter and implementation specifications: newly prepared for this handoff from the supplied brief. They are not quoted articles, research statistics, actual customer stories or a tested running site.
````

End of source brief. Implement the entire defined first release now, verify it, and provide the requested local-preview walkthrough.
