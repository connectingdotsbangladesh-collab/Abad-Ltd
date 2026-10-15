import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/types";
import { getSiteCopy, getAllDistricts } from "@/lib/content";
import { LeadForm } from "@/components/forms/LeadForm";
import { Sprout, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";

interface FarmersPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ district?: string }>;
}

export async function generateMetadata({ params }: FarmersPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") return {};
  const copy = getSiteCopy(locale as Locale);
  return {
    title: `${copy.farmers.title} | ${copy.brand.name}`,
    description: copy.farmers.intro,
  };
}

export default async function FarmersPage({ params, searchParams }: FarmersPageProps) {
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
          {/* Left Column: Farmer Story & Benefits (6 cols) */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              কৃষক অংশীদারিত্ব
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-brand-navy mt-3 leading-tight">
              {copy.farmers.title}
            </h1>
            <p className="text-lg sm:text-xl text-ink/80 mt-6 leading-relaxed">
              {copy.farmers.intro}
            </p>

            {/* 4 Core Farmer Benefits */}
            <div className="mt-10 space-y-4">
              {copy.farmers.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border shadow-soft">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                    <Sprout className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy">{b.title}</h3>
                    <p className="text-base text-muted leading-relaxed mt-1">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Participation Steps */}
            <div className="mt-10 p-6 rounded-2xl bg-canvas border border-border">
              <h3 className="text-base font-bold text-brand-navy mb-4">
                {isBn ? "যুক্ত হওয়ার ৩টি ধাপ:" : "3 Steps to Connect:"}
              </h3>
              <div className="space-y-3">
                {copy.farmers.steps.map((st, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-ink font-semibold">
                    <span className="w-6 h-6 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span>{st}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safe & Honest Note */}
            <div className="mt-6 flex items-start gap-3 text-xs text-muted">
              <ShieldCheck className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
              <span>{copy.farmers.formIntro}</span>
            </div>
          </div>

          {/* Right Column: Dedicated Farmer Interest Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-brand-navy">
                {copy.farmers.formTitle}
              </h2>
              <p className="text-sm text-muted mt-1">
                {copy.farmers.formIntro}
              </p>
            </div>

            <LeadForm
              kind="farmer"
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