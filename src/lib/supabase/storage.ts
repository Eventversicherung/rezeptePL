import { getSupabaseUrl } from "@/lib/supabase/env";

export type MediaBucket = "blog-media" | "recipe-media" | "place-media";

/** Public object URL for a Storage path (no network call). */
export function storagePublicUrl(bucket: MediaBucket, path: string): string {
  const base = getSupabaseUrl().replace(/\/$/, "");
  if (!base) return "";
  const clean = path.replace(/^\/+/, "");
  return `${base}/storage/v1/object/public/${bucket}/${clean}`;
}

/** True when URL is already our Supabase Storage public object. */
export function isSupabaseStorageUrl(url: string): boolean {
  if (!url) return false;
  try {
    const u = new URL(url);
    return u.pathname.includes("/storage/v1/object/public/");
  } catch {
    return false;
  }
}
