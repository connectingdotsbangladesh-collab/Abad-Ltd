import { generateRateLimitIdentity } from "./crypto";
import { isSupabaseConfigured, supabaseUrl, supabaseServiceRoleKey } from "../config";
import { createClient } from "@supabase/supabase-js";

// In-memory bucket store for development and demo mode
interface BucketEntry {
  count: number;
  resetAt: number;
}

const memoryStore = new Map<string, BucketEntry>();

// Purge expired memory entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of memoryStore.entries()) {
    if (entry.resetAt <= now) {
      memoryStore.delete(key);
    }
  }
}, 60000).unref();

export async function checkRateLimit(
  ip: string,
  userAgent?: string
): Promise<{ allowed: boolean; remaining: number }> {
  const identityHash = generateRateLimitIdentity(ip, userAgent);
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 5;

  if (isSupabaseConfigured) {
    try {
      const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
      const { data, error } = await supabase.rpc("consume_lead_rate_limit", {
        identity_hash_input: identityHash,
      });
      if (!error && typeof data === "boolean") {
        return { allowed: data, remaining: data ? 1 : 0 };
      }
    } catch {
      // Fallback to memory store if DB call fails
    }
  }

  const existing = memoryStore.get(identityHash);
  if (!existing || existing.resetAt <= now) {
    memoryStore.set(identityHash, {
      count: 1,
      resetAt: now + windowMs,
    });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (existing.count >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  existing.count += 1;
  return { allowed: true, remaining: maxRequests - existing.count };
}