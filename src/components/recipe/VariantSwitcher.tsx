"use client";

import { useEffect } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
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
  const pathname = usePathname();

  useEffect(() => {
    for (const variant of variants) {
      if (variant.id === activeId) continue;
      router.prefetch(familyVariantPath(family, variant, locale));
    }
  }, [activeId, family, locale, router, variants]);

  return (
    <div className="variant-switch" role="navigation" aria-label={label}>
      <p className="variant-switch__label">{label}</p>
      <div className="variant-switch__track" role="tablist" aria-label={label}>
        {variants.map((variant) => {
          const href = familyVariantPath(family, variant, locale);
          const name =
            variant.variantLabel?.[locale] ||
            variant.translations[locale].title;
          const active =
            variant.id === activeId ||
            pathname === href ||
            pathname.endsWith(`/${variant.translations[locale].slug}`);

          return (
            <Link
              key={variant.id}
              href={href}
              prefetch
              scroll={false}
              role="tab"
              aria-selected={active}
              aria-current={active ? "page" : undefined}
              className={`variant-switch__tab${active ? " is-active" : ""}`}
            >
              <span className="variant-switch__tab-text">{name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
