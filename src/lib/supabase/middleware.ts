import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import { getSupabasePublishableKey, getSupabaseUrl } from "./env";

export async function updateSession(request: NextRequest, response: NextResponse) {
  const url = getSupabaseUrl();
  const key = getSupabasePublishableKey();
  if (!url || !key) return response;

  let supabaseResponse = response;

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        supabaseResponse = NextResponse.next({
          request,
        });
        // Preserve next-intl rewrite/redirect cookies from the original response
        response.cookies.getAll().forEach((cookie) => {
          supabaseResponse.cookies.set(cookie.name, cookie.value);
        });
        cookiesToSet.forEach(({ name, value, options }) => {
          supabaseResponse.cookies.set(name, value, options);
        });
      },
    },
  });

  // Refresh auth session. Required for SSR cookie sync
  await supabase.auth.getUser();

  return supabaseResponse;
}
