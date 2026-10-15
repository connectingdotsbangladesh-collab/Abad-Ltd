import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/types";
import { getSiteCopy } from "@/lib/content";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

interface InsightsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: InsightsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") return {};
  const copy = getSiteCopy(locale as Locale);
  return {
    title: `${copy.insights.title} | ${copy.brand.name}`,
    description: copy.insights.intro,
  };
}

export default async function InsightsPage({ params }: InsightsPageProps) {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") notFound();

  const copy = getSiteCopy(locale as Locale);
  const articles = copy.insights.articles;
  const isBn = locale === "bn";

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-16">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
          জ্ঞান ও আপডেট
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-brand-navy mt-3 max-w-3xl leading-tight">
          {copy.insights.title}
        </h1>
        <p className="text-lg sm:text-xl text-muted mt-6 max-w-3xl leading-relaxed">
          {copy.insights.intro}
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl p-8 border border-border shadow-soft flex flex-col justify-between hover:shadow-card transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-muted mb-4">
                  <span className="px-3 py-1 rounded-md bg-canvas font-semibold uppercase tracking-wider text-[10px]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>খসড়া সম্পাদকীয়</span>
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-brand-navy mb-3">
                  {article.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed mb-6">
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
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}