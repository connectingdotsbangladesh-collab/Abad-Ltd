import React from "react";
import { BrandStoreView } from "@/components/store/BrandStoreView";

interface BrandPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: BrandPageProps) {
  const { locale } = await params;
  return {
    title: locale === "bn" ? "সতেজা | তাজা শাকসবজি ও ফল | আবাদ লিমিটেড" : "Soteja | Fresh Farm Produce | Abad Limited",
    description: locale === "bn" ? "মাঠ থেকে সরাসরি সংগৃহীত তাজা শাকসবজি ও ফল।" : "Directly harvested farm vegetables and seasonal produce.",
  };
}

export default async function SotejaPage({ params }: BrandPageProps) {
  const { locale } = await params;
  return <BrandStoreView brandId="soteja" locale={locale as "bn" | "en"} />;
}
