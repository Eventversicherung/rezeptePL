import { notFound } from "next/navigation";
import { listSitemapGroups } from "@/lib/seo/public-urls";
import {
  SITEMAP_KINDS,
  isSitemapKind,
  renderUrlset,
  sitemapXmlResponse,
} from "@/lib/seo/sitemap-xml";

export const revalidate = 3600;

export function generateStaticParams() {
  return SITEMAP_KINDS.map((kind) => ({ kind: `${kind}.xml` }));
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ kind: string }> },
) {
  const { kind: raw } = await context.params;
  const kind = raw.replace(/\.xml$/i, "");
  if (!isSitemapKind(kind)) notFound();

  const groups = await listSitemapGroups();
  return sitemapXmlResponse(renderUrlset(groups[kind]));
}
