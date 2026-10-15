import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/types";
import { getSiteCopy, getCompanyModel } from "@/lib/content";
import { ShieldCheck, Target, Eye, Building2, TrendingUp, ChevronDown } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") return {};
  const copy = getSiteCopy(locale as Locale);
  return {
    title: `${copy.nav.find((n) => n.id === "about")?.label || "About"} | ${copy.brand.name}`,
    description: copy.about.intro,
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") notFound();

  const copy = getSiteCopy(locale as Locale);
  const companyModel = getCompanyModel();
  const isBn = locale === "bn";

  return (
    <div className="py-16 sm:py-24">
      {/* Hero Header */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl overflow-hidden bg-brand-navy shadow-soft border border-border/80 relative shrink-0">
            <Image
              src="/brand/abad-logo.jpg"
              alt={copy.brand.name}
              width={64}
              height={64}
              priority
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
              আমাদের সম্পর্কে
            </span>
            <span className="text-sm font-semibold text-brand-navy">
              {copy.brand.name} • {copy.brand.tagline}
            </span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-brand-navy max-w-3xl leading-tight">
          {copy.about.title}
        </h1>
        <p className="text-lg sm:text-xl text-muted mt-6 max-w-3xl leading-relaxed">
          {copy.about.intro}
        </p>
      </div>

      {/* Vision & Mission Split */}
      <div className="bg-white py-16 sm:py-20 border-y border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-2xl bg-brand-navy text-white shadow-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 text-accent-harvest flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {copy.about.visionTitle}
                </h2>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                  {copy.about.vision}
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-2xl bg-canvas border border-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">
                  {copy.about.missionTitle}
                </h2>
                <div className="space-y-4">
                  {copy.about.missions.map((m, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-brand-green/20 text-brand-green font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-sm sm:text-base text-ink leading-relaxed font-medium">
                        {m}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Principles / Core Values */}
      <div className="py-16 sm:py-24 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
            নীতিমালা
          </span>
          <h2 className="text-3xl font-bold text-brand-navy mt-2">
            {copy.about.valuesTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.about.values.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-border shadow-soft flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-brand-green mb-2 block">
                  0{i + 1}
                </span>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sustainable Business Model */}
      <div className="bg-canvas/60 py-16 sm:py-20 border-y border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              টেকসই মডেল
            </span>
            <h2 className="text-3xl font-bold text-brand-navy mt-2">
              {copy.about.businessModelTitle}
            </h2>
            <p className="text-base text-muted mt-2">
              {copy.about.businessModelIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.about.revenueStreams.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-border">
                <div className="w-10 h-10 rounded-lg bg-accent-harvest/20 text-brand-navy flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 text-brand-navy" />
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2">{r.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Executive Leadership (CEO) */}
      <div id="ceo" className="py-16 sm:py-24 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
            {isBn ? "নেতৃত্ব ও ব্যবস্থাপনা" : "Executive Leadership"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-2">
            {isBn ? "প্রধান নির্বাহী কর্মকর্তা" : "Chief Executive Officer"}
          </h2>
          <p className="text-base text-muted mt-2 max-w-2xl">
            {isBn
              ? "আবাদ লিমিটেডের সামগ্রিক ভিশন, ব্যবসায়িক দিকনির্দেশনা ও কৃষক-ক্রেতা অংশীদারিত্বের নেতৃত্ব।"
              : "Guiding Abad Limited's corporate vision, enterprise strategy, and long-term ecosystem partnerships."}
          </p>
        </div>

        {/* CEO Profile Card */}
        {(() => {
          const ceo = copy.about.team.find((m) => m.id === "ceo") || copy.about.team[0];
          return (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-border shadow-soft">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Photo & Role Lockup */}
                <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
                  <div className="relative w-60 h-68 sm:w-64 sm:h-72 rounded-2xl overflow-hidden shadow-card border-2 border-white bg-slate-100 shrink-0">
                    <Image
                      src={ceo.photo || "/team/ceo.png"}
                      alt={isBn ? ceo.nameBn : (ceo.nameEn || ceo.nameBn)}
                      fill
                      sizes="(max-width: 640px) 240px, 256px"
                      priority
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="mt-4 text-center sm:text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-green">
                      {ceo.role}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-navy mt-0.5">
                      {isBn ? ceo.nameBn : (ceo.nameEn || ceo.nameBn)}
                    </h3>
                    <p className="text-xs text-brand-green font-semibold mt-0.5">
                      {ceo.title}
                    </p>
                  </div>
                </div>

                {/* Bio & Key Responsibilities */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-brand-navy mb-2">
                      {isBn ? "কর্মপরিধি ও ভিশন" : "Scope & Vision"}
                    </h4>
                    <p className="text-sm sm:text-base text-ink/85 leading-relaxed mb-6">
                      {ceo.bio}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block mb-4">
                      {isBn ? "মূল দায়িত্ব ও কৌশলগত অগ্রাধিকার:" : "Key Responsibilities & Strategic Priorities:"}
                    </span>
                    <ul className="space-y-3 text-sm text-ink/80">
                      {ceo.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                            ✓
                          </span>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}