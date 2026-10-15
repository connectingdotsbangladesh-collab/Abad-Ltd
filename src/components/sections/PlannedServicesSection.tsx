import React from "react";
import Link from "next/link";
import { Locale, SiteCopy } from "@/lib/types";
import { ArrowRight, Store, Handshake, ScanLine, Truck } from "lucide-react";

interface PlannedServicesSectionProps {
  locale: Locale;
  copy: SiteCopy;
}

export function PlannedServicesSection({ locale, copy }: PlannedServicesSectionProps) {
  const isBn = locale === "bn";
  const featured = copy.services.items.slice(0, 4);

  const iconMap: Record<string, any> = {
    "farmer-brands": Store,
    "market-access": Handshake,
    "data-traceability": ScanLine,
    "hubs-logistics": Truck,
  };

  return (
    <section className="py-20 bg-white border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              পরিকল্পিত সেবাসমূহ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-2">
              {copy.home.servicesHeading}
            </h2>
            <p className="text-base text-muted mt-2 max-w-xl">
              {copy.home.servicesIntro}
            </p>
          </div>

          <Link
            href={`/${locale}/services`}
            className="btn-secondary !py-2.5 !px-5 text-sm font-semibold shrink-0 flex items-center gap-2"
          >
            <span>{isBn ? "সব ৮টি সেবা দেখুন" : "View All 8 Services"}</span>
            <ArrowRight className="w-4 h-4 text-brand-green" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((service) => {
            const Icon = iconMap[service.id] || Store;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-canvas/40 hover:bg-white border border-border hover:border-brand-green/60 p-8 transition-all duration-200 hover:shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center border border-brand-green/20 group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-navy/5 text-brand-navy border border-brand-navy/15">
                      {copy.common.planned}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-green transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {service.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted font-medium">
                    {service.audience}
                  </span>
                  <Link
                    href={`/${locale}/services/${service.id}`}
                    className="text-sm font-bold text-brand-green hover:underline flex items-center gap-1"
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
    </section>
  );
}