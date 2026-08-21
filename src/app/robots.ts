import type { MetadataRoute } from "next";
import { CANONICAL_SITE_URL, siteUrl } from "@/lib/utils";

const PRIVATE_PATHS = [
  "/api/",
  "/*/admin",
  "/*/admin/",
  "/*/anmelden",
  "/*/registrieren",
  "/*/profil",
  "/*/profil/",
  "/*/einstellungen",
  "/*/plan",
  "/*/listen",
  "/*/community/hochladen",
];

function isPublicCrawlTarget() {
  if (process.env.VERCEL_ENV === "preview") return false;
  if (process.env.NODE_ENV !== "production") return false;
  return true;
}

export default function robots(): MetadataRoute.Robots {
  const base = isPublicCrawlTarget() ? siteUrl() : CANONICAL_SITE_URL;

  if (!isPublicCrawlTarget()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: PRIVATE_PATHS,
    },
    sitemap: `${base}/sitemap.xml`,
    host: new URL(base).host,
  };
}
