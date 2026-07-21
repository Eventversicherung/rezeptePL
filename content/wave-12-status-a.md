# Wave 12 — Status Paket A (Zupa grzybowa + Grochówka)

Status: **READY FOR INTEGRATOR E** (Implementer A · 2026-07-21)  
Kein `SEED_VERSION`-Bump · kein Commit/Push · keine wave12-b|c|d / Family / Routing-Dateien.

---

## Deliverables

| Datei | Rolle |
|-------|--------|
| `src/lib/data/seed-recipes-wave12-a.ts` | `seedRecipesWave12A` — 2 Rezepte |
| `src/lib/data/recipe-articles-w12-a.ts` | `W12_FACTS_A` |
| `content/keyword-ownership.md` | +2 Primary + Intent-Trennung W12 A |
| `content/wave-12-status-a.md` | dieses Status-Doc |

**Affiliate:** guide-only (keine `relatedProductIds` auf den Rezepten).

**Hausvarianten (festgenagelt):**
- Grzybowa = **klare** Trockenpilz-Suppe (Wigilia/Herbst), Sahne nur Alltag-Optional
- Grochówka = gelbe Trockenerbsen + Rauchwurst/Kartoffeln

---

## Rezepte + Covers

| ID | Slug | Cover Photo-ID | HTTP | Fit |
|----|------|----------------|:----:|-----|
| `recipe-zupa-grzybowa` | `zupa-grzybowa` | `1761545832874-02e1d41dc649` | 200 | Klare Pilzbrühe mit Champignonscheiben im Teller — starker Pilzsuppen-Intent (Wigilia-klar). |
| `recipe-grochowka` | `grochowka` | `1712334619829-831fa0625a0f` | 200 | Dicke grüne Erbsensuppe im Bowl (Lentil/Pea-Soup-Label Unsplash). Exakte gelbe Grochówka+Kiełbasa auf Free-Unsplash knapp — bewusst pea-soup-bowl Intent ≠ Fasolka/Kapuśniak. Unique vs. Live-Seeds. |

**Unique-Gate A:** beide IDs unbenutzt in bestehenden Seed-Covers (Stand Audit vor Merge B–D).

---

## Ownership

| Primary KW DE | Owner |
|---------------|-------|
| Zupa grzybowa / Pilzsuppe polnisch | `/rezepte/zupa-grzybowa` |
| Grochówka / Erbsensuppe polnisch | `/rezepte/grochowka` |

**Abgrenzung:** Grzybowa ≠ Barszcz / Flaki / Ogórkowa; Grochówka ≠ Fasolka / Kapuśniak; Overview `/blog/polnische-suppen` bleibt Broad; Krupnik später.

---

## relatedPostIds

| Rezept | relatedPostIds |
|--------|----------------|
| zupa-grzybowa | `post-polnische-suppen`, `post-wigilia`, `post-polenladen` |
| grochowka | `post-polnische-suppen`, `post-kielbasa-arten`, `post-sonntagsessen` |

---

## FACTS / Steps Gates

| Recipe | Locale | FACTS Inline-Links | R/B | Feld-Wörter ≈ | expand() |
|--------|--------|-------------------:|-----|--------------:|----------|
| zupa-grzybowa | DE | 28 | 14/14 | ~330 | ≫400 |
| zupa-grzybowa | PL | 28 | 14/14 | ~311 | ≫400 |
| grochowka | DE | 29 | 14/15 | ~319 | ≫400 |
| grochowka | PL | 29 | 14/15 | ~290 | ≫400 |

**Steps/Tips Inline-Links:** beide Rezepte DE/PL je **7** (Gate ≥2).

---

## Backlinks gesetzt (A-owned)

| Quelle | Aktion |
|--------|--------|
| `bodyPolnischeSuppenDe` | Abschnitte Grzybowa + Grochówka (getrennt für E vs. D) |
| `bodyPolnischeSuppenPl` | Abschnitte grzybowa + grochówka |
| `bodyWigiliaDe` | Punkt 8 → zupa-grzybowa (descriptiv; Anlass bleibt Owner) |
| `bodyWigiliaPl` | Bullet → zupa grzybowa |
| `bodyKielbasaArtenDe` | Menüs → Grochówka |
| `bodyKielbasaArtenPl` | Dobieraj → grochówka |
| `bodySonntagsessenDe` | Abschnitt deftige Erbsensuppe → grochowka |
| `bodySonntagsessenPl` | Formuła → grochówka |
| `post-polnische-suppen` `relatedRecipeIds` | + grzybowa, grochowka |
| `post-wigilia` `relatedRecipeIds` | + grzybowa |
| `post-kielbasa-arten` `relatedRecipeIds` | + grochowka |
| `post-sonntagsessen` `relatedRecipeIds` | + grochowka |

**Hinweis E:** `post-wigilia` Body wird auch von B (Makaron z makiem) berührt — A hat nur den Grzybowa-Satz; bei Merge nicht überschreiben. Sonntagsessen/Buraczki (C) und Klopsy/Kładzione (D) parallel — A-Absätze getrennt halten.

---

## Agent E — Merge Notes

1. `seedRecipesWave12A` → Aggregator `seed-recipes-wave12.ts` + Import in `seed.ts`.
2. FACTS: `import { W12_FACTS_A } from "./recipe-articles-w12-a"` + `Object.assign(FACTS, …, W12_FACTS_A)`.
3. Related-Arrays (suppen, wigilia, kielbasa, sonntagsessen) mit B/C/D **deduplizieren**.
4. Photo-IDs A gegen finale B/C/D-Liste prüfen (keine Kollision).
5. `SEED_VERSION` nur E: **25 → 26**.
6. Kein neuer Blog-Pillar.

---

## Gates checklist

- [x] 2 Rezepte seed + unique Unsplash covers GET 200
- [x] FACTS ≥400 (expand) DE+PL; ≥4 Inline-Links/Locale (≥2 Rezept + ≥2 Blog)
- [x] Steps ≥2 Inline-Links/Locale
- [x] Ownership + Intent-Trennung W12 A
- [x] Backlinks Suppen / Wigilia / Kielbasa / Sonntagsessen
- [x] guide-only affiliate
- [x] No SEED_VERSION bump
- [x] No commit / push
- [x] Isolation vs wave12-b|c|d / Family / Routing

---

## Diff-Liste für Integrator

**Neu:**
- `src/lib/data/seed-recipes-wave12-a.ts`
- `src/lib/data/recipe-articles-w12-a.ts`
- `content/wave-12-status-a.md`

**Geändert:**
- `content/keyword-ownership.md` (+2 Primary + Intent W12 A)
- `src/lib/data/blog-bodies-wave2-de.ts` (Suppen + Kielbasa + Sonntag)
- `src/lib/data/blog-bodies-wave2-pl.ts` (Suppen + Kielbasa + Sonntag)
- `src/lib/data/blog-bodies-de.ts` (Wigilia → grzybowa)
- `src/lib/data/blog-bodies-pl.ts` (Wigilia → grzybowa)
- `src/lib/data/seed-blog.ts` (`post-wigilia` related)
- `src/lib/data/seed-blog-wave2.ts` (suppen / kielbasa / sonntagsessen related)
