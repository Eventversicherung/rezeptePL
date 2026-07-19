import type { Locale, Recipe } from "@/types/content";
import { siteUrl } from "@/lib/utils";

function absoluteMediaUrl(src: string) {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return `${siteUrl()}${src.startsWith("/") ? src : `/${src}`}`;
}

export function recipeJsonLd(
  recipe: Recipe,
  locale: Locale,
  url: string,
) {
  const t = recipe.translations[locale];
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: t.title,
    description: t.excerpt,
    image: [absoluteMediaUrl(recipe.coverImage)],
    url,
    prepTime: `PT${recipe.prepMinutes}M`,
    cookTime: `PT${recipe.cookMinutes}M`,
    totalTime: `PT${recipe.prepMinutes + recipe.cookMinutes}M`,
    recipeYield: `${recipe.servings}`,
    recipeIngredient: recipe.ingredients.map(
      (i) => `${i.amount} ${i.unit[locale]} ${i.name[locale]}`.trim(),
    ),
    recipeInstructions: t.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step.text,
    })),
    inLanguage: locale,
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
