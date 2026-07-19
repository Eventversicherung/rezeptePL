import type { MetadataRoute } from "next";
import {
  getFamilyVariants,
  listClusters,
  listFamilies,
  listPublishedBlogPosts,
  listPublishedRecipes,
} from "@/lib/data/repository";
import { familyVariantPath } from "@/lib/data/recipe-paths";
import { siteUrl } from "@/lib/utils";
import type { Locale } from "@/types/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteUrl();
  const locales: Locale[] = ["de", "pl"];
  const recipes = await listPublishedRecipes();
  const families = await listFamilies();
  const clusters = await listClusters();
  const posts = await listPublishedBlogPosts();

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
    {
      url: `${base}/${locale}/blog`,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
  ]);

  const standalone = recipes.filter((r) => !r.familyId);
  const recipeEntries = locales.flatMap((locale) =>
    standalone.map((recipe) => ({
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

  const variantEntries: MetadataRoute.Sitemap = [];
  for (const family of families) {
    const variants = await getFamilyVariants(family.id);
    for (const recipe of variants) {
      for (const locale of locales) {
        const path = familyVariantPath(family, recipe, locale);
        variantEntries.push({
          url: `${base}/${locale}${path}`,
          lastModified: recipe.updatedAt,
          changeFrequency: "weekly",
          priority: 0.85,
          alternates: {
            languages: {
              de: `${base}/de${familyVariantPath(family, recipe, "de")}`,
              pl: `${base}/pl${familyVariantPath(family, recipe, "pl")}`,
            },
          },
        });
      }
    }
  }

  const blogEntries = locales.flatMap((locale) =>
    posts.map((post) => ({
      url: `${base}/${locale}/blog/${post.translations[locale].slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.75,
      alternates: {
        languages: {
          de: `${base}/de/blog/${post.translations.de.slug}`,
          pl: `${base}/pl/blog/${post.translations.pl.slug}`,
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

  return [
    ...staticEntries,
    ...recipeEntries,
    ...variantEntries,
    ...blogEntries,
    ...clusterEntries,
  ];
}
