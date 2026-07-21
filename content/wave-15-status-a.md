# Wave 15 — Status Paket A (Kaczka + Pieczeń rzymska)

Status: **READY FOR INTEGRATOR E** (Implementer A · 2026-07-21)  
Kein `SEED_VERSION`-Bump · kein Commit/Push · keine wave15-b|c|d / Family / Routing-Dateien.

---

## Deliverables

| Datei | Rolle |
|-------|--------|
| `src/lib/data/seed-recipes-wave15-a.ts` | `seedRecipesWave15A` — 2 Rezepte |
| `src/lib/data/recipe-articles-w15-a.ts` | `W15_FACTS_A` |
| `content/keyword-ownership.md` | +2 Primary + Intent-Trennung W15 A draft |
| `content/wave-15-status-a.md` | dieses Status-Doc |

**Affiliate:** guide-only (keine `relatedProductIds` auf den Rezepten).

**Hausvarianten (festgenagelt):**
- Kaczka pieczona = ganze Ofenente mit **Apfel + Majeranek**
- Pieczeń rzymska = Ofen-Hacklaib mit **hartgekochtem Ei-Kern** + Majeranek

---

## Rezepte + Covers (Photo QA)

| ID | Slug | Cover Photo-ID | HTTP | Alt (N/A → neu) | Fit |
|----|------|----------------|:----:|-----------------|-----|
| `recipe-kaczka` | `kaczka` | `1756139705997-f92690428d66` | **200** | N/A → neu | Geschnittene **gebratene Ente** (dunkle, lackierte Haut, klare Entenbraten-Scheiben auf Platte) — kein Huhn-only, kein Schab/Golonka/Żeberka. |
| `recipe-pieczen-rzymska` | `pieczen-rzymska` | `1774494248272-bf91a0219bfe` | **200** | N/A → neu | **Geschnittene Hackbraten-/Fleischlaib-Scheiben** vom Ofen mit Ei/Beilage — klar Laib-Schnitt, ≠ flache Mielony-Frikadellen, ≠ Pastete-Terrine. |

**Unique-Gate A:** beide IDs unbenutzt im Live-Seed-Katalog (Audit vor Merge B–D). Format `?w=1600&q=80`.

---

## Ownership

| Primary KW DE | Owner |
|---------------|-------|
| Kaczka pieczona / Ente polnisch Ofen | `/rezepte/kaczka` |
| Pieczeń rzymska / Polnischer Hackbraten | `/rezepte/pieczen-rzymska` |

**Abgrenzung:** Kaczka ≠ Schab / Golonka / Żeberka; Pieczeń ≠ Kotlet mielony / Pasztet; Sonntagsessen / Majeranek bleiben Kultur-/Lexikon-Owner.

---

## relatedPostIds

| Rezept | relatedPostIds |
|--------|----------------|
| kaczka | `post-sonntagsessen`, `post-majeranek`, `post-polenladen` |
| pieczen-rzymska | `post-sonntagsessen`, `post-fleischwolf`, `post-ersatzprodukte-de` |

---

## FACTS / Steps Gates

| Recipe | Locale | FACTS Inline-Links | R/B | Feld-Wörter ≈ | expand() |
|--------|--------|-------------------:|-----|--------------:|----------|
| kaczka | DE | 35 | 19/16 | ~352 | ≫400 |
| kaczka | PL | 35 | 19/16 | ~328 | ≫400 |
| pieczen-rzymska | DE | 32 | 13/19 | ~325 | ≫400 |
| pieczen-rzymska | PL | 32 | 13/19 | ~304 | ≫400 |

**Steps/Tips Inline-Links:** kaczka DE/PL je **8**; pieczen-rzymska DE/PL je **7** (Gate ≥2).

---

## Backlinks gesetzt (A-owned)

| Quelle | Aktion |
|--------|--------|
| `post-sonntagsessen` `relatedRecipeIds` | + kaczka, pieczen-rzymska |
| `post-majeranek` `relatedRecipeIds` | + kaczka |
| `post-polenladen` `relatedRecipeIds` | + kaczka |
| `post-fleischwolf` `relatedRecipeIds` | + pieczen-rzymska |
| `post-ersatzprodukte-de` `relatedRecipeIds` | + pieczen-rzymska |
| `keyword-ownership.md` | +2 Primary + Intent W15 A draft |

**Hinweis E:** Related-Arrays parallel mit B/C/D — **deduplizieren**. Sibling-FACTS (Schab/Golonka/Mielony/Pasztet) können HOLD→Link bekommen.

---

## Agent E — Merge Notes

1. `seedRecipesWave15A` → Aggregator `seed-recipes-wave15.ts` + Import in `seed.ts`.
2. FACTS: `import { W15_FACTS_A } from "./recipe-articles-w15-a"` + `Object.assign(FACTS, …, W15_FACTS_A)`.
3. Related-Arrays (sonntagsessen, majeranek, polenladen, fleischwolf, ersatzprodukte) mit B/C/D **deduplizieren**.
4. Photo-IDs A gegen finale B–D-Liste prüfen (keine Kollision): `1756139705997-f92690428d66`, `1774494248272-bf91a0219bfe`.
5. `SEED_VERSION` nur E: **28 → 29**.
6. Kein neuer Blog-Pillar. Keine Family-/PL-Routing-Änderung.

---

## Gates checklist

- [x] 2 Rezepte seed + unique Unsplash covers GET 200
- [x] Visual-Fit-Notizen (Ente-Schnitt; Hackbraten-Laib ≠ Mielony)
- [x] FACTS ≥400 (expand) DE+PL; ≥4 Inline-Links/Locale (≥2 Rezept + ≥2 Blog)
- [x] Steps ≥2 Inline-Links/Locale
- [x] Ownership + Intent-Trennung W15 A draft
- [x] guide-only affiliate
- [x] No SEED_VERSION bump
- [x] No commit / push
- [x] Isolation vs wave15-b|c|d / Family / Routing

---

## Diff-Liste für Integrator

**Neu:**
- `src/lib/data/seed-recipes-wave15-a.ts`
- `src/lib/data/recipe-articles-w15-a.ts`
- `content/wave-15-status-a.md`

**Geändert:**
- `content/keyword-ownership.md` (+2 Primary + Intent W15 A draft)
- `src/lib/data/seed-blog-wave2.ts` (related: sonntagsessen + ersatzprodukte + fleischwolf)
- `src/lib/data/seed-blog-w5.ts` (related: majeranek)
- `src/lib/data/seed-blog.ts` (related: polenladen)
