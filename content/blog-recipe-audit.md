# Blog ↔ Rezept Audit

Stand: 2026-07-21 · Regeln: [`blog-recipe-silo-rules.md`](./blog-recipe-silo-rules.md) · SEED nach Cleanup: siehe `store.ts`

## Summary counts

| Klasse | Count |
|--------|------:|
| KEEP | 24 |
| TRIM/REWRITE | 10 |
| MERGE→RECIPE | 2 |
| HOLD/DEPRECATE | 0 |
| **Total** | **36** |

> MERGE→RECIPE = Koch-Teile gehören aufs Rezept; Post bleibt als Slim-Kultur/Technik-Hub (nicht sofort löschen). HOLD erst nach Slim + GSC.

## High-priority (dieser Batch)

| Post | Action taken |
|------|----------------|
| `post-nalesniki-guide` | Body DE/PL rewritten: Cook → Rezepte; Mengen/Schritte raus; Kultur + Varianten + Fehler über Varianten |
| `post-golabki-guide` | Body DE/PL slim: Kochschritte gekürzt; Sauce/Batch/Kultur behalten; Rezept als Cook-Owner |
| `post-fasolka-guide` | SEO-Jargon raus; Intro → Rezept; Einkauf/Würze behalten |
| `post-placki-guide` | Owner-Jargon raus; Cook-Pointer verstärkt |
| Ownership | Dish-named „… Rezept (broad)“ → Rezept-URLs (nicht Blog) |
| FACTS | Naleśniki: unique Teig-/Freezer-Tipps aus Guide ergänzt |

## Full table

| post id | title (DE) | class | action | related recipe ids | notes |
|---------|------------|-------|--------|--------------------|-------|
| post-pierogi-teig | Pierogi-Teig | KEEP | none | pierogi family | Technik-über-Varianten; legitimer Teig-Owner |
| post-teigmaschine | Teigmaschine Kaufberatung | KEEP | none | pierogi family | Gear |
| post-twarog | Twaróg in Deutschland | KEEP | none | pierogi, nalesniki, … | Einkauf/Zutat |
| post-polenladen | Polenladen vs REWE | KEEP | none | many | Diaspora-Shopping |
| post-wigilia | Wigilia Speiseplan | KEEP | none | wigilia set | Anlass |
| post-pierogi-guide | Pierogi-Guide | TRIM/REWRITE | next batch | pierogi family | Hub ok, aber Mengen/Kochschritte + FAQ-Padding; Cook → Varianten-Rezepte |
| post-freezer-meal-prep | Pierogi einfrieren | KEEP | none | pierogi family | Freezer-Technik (nicht Koch-Rezept) |
| post-pierogi-formen | Pierogi-Formen 2026 | KEEP | none | pierogi family | Gear |
| post-polnische-suppen | Polnische Suppen | KEEP | none | soup recipes | Overview über Gerichte |
| post-rosol-technik | Rosół richtig kochen | TRIM/REWRITE | next batch | recipe-rosol | Technik-Pillar; Mengen/Schritte prüfen vs Rezept-Longform |
| post-zakwas-zurek | Zakwas für Żurek | KEEP | none | recipe-zurek | Spezial-Technik vor dem Cook |
| post-bigos-guide | Bigos-Guide | TRIM/REWRITE | next batch | recipe-bigos | Schicht-Logik ok; FAQ-Padding + Koch-Duplikat slim |
| post-smietana-schmand | Śmietana / Schmand | KEEP | none | many | Zutaten-Lexikon |
| post-kielbasa-arten | Kiełbasa-Arten | KEEP | none | zurek, bigos, … | Lexikon/Einkauf |
| post-ersatzprodukte-de | Ersatzprodukte DE | KEEP | none | many | Diaspora |
| post-wielkanoc | Wielkanoc Speiseplan | KEEP | none | easter set | Anlass |
| post-tlusty-czwartek | Tłusty Czwartek | KEEP | none | paczki, faworki | Anlass |
| post-sonntagsessen | Polnisches Sonntagsessen | KEEP | none | many | Kultur/Speiseplan |
| post-kiszenie | Kiszenie zu Hause | KEEP | none | kapusta, ogorki… | Ferment-Technik |
| post-fleischwolf | Fleischwolf Kaufberatung | KEEP | none | mielony, … | Gear |
| post-dutch-oven | Dutch Oven Kaufberatung | KEEP | none | bigos, golabki | Gear |
| post-gusseisen | Gusseisenpfanne | KEEP | none | schabowy, placki, oscypek | Gear |
| post-golabki-guide | Gołąbki-Guide | MERGE→RECIPE | **done (slim)** | recipe-golabki | War Cook-Mirror; jetzt Kultur/Sauce/Batch → Cook auf Rezept |
| post-nalesniki-guide | Naleśniki-Guide | MERGE→RECIPE | **done (rewrite)** | nalesniki family + krokiety | War Teig+Schritte-Mirror; jetzt Kultur/Varianten-Hub |
| post-oscypek | Oscypek in Deutschland | KEEP | none | recipe-oscypek | Einkauf/PDO/Lexikon |
| post-freezer-boxen | Freezer-Boxen Kaufberatung | KEEP | none | pierogi family | Gear |
| post-ferment-glaeser | Fermentier-Gläser | KEEP | none | kiszenie-related | Gear |
| post-kasza | Kasza Buchweizen | KEEP | none | golabki, … | Zutaten-Lexikon |
| post-panieren | Panieren Schabowy | KEEP | none | recipe-schabowy | Technik (Panade) |
| post-barszcz-technik | Barszcz klar kochen | TRIM/REWRITE | next batch | recipe-barszcz | Technik vs Rezept-Longform prüfen |
| post-placki-guide | Placki-Guide | TRIM/REWRITE | **partial** | placki family | Jargon raus; weitere Slim optional |
| post-faworki-technik | Faworki-Technik | KEEP | none | recipe-faworki | Technik-Pillar (Fett/Teig) |
| post-fasolka-guide | Fasolka Guide | TRIM/REWRITE | **partial** | recipe-fasolka | Jargon + Padding; Cook → Rezept |
| post-majeranek | Majeranek Lexikon | KEEP | none | many | Gewürz-Lexikon |
| post-makowiec-technik | Makowiec-Technik | KEEP | none | recipe-makowiec | Back-Technik |
| post-paczek-technik | Pączki-Technik | KEEP | none | recipe-paczki | Hefe/Frittier-Technik |

## Next batch (empfohlen)

1. `post-pierogi-guide` — Hub behalten, Koch-Mengen und FAQ-Padding raus; Varianten-Matrix + Links
2. `post-bigos-guide` — Schicht/Fehler/Einkauf behalten; wiederholte FAQ-Blöcke killen
3. `post-rosol-technik` + `post-barszcz-technik` — nur Unique-Technik behalten; Mengen auf Rezept
4. `post-placki-guide` / `post-fasolka-guide` — Rest-Padding und residual cook steps
5. Ownership-Rest: „Guide“-KW klar als Kultur/Technik, nie als „X Rezept“
6. GSC: nach 2–4 Wochen Cannibalization-Queries für Naleśniki/Gołąbki prüfen

## Wave 15 note

Wave 15 (+8 Rezepte) kann separat weiterlaufen / gemerged werden. Dieser Audit ändert primär Blog-Bodies + Ownership + Naleśniki-FACTS — nicht den Wave-15-Aggregator.
