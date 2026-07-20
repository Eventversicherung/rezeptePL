# Wave 10 — Status Paket B (Piernik + Zupa pomidorowa)

Status: **SHIPPED** (merged by Integrator E · 2026-07-20)

## Neue Rezepte

| ID | Slug DE/PL | Title | Cover (unique) |
|----|------------|-------|----------------|
| `recipe-piernik` | `piernik` | Piernik | `photo-1606313564200-e75d5e30476c` |
| `recipe-zupa-pomidorowa` | `zupa-pomidorowa` | Zupa pomidorowa | `photo-1548943487-a2e4e43b485c` |

**Ziel-URLs (nach Integrator-Merge):**

- DE: `/de/rezepte/piernik`, `/de/rezepte/zupa-pomidorowa`
- PL: `/pl/rezepte/piernik`, `/pl/rezepte/zupa-pomidorowa`

## Isolierte Dateien (noch nicht in seed.ts / FACTS-Map)

| Datei | Inhalt |
|-------|--------|
| `src/lib/data/seed-recipes-wave10-b.ts` | `seedRecipesWave10B` — beide Rezepte, `relatedPostIds` on-object, guide-only |
| `src/lib/data/recipe-articles-w10-b.ts` | `W10_FACTS_B` — Longform-FACTS mit Markdown-Inline-Links |

## relatedPostIds (on recipe)

| Rezept | relatedPostIds |
|--------|----------------|
| piernik | `post-wigilia`, `post-makowiec-technik`, `post-polenladen` |
| zupa-pomidorowa | `post-polnische-suppen`, `post-smietana-schmand`, `post-sonntagsessen` |

## Backlinks (surgical, live files)

| Datei | Änderung |
|-------|----------|
| `seed-blog.ts` | wigilia `relatedRecipeIds` += piernik |
| `seed-blog-wave2.ts` | polnische-suppen += zupa-pomidorowa; smietana += zupa-pomidorowa |
| `seed-blog-w6.ts` | makowiec-technik += piernik |
| `blog-bodies-de.ts` / `-pl.ts` | Wigilia Speiseplan → piernik (süß-Slot) |
| `blog-bodies-wave2-de.ts` / `-pl.ts` | **eigener** Pomidorowa-Absatz nach Flaki (A unangetastet); smietana → pomidorowa |
| `blog-bodies-w6-de.ts` / `-pl.ts` | Makowiec-Technik Abgrenzung → piernik |
| `recipe-articles-w8-d-retrofit.ts` | makowiec + sernik variants → piernik |
| `recipe-articles-w9-c.ts` | babka variants → piernik |
| `content/keyword-ownership.md` | +2 Primary + Intent-Notiz W10 B |

## Gates (B)

- [x] Kein neuer Blog-Pillar; Makowiec-Technik nur descriptive Back-Nachbar
- [x] Piernik Primary nur `/rezepte/piernik`; Makowiec/Sernik/Babka unangetastet (nur Abgrenzung)
- [x] SEO eng: „Zupa pomidorowa“ / „polnische Tomatensuppe“ — kein generisches „beste Tomatensuppe“
- [x] Pomidorowa ≠ Barszcz / Ogórkowa / Rosół-Primary; Overview bleibt Broad-Owner
- [x] FACTS ≥4 Inline-Links/Locale (≥2 Rezept + ≥2 Blog); expand ≫400 Wörter
- [x] Steps/Tips ≥2 Links/Locale
- [x] Unique covers; bilingual; affiliate guide-only
- [x] polnische-suppen: Pomidorowa-Absatz getrennt von A-Flaki
- [ ] SEED_VERSION / seed.ts Import / FACTS-Merge / Aggregator → **Agent E**

## Integrator E — Merge-Checkliste

1. `seedRecipesWave10B` in `seed-recipes-wave10.ts` Aggregator (wie W9)
2. `W10_FACTS_B` in `recipe-articles.ts` FACTS spreizen (`...W10_FACTS_B`)
3. Related-Arrays polnische-suppen / wigilia / smietana / makowiec-technik mit A/C/D deduplizieren
4. `SEED_VERSION` 23 → 24 erst nach A+B+C+D
5. Build/Link-Audit; ein Push

## Konflikt-Hotspot

`post-polnische-suppen`: A = Flaki-Absatz (bereits live); B = Pomidorowa-Absatz (direkt danach). Related: beide IDs — E dedupt falls Doppelpatch.
