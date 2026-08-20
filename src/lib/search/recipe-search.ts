import { familyPath, familyVariantPath, recipePath } from "@/lib/data/recipe-paths";
import type {
  Cluster,
  Locale,
  Recipe,
  RecipeCatalogItem,
  RecipeFamily,
} from "@/types/content";
import { matchStrength, scoreStrength, tokenize } from "./normalize";
import { expandToken } from "./synonyms";
import type { SearchHit, SearchMatchKind } from "./types";
import { SEARCH_RESULT_LIMIT } from "./types";

type TokenNeedles = string[];

type FieldHit = {
  score: number;
  kind: SearchMatchKind;
  value: string;
};

function bestField(
  fields: Array<{
    text: string;
    kind: SearchMatchKind;
    value?: string;
    exact: number;
    prefix: number;
    contains: number;
  }>,
  needles: TokenNeedles,
): FieldHit | null {
  let best: FieldHit | null = null;
  for (const field of fields) {
    const strength = matchStrength(field.text, needles);
    const score = scoreStrength(
      strength,
      field.exact,
      field.prefix,
      field.contains,
    );
    if (score <= 0) continue;
    if (!best || score > best.score) {
      best = {
        score,
        kind: field.kind,
        value: field.value ?? field.text,
      };
    }
  }
  return best;
}

function clusterFields(
  ids: string[],
  clusters: Map<string, Cluster>,
  kind: Extract<SearchMatchKind, "category" | "region" | "occasion" | "technique">,
): Array<{
  text: string;
  kind: SearchMatchKind;
  value: string;
  exact: number;
  prefix: number;
  contains: number;
}> {
  return ids.flatMap((id) => {
    const cluster = clusters.get(id);
    if (!cluster) return [];
    return [
      {
        text: `${cluster.title.de} ${cluster.title.pl} ${cluster.slug.de} ${cluster.slug.pl}`,
        kind,
        value: cluster.title.de,
        exact: 48,
        prefix: 36,
        contains: 24,
      },
    ];
  });
}

function scoreRecipe(
  recipe: Recipe,
  locale: Locale,
  tokens: TokenNeedles[],
  clusters: Map<string, Cluster>,
): { score: number; match: FieldHit } | null {
  const locales: Locale[] = ["de", "pl"];
  const titles = locales.map((l) => recipe.translations[l]?.title ?? "");
  const excerpts = locales.map((l) => recipe.translations[l]?.excerpt ?? "");
  const slugs = locales.map((l) => recipe.translations[l]?.slug ?? "");
  const variantLabels = locales.map((l) => recipe.variantLabel?.[l] ?? "");
  const ingredients = recipe.ingredients.flatMap((ing) => [
    {
      text: `${ing.name.de} ${ing.name.pl}`,
      kind: "ingredient" as const,
      value: ing.name[locale] || ing.name.de,
      exact: 82,
      prefix: 62,
      contains: 48,
    },
    ...(ing.substitute
      ? [
          {
            text: `${ing.substitute.de} ${ing.substitute.pl}`,
            kind: "ingredient" as const,
            value: ing.substitute[locale] || ing.substitute.de,
            exact: 58,
            prefix: 44,
            contains: 34,
          },
        ]
      : []),
    ...(ing.storeHintDe
      ? [
          {
            text: ing.storeHintDe,
            kind: "ingredient" as const,
            value: ing.name[locale] || ing.storeHintDe,
            exact: 52,
            prefix: 40,
            contains: 30,
          },
        ]
      : []),
  ]);

  const fields = [
    {
      text: titles.join(" "),
      kind: "title" as const,
      value: recipe.translations[locale].title,
      exact: 120,
      prefix: 92,
      contains: 72,
    },
    {
      text: variantLabels.join(" "),
      kind: "variant" as const,
      value: recipe.variantLabel?.[locale] || variantLabels.find(Boolean) || "",
      exact: 88,
      prefix: 68,
      contains: 50,
    },
    {
      text: slugs.join(" "),
      kind: "title" as const,
      value: recipe.translations[locale].title,
      exact: 64,
      prefix: 48,
      contains: 32,
    },
    ...ingredients,
    ...clusterFields(recipe.categoryIds ?? [], clusters, "category"),
    ...clusterFields(recipe.regionIds, clusters, "region"),
    ...clusterFields(recipe.occasionIds, clusters, "occasion"),
    ...clusterFields(recipe.techniqueIds, clusters, "technique"),
    {
      text: excerpts.join(" "),
      kind: "excerpt" as const,
      value: recipe.translations[locale].excerpt,
      exact: 36,
      prefix: 28,
      contains: 20,
    },
  ];

  let total = 0;
  let match: FieldHit | null = null;
  let missed = 0;

  for (const needles of tokens) {
    const hit = bestField(fields, needles);
    if (!hit) {
      missed += 1;
      continue;
    }
    total += hit.score;
    if (!match || hit.score > match.score) match = hit;
  }

  if (!match) return null;
  if (missed > 0) total = Math.round(total * 0.45);
  return { score: total, match };
}

