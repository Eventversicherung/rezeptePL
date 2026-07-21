# Wave 12 — Status Paket C (Ostern + Sonntags-Beilage)

Status: **DONE** (Implementer C · 2026-07-21)  
Scope: `recipe-mazurek` + `recipe-buraczki`  
No `SEED_VERSION` bump · no commit/push · no new blog pillar

---

## Deliverables

| Asset | ID | Slugs DE / PL | Cover Photo-ID | GET |
|-------|-----|---------------|----------------|-----|
| Recipe | `recipe-mazurek` | `mazurek` / `mazurek` | `1776268927285-21968dfe5fcb` | **200** |
| Recipe | `recipe-buraczki` | `buraczki` / `buraczki` | `1764314555345-2691cf16517b` | **200** |

Ownership (eingehalten):

- **Mazurek orzechowy** ≠ Babka (Hefegugelhupf) ≠ Sernik ≠ Makowiec ≠ Piernik; Wielkanoc Speiseplan bleibt Anlass-Owner
- **Buraczki** ≠ Botwinka (Suppe) ≠ Barszcz ≠ Sałatka jarzynowa
- Affiliate: **guide-only** (`relatedProductIds` nicht gesetzt)

Cover-Fit:

- Mazurek: Nussbelag auf flachem Gebäck (Belag-Nahaufnahme) — orzechowy-Linie
- Buraczki: geraspelte/gestrichene Rote Bete (Beilage-Charakter, keine Suppenschüssel)

---

## Neue Dateien

- `src/lib/data/seed-recipes-wave12-c.ts` — `seedRecipesWave12C`
- `src/lib/data/recipe-articles-w12-c.ts` — `W12_FACTS_C`
- `content/wave-12-status-c.md` (dieses Doc)

---

## Touch / Backlinks (gesetzt)

| Bestehend | Aktion |
|-----------|--------|
| `post-wielkanoc` | `relatedRecipeIds` += `recipe-mazurek`; Body DE+PL Süßes → mazurek (descriptiv, Speiseplan bleibt Owner) |
| `post-sonntagsessen` | `relatedRecipeIds` += `recipe-buraczki`; Body DE+PL Beilagen → buraczki (≠ Botwinka/Barszcz) |
| `recipe-schabowy` steps DE+PL | Beilage-Link → buraczki |
| `keyword-ownership.md` | +2 Primary-Zeilen + Intent-Trennung W12 C |

**Nicht angefasst:** `SEED_VERSION`, Wave12 Aggregator/`seed.ts` Recipe-Import, `recipe-articles.ts` Object.assign, routing/family-slug-Dateien, A/B/D Seed-Dateien, Commit/Push.

---

## Final Photo-IDs (C) — für Unique-Gate E

```
1776268927285-21968dfe5fcb   # mazurek
1764314555345-2691cf16517b   # buraczki
```

---

## Gates (lokal gemessen)

| Gate | mazurek DE/PL | buraczki DE/PL |
|------|---------------|----------------|
| FACTS expand Wörter ≥400 | **1107** / **1037** | **1043** / **994** |
| FACTS Inline-Links ≥4 (≥2 Rezept + ≥2 Blog) | **25** (14R+11B) / **25** | **26** (15R+11B) / **26** |
| Steps/Tips Inline-Links ≥2 | **7** / **7** | **8** / **8** |
| `relatedPostIds` ≥3 | 3 | 3 |
| Unique cover GET 200 | ja | ja |
| Affiliate | guide-only | guide-only |

---

## Integrator E — Merge-Checkliste

1. [ ] `seedRecipesWave12C` in Wave12-Aggregator / `seed.ts`
2. [ ] `W12_FACTS_C` in `recipe-articles.ts` Object.assign
3. [ ] Photo-IDs gegen A/B/D Status deduplizieren
4. [ ] `keyword-ownership.md` +8 Primary final + Intent-Trennung W12
5. [ ] `SEED_VERSION` 25→26 nur durch E
6. [ ] Kein Teil-Push aus C

---

## Diff-Liste für Integrator E

1. `src/lib/data/seed-recipes-wave12-c.ts` (**neu**)
2. `src/lib/data/recipe-articles-w12-c.ts` (**neu**)
3. `content/wave-12-status-c.md` (**neu**)
4. `content/keyword-ownership.md` — +2 Primary + Intent W12 C
5. `src/lib/data/seed-blog-wave2.ts` — relatedRecipeIds wielkanoc/sonntagsessen
6. `src/lib/data/blog-bodies-wave2-de.ts` — Süßes → mazurek; Beilagen → buraczki
7. `src/lib/data/blog-bodies-wave2-pl.ts` — analog
8. `src/lib/data/seed.ts` — Schabowy Beilage-Link buraczki
