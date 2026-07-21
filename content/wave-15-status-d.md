# Wave 15 — Status Paket D (Koperkowa + Kisiel)

Status: **READY FOR INTEGRATOR E** (Implementer D · 2026-07-21)  
Kein `SEED_VERSION`-Bump · kein Commit/Push · kein neuer Blog-Pillar · keine Family · keine Czernina.

---

## Deliverables

| Datei | Rolle |
|-------|--------|
| `src/lib/data/seed-recipes-wave15-d.ts` | `seedRecipesWave15D` — 2 Rezepte |
| `src/lib/data/recipe-articles-w15-d.ts` | `W15_FACTS_D` |
| `content/keyword-ownership.md` | +2 Primary + Intent-Trennung W15 D |
| `content/wave-15-status-d.md` | dieses Status-Doc |

**Affiliate:** guide-only (keine `relatedProductIds` auf den Rezepten).

---

## Rezepte + Cover

| ID | Slug | Cover Photo-ID | HTTP | Fit |
|----|------|----------------|:----:|-----|
| `recipe-koperkowa` | `koperkowa` | `1610725663727-08695a1ac3ff` | **200** | Helle cremige Suppe im schwarzen Topf mit **sichtbarem frischem Dill** und Croutons — Dill-Cream-Charakter. Klar ≠ goldene Rosół-Brühe, ≠ dunkelgrüne Szczawiowa, ≠ Kiszone-Gurkensuppe. |
| `recipe-kisiel` | `kisiel` | `1552503983-37e5802c2cf3` | **200** | Semi-transparente **rote Fruchtgele/-creme** im Glas mit frischen Erdbeerscheiben und Löffel — Beerenfarbe klar, pudding-/kisiel-artig. Klar ≠ dunkler Susz-Kompot mit ganzen Trockenobststücken, ≠ Kutia-Weizen. |

**Unique-Gate D:** beide Photo-IDs unbenutzt im Live-Seed-/Blog-Katalog (E final vs A/B/C).

---

## Ownership

| Primary KW DE | Owner |
|---------------|-------|
| Zupa koperkowa / Dillsuppe polnisch | `/rezepte/koperkowa` |
| Kisiel owocowy / Fruchtkisiel polnisch | `/rezepte/kisiel` |

**Abgrenzung:** Koperkowa (Dill + Kartoffel/Śmietana/Ei) ≠ Rosół ≠ Szczawiowa ≠ Botwinka ≠ Ogórkowa. Kisiel (Stärke-Fruchtcreme, Himbeer-Linie) ≠ Kompot z suszu ≠ Kutia. Polnische Suppen / Wigilia / Sonntagsessen / Polenladen bleiben Broad-/Anlass-/Kultur-/Einkauf-Owner.

---

## relatedPostIds

| Rezept | relatedPostIds |
|--------|----------------|
| koperkowa | `post-polnische-suppen`, `post-sonntagsessen`, `post-polenladen` |
| kisiel | `post-wigilia`, `post-polenladen`, `post-ersatzprodukte-de` |

---

## FACTS / Steps Gates

| Recipe | Locale | FACTS Inline-Links (unique) | R/B | Feld-Wörter ≈ | expand() |
|--------|--------|----------------------------:|-----|--------------:|----------|
| koperkowa | DE | 9 | 4/5 | ~347 | ≫400 |
| koperkowa | PL | 9 | 4/5 | ~320 | ≫400 |
| kisiel | DE | 5 | 2/3 | ~321 | ≫400 |
| kisiel | PL | 5 | 2/3 | ~324 | ≫400 |

**FACTS Inline-Ziele koperkowa DE:** rosol, szczawiowa, botwinka, ogorkowa, polnische-suppen, sonntagsessen-polnisch, polenladen-einkaufen, ersatzprodukte-de, smietana-schmand.  
**FACTS Inline-Ziele kisiel DE:** kompot-z-suszu, kutia, wigilia-speiseplan, polenladen-einkaufen, ersatzprodukte-de.

