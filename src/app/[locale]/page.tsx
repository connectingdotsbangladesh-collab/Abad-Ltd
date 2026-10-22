import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/types";
import { getSiteCopy, getAllDistricts } from "@/lib/content";
import { HeroSection } from "@/components/sections/HeroSection";
import { GoalStrip } from "@/components/sections/GoalStrip";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { PlannedServicesSection } from "@/components/sections/PlannedServicesSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { JourneysSection } from "@/components/sections/JourneysSection";
import { NetworkSection } from "@/components/sections/NetworkSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { SisterBrandsStrip } from "@/components/sections/SisterBrandsStrip";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") return {};
  const copy = getSiteCopy(locale as Locale);
  return {
    title: copy.home.seo.title,
    description: copy.home.seo.description,
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") notFound();

  const copy = getSiteCopy(locale as Locale);
  const districts = getAllDistricts();

  return (
    <>
      <HeroSection locale={locale as Locale} copy={copy} />
      <GoalStrip copy={copy} />
      <SisterBrandsStrip locale={locale as Locale} />
      <ProblemsSection copy={copy} />
      <PlannedServicesSection locale={locale as Locale} copy={copy} />
      <EcosystemSection locale={locale as Locale} copy={copy} />
      <JourneysSection locale={locale as Locale} copy={copy} />
      <NetworkSection locale={locale as Locale} copy={copy} districts={districts} />
      <LeadershipSection locale={locale as Locale} copy={copy} />
      <InsightsSection locale={locale as Locale} copy={copy} />
      <FaqSection locale={locale as Locale} copy={copy} />
      <CtaSection locale={locale as Locale} copy={copy} />
    </>
  );
}