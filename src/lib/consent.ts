export const CONSENT_COOKIE = "alemniam-consent";
export const CONSENT_VERSION = 1;
export const CONSENT_MAX_AGE = 60 * 60 * 24 * 365;
export const CONSENT_OPEN_EVENT = "alemniam-open-consent";
export const CONSENT_CHANGE_EVENT = "alemniam-consent-change";

export const CONSENT_CATEGORIES = [
  "necessary",
  "preferences",
  "analytics",
  "marketing",
] as const;

export type ConsentCategory = (typeof CONSENT_CATEGORIES)[number];

export type ConsentChoice = {
  version: number;
  updatedAt: string;
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
};

export const DEFAULT_CONSENT: ConsentChoice = {
  version: CONSENT_VERSION,
  updatedAt: "",
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
};

export function isConsentChoice(value: unknown): value is ConsentChoice {
  if (!value || typeof value !== "object") return false;
  const record = value as Partial<ConsentChoice>;
  return (
    record.version === CONSENT_VERSION &&
    record.necessary === true &&
    typeof record.preferences === "boolean" &&
    typeof record.analytics === "boolean" &&
    typeof record.marketing === "boolean"
  );
}

let cachedCookie = "";
let cachedChoice: ConsentChoice | null = null;

function consentCookieValue() {
  if (typeof document === "undefined") return "";
  return (
    document.cookie
      .split("; ")
      .find((part) => part.startsWith(`${CONSENT_COOKIE}=`))
      ?.slice(CONSENT_COOKIE.length + 1) ?? ""
  );
}

export function readConsent(): ConsentChoice | null {
  const raw = consentCookieValue();
  if (raw === cachedCookie) return cachedChoice;
  cachedCookie = raw;
  if (!raw) {
    cachedChoice = null;
    return null;
  }
  try {
    const parsed: unknown = JSON.parse(decodeURIComponent(raw));
    cachedChoice = isConsentChoice(parsed) ? parsed : null;
  } catch {
    cachedChoice = null;
  }
  return cachedChoice;
}

export function subscribeConsent(onStoreChange: () => void) {
  window.addEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
  return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
}

export const PREFERENCE_STORAGE_KEYS = ["alemniam-recipe-grid-cols"] as const;

export function writeConsent(
  next: Omit<ConsentChoice, "version" | "updatedAt" | "necessary">,
): ConsentChoice {
  const choice: ConsentChoice = {
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    necessary: true,
    preferences: next.preferences,
    analytics: next.analytics,
    marketing: next.marketing,
  };
  const value = encodeURIComponent(JSON.stringify(choice));
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${value}; Max-Age=${CONSENT_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
  cachedCookie = value;
  cachedChoice = choice;
  if (!choice.preferences) {
    PREFERENCE_STORAGE_KEYS.forEach((key) => {
      try {
        window.localStorage.removeItem(key);
      } catch {
        /* ignore */
      }
    });
  }
  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGE_EVENT, { detail: choice }),
  );
  return choice;
}

export function hasConsent(
  choice: ConsentChoice | null,
  category: ConsentCategory,
): boolean {
  if (!choice) return category === "necessary";
  return Boolean(choice[category]);
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

/** Drop partner tracking params when marketing consent is missing. */
export function affiliateHref(url: string, allowMarketing: boolean) {
  if (allowMarketing) return url;
  try {
    const parsed = new URL(url);
    [
      "tag",
      "ascsubtag",
      "linkCode",
      "linkId",
      "ref",
      "ref_",
      "campaign",
      "awc",
    ].forEach((key) => parsed.searchParams.delete(key));
    return parsed.toString();
  } catch {
    return url;
  }
}
