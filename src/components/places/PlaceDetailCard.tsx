"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { formatDistanceKm } from "@/lib/geo/distance";
import { mapsDirectionsUrl } from "@/lib/geo/maps-url";
import type { Place } from "@/types/place";

type Props = {
  place: Place | null;
  locale: string;
  onClose: () => void;
};

export function PlaceDetailCard({ place, locale, onClose }: Props) {
  const t = useTranslations("places");

  if (!place) return null;

  const address = [place.street, `${place.postalCode} ${place.city}`]
    .filter(Boolean)
    .join(", ");

  const websiteHref = place.website
    ? place.website.startsWith("http")
      ? place.website
      : `https://${place.website}`
    : null;

  return (
    <aside
      key={place.id}
      className="place-card"
      role="dialog"
      aria-label={place.translation.name}
    >
      <div className="place-card__inner">
        <button
          type="button"
          className="place-card__close"
          onClick={onClose}
          aria-label={t("close")}
        >
          ×
        </button>

        <div className="place-card__badges">
          <span
            className={`place-card__kind place-card__kind--${place.kind}`}
          >
            {place.kind === "market" ? t("kindMarket") : t("kindShop")}
          </span>
          {place.distanceKm != null ? (
            <span className="place-card__distance">
              {formatDistanceKm(place.distanceKm, locale)}
            </span>
          ) : null}
        </div>

        <h2 className="place-card__title font-display">
          {place.translation.name}
        </h2>
        <p className="place-card__address">{address}</p>

        {place.translation.description ? (
          <p className="place-card__desc">{place.translation.description}</p>
        ) : null}

        {place.translation.scheduleNote ? (
          <p className="place-card__note">{place.translation.scheduleNote}</p>
        ) : null}

        {place.tags.length > 0 ? (
          <ul className="place-card__tags">
            {place.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}

        <div className="place-card__actions">
          <a
            href={mapsDirectionsUrl(place)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t("directions")}
          </a>
          {websiteHref ? (
            <a
              href={websiteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {t("website")}
            </a>
          ) : null}
          <Link href="/blog/polenladen-einkaufen" className="btn-ghost">
            {t("shoppingGuide")}
          </Link>
        </div>
        {place.source === "osm" ? (
          <p className="place-card__source">
            {t("osmAttribution")}
            {place.sourceUrl ? (
              <>
                {" · "}
                <a
                  href={place.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OSM
                </a>
              </>
            ) : null}
          </p>
        ) : null}
      </div>
    </aside>
  );
}
