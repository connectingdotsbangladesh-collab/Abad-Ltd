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
