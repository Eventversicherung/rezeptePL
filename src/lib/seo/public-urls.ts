import type { MetadataRoute } from "next";
import {
  catalogForCluster,
  getFamilyById,
  getFamilyVariants,
  listClusters,
  listFamilies,
  listPublishedBlogPosts,
  listPublishedRecipes,
} from "@/lib/data/repository";
import { clusterBasePath } from "@/lib/data/cluster-paths";
import { familyVariantPath } from "@/lib/data/recipe-paths";
import { localeLanguages } from "@/lib/seo/alternates";
import { isClusterIndexable } from "@/lib/seo/cluster-indexable";
import type { SitemapKind } from "@/lib/seo/sitemap-xml";
import { absoluteUrl, siteUrl } from "@/lib/utils";
import type { Locale, Recipe } from "@/types/content";

const LOCALES: Locale[] = ["de", "pl"];

function newestIso(dates: Array<string | undefined>) {
  return dates.filter((value): value is string => Boolean(value)).sort().at(-1);
}

function entry(
  url: string,
  options: {
    lastModified?: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
    de: string;
    pl: string;
    images?: string[];
  },
): MetadataRoute.Sitemap[number] {
  return {
    url,
    lastModified: options.lastModified,
    changeFrequency: options.changeFrequency,
    priority: options.priority,
    alternates: {
      languages: localeLanguages(options.de, options.pl),
    },
    ...(options.images?.length ? { images: options.images } : {}),
  };
}

export type SitemapGroups = Record<SitemapKind, MetadataRoute.Sitemap>;

