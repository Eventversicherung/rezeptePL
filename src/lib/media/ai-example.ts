/**
 * Photorealistic food stills we publish as examples, not as photos of a
 * cooked result. Supabase `recipe-media` is that library. The homepage
 * cover in `public/recipes` is the same kind of still.
 *
 * Affiliate product shots, the logo, and the branded Open Graph graphic
 * stay outside this check.
 */
export function isAiExampleImage(src: string): boolean {
  if (!src) return false;
  return src.includes("/recipe-media/") || src.startsWith("/recipes/");
}
