# আবাদ লিমিটেড — Antigravity handoff

এই প্যাকেজটি আপনার কোম্পানি প্রোফাইল অনুযায়ী Google Antigravity-কে দিয়ে একটি পূর্ণাঙ্গ বাংলা ও ইংরেজি ওয়েবসাইট তৈরির নির্দেশনা। এটি এখনো তৈরি বা প্রকাশিত ওয়েবসাইটের source code নয়; Antigravity-র কাজ হলো এখানে দেওয়া নির্দেশনা অনুযায়ী কোড তৈরি, চালানো ও যাচাই করা।

## ব্যবহার করার সবচেয়ে সহজ পদ্ধতি

1. ZIP ফাইলটি extract করুন।
2. Google Antigravity-তে `Abad_Antigravity_Package` ফোল্ডারটি project/workspace হিসেবে খুলুন।
3. Agent chat-এ নিচের ছোট নির্দেশনাটি paste করুন অথবা `ANTIGRAVITY_START_PROMPT.txt`-এর সম্পূর্ণ লেখা ব্যবহার করুন।
4. তৈরি সাইটের local preview দেখে মূল্যায়ন করুন। কোনো review setting-এর কারণে Antigravity আলাদা implementation plan approval চাইলে সেই plan যাচাই করে agent-কে কাজ চালাতে দিন।
5. আপনার প্রতিষ্ঠানের contact information, hosting/database settings ও বাস্তব media যোগ করে live submission পরীক্ষা করার পর প্রকাশের সিদ্ধান্ত নিন।

```text
Build the complete Abad Limited website defined in this workspace. Read
ANTIGRAVITY_MASTER_PROMPT.md, GEMINI.md, the specs, bilingual content,
site.config.json and the included logo source. Implement all first-release
pages and interactions, not just a plan or homepage. Default to Bangla with
a complete English switch. Use honest demo forms without credentials.
Run the build and the acceptance checks, fix failures, start the local
preview, and provide a walkthrough plus remaining owner configuration.
```

## শুধু একটি prompt দিতে চাইলে

`ANTIGRAVITY_MASTER_PROMPT.md`-এর সম্পূর্ণ লেখা copy করে নতুন Antigravity project-এর agent chat-এ দিন। একই prompt-এর plain-text সংস্করণ আলাদা download হিসেবে দেওয়া হয়েছে। Master prompt-এর মধ্যে website specification, public copy, company model, forms, settings ও starter schema সংযুক্ত আছে। অতিরিক্ত files ছাড়াও Antigravity এগুলো পুনরায় তৈরি করতে পারবে। তবে আপনার বিদ্যমান Abad logo image স্বয়ংক্রিয়ভাবে ওই text prompt-এ যাবে না; original logo ব্যবহার করতে ZIP-এর `public/brand/abad-logo-source.png`-ও দিন।

ফোল্ডারসহ পদ্ধতিটি বড় prompt বারবার paste করার প্রয়োজন কমায় এবং original logo দেয়। Master prompt কোনো Antigravity rule file হিসেবে ব্যবহার করবেন না; compact `GEMINI.md` সেই কাজের জন্য রাখা হয়েছে।

## প্যাকেজে কী আছে

| File/folder | কাজ |
| --- | --- |
| `ANTIGRAVITY_MASTER_PROMPT.md` | এক জায়গায় সম্পূর্ণ implementation নির্দেশনা ও কনটেন্ট |
| `ANTIGRAVITY_START_PROMPT.txt` | ফোল্ডার খুলে agent chat-এ দেওয়ার ছোট prompt |
| `GEMINI.md` | Antigravity-এর জন্য সংক্ষিপ্ত স্থায়ী project rules |
| `content/site-copy.bn.json` / `.en.json` | একই গঠনে বাংলা ও ইংরেজি পেজ copy, ৮ সেবা, নেতৃত্ব ও ১২ FAQ |
| `content/company-model.json` | পূর্ণ operating model, revenue categories এবং management responsibilities |
| `content/form-spec.json` | কৃষক, ক্রেতা, হাব, পার্টনার, স্পন্সর ও সাধারণ enquiry form |
| `content/districts.json` | ৮ বিভাগের ৬৪ জেলার enquiry selection data |
| `content/POLICY_DRAFTS.md` | বাস্তব implementation অনুযায়ী finalize করার policy copy |
| `design/` | colour/type/spacing tokens এবং media brief |
| `public/brand/abad-logo-source.png` | আপনার আগের Abad logo source |
| `specs/` | পেজ বিন্যাস, backend behaviour, admin permissions, future platform ও QA matrix |
| `database/001_lead_platform.sql` | নতুন Supabase project-এর lead-platform starter schema; এই task-এ run করা হয়নি |
| `site.config.json` / `.env.example` | কেন্দ্রীয় site settings ও credential placeholders |
| `OWNER_INPUTS.md` | কোন real company information এখনো দিতে হবে |

## ওয়েবসাইটের প্রথম সংস্করণ

হোম, About, Ecosystem, Services এবং ৮ service detail page, Farmers, Buyers, Partners, Network, planned Marketplace, Insights, FAQ, Contact, Privacy ও Terms থাকবে। কৃষক, ব্যবসায়িক ক্রেতা ও পার্টনারের আলাদা enquiry flow থাকবে। Live backend থাকলে enquiry database-এ যাবে এবং protected admin-এ ব্যবস্থাপনা করা যাবে। Credentials ছাড়া review version-এর forms ব্যক্তিগত তথ্য পাঠাবে বা সংরক্ষণ করবে না।

মাল্টি-ভেন্ডর অর্ডার, বাস্তব checkout, payment/escrow এবং অর্থায়নের transaction চালুর জন্য আলাদা operational platform specification দেওয়া আছে। এ ধরনের service ইতোমধ্যে চালু—এমন দাবি করা হবে না।

৬৪ জেলার তথ্য geography selector; সব জেলায় Abad hub চালু আছে এমন দাবি নয়। ২% কমিশন এবং ট্যাগের ৭০/৬০ টাকা উদাহরণ internal model reference হিসেবে রাখা হয়েছে। `biniyog.io`-কে confirmed partner বলা হয়নি।

## English quick start

Open the extracted folder in Google Antigravity and paste `ANTIGRAVITY_START_PROMPT.txt` into the agent. The larger master file is self-contained for a text-only handoff, while the folder includes the original raster logo and machine-readable content. Ask the agent to implement and verify the complete first release. Live deployment, actual transactions and operational claims require the corresponding real settings and evidence. This package is an implementation specification and content kit, not a running application.

Official Antigravity documentation checked on 14 October 2026 documents `GEMINI.md` as a supported workspace rule file. The small file in this kit points to the fuller documents. The kit intentionally uses a chat prompt rather than a legacy custom slash workflow.

Sources: https://antigravity.google/docs/rules/ and https://antigravity.google/docs/implementation-plan/
