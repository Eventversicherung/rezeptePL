import { setRequestLocale } from "next-intl/server";

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
