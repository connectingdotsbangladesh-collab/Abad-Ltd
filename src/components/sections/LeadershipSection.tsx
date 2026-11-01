import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Locale, SiteCopy } from "@/lib/types";
import { ArrowRight, CheckCircle2, Phone, Mail } from "lucide-react";

interface LeadershipSectionProps {
  locale: Locale;
  copy: SiteCopy;
}

export function LeadershipSection({ locale, copy }: LeadershipSectionProps) {
  const isBn = locale === "bn";
  // Showcase CEO and COO as requested, keeping other roles hidden
  const leaders = copy.about.team.filter((m) => m.id === "ceo" || m.id === "coo");

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
            href={`/${locale}/about#leadership`}
            className="text-sm font-bold text-brand-green hover:underline flex items-center gap-1 shrink-0"
          >
            <span>{isBn ? "বিস্তারিত পরিচিতি দেখুন →" : "View Leadership Details →"}</span>
          </Link>
        </div>

        {/* 2 Executive Leadership Cards (CEO & COO) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {leaders.map((leader) => {
            const displayName = isBn ? leader.nameBn : (leader.nameEn || leader.nameBn);
            return (
              <div
                key={leader.id}
                id={leader.id}
                className="rounded-2xl sm:rounded-3xl bg-canvas/50 border border-border p-6 sm:p-8 shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start mb-5">
                    {/* Portrait Photo */}
                    <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden shadow-card border-2 border-white bg-slate-100 shrink-0">
                      <Image
                        src={leader.photo || (leader.id === "ceo" ? "/team/ceo.png" : "/team/coo.jpg")}
                        alt={displayName}
                        fill
                        sizes="(max-width: 640px) 144px, 160px"
                        priority
                        className="object-cover object-top"
                      />
                    </div>

                    {/* Basic Info */}
                    <div className="text-center sm:text-left flex-1 min-w-0">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                        <span>{leader.role} • {leader.title}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight truncate">
                        {displayName}
                      </h3>

                      {/* Contact Info (e.g. Phone & Email for COO) */}
                      {(leader.phone || leader.email) && (
                        <div className="mt-2.5 pt-2.5 border-t border-border/60 flex flex-col gap-1.5 text-xs text-muted">
                          {leader.phone && (
                            <a
                              href={`tel:${leader.phone}`}
                              className="inline-flex items-center gap-2 hover:text-brand-green transition-colors font-medium justify-center sm:justify-start"
                            >
                              <Phone className="w-3.5 h-3.5 text-brand-green shrink-0" />
                              <span>{leader.phone}</span>
                            </a>
                          )}
                          {leader.email && (
                            <a
                              href={`mailto:${leader.email}`}
                              className="inline-flex items-center gap-2 hover:text-brand-green transition-colors font-medium justify-center sm:justify-start"
                            >
                              <Mail className="w-3.5 h-3.5 text-brand-green shrink-0" />
                              <span className="truncate">{leader.email}</span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-ink/80 leading-relaxed mb-4">
                    {leader.bio}
                  </p>

                  {/* Responsibilities */}
                  {leader.responsibilities && leader.responsibilities.length > 0 && (
                    <div className="space-y-2 pt-4 border-t border-border/80">
                      {leader.responsibilities.slice(0, 2).map((resp, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-muted leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{resp}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                  <Link
                    href={`/${locale}/about#${leader.id}`}
                    className="text-xs sm:text-sm font-bold text-brand-navy hover:text-brand-green inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{isBn ? "বিস্তারিত প্রোফাইল" : "Full Profile"}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-green" />
                  </Link>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted bg-white px-2 py-0.5 rounded border border-border">
                    {leader.role}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
