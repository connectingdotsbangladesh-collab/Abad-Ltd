import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { validServiceSlugs } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.productionUrl || "http://localhost:3000";
  const locales = ["bn", "en"];
  const publicPaths = [
    "",
    "/about",
    "/ecosystem",
    "/services",
    "/farmers",
    "/buyers",
    "/partners",
    "/network",
    "/marketplace",
    "/insights",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of publicPaths) {
      routes.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1.0 : 0.8,
      });
    }

    for (const slug of validServiceSlugs) {
      routes.push({
        url: `${baseUrl}/${locale}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return routes;
}