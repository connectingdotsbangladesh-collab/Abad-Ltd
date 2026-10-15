import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.productionUrl || "http://localhost:3000";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/bn/", "/en/"],
        disallow: ["/admin", "/admin/", "/api/", "/_next/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}