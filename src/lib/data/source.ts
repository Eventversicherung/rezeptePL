/** Public catalog/detail reads from Supabase when explicitly opted in. */
export function isSupabaseContent() {
  return process.env.CONTENT_SOURCE === "supabase";
}
