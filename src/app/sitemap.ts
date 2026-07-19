import type { MetadataRoute } from "next";
import { listClusters, listPublishedRecipes } from "@/lib/data/repository";
import { siteUrl } from "@/lib/utils";
import type { Locale } from "@/types/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteUrl();
  const locales: Locale[] = ["de", "pl"];
  const recipes = await listPublishedRecipes();
  const clusters = await listClusters();

  const staticEntries = locales.flatMap((locale) => [
    {
      url: `${base}/${locale}`,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${base}/${locale}/rezepte`,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ]);

  const recipeEntries = locales.flatMap((locale) =>
    recipes.map((recipe) => ({
      url: `${base}/${locale}/rezepte/${recipe.translations[locale].slug}`,
      lastModified: recipe.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          de: `${base}/de/rezepte/${recipe.translations.de.slug}`,
          pl: `${base}/pl/rezepte/${recipe.translations.pl.slug}`,
        },
      },
    })),
  );

  const clusterEntries = locales.flatMap((locale) =>
    clusters.map((cluster) => {
      const path =
        cluster.kind === "region"
          ? "regionen"
          : cluster.kind === "occasion"
            ? "anlaesse"
            : "techniken";
      return {
        url: `${base}/${locale}/${path}/${cluster.slug[locale]}`,
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: {
            de: `${base}/de/${path}/${cluster.slug.de}`,
            pl: `${base}/pl/${path}/${cluster.slug.pl}`,
          },
        },
      };
    }),
  );

  return [...staticEntries, ...recipeEntries, ...clusterEntries];
}
