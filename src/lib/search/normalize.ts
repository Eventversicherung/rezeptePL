/** Lowercase, strip diacritics, map Polish/German specials so "twaróg" ≈ "twarog". */
export function fold(input: string): string {
  return input
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/ł/g, "l")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .trim();
}

export function tokenize(query: string): string[] {
  return fold(query)
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length >= 2)
    .slice(0, 8);
}

export type MatchStrength = "exact" | "prefix" | "contains" | null;

/**
 * Prefer whole-word hits. Short tokens (2 chars) only match as full words
 * so "ei" does not light up every "eintopf".
 */
export function matchStrength(
  field: string,
  needles: readonly string[],
): MatchStrength {
  if (!field) return null;
  const folded = fold(field);
  const words = folded.split(/[^a-z0-9]+/).filter(Boolean);
  let best: MatchStrength = null;

  for (const needle of needles) {
    if (!needle) continue;
    if (words.includes(needle)) return "exact";
    if (needle.length < 3) continue;
    if (words.some((word) => word.startsWith(needle))) {
      best = best === "contains" ? "prefix" : best ?? "prefix";
    } else if (folded.includes(needle)) {
      best = best ?? "contains";
    }
  }

  return best;
}

export function scoreStrength(
  strength: MatchStrength,
  exact: number,
  prefix: number,
  contains: number,
): number {
  if (strength === "exact") return exact;
  if (strength === "prefix") return prefix;
  if (strength === "contains") return contains;
  return 0;
}
