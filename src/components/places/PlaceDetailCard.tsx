"use client";

import { useTranslations } from "next-intl";
import { formatDistanceKm } from "@/lib/geo/distance";
import { mapsDirectionsUrl, mapsPlaceUrl } from "@/lib/geo/maps-url";
import type { Place } from "@/types/place";

type Props = {
  place: Place | null;
  locale: string;
  onClose: () => void;
};

function openingHoursText(place: Place): string | null {
  const raw = place.openingHours?.raw;
  if (typeof raw === "string" && raw.trim()) return raw.trim();
  return null;
}

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

  const hours = openingHoursText(place);
  const phoneHref = place.phone
    ? `tel:${place.phone.replace(/\s+/g, "")}`
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
          <span className={`place-card__kind place-card__kind--${place.kind}`}>
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

        {address ? <p className="place-card__address">{address}</p> : null}

        <dl className="place-card__meta">
          {phoneHref && place.phone ? (
            <div>
              <dt>{t("phone")}</dt>
              <dd>
                <a href={phoneHref}>{place.phone}</a>
              </dd>
            </div>
          ) : null}
          {hours ? (
            <div>
              <dt>{t("hours")}</dt>
              <dd>{hours}</dd>
            </div>
          ) : null}
        </dl>

        <div className="place-card__actions">
          <a
            href={mapsPlaceUrl(place)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t("openInMaps")}
          </a>
          <a
            href={mapsDirectionsUrl(place)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
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
        </div>
      </div>
    </aside>
  );
}
