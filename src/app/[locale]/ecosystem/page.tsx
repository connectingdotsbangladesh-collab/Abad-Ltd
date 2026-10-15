import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/types";
import { getSiteCopy } from "@/lib/content";
import { Sprout, Database, Cpu, Warehouse, ShoppingCart, ShieldCheck, ArrowRight } from "lucide-react";

interface EcosystemPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: EcosystemPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") return {};
  const copy = getSiteCopy(locale as Locale);
  return {
    title: `${copy.nav.find((n) => n.id === "ecosystem")?.label || "Ecosystem"} | ${copy.brand.name}`,
    description: copy.ecosystem.intro,
  };
}

export default async function EcosystemPage({ params }: EcosystemPageProps) {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") notFound();

  const copy = getSiteCopy(locale as Locale);
  const steps = copy.ecosystem.steps;
  const isBn = locale === "bn";

  const icons = [Sprout, Database, Cpu, Warehouse, ShoppingCart];

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
          ইকোসিস্টেম মডেল
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-brand-navy mt-3 max-w-3xl leading-tight">
          {copy.ecosystem.title}
        </h1>
        <p className="text-lg sm:text-xl text-muted mt-6 max-w-3xl leading-relaxed">
          {copy.ecosystem.intro}
        </p>
      </div>

      {/* 5-Step Connected Flow Cards */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-16">
        <div className="space-y-6">
          {steps.map((step, idx) => {
            const Icon = icons[idx] || Sprout;
            return (
              <div
                key={step.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-border shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand-navy text-accent-harvest flex items-center justify-center font-bold text-xl shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-brand-green uppercase tracking-wider">
                      ধাপ 0{idx + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-navy mt-1">
                      {step.title}
                    </h3>
                    <p className="text-base text-ink/80 mt-2 max-w-2xl leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center">
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-canvas text-brand-navy border border-border">
                    {copy.common.planned}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trust & Data Security Note */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-20">
        <div className="p-8 rounded-2xl bg-brand-green/10 border border-brand-green/30 flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-brand-green shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-bold text-brand-navy mb-1">
              ডাটা সুরক্ষা ও গোপনীয়তা প্রতিশ্রুতি
            </h4>
            <p className="text-sm text-ink/80 leading-relaxed mb-3">
              {copy.ecosystem.dataNote}
            </p>
            <p className="text-xs text-muted">
              {copy.ecosystem.phaseNote}
            </p>
          </div>
        </div>
      </div>

      {/* Dual CTA */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-12 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              ইকোসিস্টেমের সঙ্গে যুক্ত হতে চান?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              কৃষক হিসেবে অংশ নিতে বা স্থানীয় হাব পরিচালনায় আপনার আগ্রহ ও অভিজ্ঞতা আমাদের জানান।
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href={`/${locale}/farmers`} className="btn-primary text-sm font-bold">
              {copy.common.farmerCta}
            </Link>
            <Link
              href={`/${locale}/partners`}
              className="btn-secondary text-sm font-bold !bg-white/10 !text-white !border-white/30 hover:!bg-white hover:!text-brand-navy"
            >
              {copy.common.partnerCta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}