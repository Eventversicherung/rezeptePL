# Wave 9 — Status Paket A (Fleisch / Sonntag)

Status: **SHIPPED** (merged by Integrator E · SEED 23)

## Rezepte

| ID | Slug DE/PL | Cover (unique) |
|----|------------|----------------|
| `recipe-zeberka` | `zeberka` | `photo-1603360946369-dc9bb6258143` |
| `recipe-rolada-slaska` | `rolada-slaska` | `photo-1432139509613-5c4255815697` |

Affiliate: guide-only (keine `relatedProductIds` / keine recipeIds in Affiliate-Katalog).

Ownership: Rolada ≠ Zrazy (Füll-Logik / Pairing); Żeberka ≠ Gulasz (Ofen vs Eintopf); kein Clash mit Schabowy / Mielony Primary.

## Dateien (A-owned)

| Datei | Rolle |
|-------|--------|
| `src/lib/data/seed-recipes-wave9-a.ts` | Export `seedRecipesWave9A` — **E merged in seed.ts** |
| `src/lib/data/recipe-articles-w9-a.ts` | Export `W9_FACTS_A` — **E merged in FACTS** |
| `content/wave-9-status-a.md` | dieses Status-Doc |
| `content/keyword-ownership.md` | +2 Primary-KW Zeilen |

## relatedPostIds (auf Recipe-Objekt)

- **Żeberka:** `post-sonntagsessen`, `post-majeranek`, `post-polenladen`, `post-dutch-oven`
- **Rolada:** `post-sonntagsessen`, `post-dutch-oven`, `post-majeranek`, `post-kasza`

## FACTS / Longform (expand)

| ID | Locale | Inline-Links FACTS | expand-Wörter |
|----|--------|--------------------|---------------|
| zeberka | DE | 10 (≥2 Rezept + ≥2 Blog) | Template expand ≫ 400 |
| zeberka | PL | 10 | Template expand ≫ 400 |
| rolada-slaska | DE | 10 | Template expand ≫ 400 |
| rolada-slaska | PL | 10 | Template expand ≫ 400 |

FACTS-Pflichtziele: Żeberka ↔ Sonntagsessen, Majeranek, Schabowy/Gulasz, Polenladen; Rolada ↔ Sonntagsessen, Zrazy (Abgrenzung), Kluski, Dutch Oven.

Steps/Tips: je Locale ≥4 Inline-Links (≥2 Gate).

## Backlinks gesetzt

| Quelle | Aktion |
|--------|--------|
| `post-sonntagsessen` DE+PL bodies | Neuer Absatz „Sonntagsfleisch / Mięso niedzielne“ → zeberka + rolada (+ Zrazy Abgrenzung) — **Beilagen-Absatz unberührt (B)** |
| `post-sonntagsessen` `relatedRecipeIds` | + zeberka, rolada-slaska |
| `post-majeranek` DE+PL bodies | Inline → zeberka + rolada |
| `post-majeranek` `relatedRecipeIds` | + beide |
| `post-dutch-oven` DE+PL bodies | Inline → rolada (Schmoren) |
| `post-dutch-oven` `relatedRecipeIds` | + rolada-slaska |
| `recipe-zrazy` steps DE+PL (`seed-recipes-wave5.ts`) | Abgrenzung → rolada |
| `recipe-kluski-slaskie` steps DE+PL (`seed.ts`) | Pairing → rolada |
| `recipe-schabowy` steps DE+PL (`seed.ts`) | Nachbar → zeberka |

**Nicht** geändert: Haupt-`FACTS`-Map in `recipe-articles.ts`; kein Import in `seed.ts`; kein `SEED_VERSION`.

## E muss noch

1. `seedRecipesWave9A` via Aggregator `seed-recipes-wave9.ts` → `seed.ts` mergen
2. `W9_FACTS_A` in `recipe-articles.ts` FACTS übernehmen
3. `relatedPostIds`-Map / Blog `relatedRecipeIds` Hotspots dedupen (Sonntag mit B/D)
4. `SEED_VERSION` 22 → 23
5. Docs final + ein Push