function scoreFamilyShell(
  family: RecipeFamily,
  locale: Locale,
  tokens: TokenNeedles[],
  clusters: Map<string, Cluster>,
): { score: number; match: FieldHit } | null {
  const titles = `${family.translations.de.title} ${family.translations.pl.title}`;
  const excerpts = `${family.translations.de.excerpt} ${family.translations.pl.excerpt}`;
  const slugs = `${family.translations.de.slug} ${family.translations.pl.slug}`;
  const fields = [
    {
      text: titles,
      kind: "title" as const,
      value: family.translations[locale].title,
      exact: 132,
      prefix: 96,
      contains: 74,
    },
    {
      text: slugs,
      kind: "title" as const,
      value: family.translations[locale].title,
      exact: 62,
      prefix: 46,
      contains: 30,
    },
    ...clusterFields(family.categoryIds ?? [], clusters, "category"),
    ...clusterFields(family.regionIds, clusters, "region"),
    ...clusterFields(family.occasionIds, clusters, "occasion"),
    ...clusterFields(family.techniqueIds, clusters, "technique"),
    {
      text: excerpts,
      kind: "excerpt" as const,
      value: family.translations[locale].excerpt,
      exact: 34,
      prefix: 26,
      contains: 18,
    },
  ];

  let total = 0;
  let match: FieldHit | null = null;
  let missed = 0;
  for (const needles of tokens) {
    const hit = bestField(fields, needles);
    if (!hit) {
      missed += 1;
      continue;
    }
    total += hit.score;
    if (!match || hit.score > match.score) match = hit;
  }
  if (!match) return null;
  if (missed > 0) total = Math.round(total * 0.45);
  return { score: total, match };
}

function toNeedles(query: string): TokenNeedles[] | null {
  const tokens = tokenize(query);
  if (tokens.length === 0) return null;
  return tokens.map((token) => expandToken(token));
}

function clusterMap(clusters: readonly Cluster[]): Map<string, Cluster> {
  return new Map(clusters.map((cluster) => [cluster.id, cluster]));
}

export function searchRecipeHits(
  items: readonly RecipeCatalogItem[],
  clusters: readonly Cluster[],
  locale: Locale,
  query: string,
  limit = SEARCH_RESULT_LIMIT,
): SearchHit[] {
  const tokens = toNeedles(query);
  if (!tokens) return [];
  const byId = clusterMap(clusters);
  const ranked: Array<SearchHit & { score: number }> = [];

  for (const item of items) {
    if (item.kind === "recipe") {
      const scored = scoreRecipe(item.recipe, locale, tokens, byId);
      if (!scored) continue;
      ranked.push({
        id: item.recipe.id,
        kind: "recipe",
        href: recipePath(item.recipe, locale),
        title: item.recipe.translations[locale].title,
        image: item.recipe.coverImage,
        minutes: item.recipe.prepMinutes + item.recipe.cookMinutes,
        matchKind: scored.match.kind,
        matchValue: scored.match.value,
        score: scored.score,
      });
      continue;
    }

    const familyScore = scoreFamilyShell(item.family, locale, tokens, byId);
    let bestVariant: { recipe: Recipe; score: number; match: FieldHit } | null =
      null;
    for (const variant of item.variants) {
      const scored = scoreRecipe(variant, locale, tokens, byId);
      if (!scored) continue;
      if (!bestVariant || scored.score > bestVariant.score) {
        bestVariant = { recipe: variant, score: scored.score, match: scored.match };
      }
    }

    const familyWins =
      familyScore &&
      (!bestVariant || familyScore.score >= bestVariant.score + 8);
    if (familyWins && familyScore) {
      ranked.push({
        id: item.family.id,
        kind: "family",
        href: familyPath(item.family, locale),
        title: item.family.translations[locale].title,
        image: item.family.coverImage || item.defaultRecipe.coverImage,
        minutes:
          item.defaultRecipe.prepMinutes + item.defaultRecipe.cookMinutes,
        matchKind: familyScore.match.kind,
        matchValue: familyScore.match.value,
        score: familyScore.score,
      });
      continue;
    }

    if (bestVariant) {
      ranked.push({
        id: bestVariant.recipe.id,
        kind: "recipe",
        href: familyVariantPath(item.family, bestVariant.recipe, locale),
        title: bestVariant.recipe.translations[locale].title,
        image:
          bestVariant.recipe.variantImage ||
          bestVariant.recipe.coverImage ||
          item.family.coverImage,
        minutes:
          bestVariant.recipe.prepMinutes + bestVariant.recipe.cookMinutes,
        matchKind: bestVariant.match.kind,
        matchValue: bestVariant.match.value,
        score: bestVariant.score,
      });
    }
  }

  return ranked
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, locale))
    .slice(0, limit)
    .map(({ score, ...hit }) => {
      void score;
      return hit;
    });
}

export function filterCatalogByQuery(
  items: readonly RecipeCatalogItem[],
  clusters: readonly Cluster[],
  locale: Locale,
  query: string,
): RecipeCatalogItem[] {
  const tokens = toNeedles(query);
  if (!tokens) return [...items];
  const byId = clusterMap(clusters);
  const ranked: Array<{ item: RecipeCatalogItem; score: number }> = [];

  for (const item of items) {
    if (item.kind === "recipe") {
      const scored = scoreRecipe(item.recipe, locale, tokens, byId);
      if (scored) ranked.push({ item, score: scored.score });
      continue;
    }
    const familyScore = scoreFamilyShell(item.family, locale, tokens, byId);
    let best = familyScore?.score ?? 0;
    for (const variant of item.variants) {
      const scored = scoreRecipe(variant, locale, tokens, byId);
      if (scored && scored.score > best) best = scored.score;
    }
    if (best > 0) ranked.push({ item, score: best });
  }

  return ranked
    .sort((a, b) => b.score - a.score)
    .map((row) => row.item);
}

export function recipeMatchesQuery(
  recipe: Recipe,
  locale: Locale,
  clusters: readonly Cluster[],
  query: string,
): boolean {
  const tokens = toNeedles(query);
  if (!tokens) return true;
  return scoreRecipe(recipe, locale, tokens, clusterMap(clusters)) !== null;
}
