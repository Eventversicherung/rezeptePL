import { isSupabaseConfigured } from "@/lib/supabase/env";
import { createPublicClient } from "@/lib/supabase/public";
import type { Locale } from "@/types/content";
import type { Place, PlaceKind } from "@/types/place";

type PlaceRow = {
  id: string;
  slug: string;
  kind: PlaceKind;
  status: string;
  lat: number;
  lng: number;
  street: string;
  postal_code: string;
  city: string;
  state: string;
  country: string;
  phone: string | null;
  website: string | null;
  email: string | null;
  opening_hours: Record<string, string> | null;
  image_url: string;
  tags: string[] | null;
  source: string;
  source_url: string | null;
  verified_at: string | null;
  place_translations: Array<{
    name: string;
    description: string;
    schedule_note: string;
    seo_title: string;
    seo_description: string;
    locale: string;
  }> | null;
};

function mapRow(row: PlaceRow, locale: Locale): Place | null {
  const translations = row.place_translations ?? [];
  const preferred =
    translations.find((t) => t.locale === locale) ??
    translations.find((t) => t.locale === "de") ??
    translations[0];
  if (!preferred) return null;

  return {
    id: row.id,
    slug: row.slug,
    kind: row.kind,
    status: row.status as Place["status"],
    lat: row.lat,
    lng: row.lng,
    street: row.street,
    postalCode: row.postal_code,
    city: row.city,
    state: row.state,
    country: row.country,
    phone: row.phone,
    website: row.website,
    email: row.email,
    openingHours: row.opening_hours ?? {},
    imageUrl: row.image_url ?? "",
    tags: row.tags ?? [],
    source: row.source as Place["source"],
    sourceUrl: row.source_url,
    verifiedAt: row.verified_at,
    translation: {
      name: preferred.name,
      description: preferred.description,
      scheduleNote: preferred.schedule_note,
      seoTitle: preferred.seo_title,
      seoDescription: preferred.seo_description,
    },
  };
}

export async function listPublishedPlaces(
  locale: Locale,
  options?: { kind?: PlaceKind },
): Promise<Place[]> {
  if (!isSupabaseConfigured()) return [];

  try {
    const supabase = createPublicClient();
    let query = supabase
      .from("places")
      .select(
        `
        id, slug, kind, status, lat, lng, street, postal_code, city, state, country,
        phone, website, email, opening_hours, image_url, tags, source, source_url, verified_at,
        place_translations ( name, description, schedule_note, seo_title, seo_description, locale )
      `,
      )
      .eq("status", "published")
      .order("city", { ascending: true });

    if (options?.kind) {
      query = query.eq("kind", options.kind);
    }

    const { data, error } = await query;
    if (error || !data) {
      console.error("[places] listPublishedPlaces", error?.message);
      return [];
    }

    return (data as PlaceRow[])
      .map((row) => mapRow(row, locale))
      .filter((p): p is Place => p !== null);
  } catch (err) {
    console.error("[places] listPublishedPlaces failed", err);
    return [];
  }
}
