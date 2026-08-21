import { listSitemapGroups } from "@/lib/seo/public-urls";
import {
  SITEMAP_KINDS,
  newestGroupDate,
  renderSitemapIndex,
  sitemapXmlResponse,
} from "@/lib/seo/sitemap-xml";

export const revalidate = 3600;

export async function GET() {
  const groups = await listSitemapGroups();
  const xml = renderSitemapIndex(
    SITEMAP_KINDS.map((kind) => ({
      kind,
      lastModified: newestGroupDate(groups[kind]),
    })),
  );
  return sitemapXmlResponse(xml);
}
