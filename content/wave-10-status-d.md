# Wave 10 — Status Paket D (Makaron z serem + W9 FACTS-Audit)

Status: **SHIPPED** (merged by Integrator E · 2026-07-20)

---

## Deliverables

| Datei | Rolle |
|-------|--------|
| `src/lib/data/seed-recipes-wave10-d.ts` | `seedRecipesWave10D` — nur `recipe-makaron-z-serem` |
| `src/lib/data/recipe-articles-w10-d.ts` | `W10_FACTS_D` (Makaron, Markdown-Inline-Links) |
| `src/lib/data/recipe-articles-w10-d-retrofit.ts` | `W10_FACTS_W9_RETROFIT` — W9-Audit OK; Leniwe+Łazanki Pairing |
| `content/keyword-ownership.md` | +1 Primary: Makaron z serem → `/rezepte/makaron-z-serem` |
| `content/wave-10-status-d.md` | dieses Status-Doc |

**Affiliate:** guide-only (keine `relatedProductIds` / keine recipeIds im Affiliate-Katalog).

---

## Rezept

| ID | Slug DE/PL | Cover (unique) |
|----|------------|----------------|
| `recipe-makaron-z-serem` | `makaron-z-serem` | `photo-1473093295043-cdd812d0e601` |

**Ownership:** Cook-Primary „Makaron z serem“. ≠ Pierogi leniwe / Łazanki / Kopytka / Knedle. Twaróg-Guide bleibt Zutaten-Owner.

**relatedPostIds (auf Recipe-Objekt):**
`post-twarog`, `post-ersatzprodukte-de`, `post-polenladen`

---

## FACTS / Steps Gates (Makaron)

| Locale | FACTS Inline-Links | davon Rezept / Blog | FACTS-Feld-Wörter (≈) | expand() gesamt |
|--------|-------------------:|---------------------|----------------------:|-----------------|
| DE | 15 | 8 / 7 | ~337 | ≫400 (Template + Felder) |
| PL | 15 | 8 / 7 | ~329 | ≫400 |

**FACTS Inline-Ziele:** twarog, polenladen, ersatzprodukte, pierogi-leniwe, lazanki, kopytka.

**Steps/Tips Inline-Links:** DE **4**, PL **4** (≥2 Gate).

---

## Wave-9 FACTS Link-Audit

Gemessen an W9-Quellen (`recipe-articles-w9-a|b|c|d.ts`).

Gate: ≥4 Markdown-Links `/de|pl/...` pro Locale, davon ≥2 Rezept + ≥2 Blog.

| Recipe ID | Links DE | Links PL | R/B DE | R/B PL | Status |
|-----------|---------:|---------:|--------|--------|--------|
| `recipe-zeberka` | 10 | 10 | 4/6 | 4/6 | **already green** |
| `recipe-rolada-slaska` | 10 | 10 | 5/5 | 5/5 | **already green** |
| `recipe-salatka-jarzynowa` | 13 | 13 | 5/8 | 5/8 | **already green** |
| `recipe-botwinka` | 16 | 16 | 8/8 | 8/8 | **already green** |
| `recipe-babka` | 21 | 21 | 10/11 | 10/11 | **already green** |
| `recipe-kaszanka` | 10 | 10 | 4/6 | 4/6 | **already green** |

**Result:** 0 IDs under gate. Kein W9 Gap-Fill nötig.

**Retrofit Inhalt:** volle ArticleFacts-Replacement für `recipe-pierogi-leniwe` + `recipe-lazanki` (W8-Basis + descriptive Abgrenzung → makaron-z-serem). Keine Ownership-Umschreibung.

---

## Backlinks gesetzt (D-owned)

| Quelle | Aktion |
|--------|--------|
| `bodyTwarogDe` | Abschnitt **Makaron z serem** → `/rezepte/makaron-z-serem` (+ Abgrenzung Leniwe/Łazanki) |
| `bodyTwarogPl` | Inline unter „Inne domowe użycia“ → makaron-z-serem |
| `post-twarog` `relatedRecipeIds` | + `recipe-makaron-z-serem` |
| `bodyErsatzprodukteDe` | Twaróg-Absatz → makaron-z-serem |
| `bodyErsatzproduktePl` | Twaróg-Satz → makaron-z-serem |
| `post-ersatzprodukte-de` `relatedRecipeIds` | + `recipe-makaron-z-serem` |
| Leniwe / Łazanki FACTS (Retrofit) | Pairing → makaron-z-serem |

---

## Agent E — Merge Notes

1. `seedRecipesWave10D` → Aggregator `seed-recipes-wave10.ts` (neben A/B/C).
2. FACTS: `Object.assign(FACTS, …, W10_FACTS_W9_RETROFIT, W10_FACTS_D)` — Retrofit vor D; Leniwe/Łazanki Keys überschreiben W8-Retrofit mit Makaron-Pairing.
3. `seed.ts`: Import + ggf. `relatedPostIds`-Override (bereits auf Recipe-Objekt).
4. Twaróg / Ersatzprodukte Related-Arrays mit anderen Paketen **deduplizieren**.
5. `SEED_VERSION` nur E: 23 → 24.
6. Kein neuer Blog-Pillar; kein Lane-Kluski; Family-Dateien unangetastet.

---

## Gates checklist

- [x] Makaron z serem published seed + unique Unsplash cover
- [x] FACTS ≥400 (expand) DE+PL; ≥4 Inline-Links/Locale (≥2 Rezept + ≥2 Blog)
- [x] Steps ≥2 Inline-Links/Locale
- [x] Intent klar ≠ Leniwe / Łazanki / Knedle / Kopytka
- [x] W9-Audit 6 IDs × DE+PL dokumentiert (all green)
- [x] guide-only affiliate
- [x] No Lane-Kluski parallel
- [x] No SEED_VERSION bump
- [x] No commit / push

---

## Diff-Liste für Integrator

**Neu:**
- `src/lib/data/seed-recipes-wave10-d.ts`
- `src/lib/data/recipe-articles-w10-d.ts`
- `src/lib/data/recipe-articles-w10-d-retrofit.ts`
- `content/wave-10-status-d.md`

**Geändert:**
- `content/keyword-ownership.md` (+ Makaron Primary + Intent-Trennung D)
- `src/lib/data/blog-bodies-de.ts` (twarog → makaron)
- `src/lib/data/blog-bodies-pl.ts` (twarog → makaron)
- `src/lib/data/blog-bodies-wave2-de.ts` (ersatzprodukte Twaróg → makaron)
- `src/lib/data/blog-bodies-wave2-pl.ts` (ersatzprodukte → makaron)
- `src/lib/data/seed-blog.ts` (post-twarog relatedRecipeIds)
- `src/lib/data/seed-blog-wave2.ts` (post-ersatzprodukte-de relatedRecipeIds)
