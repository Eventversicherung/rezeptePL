/**
 * Process-local content cache. Cross-request on a warm Node/Fluid instance,
 * request-deduped via React `cache()` at the repository layer.
 * Invalidated immediately after admin publish/save.
 *
 * `use cache` / cacheComponents is not enabled project-wide: too many
 * existing routes read cookies or next-intl outside Suspense. Catalog vs
 * detail split is the primary payload win; this cache avoids repeat
 * full-table catalog fetches on the same instance.
 */
const HOUR = 60 * 60 * 1000;

type Entry = {
  value: unknown;
  expires: number;
  tags: string[];
};

const store = new Map<string, Entry>();

export const CONTENT_TAG = "content";
export const RECIPES_TAG = "recipes";
export const BLOG_TAG = "blog";

export async function withContentCache<T>(
  key: string,
  tags: string[],
  loader: () => Promise<T>,
  ttlMs = HOUR,
): Promise<T> {
  const hit = store.get(key);
  const now = Date.now();
  if (hit && hit.expires > now) {
    return hit.value as T;
  }
  const value = await loader();
  store.set(key, { value, expires: now + ttlMs, tags });
  return value;
}

export function invalidateContentCache() {
  const tags = new Set([CONTENT_TAG, RECIPES_TAG, BLOG_TAG]);
  for (const [key, entry] of store) {
    if (entry.tags.some((tag) => tags.has(tag))) {
      store.delete(key);
    }
  }
}
