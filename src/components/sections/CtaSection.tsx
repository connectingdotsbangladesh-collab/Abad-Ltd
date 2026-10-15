import React from "react";
import Link from "next/link";
import { Locale, SiteCopy } from "@/lib/types";
import { Sprout, ShoppingBag, ArrowRight } from "lucide-react";

interface CtaSectionProps {
  locale: Locale;
  copy: SiteCopy;
}

export function CtaSection({ locale, copy }: CtaSectionProps) {
  const isBn = locale === "bn";

  return (
    <section className="py-20 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-green-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-10 w-80 h-80 bg-accent-harvest/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl mx-auto leading-tight">
          {copy.home.ctaTitle}
        </h2>
        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-8">
          {copy.home.ctaBody}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`/${locale}/farmers`}
            className="btn-primary text-base font-bold shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Sprout className="w-5 h-5" />
            <span>{copy.common.farmerCta}</span>
          </Link>
          <Link
            href={`/${locale}/buyers`}
            className="btn-secondary text-base font-bold flex items-center justify-center gap-2 w-full sm:w-auto !bg-white/10 !text-white !border-white/30 hover:!bg-white hover:!text-brand-navy"
          >
            <ShoppingBag className="w-5 h-5 text-accent-harvest" />
            <span>{copy.common.buyerCta}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}