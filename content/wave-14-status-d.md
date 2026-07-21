# Wave 14 — Status Paket D (Leczo)

Status: **READY FOR INTEGRATOR E** (Implementer D · 2026-07-21)  
Kein `SEED_VERSION`-Bump · kein Commit/Push · kein neuer Blog-Pillar · keine Family · keine Kaczka.

---

## Deliverables

| Datei | Rolle |
|-------|--------|
| `src/lib/data/seed-recipes-wave14-d.ts` | `seedRecipesWave14D` — 1 Rezept |
| `src/lib/data/recipe-articles-w14-d.ts` | `W14_FACTS_D` |
| `content/keyword-ownership.md` | +1 Primary + Intent-Trennung W14 D |
| `content/wave-14-status-d.md` | dieses Status-Doc |

**Affiliate:** guide-only (keine `relatedProductIds` auf dem Rezept).

---

## Rezept + Cover

| ID | Slug | Cover Photo-ID | HTTP | Fit |
|----|------|----------------|:----:|-----|
| `recipe-leczo` | `leczo` | `1596797038530-2c107229654b` | **200** | **Paprika-Tomaten-Eintopf (Integrator E Swap):** Skillet mit leuchtend orange-roter Paprika-/Tomaten-Sauce, sichtbaren Gemüsewürfeln und frischen Kräutern — Gemüse-dominant, hell. Klar ≠ dunkler Beef-Gulasch-Only, ≠ Bigos-Krauttopf, ≠ Fasolka-Bohnen. (Alt `1745817095847…` war zu „Asian breakfast skillet“ / Fleisch-Ei-lastig.) |

**Unique-Gate D:** Photo-ID unbenutzt im Live-Seed-Katalog (E final vs A/B/C).

---

## Ownership

| Primary KW DE | Owner |
|---------------|-------|
| Leczo / Paprikagemüse polnisch | `/rezepte/leczo` |

**Abgrenzung:** Leczo (Paprika + Zwiebel + Tomate ± Kiełbasa) ≠ Gulasz wieprzowy (Schweine-Würfel-Schmor-Primary) ≠ Bigos ≠ Fasolka. Sonntagsessen / Polenladen / Kiełbasa-Arten / Majeranek bleiben Kultur-/Einkauf-/Lexikon-Owner.

---

## relatedPostIds

| Rezept | relatedPostIds |
|--------|----------------|
| leczo | `post-sonntagsessen`, `post-polenladen`, `post-kielbasa-arten`, `post-majeranek` |

---

## FACTS / Steps Gates

| Recipe | Locale | FACTS Inline-Links (unique) | R/B | Feld-Wörter ≈ | expand() |
|--------|--------|----------------------------:|-----|--------------:|----------|
| leczo | DE | 7 unique | 3/4 | ~296 | ≫400 |
| leczo | PL | 7 unique | 3/4 | ~307 | ≫400 |

**FACTS Inline-Ziele DE:** gulasz-wieprzowy, bigos, fasolka-po-bretonsku, sonntagsessen-polnisch, polenladen-einkaufen, kielbasa-arten, majeranek.  
**FACTS Inline-Ziele PL:** gulasz-wieprzowy, bigos, fasolka-po-bretonsku, obiad-niedzielny, sklep-polski-zakupy, rodzaje-kielbasy, majeranek-leksykon.

**Steps/Tips Inline-Links:** DE **7**, PL **7** (Gate ≥2).

---

## Backlinks gesetzt (D-owned)

