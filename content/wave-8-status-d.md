# Wave 8 — Status Paket D (Knedle + FACTS Retrofit)

Status: **READY FOR INTEGRATOR E** · kein Commit/Push · kein `SEED_VERSION`-Bump  
Owner: Implementer D

---

## Deliverables

| File | Role |
|------|------|
| `src/lib/data/seed-recipes-wave8-d.ts` | `recipe-knedle-sliwki` (slug `knedle-sliwki`) |
| `src/lib/data/recipe-articles-w8-d.ts` | `W8_FACTS_D` (Knedle) + exported `ArticleFacts` type |
| `src/lib/data/recipe-articles-w8-d-retrofit.ts` | `W8_FACTS_D_RETROFIT` — **full** FACTS replacements for 11 W5–W7 IDs |
| `src/lib/data/recipe-articles.ts` | `Object.assign(FACTS, W8_FACTS_D_RETROFIT, W8_FACTS_D)` nach C-Spread |
| `src/lib/data/seed.ts` | Import `seedRecipesWave8D` + `relatedPostIds` für Knedle |
| `content/keyword-ownership.md` | Primary KW Knedle |
| Backlinks | Pierogi-Guide DE/PL, Wigilia DE/PL, Naleśniki-Guide DE/PL, Makowiec-Technik DE/PL, Leniwe steps |

---

## Agent E — Merge Notes

1. **Rezept-Dateien:** `seedRecipesWave8D` in finale `seed-recipes-wave8.ts` ziehen (neben A/B/C).
2. **FACTS:** Retrofit + Knedle per `Object.assign` belassen bzw. nach A/B-Spreads erneut anwenden, damit Link-FACTS die alten Klartext-W5–W7-Einträge überschreiben.
3. **Reihenfolge empfohlen:** `Object.assign(FACTS, W8_FACTS_A, W8_FACTS_B, W8_FACTS_C, W8_FACTS_D_RETROFIT, W8_FACTS_D)` — D-Retrofit gewinnt auf W5–W7-Keys; Knedle zuletzt.
4. **`seed.ts` relatedPostIds Knedle** behalten:
   `post-pierogi-guide`, `post-sonntagsessen`, `post-polenladen`, `post-ersatzprodukte-de`
5. **SEED_VERSION** nur E: 21 → 22.
6. Intent-Schutz: Knedle ≠ Pierogi-Familie / Leniwe / Pyzy / Uszka (descriptive Anchors only).

---

## Audit — Inline-Links in expand(FACTS) Longform

Gemessen via `getRecipeArticle` (Markdown `[…](/de|pl/…)`). Gate: ≥4 Links/Locale, davon ≥2 Rezept + ≥2 Blog. Knedle zusätzlich ≥400 Wörter/Locale.

| Recipe ID | Links DE | Links PL | Words DE | Words PL | Recipe/Blog DE | Recipe/Blog PL |
|-----------|---------:|---------:|---------:|---------:|----------------|----------------|
| `recipe-knedle-sliwki` | 8 | 8 | 1034 | 994 | 3 / 5 | 3 / 5 |
| `recipe-pierogi-leniwe` | 10 | 10 | 940 | 911 | 4 / 6 | 4 / 6 |
| `recipe-kopytka` | 10 | 10 | 876 | 844 | 6 / 4 | 6 / 4 |
| `recipe-lazanki` | 10 | 10 | 889 | 864 | 3 / 7 | 3 / 7 |
| `recipe-pyzy` | 10 | 10 | 887 | 855 | 4 / 6 | 4 / 6 |
| `recipe-zrazy` | 12 | 12 | 895 | 856 | 6 / 6 | 6 / 6 |
| `recipe-makowiec` | 12 | 12 | 917 | 889 | 5 / 7 | 5 / 7 |
| `recipe-uszka` | 15 | 15 | 938 | 903 | 6 / 9 | 6 / 9 |
| `recipe-karp` | 14 | 14 | 931 | 888 | 7 / 7 | 7 / 7 |
| `recipe-krokiety` | 15 | 15 | 898 | 862 | 5 / 10 | 5 / 10 |
| `recipe-sernik` | 14 | 14 | 921 | 883 | 4 / 10 | 4 / 10 |
| `recipe-sledz` | 14 | 14 | 923 | 892 | 5 / 9 | 5 / 9 |

**Result:** 0 IDs under gate.

---

## Backlinks (surgical)

| Target | Change |
|--------|--------|
| Pierogi-Guide DE/PL | Abschnitts-Satz: Knedle ≠ Pierogi; Link Leniwe |
| Wigilia DE/PL | Inline → uszka, karp, sledz, makowiec, sernik, krokiety |
| Naleśniki-Guide DE/PL | Inline → krokiety |
| Makowiec-Technik DE/PL | Inline → sernik |
| Leniwe steps | Tip ↔ knedle + pierogi-guide |

---

## Gates checklist

- [x] Knedle published seed + unique Unsplash cover
- [x] Knedle FACTS ≥400 DE+PL, ≥4 links/locale
- [x] 11 retrofit IDs ≥4 links/locale after patch
- [x] Intent klar ≠ Pierogi / Leniwe / Pyzy / Uszka
- [x] No SEED_VERSION bump
- [x] No commit / push
