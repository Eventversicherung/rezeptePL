# Blog ↔ Rezept Audit

Stand: 2026-07-21 · Regeln: [`blog-recipe-silo-rules.md`](./blog-recipe-silo-rules.md) · SEED nach Cleanup: siehe `store.ts` (`SEED_VERSION` 34)

## Summary counts

| Klasse | Count |
|--------|------:|
| KEEP | 34 |
| TRIM/REWRITE | 0 |
| MERGE→RECIPE | 2 |
| HOLD/DEPRECATE | 0 |
| **Total** | **36** |

> MERGE→RECIPE = Koch-Teile gehören aufs Rezept; Post bleibt als Slim-Kultur/Technik-Hub (nicht sofort löschen). HOLD erst nach Slim + GSC.
> TRIM/REWRITE Rest = **0** (Batch 2 + Batch 3 Padding/Jargon erledigt). Offen nur noch GSC-Beobachtung.

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

## High-priority (Batch 3 — done)

| Post | Action taken |
|------|----------------|
| `post-freezer-meal-prep` | DE FAQ-Filler + Duplikat-H2 (Gefrierbrand/Beschriftung) raus |
| `post-pierogi-formen` | DE FAQ-Padding (`Wir bleiben praxisnah…` / Kauf-Filler) raus |
| `post-polnische-suppen` | DE/PL SEO-Jargon (Cook-Primary/Broad-Owner/Money Page) → Leser-Sprache; PL `dopracujPrzewodnik` weg |
| `post-zakwas-zurek` | DE FAQ-Filler raus; PL Appendix weg |
| `post-smietana-schmand` | DE FAQ-Filler raus; PL Appendix weg |
| `post-kielbasa-arten` | Owner/„Primary stehlen“-Jargon raus; PL Appendix weg |
| `post-ersatzprodukte-de` | FAQ-Padding getrimmt; PL Appendix weg |
| `post-wielkanoc` | cook-intent/Owner-Jargon raus; PL Appendix weg |
| `post-tlusty-czwartek` | Faworki-Owner-Jargon raus; PL Appendix weg |
| `post-sonntagsessen` | DE/PL Kultur-Owner/Cook-Primary/Speiseplan-Steal → Leser-Sprache; PL Appendix weg |
| `post-kiszenie` | FAQ-Padding getrimmt; PL Appendix weg |
| Wave-2 DE gesamt | Generisches FAQ-Filler + wiederholte Padding-Absätze entfernt |
| Wave-2 PL KEEP | Alle `dopracujPrzewodnik(…)`-Anhänge entfernt (keine Placeholder-Appendices) |
| SEED | `SEED_VERSION` 33 → 34 |

## Full table

| post id | title (DE) | class | action | related recipe ids | notes |
|---------|------------|-------|--------|--------------------|-------|
| post-pierogi-teig | Pierogi-Teig | KEEP | none | pierogi family | Technik-über-Varianten; legitimer Teig-Owner |
| post-teigmaschine | Teigmaschine Kaufberatung | KEEP | none | pierogi family | Gear |
| post-twarog | Twaróg in Deutschland | KEEP | none | pierogi, nalesniki, … | Einkauf/Zutat |
| post-polenladen | Polenladen vs REWE | KEEP | none | many | Diaspora-Shopping |
| post-wigilia | Wigilia Speiseplan | KEEP | none | wigilia set | Anlass |
| post-pierogi-guide | Pierogi-Guide | KEEP | **done (batch 2)** | pierogi family | Kultur/Varianten-Hub; Cook auf Varianten-Rezepte |
| post-freezer-meal-prep | Pierogi einfrieren | KEEP | **done (batch 3)** | pierogi family | Freezer-Technik; FAQ-Padding weg |
| post-pierogi-formen | Pierogi-Formen 2026 | KEEP | **done (batch 3)** | pierogi family | Gear; FAQ-Padding weg |
| post-polnische-suppen | Polnische Suppen | KEEP | **done (batch 3)** | soup recipes | Overview; Jargon + PL-Appendix weg |
| post-rosol-technik | Rosół richtig kochen | KEEP | **done (batch 2)** | recipe-rosol | Unique Technik; Cook → Rezept |
| post-zakwas-zurek | Zakwas für Żurek | KEEP | **done (batch 3)** | recipe-zurek | Spezial-Technik; FAQ/Appendix weg |
| post-bigos-guide | Bigos-Guide | KEEP | **done (batch 2)** | recipe-bigos | Schicht/Einkauf/Kultur; FAQ-Padding weg |
| post-smietana-schmand | Śmietana / Schmand | KEEP | **done (batch 3)** | many | Zutaten-Lexikon; FAQ/Appendix weg |
| post-kielbasa-arten | Kiełbasa-Arten | KEEP | **done (batch 3)** | zurek, bigos, … | Lexikon/Einkauf; Jargon/Appendix weg |
| post-ersatzprodukte-de | Ersatzprodukte DE | KEEP | **done (batch 3)** | many | Diaspora; Padding/Appendix weg |
| post-wielkanoc | Wielkanoc Speiseplan | KEEP | **done (batch 3)** | easter set | Anlass; Jargon/Appendix weg |
| post-tlusty-czwartek | Tłusty Czwartek | KEEP | **done (batch 3)** | paczki, faworki | Anlass; Jargon/Appendix weg |
| post-sonntagsessen | Polnisches Sonntagsessen | KEEP | **done (batch 3)** | many | Kultur/Speiseplan; Jargon/Appendix weg |
| post-kiszenie | Kiszenie zu Hause | KEEP | **done (batch 3)** | kapusta, ogorki… | Ferment-Technik; Padding/Appendix weg |
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
| post-barszcz-technik | Barszcz klar kochen | KEEP | **done (batch 2)** | recipe-barszcz | Unique Klarheit/Wigilia; Cook → Rezept |
| post-placki-guide | Placki-Guide | KEEP | **done (batch 2)** | placki family | Kultur + Fehler; Cook → Rezept |
| post-faworki-technik | Faworki-Technik | KEEP | none | recipe-faworki | Technik-Pillar (Fett/Teig) |
| post-fasolka-guide | Fasolka Guide | KEEP | **done (batch 2)** | recipe-fasolka | Einkauf/Würze; Padding weg |
| post-majeranek | Majeranek Lexikon | KEEP | none | many | Gewürz-Lexikon |
| post-makowiec-technik | Makowiec-Technik | KEEP | none | recipe-makowiec | Back-Technik |
| post-paczek-technik | Pączki-Technik | KEEP | none | recipe-paczki | Hefe/Frittier-Technik |

## Next (remaining = GSC only)

1. GSC: nach 2–4 Wochen Cannibalization-Queries für Pierogi/Bigos/Rosół/Barszcz/Naleśniki/Gołąbki prüfen
2. Ownership-Rest intern: Guide-KW klar als Kultur/Technik, nie als „X Rezept“ (nur in `keyword-ownership.md`, nicht user-facing)
3. Optional später: ältere Wave-Bodies außerhalb Wave-2 (w5/w6/w8 Gear/Technik) auf Voice-Rules prüfen — **nicht** Teil dieses Silo-TRIM-Rests

## Wave 15 note

Wave 15 (+8 Rezepte) kann separat weiterlaufen / gemerged werden. Dieser Audit ändert primär Blog-Bodies + Ownership + FACTS — nicht den Wave-15-Aggregator.
