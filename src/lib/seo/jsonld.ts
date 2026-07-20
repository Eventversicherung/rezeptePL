import type { BlogPost, Locale, Recipe } from "@/types/content";
import { siteUrl } from "@/lib/utils";

function absoluteMediaUrl(src: string) {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return `${siteUrl()}${src.startsWith("/") ? src : `/${src}`}`;
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
    author: organizationJsonLd(),
    datePublished: recipe.createdAt,
    dateModified: recipe.updatedAt,
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
