import assert from "assert";
import {
  normalizeBengaliDigits,
  normalizeBangladeshPhone,
  isNotBeforeTodayInDhaka,
  isValidDistrictId,
} from "../src/lib/validation.js";
import { sanitizeCsvCell, generatePayloadHash } from "../src/lib/server/crypto.js";

console.log("--- Starting Acceptance Tests Execution ---");

// Test 1: Bengali Digits Normalization
console.log("Test 1: Bengali digits conversion...");
assert.strictEqual(normalizeBengaliDigits("০১৭১২৩৪৫৬৭৮"), "01712345678");
assert.strictEqual(normalizeBengaliDigits("১২৩৪৫৬৭৮৯০"), "1234567890");
console.log("✓ Test 1 Passed");

// Test 2: Bangladesh Phone Normalization & Operator Prefix validation (013-019)
console.log("Test 2: Bangladesh phone normalization...");
assert.strictEqual(normalizeBangladeshPhone("01712345678"), "+8801712345678");
assert.strictEqual(normalizeBangladeshPhone("+8801812345678"), "+8801812345678");
assert.strictEqual(normalizeBangladeshPhone("8801912345678"), "+8801912345678");
assert.strictEqual(normalizeBangladeshPhone("008801312345678"), "+8801312345678");
assert.strictEqual(normalizeBangladeshPhone("০১৭১২৩৪৫৬৭৮"), "+8801712345678"); // Bengali digits
assert.strictEqual(normalizeBangladeshPhone("0171 234 5678"), "+8801712345678"); // Spaces
assert.strictEqual(normalizeBangladeshPhone("01212345678"), null); // Invalid operator prefix 012
assert.strictEqual(normalizeBangladeshPhone("01712345"), null); // Too short
assert.strictEqual(normalizeBangladeshPhone("01712345678999"), null); // Too long
console.log("✓ Test 2 Passed");

// Test 3: Desired Date not in the past according to Asia/Dhaka
console.log("Test 3: Asia/Dhaka future date validation...");
assert.strictEqual(isNotBeforeTodayInDhaka("2020-01-01"), false); // Past date rejected
assert.strictEqual(isNotBeforeTodayInDhaka("2099-12-31"), true); // Future date accepted
assert.strictEqual(isNotBeforeTodayInDhaka(""), true); // Optional empty accepted
console.log("✓ Test 3 Passed");

// Test 4: District ID validation from official 64 districts
console.log("Test 4: District ID lookup...");
assert.strictEqual(isValidDistrictId("dhaka"), true);
assert.strictEqual(isValidDistrictId("bogura"), true);
assert.strictEqual(isValidDistrictId("gazipur"), true);
assert.strictEqual(isValidDistrictId("fictional_district"), false);
console.log("✓ Test 4 Passed");

// Test 5: CSV Formula Injection Sanitization
console.log("Test 5: CSV formula sanitization...");
assert.strictEqual(sanitizeCsvCell("=1+1"), "'=1+1");
assert.strictEqual(sanitizeCsvCell("@SUM(A1)"), "'@SUM(A1)");
assert.strictEqual(sanitizeCsvCell("+cmd"), "'+cmd");
assert.strictEqual(sanitizeCsvCell("-calc"), "'-calc");
assert.strictEqual(sanitizeCsvCell("\tpayload"), "'\tpayload");
assert.strictEqual(sanitizeCsvCell("Regular text"), '"Regular text"');
console.log("✓ Test 5 Passed");

// Test 6: Payload Hash Determinism & Idempotency Key Conflict Detection
console.log("Test 6: Payload HMAC hashing & conflict detection...");
const payloadA = { name: "Rahim", phone: "+8801711111111", farmType: "crops" };
const payloadB = { farmType: "crops", name: "Rahim", phone: "+8801711111111" }; // Same, different order
const payloadC = { name: "Rahim", phone: "+8801711111111", farmType: "fish" }; // Changed

const hashA = generatePayloadHash(payloadA);
const hashB = generatePayloadHash(payloadB);
const hashC = generatePayloadHash(payloadC);

assert.strictEqual(hashA, hashB); // Key order independence
assert.notStrictEqual(hashA, hashC); // Detects payload change
console.log("✓ Test 6 Passed");

console.log("\nALL ACCEPTANCE CRITERIA UNIT TESTS PASSED SUCCESSFULLY! (6/6)");