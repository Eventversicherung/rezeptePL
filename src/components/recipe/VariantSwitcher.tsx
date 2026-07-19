"use client";

import Image from "next/image";
import { useTransition } from "react";
import { useRouter } from "@/i18n/navigation";
import type { Locale, Recipe, RecipeFamily } from "@/types/content";
import { familyVariantPath } from "@/lib/data/recipe-paths";

export function VariantSwitcher({
  family,
  variants,
  activeId,
  locale,
  label,
}: {
  family: RecipeFamily;
  variants: Recipe[];
  activeId: string;
  locale: Locale;
  label: string;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <div className="mt-5" role="navigation" aria-label={label}>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </p>
      <ul className="mt-3 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {variants.map((variant) => {
          const active = variant.id === activeId;
          const thumb = variant.variantImage || variant.coverImage;
          const name =
            variant.variantLabel?.[locale] ||
            variant.translations[locale].title;
          const href = familyVariantPath(family, variant, locale);
          return (
            <li key={variant.id} className="shrink-0">
              <button
                type="button"
                disabled={pending || active}
                onClick={() =>
                  startTransition(() => {
                    router.replace(href, { scroll: false });
                  })
                }
                className={`group flex w-[5.5rem] flex-col items-center gap-2 rounded-2xl p-1.5 text-center transition-colors sm:w-28 ${
                  active
                    ? "bg-accent-soft ring-2 ring-accent"
                    : "hover:bg-elevated"
                } disabled:opacity-100`}
                aria-current={active ? "true" : undefined}
              >
                <span className="relative aspect-square w-full overflow-hidden rounded-xl bg-elevated">
                  <Image
                    src={thumb}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="112px"
                  />
                </span>
                <span
                  className={`line-clamp-2 text-xs font-semibold leading-snug ${
                    active ? "text-accent" : "text-foreground"
                  }`}
                >
                  {name}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
