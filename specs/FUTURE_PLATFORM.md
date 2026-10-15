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
