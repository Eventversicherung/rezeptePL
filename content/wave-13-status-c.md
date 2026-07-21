# Wave 13 — Status Paket C (Hefezopf + Aufschnitt)

Status: **DONE** (Implementer C · 2026-07-21)  
Scope: `recipe-chalka` + `recipe-pasztet`  
No `SEED_VERSION` bump · no commit/push · no new blog pillar

---

## Deliverables

| Asset | ID | Slugs DE / PL | Cover Photo-ID | GET |
|-------|-----|---------------|----------------|-----|
| Recipe | `recipe-chalka` | `chalka` / `chalka` | `1629321962567-e15cd77bb5ec` | **200** |
| Recipe | `recipe-pasztet` | `pasztet` / `pasztet` | `1605992728160-8d119bf2b5db` | **200** |

Ownership (eingehalten):

- **Chałka** ≠ Babka (Gugelhupf) ≠ Pączki ≠ Racuchy; Drożdżówka HOLD
- **Pasztet drobiowy** ≠ Kaszanka ≠ Kotlet mielony; Kiełbasa-Arten bleibt Lexikon-Owner
- Wielkanoc / Sonntagsessen bleiben Anlass-/Kultur-Owner
- Affiliate: **guide-only** (`relatedProductIds` nicht gesetzt)

### Cover Visual-Fit (Acceptance §3)

- **Chałka** (`1629321962567-e15cd77bb5ec`): Nahaufnahme eines **geflochtenen** hellen Hefelaibs mit glänzender Ei-Kruste und **Sesam** — klar Zopf/Laib, keine Babka-Gugelhupf-Form, keine Pączki.
- **Pasztet** (`1605992728160-8d119bf2b5db`): Rechteckige **Pastete/Terrine angeschnitten** (eine Scheibe flach daneben), Brot- und Kräuter-Kontext — klar Aufschnitt/Pastete, kein Kaszanka-Ring, kein Salami-Stick, kein Steak.

---

## Neue Dateien

- `src/lib/data/seed-recipes-wave13-c.ts` — `seedRecipesWave13C`
- `src/lib/data/recipe-articles-w13-c.ts` — `W13_FACTS_C`
- `content/wave-13-status-c.md` (dieses Doc)

---

## Touch / Backlinks (gesetzt)

| Bestehend | Aktion |
|-----------|--------|
| `post-wielkanoc` | `relatedRecipeIds` += chalka, pasztet; Body DE+PL → Chałka (Süßes/Brot) + Pasztet (Aufschnitt), Speiseplan bleibt Owner |
| `post-sonntagsessen` | `relatedRecipeIds` += chalka, pasztet; Body DE+PL → Chałka / Pasztet descriptiv |
| `recipe-articles-w9-c` (Babka) | variants → Chałka Abgrenzung |
| `recipe-articles-w8-c` (Pączki) | variants → Chałka Abgrenzung |
| `recipe-articles-w9-d` (Kaszanka) | variants → Pasztet Abgrenzung |
| `recipe-articles.ts` (Mielony) | variants → Pasztet Abgrenzung |
| `keyword-ownership.md` | +2 Primary-Zeilen + Intent-Trennung W13 C draft |

**Nicht angefasst:** `SEED_VERSION`, Wave13 Aggregator/`seed.ts` Recipe-Import, `recipe-articles.ts` Object.assign für W13_FACTS_C, A/B/D Seed-Dateien, Commit/Push.

---

## Final Photo-IDs (C) — für Unique-Gate E

```
1629321962567-e15cd77bb5ec   # chalka — braided challah sesame
1605992728160-8d119bf2b5db   # pasztet — sliced pâté/terrine loaf
```

---

## Gates (lokal gemessen)

| Gate | chalka DE/PL | pasztet DE/PL |
|------|--------------|---------------|
| FACTS expand Wörter ≥400 | **1076** / **929** | **1037** / **919** |
| FACTS Inline-Links ≥4 (≥2 Rezept + ≥2 Blog) | **26** (12R+14B) / **26** | **25** (11R+14B) / **25** |
| Steps/Tips Inline-Links ≥2 | **8** / **8** | **6** / **6** |
| `relatedPostIds` ≥3 | 3 | 3 |
| Unique cover GET 200 | ja | ja |
| Affiliate | guide-only | guide-only |

---

## Integrator E — Merge-Checkliste

1. [ ] `seedRecipesWave13C` in Wave13-Aggregator / `seed.ts`
2. [ ] `W13_FACTS_C` in `recipe-articles.ts` Object.assign
3. [ ] Photo-IDs gegen A/B/D Status deduplizieren
4. [ ] `keyword-ownership.md` +7 Primary final + Intent-Trennung W13
5. [ ] `SEED_VERSION` 26→27 nur durch E
6. [ ] Kein Teil-Push aus C

---

## Diff-Liste für Integrator E

1. `src/lib/data/seed-recipes-wave13-c.ts` (**neu**)
2. `src/lib/data/recipe-articles-w13-c.ts` (**neu**)
3. `content/wave-13-status-c.md` (**neu**)
4. `content/keyword-ownership.md` — +2 Primary + Intent W13 C
5. `src/lib/data/seed-blog-wave2.ts` — relatedRecipeIds wielkanoc/sonntagsessen
6. `src/lib/data/blog-bodies-wave2-de.ts` — Chałka/Pasztet descriptiv
7. `src/lib/data/blog-bodies-wave2-pl.ts` — analog
8. `src/lib/data/recipe-articles-w9-c.ts` — Babka variants → chalka
9. `src/lib/data/recipe-articles-w8-c.ts` — Pączki variants → chalka
10. `src/lib/data/recipe-articles-w9-d.ts` — Kaszanka variants → pasztet
11. `src/lib/data/recipe-articles.ts` — Mielony variants → pasztet
