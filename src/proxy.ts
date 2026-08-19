import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { updateSession } from "./lib/supabase/middleware";

const intlMiddleware = createMiddleware(routing);

export default async function proxy(request: NextRequest) {
  const response = intlMiddleware(request);
  return updateSession(request, response);
}

export const config = {
  // Exclude /api (and _next/_vercel/static files) from locale routing —
  // API routes must never be redirected to a locale-prefixed path.
  matcher: ["/", "/(de|pl)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
