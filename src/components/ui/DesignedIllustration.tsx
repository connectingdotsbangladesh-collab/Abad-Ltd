import React from "react";
import Image from "next/image";

interface IllustrationProps {
  type:
    | "hero-farmer"
    | "farm-technology"
    | "hub-logistics"
    | "livestock-tag"
    | "farmer-brand"
    | "b2b-sourcing"
    | "field-learning";
  className?: string;
  alt?: string;
}

export function DesignedIllustration({ type, className = "", alt = "" }: IllustrationProps) {
  switch (type) {
    case "hero-farmer":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy-deep via-brand-navy to-brand-green flex items-center justify-center p-8 text-white ${className}`}
          role="img"
          aria-label={alt || "বাংলাদেশের খামারে উৎপাদন ও কৃষি ব্যবস্থাপনা"}
        >
          {/* Subtle decorative grid and organic shapes */}
          <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 400 400">
            <defs>
              <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            <circle cx="320" cy="80" r="120" fill="#176B47" opacity="0.4" filter="blur(40px)" />
            <circle cx="80" cy="320" r="100" fill="#E1AE4A" opacity="0.3" filter="blur(40px)" />
          </svg>

          <div className="relative z-10 text-center max-w-sm flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-brand-navy border border-white/25 flex items-center justify-center mb-6 shadow-card relative">
              <Image
                src="/brand/abad-logo.jpg"
                alt="আবাদ লিমিটেড"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-xs uppercase tracking-widest text-accent-harvest font-bold mb-2">
              আবাদ ইকোসিস্টেম
            </span>
            <h3 className="text-xl font-bold text-white mb-2">কৃষকের পরিচয় ও ডিজিটাল নেটওয়ার্ক</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              সরাসরি খামার থেকে বাজারে সংযোগ, ডাটা ও সমন্বিত আধুনিক কৃষি ব্যবস্থাপনা
            </p>
          </div>
        </div>
      );

    case "farm-technology":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-brand-navy to-brand-green/80 flex items-center justify-center p-8 text-white ${className}`}
          role="img"
          aria-label={alt || "খামারে সেচ প্রযুক্তি ও আধুনিক কৃষি ডাটা"}
        >
          <div className="relative z-10 text-center max-w-sm flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-green/30 border border-brand-green/40 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-1">সোলার পাম্প ও ড্রিপ ইরিগেশন</h4>
            <p className="text-xs text-slate-300">প্রযুক্তি প্রদর্শনী ও পরিমিত সেচ ব্যবস্থার পরিকল্পনা</p>
          </div>
        </div>
      );

    case "hub-logistics":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy via-slate-800 to-brand-green-dark flex items-center justify-center p-8 text-white ${className}`}
          role="img"
          aria-label={alt || "স্থানীয় হাব ও স্মার্ট লজিস্টিকস"}
        >
          <div className="relative z-10 text-center max-w-sm flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-accent-harvest/20 border border-accent-harvest/40 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-accent-harvest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-1">স্থানীয় হাব ও পরিবহন সমন্বয়</h4>
            <p className="text-xs text-slate-300">উপজেলা ও জেলা পর্যায়ে সংগ্রহ, সংরক্ষণ ও শেয়ার্ড লজিস্টিকস</p>
          </div>
        </div>
      );

    case "livestock-tag":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy-deep to-brand-navy flex items-center justify-center p-8 text-white ${className}`}
          role="img"
          aria-label={alt || "গবাদিপশুর পরিচিতি ট্যাগ"}
        >
          <div className="relative z-10 text-center max-w-sm flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                <path d="M7 12h10" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-1">ইউনিক পরিচিতি ও ট্রেসেবিলিটি</h4>
            <p className="text-xs text-slate-300">অনুমতিভিত্তিক ডাটা রেকর্ড ও নিরাপদ তথ্য ভল্ট</p>
          </div>
        </div>
      );

    case "farmer-brand":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy via-brand-green to-brand-green-dark flex items-center justify-center p-8 text-white ${className}`}
          role="img"
          aria-label={alt || "কৃষকের নিজস্ব ডিজিটাল স্টোর"}
        >
          <div className="relative z-10 text-center max-w-sm flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-accent-harvest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                <path d="M2 7h20" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-1">স্বতন্ত্র স্টোর ও পরিচয়</h4>
            <p className="text-xs text-slate-300">উৎপাদকের গল্প, পণ্যের তথ্য এবং সরাসরি ক্রেতার অনুসন্ধান</p>
          </div>
        </div>
      );

    case "b2b-sourcing":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy-deep via-slate-800 to-brand-navy flex items-center justify-center p-8 text-white ${className}`}
          role="img"
          aria-label={alt || "প্রাতিষ্ঠানিক ক্রেতার পণ্য বাছাই"}
        >
          <div className="relative z-10 text-center max-w-sm flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-accent-harvest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-1">B2B বাল্ক সোর্সিং চ্যানেল</h4>
            <p className="text-xs text-slate-300">রেস্টুরেন্ট, সুপারশপ ও প্রতিষ্ঠানের জন্য নিয়মিত সরবরাহ আলোচনা</p>
          </div>
        </div>
      );

    case "field-learning":
    default:
      return (
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-green-dark via-brand-navy to-brand-navy-deep flex items-center justify-center p-8 text-white ${className}`}
          role="img"
          aria-label={alt || "মাঠ পর্যায়ে কৃষকদের অভিজ্ঞতা বিনিময়"}
        >
          <div className="relative z-10 text-center max-w-sm flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-1">প্রশিক্ষণ ও প্রযুক্তি প্রদর্শনী</h4>
            <p className="text-xs text-slate-300">বাস্তব খামারে নতুন প্রযুক্তির ব্যবহার ও জ্ঞান ভাগাভাগি</p>
          </div>
        </div>
      );
  }
}