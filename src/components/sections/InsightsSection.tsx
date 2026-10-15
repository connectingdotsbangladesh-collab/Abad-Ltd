import React from "react";
import Link from "next/link";
import { Locale, SiteCopy } from "@/lib/types";
import { BookOpen, ArrowRight, Clock } from "lucide-react";

interface InsightsSectionProps {
  locale: Locale;
  copy: SiteCopy;
}

export function InsightsSection({ locale, copy }: InsightsSectionProps) {
  const isBn = locale === "bn";
  const articles = copy.insights.articles;

  return (
    <section className="py-20 bg-canvas border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              জ্ঞান ও ভাবনা
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-2">
              {copy.home.insightsHeading}
            </h2>
          </div>

          <Link
            href={`/${locale}/insights`}
            className="text-sm font-bold text-brand-green hover:underline flex items-center gap-1 shrink-0"
          >
            <span>{isBn ? "সব লেখা দেখুন →" : "View All Articles →"}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl p-6 border border-border shadow-soft flex flex-col justify-between hover:shadow-card transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-muted mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-canvas font-semibold uppercase tracking-wider text-[10px]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>খসড়া পর্যালোচনা</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-brand-navy mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <Link
                  href={`/${locale}/insights/${article.slug}`}
                  className="text-sm font-bold text-brand-green hover:underline flex items-center gap-1"
                >
                  <span>{copy.common.readMore}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}