import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Locale, SiteCopy } from "@/lib/types";
import { siteConfig } from "@/lib/config";

interface FooterProps {
  locale: Locale;
  copy: SiteCopy;
}

export function Footer({ locale, copy }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const isBn = locale === "bn";

  return (
    <footer className="bg-brand-navy-deep text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Original Logo Source Panel */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3.5">
              {/* Preserved Original Logo in navy panel */}
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-brand-navy border border-slate-700 shadow-card relative shrink-0">
                <Image
                  src={siteConfig.logoSource}
                  alt={`${copy.brand.name} লোগো`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {copy.brand.name}
                </h3>
                <p className="text-xs text-accent-harvest font-semibold uppercase tracking-wider">
                  {copy.brand.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-2">
              {copy.footer.description}
            </p>
          </div>

          {/* Column 1: Explore */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {copy.footer.explore}
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li>
                <Link href={`/${locale}/about`} className="hover:text-accent-harvest transition-colors">
                  {copy.nav.find((n) => n.id === "about")?.label || "About"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/ecosystem`} className="hover:text-accent-harvest transition-colors">
                  {copy.nav.find((n) => n.id === "ecosystem")?.label || "Ecosystem"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="hover:text-accent-harvest transition-colors">
                  {copy.nav.find((n) => n.id === "services")?.label || "Services"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/network`} className="hover:text-accent-harvest transition-colors">
                  {copy.nav.find((n) => n.id === "network")?.label || "Network"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/marketplace`} className="hover:text-accent-harvest transition-colors">
                  {isBn ? "মার্কেটপ্লেস (পরিকল্পিত)" : "Marketplace (Planned)"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/insights`} className="hover:text-accent-harvest transition-colors">
                  {copy.nav.find((n) => n.id === "insights")?.label || "Insights"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="hover:text-accent-harvest transition-colors">
                  {isBn ? "সাধারণ জিজ্ঞাসা" : "FAQ"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Connect */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {copy.footer.connect}
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li>
                <Link href={`/${locale}/farmers`} className="hover:text-accent-harvest transition-colors">
                  {copy.common.farmerCta}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/buyers`} className="hover:text-accent-harvest transition-colors">
                  {copy.common.buyerCta}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/partners`} className="hover:text-accent-harvest transition-colors">
                  {copy.common.partnerCta}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-accent-harvest transition-colors">
                  {copy.nav.find((n) => n.id === "contact")?.label || "Contact"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Notice */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {copy.footer.legal}
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li>
                <Link href={`/${locale}/privacy`} className="hover:text-accent-harvest transition-colors">
                  {copy.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="hover:text-accent-harvest transition-colors">
                  {copy.footer.terms}
                </Link>
              </li>
              <li className="pt-2 text-xs text-slate-500 leading-normal">
                {copy.footer.availability}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {copy.brand.name}। {copy.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="hover:text-slate-300 underline underline-offset-2">
              {isBn ? "প্রটেক্টেড অ্যাডমিন" : "Protected Admin"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}