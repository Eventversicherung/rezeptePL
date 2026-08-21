import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { noIndexFollow } from "@/lib/seo/alternates";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: noIndexFollow,
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <article className="mx-auto max-w-2xl space-y-4">
      <h1 className="font-display text-3xl font-semibold">Datenschutz</h1>
      <p className="text-muted">
        Wir speichern Kontodaten und gespeicherte Rezepte/Listen nur für die
        App-Funktion. Vollständige Datenschutzerklärung folgt vor Production.
        Keine Weitergabe an Liefernetzwerke ohne ausdrückliche Zustimmung.
      </p>
    </article>
  );
}
