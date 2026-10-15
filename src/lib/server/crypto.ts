import crypto from "crypto";
import { requestHashSecret } from "../config";

// Generates canonical hash of the lead payload
export function generatePayloadHash(payload: Record<string, any>): string {
  // Canonical string representation by sorting keys
  const sorted = Object.keys(payload)
    .sort()
    .reduce<Record<string, any>>((acc, key) => {
      acc[key] = payload[key];
      return acc;
    }, {});
  const jsonStr = JSON.stringify(sorted);
  return crypto.createHmac("sha256", requestHashSecret).update(jsonStr).digest("hex");
}

// Generates a short-lived, privacy-preserving identity hash for rate limiting
export function generateRateLimitIdentity(ip: string, userAgent?: string): string {
  const salt = new Date().toISOString().slice(0, 13); // Changes hourly
  return crypto
    .createHmac("sha256", requestHashSecret)
    .update(`${ip}:${userAgent || ""}:${salt}`)
    .digest("hex");
}

// Neutralizes potential CSV formula injection payloads
export function sanitizeCsvCell(value: any): string {
  if (value === null || value === undefined) return "";
  const stringVal = String(value);
  // If cell begins with =, +, -, @, tab (\t), or carriage return (\r), prefix with single quote
  if (/^[=\+\-@\t\r]/.test(stringVal)) {
    return `'${stringVal.replace(/"/g, '""')}`;
  }
  return `"${stringVal.replace(/"/g, '""')}"`;
}