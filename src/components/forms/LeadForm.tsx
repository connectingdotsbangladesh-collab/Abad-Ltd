"use client";

import React, { useState, useEffect, useRef } from "react";
import { LeadFormProps, LeadFormData } from "./types";
import { FormAlerts } from "./FormAlerts";
import { KindFields } from "./KindFields";
import { dataMode } from "@/lib/config";
import { normalizeBangladeshPhone, isNotBeforeTodayInDhaka } from "@/lib/validation";
import { Send } from "lucide-react";

export function LeadForm({
  kind,
  locale,
  copy,
  districts,
  prefilledDistrictId = "",
  className = "",
}: LeadFormProps) {
  const isBn = locale === "bn";
  const [districtId, setDistrictId] = useState(prefilledDistrictId);
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    phone: "",
    email: "",
    organization: "",
    upazila: "",
    farmType: "crops",
    farmTypeOther: "",
    farmName: "",
    products: "",
    buyerType: "restaurant",
    buyerTypeOther: "",
    productCategory: "produce",
    productCategoryOther: "",
    quantity: "",
    quantityUnit: "kg",
    quantityUnitOther: "",
    deliveryFrequency: "weekly",
    requiredBy: "",
    specification: "",
    partnerType: "hub",
    partnerTypeOther: "",
    spaceDescription: "",
    storageType: "ambient",
    transportAvailable: "yes",
    collaborationInterest: "",
    topic: "general",
    message: "",
    notes: "",
    consent: false,
    website: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<"idle" | "demoSuccess" | "liveSuccess" | "error">("idle");
  const [liveReference, setLiveReference] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [idempotencyKey] = useState(() => crypto.randomUUID());

  const errorSummaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefilledDistrictId) {
      setDistrictId(prefilledDistrictId);
    }
  }, [prefilledDistrictId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.name || formData.name.trim().length < 2) {
      errs.name = copy.common.validation.name;
    }

    if (kind === "contact") {
      const hasPhone = Boolean(formData.phone && normalizeBangladeshPhone(formData.phone));
      const hasEmail = Boolean(formData.email && formData.email.trim().includes("@"));
      if (!hasPhone && !hasEmail) {
        errs.phone = isBn
          ? "অন্তত একটি বৈধ মোবাইল নম্বর বা ইমেইল ঠিকানা দিন।"
          : "Please provide at least one valid phone or email address.";
      }
    } else {
      if (!formData.phone || !normalizeBangladeshPhone(formData.phone)) {
        errs.phone = copy.common.validation.phone;
      }
    }

    const isDistrictRequired =
      kind === "farmer" ||
      kind === "buyer" ||
      kind === "hub" ||
      (kind === "partner" && (formData.partnerType === "hub" || formData.partnerType === "logistics"));

    if (isDistrictRequired && (!districtId || districtId.trim() === "")) {
      errs.districtId = copy.common.validation.district;
    }

    if (kind === "buyer") {
      if (!formData.organization || formData.organization.trim().length < 2) {
        errs.organization = isBn ? "প্রতিষ্ঠানের নাম লিখুন।" : "Please enter organization name.";
      }
      if (!formData.specification || formData.specification.trim().length < 20) {
        errs.specification = isBn
          ? "পণ্যের মান ও প্রয়োজনের বিবরণ অন্তত ২০ অক্ষরে লিখুন।"
          : "Specification must be at least 20 characters.";
      }
      if (formData.quantity) {
        const qtyNum = parseFloat(formData.quantity);
        if (isNaN(qtyNum) || qtyNum <= 0) {
          errs.quantity = copy.common.validation.quantity;
        }
      }
      if (formData.requiredBy && !isNotBeforeTodayInDhaka(formData.requiredBy)) {
        errs.requiredBy = isBn
          ? "অতীতের কোনো তারিখ নির্বাচন করা যাবে না।"
          : "Required date cannot be in the past.";
      }
    }

    if (kind === "hub" || kind === "partner" || kind === "sponsor") {
      if (kind !== "hub" && (!formData.organization || formData.organization.trim().length < 2)) {
        errs.organization = isBn ? "প্রতিষ্ঠানের নাম লিখুন।" : "Please enter organization name.";
      }
      if (!formData.collaborationInterest || formData.collaborationInterest.trim().length < 20) {
        errs.collaborationInterest = isBn
          ? "সহযোগিতার আগ্রহের বিবরণ অন্তত ২০ অক্ষরে লিখুন।"
          : "Collaboration interest must be at least 20 characters.";
      }
    }

    if (kind === "contact" && (!formData.message || formData.message.trim().length < 20)) {
      errs.message = copy.common.validation.message;
    }

    if (!formData.consent) {
      errs.consent = copy.common.validation.consent;
    }

    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      setTimeout(() => {
        const firstKey = Object.keys(errs)[0];
        const el = document.getElementById(`field-${firstKey}`);
        if (el) el.focus();
        else if (errorSummaryRef.current) errorSummaryRef.current.focus();
      }, 50);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedStatus("idle");
    setErrorMessage("");

    if (!validate()) return;

    try {
      setSubmitting(true);
      const envelope = {
        kind,
        locale,
        districtId: districtId || undefined,
        consent: formData.consent,
        consentVersion: "privacy-v1",
        website: formData.website,
        idempotencyKey,
        fields: {
          ...formData,
          phone: normalizeBangladeshPhone(formData.phone) || formData.phone,
          quantity: formData.quantity ? parseFloat(formData.quantity) : undefined,
        },
      };

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(envelope),
      });

      const data = await res.json();
      setSubmitting(false);

      if (res.ok && data.ok) {
        setLiveReference(data.reference || "");
        setSubmittedStatus("liveSuccess");
      } else {
        setSubmittedStatus("error");
        setErrorMessage(data.error || copy.common.failure);
      }
    } catch {
      setSubmitting(false);
      setSubmittedStatus("error");
      setErrorMessage(copy.common.failure);
    }
  };

  return (
    <div className={`bg-white rounded-2xl p-4 sm:p-8 border border-border shadow-soft ${className}`}>
      <FormAlerts
        isDemo={false}
        locale={locale}
        copy={copy}
        errors={errors}
        errorSummaryRef={errorSummaryRef}
        submittedStatus={submittedStatus}
        liveReference={liveReference}
        errorMessage={errorMessage}
      />

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="field-name" className="block text-sm font-semibold text-brand-navy mb-1.5">
              {isBn ? "আপনার নাম" : "Your Name"} <span className="text-danger">*</span>
            </label>
            <input
              id="field-name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              className={`w-full px-4 py-2.5 rounded-lg border text-ink bg-canvas/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-focus text-base ${
                errors.name ? "border-danger ring-1 ring-danger" : "border-border"
              }`}
              placeholder={isBn ? "উদা: মোহাম্মদ রহিম" : "e.g. John Doe"}
            />
          </div>

          <div>
            <label htmlFor="field-phone" className="block text-sm font-semibold text-brand-navy mb-1.5">
              {isBn ? "মোবাইল নম্বর" : "Mobile Number"}{" "}
              {kind === "contact" ? (
                <span className="text-xs text-muted font-normal">({copy.common.optional})</span>
              ) : (
                <span className="text-danger">*</span>
              )}
            </label>
            <input
              id="field-phone"
              name="phone"
              type="tel"
              required={kind !== "contact"}
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={Boolean(errors.phone)}
              className={`w-full px-4 py-2.5 rounded-lg border text-ink bg-canvas/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-focus text-base ${
                errors.phone ? "border-danger ring-1 ring-danger" : "border-border"
              }`}
              placeholder="017XXXXXXXX"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="field-email" className="block text-sm font-semibold text-brand-navy mb-1.5">
              {isBn ? "ইমেইল" : "Email"}{" "}
              <span className="text-xs text-muted font-normal">
                {kind === "contact" ? "(ফোন না দিলে আবশ্যক)" : `(${copy.common.optional})`}
              </span>
            </label>
            <input
              id="field-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label htmlFor="field-districtId" className="block text-sm font-semibold text-brand-navy mb-1.5">
              {isBn ? "জেলা" : "District"}{" "}
              {kind === "farmer" || kind === "buyer" || kind === "hub" ? (
                <span className="text-danger">*</span>
              ) : (
                <span className="text-xs text-muted font-normal">({copy.common.optional})</span>
              )}
            </label>
            <select
              id="field-districtId"
              name="districtId"
              value={districtId}
              onChange={(e) => setDistrictId(e.target.value)}
              aria-invalid={Boolean(errors.districtId)}
              className={`w-full px-4 py-2.5 rounded-lg border text-ink bg-canvas/30 focus:bg-white text-base ${
                errors.districtId ? "border-danger ring-1 ring-danger" : "border-border"
              }`}
            >
              <option value="">{isBn ? "-- জেলা নির্বাচন করুন --" : "-- Select District --"}</option>
              {districts.map((d) => (
                <option key={d.id} value={d.id}>
                  {isBn ? d.nameBn : d.nameEn} ({isBn ? d.divisionBn : d.divisionEn})
                </option>
              ))}
            </select>
          </div>
        </div>

        <KindFields
          kind={kind}
          locale={locale}
          copy={copy}
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />

        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              id="field-consent"
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              aria-invalid={Boolean(errors.consent)}
              className="mt-1 w-5 h-5 rounded border-border text-brand-green focus:ring-focus"
            />
            <span className="text-xs sm:text-sm text-ink/80 leading-normal">
              {copy.common.privacyConsent}
            </span>
          </label>
          {errors.consent && <p className="text-xs text-danger mt-1 pl-8">{errors.consent}</p>}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full sm:w-auto text-base flex items-center justify-center gap-2"
          >
            {submitting ? (
              <span>{copy.common.sending}</span>
            ) : (
              <>
                <span>{copy.common.submit}</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}