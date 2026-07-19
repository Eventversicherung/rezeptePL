import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getFamilyById } from "@/lib/data/repository";
import { familyVariantPath, recipePath } from "@/lib/data/recipe-paths";
import type { Locale, Recipe } from "@/types/content";

export async function RecipeCard({
  recipe,
  locale,
}: {
  recipe: Recipe;
  locale: Locale;
}) {
  const t = recipe.translations[locale];
  const mins = recipe.prepMinutes + recipe.cookMinutes;
  const family = recipe.familyId
    ? await getFamilyById(recipe.familyId)
    : null;
  const href = family
    ? familyVariantPath(family, recipe, locale)
    : recipePath(recipe, locale);

  return (
    <Link
      href={href}
      className="recipe-card group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="recipe-card__media">
        <Image
          src={recipe.coverImage}
          alt={t.title}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <span className="recipe-card__badge">{mins} min</span>
      </div>
      <div className="pt-4">
        <h2 className="font-display text-[clamp(1.35rem,3vw,1.85rem)] font-semibold tracking-tight">
          {t.title}
        </h2>
        <p className="mt-2 line-clamp-2 max-w-[42ch] text-[0.95rem] text-muted">
          {t.excerpt}
        </p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          {recipe.servings} · {locale === "de" ? "Portionen" : "porcje"}
        </p>
      </div>
    </Link>
  );
}
