/** Single source for TMG / DSGVO operator facts (same person as configury.de). */
export const LEGAL = {
  person: "Tim Burkhardt",
  brand: "Alemniam",
  street: "Seydelstr. 16",
  postalCode: "10117",
  city: "Berlin",
  countryDe: "Deutschland",
  countryPl: "Niemcy",
  email: "hello@alemniam.de",
  updated: "2026-08-21",
} as const;

export function legalMailto() {
  return `mailto:${LEGAL.email}`;
}

export function legalAddressLines(locale: "de" | "pl") {
  return [
    LEGAL.person,
    LEGAL.street,
    `${LEGAL.postalCode} ${LEGAL.city}`,
    locale === "pl" ? LEGAL.countryPl : LEGAL.countryDe,
  ];
}
