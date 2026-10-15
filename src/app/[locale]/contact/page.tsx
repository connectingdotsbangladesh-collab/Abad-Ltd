import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/types";
import { getSiteCopy, getAllDistricts } from "@/lib/content";
import { siteConfig } from "@/lib/config";
import { LeadForm } from "@/components/forms/LeadForm";
import { Mail, Phone, MapPin, ShieldCheck, MessageSquare } from "lucide-react";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") return {};
  const copy = getSiteCopy(locale as Locale);
  return {
    title: `${copy.contact.title} | ${copy.brand.name}`,
    description: copy.contact.intro,
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") notFound();

  const copy = getSiteCopy(locale as Locale);
  const districts = getAllDistricts();
  const isBn = locale === "bn";

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries Notice & Company Channels */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              যোগাযোগ
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-brand-navy mt-3 leading-tight">
              {copy.contact.title}
            </h1>
            <p className="text-lg text-ink/80 mt-6 leading-relaxed">
              {copy.contact.intro}
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-canvas border border-border">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <p className="text-sm text-ink font-medium leading-relaxed">
                  {copy.contact.missingContact}
                </p>
              </div>

              {/* Show contact channels only if configured by owner */}
              {(siteConfig.email || siteConfig.phone || siteConfig.addressBn) && (
                <div className="mt-6 pt-6 border-t border-border space-y-4 text-sm text-ink">
                  {siteConfig.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-brand-green" />
                      <span>{siteConfig.email}</span>
                    </div>
                  )}
                  {siteConfig.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-brand-green" />
                      <span>{siteConfig.phone}</span>
                    </div>
                  )}
                  {siteConfig.addressBn && (
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-brand-green" />
                      <span>{isBn ? siteConfig.addressBn : siteConfig.addressEn}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="mt-6 flex items-start gap-3 text-xs text-muted">
              <ShieldCheck className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
              <span>
                {isBn
                  ? "আপনার অনুসন্ধানের তথ্য গোপনীয়তার সঙ্গে বিবেচনা করা হবে।"
                  : "Your message details are processed respectfully and securely."}
              </span>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-brand-navy">
                {copy.contact.formTitle}
              </h2>
            </div>

            <LeadForm
              kind="contact"
              locale={locale as Locale}
              copy={copy}
              districts={districts}
            />
          </div>
        </div>
      </div>
    </div>
  );
}