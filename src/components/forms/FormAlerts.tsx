"use client";

import React, { RefObject } from "react";
import { Info, AlertCircle, CheckCircle2 } from "lucide-react";
import { Locale, SiteCopy } from "@/lib/types";

interface FormAlertsProps {
  isDemo: boolean;
  locale: Locale;
  copy: SiteCopy;
  errors: Record<string, string>;
  errorSummaryRef: RefObject<HTMLDivElement | null>;
  submittedStatus: "idle" | "demoSuccess" | "liveSuccess" | "error";
  liveReference: string;
  errorMessage: string;
}

export function FormAlerts({
  isDemo,
  locale,
  copy,
  errors,
  errorSummaryRef,
  submittedStatus,
  liveReference,
  errorMessage,
}: FormAlertsProps) {
  const isBn = locale === "bn";

  return (
    <>
      {/* Demo Notice Banner */}
      {isDemo && (
        <div
          className="mb-6 p-4 rounded-xl bg-accent-harvest/15 border border-accent-harvest/40 text-brand-navy flex items-start gap-3"
          role="note"
        >
          <Info className="w-5 h-5 text-accent-harvest shrink-0 mt-0.5" />
          <div className="text-sm">
            <span className="font-bold">{copy.common.demoBanner}</span>
            <p className="text-xs text-ink/80 mt-0.5">
              {isBn
                ? "এটি একটি লোকাল প্রিভিউ। ফর্ম জমা দিলে কোনো তথ্য বাইরে পাঠানো বা ডাটাবেজে সংরক্ষণ করা হয় না।"
                : "This is a local preview. Submitting will validate inputs locally without storing or transmitting personal data."}
            </p>
          </div>
        </div>
      )}

      {/* Accessible Error Summary */}
      {Object.keys(errors).length > 0 && (
        <div
          ref={errorSummaryRef as any}
          tabIndex={-1}
          className="mb-6 p-4 rounded-xl bg-danger/10 border border-danger/30 text-danger text-sm"
          role="alert"
          aria-live="assertive"
        >
          <div className="flex items-center gap-2 font-bold mb-1">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>
              {isBn ? "অনুগ্রহ করে নিচের ভুলগুলো সংশোধন করুন:" : "Please correct the following errors:"}
            </span>
          </div>
          <ul className="list-disc list-inside space-y-1 pl-2 text-xs">
            {Object.entries(errors).map(([field, err]) => (
              <li key={field}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Demo Success Alert */}
      {submittedStatus === "demoSuccess" && (
        <div className="p-6 rounded-2xl bg-brand-green/10 border border-brand-green/30 text-brand-navy my-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-7 h-7 text-brand-green shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-brand-green">
                {isBn ? "ডেমো যাচাই সফল" : "Demo Validation Passed"}
              </h4>
              <p className="text-sm mt-1">{copy.common.demoSuccess}</p>
            </div>
          </div>
        </div>
      )}

      {/* Live Success Alert */}
      {submittedStatus === "liveSuccess" && (
        <div className="p-6 rounded-2xl bg-brand-green/10 border border-brand-green/30 text-brand-navy my-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-7 h-7 text-brand-green shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-brand-green">{copy.common.liveSuccess}</h4>
              <p className="text-sm mt-2 font-mono bg-white px-3 py-1.5 rounded-lg border border-border inline-block">
                {copy.common.reference}: <strong className="text-brand-navy">{liveReference}</strong>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Alert */}
      {submittedStatus === "error" && (
        <div className="p-4 rounded-xl bg-danger/10 border border-danger/30 text-danger text-sm my-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        </div>
      )}
    </>
  );
}