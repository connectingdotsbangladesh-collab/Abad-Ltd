import type { Locale, SiteCopy, District, ServiceItem, ArticleItem } from "./types";
import bnCopy from "../../content/site-copy.bn.json";
import enCopy from "../../content/site-copy.en.json";
import districtsData from "../../content/districts.json";
import companyModelData from "../../content/company-model.json";
import formSpecData from "../../content/form-spec.json";
import { siteConfig } from "./config";

export function getSiteCopy(locale: Locale): SiteCopy {
  const base = locale === "en" ? (enCopy as unknown as SiteCopy) : (bnCopy as unknown as SiteCopy);

  // Apply owner review flag rule: If English spellings are not confirmed,
  // authoritative Bangla names must be rendered.
  if (locale === "en" && !siteConfig.ownerReview.teamEnglishSpellings) {
    const updatedTeam = base.about.team.map((member) => ({
      ...member,
      nameEn: member.nameBn, // Fallback to authoritative Bangla spelling
    }));
    return {
      ...base,
      about: {
        ...base.about,
        team: updatedTeam,
      },
    };
  }

  return base;
}

export function getAllDistricts(): District[] {
  return districtsData.districts as District[];
}

export function getDistrictById(id: string): District | undefined {
  return getAllDistricts().find((d) => d.id.toLowerCase() === id.toLowerCase());
}

export function getServiceBySlug(locale: Locale, slug: string): ServiceItem | undefined {
  const copy = getSiteCopy(locale);
  return copy.services.items.find((item) => item.id === slug);
}

export function getArticleBySlug(locale: Locale, slug: string): ArticleItem | undefined {
  const copy = getSiteCopy(locale);
  return copy.insights.articles.find((item) => item.slug === slug);
}

export function getCompanyModel() {
  return companyModelData;
}

export function getFormSpec() {
  return formSpecData;
}

export const validServiceSlugs = [
  "farmer-brands",
  "market-access",
  "data-traceability",
  "hubs-logistics",
  "contract-farming",
  "inputs-technology",
  "training-demonstration",
  "field-events",
];