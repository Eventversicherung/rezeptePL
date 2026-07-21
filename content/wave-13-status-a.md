# Wave 13 — Status Paket A (Krupnik + Szczawiowa)

Status: **READY FOR INTEGRATOR E** (Implementer A · 2026-07-21)  
Kein `SEED_VERSION`-Bump · kein Commit/Push · keine wave13-b|c|d / Family / Routing-Dateien.

---

## Deliverables

| Datei | Rolle |
|-------|--------|
| `src/lib/data/seed-recipes-wave13-a.ts` | `seedRecipesWave13A` — 2 Rezepte |
| `src/lib/data/recipe-articles-w13-a.ts` | `W13_FACTS_A` |
| `content/keyword-ownership.md` | +2 Primary + Intent-Trennung W13 A |
| `content/wave-13-status-a.md` | dieses Status-Doc |

**Affiliate:** guide-only (keine `relatedProductIds` auf den Rezepten).

**Hausvarianten (festgenagelt):**
- Krupnik = Perlgerste + Wurzelgemüse, optional Hühnerfleisch
- Szczawiowa = frischer Sauerampfer + Kartoffeln + Śmietana + hartgekochtes Ei

---

## Rezepte + Covers (Photo QA)

| ID | Slug | Cover Photo-ID | HTTP | Alt (N/A → neu) | Fit |
|----|------|----------------|:----:|-----------------|-----|
| `recipe-krupnik` | `krupnik` | `1636044993194-9d2ec4b0cb89` | **200** | N/A → neu | Cremig-beige Gerstensuppe im Teller: **sichtbare Perlgerste-Körner**, Champignon-Stücke, Kräuter — klar Gersten-/Pilzsuppen-Intent. ≠ Erbsenpüree (Grochówka), ≠ dunkle klare Trockenpilzbrühe (Grzybowa), ≠ Tomato/Barszcz. |
| `recipe-szczawiowa` | `szczawiowa` | `1626200949840-179d3e52f7fd` | **200** | N/A → neu | **Grüne** Kräuter-/Blattsuppe in schwarzem Bowl; Löffel hebt helle Stücke (Ei/Kartoffel-Look) — Sauerampfer-/Sorrel-Intent. ≠ Botwinka-Rosa/Bete, ≠ klare Barszcz, ≠ beige Gurkensuppe ohne Grün. |

**Unique-Gate A:** beide IDs unbenutzt im Live-Seed-Katalog (Audit vor Merge B–D). Format `?w=1600&q=80`.

---

## Ownership

| Primary KW DE | Owner |
|---------------|-------|
| Krupnik / Gerstensuppe polnisch | `/rezepte/krupnik` |
| Szczawiowa / Sauerampfersuppe | `/rezepte/szczawiowa` |

**Abgrenzung:** Krupnik ≠ Grochówka / Grzybowa / Kapuśniak; Szczawiowa ≠ Botwinka / Ogórkowa / Chłodnik; Overview `/blog/polnische-suppen` bleibt Broad.

---

## relatedPostIds

| Rezept | relatedPostIds |
|--------|----------------|
| krupnik | `post-polnische-suppen`, `post-sonntagsessen`, `post-polenladen` |
| szczawiowa | `post-polnische-suppen`, `post-ersatzprodukte-de`, `post-smietana-schmand` |

---

## FACTS / Steps Gates

| Recipe | Locale | FACTS Inline-Links | R/B | Feld-Wörter ≈ | expand() |
|--------|--------|-------------------:|-----|--------------:|----------|
| krupnik | DE | 33 | 16/17 | ~353 | ≫400 |
| krupnik | PL | 33 | 16/17 | ~319 | ≫400 |
| szczawiowa | DE | 34 | 19/15 | ~322 | ≫400 |
| szczawiowa | PL | 34 | 19/15 | ~294 | ≫400 |

**Steps/Tips Inline-Links:** beide Rezepte DE/PL je **7** (Gate ≥2).

---

## Backlinks gesetzt (A-owned)

| Quelle | Aktion |
|--------|--------|
| `bodyPolnischeSuppenDe` | Vier Säulen → Krupnik/Szczawiowa Links; Abschnitte **Gerste: Krupnik** + **Grün / Saison: Szczawiowa** (getrennt) |
| `bodyPolnischeSuppenPl` | Abschnitte **Kasza: krupnik** + **Zieleń / sezon: szczawiowa** |
| `bodySonntagsessenDe` | Grochówka-Absatz → descriptiv Krupnik |
| `bodySonntagsessenPl` | Formuła → krupnik |
| `W12_FACTS_A` Grochówka | Abgrenzung → `/rezepte/krupnik` |
| `W12_FACTS_A` Grzybowa | mistakes/variants → Krupnik |
| `W9_FACTS` Botwinka variants | → Szczawiowa |
| `post-polnische-suppen` `relatedRecipeIds` | + krupnik, szczawiowa |
| `post-sonntagsessen` `relatedRecipeIds` | + krupnik |
| `post-ersatzprodukte-de` `relatedRecipeIds` | + szczawiowa |
| `post-smietana-schmand` `relatedRecipeIds` | + szczawiowa |

**Hinweis E:** `post-sonntagsessen` / `post-polnische-suppen` related-Arrays parallel mit B/C/D — **deduplizieren**. A-Absätze Krupnik/Szczawiowa getrennt halten.

---

## Agent E — Merge Notes

1. `seedRecipesWave13A` → Aggregator `seed-recipes-wave13.ts` + Import in `seed.ts`.
2. FACTS: `import { W13_FACTS_A } from "./recipe-articles-w13-a"` + `Object.assign(FACTS, …, W13_FACTS_A)`.
3. Related-Arrays (suppen, sonntagsessen, ersatzprodukte, smietana) mit B/C/D **deduplizieren**.
4. Photo-IDs A gegen finale B/C/D-Liste prüfen (keine Kollision).
5. `SEED_VERSION` nur E: **26 → 27**.
6. Kein neuer Blog-Pillar.

---

## Gates checklist

- [x] 2 Rezepte seed + unique Unsplash covers GET 200
- [x] Visual-Fit-Notizen (barley/mushroom look; grüne Sorrel-Suppe)
- [x] FACTS ≥400 (expand) DE+PL; ≥4 Inline-Links/Locale (≥2 Rezept + ≥2 Blog)
- [x] Steps ≥2 Inline-Links/Locale
- [x] Ownership + Intent-Trennung W13 A
- [x] Backlinks Suppen / Sonntag / Ersatz / Śmietana + Nachbar-FACTS
- [x] guide-only affiliate
- [x] No SEED_VERSION bump
- [x] No commit / push
- [x] Isolation vs wave13-b|c|d / Family / Routing

---

## Diff-Liste für Integrator

**Neu:**
- `src/lib/data/seed-recipes-wave13-a.ts`
- `src/lib/data/recipe-articles-w13-a.ts`
- `content/wave-13-status-a.md`

**Geändert:**
- `content/keyword-ownership.md` (+2 Primary + Intent W13 A)
- `src/lib/data/blog-bodies-wave2-de.ts` (Suppen + Sonntag)
- `src/lib/data/blog-bodies-wave2-pl.ts` (Suppen + Sonntag)
- `src/lib/data/seed-blog-wave2.ts` (related: suppen / sonntag / ersatz / smietana)
- `src/lib/data/recipe-articles-w12-a.ts` (Grochówka + Grzybowa → Krupnik)
- `src/lib/data/recipe-articles-w9-b.ts` (Botwinka → Szczawiowa)
