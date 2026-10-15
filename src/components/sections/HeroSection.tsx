"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Locale, SiteCopy } from "@/lib/types";
import { DesignedIllustration } from "@/components/ui/DesignedIllustration";
import { ArrowRight, ChevronLeft, ChevronRight, Sprout, ShoppingBag } from "lucide-react";

interface HeroSectionProps {
  locale: Locale;
  copy: SiteCopy;
}

export function HeroSection({ locale, copy }: HeroSectionProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slides = copy.home.heroSlides;
  const currentSlide = slides[currentSlideIndex] || slides[0];
  const isBn = locale === "bn";

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const illustrationTypes: Record<string, any> = {
    "farmer-identity": "hero-farmer",
    technology: "farm-technology",
    "shared-network": "hub-logistics",
  };

  const illustrationType = illustrationTypes[currentSlide.id] || "hero-farmer";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-navy-deep via-brand-navy to-slate-900 text-white py-10 sm:py-16 lg:py-24">
      {/* Decorative background aura */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent-harvest/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Text Content (58% desktop visual emphasis) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-accent-harvest border border-white/15 text-xs font-semibold mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-harvest" />
              {copy.home.eyebrow}
            </span>

            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight sm:leading-tight mb-4 sm:mb-6 whitespace-normal sm:whitespace-pre-line">
              {currentSlide.title}
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-6 sm:mb-8">
              {currentSlide.body}
            </p>

            {/* CTAs: Primary Farmer, Secondary Buyer, Quiet Partner */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href={`/${locale}/farmers`}
                className="btn-primary text-base font-bold shadow-lg flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Sprout className="w-5 h-5" />
                <span>{copy.common.farmerCta}</span>
              </Link>

              <Link
                href={`/${locale}/buyers`}
                className="btn-secondary text-base font-bold flex items-center justify-center gap-2 min-h-[48px] !bg-white/10 !text-white !border-white/30 hover:!bg-white hover:!text-brand-navy"
              >
                <ShoppingBag className="w-5 h-5 text-accent-harvest" />
                <span>{copy.common.buyerCta}</span>
              </Link>
            </div>

            <div className="mt-4 sm:mt-5 text-xs text-slate-400">
              <Link
                href={`/${locale}/partners`}
                className="hover:text-accent-harvest underline underline-offset-4 transition-colors py-1 inline-block"
              >
                {copy.common.partnerCta} →
              </Link>
            </div>
          </div>

          {/* Visual Composition (42% desktop visual emphasis) */}
          <div className="lg:col-span-5 flex flex-col items-center w-full">
            <div className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/15 relative">
              <DesignedIllustration
                type={illustrationType}
                className="w-full h-full"
                alt={currentSlide.title}
              />
            </div>

            {/* Manual Slide Controls */}
            {slides.length > 1 && (
              <div className="flex items-center justify-between w-full mt-4 px-1">
                <div className="flex items-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlideIndex(i)}
                      className={`h-2.5 rounded-full transition-all ${
                        currentSlideIndex === i ? "w-6 bg-accent-harvest" : "w-2.5 bg-white/30 hover:bg-white/60"
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="min-h-[44px] min-w-[44px] rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center"
                    aria-label={isBn ? "পূর্ববর্তী স্লাইড" : "Previous slide"}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="min-h-[44px] min-w-[44px] rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center"
                    aria-label={isBn ? "পরবর্তী স্লাইড" : "Next slide"}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}