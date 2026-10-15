import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/types";
import { getSiteCopy } from "@/lib/content";
import { ShieldCheck, Info } from "lucide-react";

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") return {};
  const copy = getSiteCopy(locale as Locale);
  return {
    title: `${copy.footer.privacy} | ${copy.brand.name}`,
    description: "আবাদ লিমিটেড ওয়েবসাইট গোপনীয়তা নীতিমালা খসড়া",
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
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
            {isBn ? "গোপনীয়তা নীতিমালা" : "Privacy Policy"}
          </h1>
        </div>

        {/* Draft Notice Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-accent-harvest/15 border border-accent-harvest/40 text-brand-navy flex items-start gap-3">
          <Info className="w-5 h-5 text-accent-harvest shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
            {isBn
              ? "এই পেজটি ওয়েবসাইটের প্রথম সংস্করণের তথ্য সংগ্রহের খসড়া নীতিমালা। সেবা চালুর আগে আবাদ-এর চূড়ান্ত পরিচালন পরিচয়, সেবাদাতা এবং সংরক্ষণ সংক্রান্ত তথ্যের সঙ্গে সামঞ্জস্য রেখে চূড়ান্ত করা হবে।"
              : "This page presents the website enquiry privacy draft. Operator identity, actual hosting/database providers, and retention periods will be formalized prior to commercial operations."}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-soft space-y-8 text-base text-ink/85 leading-relaxed">
          {isBn ? (
            <>
              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">এই ওয়েবসাইটে আপনার তথ্য</h2>
                <p>
                  আবাদ লিমিটেডের সঙ্গে কৃষক হিসেবে যুক্ত হওয়ার আগ্রহ, ব্যবসায়িক পণ্যের চাহিদা বা সম্ভাব্য সহযোগিতা নিয়ে যোগাযোগ করতে আপনি তথ্য দিতে পারেন। আপনার অনুসন্ধান বোঝা, তার বিষয়ে যোগাযোগ করা এবং সম্ভাব্য পরবর্তী ধাপ সমন্বয়ের জন্য প্রয়োজনীয় তথ্য ব্যবহার করা হবে।
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">কী তথ্য নেওয়া হতে পারে</h2>
                <p>
                  ফর্ম অনুযায়ী আপনার নাম, মোবাইল নম্বর বা ইমেইল, জেলা, কৃষিকাজ বা প্রতিষ্ঠানের পরিচিতি, পণ্যের চাহিদা এবং আপনার লেখা বার্তা নেওয়া হতে পারে। এই ওয়েবসাইটের আগ্রহ ফর্মে জাতীয় পরিচয়পত্র, জমির দলিল, ব্যাংক বা কার্ডের তথ্য প্রয়োজন নেই। অনুগ্রহ করে বার্তার মধ্যে এসব তথ্য পাঠাবেন না।
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">ডেমো ও চালু ফর্ম</h2>
                <p>
                  প্রিভিউ বা ডেমো মোডে দেখানো ফর্ম আপনার তথ্য আবাদ-এর কাছে পাঠায় বা সংরক্ষণ করে না। চালু ফর্মে তথ্য সফলভাবে গ্রহণ করা হলে একটি রেফারেন্স নম্বর দেখানো হবে। ব্যর্থ বা অসম্পূর্ণ জমা গ্রহণ হয়েছে বলে দেখানো হবে না।
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">তথ্য কারা ব্যবহার করতে পারেন</h2>
                <p>
                  আপনার অনুসন্ধান পরিচালনার দায়িত্বে থাকা অনুমোদিত আবাদ টিম এবং প্রয়োজন অনুযায়ী ব্যবহৃত হোস্টিং, ডাটাবেজ বা যোগাযোগ সেবা প্রাসঙ্গিক তথ্য প্রক্রিয়াকরণ করতে পারে। চালুর আগে ব্যবহৃত সেবা, তাদের ভূমিকা এবং প্রয়োজনীয় তথ্যের পরিধি এই পেজে নির্দিষ্ট করতে হবে। আপনার অনুসন্ধানের তথ্য স্বয়ংক্রিয়ভাবে পাবলিক কৃষক স্টোর বা জেলা তালিকায় প্রকাশ করা হবে না।
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">নিরাপত্তা ও সংরক্ষণ</h2>
                <p>
                  ফর্মের তথ্য অনুমোদিত প্রবেশাধিকার ও প্রযুক্তিগত সুরক্ষার মাধ্যমে ব্যবস্থাপনার পরিকল্পনা রয়েছে। চালুর আগে বাস্তব সংরক্ষণ সময়, অপসারণের পদ্ধতি এবং প্রয়োজনীয় রেকর্ড রাখার সিদ্ধান্ত এই পেজে যুক্ত করতে হবে। কোনো সিস্টেমের সম্পূর্ণ নিরাপত্তার নিশ্চয়তা দাবি করা হচ্ছে না।
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">আপডেট ও যোগাযোগ</h2>
                <p>
                  আপনার দেওয়া তথ্য সংশোধন বা অপসারণের অনুরোধের জন্য আবাদ-এর নির্ধারিত গোপনীয়তা যোগাযোগ ব্যবহার করুন। পরিচয় নিশ্চিত করা এবং প্রযোজ্য প্রয়োজন বিবেচনা করে অনুরোধ পরিচালনা করা হবে।
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">Your Information on This Website</h2>
                <p>
                  You may provide information to discuss farmer participation, business sourcing, or possible collaboration with Abad Limited. Relevant information will be used to understand your enquiry, respond to it, and coordinate next steps.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">Information You May Provide</h2>
                <p>
                  Depending on the form, this may include your name, phone number, email, district, farming or organization details, sourcing requirements, and your message. Website enquiries do not require national identification, land deeds, bank details, or payment card information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">Preview and Live Forms</h2>
                <p>
                  Forms marked preview or demo do not send or store your details with Abad. A live form displays a reference number after an enquiry is successfully received.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">Who May Process Information</h2>
                <p>
                  Authorized Abad personnel handling your enquiry and relevant hosting, database, or communication providers may process necessary information. Enquiry details will not automatically be published as farmer stores or public district records.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">Security and Retention</h2>
                <p>
                  Information is managed using access controls and technical safeguards. The actual retention period and deletion processes will be formalized prior to commercial release.
                </p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}