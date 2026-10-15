"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Locale, SiteCopy } from "@/lib/types";
import { Sprout, ShoppingBag, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";

interface JourneysSectionProps {
  locale: Locale;
  copy: SiteCopy;
}

export function JourneysSection({ locale, copy }: JourneysSectionProps) {
  const [activeTab, setActiveTab] = useState<"farmer" | "buyer" | "partner">("farmer");
  const isBn = locale === "bn";

  const tabs = [
    { id: "farmer", label: isBn ? "কৃষক" : "Farmer", icon: Sprout },
    { id: "buyer", label: isBn ? "ব্যবসায়িক ক্রেতা" : "Business Buyer", icon: ShoppingBag },
    { id: "partner", label: isBn ? "পার্টনার" : "Partner", icon: Handshake },
  ];

  const content = {
    farmer: {
      title: isBn ? "কৃষক হিসেবে যুক্ত হওয়ার ৩টি সহজ ধাপ" : "3 Steps to Connect as a Farmer",
      steps: copy.farmers.steps,
      ctaLabel: copy.common.farmerCta,
      ctaHref: `/${locale}/farmers`,
      note: isBn
        ? "ওয়েবসাইটে আগ্রহ জানানোর জন্য কোনো জাতীয় পরিচয়পত্র বা ব্যাংক তথ্য লাগবে না।"
        : "Initial enquiry requires no land deed or bank verification.",
    },
    buyer: {
      title: isBn ? "ব্যবসায়িক ক্রেতার জন্য সরবরাহ আলোচনা" : "Sourcing Process for Buyers",
      steps: copy.buyers.steps,
      ctaLabel: copy.common.buyerCta,
      ctaHref: `/${locale}/buyers`,
      note: isBn
        ? "পণ্যের গ্রেড, পরিমাণ এবং ডেলিভারি এলাকা আলোচনার মাধ্যমে চূড়ান্ত হবে।"
        : "Grades, quantities and schedules are agreed separately through discussion.",
    },
    partner: {
      title: isBn ? "পার্টনার হিসেবে কাজের সুযোগ" : "Collaboration for Ecosystem Partners",
      steps: isBn
        ? [
            "হাব, লজিস্টিকস, প্রযুক্তি বা স্পন্সরশিপের আগ্রহ জানান",
            "স্থান, সক্ষমতা ও সুযোগ নিয়ে আলোচনা",
            "সম্মত হলে লিখিত অংশীদারিত্ব চুক্তি",
          ]
        : [
            "Express interest in hub, logistics, technology or sponsorship",
            "Discuss capacity, facilities and terms",
            "Formalize written partnership agreement upon alignment",
          ],
      ctaLabel: copy.common.partnerCta,
      ctaHref: `/${locale}/partners`,
      note: isBn
        ? "স্থানীয় উদ্যোক্তা ও ডিলারদের সাথে উপজেলা ভিত্তিক হাব গড়ে তোলার পরিকল্পনা রয়েছে।"
        : "Hub partnerships are developed with local entrepreneurs and dealers.",
    },
  };

  const current = content[activeTab];

  return (
    <section className="py-20 bg-white border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
            অংশগ্রহণের পথ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-2">
            {copy.home.journeyHeading}
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-canvas rounded-xl p-1.5 border border-border shadow-xs">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    isSelected
                      ? "bg-brand-navy text-white shadow-soft"
                      : "text-ink/80 hover:text-brand-green"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Box */}
        <div className="bg-canvas/50 rounded-2xl p-8 sm:p-10 border border-border max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-6">
            {current.title}
          </h3>

          <div className="space-y-4 mb-8">
            {current.steps.map((st, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border/80">
                <span className="w-8 h-8 rounded-lg bg-brand-green/10 text-brand-green font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-base font-semibold text-ink leading-relaxed pt-0.5">
                  {st}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted max-w-sm">{current.note}</p>
            <Link
              href={current.ctaHref}
              className="btn-primary text-sm font-bold w-full sm:w-auto flex items-center justify-center gap-2 shrink-0"
            >
              <span>{current.ctaLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}