import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "pl"],
  defaultLocale: "de",
  localePrefix: "always",
  // Path-preserving Link headers would map /de/.../fleisch → /pl/.../fleisch.
  // Localized slugs are emitted via generateMetadata instead.
  alternateLinks: false,
});

export type Locale = (typeof routing.locales)[number];
