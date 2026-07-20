# Wave 10 — Status Paket A (Flaki + Schab pieczony)

Status: **SHIPPED** (merged by Integrator E · 2026-07-20)

## Rezepte

| ID | Slug DE/PL | Cover (unique) |
|----|------------|----------------|
| `recipe-flaki` | `flaki` | `photo-1559847844-5315695dadae` |
| `recipe-schab-pieczony` | `schab-pieczony` | `photo-1588168333986-5078d3ae3976` |

Affiliate: **guide-only** (keine `relatedProductIds` / keine recipeIds in Affiliate-Katalog).

Ownership:
- Flaki ≠ Barszcz / Żurek / Ogórkowa / Botwinka (Kutteln + Majeranek)
- Schab pieczony ≠ Kotlet schabowy (Ofenbraten vs Panade/Pfanne); Titel nie „Schabowy“

## Dateien (A-owned)

| Datei | Rolle |
|-------|--------|
| `src/lib/data/seed-recipes-wave10-a.ts` | Export `seedRecipesWave10A` |
| `src/lib/data/recipe-articles-w10-a.ts` | Export `W10_FACTS_A` |
| `content/wave-10-status-a.md` | dieses Status-Doc |
| `content/keyword-ownership.md` | +2 Primary-KW Zeilen (+ Intent-Notiz W10 A) |

## relatedPostIds (auf Recipe-Objekt)

- **Flaki:** `post-polnische-suppen`, `post-majeranek`, `post-polenladen`, `post-sonntagsessen`
- **Schab pieczony:** `post-sonntagsessen`, `post-majeranek`, `post-dutch-oven`, `post-polenladen`

## FACTS / Longform (expand)

| ID | Locale | Inline-Links FACTS | expand-Wörter |
|----|--------|--------------------|---------------|
| flaki | DE | ≥8 (≥2 Rezept + ≥2 Blog) | Template expand ≫ 400 |
| flaki | PL | ≥8 | Template expand ≫ 400 |
| schab-pieczony | DE | ≥8 (≥2 Rezept + ≥2 Blog) | Template expand ≫ 400 |
| schab-pieczony | PL | ≥8 | Template expand ≫ 400 |

FACTS-Pflichtziele: Flaki ↔ polnische-suppen, majeranek, polenladen, Suppen-Abgrenzung; Schab ↔ sonntagsessen, schabowy (Abgrenzung), mizeria/salatka, majeranek.

Steps/Tips: je Locale ≥4 Inline-Links (≥2 Gate).

## Backlinks gesetzt

| Quelle | Aktion |
|--------|--------|
| `post-polnische-suppen` DE+PL bodies | Neuer Absatz „Flaki“ — **Pomidorowa-Absatz für B freigelassen** |
| `post-polnische-suppen` `relatedRecipeIds` | + `recipe-flaki` |
| `post-sonntagsessen` DE+PL bodies | Schab pieczony in „Sonntagsfleisch / Mięso niedzielne“ |
| `post-sonntagsessen` `relatedRecipeIds` | + `recipe-schab-pieczony` |
| `post-majeranek` DE+PL bodies | Inline → flaki + schab-pieczony |
| `post-majeranek` `relatedRecipeIds` | + beide |
| `recipe-schabowy` steps DE+PL (`seed.ts`) | Abgrenzung → schab-pieczony |
| `recipe-zeberka` steps DE+PL (`seed-recipes-wave9-a.ts`) | optional Fleisch-Nachbar → schab-pieczony |

**Nicht** geändert: Haupt-`FACTS`-Map in `recipe-articles.ts`; kein Import in `seed.ts` Aggregator; kein `SEED_VERSION`; keine Paket-B/C/D-Dateien; kein Family-Patch.

## E muss noch

1. Aggregator `seed-recipes-wave10.ts` (wie W9) → `seedRecipesWave10A` einhängen → `seed.ts`
2. `W10_FACTS_A` in `recipe-articles.ts` FACTS übernehmen (Links erhalten)
3. `relatedPostIds`-Map / Blog `relatedRecipeIds` Hotspots dedupen (polnische-suppen mit B; sonntagsessen mit B/D)
4. `SEED_VERSION` 23 → 24
5. Docs final + ein Push