/** Same entries as the public sitemaps — single source for IndexNow. */
export async function listSitemapGroups(): Promise<SitemapGroups> {
  const base = siteUrl();
  const recipes = await listPublishedRecipes();
  const families = await listFamilies();
  const clusters = await listClusters();
  const posts = await listPublishedBlogPosts();
  const catalogFreshness = newestIso([
    ...recipes.map((recipe) => recipe.updatedAt),
    ...posts.map((post) => post.updatedAt),
  ]);

  const staticEntries = LOCALES.flatMap((locale) => {
    const homeDe = `${base}/de`;
    const homePl = `${base}/pl`;
    const recipesDe = `${base}/de/rezepte`;
    const recipesPl = `${base}/pl/rezepte`;
    const blogDe = `${base}/de/blog`;
    const blogPl = `${base}/pl/blog`;
    const marktDe = `${base}/de/markt-finden`;
    const marktPl = `${base}/pl/markt-finden`;
    return [
      entry(`${base}/${locale}`, {
        lastModified: catalogFreshness,
        changeFrequency: "weekly",
        priority: 1,
        de: homeDe,
        pl: homePl,
      }),
      entry(`${base}/${locale}/rezepte`, {
        lastModified: catalogFreshness,
        changeFrequency: "daily",
        priority: 0.9,
        de: recipesDe,
        pl: recipesPl,
      }),
      entry(`${base}/${locale}/blog`, {
        lastModified: newestIso(posts.map((post) => post.updatedAt)),
        changeFrequency: "weekly",
        priority: 0.85,
        de: blogDe,
        pl: blogPl,
      }),
      entry(`${base}/${locale}/markt-finden`, {
        changeFrequency: "weekly",
        priority: 0.8,
        de: marktDe,
        pl: marktPl,
      }),
    ];
  });

  const standalone = recipes.filter((r) => !r.familyId);
  const recipeEntries = LOCALES.flatMap((locale) =>
    standalone
      .filter((recipe) => recipe.translations[locale]?.slug)
      .map((recipe) => {
        const de = `${base}/de/rezepte/${recipe.translations.de.slug}`;
        const pl = `${base}/pl/rezepte/${recipe.translations.pl.slug}`;
        return entry(`${base}/${locale}/rezepte/${recipe.translations[locale].slug}`, {
          lastModified: recipe.updatedAt,
          changeFrequency: "weekly",
          priority: 0.8,
          de,
          pl,
          images: recipe.coverImage ? [absoluteUrl(recipe.coverImage)] : undefined,
        });
      }),
  );

  const variantEntries: MetadataRoute.Sitemap = [];
  for (const family of families) {
    const variants = await getFamilyVariants(family.id);
    for (const recipe of variants) {
      for (const locale of LOCALES) {
        if (!family.translations[locale]?.slug) continue;
        if (!recipe.translations[locale]?.slug) continue;
        const path = familyVariantPath(family, recipe, locale);
        variantEntries.push(
          entry(`${base}/${locale}${path}`, {
            lastModified: recipe.updatedAt,
            changeFrequency: "weekly",
            priority: 0.85,
            de: `${base}/de${familyVariantPath(family, recipe, "de")}`,
            pl: `${base}/pl${familyVariantPath(family, recipe, "pl")}`,
            images: recipe.coverImage
              ? [absoluteUrl(recipe.coverImage)]
              : undefined,
          }),
        );
      }
    }
  }

  const blogEntries = LOCALES.flatMap((locale) =>
    posts
      .filter((post) => post.translations[locale]?.slug)
      .map((post) => {
        const de = `${base}/de/blog/${post.translations.de.slug}`;
        const pl = `${base}/pl/blog/${post.translations.pl.slug}`;
        return entry(`${base}/${locale}/blog/${post.translations[locale].slug}`, {
          lastModified: post.updatedAt,
          changeFrequency: "weekly",
          priority: 0.75,
          de,
          pl,
          images: post.coverImage ? [absoluteUrl(post.coverImage)] : undefined,
        });
      }),
  );

  const clusterEntries: MetadataRoute.Sitemap = [];
  for (const locale of LOCALES) {
    for (const cluster of clusters) {
      const items = await catalogForCluster(cluster.id, locale);
      if (!isClusterIndexable(cluster, locale, items.length)) continue;
      const path = clusterBasePath(cluster.kind);
      clusterEntries.push(
        entry(`${base}/${locale}/${path}/${cluster.slug[locale]}`, {
          changeFrequency: "monthly",
          priority: cluster.kind === "category" ? 0.75 : 0.7,
          de: `${base}/de/${path}/${cluster.slug.de}`,
          pl: `${base}/pl/${path}/${cluster.slug.pl}`,
          images: cluster.coverImage
            ? [absoluteUrl(cluster.coverImage)]
            : undefined,
        }),
      );
    }
  }

  return {
    pages: staticEntries,
    recipes: [...recipeEntries, ...variantEntries],
    blog: blogEntries,
    clusters: clusterEntries,
  };
}

export async function listSitemapEntries(): Promise<MetadataRoute.Sitemap> {
  const groups = await listSitemapGroups();
  return [...groups.pages, ...groups.recipes, ...groups.blog, ...groups.clusters];
}

export async function listPublicPageUrls(): Promise<string[]> {
  const entries = await listSitemapEntries();
  return [...new Set(entries.map((entry) => entry.url))];
}

export async function publicUrlsForRecipe(recipe: Recipe): Promise<string[]> {
  if (recipe.status !== "published") return [];
  const base = siteUrl();
  const urls: string[] = [];

  if (recipe.familyId) {
    const family = await getFamilyById(recipe.familyId);
    if (!family) return [];
    for (const locale of LOCALES) {
      if (!family.translations[locale]?.slug) continue;
      if (!recipe.translations[locale]?.slug) continue;
      urls.push(`${base}/${locale}${familyVariantPath(family, recipe, locale)}`);
    }
    return urls;
  }

  for (const locale of LOCALES) {
    const slug = recipe.translations[locale]?.slug;
    if (!slug) continue;
    urls.push(`${base}/${locale}/rezepte/${slug}`);
  }
  return urls;
}
