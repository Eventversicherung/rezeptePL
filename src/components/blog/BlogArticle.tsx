import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { LocaleAlternatesProvider } from "@/components/i18n/LocaleAlternates";
import { AffiliateCard } from "@/components/affiliate/AffiliateCard";
import type {
  AffiliateProduct,
  BlogPost,
  Locale,
  Recipe,
} from "@/types/content";
import { familyVariantPath, recipePath } from "@/lib/data/recipe-paths";
import type { RecipeFamily } from "@/types/content";

function renderBody(body: string) {
  const blocks = body.split(/\n\n+/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="mt-10 font-display text-2xl font-semibold first:mt-0"
        >
          {trimmed.slice(3)}
        </h2>
      );
    }
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={i} className="mt-6 text-lg font-semibold">
          {trimmed.slice(4)}
        </h3>
      );
    }
    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed">
          {items.map((item, j) => (
            <li key={j}>{linkify(item.slice(2))}</li>
          ))}
        </ul>
      );
    }
    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split("\n").filter((l) => /^\d+\.\s/.test(l));
      return (
        <ol key={i} className="mt-4 list-decimal space-y-2 pl-5 text-base leading-relaxed">
          {items.map((item, j) => (
            <li key={j}>{linkify(item.replace(/^\d+\.\s/, ""))}</li>
          ))}
        </ol>
      );
    }
    return (
      <p key={i} className="mt-4 text-base leading-relaxed text-foreground/90">
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
        <Link key={i} href={internal[2]} className="font-medium text-accent underline-offset-2 hover:underline">
          {label}
        </Link>
      );
    }
    if (href.startsWith("/")) {
      return (
        <Link key={i} href={href} className="font-medium text-accent underline-offset-2 hover:underline">
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
  };
}) {
  const t = post.translations[locale];
  const alternates = {
    de: `/blog/${post.translations.de.slug}`,
    pl: `/blog/${post.translations.pl.slug}`,
  };

  return (
    <LocaleAlternatesProvider alternates={alternates}>
      <article className="mx-auto max-w-3xl pb-28 md:pb-16">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[calc(var(--radius)+10px)] bg-elevated">
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
        <p className="mt-4 max-w-[65ch] text-lg text-muted">{t.excerpt}</p>
        <div className="mt-10 border-t border-border pt-8">
          {renderBody(t.body)}
        </div>

        {products.length > 0 ? (
          <section className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {labels.disclosure}
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold">
              {labels.products}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
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

        {relatedRecipes.length > 0 ? (
          <section className="mt-14">
            <h2 className="font-display text-xl font-semibold">
              {labels.relatedRecipes}
            </h2>
            <ul className="mt-4 space-y-2">
              {relatedRecipes.map((recipe) => {
                const family = recipe.familyId
                  ? relatedFamilies.get(recipe.familyId)
                  : null;
                const href = family
                  ? familyVariantPath(family, recipe, locale)
                  : recipePath(recipe, locale);
                return (
                  <li key={recipe.id}>
                    <Link
                      href={href}
                      className="text-accent underline-offset-2 hover:underline"
                    >
                      {recipe.translations[locale].title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}

        {relatedPosts.length > 0 ? (
          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold">
              {labels.relatedPosts}
            </h2>
            <ul className="mt-4 space-y-2">
              {relatedPosts.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/blog/${p.translations[locale].slug}`}
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    {p.translations[locale].title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </article>
    </LocaleAlternatesProvider>
  );
}
