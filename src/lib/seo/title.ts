/** Layout template already appends "| Alemniam". Seed/CMS titles often include it too. */
const SITE_NAME_SUFFIX = /\s*[|–—-]\s*Alemniam\s*$/i;

export function stripSiteName(title: string): string {
  return title.replace(SITE_NAME_SUFFIX, "").trim();
}

/** Title for the document template (`%s | Alemniam`), never with a doubled brand. */
export function pageTitle(seoTitle: string | undefined, fallback: string): string {
  const raw = (seoTitle ?? "").trim() || fallback;
  return stripSiteName(raw) || fallback;
}
