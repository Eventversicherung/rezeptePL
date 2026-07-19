import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RecipeCatalogCard } from "@/components/recipe/RecipeCatalogCard";
import {
  catalogForCluster,
  getClusterBySlug,
} from "@/lib/data/repository";
import { siteUrl } from "@/lib/utils";
import type { ClusterKind, Locale } from "@/types/content";

function clusterPath(kind: ClusterKind) {
  return kind === "region"
    ? "regionen"
    : kind === "occasion"
      ? "anlaesse"
      : "techniken";
}

export async function clusterMetadata(
  kind: ClusterKind,
  locale: Locale,
  slug: string,
): Promise<Metadata> {
  const cluster = await getClusterBySlug(kind, locale, slug);
  if (!cluster) return {};
  const base = siteUrl();
  const path = clusterPath(kind);
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
  const items = await catalogForCluster(cluster.id, locale);
  const tCommon = await getTranslations("common");
  const tClusters = await getTranslations("clusters");
  const tRecipes = await getTranslations("recipes");
  const kindLabel =
    kind === "region"
      ? tClusters("regions")
      : kind === "occasion"
        ? tClusters("occasions")
        : tClusters("techniques");
  return (
    <div className="space-y-8">
      <Breadcrumbs
        ariaLabel={tCommon("breadcrumbs")}
        items={[
          { label: tCommon("home"), href: "/" },
          { label: kindLabel },
          { label: cluster.title[locale] },
        ]}
      />
      <header className="max-w-2xl">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          {cluster.title[locale]}
        </h1>
        <p className="mt-3 text-muted">{cluster.description[locale]}</p>
      </header>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <RecipeCatalogCard
            key={item.kind === "family" ? item.family.id : item.recipe.id}
            item={item}
            locale={locale}
            variantsLabel={tRecipes("variantsCount")}
          />
        ))}
      </div>
    </div>
  );
}
