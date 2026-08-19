# Rezept-Überarbeitung — Batch-Tracking

Ziel: Jedes Rezept bekommt dieselbe Qualitätsbehandlung wie `recipe-zapiekanka` (Referenz-Pilot,
fertig am 2026-08-20):

- Keine Gedankenstriche („—") irgendwo in Excerpt, Schritten, Tipps, Zutaten-Ersatz, FACTS/Artikel.
  En-Gedankenstrich bei Zahlenspannen ("10–12 Minuten") ist ok, nur „—" als Satz-Pause ist verboten.
- Schritte: vollständige Sätze mit Kommata, jeder Schritt möglichst mit einem echten, hilfreichen Tipp.
- Tipps/Artikel-Links immer als natürlicher Satz eingebettet, nie als „Label: [Link]"-Dump.
- „Mehr über dieses Gericht" (FACTS in `recipe-articles*.ts`): echte Herkunft/Geschichte, warum der
  Geschmack so entsteht, worauf man achten muss, plus echte Zubereitungs-Varianten (nicht generisch).
- Polnische Übersetzung eigenständig formuliert, keine deutschen Lehnübersetzungen.
- Verifikation je Rezept: `npm run gate:reader-copy` (keine Treffer mehr für diese ID),
  `getRecipeArticle` ≥ 400 Wörter/Locale mit ≥ 4 Markdown-Links/Locale, `npx tsc --noEmit` sauber.

Nach jedem fertigen Batch: `SEED_VERSION` in `src/lib/data/store.ts` hochzählen (einmal am Ende des
gesamten Batches reicht, nicht pro Rezept), damit lokale/Vercel-Stores neu aus den Seeds laden.

## Wichtig: Datei-Kollisionen vermeiden

Mehrere Rezepte teilen sich große Dateien (`src/lib/data/seed.ts`, `src/lib/data/recipe-articles.ts`,
`seed-blog-w3a/b/c.ts`, `seed-blog-w5.ts`). Batches, die dieselbe Datei anfassen, dürfen **nicht**
parallel laufen (Race-Risiko bei gleichzeitigem Schreiben). Batches mit eigenen `wave-XX-Y`-Dateien
sind untereinander unabhängig und dürfen parallel laufen.

## Status

| Batch | Rezepte | Seed-Datei(en) | FACTS-Datei(en) | Status |
|---|---|---|---|---|
| Pilot | zapiekanka | seed-recipes-wave14-c.ts | recipe-articles-w14-c.ts | ✅ fertig |
| W8 | mizeria, kapusta-zasmażana, ogorkowa, kapusniak, paczki, knedle-sliwki | seed-recipes-wave8-{a,b,c,d}.ts | recipe-articles-w8-{a,b,c,d}.ts | ⏳ Agent fff372f9 |
| W9 | zeberka, rolada-slaska, salatka-jarzynowa, botwinka, babka, kaszanka | seed-recipes-wave9-{a,b,c,d}.ts | recipe-articles-w9-{a,b,c,d}.ts | ⏳ Agent 4ecd67df |
| W10 | flaki, schab-pieczony, piernik, zupa-pomidorowa, nalesniki-dzem, pierogi-jagody, makaron-z-serem | seed-recipes-wave10-{a,b,c,d}.ts | recipe-articles-w10-{a,b,c,d}.ts | ⏳ Agent a6e9ab66 |
| W11 | golonka, kompot-z-suszu, ryba-po-grecku | seed-recipes-wave11-d.ts | recipe-articles-w11-d.ts | ⏳ Agent 8f39b140 |
| W12 | zupa-grzybowa, grochowka, makaron-z-makiem, szarlotka, mazurek, buraczki, klopsy, kluski-kladzione | seed-recipes-wave12-{a,b,c,d}.ts | recipe-articles-w12-{a,b,c,d}.ts | ⏳ Agent 436497c9 |
| W13 | krupnik, szczawiowa, kutia, napoleonka, chalka, pasztet, biala-kielbasa | seed-recipes-wave13-{a,b,c,d}.ts | recipe-articles-w13-{a,b,c,d}.ts | ⬜ offen |
| W14-Rest | wuzetka, drozdzowka, jajka-faszerowane, cwikla, placek-po-wegiersku, leczo | seed-recipes-wave14-{a,b,c,d}.ts | recipe-articles-w14-{a,b,c,d}.ts | ⬜ offen |
| W15 | kaczka, pieczen-rzymska, galareta, salatka-sledziowa, marchewka-groszek, fasolka-szparagowa, koperkowa, kisiel | seed-recipes-wave15-{a,b,c,d}.ts | recipe-articles-w15-{a,b,c,d}.ts | ⬜ offen |
| W16 | surowka, de-volaille, kasza-gryczana, tatar, pierniczki, knedle-truskawki, chrzan, kurczak-pieczony | seed-recipes-wave16-{a,b,c,d}.ts | recipe-articles-w16-{a,b,c,d}.ts | ⬜ offen |
| W17 | ogorki-kiszone, ogorki-malosolne, kapusta-kiszona, czosnek-kiszony, grzyby-marynowane, papryka-konserwowa, sliwki-w-occie, cebulka-marynowana, kalafior-w-occie, buraki-w-occie | seed-recipes-wave17.ts | recipe-articles-w17.ts (falls vorhanden, sonst passendes FACTS-File suchen) | ⬜ offen (neu entdeckt, war nicht in Erstplan) |
| Mega-A | pierogi-leniwe, kopytka, lazanki, pyzy, zrazy | seed-recipes-wave5.ts | recipe-articles.ts | ⬜ offen (teilt recipe-articles.ts) |
| Mega-B | makowiec, uszka, karp, krokiety, sernik, sledz | seed-recipes-wave6.ts, wave7.ts | recipe-articles.ts | ⬜ offen (teilt recipe-articles.ts) |
| Mega-C | pierogi, golabki, oscypek, placki, nalesniki, rosol, bigos, nalesniki-mieso, nalesniki-szpinak | seed-blog-w3a.ts | recipe-articles.ts | ⬜ offen (teilt recipe-articles.ts) |
| Mega-D | zurek, pierogi-meat, pierogi-cabbage, barszcz, schabowy, gulasz, kotlet-mielony, placki-cukinia, placki-ser, placki-jablka | seed-blog-w3b.ts, w3c.ts | recipe-articles.ts | ⬜ offen (teilt recipe-articles.ts) |
| Mega-E | fasolka, faworki, racuchy, kluski-slaskie, chlodnik | seed-blog-w5.ts, seed.ts (inline) | recipe-articles.ts | ⬜ offen (teilt recipe-articles.ts) |

Mega-A bis Mega-E teilen sich alle `recipe-articles.ts` — diese Batches nacheinander abarbeiten,
nicht parallel zueinander (auch wenn sie parallel zu den W8–W16-Batches laufen dürfen, da die
Seed-Dateien unabhängig sind).

**Gesamt: 105 Rezepte (inkl. Wave 17, nachträglich entdeckt) · 1 fertig (zapiekanka) · Rest in den Batches oben.**

## Entscheidung (2026-08-20, mit User abgestimmt)

Datei-Struktur (Legacy-Monolith `seed.ts` + `recipe-articles.ts`, 35 Rezepte) wird **nicht** mechanisch
umgebaut. Grund: Die eigentliche strukturelle Lösung ist die geplante Supabase-Migration
(`content/supabase-cms-plan.md`), danach ist jedes Rezept ohnehin eine eigene DB-Zeile. Ein
TS-Datei-Refactor jetzt wäre doppelte Arbeit. Die Mega-A bis Mega-E Batches werden daher inhaltlich
wie geplant überarbeitet, nur **sequenziell statt parallel** (gemeinsame Datei-Race vermeiden).
Supabase-Migration wird nach Abschluss aller Content-Batches als eigenes Projekt besprochen.
