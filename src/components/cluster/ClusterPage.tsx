import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SetLocaleAlternates } from "@/components/i18n/LocaleAlternates";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RecipeCatalogCard } from "@/components/recipe/RecipeCatalogCard";
import { clusterBasePath } from "@/lib/data/cluster-paths";
import {
  catalogForCluster,
  resolveClusterBySlug,
} from "@/lib/data/repository";
import { isClusterIndexable } from "@/lib/seo/cluster-indexable";
import { siteUrl } from "@/lib/utils";
import type { ClusterKind, Locale } from "@/types/content";

export { isClusterIndexable } from "@/lib/seo/cluster-indexable";

export async function clusterMetadata(
  kind: ClusterKind,
  locale: Locale,
  slug: string,
): Promise<Metadata> {
  const resolved = await resolveClusterBySlug(kind, locale, slug);
  if (!resolved || resolved.needsRedirect) return {};
  const { cluster } = resolved;
  const base = siteUrl();
  const path = clusterBasePath(kind);
  const items = await catalogForCluster(cluster.id, locale);
  const indexable = isClusterIndexable(cluster, locale, items.length);
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
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: true },
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
  const resolved = await resolveClusterBySlug(kind, locale, slug);
  if (!resolved) notFound();
  const { cluster } = resolved;
  const path = clusterBasePath(kind);
  if (resolved.needsRedirect) {
    permanentRedirect(`/${locale}/${path}/${cluster.slug[locale]}`);
  }
  const items = await catalogForCluster(cluster.id, locale);
  const tCommon = await getTranslations("common");
  const tClusters = await getTranslations("clusters");
  const tRecipes = await getTranslations("recipes");
  const kindLabel =
    kind === "region"
      ? tClusters("regions")
      : kind === "occasion"
        ? tClusters("occasions")
        : kind === "technique"
          ? tClusters("techniques")
          : tClusters("categories");
  const crumbs =
    kind === "category"
      ? [
          { label: tCommon("home"), href: "/" as const },
          { label: tRecipes("title"), href: "/rezepte" as const },
          { label: cluster.title[locale] },
        ]
      : [
          { label: tCommon("home"), href: "/" as const },
          { label: kindLabel },
          { label: cluster.title[locale] },
        ];
  return (
    <div className="space-y-8">
      <SetLocaleAlternates
        de={`/${path}/${cluster.slug.de}`}
        pl={`/${path}/${cluster.slug.pl}`}
      />
      <Breadcrumbs ariaLabel={tCommon("breadcrumbs")} items={crumbs} />
      <header className="max-w-2xl">
        <p className="section-kicker">{kindLabel}</p>
        <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          {cluster.title[locale]}
        </h1>
        <p className="mt-3 whitespace-pre-line text-muted">
          {cluster.description[locale]}
        </p>
      </header>
      {items.length === 0 ? (
        <p className="text-lg text-muted">{tRecipes("empty")}</p>
      ) : (
        <div className="stagger grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <RecipeCatalogCard
              key={item.kind === "family" ? item.family.id : item.recipe.id}
              item={item}
              locale={locale}
              variantsLabel={tRecipes("variantsCount")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
