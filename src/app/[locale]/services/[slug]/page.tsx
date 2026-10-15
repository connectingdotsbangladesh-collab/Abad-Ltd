import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/types";
import { getSiteCopy, getServiceBySlug, validServiceSlugs } from "@/lib/content";
import { CheckCircle2, ArrowRight, ShieldCheck, ArrowLeft } from "lucide-react";

interface ServiceDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of ["bn", "en"]) {
    for (const slug of validServiceSlugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "bn" && locale !== "en") return {};
  const service = getServiceBySlug(locale as Locale, slug);
  if (!service) return {};
  return {
    title: `${service.title} | আবাদ লিমিটেড`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { locale, slug } = await params;
  if (locale !== "bn" && locale !== "en") notFound();

  const service = getServiceBySlug(locale as Locale, slug);
  if (!service) notFound();

  const copy = getSiteCopy(locale as Locale);
  const isBn = locale === "bn";

  const ctaLinks: Record<string, string> = {
    farmer: `/${locale}/farmers`,
    buyer: `/${locale}/buyers`,
    hub: `/${locale}/partners?type=hub`,
    sponsor: `/${locale}/partners?type=sponsor`,
  };

  const ctaLabels: Record<string, string> = {
    farmer: copy.common.farmerCta,
    buyer: copy.common.buyerCta,
    hub: isBn ? "হাব পার্টনার হিসেবে আগ্রহ জানান" : "Express Hub Partner Interest",
    sponsor: isBn ? "স্পন্সরশিপ আলোচনা" : "Discuss Sponsorship",
  };

  const relatedServices = copy.services.items.filter((s) => s.id !== slug).slice(0, 3);

  return (
    <div className="py-16 sm:py-24">
      {/* Back button */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 mb-8">
        <Link
          href={`/${locale}/services`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-brand-green transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isBn ? "সকল সেবায় ফিরে যান" : "Back to all services"}</span>
        </Link>
      </div>

      {/* Main Content Article */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-soft mb-12">
          <div className="flex items-center justify-between gap-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              পরিকল্পিত সেবা
            </span>
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-canvas text-brand-navy border border-border">
              {copy.common.planned}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-brand-navy leading-tight mb-6">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-ink/80 leading-relaxed mb-10 pb-8 border-b border-border">
            {service.intro}
          </p>

          {/* 3 Key Benefits */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-brand-navy mb-5">
              {isBn ? "এই সেবার মূল সুবিধাসমূহ" : "Key Benefits & Features"}
            </h2>
            <div className="space-y-4">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3.5 p-4 rounded-xl bg-canvas/40 border border-border/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <p className="text-base text-ink font-semibold leading-relaxed">
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Audience & CTA Box */}
          <div className="p-8 rounded-2xl bg-brand-navy text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-accent-harvest font-bold block mb-1">
                উপযুক্ত গ্রাহক
              </span>
              <div className="text-lg font-bold text-white">{service.audience}</div>
            </div>

            <Link
              href={ctaLinks[service.ctaType] || `/${locale}/contact`}
              className="btn-primary text-sm font-bold shrink-0 w-full sm:w-auto text-center"
            >
              {ctaLabels[service.ctaType] || copy.common.join}
            </Link>
          </div>
        </div>

        {/* Related Services */}
        <div>
          <h3 className="text-xl font-bold text-brand-navy mb-6">
            {isBn ? "অন্যান্য প্রাসঙ্গিক সেবা" : "Related Services"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((r) => (
              <Link
                key={r.id}
                href={`/${locale}/services/${r.id}`}
                className="p-6 rounded-2xl bg-white border border-border hover:border-brand-green/60 hover:shadow-soft transition-all"
              >
                <h4 className="text-base font-bold text-brand-navy mb-2 hover:text-brand-green">
                  {r.title}
                </h4>
                <p className="text-xs text-muted line-clamp-2">{r.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}