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
