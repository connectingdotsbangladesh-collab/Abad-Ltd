import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/types";
import { getSiteCopy } from "@/lib/content";
import { Info } from "lucide-react";

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") return {};
  const copy = getSiteCopy(locale as Locale);
  return {
    title: `${copy.footer.terms} | ${copy.brand.name}`,
    description: "আবাদ লিমিটেড ওয়েবসাইট ব্যবহারের শর্তাবলি খসড়া",
  };
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") notFound();

  const isBn = locale === "bn";

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-[850px] mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
            নীতিমালা খসড়া
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-brand-navy mt-2 leading-tight">
            {isBn ? "ব্যবহারের শর্তাবলি" : "Terms of Use"}
          </h1>
        </div>

        <div className="mb-10 p-5 rounded-2xl bg-accent-harvest/15 border border-accent-harvest/40 text-brand-navy flex items-start gap-3">
          <Info className="w-5 h-5 text-accent-harvest shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
            {isBn
              ? "এই পেজটি ওয়েবসাইটের তথ্যভিত্তিক ব্যবহারের খসড়া শর্তাবলি। কোনো প্রকৃত বাণিজ্যিক লেনদেন বা পেমেন্ট চালুর আগে আলাদা ক্রয়-বিক্রয় ও নিষ্পত্তি চুক্তি চূড়ান্ত হবে।"
              : "This page presents the website-use draft. Separate transaction, delivery, returns, payment and settlement terms will apply to future commercial features."}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-soft space-y-6 text-base text-ink/85 leading-relaxed">
          {isBn ? (
            <>
              <p>
                এই ওয়েবসাইট আবাদ লিমিটেডের পরিকল্পনা, সম্ভাব্য সেবা ও যোগাযোগের সুযোগ সম্পর্কে তথ্য দেয়। প্রকাশিত সেবার প্রাপ্যতা, এলাকা, মূল্য ও শর্ত সংশ্লিষ্ট অফার বা আলাদা চুক্তি অনুযায়ী নির্ধারিত হবে। ৬৪ জেলার নেটওয়ার্ক একটি সম্প্রসারণের লক্ষ্য; প্রতিটি জেলায় চালু সেবার দাবি নয়।
              </p>
              <p>
                ওয়েবসাইটে আগ্রহ জানানো বা পণ্যের চাহিদা পাঠানো কোনো বিক্রয়, সরবরাহ, ঋণ, বিনিয়োগ বা পার্টনারশিপ চুক্তি তৈরি করে না। অর্থায়ন, সরবরাহ বা অন্য সেবায় অংশগ্রহণের আগে প্রযোজ্য যাচাই ও লিখিত শর্ত প্রয়োজন হতে পারে। নির্দিষ্ট আয়, সর্বোচ্চ বিক্রয়মূল্য, অর্থায়ন বা বিনিয়োগের লাভের নিশ্চয়তা দেওয়া হচ্ছে না।
              </p>
              <p>
                সঠিক তথ্য দিয়ে যোগাযোগ করুন। অন্যের ব্যক্তিগত তথ্য অনুমতি ছাড়া পাঠাবেন না এবং ওয়েবসাইটের নিরাপত্তা বা স্বাভাবিক কার্যক্রমে হস্তক্ষেপ করবেন না। এই ওয়েবসাইটের কনটেন্ট ও ব্র্যান্ড উপকরণ ব্যবহারের অনুমতি আলাদাভাবে প্রযোজ্য।
              </p>
            </>
          ) : (
            <>
              <p>
                This website describes Abad Limited's plans, possible services, and enquiry channels. Service availability, locations, prices, and terms depend on the relevant offer or separate agreements. A 64-district network is an expansion goal, not a claim of operational service in every district.
              </p>
              <p>
                Expressing interest or sending a sourcing requirement does not create a sale, supply, loan, investment, or partnership agreement. Relevant review and written terms apply prior to participation in services. No fixed return or highest price guarantee is made.
              </p>
              <p>
                Please provide accurate information, respect privacy and applicable intellectual property rights, and refrain from interfering with website operations.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}