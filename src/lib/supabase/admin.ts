import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseUrl } from "@/lib/supabase/env";

/**
 * Admin Supabase client — bypasses Row Level Security via the secret key.
 *
 * SERVER-ONLY. Never import this from a Client Component or any module
 * reachable from the browser bundle (`import "server-only"` above makes the
 * build fail loudly if that ever happens).
 *
 * Requires `SUPABASE_SECRET_KEY` (new-format `sb_secret_...`, Settings > API
 * Keys > "Secret keys" in the Supabase dashboard) or, as a legacy fallback,
 * `SUPABASE_SERVICE_ROLE_KEY` (JWT `service_role`). Both must live only in
 * the deployment platform's server environment — never in `NEXT_PUBLIC_*`.
 */
let cached: SupabaseClient | null = null;

export function getSupabaseAdminClient(): SupabaseClient {
  if (cached) return cached;

  const url = getSupabaseUrl();
  const secretKey =
    process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url) throw new Error("NEXT_PUBLIC_SUPABASE_URL is not configured.");
  if (!secretKey) {
    throw new Error(
      "SUPABASE_SECRET_KEY is not configured on this environment. " +
        "Add it in the deployment platform's server-side environment variables " +
        "(never NEXT_PUBLIC_)."
    );
  }

  cached = createClient(url, secretKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}
