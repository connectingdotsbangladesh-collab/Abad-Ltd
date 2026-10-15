# Handoff package verification

Checked during preparation on 14 October 2026:

- All included JSON files parse as UTF-8 JSON.
- Bangla and English site dictionaries have matching keys, list structure and value types.
- Eight stable service IDs, four named executives with four responsibility groups each, and twelve FAQ items are present.
- All six enquiry form kinds reference defined fields and include consent.
- Per-form requiredness and conditional other-option fields are explicitly specified.
- Geographic data includes 64 unique districts across eight divisions; all Abad network statuses are planned/unpublished.
- Contact/domain fields are empty, and payment, financing and live-marketplace flags remain off.
- The original logo bytes are preserved unchanged.
- The compact GEMINI.md rule is below the documented 24KB per-rule file size limit.
- The master prompt embeds the specification and machine-readable source files for a standalone text handoff.
- The ZIP was read back for integrity and contains every intended package file.

This is verification of the handoff files. No Next.js application was built or hosted in this task. The SQL starter was reviewed as a schema specification but not executed against Supabase. Website runtime, live submissions, admin authorization, Lighthouse scores and responsive rendering must be verified by Antigravity after implementation using specs/ACCEPTANCE_TESTS.md.
