import React from "react";
import Link from "next/link";
import { Locale, SiteCopy } from "@/lib/types";
import { UserCheck, ArrowRight } from "lucide-react";

interface LeadershipSectionProps {
  locale: Locale;
  copy: SiteCopy;
}

export function LeadershipSection({ locale, copy }: LeadershipSectionProps) {
  const isBn = locale === "bn";
  const team = copy.about.team;

  return (
    <section className="py-20 bg-white border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              ব্যবস্থাপনা ও নেতৃত্ব
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-2">
              {copy.home.teamHeading}
            </h2>
          </div>

          <Link
            href={`/${locale}/about`}
            className="text-sm font-bold text-brand-green hover:underline flex items-center gap-1 shrink-0"
          >
            <span>{isBn ? "বিস্তারিত দায়িত্ব ও পরিকল্পনা দেখুন →" : "View Leadership Details →"}</span>
          </Link>
        </div>

        {/* 4 Equally Weighted Executive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl bg-canvas/40 border border-border p-6 flex flex-col justify-between hover:shadow-soft transition-all"
            >
              <div>
                {/* Understated Neutral Portrait Frame */}
                <div className="w-full h-48 rounded-xl bg-gradient-to-b from-brand-navy/10 to-brand-navy/20 border border-border/80 flex flex-col items-center justify-center text-brand-navy mb-5">
                  <div className="w-16 h-16 rounded-full bg-white shadow-soft flex items-center justify-center font-bold text-2xl text-brand-navy mb-2">
                    {member.nameBn.slice(0, 1)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-green">
                    {member.role}
                  </span>
                </div>

                {/* Authoritative Bangla Name */}
                <h3 className="text-xl font-bold text-brand-navy">
                  {member.nameBn}
                </h3>
                <p className="text-xs text-brand-green font-semibold mt-0.5 mb-3">
                  {member.title}
                </p>
                <p className="text-xs text-muted leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-border mt-4">
                <Link
                  href={`/${locale}/about#team-${member.id}`}
                  className="text-xs font-bold text-brand-navy hover:text-brand-green flex items-center gap-1"
                >
                  <span>{copy.common.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}