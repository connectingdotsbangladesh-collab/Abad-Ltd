import { NextRequest, NextResponse } from "next/server";
import {
  leadEnvelopeSchema,
  farmerFieldsSchema,
  buyerFieldsSchema,
  hubFieldsSchema,
  partnerFieldsSchema,
  sponsorFieldsSchema,
  contactFieldsSchema,
  isValidDistrictId,
} from "@/lib/validation";
import { checkRateLimit } from "@/lib/server/rate-limit";
import { processLeadSubmission } from "@/lib/server/lead-repository";

export async function POST(req: NextRequest) {
  try {
    // 1. Enforce Request Body Size Limit (16KB)
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 16384) {
      return NextResponse.json({ ok: false, error: "PAYLOAD_TOO_LARGE" }, { status: 413 });
    }

    // 2. Honeypot and Origin Verification
    const host = req.headers.get("host");
    const origin = req.headers.get("origin");
    if (origin && host) {
      try {
        const originUrl = new URL(origin);
        if (originUrl.host !== host) {
          return NextResponse.json({ ok: false, error: "ORIGIN_MISMATCH" }, { status: 403 });
        }
      } catch {
        return NextResponse.json({ ok: false, error: "INVALID_ORIGIN" }, { status: 403 });
      }
    }

    const rawBody = await req.json();

    // 3. Envelope Validation
    const envelopeResult = leadEnvelopeSchema.safeParse(rawBody);
    if (!envelopeResult.success) {
      return NextResponse.json(
        { ok: false, error: "INVALID_ENVELOPE", details: envelopeResult.error.format() },
        { status: 422 }
      );
    }
    const envelope = envelopeResult.data;

    // Reject if honeypot was populated
    if (envelope.website && envelope.website.trim().length > 0) {
      return NextResponse.json({ ok: false, error: "INVALID_REQUEST" }, { status: 400 });
    }

    // 4. District validation rule per kind:
    // - Farmer, Buyer, Hub require districtId
    // - Partner requires districtId only if partnerType is hub or logistics
    // - Sponsor: districtId is optional
    // - Contact: districtId not required
    const partnerType = envelope.fields?.partnerType;
    const isDistrictMandatory =
      envelope.kind === "farmer" ||
      envelope.kind === "buyer" ||
      envelope.kind === "hub" ||
      (envelope.kind === "partner" && (partnerType === "hub" || partnerType === "logistics"));

    if (isDistrictMandatory) {
      if (!envelope.districtId || !isValidDistrictId(envelope.districtId)) {
        return NextResponse.json(
          { ok: false, error: "VALID_DISTRICT_REQUIRED" },
          { status: 422 }
        );
      }
    } else if (envelope.districtId && !isValidDistrictId(envelope.districtId)) {
      return NextResponse.json(
        { ok: false, error: "INVALID_DISTRICT_ID" },
        { status: 422 }
      );
    }

    // 5. Discriminated Fields Validation
    let fieldsValidation;
    switch (envelope.kind) {
      case "farmer":
        fieldsValidation = farmerFieldsSchema.safeParse(envelope.fields);
        break;
      case "buyer":
        fieldsValidation = buyerFieldsSchema.safeParse(envelope.fields);
        break;
      case "hub":
        fieldsValidation = hubFieldsSchema.safeParse(envelope.fields);
        break;
      case "partner":
        fieldsValidation = partnerFieldsSchema.safeParse(envelope.fields);
        break;
      case "sponsor":
        fieldsValidation = sponsorFieldsSchema.safeParse(envelope.fields);
        break;
      case "contact":
        fieldsValidation = contactFieldsSchema.safeParse(envelope.fields);
        break;
      default:
        return NextResponse.json({ ok: false, error: "UNKNOWN_KIND" }, { status: 422 });
    }

    if (!fieldsValidation.success) {
      return NextResponse.json(
        { ok: false, error: "INVALID_FIELDS", details: fieldsValidation.error.format() },
        { status: 422 }
      );
    }

    // 6. Rate Limiting Check
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || "";
    const rateLimit = await checkRateLimit(ip, userAgent);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { ok: false, error: "RATE_LIMIT_EXCEEDED" },
        { status: 429 }
      );
    }

    // 7. Process Submission (Demo or Live Persistence)
    const result = await processLeadSubmission({
      ...envelope,
      fields: fieldsValidation.data,
    });

    return NextResponse.json(result.response, { status: result.status });
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: "INTERNAL_SERVER_ERROR" },
      { status: 500 }
    );
  }
}