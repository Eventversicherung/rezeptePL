import type { Locale } from "./content";

export type PlaceKind = "shop" | "market";
export type PlaceStatus = "draft" | "published" | "closed";
export type PlaceSource = "curated" | "scrape" | "community" | "osm";

export type PlaceTranslation = {
  name: string;
  description: string;
  scheduleNote: string;
  seoTitle: string;
  seoDescription: string;
};

export type Place = {
  id: string;
  slug: string;
  kind: PlaceKind;
  status: PlaceStatus;
  lat: number;
  lng: number;
  street: string;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  phone: string | null;
  website: string | null;
  email: string | null;
  openingHours: Record<string, string>;
  imageUrl: string;
  tags: string[];
  source: PlaceSource;
  sourceUrl: string | null;
  verifiedAt: string | null;
  translation: PlaceTranslation;
  /** Populated client-side when user location is known */
  distanceKm?: number;
};

export type PlaceFilter = {
  kind?: PlaceKind | "all";
  city?: string;
  locale: Locale;
};
