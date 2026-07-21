import type { Place } from "@/types/place";

export function mapsDirectionsUrl(place: Place): string {
  const q = encodeURIComponent(
    `${place.street}, ${place.postalCode} ${place.city}`,
  );
  return `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}&query=${q}`;
}
