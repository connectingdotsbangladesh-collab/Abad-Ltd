import React from "react";
import { BrandStoreView } from "@/components/store/BrandStoreView";

interface BrandPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: BrandPageProps) {
  const { locale } = await params;
  return {
    title: locale === "bn" ? "রসদ | নিত্যপ্রয়োজনীয় চাল, ডাল ও তেল | আবাদ লিমিটেড" : "Rosod | Everyday Pantry Essentials | Abad Limited",
    description: locale === "bn" ? "দিনাজপুরের সুগন্ধি চাল, মসুর ডাল ও ঘানির সরিষার তেল।" : "Aromatic rice, hand-sorted lentils and pure mustard oil.",
  };
}

export default async function RosodPage({ params }: BrandPageProps) {
  const { locale } = await params;
  return <BrandStoreView brandId="rosod" locale={locale as "bn" | "en"} />;
}
