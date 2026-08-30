import type { Metadata } from "next";
import type { Locale, Recipe, RecipeFamily } from "@/types/content";
import { familyVariantPath, recipePath } from "@/lib/data/recipe-paths";
import { localeLanguages } from "@/lib/seo/alternates";
import { pageTitle } from "@/lib/seo/title";
import { siteUrl } from "@/lib/utils";

export function recipeSeoDescription(recipe: Recipe, locale: Locale): string {
  const t = recipe.translations[locale];
  return (t.seoDescription || t.excerpt).trim();
}

function absoluteImage(src: string, base: string) {
  return src.startsWith("http") ? src : `${base}${src}`;
}

export function recipeDocumentMetadata(
  recipe: Recipe,
  locale: Locale,
  paths: { canonical: string; de: string; pl: string },
): Metadata {
  const t = recipe.translations[locale];
  const title = pageTitle(t.seoTitle, t.title);
  const description = recipeSeoDescription(recipe, locale);
  const base = siteUrl();
  const other = locale === "de" ? "pl" : "de";
  const image = absoluteImage(recipe.coverImage, base);

  return {
    title,
    description,
    alternates: {
      canonical: `${base}/${locale}${paths.canonical}`,
      languages: localeLanguages(`${base}/de${paths.de}`, `${base}/pl${paths.pl}`),
    },
    openGraph: {
      title,
      description,
      images: [image],
      locale,
      alternateLocale: [other],
    },
  };
}

export function standaloneRecipePaths(recipe: Recipe, locale: Locale) {
  return {
    canonical: recipePath(recipe, locale),
    de: recipePath(recipe, "de"),
    pl: recipePath(recipe, "pl"),
  };
}

export function familyRecipePaths(
  family: RecipeFamily,
  recipe: Recipe,
  locale: Locale,
) {
  return {
    canonical: familyVariantPath(family, recipe, locale),
    de: familyVariantPath(family, recipe, "de"),
    pl: familyVariantPath(family, recipe, "pl"),
  };
}
