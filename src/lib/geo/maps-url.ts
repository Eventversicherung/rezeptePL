import type { Place } from "@/types/place";

function placeQuery(place: Place): string {
  const parts = [
    place.translation.name,
    place.street,
    `${place.postalCode} ${place.city}`.trim(),
  ].filter(Boolean);
  return parts.join(", ");
}

/** Open place in Google Maps (search by name/address, pin via coordinates). */
export function mapsPlaceUrl(place: Place): string {
  const q = encodeURIComponent(placeQuery(place));
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

/** Directions to place in Google Maps. */
export function mapsDirectionsUrl(place: Place): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`;
}
