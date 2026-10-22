import React from "react";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/types";
import { getSiteCopy } from "@/lib/content";
import { LayoutShell } from "@/components/layout/LayoutShell";

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
    <LayoutShell locale={locale as Locale} copy={copy}>
      {children}
    </LayoutShell>
  );
}