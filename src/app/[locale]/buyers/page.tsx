import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/types";
import { getSiteCopy, getAllDistricts } from "@/lib/content";
import { LeadForm } from "@/components/forms/LeadForm";
import { ShoppingBag, CheckCircle2, Building, ShieldCheck } from "lucide-react";

interface BuyersPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ district?: string }>;
}

export async function generateMetadata({ params }: BuyersPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") return {};
  const copy = getSiteCopy(locale as Locale);
  return {
    title: `${copy.buyers.title} | ${copy.brand.name}`,
    description: copy.buyers.intro,
  };
}

export default async function BuyersPage({ params, searchParams }: BuyersPageProps) {
  const { locale } = await params;
  const { district: prefilledDistrict } = await searchParams;
  if (locale !== "bn" && locale !== "en") notFound();

  const copy = getSiteCopy(locale as Locale);
  const districts = getAllDistricts();
  const isBn = locale === "bn";

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Buyer Value Proposition */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              B2B সোর্সিং
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-brand-navy mt-3 leading-tight">
              {copy.buyers.title}
            </h1>
            <p className="text-lg sm:text-xl text-ink/80 mt-6 leading-relaxed">
              {copy.buyers.intro}
            </p>

            {/* 4 Benefits */}
            <div className="mt-10 space-y-4">
              {copy.buyers.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border shadow-soft">
                  <div className="w-10 h-10 rounded-xl bg-accent-harvest/20 text-brand-navy flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-brand-navy">{b}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 3 Steps */}
            <div className="mt-8 p-6 rounded-2xl bg-canvas border border-border">
              <h3 className="text-base font-bold text-brand-navy mb-4">
                {isBn ? "সরবরাহ আলোচনার ৩টি ধাপ:" : "3 Steps for Supply Discussion:"}
              </h3>
              <div className="space-y-3">
                {copy.buyers.steps.map((st, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-ink font-semibold">
                    <span className="w-6 h-6 rounded-full bg-brand-navy/15 text-brand-navy text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span>{st}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Buyer Requirements Form */}
          <div className="lg:col-span-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-brand-navy">
                {copy.buyers.formTitle}
              </h2>
              <p className="text-sm text-muted mt-1">
                {isBn
                  ? "আপনার প্রতিষ্ঠানের চাহিদা ও ডেলিভারি এলাকার তথ্য জানান।"
                  : "Submit your organizational sourcing requirements."}
              </p>
            </div>

            <LeadForm
              kind="buyer"
              locale={locale as Locale}
              copy={copy}
              districts={districts}
              prefilledDistrictId={prefilledDistrict || ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}