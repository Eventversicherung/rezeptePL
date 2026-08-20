import { NextResponse } from "next/server";
import { searchRecipeSuggestions } from "@/lib/search/suggestions";
import {
  SEARCH_QUERY_MAX,
  SEARCH_RESULT_LIMIT,
  type SearchHit,
} from "@/lib/search/types";
import type { Locale } from "@/types/content";

function parseLocale(value: string | null): Locale | null {
  if (value === "de" || value === "pl") return value;
  return null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = parseLocale(searchParams.get("locale"));
  if (!locale) {
    return NextResponse.json({ error: "Invalid locale." }, { status: 400 });
  }

  const raw = (searchParams.get("q") ?? "").slice(0, SEARCH_QUERY_MAX);
  if (raw.trim().length < 2) {
    return NextResponse.json({ hits: [] as SearchHit[] });
  }

  const hits = await searchRecipeSuggestions(locale, raw, SEARCH_RESULT_LIMIT);
  return NextResponse.json(
    { hits },
    {
      headers: {
        "Cache-Control": "public, s-maxage=30, stale-while-revalidate=120",
      },
    },
  );
}
