import assert from "assert";

const BASE_URL = "http://localhost:3000";

async function runTests() {
  console.log("=== Testing Running Production HTTP Server ===");

  // 1. Root redirect
  console.log("1. Testing root redirect / -> /bn...");
  const rootRes = await fetch(`${BASE_URL}/`, { redirect: "manual" });
  assert([301, 302, 307, 308].includes(rootRes.status), `Expected redirect, got ${rootRes.status}`);
  console.log("✓ Root redirects properly");

  // 2. Bangla and English homepages
  console.log("2. Testing /bn and /en status...");
  const bnRes = await fetch(`${BASE_URL}/bn`);
  assert.strictEqual(bnRes.status, 200);
  const bnHtml = await bnRes.text();
  assert(bnHtml.includes("আবাদ লিমিটেড"), "Bangla home missing brand name");
  console.log("✓ /bn renders 200 OK with Bangla brand name");

  const enRes = await fetch(`${BASE_URL}/en`);
  assert.strictEqual(enRes.status, 200);
  const enHtml = await enRes.text();
  assert(enHtml.includes("Abad Limited"), "English home missing brand name");
  console.log("✓ /en renders 200 OK with English brand name");

  // 3. Service Detail and 404 check
  console.log("3. Testing all 8 service slugs and 404 for invalid slug...");
  const validSlugs = [
    "farmer-brands",
    "market-access",
    "data-traceability",
    "hubs-logistics",
    "contract-farming",
    "inputs-technology",
    "training-demonstration",
    "field-events",
  ];
  for (const slug of validSlugs) {
    const res = await fetch(`${BASE_URL}/bn/services/${slug}`);
    assert.strictEqual(res.status, 200, `Expected 200 for ${slug}, got ${res.status}`);
  }
  console.log("✓ All 8 service slugs returned 200 OK");

  const invalidRes = await fetch(`${BASE_URL}/bn/services/fictitious-service-slug`);
  assert.strictEqual(invalidRes.status, 404, `Expected 404 for invalid slug, got ${invalidRes.status}`);
  console.log("✓ Invalid service slug returned 404 localized not found");

  // 4. Test Demo Lead Submission
  console.log("4. Testing POST /api/leads with valid demo payload...");
  const validPayload = {
    kind: "farmer",
    locale: "bn",
    districtId: "gazipur",
    consent: true,
    consentVersion: "privacy-v1",
    website: "",
    idempotencyKey: crypto.randomUUID(),
    fields: {
      name: "মোহাম্মদ রহিম",
      phone: "+8801712345678",
      farmType: "crops",
      products: "আমন ধান ও সরিষা",
    },
  };
  const leadRes = await fetch(`${BASE_URL}/api/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Host: "localhost:3000", Origin: "http://localhost:3000" },
    body: JSON.stringify(validPayload),
  });
  assert.strictEqual(leadRes.status, 200);
  const leadData = await leadRes.json();
  assert.strictEqual(leadData.ok, true);
  assert.strictEqual(leadData.mode, "demo");
  console.log("✓ Demo lead submission returned 200 with mode=demo");

  // 5. Test Lead Validation Failure (Invalid phone)
  console.log("5. Testing POST /api/leads with invalid phone prefix...");
  const invalidPayload = {
    ...validPayload,
    idempotencyKey: crypto.randomUUID(),
    fields: {
      ...validPayload.fields,
      phone: "01234567890", // Invalid BD mobile operator 012
    },
  };
  const invalidLeadRes = await fetch(`${BASE_URL}/api/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Host: "localhost:3000", Origin: "http://localhost:3000" },
    body: JSON.stringify(invalidPayload),
  });
  assert.strictEqual(invalidLeadRes.status, 422);
  console.log("✓ Rejected invalid phone with 422 Unprocessable Entity");

  // 6. Test Honeypot rejection
  console.log("6. Testing honeypot rejection...");
  const honeypotPayload = {
    ...validPayload,
    idempotencyKey: crypto.randomUUID(),
    website: "https://spam-bot.site",
  };
  const botRes = await fetch(`${BASE_URL}/api/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Host: "localhost:3000", Origin: "http://localhost:3000" },
    body: JSON.stringify(honeypotPayload),
  });
  assert([400, 422].includes(botRes.status), `Expected 400 or 422 for honeypot, got ${botRes.status}`);
  console.log("✓ Honeypot submission rejected with 400");

  // 7. Test Admin Leads Listing
  console.log("7. Testing GET /api/admin/leads...");
  const adminRes = await fetch(`${BASE_URL}/api/admin/leads`);
  assert.strictEqual(adminRes.status, 200);
  const adminData = await adminRes.json();
  assert.strictEqual(adminData.ok, true);
  assert(adminData.leads.length > 0, "Expected demo/sample leads in admin list");
  console.log(`✓ Admin API returned 200 OK with ${adminData.leads.length} leads`);

  // 8. Test Admin CSV Export
  console.log("8. Testing GET /api/admin/leads/export...");
  const exportRes = await fetch(`${BASE_URL}/api/admin/leads/export`);
  assert.strictEqual(exportRes.status, 200);
  const contentType = exportRes.headers.get("content-type");
  assert(contentType?.includes("text/csv"), `Expected CSV content-type, got ${contentType}`);
  const csvText = await exportRes.text();
  assert(csvText.includes("Reference,Date,Kind,Name"), "CSV header missing");
  console.log("✓ Admin CSV export returned 200 with valid CSV content");

  console.log("\nALL SERVER HTTP INTEGRATION CHECKS PASSED SUCCESSFULLY!");
}

runTests().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});