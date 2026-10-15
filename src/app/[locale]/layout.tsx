import React from "react";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/types";
import { getSiteCopy } from "@/lib/content";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
  return [{ locale: "bn" }, { locale: "en" }];
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (locale !== "bn" && locale !== "en") {
    notFound();
  }

  const copy = getSiteCopy(locale as Locale);

  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className="skip-link">
        {copy.common.skipToContent}
      </a>
      <Header locale={locale as Locale} copy={copy} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer locale={locale as Locale} copy={copy} />
    </div>
  );
}