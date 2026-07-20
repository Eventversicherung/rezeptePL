# Wave 9 — Status Paket B (Beilage + Suppe)

Status: **SHIPPED** (merged by Integrator E · SEED 23)  
Stand: 2026-07-20

## Neue Rezepte

| ID | Slug DE/PL | Title | Cover (unique) |
|----|------------|-------|----------------|
| `recipe-salatka-jarzynowa` | `salatka-jarzynowa` | Sałatka jarzynowa | `photo-1540420773420-3366772f4999` |
| `recipe-botwinka` | `botwinka` | Botwinka | `photo-1615485290382-441e4d049cb5` |

**Ziel-URLs (nach Integrator-Merge):**

- DE: `/de/rezepte/salatka-jarzynowa`, `/de/rezepte/botwinka`
- PL: `/pl/rezepte/salatka-jarzynowa`, `/pl/rezepte/botwinka`

## Isolierte Dateien (noch nicht in seed.ts / FACTS-Map)

| Datei | Inhalt |
|-------|--------|
| `src/lib/data/seed-recipes-wave9-b.ts` | `seedRecipesWave9B` — beide Rezepte, `relatedPostIds` on-object, guide-only |
| `src/lib/data/recipe-articles-w9-b.ts` | `W9_FACTS_B` — Longform-FACTS mit Markdown-Inline-Links |

## relatedPostIds (on recipe)

| Rezept | relatedPostIds |
|--------|----------------|
| salatka-jarzynowa | `post-wielkanoc`, `post-sonntagsessen`, `post-polenladen` |
| botwinka | `post-polnische-suppen`, `post-barszcz-technik`, `post-smietana-schmand` |

## Backlinks (surgical, live files)

| Datei | Änderung |
|-------|----------|
| `seed-blog-wave2.ts` | wielkanoc += salatka + botwinka; sonntagsessen += salatka; polnische-suppen += botwinka |
| `seed-blog-w3c.ts` | barszcz-technik += botwinka |
| `blog-bodies-wave2-de.ts` | Beilagen (Salat-Absatz); Wielkanoc Menüprinzip; Suppen Vier Säulen + Saison |
| `blog-bodies-wave2-pl.ts` | Niedziela Formuła; Wielkanoc rdzeń (Salat — Babka-Absatz unangetastet); zupy Cztery kierunki |
| `blog-bodies-w3c-de.ts` / `-pl.ts` | barszcz-technik 1 Satz Abgrenzung → botwinka |
| `recipe-articles-w8-a.ts` | mizeria variants ↔ salatka |
| `recipe-articles-w8-b.ts` | ogorkowa variants → botwinka |
| `recipe-articles.ts` | barszcz + chlodnik variants → botwinka |
| `seed-recipes-wave8-a.ts` | mizeria steps tip ↔ salatka |
| `content/keyword-ownership.md` | +2 Primary + Intent-Notiz W9 B |

## Gates (B)

- [x] Kein neuer Suppen-/Blog-Pillar (bleibt `post-polnische-suppen`; Wielkanoc = Speiseplan)
- [x] Sałatka ≠ Mizeria; Botwinka ≠ Barszcz / Chłodnik / Ogórkowa
- [x] FACTS ≥4 Inline-Links/Locale (≥2 Rezept + ≥2 Blog) in `W9_FACTS_B`
- [x] Steps/Tips ≥2 Links/Locale
- [x] Unique covers; bilingual; affiliate guide-only
- [x] Ownership-Zeilen skizziert
- [x] Sonntagsessen: nur Salat-Absatz (Fleisch-Absätze A unangetastet)
- [x] Wielkanoc: Salat-Patch getrennt von Babka (C)
- [ ] SEED_VERSION / seed.ts Import / FACTS-Merge → **Agent E**

## Integrator E — Merge-Checkliste

1. `seedRecipesWave9B` in `seed-recipes-wave9.ts` Aggregator
2. `W9_FACTS_B` in `recipe-articles.ts` FACTS spreizen
3. Related-Arrays Sonntag/Wielkanoc mit A/C/D deduplizieren
4. `SEED_VERSION` 22 → 23 erst nach A+B+C+D
5. Build/Link-Audit; ein Push
