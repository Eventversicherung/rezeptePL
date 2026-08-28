import type { BlogPost, Cluster, Locale, Recipe } from "@/types/content";
import { stripInlineMarkdown } from "@/lib/format/inline-markdown";
import { absoluteUrl, siteUrl } from "@/lib/utils";

function absoluteMediaUrl(src: string) {
  return absoluteUrl(src);
}

function organizationJsonLd() {
  const base = siteUrl();
  return {
    "@type": "Organization",
    name: "Alemniam",
    url: base,
    logo: absoluteMediaUrl("/icon.svg"),
  };
}

/** Stable HowToStep fragment — must match the recipe page anchors. */
export function recipeStepId(index: number) {
  return `step-${index + 1}`;
}

const COURSE_CATEGORY_PRIORITY = [
  "category-suppen",
  "category-suess",
  "category-eingelegt",
  "category-hauptgerichte",
] as const;

const KEYWORD_ONLY_CATEGORY_IDS = new Set([
  "category-schnell",
  "category-vegetarisch",
]);

const DEFAULT_CUISINE: Record<Locale, string> = {
  de: "Polnisch",
  pl: "Polska",
};

const DEFAULT_CATEGORY: Record<Locale, string> = {
  de: "Hauptgericht",
  pl: "Danie główne",
};

function clusterTitle(
  clusters: Cluster[],
  id: string,
  locale: Locale,
): string | undefined {
  const title = clusters.find((cluster) => cluster.id === id)?.title[locale];
  return title?.trim() || undefined;
}

function uniqueLabels(values: Array<string | undefined>) {
  const seen = new Set<string>();
  const labels: string[] = [];
  for (const value of values) {
    const label = value?.trim();
    if (!label) continue;
    const key = label.toLocaleLowerCase(undefined);
    if (seen.has(key)) continue;
    seen.add(key);
    labels.push(label);
  }
  return labels;
}

function recipeCategoryLabel(
  recipe: Recipe,
  locale: Locale,
  clusters: Cluster[],
): string {
  const courseIds = COURSE_CATEGORY_PRIORITY.filter((id) =>
    recipe.categoryIds.includes(id),
  );
  const fromPriority = uniqueLabels(
    courseIds.map((id) => clusterTitle(clusters, id, locale)),
  );
  if (fromPriority.length > 0) return fromPriority.join(", ");

  const fromOther = uniqueLabels(
    recipe.categoryIds
      .filter((id) => !KEYWORD_ONLY_CATEGORY_IDS.has(id))
      .map((id) => clusterTitle(clusters, id, locale)),
  );
  return fromOther[0] ?? DEFAULT_CATEGORY[locale];
}

function recipeCuisineLabel(locale: Locale): string {
  return DEFAULT_CUISINE[locale];
}

function recipeKeywordLabel(
  recipe: Recipe,
  locale: Locale,
  clusters: Cluster[],
  category: string,
  cuisine: string,
): string | undefined {
  const blocked = new Set(
    [category, cuisine]
      .flatMap((value) => value.split(","))
      .map((value) => value.trim().toLocaleLowerCase())
      .filter(Boolean),
  );

  const labels = uniqueLabels([
    recipe.variantLabel?.[locale],
    ...recipe.regionIds.map((id) => clusterTitle(clusters, id, locale)),
    ...recipe.occasionIds.map((id) => clusterTitle(clusters, id, locale)),
    ...recipe.techniqueIds.map((id) => clusterTitle(clusters, id, locale)),
    ...recipe.categoryIds
      .filter((id) => KEYWORD_ONLY_CATEGORY_IDS.has(id))
      .map((id) => clusterTitle(clusters, id, locale)),
    recipe.prepMinutes + recipe.cookMinutes <= 45 &&
    !recipe.categoryIds.includes("category-schnell")
      ? locale === "pl"
        ? "szybkie"
        : "schnell"
      : undefined,
  ]).filter((label) => !blocked.has(label.toLocaleLowerCase()));

  return labels.length > 0 ? labels.join(", ") : undefined;
}

