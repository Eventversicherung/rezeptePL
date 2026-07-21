import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { SetLocaleAlternates } from "@/components/i18n/LocaleAlternates";
import { AffiliateCard } from "@/components/affiliate/AffiliateCard";
import { BlogRelatedRecipeCard } from "@/components/blog/BlogRelatedRecipeCard";
import { renderBlogBody } from "@/lib/markdown/blog-body";
import { familyVariantPath, recipePath } from "@/lib/data/recipe-paths";
import type {
  AffiliateProduct,
  BlogPost,
  Locale,
  Recipe,
  RecipeFamily,
} from "@/types/content";

export function BlogArticle({
  post,
  locale,
  relatedRecipes,
  relatedFamilies,
  relatedPosts,
  products,
  labels,
}: {
  post: BlogPost;
  locale: Locale;
  relatedRecipes: Recipe[];
  relatedFamilies: Map<string, RecipeFamily>;
  relatedPosts: BlogPost[];
  products: AffiliateProduct[];
  labels: {
    relatedRecipes: string;
    relatedPosts: string;
    products: string;
    disclosure: string;
    readMore: string;
    cookCta: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
}) {
  const t = post.translations[locale];
  const alternates = {
    de: `/blog/${post.translations.de.slug}`,
    pl: `/blog/${post.translations.pl.slug}`,
  };
  const primaryRecipe = relatedRecipes[0];
  const primaryFamily = primaryRecipe?.familyId
    ? relatedFamilies.get(primaryRecipe.familyId) ?? null
    : null;
  const ctaHref = primaryRecipe
    ? primaryFamily
      ? familyVariantPath(primaryFamily, primaryRecipe, locale)
      : recipePath(primaryRecipe, locale)
    : "/rezepte";

  return (
    <>
      <SetLocaleAlternates de={alternates.de} pl={alternates.pl} />
      <article className="mx-auto w-full max-w-3xl pb-28 md:pb-16">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[calc(var(--radius)+10px)] bg-elevated shadow-[0_20px_50px_rgba(28,20,18,0.12)] sm:aspect-[16/9]">
          <Image
            src={post.coverImage}
            alt={t.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
        <h1 className="mt-6 font-display text-[clamp(1.85rem,6.5vw,3.2rem)] font-semibold leading-[1.08] sm:mt-8">
          {t.title}
        </h1>
        <p className="mt-3 max-w-[65ch] text-base leading-relaxed text-muted sm:mt-4 sm:text-lg">
          {t.excerpt}
        </p>
        <div className="prose-blog mt-8 border-t border-border pt-6 sm:mt-10 sm:pt-8">
          {renderBlogBody(t.body)}
        </div>

        {relatedRecipes.length > 0 ? (
          <section className="mt-14 sm:mt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Alemniam
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold">
              {labels.relatedRecipes}
            </h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              {relatedRecipes.map((recipe) => (
                <BlogRelatedRecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  family={
                    recipe.familyId
                      ? relatedFamilies.get(recipe.familyId)
                      : null
                  }
                  locale={locale}
                  cookLabel={labels.cookCta}
                />
              ))}
            </div>
          </section>
        ) : null}

        {products.length > 0 ? (
          <section className="mt-14 sm:mt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {labels.disclosure}
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold">
              {labels.products}
            </h2>
            <div className="mt-6 grid gap-5">
              {products.map((p) => (
                <AffiliateCard
                  key={p.id}
                  product={p}
                  locale={locale}
                  disclosure={labels.disclosure}
                />
              ))}
            </div>
          </section>
        ) : null}

        {relatedPosts.length > 0 ? (
          <section className="mt-14 sm:mt-16">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold">
              {labels.relatedPosts}
            </h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              {relatedPosts.map((p) => {
                const pt = p.translations[locale];
                return (
                  <Link
                    key={p.id}
                    href={`/blog/${pt.slug}`}
                    className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[calc(var(--radius)+4px)] bg-elevated">
                      <Image
                        src={p.coverImage}
                        alt={pt.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, 320px"
                      />
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold leading-snug">
                      {pt.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-muted">
                      {pt.excerpt}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                      {labels.readMore} →
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        ) : null}

        <section className="mt-14 rounded-[calc(var(--radius)+8px)] border border-border bg-elevated px-5 py-7 sm:mt-16 sm:px-8 sm:py-8">
          <h2 className="font-display text-xl font-semibold sm:text-2xl">
            {labels.ctaTitle}
          </h2>
          <p className="mt-3 max-w-[48ch] text-muted">{labels.ctaBody}</p>
          <Link href={ctaHref} className="btn-primary mt-6 inline-flex min-h-11 items-center">
            {labels.ctaButton}
          </Link>
        </section>
      </article>
    </>
  );
}
