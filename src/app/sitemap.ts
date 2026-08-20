import type { MetadataRoute } from "next";
import { listSitemapEntries } from "@/lib/seo/public-urls";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return listSitemapEntries();
}
