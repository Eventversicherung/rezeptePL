import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Locale, Recipe } from "@/types/content";

export function RecipeCard({
  recipe,
  locale,
}: {
  recipe: Recipe;
  locale: Locale;
}) {
  const t = recipe.translations[locale];
  return (
    <Link
      href={`/rezepte/${t.slug}`}
      className="group block overflow-hidden rounded-[var(--radius)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-elevated">
        <Image
          src={recipe.coverImage}
          alt={t.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="pt-3">
        <h2 className="font-display text-xl font-semibold tracking-tight">
          {t.title}
        </h2>
        <p className="mt-1 line-clamp-2 text-sm text-muted">{t.excerpt}</p>
        <p className="mt-2 text-xs text-muted">
          {recipe.prepMinutes + recipe.cookMinutes} min · {recipe.servings}
        </p>
      </div>
    </Link>
  );
}
