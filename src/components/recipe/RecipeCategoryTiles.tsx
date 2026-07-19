import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Cluster, Locale } from "@/types/content";

export function RecipeCategoryTiles({
  categories,
  locale,
  activeSlug,
  recipesLabel,
}: {
  categories: Cluster[];
  locale: Locale;
  activeSlug?: string;
  recipesLabel: string;
}) {
  return (
    <div className="stagger grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {categories.map((category) => {
        const slug = category.slug[locale];
        const href = `/rezepte/kategorie/${slug}`;
        const active = activeSlug === slug;
        return (
          <Link
            key={category.id}
            href={href}
            className={`group relative overflow-hidden rounded-[calc(var(--radius)+4px)] border transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_18px_40px_rgba(220,20,60,0.12)] ${
              active
                ? "border-accent bg-surface shadow-[0_12px_32px_rgba(220,20,60,0.1)]"
                : "border-border bg-surface"
            }`}
          >
            {category.coverImage ? (
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={category.coverImage}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-[rgba(18,27,48,0.72)] via-[rgba(18,27,48,0.2)] to-transparent"
                  aria-hidden
                />
              </div>
            ) : null}
            <div className={category.coverImage ? "absolute inset-x-0 bottom-0 p-4" : "p-5"}>
              <h2
                className={`font-display text-xl font-semibold ${
                  category.coverImage ? "text-white" : ""
                }`}
              >
                {category.title[locale]}
              </h2>
              <p
                className={`mt-1 line-clamp-2 text-sm ${
                  category.coverImage ? "text-white/85" : "text-muted"
                }`}
              >
                {category.description[locale]}
              </p>
              <span
                className={`mt-3 inline-block text-xs font-semibold uppercase tracking-[0.12em] ${
                  category.coverImage ? "text-white" : "text-accent"
                }`}
              >
                {recipesLabel} →
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
