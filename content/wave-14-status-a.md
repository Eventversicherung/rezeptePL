# Wave 14 — Status Paket A (Wuzetka + Drożdżówka)

Status: **READY FOR INTEGRATOR E** (Implementer A · 2026-07-21)  
Kein `SEED_VERSION`-Bump · kein Commit/Push · keine wave14-b|c|d / Family / Routing-Dateien.

---

## Deliverables

| Datei | Rolle |
|-------|--------|
| `src/lib/data/seed-recipes-wave14-a.ts` | `seedRecipesWave14A` — 2 Rezepte |
| `src/lib/data/recipe-articles-w14-a.ts` | `W14_FACTS_A` |
| `content/keyword-ownership.md` | +2 Primary + Intent-Trennung W14 A |
| `content/wave-14-status-a.md` | dieses Status-Doc |

**Affiliate:** guide-only (keine `relatedProductIds` auf den Rezepten).

**Hausvarianten (festgenagelt):**
- Wuzetka = Kakao-Biskuit + dicke Sahnefüllung + Schoko-Glasur
- Drożdżówka = Placek drożdżowy vom Blech mit kruszonka (Streusel), optional Apfel

---

## Rezepte + Covers (Photo QA)

| ID | Slug | Cover Photo-ID | HTTP | Alt (N/A → neu) | Fit |
|----|------|----------------|:----:|-----------------|-----|
| `recipe-wuzetka` | `wuzetka` | `1536749605762-e7445a2d43ec` | **200** | N/A → neu | Dunkler Kakao-/Schoko-Biskuit-Schnitt mit **dicker weißer Sahne-Schicht** dazwischen und dunkler Schoko-Glasur oben — klar Schoko-Sahne-Torte. ≠ Napoleonka-Blätterteig/millefeuille, ≠ Apfelkuchen, ≠ Käsekuchen. |
| `recipe-drozdzowka` | `drozdzowka` | `1609099724543-937e6493fcd0` | **200** | N/A → neu | Heller Hefekuchen-Schnitt mit **dicker dunkler Streusel-/Kruszonka-Schicht** oben — Blech-/Placek-Intent. ≠ Chałka-Zopf, ≠ Babka-Gugelhupf, ≠ Pączki-Donut, ≠ Racuchy-Pfanne. |

**Unique-Gate A:** beide IDs unbenutzt im Live-Seed-Katalog (Audit vor Merge B–D). Format `?w=1600&q=80`.

---

## Ownership

| Primary KW DE | Owner |
|---------------|-------|
| Wuzetka / Schoko-Sahne-Torte | `/rezepte/wuzetka` |
| Drożdżówka / Placek drożdżowy | `/rezepte/drozdzowka` |

**Abgrenzung:** Wuzetka ≠ Napoleonka / Sernik / Szarlotka; Drożdżówka ≠ Chałka / Babka / Pączki / Racuchy; Sonntagsessen bleibt Kultur-Owner.

---

## relatedPostIds

| Rezept | relatedPostIds |
|--------|----------------|
| wuzetka | `post-sonntagsessen`, `post-ersatzprodukte-de`, `post-polenladen` |
| drozdzowka | `post-sonntagsessen`, `post-polenladen`, `post-ersatzprodukte-de` |

---

## FACTS / Steps Gates

| Recipe | Locale | FACTS Inline-Links | R/B | Feld-Wörter ≈ | expand() |
|--------|--------|-------------------:|-----|--------------:|----------|
| wuzetka | DE | 31 | 18/13 | ~368 | ≫400 |
| wuzetka | PL | 31 | 18/13 | ~370 | ≫400 |
| drozdzowka | DE | 36 | 21/15 | ~351 | ≫400 |
| drozdzowka | PL | 36 | 21/15 | ~341 | ≫400 |

**Steps/Tips Inline-Links:** wuzetka DE/PL je **7**; drozdzowka DE/PL je **8** (Gate ≥2).

---

## Backlinks gesetzt (A-owned)

| Quelle | Aktion |
|--------|--------|
| `W13_FACTS` Napoleonka (`recipe-articles-w13-b.ts`) | HOLD → Link `/rezepte/wuzetka` (origin/shop/mistakes DE+PL) |
| `W13_FACTS` Chałka (`recipe-articles-w13-c.ts`) | HOLD → Link `/rezepte/drozdzowka` (origin DE+PL) |
| `post-sonntagsessen` `relatedRecipeIds` | + wuzetka, drozdzowka |
| `post-ersatzprodukte-de` `relatedRecipeIds` | + wuzetka, drozdzowka |
| `post-polenladen` `relatedRecipeIds` | + wuzetka, drozdzowka |
| `keyword-ownership.md` | +2 Primary + Intent W14 A; W13 HOLD-Formulierung bereinigt |

**Hinweis E:** `post-sonntagsessen` / `post-polenladen` / `post-ersatzprodukte-de` related-Arrays parallel mit B/C/D — **deduplizieren**.

---

## Agent E — Merge Notes

1. `seedRecipesWave14A` → Aggregator `seed-recipes-wave14.ts` + Import in `seed.ts`.
2. FACTS: `import { W14_FACTS_A } from "./recipe-articles-w14-a"` + `Object.assign(FACTS, …, W14_FACTS_A)`.
3. Related-Arrays (sonntagsessen, ersatzprodukte, polenladen) mit B/C/D **deduplizieren**.
4. Photo-IDs A gegen finale B/C/D-Liste prüfen (keine Kollision): `1536749605762-e7445a2d43ec`, `1609099724543-937e6493fcd0`.
5. `SEED_VERSION` nur E: **27 → 28**.
6. Kein neuer Blog-Pillar.

---

## Gates checklist

- [x] 2 Rezepte seed + unique Unsplash covers GET 200
- [x] Visual-Fit-Notizen (Schoko-Sahne-Schichten; Streusel-Hefekuchen)
- [x] FACTS ≥400 (expand) DE+PL; ≥4 Inline-Links/Locale (≥2 Rezept + ≥2 Blog)
- [x] Steps ≥2 Inline-Links/Locale
- [x] Ownership + Intent-Trennung W14 A
- [x] Backlinks Napoleonka / Chałka FACTS + related blog arrays
- [x] guide-only affiliate
- [x] No SEED_VERSION bump
- [x] No commit / push
- [x] Isolation vs wave14-b|c|d / Family / Routing

---

## Diff-Liste für Integrator

**Neu:**
- `src/lib/data/seed-recipes-wave14-a.ts`
- `src/lib/data/recipe-articles-w14-a.ts`
- `content/wave-14-status-a.md`

**Geändert:**
- `content/keyword-ownership.md` (+2 Primary + Intent W14 A; W13 HOLD-Cleanup)
- `src/lib/data/recipe-articles-w13-b.ts` (Napoleonka → Wuzetka)
- `src/lib/data/recipe-articles-w13-c.ts` (Chałka → Drożdżówka)
- `src/lib/data/seed-blog-wave2.ts` (related: sonntagsessen + ersatzprodukte)
- `src/lib/data/seed-blog.ts` (related: polenladen)
