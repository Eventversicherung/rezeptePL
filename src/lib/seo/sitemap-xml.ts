import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/utils";

export function newestGroupDate(entries: MetadataRoute.Sitemap) {
  return entries
    .map((entry) => sitemapDate(entry.lastModified))
    .filter((value): value is string => Boolean(value))
    .sort()
    .at(-1);
}

export const SITEMAP_KINDS = ["pages", "recipes", "blog", "clusters"] as const;
export type SitemapKind = (typeof SITEMAP_KINDS)[number];

export const SITEMAP_PATHS = [
  "/sitemap.xml",
  ...SITEMAP_KINDS.map((kind) => `/sitemaps/${kind}.xml`),
];

const STYLESHEET = '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>';

export function isSitemapKind(value: string): value is SitemapKind {
  return (SITEMAP_KINDS as readonly string[]).includes(value);
}

export function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

/** W3C sitemap dates: YYYY-MM-DD. Microseconds make browsers/validators choke. */
export function sitemapDate(value?: string | Date) {
  if (!value) return undefined;
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toISOString().slice(0, 10);
}

export function sitemapXmlResponse(xml: string) {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

export function renderSitemapIndex(
  kinds: Array<{ kind: SitemapKind; lastModified?: string }>,
) {
  const base = siteUrl();
  const today = sitemapDate(new Date()) ?? new Date().toISOString().slice(0, 10);
  const items = kinds
    .map(({ kind, lastModified }) => {
      const loc = escapeXml(`${base}/sitemaps/${kind}.xml`);
      const stamp = sitemapDate(lastModified) ?? today;
      return `  <sitemap>
    <loc>${loc}</loc>
    <lastmod>${stamp}</lastmod>
  </sitemap>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
${STYLESHEET}
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>
`;
}

export function renderUrlset(entries: MetadataRoute.Sitemap) {
  const urls = entries.map(renderUrlEntry).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
${STYLESHEET}
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}

function renderUrlEntry(entry: MetadataRoute.Sitemap[number]) {
  const loc = escapeXml(entry.url);
  const lastmod = sitemapDate(entry.lastModified);
  const languages = entry.alternates?.languages ?? {};
  const images = entry.images ?? [];

  const links = Object.entries(languages)
    .filter((item): item is [string, string] => Boolean(item[1]))
    .map(
      ([lang, href]) =>
        `    <xhtml:link rel="alternate" hreflang="${escapeXml(lang)}" href="${escapeXml(href)}" />`,
    )
    .join("\n");

  const imageBlocks = images
    .map(
      (src) => `    <image:image>
      <image:loc>${escapeXml(src)}</image:loc>
    </image:image>`,
    )
    .join("\n");

  const parts = [
    `  <url>`,
    `    <loc>${loc}</loc>`,
    links || null,
    imageBlocks || null,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    entry.changeFrequency
      ? `    <changefreq>${entry.changeFrequency}</changefreq>`
      : null,
    typeof entry.priority === "number"
      ? `    <priority>${entry.priority}</priority>`
      : null,
    `  </url>`,
  ].filter(Boolean);

  return parts.join("\n");
}
