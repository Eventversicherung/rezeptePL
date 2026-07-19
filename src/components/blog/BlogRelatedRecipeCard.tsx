import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Locale, Recipe, RecipeFamily } from "@/types/content";
import { familyVariantPath, recipePath } from "@/lib/data/recipe-paths";

export function BlogRelatedRecipeCard({
  recipe,
  family,
  locale,
  cookLabel,
}: {
  recipe: Recipe;
  family?: RecipeFamily | null;
  locale: Locale;
  cookLabel: string;
}) {
  const t = recipe.translations[locale];
  const href = family
    ? familyVariantPath(family, recipe, locale)
    : recipePath(recipe, locale);
  const mins = recipe.prepMinutes + recipe.cookMinutes;

  return (
    <Link
      href={href}
      className="recipe-card group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="recipe-card__media !aspect-[4/3]">
        <Image
          src={recipe.coverImage}
          alt={t.title}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          sizes="(max-width: 640px) 100vw, 280px"
        />
        <span className="recipe-card__badge">{mins} min</span>
      </div>
      <div className="pt-3">
        <h3 className="font-display text-lg font-semibold leading-snug tracking-tight">
          {t.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted">{t.excerpt}</p>
        <p className="mt-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          {cookLabel} →
        </p>
      </div>
    </Link>
  );
}
