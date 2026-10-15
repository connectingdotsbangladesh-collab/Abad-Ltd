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
