import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/types";
import { getSiteCopy, getAllDistricts } from "@/lib/content";
import { LeadForm } from "@/components/forms/LeadForm";
import { Handshake, Warehouse, Truck, Cpu, Coins, Award } from "lucide-react";

interface PartnersPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ type?: string; district?: string }>;
}

export async function generateMetadata({ params }: PartnersPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") return {};
  const copy = getSiteCopy(locale as Locale);
  return {
    title: `${copy.partners.title} | ${copy.brand.name}`,
    description: copy.partners.intro,
  };
}

export default async function PartnersPage({ params, searchParams }: PartnersPageProps) {
  const { locale } = await params;
  const { type: paramType, district: prefilledDistrict } = await searchParams;
  if (locale !== "bn" && locale !== "en") notFound();

  const copy = getSiteCopy(locale as Locale);
  const districts = getAllDistricts();
  const isBn = locale === "bn";

  const partnerKind = paramType === "hub" ? "hub" : paramType === "sponsor" ? "sponsor" : "partner";

  const icons: Record<string, any> = {
    hub: Warehouse,
    logistics: Truck,
    technology: Cpu,
    finance: Coins,
    sponsor: Award,
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
            সহযোগিতার সুযোগ
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-brand-navy mt-3 leading-tight">
            {copy.partners.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted mt-6 leading-relaxed">
            {copy.partners.intro}
          </p>
        </div>

        {/* 5 Collaboration Types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {copy.partners.types.map((t) => {
            const Icon = icons[t.id] || Handshake;
            return (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 border border-border shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{t.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{t.body}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partner Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              {partnerKind === "hub"
                ? copy.partners.hubFormTitle
                : partnerKind === "sponsor"
                ? copy.partners.sponsorFormTitle
                : copy.partners.formTitle}
            </h2>
            <p className="text-sm text-muted mt-1">
              {isBn
                ? "আপনার আগ্রহ ও অবকাঠামোগত সক্ষমতা সম্পর্কে জানান।"
                : "Describe your organization and potential areas of collaboration."}
            </p>
          </div>

          <LeadForm
            kind={partnerKind}
            locale={locale as Locale}
            copy={copy}
            districts={districts}
            prefilledDistrictId={prefilledDistrict || ""}
          />
        </div>
      </div>
    </div>
  );
}