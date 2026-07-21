# Wave 12 — Status Paket B (Wigilia-Pasta + Apfelkuchen)

Status: **DONE** (Implementer B · 2026-07-21)  
Scope: `recipe-makaron-z-makiem` + `recipe-szarlotka`  
No `SEED_VERSION` bump · no commit/push · no new blog pillar

---

## Deliverables

| Asset | ID | Slugs DE / PL | Cover Photo-ID | GET |
|-------|-----|---------------|----------------|-----|
| Recipe | `recipe-makaron-z-makiem` | `makaron-z-makiem` / `makaron-z-makiem` | `1630563775062-bbaf8ad3d73c` | **200** |
| Recipe | `recipe-szarlotka` | `szarlotka` / `szarlotka` | `1694505396696-b093cca3d8ea` | **200** |

**Ziel-URLs (nach Integrator-Merge):**

- DE: `/de/rezepte/makaron-z-makiem`, `/de/rezepte/szarlotka`
- PL: `/pl/rezepte/makaron-z-makiem`, `/pl/rezepte/szarlotka`

Ownership (eingehalten):

- **Makaron z makiem** ≠ Makowiec (Hefeteig-Rolle; Technik bleibt `/blog/makowiec-technik`) ≠ Makaron z serem (Pasta+Twaróg) ≠ Babka/Piernik Primary
- **Szarlotka** ≠ Racuchy (Hefe-Pfanne) ≠ Piernik ≠ Sernik ≠ Babka; Sonntagsessen bleibt Kultur-Owner
- Affiliate: **guide-only** (`relatedProductIds` nicht gesetzt)

Cover-Fit:

- Makaron z makiem: gekochte Nudeln mit dunklen Körnern/Specks (Unsplash-Proxy — exakter Mohn-Teller im Free-Pool dünn; **keine** Mohnrolle)
- Szarlotka: Apfelkuchen vom Blech/Form mit Äpfeln daneben — klar Apfelkuchen-Intent

---

## Neue Dateien

| Datei | Inhalt |
|-------|--------|
| `src/lib/data/seed-recipes-wave12-b.ts` | `seedRecipesWave12B` — beide Rezepte, `relatedPostIds` on-object, guide-only |
| `src/lib/data/recipe-articles-w12-b.ts` | `W12_FACTS_B` — Longform-FACTS mit Markdown-Inline-Links |
| `content/wave-12-status-b.md` | dieses Doc |

---

## relatedPostIds (on recipe)

| Rezept | relatedPostIds |
|--------|----------------|
| makaron-z-makiem | `post-wigilia`, `post-makowiec-technik`, `post-ersatzprodukte-de` |
| szarlotka | `post-sonntagsessen`, `post-ersatzprodukte-de`, `post-polenladen` |

---

## Touch / Backlinks (gesetzt)

| Bestehend | Aktion |
|-----------|--------|
| `seed-blog.ts` `post-wigilia` | `relatedRecipeIds` += `recipe-makaron-z-makiem` |
| `seed-blog.ts` `post-polenladen` | `relatedRecipeIds` += makaron-z-makiem + szarlotka |
| `seed-blog-w6.ts` `post-makowiec-technik` | `relatedRecipeIds` += `recipe-makaron-z-makiem` |
| `seed-blog-wave2.ts` `post-sonntagsessen` | `relatedRecipeIds` += `recipe-szarlotka` |
| `seed-blog-wave2.ts` `post-ersatzprodukte-de` | `relatedRecipeIds` += beide |
| `blog-bodies-de.ts` / `-pl.ts` | Wigilia → makaron-z-makiem (descriptiv, Speiseplan bleibt Owner; A-Grzybowa unangetastet) |
| `blog-bodies-w6-de.ts` / `-pl.ts` | Makowiec-Technik Abgrenzung → makaron-z-makiem |
| `blog-bodies-wave2-de.ts` / `-pl.ts` | Sonntagsessen Süßes → szarlotka (≠ Racuchy) |
| `recipe-articles-w10-d.ts` | makaron-z-serem variants → Abgrenzung makaron-z-makiem |
| `content/keyword-ownership.md` | +2 Primary-Zeilen + Intent-Trennung W12 B |

**Nicht angefasst:** `SEED_VERSION`, Wave12 Aggregator/`seed.ts` Recipe-Import, `recipe-articles.ts` Object.assign, routing/family-slug-Dateien, A/C/D Seed-/FACTS-Dateien, Commit/Push.

---

## Final Photo-IDs (B) — für Unique-Gate E

```
1630563775062-bbaf8ad3d73c   # makaron-z-makiem (Nudeln+dunkle Körner Proxy, ≠ Rolle)
1694505396696-b093cca3d8ea   # szarlotka (Apfelkuchen Blech/Form)
```

Geprüft gegen A (`1761545832874-…`, `1712334619829-…`), C (`1776268927285-…`, `1764314555345-…`), D (`1600688685721-…`, `1708782340699-…`) — keine Kollision.

---

## Gates (lokal gemessen)

| Gate | makaron-z-makiem DE/PL | szarlotka DE/PL |
|------|----------------------|-----------------|
| FACTS expand Wörter ≥400 | **1177** / **1147** | **1097** / **1067** |
| FACTS Inline-Links ≥4 (≥2 Rezept + ≥2 Blog) | **19** (8R+11B) / **19** | **22** (14R+8B) / **22** |
| Steps/Tips Inline-Links ≥2 | **6** / **6** | **5** / **5** |
| `relatedPostIds` ≥3 | 3 | 3 |
| Unique cover GET 200 | ja | ja |
| Affiliate | guide-only | guide-only |

---

## Integrator E — Merge-Checkliste

1. [ ] `seedRecipesWave12B` in Wave12-Aggregator / `seed.ts`
2. [ ] `W12_FACTS_B` in `recipe-articles.ts` Object.assign
3. [ ] Photo-IDs gegen A/C/D Status deduplizieren
4. [ ] `keyword-ownership.md` +8 Primary final + Intent-Trennung W12
5. [ ] `SEED_VERSION` 25→26 nur durch E
6. [ ] Visual: Makaron ≠ Mohnrolle; Szarlotka = Apfelkuchen
7. [ ] Kein Teil-Push aus B

## Konflikt-Hotspot

`post-wigilia` Body: A = Grzybowa-Satz; B = Makaron-z-makiem in Mohnspeise-Slot — getrennte Sätze, nicht gegenseitig überschreiben.