**Steps/Tips Inline-Links:** koperkowa DE **7** / PL **7**; kisiel DE **5** / PL **5** (Gate ≥2).

---

## Backlinks gesetzt (D-owned)

| Quelle | Aktion |
|--------|--------|
| `bodyPolnischeSuppenDe/Pl` | + Abschnitt Dill/Koperkowa (descriptive Cook; Overview Broad) |
| `bodyWigilia` DE (`blog-bodies-de.ts`) | Kutia-Zeile → descriptive Kisiel (≠ Kompot; Speiseplan bleibt Owner) |
| `bodyWigilia` PL (`blog-bodies-pl.ts`) | Kutia-Bullet → descriptive Kisiel |
| `recipe-kompot-z-suszu` FACTS (`recipe-articles-w11-d.ts`) | origin/mistakes/variants DE+PL → Kisiel-Abgrenzung |
| `post-polnische-suppen` `relatedRecipeIds` | + `recipe-koperkowa` |
| `post-sonntagsessen` `relatedRecipeIds` | + `recipe-koperkowa` |
| `post-wigilia` `relatedRecipeIds` | + `recipe-kisiel` |
| `post-polenladen` `relatedRecipeIds` | + `recipe-koperkowa`, `recipe-kisiel` |
| `post-ersatzprodukte-de` `relatedRecipeIds` | + `recipe-kisiel` |
| `keyword-ownership.md` | +2 Primary + Intent W15 D |

---

## Agent E — Merge Notes

1. `seedRecipesWave15D` → Aggregator `seed-recipes-wave15.ts` + Import in `seed.ts`.
2. FACTS: `import { W15_FACTS_D } from "./recipe-articles-w15-d"` + `Object.assign(FACTS, …, W15_FACTS_D)`.
3. Related-Arrays mit A/B/C **deduplizieren** (bereits additiv gesetzt).
4. Photo-IDs D gegen finale A/B/C-Liste: `1610725663727-08695a1ac3ff`, `1552503983-37e5802c2cf3`.
5. `SEED_VERSION` nur E: **28 → 29**.
6. Kein neuer Blog-Pillar · PL-Family-Routing unangetastet · keine Czernina.

---

## Gates checklist

- [x] 2 Rezepte seed + unique Unsplash covers GET 200
- [x] Visual-Fit: Dill-Cream-Soup; Frucht-Kisiel/Gelee (Status-Notiz)
- [x] FACTS ≥400 (expand) DE+PL; ≥4 Inline-Links/Locale (≥2 Rezept + ≥2 Blog)
- [x] Steps ≥2 Inline-Links/Locale
- [x] Ownership Koperkowa ≠ Rosół/Szczawiowa/Ogórkowa; Kisiel ≠ Kompot/Kutia
- [x] Backlinks polnische-suppen / wigilia / kompot FACTS
- [x] guide-only affiliate
- [x] No SEED_VERSION bump
- [x] No commit / push
- [x] Isolation: keine wave15-a|b|c Seed/FACTS überschrieben

---

## Diff-Liste für Integrator

**Neu:**
- `src/lib/data/seed-recipes-wave15-d.ts`
- `src/lib/data/recipe-articles-w15-d.ts`
- `content/wave-15-status-d.md`

**Geändert:**
- `content/keyword-ownership.md` (+2 Primary + Intent W15 D)
- `src/lib/data/recipe-articles-w11-d.ts` (Kompot FACTS → Kisiel Abgrenzung)
- `src/lib/data/blog-bodies-wave2-de.ts` / `-pl.ts` (Polnische Suppen → Koperkowa)
- `src/lib/data/blog-bodies-de.ts` / `-pl.ts` (Wigilia → Kisiel)
- `src/lib/data/seed-blog-wave2.ts` (related: polnische-suppen, sonntagsessen, ersatzprodukte → D)
- `src/lib/data/seed-blog.ts` (related: wigilia, polenladen → D)
