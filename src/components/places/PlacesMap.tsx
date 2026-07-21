"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Place } from "@/types/place";

const GERMANY_CENTER: [number, number] = [10.45, 51.16];
const GERMANY_ZOOM = 5.4;
const LOCAL_ZOOM = 12;

type UserLocation = { lat: number; lng: number };

type Props = {
  places: Place[];
  selectedId: string | null;
  userLocation: UserLocation | null;
  onSelect: (placeId: string) => void;
};

export function PlacesMap({
  places,
  selectedId,
  userLocation,
  onSelect,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<Map<string, maplibregl.Marker>>(new Map());
  const userMarkerRef = useRef<maplibregl.Marker | null>(null);
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: GERMANY_CENTER,
      zoom: GERMANY_ZOOM,
      attributionControl: { compact: true },
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
    mapRef.current = map;

    return () => {
      markersRef.current.forEach((m) => m.remove());
      markersRef.current.clear();
      userMarkerRef.current?.remove();
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const existing = markersRef.current;
    const nextIds = new Set(places.map((p) => p.id));

    existing.forEach((marker, id) => {
      if (!nextIds.has(id)) {
        marker.remove();
        existing.delete(id);
      }
    });

    for (const place of places) {
      let marker = existing.get(place.id);
      if (!marker) {
        const el = document.createElement("button");
        el.type = "button";
        el.className = `place-marker place-marker--${place.kind}`;
        el.setAttribute("aria-label", place.translation.name);
        el.addEventListener("click", (e) => {
          e.stopPropagation();
          onSelectRef.current(place.id);
        });

        marker = new maplibregl.Marker({ element: el, anchor: "bottom" })
          .setLngLat([place.lng, place.lat])
          .addTo(map);
        existing.set(place.id, marker);
      }

      const el = marker.getElement();
      el.classList.toggle("is-selected", place.id === selectedId);
      el.classList.toggle("is-glow", place.id === selectedId);
    }
  }, [places, selectedId]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (!userLocation) {
      userMarkerRef.current?.remove();
      userMarkerRef.current = null;
      return;
    }

    if (!userMarkerRef.current) {
      const el = document.createElement("div");
      el.className = "place-user-dot";
      el.setAttribute("aria-hidden", "true");
      userMarkerRef.current = new maplibregl.Marker({ element: el })
        .setLngLat([userLocation.lng, userLocation.lat])
        .addTo(map);
    } else {
      userMarkerRef.current.setLngLat([userLocation.lng, userLocation.lat]);
    }

    map.easeTo({
      center: [userLocation.lng, userLocation.lat],
      zoom: LOCAL_ZOOM,
      duration: 900,
    });
  }, [userLocation]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !selectedId) return;
    const place = places.find((p) => p.id === selectedId);
    if (!place) return;
    map.easeTo({
      center: [place.lng, place.lat],
      zoom: Math.max(map.getZoom(), 11),
      duration: 500,
      padding: { top: 40, bottom: 220, left: 40, right: 40 },
    });
  }, [selectedId, places]);

  return (
    <div className="places-map" ref={containerRef} role="presentation" />
  );
}

export { GERMANY_CENTER, GERMANY_ZOOM };
