import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/types";
import { getSiteCopy } from "@/lib/content";
import {
  Store,
  Handshake,
  ScanLine,
  Truck,
  Sprout,
  Sun,
  GraduationCap,
  MapPin,
  ArrowRight,
} from "lucide-react";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") return {};
  const copy = getSiteCopy(locale as Locale);
  return {
    title: `${copy.nav.find((n) => n.id === "services")?.label || "Services"} | ${copy.brand.name}`,
    description: copy.services.intro,
  };
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") notFound();

  const copy = getSiteCopy(locale as Locale);
  const isBn = locale === "bn";

  const iconMap: Record<string, any> = {
    "farmer-brands": Store,
    "market-access": Handshake,
    "data-traceability": ScanLine,
    "hubs-logistics": Truck,
    "contract-farming": Sprout,
    "inputs-technology": Sun,
    "training-demonstration": GraduationCap,
    "field-events": MapPin,
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
          সেবার পরিধি
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-brand-navy mt-3 max-w-3xl leading-tight">
          {copy.services.title}
        </h1>
        <p className="text-lg sm:text-xl text-muted mt-6 max-w-3xl leading-relaxed">
          {copy.services.intro}
        </p>
      </div>

      {/* Grid of all 8 Services */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {copy.services.items.map((service) => {
            const Icon = iconMap[service.id] || Store;
            return (
              <div
                key={service.id}
                className="group rounded-2xl bg-white border border-border hover:border-brand-green/60 p-8 shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center border border-brand-green/20 group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-canvas text-brand-navy border border-border">
                      {copy.common.planned}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-green transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {service.summary}
                  </p>
                </div>

                <div className="pt-5 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted font-medium">
                    লক্ষ্য: {service.audience}
                  </span>
                  <Link
                    href={`/${locale}/services/${service.id}`}
                    className="text-sm font-bold text-brand-green hover:underline flex items-center gap-1 shrink-0"
                  >
                    <span>{copy.common.learnMore}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}