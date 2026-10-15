import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/types";
import { getSiteCopy } from "@/lib/content";
import { ShoppingBag, AlertCircle, ArrowRight, Sprout, Store } from "lucide-react";

interface MarketplacePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: MarketplacePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") return {};
  const copy = getSiteCopy(locale as Locale);
  return {
    title: `${copy.marketplace.title} | ${copy.brand.name}`,
    description: copy.marketplace.intro,
  };
}

export default async function MarketplacePage({ params }: MarketplacePageProps) {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") notFound();

  const copy = getSiteCopy(locale as Locale);
  const isBn = locale === "bn";

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
            মাল্টি-ভেন্ডর প্ল্যাটফর্ম (পরিকল্পিত)
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-brand-navy mt-3 leading-tight">
            {copy.marketplace.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted mt-6 leading-relaxed">
            {copy.marketplace.intro}
          </p>
        </div>

        {/* Factual Honesty Banner: No fictitious live stores */}
        <div className="mb-12 p-6 rounded-2xl bg-accent-harvest/15 border border-accent-harvest/40 text-brand-navy flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-accent-harvest shrink-0 mt-0.5" />
          <div>
            <h2 className="text-base font-bold text-brand-navy">
              {copy.marketplace.notice}
            </h2>
            <p className="text-sm text-ink/80 mt-1">
              {isBn
                ? "বাস্তব স্টোর, ইনভেন্টরি ও ডেলিভারি সেবা চূড়ান্ত হওয়ার পর এই প্ল্যাটফর্ম উন্মুক্ত করা হবে। আপাতত কৃষক বা ক্রেতা হিসেবে আগ্রহ জানাতে পারেন।"
                : "Transactions will be activated once verified suppliers and logistics are established. Business buyers and farmers can express interest in the meantime."}
            </p>
          </div>
        </div>

        {/* Planned Product Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">
            {isBn ? "পরিকল্পিত পণ্য বিভাগসমূহ" : "Planned Product Categories"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {copy.marketplace.categories.map((cat) => (
              <div
                key={cat.id}
                className="p-6 rounded-2xl bg-white border border-border text-center shadow-soft flex flex-col items-center justify-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-canvas text-brand-green flex items-center justify-center">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-brand-navy">{cat.title}</h3>
                <span className="text-[10px] text-muted uppercase font-semibold">
                  {copy.common.comingSoon}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State Card with Direct CTAs */}
        <div className="bg-white rounded-3xl p-10 sm:p-14 border border-border shadow-soft text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-canvas text-brand-green flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy mb-2">
            {copy.marketplace.emptyTitle}
          </h2>
          <p className="text-base text-muted mb-8">
            {copy.marketplace.emptyBody}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${locale}/farmers`} className="btn-primary text-sm font-bold w-full sm:w-auto">
              <Sprout className="w-4 h-4 mr-2" />
              <span>{copy.common.farmerCta}</span>
            </Link>
            <Link href={`/${locale}/buyers`} className="btn-secondary text-sm font-bold w-full sm:w-auto">
              <ShoppingBag className="w-4 h-4 mr-2 text-brand-green" />
              <span>{copy.common.buyerCta}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}