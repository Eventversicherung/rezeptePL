# Wave 9 — Status Paket C (Babka)

Status: **SHIPPED** (merged by Integrator E · SEED 23)  
Stand: 2026-07-20

---

## Deliverables

| Asset | ID | Slugs DE / PL | Cover |
|-------|-----|---------------|-------|
| Recipe | `recipe-babka` | `babka` / `babka` | `photo-1586985289906-406988974504` (unique) |

Ownership (eingehalten):

- **Primary „Babka Rezept / Babka wielkanocna“** nur `/rezepte/babka`
- **Makowiec Technik/Rezept**, **Sernik**, **Pączki** unangetastet als Primary — nur descriptive Abgrenzung
- **Wielkanoc** bleibt Speiseplan-Owner (C patched nur Backen-Absatz / Süßes)
- **Kein** neuer Blog-Pillar

Affiliate: **guide-only** (`relatedProductIds` nicht gesetzt / leer auf Touch-Posts)

---

## Neue Dateien

- `src/lib/data/seed-recipes-wave9-c.ts` — `seedRecipesWave9C`
- `src/lib/data/recipe-articles-w9-c.ts` — `W9_FACTS_C`
- `content/wave-9-status-c.md` (dieses Doc)

---

## Touch / Backlinks (gesetzt)

| Bestehend | Aktion |
|-----------|--------|
| `post-wielkanoc` body DE | § Süßes → Inline [Babka](/de/rezepte/babka) (+ Sernik descriptiv) |
| `post-wielkanoc` body PL | Kern-Absatz → Inline babka (+ sernik) |
| `post-wielkanoc` seed | `relatedRecipeIds` += `recipe-babka` |
| `post-makowiec-technik` body DE+PL | 1 Abgrenzungs-Satz Babka ≠ Mohnrolle + Weiterlesen-Link |
| `post-makowiec-technik` seed | `relatedRecipeIds` += `recipe-babka` |
| `recipe-makowiec` FACTS (W8 retrofit live) | variants → Babka Abgrenzung |
| `recipe-sernik` FACTS (W8 retrofit live) | variants → Babka Abgrenzung |
| `keyword-ownership.md` | +1 Primary-Zeile Babka |

**Nicht angefasst:** `SEED_VERSION`, Aggregator `seed-recipes-wave9.ts`, `seed.ts` Import, `recipe-articles.ts` Object.assign (für E), Paket A/B/D Seed-Dateien, neuer Pillar.

---

## Gates (lokal gemessen)

| Gate | DE | PL |
|------|----|----|
| FACTS expand Wörter ≥400 | **~1014** | **~1100+** (PL-Template länger) |
| FACTS-Felder Inline-Links ≥4 | **20** (≥2 Rezept + ≥2 Blog) | **20** |
| Steps/Tips Inline-Links ≥2 | **5** | **5** |
| `relatedPostIds` ≥3 | 4 (wielkanoc, makowiec-technik, polenladen, ersatzprodukte-de) | same |
| Unique cover | ja | ja |
| Affiliate | guide-only | same |
| Neuer Pillar | nein | nein |

---

## Integrator E — Merge-Hinweise

1. `seedRecipesWave9C` in `seed-recipes-wave9.ts` Aggregator ziehen (analog W8).
2. `seed.ts`: Spread Wave-9-C; ggf. related-Maps dedupt (relatedPostIds liegen schon am Recipe-Objekt).
3. `recipe-articles.ts`: `import { W9_FACTS_C } from "./recipe-articles-w9-c"` + `Object.assign(FACTS, …, W9_FACTS_C)`.
4. Hotspot `post-wielkanoc`: B patched Salat — C patched **Süßes/Backen**; Related-Array dedupt mit B.
5. Hotspot `recipe-articles-w8-d-retrofit.ts`: C hat Babka-Links in makowiec/sernik **variants** — bei D-Rewrite erhalten.
6. Docs final + `SEED_VERSION` 22→23 nur durch E.
7. Kein Teil-Push aus C.

---

## Diff-Liste (Kurz)

**Neu:**

- `src/lib/data/seed-recipes-wave9-c.ts`
- `src/lib/data/recipe-articles-w9-c.ts`
- `content/wave-9-status-c.md`

**Touch:**

- `src/lib/data/blog-bodies-wave2-de.ts` (Wielkanoc Süßes)
- `src/lib/data/blog-bodies-wave2-pl.ts` (Wielkanoc Kern)
- `src/lib/data/blog-bodies-w6-de.ts` / `-pl.ts` (Makowiec-Technik Abgrenzung)
- `src/lib/data/seed-blog-wave2.ts` (wielkanoc relatedRecipeIds)
- `src/lib/data/seed-blog-w6.ts` (makowiec-technik relatedRecipeIds)
- `src/lib/data/recipe-articles-w8-d-retrofit.ts` (makowiec/sernik → babka)
- `content/keyword-ownership.md` (+1 Zeile)
