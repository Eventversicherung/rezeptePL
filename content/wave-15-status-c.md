# Wave 15 — Status Paket C (Sonntags-Beilagen)

Status: **DONE** (Implementer C · 2026-07-21)  
Scope: `recipe-marchewka-groszek` + `recipe-fasolka-szparagowa`  
No `SEED_VERSION` bump · no commit/push · no new blog pillar · PL-Routing unberührt

---

## Deliverables

| Asset | ID | Slugs DE / PL | Cover Photo-ID | GET |
|-------|-----|---------------|----------------|-----|
| Recipe | `recipe-marchewka-groszek` | `marchewka-groszek` / `marchewka-groszek` | `1565711120607-903eb0a17e2f` | **200** |
| Recipe | `recipe-fasolka-szparagowa` | `fasolka-szparagowa` / `fasolka-szparagowa` | `1677449477669-03421e56a53d` | **200** |

Ownership (eingehalten):

- **Marchewka z groszkiem** = warme Möhren+Erbsen-Beilage (Butter/Glasur) ≠ Mizeria ≠ Buraczki ≠ Surówka
- **Fasolka szparagowa** = grüne Stangenbohnen-Beilage (Butter/Semmelbrösel) ≠ Fasolka po bretońsku (Eintopf)
- Fasolka-Guide / Fasolka-Cook bleiben Eintopf-Owner — nur descriptive Crosslinks (Beilage ≠ Eintopf)
- Sonntagsessen bleibt Kultur-/Speiseplan-Owner
- Affiliate: **guide-only** (`relatedProductIds` nicht gesetzt)

### Cover Visual-Fit (Acceptance §3)

- **Marchewka z groszkiem** (`1565711120607-903eb0a17e2f`): Pfanne mit **gekochten/glasierten Möhrenwürfeln und Erbsen** in der Luft/Pfanne — klare warme Beilage Möhren+Erbsen; kein Rohkostsalat, keine Rote Bete, keine Gurken-Mizeria.
- **Fasolka szparagowa** (`1677449477669-03421e56a53d`): Weiße Schüssel mit **grünen Stangenbohnen** als Beilage (gegart/geschwenkt, Glanz) — klar ≠ Fasolka-po-bretońsku-Eintopf mit weißen Bohnen/Speck-Sauce.

---

## Neue Dateien

- `src/lib/data/seed-recipes-wave15-c.ts` — `seedRecipesWave15C`
- `src/lib/data/recipe-articles-w15-c.ts` — `W15_FACTS_C`
- `content/wave-15-status-c.md` (dieses Doc)

---

## Touch / Backlinks

| Bestehend | Aktion (C) | Für E |
|-----------|------------|--------|
| `keyword-ownership.md` | +2 Primary + Intent-Trennung W15 C draft | finalisieren mit A/B/D |
| `post-sonntagsessen` | **nicht** von C editiert (Parallel-Isolation) | `relatedRecipeIds` += marchewka + fasolka-szparagowa; Body descriptive |
| `post-fasolka-guide` | **nicht** von C editiert | related += fasolka-szparagowa; Body descriptiv Beilage ≠ Eintopf (Primary bleibt Cook-Eintopf) |
| `post-polenladen` / `post-ersatzprodukte-de` | — | optional related += beide |

**Nicht angefasst:** `SEED_VERSION`, Wave15 Aggregator/`seed.ts`, `recipe-articles.ts` Object.assign, A/B/D Seed-Dateien, Commit/Push.

---

## Final Photo-IDs (C) — für Unique-Gate E

```
1565711120607-903eb0a17e2f   # marchewka — glazed carrots + peas skillet toss
1677449477669-03421e56a53d   # fasolka-szparagowa — green beans side bowl
```

Dedup vs bestehendem Seed (alle `src/lib/data`): **keine Kollision** (nur in `seed-recipes-wave15-c.ts`). E: gegen A/B/D Status prüfen.

---

## Gates (lokal gemessen)

| Gate | marchewka DE/PL | fasolka-szparagowa DE/PL |
|------|-----------------|--------------------------|
| FACTS expand Wörter ≥400 | **~838** / **~880** | **~826** / **~884** |
| FACTS Inline-Links ≥4 (≥2 Rezept + ≥2 Blog) | **30** (16R+14B) / **30** | **29** (13R+16B) / **29** |
| Steps/Tips Inline-Links ≥2 | **6** / **6** | **6** / **6** |
| `relatedPostIds` ≥3 | 3 | 3 |
| Unique cover GET 200 | ja | ja |
| Affiliate | guide-only | guide-only |

---

## Integrator E — Merge-Checkliste

1. [ ] `seedRecipesWave15C` in Wave15-Aggregator / `seed.ts`
2. [ ] `W15_FACTS_C` in `recipe-articles.ts` Object.assign
3. [ ] Photo-IDs gegen A/B/D Status deduplizieren
4. [ ] `keyword-ownership.md` Primary final + Intent-Trennung W15
5. [ ] Visual Spot-Check: Möhren+Erbsen glasiert; grüne Stangenbohnen ≠ Bretońsku
6. [ ] Backlinks: sonntagsessen + fasolka-guide (descriptiv)
7. [ ] `SEED_VERSION` 28→29 nur durch E
8. [ ] Kein Teil-Push aus C

---

## Diff-Liste für Integrator E

1. `src/lib/data/seed-recipes-wave15-c.ts` (**neu**)
2. `src/lib/data/recipe-articles-w15-c.ts` (**neu**)
3. `content/wave-15-status-c.md` (**neu**)
4. `content/keyword-ownership.md` — +2 Primary + Intent W15 C draft
