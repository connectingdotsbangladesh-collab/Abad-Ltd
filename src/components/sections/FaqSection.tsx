import React from "react";
import Link from "next/link";
import { Locale, SiteCopy } from "@/lib/types";
import { Accordion } from "@/components/ui/Accordion";
import { ArrowRight, HelpCircle } from "lucide-react";

interface FaqSectionProps {
  locale: Locale;
  copy: SiteCopy;
}

export function FaqSection({ locale, copy }: FaqSectionProps) {
  const isBn = locale === "bn";
  const selectedFaqs = copy.faq.items.slice(0, 5);

  const accordionItems = selectedFaqs.map((f) => ({
    id: f.id,
    title: f.q,
    content: <p>{f.a}</p>,
  }));

  return (
    <section className="py-20 bg-white border-t border-border">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
            জিজ্ঞাসা ও উত্তর
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-2">
            {copy.home.faqHeading}
          </h2>
        </div>

        <Accordion items={accordionItems} />

        <div className="mt-8 text-center">
          <Link
            href={`/${locale}/faq`}
            className="btn-secondary text-sm font-semibold inline-flex items-center gap-2"
          >
            <span>{isBn ? "সব ১২টি প্রশ্নের উত্তর দেখুন" : "View All 12 Questions"}</span>
            <ArrowRight className="w-4 h-4 text-brand-green" />
          </Link>
        </div>
      </div>
    </section>
  );
}