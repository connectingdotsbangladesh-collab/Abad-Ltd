import React from "react";
import { BrandStoreView } from "@/components/store/BrandStoreView";

interface BrandPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: BrandPageProps) {
  const { locale } = await params;
  return {
    title: locale === "bn" ? "সুধা | খাঁটি তরল দুধ ও গাওয়া ঘি | আবাদ লিমিটেড" : "Sudha | Pure Farm Dairy & Ghee | Abad Limited",
    description: locale === "bn" ? "খামারের খাঁটি তরল দুধ, ঐতিহ্যবাহী ঘি ও দুগ্ধপণ্য।" : "Grass-fed farm milk, traditional bilona cow ghee and artisanal paneer.",
  };
}

export default async function SudhaPage({ params }: BrandPageProps) {
  const { locale } = await params;
  return <BrandStoreView brandId="sudha" locale={locale as "bn" | "en"} />;
}
