# Wave 11 — Status Paket D (+3 Rezepte)

Status: **READY FOR INTEGRATOR E** (Implementer D · 2026-07-21)  
Kein `SEED_VERSION`-Bump · kein Commit/Push · kein Photo-Retrofit A–C.

---

## Deliverables

| Datei | Rolle |
|-------|--------|
| `src/lib/data/seed-recipes-wave11-d.ts` | `seedRecipesWave11D` — 3 Rezepte |
| `src/lib/data/recipe-articles-w11-d.ts` | `W11_FACTS_D` |
| `content/keyword-ownership.md` | +3 Primary + Intent-Trennung W11 D |
| `content/wave-11-status-d.md` | dieses Status-Doc |

**Affiliate:** guide-only (keine `relatedProductIds` auf den Rezepten).

---

## Rezepte + Covers

| ID | Slug | Cover Photo-ID | HTTP | Fit |
|----|------|----------------|:----:|-----|
| `recipe-ryba-po-grecku` | `ryba-po-grecku` | `1476224203421-9ac39bcb3327` | 200 | Gebratene Weißfischfilets auf Teller (europäisch). Exakte Karotten-Sauce-Optik auf Unsplash nicht gefunden — bewusst Filet-Intent ≠ Karp/ganzer Fisch/Lachs-Steak. Unique vs. Live-Seeds. |
| `recipe-golonka` | `golonka` | `1601768474144-5b4f2738266e` | 200 | Knusprige Schweinshaxe mit Beilagen — starker Fit. |
| `recipe-kompot-z-suszu` | `kompot-z-suszu` | `1534336294469-f77e4c59ada6` | 200 | Karaffe mit Fruchtkompot — Getränk-Intent. (Susz-Markt als Alternative dokumentiert, nicht gewählt.) |

**Unique-Gate D:** alle 3 IDs unbenutzt in bestehenden Seed-Covers (Stand vor A–C-Patches).

---

## Ownership

| Primary KW DE | Owner |
|---------------|-------|
| Ryba po grecku / Fisch griechische Art polnisch | `/rezepte/ryba-po-grecku` |
| Golonka / Haxe polnisch geschmort | `/rezepte/golonka` |
| Kompot z suszu / Trockenobstkompot | `/rezepte/kompot-z-suszu` |

**Abgrenzung:** Ryba ≠ Karp; Golonka ≠ Kotlet schabowy / Schab pieczony / Żeberka; Kompot ≠ Wigilia-Pillar-Steal.

---

## relatedPostIds

| Rezept | relatedPostIds |
|--------|----------------|
| ryba-po-grecku | `post-wigilia`, `post-polenladen`, `post-ersatzprodukte-de` |
| golonka | `post-sonntagsessen`, `post-majeranek`, `post-polenladen`, `post-dutch-oven` |
| kompot-z-suszu | `post-wigilia`, `post-polenladen`, `post-ersatzprodukte-de` |

---

## FACTS / Steps Gates

| Recipe | Locale | FACTS Inline-Links | R/B | Feld-Wörter ≈ | expand() |
|--------|--------|-------------------:|-----|--------------:|----------|
| ryba-po-grecku | DE | 14 | 7/7 | ~380 | ≫400 |
| ryba-po-grecku | PL | 14 | 7/7 | ~333 | ≫400 |
| golonka | DE | 17 | 9/8 | ~308 | ≫400 |
| golonka | PL | 17 | 9/8 | ~275 | ≫400 |
| kompot-z-suszu | DE | 14 | 6/8 | ~328 | ≫400 |
| kompot-z-suszu | PL | 14 | 6/8 | ~286 | ≫400 |

**Steps/Tips Inline-Links:** ryba DE/PL **5**; golonka DE/PL **7**; kompot DE/PL **5** (Gate ≥2).

---

## Backlinks gesetzt (D-owned)

| Quelle | Aktion |
|--------|--------|
| `bodyWigiliaDe` | Fisch-Liste + Kompot → ryba-po-grecku / kompot-z-suszu; Timeline-Hinweis |
| `bodyWigiliaPl` | Kompot + ryba po grecku Links |
| `post-wigilia` `relatedRecipeIds` | + `recipe-ryba-po-grecku`, `recipe-kompot-z-suszu` |
| `bodySonntagsessenDe` | Sonntagsfleisch → golonka |
| `bodySonntagsessenPl` | mięso niedzielne → golonka |
| `post-sonntagsessen` `relatedRecipeIds` | + `recipe-golonka` |
| `post-majeranek` `relatedRecipeIds` | + `recipe-golonka` |
| `post-dutch-oven` `relatedRecipeIds` | + `recipe-golonka` |

**Hinweis E:** Optionale reverse FACTS-Paarings in `recipe-karp` / `recipe-schabowy` / `recipe-schab-pieczony` / `recipe-zeberka` nicht von D überschrieben — kann E descriptiv ergänzen.

---

## Stichprobe Covers A/B/C

| Paket | Status-Doc | Ergebnis |
|-------|------------|----------|
| A | `content/wave-11-status-a.md` | **nicht vorhanden** zum Zeitpunkt D — Stichprobe nicht möglich |
| B | `content/wave-11-status-b.md` | **nicht vorhanden** |
| C | `content/wave-11-status-c.md` | **nicht vorhanden** |

→ Keine fremden Photo-IDs überschrieben. E bitte nach Merge A–C Stichprobe nachholen.

---

## Agent E — Merge Notes

1. `seedRecipesWave11D` → Aggregator `seed-recipes-wave11.ts` (oder Pattern wie Wave 10) + Import in `seed.ts`.
2. FACTS: `import { W11_FACTS_D } from "./recipe-articles-w11-d"` + `Object.assign(FACTS, …, W11_FACTS_D)`.
3. Related-Arrays (wigilia, sonntagsessen, majeranek, dutch-oven) mit A–C **deduplizieren**.
4. Photo-IDs D gegen finale A/B/C-Liste prüfen (keine Kollision).
5. `SEED_VERSION` nur E: **24 → 25**.
6. Kein neuer Blog-Pillar.

---

## Gates checklist

- [x] 3 Rezepte seed + unique Unsplash covers GET 200
- [x] FACTS ≥400 (expand) DE+PL; ≥4 Inline-Links/Locale (≥2 Rezept + ≥2 Blog)
- [x] Steps ≥2 Inline-Links/Locale
- [x] Ownership + Intent-Trennung
- [x] Backlinks Wigilia / Sonntagsessen (+ Majeranek / Dutch Oven für Golonka)
- [x] guide-only affiliate
- [x] No SEED_VERSION bump
- [x] No commit / push
- [x] No Photo-Retrofit A–C

---

## Diff-Liste für Integrator

**Neu:**
- `src/lib/data/seed-recipes-wave11-d.ts`
- `src/lib/data/recipe-articles-w11-d.ts`
- `content/wave-11-status-d.md`

**Geändert:**
- `content/keyword-ownership.md` (+3 Primary + Intent W11 D)
- `src/lib/data/blog-bodies-de.ts` (Wigilia → ryba + kompot)
- `src/lib/data/blog-bodies-pl.ts` (Wigilia → ryba + kompot)
- `src/lib/data/blog-bodies-wave2-de.ts` (Sonntag → golonka)
- `src/lib/data/blog-bodies-wave2-pl.ts` (Niedziela → golonka)
- `src/lib/data/seed-blog.ts` (`post-wigilia` related)
- `src/lib/data/seed-blog-wave2.ts` (`post-sonntagsessen`, `post-dutch-oven` related)
- `src/lib/data/seed-blog-w5.ts` (`post-majeranek` related)
