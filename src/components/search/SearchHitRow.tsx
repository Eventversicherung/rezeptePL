"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import type { SearchHit } from "@/lib/search/types";
import { cn } from "@/lib/utils";

const MATCH_KEYS = {
  title: "matchTitle",
  ingredient: "matchIngredient",
  category: "matchCategory",
  variant: "matchVariant",
  excerpt: "matchExcerpt",
  region: "matchRegion",
  occasion: "matchOccasion",
  technique: "matchTechnique",
} as const;

export function SearchHitRow({
  hit,
  active,
}: {
  hit: SearchHit;
  active?: boolean;
}) {
  const t = useTranslations("search");
  const matchKey = MATCH_KEYS[hit.matchKind];
  const matchLabel =
    hit.matchKind === "title" || hit.matchKind === "excerpt"
      ? t(matchKey)
      : t(matchKey, { value: hit.matchValue });

  return (
    <span className={cn("recipe-search__hit", active && "is-active")}>
      <span className="recipe-search__photo">
        <Image
          src={hit.image}
          alt=""
          fill
          sizes="56px"
          className="object-cover"
        />
      </span>
      <span className="recipe-search__copy">
        <span className="recipe-search__title">{hit.title}</span>
        <span className="recipe-search__meta">
          <span>{matchLabel}</span>
          <span className="recipe-search__time">
            {t("minutes", { count: hit.minutes })}
          </span>
        </span>
      </span>
    </span>
  );
}
