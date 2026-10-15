import { z } from "zod";
import { getAllDistricts } from "./content";

// Normalizes Bengali digits (০-৯) to Western digits (0-9)
export function normalizeBengaliDigits(input: string): string {
  const bengaliToWestern: Record<string, string> = {
    "০": "0",
    "১": "1",
    "২": "2",
    "৩": "3",
    "৪": "4",
    "৫": "5",
    "৬": "6",
    "৭": "7",
    "৮": "8",
    "৯": "9",
  };
  return input.replace(/[০-৯]/g, (digit) => bengaliToWestern[digit] || digit);
}

// Normalizes Bangladesh mobile phone number to +8801XXXXXXXXX
export function normalizeBangladeshPhone(input: string): string | null {
  if (!input) return null;
  let cleaned = normalizeBengaliDigits(input.trim())
    .replace(/[\s\-\(\)\.]/g, "");

  if (cleaned.startsWith("008801")) {
    cleaned = "+8801" + cleaned.slice(6);
  } else if (cleaned.startsWith("8801")) {
    cleaned = "+8801" + cleaned.slice(4);
  } else if (cleaned.startsWith("01")) {
    cleaned = "+88" + cleaned;
  } else if (cleaned.startsWith("+8801")) {
    // Already normalized prefix
  } else {
    return null;
  }

  // Must match +8801[3-9]XXXXXXXX (total 14 chars, 11 digits after +88)
  const bdRegex = /^\+8801[3-9]\d{8}$/;
  if (!bdRegex.test(cleaned)) {
    return null;
  }

  return cleaned;
}

// Check if a date string YYYY-MM-DD is not before today in Asia/Dhaka
export function isNotBeforeTodayInDhaka(dateStr: string): boolean {
  if (!dateStr) return true;
  try {
    const inputDate = new Date(dateStr + "T00:00:00Z");
    if (isNaN(inputDate.getTime())) return false;

    // Get current date in Asia/Dhaka
    const nowDhakaStr = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Dhaka",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date());

    const todayDhaka = new Date(nowDhakaStr + "T00:00:00Z");
    return inputDate.getTime() >= todayDhaka.getTime();
  } catch {
    return false;
  }
}

const validDistrictIds = new Set(getAllDistricts().map((d) => d.id.toLowerCase()));

export function isValidDistrictId(id?: string | null): boolean {
  if (!id) return false;
  return validDistrictIds.has(id.toLowerCase());
}

// Base Fields Schemas
export const phoneSchema = z
  .string()
  .refine((val) => normalizeBangladeshPhone(val) !== null, {
    message: "INVALID_PHONE",
  });

export const optionalPhoneSchema = z
  .string()
  .optional()
  .refine((val) => !val || normalizeBangladeshPhone(val) !== null, {
    message: "INVALID_PHONE",
  });

export const emailSchema = z.string().email({ message: "INVALID_EMAIL" });
export const optionalEmailSchema = z.string().email({ message: "INVALID_EMAIL" }).optional().or(z.literal(""));

// Lead Envelope Schema
export const leadEnvelopeSchema = z.object({
  kind: z.enum(["farmer", "buyer", "hub", "partner", "sponsor", "contact"]),
  locale: z.enum(["bn", "en"]),
  districtId: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "CONSENT_REQUIRED" }),
  }),
  consentVersion: z.string().min(1),
  website: z.string().max(0).optional().or(z.literal("")), // Honeypot must be empty
  idempotencyKey: z.string().uuid({ message: "INVALID_IDEMPOTENCY_KEY" }),
  fields: z.record(z.any()),
});

// Discriminated Field Schemas per Kind
export const farmerFieldsSchema = z
  .object({
    name: z.string().min(2).max(100),
    phone: phoneSchema,
    email: optionalEmailSchema,
    upazila: z.string().max(100).optional().or(z.literal("")),
    farmType: z.enum(["crops", "vegetables-fruit", "livestock-dairy", "fish", "mixed", "other"]),
    farmTypeOther: z.string().max(200).optional(),
    farmName: z.string().max(150).optional().or(z.literal("")),
    products: z.string().max(300).optional().or(z.literal("")),
    notes: z.string().max(2000).optional().or(z.literal("")),
  })
  .refine(
    (data) => {
      if (data.farmType === "other") {
        return Boolean(data.farmTypeOther && data.farmTypeOther.trim().length >= 2);
      }
      return true;
    },
    { message: "OTHER_EXPLANATION_REQUIRED", path: ["farmTypeOther"] }
  );

