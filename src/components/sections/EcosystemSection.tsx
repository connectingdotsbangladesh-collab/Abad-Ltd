"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Locale, SiteCopy } from "@/lib/types";
import { Sprout, Database, Cpu, Warehouse, ShoppingCart, ArrowRight, ShieldCheck, Info } from "lucide-react";

interface EcosystemSectionProps {
  locale: Locale;
  copy: SiteCopy;
}

export function EcosystemSection({ locale, copy }: EcosystemSectionProps) {
  const [selectedStepId, setSelectedStepId] = useState<string>("farm");
  const steps = copy.ecosystem.steps;
  const currentStep = steps.find((s) => s.id === selectedStepId) || steps[0];

  const icons = [Sprout, Database, Cpu, Warehouse, ShoppingCart];

  return (
    <section className="py-20 bg-canvas border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
            সংযুক্ত ইকোসিস্টেম
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-2">
            {copy.home.ecosystemHeading}
          </h2>
          <p className="text-base text-muted mt-3">
            {copy.home.ecosystemIntro}
          </p>
        </div>

        {/* 5-part Flow Selector (Top-down on mobile, horizontal on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10" role="tablist">
          {steps.map((step, idx) => {
            const Icon = icons[idx] || Sprout;
            const isSelected = step.id === selectedStepId;
            return (
              <button
                key={step.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedStepId(step.id)}
                className={`flex flex-col items-center text-center p-4 rounded-xl border transition-all duration-200 ${
                  isSelected
                    ? "bg-brand-navy text-white border-brand-navy shadow-card scale-102"
                    : "bg-white text-ink border-border hover:border-brand-green/60"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                    isSelected ? "bg-white/15 text-accent-harvest" : "bg-canvas text-brand-green"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold tracking-tight">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Explanation Card */}
        <div className="bg-white rounded-2xl p-8 border border-border shadow-soft max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-accent-harvest" />
            <h3 className="text-2xl font-bold text-brand-navy">{currentStep.title}</h3>
          </div>
          <p className="text-base sm:text-lg text-ink leading-relaxed mb-6">
            {currentStep.body}
          </p>

          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-muted">
              <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
              <span>{copy.ecosystem.dataNote}</span>
            </div>
            <Link
              href={`/${locale}/ecosystem`}
              className="text-sm font-bold text-brand-green hover:underline flex items-center gap-1 shrink-0"
            >
              <span>বিস্তারিত ইকোসিস্টেম মডেল →</span>
            </Link>
          </div>
        </div>

        {/* Phase Note */}
        <div className="mt-8 text-center text-xs text-muted max-w-2xl mx-auto">
          <p>{copy.ecosystem.phaseNote}</p>
        </div>
      </div>
    </section>
  );
}