import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { RecipeExperience } from "@/components/recipe/RecipeExperience";
import { getSessionUser } from "@/lib/auth/session";
import { getAffiliateForRecipe } from "@/lib/data/affiliate-products";
import { getRecipeArticle } from "@/lib/data/recipe-articles";
import {
  getRecipeBySlug,
  listPublishedRecipes,
  listSavedRecipeIds,
} from "@/lib/data/repository";
import { breadcrumbJsonLd, recipeJsonLd } from "@/lib/seo/jsonld";
import { siteUrl } from "@/lib/utils";
import type { Locale, RecipeMode } from "@/types/content";
import { routing } from "@/i18n/routing";

export async function generateStaticParams() {
  const recipes = await listPublishedRecipes();
  return routing.locales.flatMap((locale) =>
    recipes.map((recipe) => ({
      locale,
      slug: recipe.translations[locale as Locale].slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = localeParam as Locale;
  const recipe = await getRecipeBySlug(locale, slug);
  if (!recipe) return {};
  const t = recipe.translations[locale];
  const other = locale === "de" ? "pl" : "de";
  const base = siteUrl();
  return {
    title: t.seoTitle || t.title,
    description: t.seoDescription || t.excerpt,
    alternates: {
      canonical: `${base}/${locale}/rezepte/${t.slug}`,
      languages: {
        de: `${base}/de/rezepte/${recipe.translations.de.slug}`,
        pl: `${base}/pl/rezepte/${recipe.translations.pl.slug}`,
        "x-default": `${base}/de/rezepte/${recipe.translations.de.slug}`,
      },
    },
    openGraph: {
      title: t.title,
      description: t.excerpt,
      images: [
        recipe.coverImage.startsWith("http")
          ? recipe.coverImage
          : `${base}${recipe.coverImage}`,
      ],
      locale,
      alternateLocale: [other],
    },
  };
}

export default async function RecipePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<{ mode?: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const { mode: modeParam } = await searchParams;
  const locale = localeParam as Locale;
  setRequestLocale(locale);

  const recipe = await getRecipeBySlug(locale, slug);
  if (!recipe) notFound();

  const t = await getTranslations("recipes");
  const user = await getSessionUser();
  const savedIds = user ? await listSavedRecipeIds(user.id) : [];
  const initialMode: RecipeMode = modeParam === "shop" ? "shop" : "cook";
  const url = `${siteUrl()}/${locale}/rezepte/${recipe.translations[locale].slug}`;
  const article =
    recipe.translations[locale].article ||
    getRecipeArticle(recipe.id, locale);
  const affiliateProducts = getAffiliateForRecipe(recipe.id, 3);

  const jsonLd = [
    recipeJsonLd(recipe, locale, url),
    breadcrumbJsonLd([
      { name: "Alemniam", url: `${siteUrl()}/${locale}` },
      {
        name: recipe.translations[locale].title,
        url,
      },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={null}>
        <RecipeExperience
          recipe={recipe}
          locale={locale}
          initialMode={initialMode}
          isSaved={savedIds.includes(recipe.id)}
          isLoggedIn={Boolean(user)}
          article={article}
          articleHeading={t("articleHeading")}
          affiliateProducts={affiliateProducts}
        />
      </Suspense>
    </>
  );
}
