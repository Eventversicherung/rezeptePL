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

  return (
    <div className="places-finder">
      <div className="places-finder__toolbar">
        <div
          className="places-finder__filters"
          role="group"
          aria-label={t("filterLabel")}
        >
          {(
            [
              ["all", t("filterAll")],
              ["shop", t("filterShops")],
              ["market", t("filterMarkets")],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              className={`places-filter-chip${filter === value ? " is-active" : ""}`}
              onClick={() => setFilter(value)}
            >
              {label}
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

      <div className="places-finder__stage">
        <PlacesMap
          places={enriched}
          selectedId={selectedId}
          userLocation={userLocation}
          onSelect={setSelectedId}
        />
        <PlaceDetailCard
          place={selected}
          locale={locale}
          onClose={() => setSelectedId(null)}
        />
      </div>
    </div>
  );
}
