import type { ClusterKind } from "@/types/content";

/** URL segment(s) under /[locale]/ for a cluster kind. */
export function clusterBasePath(kind: ClusterKind): string {
  switch (kind) {
    case "region":
      return "regionen";
    case "occasion":
      return "anlaesse";
    case "technique":
      return "techniken";
    case "category":
      return "rezepte/kategorie";
  }
}
