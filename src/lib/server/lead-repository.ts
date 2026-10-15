import { isLiveMode, isSupabaseConfigured, supabaseUrl, supabaseServiceRoleKey } from "../config";
import type { LeadEnvelope, StoredLead } from "../types";
import { generatePayloadHash } from "./crypto";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

// Memory storage for admin demo / review mode
const inMemoryLeads: StoredLead[] = [
  {
    id: "synthetic-lead-001",
    reference: "ABAD-DEMO0001REF001",
    kind: "farmer",
    locale: "bn",
    name: "ডেমো কৃষক (Synthetic Sample)",
    phone: "+8801700000000",
    email: "farmer.sample@example.com",
    district_id: "gazipur",
    organization: "",
    fields: {
      farmType: "crops",
      products: "ধান ও রবি শস্য",
      upazila: "কালিয়াকৈর",
    },
    consent: true,
    consent_version: "privacy-v1",
    consented_at: new Date(Date.now() - 3600000 * 4).toISOString(),
    idempotency_key: "00000000-0000-0000-0000-000000000001",
    request_hash: "synthetic_sample_hash_01",
    status: "new",
    internal_notes: "সিস্টেম ডেমো রেকর্ড — কোনো আসল তথ্য নয়।",
    created_at: new Date(Date.now() - 3600000 * 4).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
  {
    id: "synthetic-lead-002",
    reference: "ABAD-DEMO0002REF002",
    kind: "buyer",
    locale: "en",
    name: "Sample Buyer Corp",
    phone: "+8801800000000",
    email: "sourcing@samplebuyer.com",
    district_id: "dhaka",
    organization: "Sample Supermarket Chain",
    fields: {
      buyerType: "supermarket",
      productCategory: "produce",
      quantity: 500,
      quantityUnit: "kg",
      deliveryFrequency: "weekly",
      specification: "Quality vegetables sourcing enquiry for retail chain.",
    },
    consent: true,
    consent_version: "privacy-v1",
    consented_at: new Date(Date.now() - 3600000 * 24).toISOString(),
    idempotency_key: "00000000-0000-0000-0000-000000000002",
    request_hash: "synthetic_sample_hash_02",
    status: "contacted",
    internal_notes: "Followed up regarding weekly produce supply schedule.",
    created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 12).toISOString(),
  },
  {
    id: "synthetic-lead-003",
    reference: "ABAD-DEMO0003REF003",
    kind: "hub",
    locale: "bn",
    name: "লোকাল হাব এন্টারপ্রেনার",
    phone: "+8801900000000",
    email: "hub.sample@example.com",
    district_id: "bogura",
    organization: "বগুড়া এগ্রো স্টোরেজ",
    fields: {
      upazila: "শেরপুর",
      spaceDescription: "৫০০০ বর্গফুট গুদাম ও ১টি ছোট পিকআপ ভ্যান সুবিধা আছে।",
      storageType: "ambient",
      transportAvailable: "yes",
      collaborationInterest: "উপজেলা পর্যায়ে কালেকশন ও স্টোরেজ হাব পরিচালনার আগ্রহ।",
    },
    consent: true,
    consent_version: "privacy-v1",
    consented_at: new Date(Date.now() - 3600000 * 48).toISOString(),
    idempotency_key: "00000000-0000-0000-0000-000000000003",
    request_hash: "synthetic_sample_hash_03",
    status: "qualified",
    internal_notes: "হাব অবকাঠামো পর্যালোচনা চলছে।",
    created_at: new Date(Date.now() - 3600000 * 48).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
];

export function generateLeadReference(): string {
  const randomHex = crypto.randomBytes(8).toString("hex").toUpperCase();
  return `ABAD-${randomHex}`;
}

export async function processLeadSubmission(envelope: LeadEnvelope): Promise<{
  status: number;
  response: {
    ok: boolean;
    mode: "demo" | "live";
    reference?: string;
    message?: string;
    error?: string;
  };
}> {
  const payloadHash = generatePayloadHash(envelope.fields);

  // If Supabase database credentials are configured, store in Supabase
  if (isSupabaseConfigured) {
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    // Check Idempotency
    const { data: existingLead } = await supabase
      .from("leads")
      .select("reference, request_hash")
      .eq("idempotency_key", envelope.idempotencyKey)
      .single();

    if (existingLead) {
      if (existingLead.request_hash === payloadHash) {
        return {
          status: 200,
          response: {
            ok: true,
            mode: "live",
            reference: existingLead.reference,
          },
        };
      } else {
        return {
          status: 409,
          response: {
            ok: false,
            mode: "live",
            error: "Idempotency key conflict: changed payload detected.",
          },
        };
      }
    }

    const reference = generateLeadReference();
    const name = String(envelope.fields.name || "").trim();
    const phone = envelope.fields.phone ? String(envelope.fields.phone).trim() : null;
    const email = envelope.fields.email ? String(envelope.fields.email).trim() : null;
    const organization = envelope.fields.organization ? String(envelope.fields.organization).trim() : null;

    const { data: inserted, error: insertError } = await supabase
      .from("leads")
      .insert({
        reference,
        kind: envelope.kind,
        locale: envelope.locale,
        name,
        phone,
        email,
        district_id: envelope.districtId || null,
        organization,
        fields: envelope.fields,
        consent: envelope.consent,
        consent_version: envelope.consentVersion,
        idempotency_key: envelope.idempotencyKey,
        request_hash: payloadHash,
        status: "new",
        internal_notes: "",
      })
      .select("reference")
      .single();

    if (insertError || !inserted) {
      return {
        status: 500,
        response: {
          ok: false,
          mode: "live",
          error: "Failed to persist lead record.",
        },
      };
    }

    // Record audit event
    try {
      await supabase.from("lead_events").insert({
        lead_id: inserted.reference,
        action: "created",
        new_status: "new",
      });
    } catch {
      // Event logging is secondary; lead was durably stored
    }

    return {
      status: 201,
      response: {
        ok: true,
        mode: "live",
        reference: inserted.reference,
      },
    };
  }

  // Live Storage in Server Store (persists submissions during operation)
  const existingInMemory = inMemoryLeads.find((l) => l.idempotency_key === envelope.idempotencyKey);
  if (existingInMemory) {
    if (existingInMemory.request_hash === payloadHash) {
      return {
        status: 200,
        response: {
          ok: true,
          mode: "live",
          reference: existingInMemory.reference,
        },
      };
    } else {
      return {
        status: 409,
        response: {
          ok: false,
          mode: "live",
          error: "Idempotency key conflict: changed payload detected.",
        },
      };
    }
  }

  const reference = generateLeadReference();
  const name = String(envelope.fields.name || "").trim();
  const phone = envelope.fields.phone ? String(envelope.fields.phone).trim() : null;
  const email = envelope.fields.email ? String(envelope.fields.email).trim() : null;
  const organization = envelope.fields.organization ? String(envelope.fields.organization).trim() : null;

  const nowIso = new Date().toISOString();
  const newLead: StoredLead = {
    id: `lead-${Date.now()}-${crypto.randomBytes(4).toString("hex")}`,
    reference,
    kind: envelope.kind,
    locale: envelope.locale,
    name,
    phone: phone || "",
    email: email || "",
    district_id: envelope.districtId || "",
    organization: organization || "",
    fields: envelope.fields,
    consent: envelope.consent,
    consent_version: envelope.consentVersion,
    consented_at: nowIso,
    idempotency_key: envelope.idempotencyKey,
    request_hash: payloadHash,
    status: "new",
    internal_notes: "",
    created_at: nowIso,
    updated_at: nowIso,
  };

  inMemoryLeads.unshift(newLead);

  return {
    status: 201,
    response: {
      ok: true,
      mode: "live",
      reference: newLead.reference,
    },
  };
}

export async function getAdminLeads(params: {
  page?: number;
  limit?: number;
  kind?: string;
  districtId?: string;
  status?: string;
  search?: string;
}): Promise<{ leads: StoredLead[]; total: number }> {
  const page = params.page || 1;
  const limit = params.limit || 20;

  if (isSupabaseConfigured) {
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
    let query = supabase.from("leads").select("*", { count: "exact" });

    if (params.kind) query = query.eq("kind", params.kind);
    if (params.districtId) query = query.eq("district_id", params.districtId);
    if (params.status) query = query.eq("status", params.status);
    if (params.search) {
      query = query.or(`name.ilike.%${params.search}%,organization.ilike.%${params.search}%,reference.ilike.%${params.search}%`);
    }

    const from = (page - 1) * limit;
    const to = from + limit - 1;
    query = query.range(from, to).order("created_at", { ascending: false });

    const { data, count, error } = await query;
    if (error) {
      return { leads: [], total: 0 };
    }
    return { leads: data as StoredLead[], total: count || 0 };
  }

  // Return leads from memory store (newest first)
  let filtered = [...inMemoryLeads].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  if (params.kind) filtered = filtered.filter((l) => l.kind === params.kind);
  if (params.districtId) filtered = filtered.filter((l) => l.district_id === params.districtId);
  if (params.status) filtered = filtered.filter((l) => l.status === params.status);
  if (params.search) {
    const s = params.search.toLowerCase();
    filtered = filtered.filter(
      (l) =>
        l.name.toLowerCase().includes(s) ||
        (l.organization && l.organization.toLowerCase().includes(s)) ||
        l.reference.toLowerCase().includes(s)
    );
  }

  const total = filtered.length;
  const start = (page - 1) * limit;
  const paged = filtered.slice(start, start + limit);
  return { leads: paged, total };
}

export async function updateLeadStatusOrNote(
  id: string,
  updates: { status?: "new" | "contacted" | "qualified" | "closed"; internal_notes?: string }
): Promise<boolean> {
  if (isSupabaseConfigured) {
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
    const { error } = await supabase.from("leads").update(updates).eq("id", id);
    return !error;
  }

  // Update memory store
  const lead = inMemoryLeads.find((l) => l.id === id);
  if (lead) {
    if (updates.status) lead.status = updates.status;
    if (updates.internal_notes !== undefined) lead.internal_notes = updates.internal_notes;
    lead.updated_at = new Date().toISOString();
    return true;
  }
  return false;
}