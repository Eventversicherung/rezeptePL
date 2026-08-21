import type { MetadataRoute } from "next";
import { listSitemapEntries } from "@/lib/seo/public-urls";

/**
 * Hourly ISR — published recipes/posts appear without a full redeploy.
 * Admin publish also calls revalidatePath("/sitemap.xml").
 */
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return listSitemapEntries();
}
