"use client";

import React, { useState } from "react";
import { Locale, SiteCopy } from "@/lib/types";
import { getSiteCopy } from "@/lib/content";
import { Accordion } from "@/components/ui/Accordion";
import { Search, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function FaqPage() {
  const params = useParams();
  const locale = (params.locale as Locale) || "bn";
  const copy = getSiteCopy(locale);
  const isBn = locale === "bn";

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categories = [
    { id: "all", label: isBn ? "সব প্রশ্ন" : "All Questions" },
    { id: "general", label: isBn ? "সাধারণ" : "General" },
    { id: "farmers", label: isBn ? "কৃষক" : "Farmers" },
    { id: "buyers", label: isBn ? "ক্রেতা" : "Buyers" },
    { id: "partners", label: isBn ? "পার্টনার" : "Partners" },
    { id: "technology", label: isBn ? "প্রযুক্তি" : "Technology" },
    { id: "marketplace", label: isBn ? "মার্কেটপ্লেস" : "Marketplace" },
    { id: "network", label: isBn ? "নেটওয়ার্ক" : "Network" },
  ];

  const filteredFaqs = copy.faq.items.filter((item) => {
    const matchesCat = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const accordionItems = filteredFaqs.map((f) => ({
    id: f.id,
    title: f.q,
    content: <p className="leading-relaxed">{f.a}</p>,
  }));

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
            জিজ্ঞাসা ও উত্তর
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-brand-navy mt-3 leading-tight">
            {copy.faq.title}
          </h1>
          <p className="text-base text-muted mt-3 max-w-xl mx-auto">
            {isBn
              ? "আবাদ লিমিটেডের সেবা, ব্যবসায়িক মডেল এবং নেটওয়ার্ক সম্পর্কিত সাধারণ প্রশ্নের উত্তর।"
              : "Common questions regarding Abad Limited, services, and operating model."}
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-8 max-w-md mx-auto">
          <Search className="w-5 h-5 text-muted absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={isBn ? "প্রশ্ন বা বিষয় খুঁজুন..." : "Search question..."}
            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-focus bg-white"
          />
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? "bg-brand-navy text-white shadow-soft"
                  : "bg-white text-ink/80 border border-border hover:border-brand-green"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        {accordionItems.length > 0 ? (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border shadow-soft">
            <Accordion items={accordionItems} />
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-border">
            <p className="text-muted">{copy.common.noResults}</p>
          </div>
        )}

        {/* Still have questions banner */}
        <div className="mt-12 p-8 rounded-2xl bg-canvas border border-border text-center">
          <h3 className="text-lg font-bold text-brand-navy mb-2">
            {isBn ? "নির্দিষ্ট কোনো বিষয়ে জানতে চান?" : "Have a specific question?"}
          </h3>
          <p className="text-sm text-muted mb-5">
            {isBn
              ? "আমাদের যোগাযোগ পেজে আপনার প্রশ্ন বা অনুসন্ধান লিখে পাঠান।"
              : "Send us your query through our contact form."}
          </p>
          <Link href={`/${locale}/contact`} className="btn-primary text-sm font-bold inline-flex items-center gap-2">
            <span>{isBn ? "যোগাযোগ করুন" : "Contact Us"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}