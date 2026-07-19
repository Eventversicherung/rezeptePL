import { setRequestLocale } from "next-intl/server";

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <article className="prose prose-neutral mx-auto max-w-2xl">
      <h1 className="font-display text-3xl font-semibold">Impressum</h1>
      <p className="text-muted">
        Alemniam. Angaben gemäß § 5 TMG folgen vor Launch. Kontakt:
        hello@alemniam.local
      </p>
    </article>
  );
}
