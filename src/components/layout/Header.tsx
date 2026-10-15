"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Locale, SiteCopy } from "@/lib/types";
import { Menu, X, ChevronDown, ArrowRight, Globe } from "lucide-react";
import { ConnectModal } from "@/components/ui/ConnectModal";

interface HeaderProps {
  locale: Locale;
  copy: SiteCopy;
}

export function Header({ locale, copy }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [connectModalOpen, setConnectModalOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Switch locale while preserving the path
  const handleLocaleSwitch = (newLocale: Locale) => {
    if (newLocale === locale) return;
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === "bn" || segments[0] === "en") {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }
    const targetUrl = "/" + segments.join("/");
    router.push(targetUrl);
  };

  const navLinks = [
    { href: `/${locale}`, label: copy.nav.find((n) => n.id === "home")?.label || "Home", id: "home" },
    { href: `/${locale}/about`, label: copy.nav.find((n) => n.id === "about")?.label || "About", id: "about" },
    { href: `/${locale}/ecosystem`, label: copy.nav.find((n) => n.id === "ecosystem")?.label || "Ecosystem", id: "ecosystem" },
    { href: `/${locale}/services`, label: copy.nav.find((n) => n.id === "services")?.label || "Services", id: "services", hasDropdown: true },
    { href: `/${locale}/network`, label: copy.nav.find((n) => n.id === "network")?.label || "Network", id: "network" },
    { href: `/${locale}/insights`, label: copy.nav.find((n) => n.id === "insights")?.label || "Insights", id: "insights" },
    { href: `/${locale}/contact`, label: copy.nav.find((n) => n.id === "contact")?.label || "Contact", id: "contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-xs transition-colors">
        <div className="max-w-[1200px] mx-auto h-20 px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Brand Wordmark Lockup */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-focus rounded-xl py-1 px-1.5 group"
            aria-label={`${copy.brand.name} - ${copy.brand.tagline}`}
          >
            <div className="w-11 h-11 rounded-xl overflow-hidden bg-brand-navy border border-border/80 shadow-soft relative shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/brand/abad-logo.jpg"
                alt={`${copy.brand.name} logo`}
                width={44}
                height={44}
                priority
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-brand-navy leading-none group-hover:text-brand-green transition-colors">
                {locale === "bn" ? "আবাদ" : "Abad"}
              </span>
              <span className="text-[10px] tracking-widest font-semibold uppercase text-brand-green leading-none mt-1">
                LIMITED
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === `/${locale}`
                  ? pathname === `/${locale}` || pathname === `/${locale}/`
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 px-1 ${
                        isActive
                          ? "text-brand-green border-b-2 border-brand-green"
                          : "text-ink/80 hover:text-brand-green"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </Link>

                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-card border border-border p-2 z-50 animate-fadeIn">
                        <Link
                          href={`/${locale}/services`}
                          className="block p-2 text-xs font-bold text-brand-green hover:bg-canvas rounded-lg mb-1"
                        >
                          {locale === "bn" ? "সব সেবাসমূহ দেখুন →" : "View All Services →"}
                        </Link>
                        {copy.services.items.slice(0, 4).map((s) => (
                          <Link
                            key={s.id}
                            href={`/${locale}/services/${s.id}`}
                            className="block p-2 text-xs text-ink hover:text-brand-green hover:bg-canvas rounded-lg transition-colors"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors py-2 px-1 ${
                    isActive
                      ? "text-brand-green border-b-2 border-brand-green"
                      : "text-ink/80 hover:text-brand-green"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Language Switcher & Connect CTA */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div
              className="flex items-center bg-canvas rounded-lg p-1 border border-border text-xs font-semibold"
              role="group"
              aria-label={copy.common.selectLanguage}
            >
              <button
                type="button"
                onClick={() => handleLocaleSwitch("bn")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  locale === "bn"
                    ? "bg-brand-navy text-white shadow-xs font-bold"
                    : "text-muted hover:text-ink"
                }`}
                aria-pressed={locale === "bn"}
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => handleLocaleSwitch("en")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  locale === "en"
                    ? "bg-brand-navy text-white shadow-xs font-bold"
                    : "text-muted hover:text-ink"
                }`}
                aria-pressed={locale === "en"}
              >
                EN
              </button>
            </div>

            {/* Connect CTA */}
            <button
              type="button"
              onClick={() => setConnectModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 btn-secondary text-sm !min-h-[42px] !py-2 !px-4 hover:border-brand-green"
            >
              <span>{copy.common.join}</span>
              <ArrowRight className="w-4 h-4 text-brand-green" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-ink hover:text-brand-green rounded-lg hover:bg-canvas transition-colors focus-visible:ring-2 focus-visible:ring-focus"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? copy.common.closeMenu : copy.common.openMenu}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white/98 backdrop-blur-lg border-t border-border z-50 p-6 overflow-y-auto flex flex-col justify-between"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive =
                  link.href === `/${locale}`
                    ? pathname === `/${locale}` || pathname === `/${locale}/`
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-bold py-2 border-b border-border/50 ${
                      isActive ? "text-brand-green" : "text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-8 border-t border-border mt-8 flex flex-col gap-4">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setConnectModalOpen(true);
                }}
                className="btn-primary w-full text-base"
              >
                {copy.common.join}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Accessible 3-Choice Connect Dialog */}
      <ConnectModal
        isOpen={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
        locale={locale}
      />
    </>
  );
}