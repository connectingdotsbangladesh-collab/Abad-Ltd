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

      {/* Leadership Team with Expandable Responsibilities */}
      <div className="py-16 sm:py-24 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
            নেতৃত্ব পরিষদ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-2">
            আবাদ-এর ব্যবস্থাপনা টিম
          </h2>
          <p className="text-base text-muted mt-2 max-w-2xl">
            কৃষক, প্রযুক্তি, অপারেশনস ও অর্থায়নের মধ্যে ভারসাম্য গড়ে তোলার দায়িত্বপ্রাপ্ত নেতৃত্ব।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {copy.about.team.map((member) => (
            <div
              key={member.id}
              id={`team-${member.id}`}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-border shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-green text-white font-bold text-2xl flex items-center justify-center shrink-0">
                    {member.nameBn.slice(0, 1)}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-green">
                      {member.role}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-navy">
                      {member.nameBn}
                    </h3>
                    <p className="text-xs text-muted font-medium mt-0.5">
                      {member.title}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-ink leading-relaxed mb-6">{member.bio}</p>
              </div>

              {/* Expandable Responsibilities */}
              <div className="pt-4 border-t border-border">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block mb-3">
                  মূল দায়িত্বসমূহ:
                </span>
                <ul className="space-y-2 text-xs text-muted pl-4 list-disc">
                  {member.responsibilities.map((resp, i) => (
                    <li key={i} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}