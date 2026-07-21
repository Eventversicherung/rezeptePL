# Blog ↔ Rezept Audit

Stand: 2026-07-21 · Regeln: [`blog-recipe-silo-rules.md`](./blog-recipe-silo-rules.md) · SEED nach Cleanup: siehe `store.ts` (`SEED_VERSION` 33)

## Summary counts

| Klasse | Count |
|--------|------:|
| KEEP | 24 |
| TRIM/REWRITE | 4 |
| MERGE→RECIPE | 2 |
| HOLD/DEPRECATE | 0 |
| **Total** | **36** |

> MERGE→RECIPE = Koch-Teile gehören aufs Rezept; Post bleibt als Slim-Kultur/Technik-Hub (nicht sofort löschen). HOLD erst nach Slim + GSC.
> TRIM/REWRITE Rest = Posts, die noch Padding/FAQ-Duplikate haben können (nicht dieser Batch).

## High-priority (Batch 1 — done)

| Post | Action taken |
|------|----------------|
| `post-nalesniki-guide` | Body DE/PL rewritten: Cook → Rezepte; Mengen/Schritte raus; Kultur + Varianten + Fehler über Varianten |
| `post-golabki-guide` | Body DE/PL slim: Kochschritte gekürzt; Sauce/Batch/Kultur behalten; Rezept als Cook-Owner |
| `post-fasolka-guide` | SEO-Jargon raus; Intro → Rezept; Einkauf/Würze behalten |
| `post-placki-guide` | Owner-Jargon raus; Cook-Pointer verstärkt |
| Ownership | Dish-named „… Rezept (broad)“ → Rezept-URLs (nicht Blog) |
| FACTS | Naleśniki: unique Teig-/Freezer-Tipps aus Guide ergänzt |

## High-priority (Batch 2 — done)

| Post | Action taken |
|------|----------------|
| `post-pierogi-guide` | Hub/Kultur: Mengen/Kochschritte/FAQ-Padding raus; Varianten-Matrix + Cook → Rezepte |
| `post-bigos-guide` | Wiederholte FAQ/Duplikat-Blöcke killen; Schicht/Einkauf/Säure/Kultur behalten |
| `post-rosol-technik` | Nur Unique-Technik (Klarheit, Zwiebel-Farbe, Reste); Mengen → Rezept |
| `post-barszcz-technik` | Klarheit/Wigilia/Einkauf behalten; Kochliste raus; Cook → Rezept |
| `post-placki-guide` | Weiter slim: vs. Reibekuchen + Fehler über Varianten; Braten-Mengen raus |
| `post-fasolka-guide` | Rest-Padding (PL) entfernt |
| FACTS | Rosół: Zwiebel-Anrösten; Bigos: Säure-Korrektur in mistakes |
| Ownership | Rosół/Barszcz Cook → Rezept; Blog = Technik (nicht Cook) |

## Full table

| post id | title (DE) | class | action | related recipe ids | notes |
|---------|------------|-------|--------|--------------------|-------|
| post-pierogi-teig | Pierogi-Teig | KEEP | none | pierogi family | Technik-über-Varianten; legitimer Teig-Owner |
| post-teigmaschine | Teigmaschine Kaufberatung | KEEP | none | pierogi family | Gear |
| post-twarog | Twaróg in Deutschland | KEEP | none | pierogi, nalesniki, … | Einkauf/Zutat |
| post-polenladen | Polenladen vs REWE | KEEP | none | many | Diaspora-Shopping |
| post-wigilia | Wigilia Speiseplan | KEEP | none | wigilia set | Anlass |
| post-pierogi-guide | Pierogi-Guide | TRIM/REWRITE | **done (batch 2)** | pierogi family | Kultur/Varianten-Hub; Cook auf Varianten-Rezepte |
| post-freezer-meal-prep | Pierogi einfrieren | KEEP | none | pierogi family | Freezer-Technik (nicht Koch-Rezept) |
| post-pierogi-formen | Pierogi-Formen 2026 | KEEP | none | pierogi family | Gear |
| post-polnische-suppen | Polnische Suppen | KEEP | none | soup recipes | Overview über Gerichte |
| post-rosol-technik | Rosół richtig kochen | TRIM/REWRITE | **done (batch 2)** | recipe-rosol | Unique Technik; Cook → Rezept |
| post-zakwas-zurek | Zakwas für Żurek | KEEP | none | recipe-zurek | Spezial-Technik vor dem Cook |
| post-bigos-guide | Bigos-Guide | TRIM/REWRITE | **done (batch 2)** | recipe-bigos | Schicht/Einkauf/Kultur; FAQ-Padding weg |
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
| post-golabki-guide | Gołąbki-Guide | MERGE→RECIPE | **done (slim)** | recipe-golabki | Kultur/Sauce/Batch → Cook auf Rezept |
| post-nalesniki-guide | Naleśniki-Guide | MERGE→RECIPE | **done (rewrite)** | nalesniki family + krokiety | Kultur/Varianten-Hub |
| post-oscypek | Oscypek in Deutschland | KEEP | none | recipe-oscypek | Einkauf/PDO/Lexikon |
| post-freezer-boxen | Freezer-Boxen Kaufberatung | KEEP | none | pierogi family | Gear |
| post-ferment-glaeser | Fermentier-Gläser | KEEP | none | kiszenie-related | Gear |
| post-kasza | Kasza Buchweizen | KEEP | none | golabki, … | Zutaten-Lexikon |
| post-panieren | Panieren Schabowy | KEEP | none | recipe-schabowy | Technik (Panade) |
| post-barszcz-technik | Barszcz klar kochen | TRIM/REWRITE | **done (batch 2)** | recipe-barszcz | Unique Klarheit/Wigilia; Cook → Rezept |
| post-placki-guide | Placki-Guide | TRIM/REWRITE | **done (batch 2)** | placki family | Kultur + Fehler; Cook → Rezept |
| post-faworki-technik | Faworki-Technik | KEEP | none | recipe-faworki | Technik-Pillar (Fett/Teig) |
| post-fasolka-guide | Fasolka Guide | TRIM/REWRITE | **done (batch 2)** | recipe-fasolka | Einkauf/Würze; Padding weg |
| post-majeranek | Majeranek Lexikon | KEEP | none | many | Gewürz-Lexikon |
| post-makowiec-technik | Makowiec-Technik | KEEP | none | recipe-makowiec | Back-Technik |
| post-paczek-technik | Pączki-Technik | KEEP | none | recipe-paczki | Hefe/Frittier-Technik |

## Next batch (empfohlen)

1. Wave-2 DE Bodies mit generischem FAQ-Padding (`Wir bleiben praxisnah…`) außerhalb dieses Batches — z. B. Freezer, Formen, Zakwas, Śmietana — weiter trimmen wenn GSC/Cannibalization es verlangt
2. PL `dopracujPrzewodnik`-Anhänge an KEEP-Posts (Suppen, Zakwas, …) optional kürzen
3. GSC: nach 2–4 Wochen Cannibalization-Queries für Pierogi/Bigos/Rosół/Barszcz/Naleśniki/Gołąbki prüfen
4. Ownership-Rest: Guide-KW klar als Kultur/Technik, nie als „X Rezept“

## Wave 15 note

Wave 15 (+8 Rezepte) kann separat weiterlaufen / gemerged werden. Dieser Audit ändert primär Blog-Bodies + Ownership + FACTS — nicht den Wave-15-Aggregator.