function howToStepName(text: string) {
  const cleaned = stripInlineMarkdown(text).replace(/\s+/g, " ").trim();
  const clause = cleaned.split(/[,.;:!?]/)[0]?.trim() ?? cleaned;
  if (clause.length <= 72) return clause;
  return clause.split(" ").slice(0, 8).join(" ");
}

export function recipeJsonLd(
  recipe: Recipe,
  locale: Locale,
  url: string,
  clusters: Cluster[] = [],
) {
  const t = recipe.translations[locale];
  const recipeCategory = recipeCategoryLabel(recipe, locale, clusters);
  const recipeCuisine = recipeCuisineLabel(locale);
  const keywords = recipeKeywordLabel(
    recipe,
    locale,
    clusters,
    recipeCategory,
    recipeCuisine,
  );

  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: t.title,
    description: t.excerpt,
    image: [absoluteMediaUrl(recipe.coverImage)],
    url,
    author: organizationJsonLd(),
    datePublished: recipe.createdAt,
    dateModified: recipe.updatedAt,
    prepTime: `PT${recipe.prepMinutes}M`,
    cookTime: `PT${recipe.cookMinutes}M`,
    totalTime: `PT${recipe.prepMinutes + recipe.cookMinutes}M`,
    recipeYield: `${recipe.servings}`,
    recipeCategory,
    recipeCuisine,
    ...(keywords ? { keywords } : {}),
    recipeIngredient: recipe.ingredients.map(
      (i) => `${i.amount} ${i.unit[locale]} ${i.name[locale]}`.trim(),
    ),
    recipeInstructions: t.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: howToStepName(step.text),
      text: stripInlineMarkdown(step.text),
      url: `${url}#${recipeStepId(index)}`,
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

/** Parse real Q&A from ## FAQ / ## Częste pytania blocks (### question + answer). */
export function parseFaqFromMarkdown(body: string): { question: string; answer: string }[] {
  const lines = body.split(/\r?\n/);
  const faqStart = lines.findIndex((line) =>
    /^##\s+(FAQ\b|Częste pytania\b|Pytania\b)/i.test(line.trim()),
  );
  if (faqStart < 0) return [];

  const faqs: { question: string; answer: string }[] = [];
  let currentQ: string | null = null;
  let answerLines: string[] = [];

  const flush = () => {
    if (!currentQ) return;
    const answer = answerLines.join("\n").trim();
    if (answer.length > 20) {
      faqs.push({ question: currentQ, answer });
    }
    currentQ = null;
    answerLines = [];
  };

  for (let i = faqStart + 1; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (/^##\s+/.test(trimmed) && !/^###\s+/.test(trimmed)) {
      flush();
      break;
    }
    const h3 = trimmed.match(/^###\s+(.+)$/);
    if (h3) {
      flush();
      currentQ = h3[1].trim();
      continue;
    }
    if (currentQ) answerLines.push(line);
  }
  flush();
  return faqs;
}

export function blogPostingJsonLd(
  post: BlogPost,
  locale: Locale,
  url: string,
) {
  const t = post.translations[locale];
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: t.title,
    description: t.excerpt,
    image: [absoluteMediaUrl(post.coverImage)],
    url,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: locale,
    author: organizationJsonLd(),
    publisher: organizationJsonLd(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function websiteJsonLd(locale: Locale) {
  const base = siteUrl();
  const home = `${base}/${locale}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Alemniam",
    alternateName: ["Alemniam Kochbuch", "Alemniam przepisy"],
    url: home,
    inLanguage: locale,
    publisher: organizationJsonLd(),
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${base}/${locale}/rezepte?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqPageJsonLd(
  faqs: { question: string; answer: string }[],
) {
  if (faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
