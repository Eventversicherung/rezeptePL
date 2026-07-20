# Wave 9 — Status Paket D (Kaszanka + W8 FACTS-Audit)

Status: **SHIPPED** (merged by Integrator E · SEED 23)  
Owner: Implementer D · 2026-07-20

---

## Deliverables

| Datei | Rolle |
|-------|--------|
| `src/lib/data/seed-recipes-wave9-d.ts` | `seedRecipesWave9D` — nur `recipe-kaszanka` |
| `src/lib/data/recipe-articles-w9-d.ts` | `W9_FACTS_D` (Kaszanka, Markdown-Inline-Links) |
| `src/lib/data/recipe-articles-w9-d-retrofit.ts` | `W9_FACTS_W8_RETROFIT` — Audit OK; optional Kapusta↔Kaszanka Pairing |
| `content/keyword-ownership.md` | +1 Primary: Kaszanka Rezept → `/rezepte/kaszanka` |
| `content/wave-9-status-d.md` | dieses Status-Doc |

**Affiliate:** guide-only (keine `relatedProductIds` / keine recipeIds im Affiliate-Katalog).

---

## Rezept

| ID | Slug DE/PL | Cover (unique) |
|----|------------|----------------|
| `recipe-kaszanka` | `kaszanka` | `photo-1558030006-450675393462` |

**Ownership:** Cook-Primary „Kaszanka Rezept“. Types/Lexikon bleibt `post-kielbasa-arten`. Kein Flaki/Piernik.

**relatedPostIds (auf Recipe-Objekt):**
`post-kielbasa-arten`, `post-polenladen`, `post-sonntagsessen`, `post-majeranek`

---

## FACTS / Steps Gates (Kaszanka)

| Locale | FACTS Inline-Links | davon Rezept / Blog | FACTS-Feld-Wörter (≈) | expand() gesamt |
|--------|-------------------:|---------------------|----------------------:|-----------------|
| DE | 10 | 4 / 6 | ~307 | ≫400 (Template + Felder) |
| PL | 10 | 4 / 6 | ~305 | ≫400 |

**FACTS Inline-Ziele:** kielbasa-arten, polenladen, majeranek, sonntagsessen, kapusta-zasmażana, bigos.

**Steps/Tips Inline-Links:** DE **5**, PL **5** (≥2 Gate).

---

## Wave-8 FACTS Link-Audit

Gemessen an W8-Quellen (`recipe-articles-w8-a|b|c|d.ts`); Kapusta nach optionalem Retrofit.

Gate: ≥4 Markdown-Links `/de|pl/...` pro Locale, davon ≥2 Rezept + ≥2 Blog.

| Recipe ID | Links DE | Links PL | R/B DE | R/B PL | Status |
|-----------|---------:|---------:|--------|--------|--------|
| `recipe-mizeria` | 10 | 10 | 5/5 | 5/5 | **already green** |
| `recipe-kapusta-zasmażana` | 10 | 10 | 6/4 | 6/4 | **green** (+ optional Kaszanka-Pairing in Retrofit) |
| `recipe-ogorkowa` | 13 | 13 | 6/7 | 6/7 | **already green** |
| `recipe-kapusniak` | 14 | 14 | 6/8 | 6/8 | **already green** |
| `recipe-paczki` | 16 | 16 | 5/11 | 5/11 | **already green** |
| `recipe-knedle-sliwki` | 8 | 8 | 3/5 | 3/5 | **already green** |

**Result:** 0 IDs under gate. Kein Gap-Fill nötig; Retrofit enthält nur Kapusta-Nachbar-Backlink.

---

## Backlinks gesetzt (D-owned)

| Quelle | Aktion |
|--------|--------|
| `bodyKielbasaArtenDe/Pl` | Absatz **Types vs Cook** → `/rezepte/kaszanka` |
| `post-kielbasa-arten` `relatedRecipeIds` | + `recipe-kaszanka` |
| `bodyPolenladenDe/Pl` | Inline → kaszanka (Types-Trennung) |
| `post-polenladen` `relatedRecipeIds` | + `recipe-kaszanka` |
| `bodySonntagsessenDe/Pl` | Eigener Absatz **Schnelle Pfanne / Szybka patelnia** (nicht A-Fleisch / B-Salat überschreiben) |
| `post-sonntagsessen` `relatedRecipeIds` | + `recipe-kaszanka` (E dedupt mit A/B) |
| `bodyMajeranekDe/Pl` | Silo-Liste + kaszanka (descriptiv) |
| `post-majeranek` `relatedRecipeIds` | + `recipe-kaszanka` |
| Kapusta FACTS (Retrofit) | Pairing → kaszanka |

---

## Agent E — Merge Notes

1. `seedRecipesWave9D` → Aggregator `seed-recipes-wave9.ts` (neben A/B/C).
2. FACTS: `Object.assign(FACTS, …, W9_FACTS_W8_RETROFIT, W9_FACTS_D)` — Retrofit vor D; Kapusta-Key überschreibt W8-A FACTS mit Pairing-Links.
3. `seed.ts`: Import + ggf. `relatedPostIds`-Override für kaszanka (bereits auf Recipe-Objekt).
4. Sonntagsessen / Wielkanoc / Majeranek Related-Arrays mit A/B/C **deduplizieren**.
5. `SEED_VERSION` nur E: 22 → 23.
6. Kein neuer Blog-Pillar; Kielbasa-Arten Primary unangetastet.

---

## Gates checklist

- [x] Kaszanka published seed + unique Unsplash cover
- [x] FACTS ≥400 (expand) DE+PL; ≥4 Inline-Links/Locale (≥2 Rezept + ≥2 Blog)
- [x] Steps ≥2 Inline-Links/Locale
- [x] Intent klar ≠ Kielbasa-Arten-Lexikon
- [x] W8-Audit 6 IDs × DE+PL dokumentiert (all green)
- [x] guide-only affiliate
- [x] No Flaki/Piernik
- [x] No SEED_VERSION bump
- [x] No commit / push

---

## Diff-Liste für Integrator

**Neu:**
- `src/lib/data/seed-recipes-wave9-d.ts`
- `src/lib/data/recipe-articles-w9-d.ts`
- `src/lib/data/recipe-articles-w9-d-retrofit.ts`
- `content/wave-9-status-d.md`

**Geändert:**
- `content/keyword-ownership.md` (+ Kaszanka Primary)
- `src/lib/data/blog-bodies-wave2-de.ts` (kielbasa Types-vs-Cook; sonntagsessen Pfanne)
- `src/lib/data/blog-bodies-wave2-pl.ts` (dito)
- `src/lib/data/blog-bodies-de.ts` / `-pl.ts` (polenladen → kaszanka)
- `src/lib/data/blog-bodies-w5-de.ts` / `-pl.ts` (majeranek Silo-Link)
- `src/lib/data/seed-blog-wave2.ts` (relatedRecipeIds kielbasa + sonntagsessen)
- `src/lib/data/seed-blog.ts` (polenladen relatedRecipeIds)
- `src/lib/data/seed-blog-w5.ts` (majeranek relatedRecipeIds)
