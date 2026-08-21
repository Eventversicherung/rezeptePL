import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { IngredientGroup, Locale, Recipe } from "@/types/content";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scaleAmount(amount: number, base: number, target: number) {
  if (base <= 0) return amount;
  return Math.round((amount * target) / base * 10) / 10;
}

export function groupLabelKey(group: IngredientGroup): string {
  const map: Record<IngredientGroup, string> = {
    produce: "groupProduce",
    dairy: "groupDairy",
    pantry: "groupPantry",
    spices: "groupSpices",
    polish: "groupPolish",
    other: "groupOther",
  };
  return map[group];
}

export function recipeHref(locale: Locale, recipe: Recipe) {
  return `/${locale}/rezepte/${recipe.translations[locale].slug}`;
}

/** Canonical production origin. Apex redirects to www. */
export const CANONICAL_SITE_URL = "https://www.alemniam.de";

function stripTrailingSlash(url: string) {
  return url.replace(/\/$/, "");
}

function hostnameOf(url: string): string | null {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

function isEphemeralHost(hostname: string) {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.endsWith(".vercel.app")
  );
}

/**
 * Public site origin used by sitemap, canonicals, robots, and IndexNow.
 * Preview stays on the Vercel URL so we never claim production. Production
 * never uses *.vercel.app — that host was leaking into the live sitemap.
 */
export function absoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  const base = siteUrl();
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function siteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL
    ? stripTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL)
    : null;
  const vercelEnv = process.env.VERCEL_ENV;

  if (vercelEnv === "preview") {
    if (configured && !isEphemeralHost(hostnameOf(configured) ?? "")) {
      return configured;
    }
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
    return configured ?? "http://localhost:3000";
  }

  if (vercelEnv === "production") {
    if (configured && !isEphemeralHost(hostnameOf(configured) ?? "")) {
      return configured;
    }
    return CANONICAL_SITE_URL;
  }

  return configured ?? "http://localhost:3000";
}
