import type { Metadata } from "next";
import { notFound, permanentRedirect, redirect } from "next/navigation";
import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { RecipeExperience } from "@/components/recipe/RecipeExperience";
import { getSessionUser } from "@/lib/auth/session";
import { getRecipeArticle } from "@/lib/data/recipe-articles";
import { getRelatedGuidesForRecipe } from "@/lib/data/recipe-guides";
import {
  getFamilyBySlug,
  getFamilyVariants,
  getRecipeBySlug,
  listFamilies,
  listPublishedRecipes,
  listSavedRecipeIds,
} from "@/lib/data/repository";
import { familyVariantPath, recipePath } from "@/lib/data/recipe-paths";
import { breadcrumbJsonLd, recipeJsonLd } from "@/lib/seo/jsonld";
import { siteUrl } from "@/lib/utils";
import type { Locale, RecipeMode } from "@/types/content";
import { routing } from "@/i18n/routing";

/** Legacy flat slugs that now live under a family. */
const LEGACY_VARIANT_REDIRECTS: Record<string, { familyId: string; recipeId: string }> = {
  "pierogi-ruskie": { familyId: "family-pierogi", recipeId: "recipe-pierogi" },
};

export async function generateStaticParams() {
  const recipes = await listPublishedRecipes();
  const families = await listFamilies();
  const standalone = recipes.filter((r) => !r.familyId);
  return routing.locales.flatMap((locale) => [
    ...standalone.map((recipe) => ({
      locale,
      slug: recipe.translations[locale as Locale].slug,
    })),
    ...families.map((family) => ({
      locale,
      slug: family.translations[locale as Locale].slug,
    })),
    ...Object.keys(LEGACY_VARIANT_REDIRECTS).map((slug) => ({
      locale,
      slug,
    })),
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = localeParam as Locale;
  const family = await getFamilyBySlug(locale, slug);
  if (family) {
    const t = family.translations[locale];
    const base = siteUrl();
    return {
      title: t.seoTitle || t.title,
      description: t.seoDescription || t.excerpt,
      alternates: {
        canonical: `${base}/${locale}/rezepte/${t.slug}`,
        languages: {
          de: `${base}/de/rezepte/${family.translations.de.slug}`,
          pl: `${base}/pl/rezepte/${family.translations.pl.slug}`,
          "x-default": `${base}/de/rezepte/${family.translations.de.slug}`,
        },
      },
    };
  }
  const recipe = await getRecipeBySlug(locale, slug);
  if (!recipe || recipe.familyId) return {};
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

  const legacy = LEGACY_VARIANT_REDIRECTS[slug];
  if (legacy) {
    const families = await listFamilies();
    const family = families.find((f) => f.id === legacy.familyId);
    const variants = family ? await getFamilyVariants(family.id) : [];
    const recipe = variants.find((r) => r.id === legacy.recipeId);
    if (family && recipe) {
      permanentRedirect(
        `/${locale}${familyVariantPath(family, recipe, locale)}`,
      );
    }
  }

  const family = await getFamilyBySlug(locale, slug);
  if (family) {
    const variants = await getFamilyVariants(family.id);
    const defaultRecipe =
      variants.find((r) => r.id === family.defaultVariantId) ?? variants[0];
    if (!defaultRecipe) notFound();
    redirect(`/${locale}${familyVariantPath(family, defaultRecipe, locale)}`);
  }

  const recipe = await getRecipeBySlug(locale, slug);
  if (!recipe || recipe.familyId) notFound();

  const t = await getTranslations("recipes");
  const tNav = await getTranslations("nav");
  const tCommon = await getTranslations("common");
  const user = await getSessionUser();
  const savedIds = user ? await listSavedRecipeIds(user.id) : [];
  const initialMode: RecipeMode = modeParam === "shop" ? "shop" : "cook";
  const path = recipePath(recipe, locale);
  const url = `${siteUrl()}/${locale}${path}`;
  const article =
    recipe.translations[locale].article ||
    getRecipeArticle(recipe.id, locale);
  const { gearGuides, affiliateProducts } = await getRelatedGuidesForRecipe(
    recipe,
  );
  const recipeTitle = recipe.translations[locale].title;
  const breadcrumbs = [
    { label: tCommon("home"), href: "/" },
    { label: tNav("recipes"), href: "/rezepte" },
    { label: recipeTitle },
  ];

  const jsonLd = [
    recipeJsonLd(recipe, locale, url),
    breadcrumbJsonLd([
      { name: tCommon("home"), url: `${siteUrl()}/${locale}` },
      { name: tNav("recipes"), url: `${siteUrl()}/${locale}/rezepte` },
      { name: recipeTitle, url },
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
          gearGuides={gearGuides}
          breadcrumbs={breadcrumbs}
          breadcrumbsLabel={tCommon("breadcrumbs")}
        />
      </Suspense>
    </>
  );
}
