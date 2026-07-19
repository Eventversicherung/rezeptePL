"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { BlogPost, Locale } from "@/types/content";

export function RecipeGearGuides({
  posts,
  locale,
  heading,
  cta,
}: {
  posts: BlogPost[];
  locale: Locale;
  heading: string;
  cta: string;
}) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-14 border-t border-border pt-12">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        Alemniam
      </p>
      <h2 className="mt-2 font-display text-[clamp(1.45rem,3vw,1.85rem)] font-semibold">
        {heading}
      </h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        {posts.map((post) => {
          const t = post.translations[locale];
          return (
            <Link
              key={post.id}
              href={`/blog/${t.slug}`}
              className="recipe-card group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <div className="recipe-card__media !aspect-[16/10]">
                <Image
                  src={post.coverImage}
                  alt={t.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, 320px"
                />
              </div>
              <div className="pt-3">
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {t.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-muted">
                  {t.excerpt}
                </p>
                <p className="mt-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {cta} →
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
