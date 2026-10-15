import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/types";
import { getSiteCopy, getArticleBySlug } from "@/lib/content";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";

interface InsightDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  const slugs = ["farmer-as-a-brand", "traceability-starts-with-data", "local-hubs-shared-logistics"];
  const params: { locale: string; slug: string }[] = [];
  for (const locale of ["bn", "en"]) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: InsightDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "bn" && locale !== "en") return {};
  const article = getArticleBySlug(locale as Locale, slug);
  if (!article) return {};
  return {
    title: `${article.title} | আবাদ লিমিটেড`,
    description: article.excerpt,
  };
}

export default async function InsightDetailPage({ params }: InsightDetailPageProps) {
  const { locale, slug } = await params;
  if (locale !== "bn" && locale !== "en") notFound();

  const article = getArticleBySlug(locale as Locale, slug);
  if (!article) notFound();

  const copy = getSiteCopy(locale as Locale);
  const isBn = locale === "bn";

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-[850px] mx-auto px-4 sm:px-6 mb-8">
        <Link
          href={`/${locale}/insights`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-brand-green transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isBn ? "সকল লেখায় ফিরে যান" : "Back to insights"}</span>
        </Link>
      </div>

      <article className="max-w-[850px] mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-border shadow-soft">
          <div className="flex items-center gap-3 text-xs text-muted mb-6">
            <span className="px-3 py-1 rounded-md bg-canvas font-semibold uppercase tracking-wider text-[10px]">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>খসড়া সম্পাদকীয় নিবন্ধ</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-brand-navy leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl font-medium text-brand-green leading-relaxed mb-8 pb-6 border-b border-border">
            {article.excerpt}
          </p>

          <div className="space-y-6 text-base sm:text-lg text-ink/90 leading-relaxed">
            {article.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border flex items-center justify-between text-xs text-muted">
            <span>আবাদ লিমিটেড সম্পাদকীয় পর্যালোচনা</span>
            <Link href={`/${locale}/contact`} className="text-brand-green font-bold hover:underline">
              {isBn ? "মন্তব্য বা প্রশ্ন জানান →" : "Send feedback →"}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}