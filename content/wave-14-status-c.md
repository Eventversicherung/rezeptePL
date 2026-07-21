# Wave 14 — Status Paket C (Composed Placki + Street)

Status: **DONE** (Implementer C · 2026-07-21)  
Scope: `recipe-placek-po-wegiersku` + `recipe-zapiekanka`  
No `SEED_VERSION` bump · no commit/push · no new blog pillar · no 5th Placki-Family-Variante

---

## Deliverables

| Asset | ID | Slugs DE / PL | Cover Photo-ID | GET |
|-------|-----|---------------|----------------|-----|
| Recipe | `recipe-placek-po-wegiersku` | `placek-po-wegiersku` / `placek-po-wegiersku` | `1780019676104-79da19c02d8f` | **200** |
| Recipe | `recipe-zapiekanka` | `zapiekanka` / `zapiekanka` | `1670843633381-46d78a3fb6a0` | **200** |

Ownership (eingehalten):

- **Placek po węgiersku** = composed Primary (Puffer + Gulasch-Topping, Käse optional) ≠ Placki alone ≠ Gulasz alone
- **Zapiekanka** ≠ Krokiety ≠ Naleśniki ≠ Pierogi (Baguette-Street)
- Placki-Guide / Gulasz bleiben Einzeln-Owner — nur descriptive Crosslinks
- Affiliate: **guide-only** (`relatedProductIds` nicht gesetzt)

### Cover Visual-Fit (Acceptance §3)

- **Placek po węgiersku** (`1780019676104-79da19c02d8f`): Rustikales Holzbrett mit **goldbraunen Placki/Pancakes** in einer Schale **und** einem offenen Gusseisen-Töpfchen mit **dickem Fleisch-/Gulasch-Eintopf** — beide Komponenten des Composed-Gerichts sichtbar; kein nackter Placki-Stack allein, keine reine Gulaschschüssel ohne Puffer, keine Pizza/Zapiekanka. *(Hinweis für E: Unsplash-freie „Sauce-on-pancake“-Plating-Fotos sind rar; dieses Bild zeigt beide Pflicht-Elemente auf einem composed Serving-Board.)*
- **Zapiekanka** (`1670843633381-46d78a3fb6a0`): Langes **offenes Baguette** mit **geschmolzenem Käse**, Pilzen und Schinken, Käsefaden zwischen getrennten Hälften — klar Straßenfood-Baguette-Form, keine Krokiety-Rollen, keine Naleśniki, keine runde Pizza-Scheibe.

---

## Neue Dateien

- `src/lib/data/seed-recipes-wave14-c.ts` — `seedRecipesWave14C`
- `src/lib/data/recipe-articles-w14-c.ts` — `W14_FACTS_C`
- `content/wave-14-status-c.md` (dieses Doc)

---

## Touch / Backlinks (gesetzt)

| Bestehend | Aktion |
|-----------|--------|
| `post-placki-guide` | `relatedRecipeIds` += placek-po-wegiersku; Body DE+PL → composed Placek descriptiv (Broad bleibt Guide) |
| `recipe-placki` FACTS | serve/mistakes/variants → Placek composed descriptiv |
| `recipe-gulasz` FACTS | serve/mistakes/variants → Placek composed descriptiv (Leczo-Abgrenzung von D belassen) |
| `post-sonntagsessen` | `relatedRecipeIds` += placek + zapiekanka; Body DE+PL → beide descriptiv |
| `post-polenladen` | `relatedRecipeIds` += zapiekanka + placek |
| `post-ersatzprodukte-de` | `relatedRecipeIds` += zapiekanka |
| `post-dutch-oven` | `relatedRecipeIds` += placek-po-wegiersku |
| `keyword-ownership.md` | +2 Primary-Zeilen + Intent-Trennung W14 C draft |

**Nicht angefasst:** `SEED_VERSION`, Wave14 Aggregator/`seed.ts` Recipe-Import, `recipe-articles.ts` Object.assign für `W14_FACTS_C`, A/B/D Seed-Dateien, Commit/Push.

---

## Final Photo-IDs (C) — für Unique-Gate E

```
1780019676104-79da19c02d8f   # placek — pancakes + goulash pot on board
1670843633381-46d78a3fb6a0   # zapiekanka — open baguette cheese melt
```

Dedup vs A/B/D Status/Seeds (Stichprobe): A `1536749605762…` / `1609099724543…` · B `1541690325738…` / `1626895597772…` · D `1745817095847…` — **keine Kollision**.

---

## Gates (lokal gemessen)

| Gate | placek DE/PL | zapiekanka DE/PL |
|------|--------------|------------------|
| FACTS expand Wörter ≥400 | **1051** / **1013** | **982** / **942** |
| FACTS Inline-Links ≥4 (≥2 Rezept + ≥2 Blog) | **26** (10R+16B) / **26** | **25** (12R+13B) / **25** |
| Steps/Tips Inline-Links ≥2 | **5** / **5** | **6** / **6** |
| `relatedPostIds` ≥3 | 3 | 3 |
| Unique cover GET 200 | ja | ja |
| Affiliate | guide-only | guide-only |

---

## Integrator E — Merge-Checkliste

1. [ ] `seedRecipesWave14C` in Wave14-Aggregator / `seed.ts`
2. [ ] `W14_FACTS_C` in `recipe-articles.ts` Object.assign
3. [ ] Photo-IDs gegen A/B/D Status deduplizieren
4. [ ] `keyword-ownership.md` +7 Primary final + Intent-Trennung W14
5. [ ] Visual Spot-Check Placek: Puffer+Gulasch-Signale; Zapiekanka: Baguette-Form
6. [ ] `SEED_VERSION` 27→28 nur durch E
7. [ ] Kein Teil-Push aus C

---

## Diff-Liste für Integrator E

1. `src/lib/data/seed-recipes-wave14-c.ts` (**neu**)
2. `src/lib/data/recipe-articles-w14-c.ts` (**neu**)
3. `content/wave-14-status-c.md` (**neu**)
4. `content/keyword-ownership.md` — +2 Primary + Intent W14 C draft
5. `src/lib/data/recipe-articles.ts` — Placki + Gulasz FACTS → Placek descriptive
6. `src/lib/data/seed-blog-w3c.ts` — placki-guide relatedRecipeIds
7. `src/lib/data/blog-bodies-w3c-de.ts` / `blog-bodies-w3c-pl.ts` — Placek descriptiv (+ PL Gulasz-Link-Fix)
8. `src/lib/data/seed-blog-wave2.ts` — sonntagsessen / ersatzprodukte / dutch-oven related
9. `src/lib/data/blog-bodies-wave2-de.ts` / `blog-bodies-wave2-pl.ts` — Placek + Zapiekanka descriptiv
10. `src/lib/data/seed-blog.ts` — polenladen relatedRecipeIds
