import { wordCount } from "@/lib/data/recipe-articles";
import type { Cluster, Locale } from "@/types/content";

/**
 * Region hubs stay noindex until intro ≥400 words OR curated recipes + real intro (≥80).
 * Occasion / technique / category hubs remain indexable.
 */
export function isClusterIndexable(
  cluster: Cluster,
  locale: Locale,
  catalogCount: number,
): boolean {
  if (cluster.kind !== "region") return true;
  const introWords = wordCount(cluster.description[locale] ?? "");
  if (introWords >= 400) return true;
  if (catalogCount > 0 && introWords >= 80) return true;
  return false;
}
