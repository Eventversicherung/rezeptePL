# Batch W3a — Shared Briefs (DE+PL parallel)

Prozess: 6 Writer (3×DE + 3×PL) aus **diesem** Brief → 1 Bild-Agent → 1 Chef → 1 Push.

Übersetzungsweg: **kein** 1:1. Beide Sprachen schreiben denselben Beitrag aus dem Brief (gleiche H2-Themen, Entities, FAQ-Fragen). PL = natürliche Diaspora-Stimme in DE. Chef prüft Struktur-Parität.

## Post A — Gołąbki Pillar

| | DE | PL |
|--|----|----|
| id | `post-golabki-guide` | same |
| slug | `golabki-guide` | `golabki-przewodnik` |
| type | guide | |
| owner KW | Gołąbki Rezept (broad) | gołąbki przepis |
| related recipes | recipe-golabki, recipe-rosol, recipe-bigos | |
| related posts | post-sonntagsessen, post-dutch-oven, post-smietana-schmand, post-rosol-technik | |
| cover motiv | Kohlrouladen / stuffed cabbage in pot | |

**H2 Pflicht (Reihenfolge):**
1. Was Gołąbki sind (Entity, 1. Screen)
2. Kohl vorbereiten (blanchieren, Adern)
3. Füllung: Reis, Fleisch, Gewürze — Fehler
4. Rollen & schichten im Topf
5. Sauce: Tomate vs. Rosół-Rest vs. Śmietana
6. Varianten (vegetarisch, Buchweizen) kurz
7. Batch & Freezer
8. FAQ (4–6, „wir“/„my“)
9. Weiterlesen (interne Links)

Wortzahl ≥1100. Externe Trust-Links 3–5 (BZfE, NCEZ, EU).

## Post B — Naleśniki Pillar

| | DE | PL |
|--|----|----|
| id | `post-nalesniki-guide` | same |
| slug | `nalesniki-guide` | `nalesniki-przewodnik` |
| type | guide | |
| owner KW | Naleśniki Rezept / Pfannkuchen polnisch | naleśniki przepis |
| related recipes | recipe-nalesniki, recipe-pierogi | |
| related posts | post-twarog, post-smietana-schmand, post-ersatzprodukte-de | |
| cover motiv | rolled crepes / naleśniki with filling | |

**H2 Pflicht:**
1. Was Naleśniki sind vs. deutsche Pfannkuchen
2. Teig: dünn, ruhen, Mehl in DE
3. Braten: Pfanne, Fett, erste Crêpe-Regel
4. Füllung süß (Twaróg) vs. herzhaft
5. Aufrollen, anbraten, servieren
6. Meal-Prep / einfrieren
7. FAQ
8. Weiterlesen

Wortzahl ≥1100. Nicht Owner von Twaróg-KW (nur Link).

## Post C — Oscypek Lexikon

| | DE | PL |
|--|----|----|
| id | `post-oscypek` | same |
| slug | `oscypek-deutschland` | `oscypek-w-niemczech` |
| type | lexicon | |
| owner KW | Oscypek kaufen Deutschland | oscypek Niemcy |
| related recipes | recipe-oscypek, recipe-placki | |
| related posts | post-gusseisen, post-polenladen, post-ersatzprodukte-de | |
| cover motiv | smoked sheep cheese / grill cheese | |

**H2 Pflicht:**
1. Was Oscypek ist (PDO/Schutz kurz ehrlich)
2. Echt vs. „Oscypek-ähnlich“ im DE-Laden
3. Grillen / Pfanne (Gusseisen-Link)
4. Beilagen: Preiselbeere, Speck, Brot
5. Lagerung & Ersatz
6. FAQ
7. Weiterlesen

Wortzahl ≥1100. Kein Folklore-Kitsch.

## Interne Link-Map

| DE path | PL path |
|---------|---------|
| `/de/rezepte/golabki` | `/pl/rezepte/golabki` (check live PL slug) |
| `/de/rezepte/nalesniki-twarog` or actual | check seed |
| `/de/rezepte/oscypek` | check seed |
| `/de/blog/sonntagsessen-polnisch` | `/pl/blog/obiad-niedzielny` |
| `/de/blog/dutch-oven-kaufberatung` | `/pl/blog/garnek-do-duszenia` |
| `/de/blog/twarog-deutschland` | `/pl/blog/twarog-w-niemczech` |
| `/de/blog/gusseisenpfanne` | `/pl/blog/patelnia-zelivna` |
| `/de/blog/polenladen-einkaufen` | `/pl/blog/sklep-polski-zakupy` |

Writer: vor dem Schreiben echte Slugs in `seed.ts` / `seed-blog*.ts` nachschlagen.
