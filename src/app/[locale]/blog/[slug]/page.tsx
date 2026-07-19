import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { getAffiliateForPost } from "@/lib/data/affiliate-products";
import {
  getBlogPostById,
  getBlogPostBySlug,
  getFamilyById,
  getRecipeById,
  listPublishedBlogPosts,
} from "@/lib/data/repository";
import { siteUrl } from "@/lib/utils";
import type { Locale, Recipe, RecipeFamily } from "@/types/content";
import { routing } from "@/i18n/routing";

export async function generateStaticParams() {
  const posts = await listPublishedBlogPosts();
  return routing.locales.flatMap((locale) =>
    posts.map((post) => ({
      locale,
      slug: post.translations[locale as Locale].slug,
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
  const post = await getBlogPostBySlug(locale, slug);
  if (!post) return {};
  const t = post.translations[locale];
  const base = siteUrl();
  return {
    title: t.seoTitle || t.title,
    description: t.seoDescription || t.excerpt,
    alternates: {
      canonical: `${base}/${locale}/blog/${t.slug}`,
      languages: {
        de: `${base}/de/blog/${post.translations.de.slug}`,
        pl: `${base}/pl/blog/${post.translations.pl.slug}`,
        "x-default": `${base}/de/blog/${post.translations.de.slug}`,
      },
    },
    openGraph: {
      title: t.title,
      description: t.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const post = await getBlogPostBySlug(locale, slug);
  if (!post) notFound();

  const t = await getTranslations("blog");
  const tCommon = await getTranslations("common");
  const tAff = await getTranslations("affiliate");

  const relatedRecipes: Recipe[] = [];
  for (const id of post.relatedRecipeIds) {
    const r = await getRecipeById(id);
    if (r && r.status === "published") relatedRecipes.push(r);
  }

  const relatedFamilies = new Map<string, RecipeFamily>();
  for (const r of relatedRecipes) {
    if (r.familyId && !relatedFamilies.has(r.familyId)) {
      const f = await getFamilyById(r.familyId);
      if (f) relatedFamilies.set(f.id, f);
    }
  }

  const relatedPosts = [];
  for (const id of post.relatedPostIds) {
    const p = await getBlogPostById(id);
    if (p && p.status === "published" && p.id !== post.id) relatedPosts.push(p);
  }

  const products = getAffiliateForPost(
    post.id,
    post.relatedProductIds,
    4,
  );

  const tr = post.translations[locale];

  return (
    <div>
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs
          ariaLabel={tCommon("breadcrumbs")}
          items={[
            { label: tCommon("home"), href: "/" },
            { label: t("title"), href: "/blog" },
            { label: tr.title },
          ]}
        />
      </div>
      <BlogArticle
        post={post}
        locale={locale}
        relatedRecipes={relatedRecipes}
        relatedFamilies={relatedFamilies}
        relatedPosts={relatedPosts}
        products={products}
        labels={{
          relatedRecipes: t("relatedRecipes"),
          relatedPosts: t("relatedPosts"),
          products: t("products"),
          disclosure: tAff("disclosure"),
          readMore: t("readMore"),
        }}
      />
    </div>
  );
}
