import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/types";
import { getSiteCopy, getAllDistricts } from "@/lib/content";
import { NetworkSection } from "@/components/sections/NetworkSection";
import { ShieldCheck, Target, MapPin } from "lucide-react";

interface NetworkPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: NetworkPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") return {};
  const copy = getSiteCopy(locale as Locale);
  return {
    title: `${copy.network.title} | ${copy.brand.name}`,
    description: copy.network.intro,
  };
}

export default async function NetworkPage({ params }: NetworkPageProps) {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") notFound();

  const copy = getSiteCopy(locale as Locale);
  const districts = getAllDistricts();
  const isBn = locale === "bn";

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
          জাতীয় নেটওয়ার্ক
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-brand-navy mt-3 max-w-3xl leading-tight">
          {copy.network.title}
        </h1>
        <p className="text-lg sm:text-xl text-muted mt-6 max-w-3xl leading-relaxed">
          {copy.network.intro}
        </p>
      </div>

      {/* Network Ambition & Interactive District Browser */}
      <NetworkSection locale={locale as Locale} copy={copy} districts={districts} />

      {/* Factual Honesty Note */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-16">
        <div className="p-8 rounded-2xl bg-white border border-border flex items-start gap-4 shadow-soft">
          <ShieldCheck className="w-6 h-6 text-brand-green shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-brand-navy mb-1">
              {isBn ? "৬৪ জেলার লক্ষ্যমাত্রা সম্পর্কিত স্পষ্ট বক্তব্য" : "Statement on the 64-District Vision"}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {isBn
                ? "বাংলাদেশের ৬৪ জেলায় নেটওয়ার্ক গড়ে তোলা আবাদ লিমিটেডের দীর্ঘমেয়াদি লক্ষ্য। ওয়েবসাইটে কোনো জেলা নির্বাচনের অর্থ সেখানে সক্রিয় হাবের দাবি নয়। চালু হাব বা সেবার তথ্য যাচাই সাপেক্ষে প্রকাশ করা হবে।"
                : "Building a network across 64 districts is Abad Limited's long-term expansion ambition. District presence on this website indicates geographical enquiry availability, not operating hub status."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}