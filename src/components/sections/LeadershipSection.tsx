import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Locale, SiteCopy } from "@/lib/types";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface LeadershipSectionProps {
  locale: Locale;
  copy: SiteCopy;
}

export function LeadershipSection({ locale, copy }: LeadershipSectionProps) {
  const isBn = locale === "bn";
  const ceo = copy.about.team.find((m) => m.id === "ceo") || copy.about.team[0];

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              {isBn ? "নেতৃত্ব ও ব্যবস্থাপনা" : "Executive Leadership"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-brand-navy mt-1.5">
              {copy.home.teamHeading}
            </h2>
          </div>

          <Link
            href={`/${locale}/about#ceo`}
            className="text-sm font-bold text-brand-green hover:underline flex items-center gap-1 shrink-0"
          >
            <span>{isBn ? "বিস্তারিত পরিচিতি দেখুন →" : "View Leadership Details →"}</span>
          </Link>
        </div>

        {/* CEO Spotlight Card (Other employee info kept hidden for now as requested) */}
        <div className="rounded-2xl sm:rounded-3xl bg-canvas/50 border border-border p-6 sm:p-10 shadow-soft hover:shadow-card transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* CEO Portrait Photo */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden shadow-card border-2 border-white bg-slate-100 shrink-0">
                <Image
                  src={ceo.photo || "/team/ceo.png"}
                  alt={isBn ? ceo.nameBn : (ceo.nameEn || ceo.nameBn)}
                  fill
                  sizes="(max-width: 640px) 224px, 256px"
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* CEO Details */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold w-fit mb-3">
                <span className="w-2 h-2 rounded-full bg-brand-green" />
                <span>{ceo.role} • {ceo.title}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
                {isBn ? ceo.nameBn : (ceo.nameEn || ceo.nameBn)}
              </h3>

              <p className="text-sm sm:text-base text-ink/80 leading-relaxed mt-3 mb-6">
                {ceo.bio}
              </p>

              {/* Strategic Focus Points */}
              {ceo.responsibilities && ceo.responsibilities.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-border/80">
                  {ceo.responsibilities.slice(0, 2).map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-muted leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6">
                <Link
                  href={`/${locale}/about#ceo`}
                  className="btn-secondary !min-h-[42px] !py-2 !px-4 text-xs sm:text-sm font-bold inline-flex items-center gap-2 hover:border-brand-green"
                >
                  <span>{copy.common.learnMore}</span>
                  <ArrowRight className="w-4 h-4 text-brand-green" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}