| Quelle | Aktion |
|--------|--------|
| `recipe-gulasz` FACTS (`recipe-articles.ts`) | origin/technique/mistakes/variants DE+PL → descriptive `/rezepte/leczo` (Gulasz bleibt Schmor-Primary) |
| `bodySonntagsessenDe/Pl` | Sonntagsfleisch-Absatz → descriptive Leczo-Cook |
| `bodyPolenladenDe` | Kielbasa/Meal-Prep → Leczo-Cook |
| `bodyPolenladenPl` | Kiełbasa-Bullet → Leczo-Cook |
| `post-sonntagsessen` `relatedRecipeIds` | + `recipe-leczo` |
| `post-polenladen` `relatedRecipeIds` | + `recipe-leczo` |
| `post-kielbasa-arten` `relatedRecipeIds` | + `recipe-leczo` |
| `post-majeranek` `relatedRecipeIds` | + `recipe-leczo` |
| `keyword-ownership.md` | +1 Primary + Intent W14 D |

---

## Stichprobe Covers A/B/C

| Paket | Quelle | Photo-IDs (Stichprobe) | GET |
|-------|--------|------------------------|:---:|
| A | `seed-recipes-wave14-a.ts` | `1536749605762-e7445a2d43ec`, `1609099724543-937e6493fcd0` | **200** / **200** |
| B | `seed-recipes-wave14-b.ts` | `1541690325738-d4ba017004b6`, `1626895597772-74988e263fab` | **200** / **200** |
| C | — | Seed/Status noch nicht vorhanden | n/a |

→ Keine fremden Photo-IDs überschrieben. Finale Cover-ID (E): `1596797038530-2c107229654b` unique vs A/B/C/Live.

---

## Agent E — Merge Notes

1. `seedRecipesWave14D` → Aggregator `seed-recipes-wave14.ts` + Import in `seed.ts`.
2. FACTS: `import { W14_FACTS_D } from "./recipe-articles-w14-d"` + `Object.assign(FACTS, …, W14_FACTS_D)`.
3. Related-Arrays (`post-sonntagsessen`, `post-polenladen`, `post-kielbasa-arten`, `post-majeranek`) mit A/B/C **deduplizieren** (bereits additiv gesetzt).
4. Photo-ID D gegen finale A/B/C-Liste: `1596797038530-2c107229654b` (E Swap).
5. `SEED_VERSION` nur E: **27 → 28**.
6. Kein neuer Blog-Pillar · Gulasz-Primary unangetastet (nur descriptive Abgrenzung).

---

## Gates checklist

- [x] 1 Rezept seed + unique Unsplash cover GET 200
- [x] Visual-Fit: Paprika-Tomaten-Eintopf mit Wurst/Ei (Status-Notiz)
- [x] FACTS ≥400 (expand) DE+PL; ≥4 Inline-Links/Locale (≥2 Rezept + ≥2 Blog)
- [x] Steps ≥2 Inline-Links/Locale
- [x] Ownership Leczo ≠ Gulasz ≠ Bigos ≠ Fasolka
- [x] Backlinks Gulasz FACTS / Sonntagsessen / Polenladen
- [x] guide-only affiliate
- [x] No SEED_VERSION bump
- [x] No commit / push
- [x] Isolation: keine wave14-a|b|c Seed/FACTS überschrieben

---

## Diff-Liste für Integrator

**Neu:**
- `src/lib/data/seed-recipes-wave14-d.ts`
- `src/lib/data/recipe-articles-w14-d.ts`
- `content/wave-14-status-d.md`

**Geändert:**
- `content/keyword-ownership.md` (+1 Primary + Intent W14 D)
- `src/lib/data/recipe-articles.ts` (Gulasz FACTS → Leczo Abgrenzung)
- `src/lib/data/blog-bodies-wave2-de.ts` (Sonntagsessen → Leczo)
- `src/lib/data/blog-bodies-wave2-pl.ts` (Sonntagsessen → Leczo)
- `src/lib/data/blog-bodies-de.ts` (Polenladen → Leczo)
- `src/lib/data/blog-bodies-pl.ts` (Polenladen → Leczo)
- `src/lib/data/seed-blog-wave2.ts` (related: sonntagsessen, kielbasa-arten → leczo)
- `src/lib/data/seed-blog.ts` (related: polenladen → leczo)
- `src/lib/data/seed-blog-w5.ts` (related: majeranek → leczo)
