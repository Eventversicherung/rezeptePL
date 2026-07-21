import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { SetLocaleAlternates } from "@/components/i18n/LocaleAlternates";
import { AffiliateCard } from "@/components/affiliate/AffiliateCard";
import { BlogRelatedRecipeCard } from "@/components/blog/BlogRelatedRecipeCard";
import { familyVariantPath, recipePath } from "@/lib/data/recipe-paths";
import type {
  AffiliateProduct,
  BlogPost,
  Locale,
  Recipe,
  RecipeFamily,
} from "@/types/content";

function renderBody(body: string) {
  const blocks = body.split(/\n\n+/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="mt-12 font-display text-[clamp(1.45rem,3vw,1.85rem)] font-semibold first:mt-0"
        >
          {trimmed.slice(3)}
        </h2>
      );
    }
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={i} className="mt-8 text-lg font-semibold text-[var(--navy)]">
          {trimmed.slice(4)}
        </h3>
      );
    }
    if (trimmed.startsWith("> ")) {
      return (
        <blockquote
          key={i}
          className="mt-6 border-l-4 border-accent bg-accent-soft/40 px-4 py-3 text-base leading-relaxed"
        >
          {linkify(trimmed.replace(/^>\s?/gm, ""))}
        </blockquote>
      );
    }
    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul
          key={i}
          className="mt-4 list-disc space-y-2.5 pl-5 text-base leading-relaxed"
        >
          {items.map((item, j) => (
            <li key={j}>{linkify(item.slice(2))}</li>
          ))}
        </ul>
      );
    }
    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split("\n").filter((l) => /^\d+\.\s/.test(l));
      return (
        <ol
          key={i}
          className="mt-4 list-decimal space-y-2.5 pl-5 text-base leading-relaxed"
        >
          {items.map((item, j) => (
            <li key={j}>{linkify(item.replace(/^\d+\.\s/, ""))}</li>
          ))}
        </ol>
      );
    }
    return (
      <p key={i} className="mt-4 text-base leading-[1.75] text-foreground/90">
        {linkify(trimmed)}
      </p>
    );
  });
}

function linkify(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    const href = m[2];
    const label = m[1];
    const internal = href.match(/^\/(de|pl)(\/.*)$/);
    if (internal) {
      return (
        <Link
          key={i}
          href={internal[2]}
          className="font-medium text-accent underline-offset-2 hover:underline"
        >
          {label}
        </Link>
      );
    }
    if (href.startsWith("/")) {
      return (
        <Link
          key={i}
          href={href}
          className="font-medium text-accent underline-offset-2 hover:underline"
        >
          {label}
        </Link>
      );
    }
    return (
      <a
        key={i}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-accent underline-offset-2 hover:underline"
      >
        {label}
      </a>
    );
  });
}

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
      <article className="mx-auto max-w-3xl pb-28 md:pb-16">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[calc(var(--radius)+10px)] bg-elevated shadow-[0_20px_50px_rgba(28,20,18,0.12)]">
          <Image
            src={post.coverImage}
            alt={t.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
        <h1 className="mt-8 font-display text-[clamp(2rem,6vw,3.2rem)] font-semibold leading-[1.08]">
          {t.title}
        </h1>
        <p className="mt-4 max-w-[65ch] text-lg leading-relaxed text-muted">
          {t.excerpt}
        </p>
        <div className="prose-blog mt-10 border-t border-border pt-8">
          {renderBody(t.body)}
        </div>

        {relatedRecipes.length > 0 ? (
          <section className="mt-16">
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
          <section className="mt-16">
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
          <section className="mt-16">
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

        <section className="mt-16 rounded-[calc(var(--radius)+8px)] border border-border bg-elevated px-6 py-8 sm:px-8">
          <h2 className="font-display text-xl font-semibold sm:text-2xl">
            {labels.ctaTitle}
          </h2>
          <p className="mt-3 max-w-[48ch] text-muted">{labels.ctaBody}</p>
          <Link href={ctaHref} className="btn-primary mt-6 inline-flex">
            {labels.ctaButton}
          </Link>
        </section>
      </article>
    </>
  );
}
