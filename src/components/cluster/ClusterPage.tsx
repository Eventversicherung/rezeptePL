import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { RecipeCard } from "@/components/recipe/RecipeCard";
import {
  getClusterBySlug,
  recipesForCluster,
} from "@/lib/data/repository";
import { siteUrl } from "@/lib/utils";
import type { ClusterKind, Locale } from "@/types/content";

export async function clusterMetadata(
  kind: ClusterKind,
  locale: Locale,
  slug: string,
): Promise<Metadata> {
  const cluster = await getClusterBySlug(kind, locale, slug);
  if (!cluster) return {};
  const base = siteUrl();
  const path =
    kind === "region"
      ? "regionen"
      : kind === "occasion"
        ? "anlaesse"
        : "techniken";
  return {
    title: cluster.seoTitle[locale],
    description: cluster.seoDescription[locale],
    alternates: {
      canonical: `${base}/${locale}/${path}/${cluster.slug[locale]}`,
      languages: {
        de: `${base}/de/${path}/${cluster.slug.de}`,
        pl: `${base}/pl/${path}/${cluster.slug.pl}`,
      },
    },
  };
}

export async function ClusterView({
  kind,
  locale,
  slug,
}: {
  kind: ClusterKind;
  locale: Locale;
  slug: string;
}) {
  setRequestLocale(locale);
  const cluster = await getClusterBySlug(kind, locale, slug);
  if (!cluster) notFound();
  const recipes = await recipesForCluster(cluster.id);

  return (
    <div className="space-y-8">
      <header className="max-w-2xl">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          {cluster.title[locale]}
        </h1>
        <p className="mt-3 text-muted">{cluster.description[locale]}</p>
      </header>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} locale={locale} />
        ))}
      </div>
    </div>
  );
}
