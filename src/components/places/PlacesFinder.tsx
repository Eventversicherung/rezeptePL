"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import { distanceKm } from "@/lib/geo/distance";
import type { Place, PlaceKind } from "@/types/place";
import { PlaceDetailCard } from "./PlaceDetailCard";
import { PlacesMap } from "./PlacesMap";

type FilterKind = "all" | PlaceKind;
type GeoStatus = "idle" | "prompting" | "granted" | "denied" | "unsupported";

type Props = {
  places: Place[];
  locale: string;
};

export function PlacesFinder({ places, locale }: Props) {
  const t = useTranslations("places");
  const [filter, setFilter] = useState<FilterKind>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [geoStatus, setGeoStatus] = useState<GeoStatus>("idle");
  const [, startTransition] = useTransition();

  const counts = useMemo(() => {
    let shops = 0;
    let markets = 0;
    for (const p of places) {
      if (p.kind === "market") markets += 1;
      else shops += 1;
    }
    return { all: places.length, shop: shops, market: markets };
  }, [places]);

  const requestLocation = () => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setGeoStatus("unsupported");
      return;
    }
    setGeoStatus("prompting");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        startTransition(() => {
          setUserLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          setGeoStatus("granted");
        });
      },
      () => {
        setGeoStatus("denied");
        setUserLocation(null);
      },
      { enableHighAccuracy: false, timeout: 12000, maximumAge: 60_000 },
    );
  };

  useEffect(() => {
    requestLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- request once on mount
  }, []);

  const enriched = useMemo(() => {
    const filtered =
      filter === "all" ? places : places.filter((p) => p.kind === filter);

    const withDistance = filtered.map((p) => {
      if (!userLocation) return { ...p, distanceKm: undefined };
      return {
        ...p,
        distanceKm: distanceKm(
          userLocation.lat,
          userLocation.lng,
          p.lat,
          p.lng,
        ),
      };
    });

    if (userLocation) {
      withDistance.sort(
        (a, b) => (a.distanceKm ?? Infinity) - (b.distanceKm ?? Infinity),
      );
    } else {
      withDistance.sort((a, b) =>
        a.city.localeCompare(b.city, locale, { sensitivity: "base" }),
      );
    }
    return withDistance;
  }, [places, filter, userLocation, locale]);

  const selected = enriched.find((p) => p.id === selectedId) ?? null;

  useEffect(() => {
    if (selectedId && !enriched.some((p) => p.id === selectedId)) {
      setSelectedId(null);
    }
  }, [enriched, selectedId]);

  const filters = [
    { value: "all" as const, label: t("filterAll"), count: counts.all },
    { value: "shop" as const, label: t("filterShops"), count: counts.shop },
    {
      value: "market" as const,
      label: t("filterMarkets"),
      count: counts.market,
    },
  ];

  return (
    <div className="places-finder">
      <div className="places-finder__stage">
        <PlacesMap
          places={enriched}
          selectedId={selectedId}
          userLocation={userLocation}
          onSelect={setSelectedId}
        />

        <div className="places-finder__overlay">
          <div
            className="places-finder__filters"
            role="group"
            aria-label={t("filterLabel")}
          >
            {filters.map(({ value, label, count }) => (
              <button
                key={value}
                type="button"
                className={`places-filter-chip places-filter-chip--${value}${filter === value ? " is-active" : ""}`}
                onClick={() => setFilter(value)}
                aria-pressed={filter === value}
              >
                {value !== "all" ? (
                  <span
                    className={`places-filter-chip__swatch places-filter-chip__swatch--${value}`}
                    aria-hidden="true"
                  />
                ) : null}
                <span className="places-filter-chip__label">{label}</span>
                <span className="places-filter-chip__count">{count}</span>
              </button>
            ))}
          </div>

          <div className="places-finder__geo">
            {geoStatus === "granted" ? (
              <p className="places-finder__geo-status">{t("geoActive")}</p>
            ) : (
              <button
                type="button"
                className="btn-secondary places-finder__geo-btn"
                onClick={requestLocation}
                disabled={geoStatus === "prompting"}
                title={t("geoPrivacy")}
              >
                {geoStatus === "prompting" ? t("geoPrompting") : t("geoEnable")}
              </button>
            )}
          </div>
        </div>

        <p className="places-finder__legend" aria-hidden="true">
          <span>
            <span className="places-legend-dot places-legend-dot--shop" />
            {t("kindShop")}
          </span>
          <span>
            <span className="places-legend-dot places-legend-dot--market" />
            {t("kindMarket")}
          </span>
        </p>

        <PlaceDetailCard
          place={selected}
          locale={locale}
          onClose={() => setSelectedId(null)}
        />
      </div>

      <p className="places-finder__attribution">{t("osmAttribution")}</p>
    </div>
  );
}