export const buyerFieldsSchema = z
  .object({
    name: z.string().min(2).max(100),
    phone: phoneSchema,
    email: optionalEmailSchema,
    organization: z.string().min(2).max(150),
    buyerType: z.enum(["restaurant", "supermarket", "wholesaler", "institution", "other"]),
    buyerTypeOther: z.string().max(200).optional(),
    productCategory: z.enum(["produce", "grains", "livestock-dairy", "fish", "inputs", "other"]),
    productCategoryOther: z.string().max(200).optional(),
    quantity: z.number().positive().optional().nullable(),
    quantityUnit: z.enum(["kg", "tonne", "litre", "piece", "other"]).optional().nullable(),
    quantityUnitOther: z.string().max(200).optional(),
    deliveryFrequency: z.enum(["one-time", "daily", "weekly", "monthly", "to-discuss"]),
    requiredBy: z.string().optional().or(z.literal("")),
    specification: z.string().min(20).max(2000),
  })
  .refine(
    (data) => {
      if (data.buyerType === "other") {
        return Boolean(data.buyerTypeOther && data.buyerTypeOther.trim().length >= 2);
      }
      return true;
    },
    { message: "OTHER_EXPLANATION_REQUIRED", path: ["buyerTypeOther"] }
  )
  .refine(
    (data) => {
      if (data.productCategory === "other") {
        return Boolean(data.productCategoryOther && data.productCategoryOther.trim().length >= 2);
      }
      return true;
    },
    { message: "OTHER_EXPLANATION_REQUIRED", path: ["productCategoryOther"] }
  )
  .refine(
    (data) => {
      // Quantity and unit must be both present or both absent
      const hasQty = data.quantity !== undefined && data.quantity !== null;
      const hasUnit = data.quantityUnit !== undefined && data.quantityUnit !== null && data.quantityUnit !== ("" as any);
      return (hasQty && hasUnit) || (!hasQty && !hasUnit);
    },
    { message: "QUANTITY_AND_UNIT_MUST_COEXIST", path: ["quantityUnit"] }
  )
  .refine(
    (data) => {
      if (data.quantityUnit === "other") {
        return Boolean(data.quantityUnitOther && data.quantityUnitOther.trim().length >= 2);
      }
      return true;
    },
    { message: "OTHER_EXPLANATION_REQUIRED", path: ["quantityUnitOther"] }
  )
  .refine(
    (data) => {
      if (!data.requiredBy) return true;
      return isNotBeforeTodayInDhaka(data.requiredBy);
    },
    { message: "REQUIRED_BY_DATE_PAST", path: ["requiredBy"] }
  );

export const hubFieldsSchema = z.object({
  name: z.string().min(2).max(100),
  phone: phoneSchema,
  email: optionalEmailSchema,
  organization: z.string().max(150).optional().or(z.literal("")), // Optional for individual local entrepreneurs
  upazila: z.string().max(100).optional().or(z.literal("")),
  spaceDescription: z.string().max(2000).optional().or(z.literal("")),
  storageType: z.enum(["ambient", "cold", "both", "to-discuss"]).optional(),
  transportAvailable: z.enum(["yes", "no", "to-discuss"]).optional(),
  collaborationInterest: z.string().min(20).max(2000),
});

export const partnerFieldsSchema = z
  .object({
    name: z.string().min(2).max(100),
    phone: phoneSchema,
    email: optionalEmailSchema,
    organization: z.string().min(2).max(150),
    partnerType: z.enum(["hub", "logistics", "technology", "finance", "sponsor", "other"]),
    partnerTypeOther: z.string().max(200).optional(),
    collaborationInterest: z.string().min(20).max(2000),
  })
  .refine(
    (data) => {
      if (data.partnerType === "other") {
        return Boolean(data.partnerTypeOther && data.partnerTypeOther.trim().length >= 2);
      }
      return true;
    },
    { message: "OTHER_EXPLANATION_REQUIRED", path: ["partnerTypeOther"] }
  );

export const sponsorFieldsSchema = z.object({
  name: z.string().min(2).max(100),
  phone: phoneSchema,
  email: optionalEmailSchema,
  organization: z.string().min(2).max(150),
  collaborationInterest: z.string().min(20).max(2000),
});

export const contactFieldsSchema = z
  .object({
    name: z.string().min(2).max(100),
    phone: optionalPhoneSchema,
    email: optionalEmailSchema,
    topic: z.enum(["general", "farmer", "buyer", "hub", "partnership", "sponsorship"]),
    message: z.string().min(20).max(2000),
  })
  .refine(
    (data) => {
      // For contact, at least one of phone or email is required
      const hasPhone = Boolean(data.phone && normalizeBangladeshPhone(data.phone));
      const hasEmail = Boolean(data.email && data.email.trim().length > 0);
      return hasPhone || hasEmail;
    },
    { message: "CONTACT_METHOD_REQUIRED", path: ["phone"] }
  );