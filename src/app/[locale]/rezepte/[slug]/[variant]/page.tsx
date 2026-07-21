import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { RecipeExperience } from "@/components/recipe/RecipeExperience";
import { getSessionUser } from "@/lib/auth/session";
import { resolveRecipeArticle } from "@/lib/data/recipe-articles";
import { getRelatedGuidesForRecipe } from "@/lib/data/recipe-guides";
import {
  getFamilyVariants,
  listFamilies,
  listSavedRecipeIds,
  resolveRecipeInFamily,
} from "@/lib/data/repository";
import { familyVariantPath } from "@/lib/data/recipe-paths";
import { breadcrumbJsonLd, recipeJsonLd } from "@/lib/seo/jsonld";
import { siteUrl } from "@/lib/utils";
import type { Locale, RecipeMode } from "@/types/content";
import { routing } from "@/i18n/routing";

export async function generateStaticParams() {
  const families = await listFamilies();
  const params: { locale: string; slug: string; variant: string }[] = [];
  for (const locale of routing.locales) {
    for (const family of families) {
      const variants = await getFamilyVariants(family.id);
      for (const recipe of variants) {
        params.push({
          locale,
          slug: family.translations[locale as Locale].slug,
          variant: recipe.translations[locale as Locale].slug,
        });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string; variant: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug, variant } = await params;
  const locale = localeParam as Locale;
  const hit = await resolveRecipeInFamily(locale, slug, variant);
  if (!hit || hit.needsRedirect) return {};
  const { family, recipe } = hit;
  const t = recipe.translations[locale];
  const other = locale === "de" ? "pl" : "de";
  const base = siteUrl();
  const pathDe = familyVariantPath(family, recipe, "de");
  const pathPl = familyVariantPath(family, recipe, "pl");
  const pathHere = locale === "de" ? pathDe : pathPl;
  return {
    title: t.seoTitle || t.title,
    description: t.seoDescription || t.excerpt,
    alternates: {
      canonical: `${base}/${locale}${pathHere}`,
      languages: {
        de: `${base}/de${pathDe}`,
        pl: `${base}/pl${pathPl}`,
        "x-default": `${base}/de${pathDe}`,
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

export default async function RecipeVariantPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; slug: string; variant: string }>;
  searchParams: Promise<{ mode?: string }>;
}) {
  const { locale: localeParam, slug, variant } = await params;
  const { mode: modeParam } = await searchParams;
  const locale = localeParam as Locale;
  setRequestLocale(locale);

  const hit = await resolveRecipeInFamily(locale, slug, variant);
  if (!hit) notFound();
  const { family, recipe } = hit;
  if (hit.needsRedirect) {
    permanentRedirect(`/${locale}${familyVariantPath(family, recipe, locale)}`);
  }
  const variants = await getFamilyVariants(family.id);

  const t = await getTranslations("recipes");
  const tNav = await getTranslations("nav");
  const tCommon = await getTranslations("common");
  const user = await getSessionUser();
  const savedIds = user ? await listSavedRecipeIds(user.id) : [];
  const initialMode: RecipeMode = modeParam === "shop" ? "shop" : "cook";
  const path = familyVariantPath(family, recipe, locale);
  const url = `${siteUrl()}/${locale}${path}`;
  const article = resolveRecipeArticle(
    recipe.id,
    locale,
    recipe.translations[locale].article,
  );
  const familyGuideIds = family.relatedPostIds ?? [];
  const { gearGuides, affiliateProducts } = await getRelatedGuidesForRecipe(
    recipe,
    familyGuideIds,
  );
  const recipeTitle = recipe.translations[locale].title;
  const familyTitle = family.translations[locale].title;
  const breadcrumbs = [
    { label: tCommon("home"), href: "/" as const },
    { label: tNav("recipes"), href: "/rezepte" as const },
    { label: familyTitle },
    { label: recipeTitle },
  ];

  const jsonLd = [
    recipeJsonLd(recipe, locale, url),
    breadcrumbJsonLd([
      { name: tCommon("home"), url: `${siteUrl()}/${locale}` },
      { name: tNav("recipes"), url: `${siteUrl()}/${locale}/rezepte` },
      { name: familyTitle, url: `${siteUrl()}/${locale}/rezepte/${family.translations[locale].slug}` },
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
          family={family}
          variants={variants}
          variantsLabel={t("variants")}
        />
      </Suspense>
    </>
  );
}
