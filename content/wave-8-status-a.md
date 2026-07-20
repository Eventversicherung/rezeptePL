# Wave 8 — Status Paket A (Beilagen)

Status: **ready for Integrator E** · kein Commit · kein Push · kein `SEED_VERSION`-Bump

## Rezepte

| ID | Slug DE/PL | Cover (unique) |
|----|------------|----------------|
| `recipe-mizeria` | `mizeria` | `photo-1604977042946-4fba4c5ec4a2` |
| `recipe-kapusta-zasmażana` | `kapusta-zasmażana` | `photo-1518977676601-b53f82aba655` |

Affiliate: guide-only (keine `relatedProductIds` / keine recipeIds in Affiliate-Katalog).

## Dateien (A-owned)

| Datei | Rolle |
|-------|--------|
| `src/lib/data/seed-recipes-wave8-a.ts` | Export `seedRecipesWave8A` — **E merged in seed.ts** |
| `src/lib/data/recipe-articles-w8-a.ts` | Export `W8_FACTS_A` — **E merged in FACTS** |
| `content/wave-8-status-a.md` | dieses Status-Doc |
| `content/keyword-ownership.md` | +2 Primary-KW Zeilen |

## relatedPostIds (auf Recipe-Objekt)

- **Mizeria:** `post-sonntagsessen`, `post-smietana-schmand`, `post-wielkanoc`, `post-panieren`
- **Kapusta:** `post-kiszenie`, `post-sonntagsessen`, `post-kielbasa-arten`, `post-majeranek`

## FACTS / Longform (expand)

| ID | Locale | Inline-Links FACTS | expand-Wörter (geschätzt) |
|----|--------|--------------------|---------------------------|
| mizeria | DE | 9 (≥2 Rezept + ≥2 Blog) | ~1065 |
| mizeria | PL | 9 | ~1000+ (Template analog) |
| kapusta-zasmażana | DE | 8 | ~1044 |
| kapusta-zasmażana | PL | 8 | ~1000+ |

Steps/Tips: je Locale **4** Inline-Links (≥2 Gate).

## Backlinks gesetzt

| Quelle | Aktion |
|--------|--------|
| `post-sonntagsessen` DE+PL bodies | Inline → mizeria + kapusta |
| `post-sonntagsessen` `relatedRecipeIds` | + beide |
| `post-wielkanoc` DE+PL bodies | Inline → mizeria |
| `post-wielkanoc` `relatedRecipeIds` | + mizeria |
| `post-panieren` DE+PL bodies | Inline → mizeria |
| `post-panieren` `relatedRecipeIds` | + mizeria |
| `post-smietana-schmand` DE+PL bodies | Inline → mizeria |
| `post-smietana-schmand` `relatedRecipeIds` | + mizeria |
| `post-kiszenie` DE+PL bodies | Inline → kapusta-zasmażana (neben B-Suppen-Links) |
| `post-kiszenie` `relatedRecipeIds` | + kapusta-zasmażana |
| `recipe-schabowy` steps DE+PL (`seed.ts`) | Inline → mizeria + kapusta |

**Nicht** geändert: Haupt-`FACTS`-Map in `recipe-articles.ts` (Konfliktvermeidung; Schabowy-Backlink über Steps).

## E muss noch

1. `seedRecipesWave8A` in `seed.ts` importieren / mergen
2. `W8_FACTS_A` in `recipe-articles.ts` FACTS übernehmen
3. ggf. `relatedPostIds`-Map in seed-withRelated konsolidieren (bereits auf Objekten gesetzt)
4. `SEED_VERSION` 21 → 22
5. Docs final + ein Push
