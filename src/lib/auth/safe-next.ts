/** Allow only same-site locale paths after login (no open redirects). */
export function safeNextPath(raw: unknown, locale: string): string {
  const fallback = `/${locale}/profil`;
  if (typeof raw !== "string") return fallback;
  const path = raw.trim();
  if (path.length < 3 || path.length > 512) return fallback;
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) {
    return fallback;
  }
  if (path.includes("://") || path.includes("@")) return fallback;
  if (!/^\/(de|pl)(\/|$)/.test(path)) return fallback;
  if (/^\/(de|pl)\/(anmelden|registrieren)(\/|$)/.test(path)) return fallback;
  return path;
}
