# Wave 15 — Status Paket B (Fest / Wigilia-Buffet)

Status: **DONE** (Implementer B · 2026-07-21)  
Scope: `recipe-galareta` + `recipe-salatka-sledziowa`  
No `SEED_VERSION` bump · no commit/push · no new blog pillar

---

## Deliverables

| Asset | ID | Slugs DE / PL | Cover Photo-ID | GET |
|-------|-----|---------------|----------------|-----|
| Recipe | `recipe-galareta` | `galareta` / `galareta` | `1750874694799-ab25e24549d3` | **200** |
| Recipe | `recipe-salatka-sledziowa` | `salatka-sledziowa` / `salatka-sledziowa` | `1719403196215-304b79398cad` | **200** |

**Ziel-URLs (nach Integrator-Merge):**

- DE: `/de/rezepte/galareta`, `/de/rezepte/salatka-sledziowa`
- PL: `/pl/rezepte/galareta`, `/pl/rezepte/salatka-sledziowa`

Ownership (eingehalten):

- **Galareta** ≠ Pasztet ≠ Sałatka jarzynowa ≠ Jajka faszerowane; Wielkanoc/Sonntagsessen bleiben Anlass-/Kultur-Owner
- **Sałatka śledziowa** ≠ Śledź w oleju ≠ Sałatka jarzynowa; Wigilia bleibt Anlass-Owner
- Affiliate: **guide-only** (`relatedProductIds` nicht gesetzt)

### Cover Visual-Fit (Acceptance §3)

- **Galareta** `1750874694799-ab25e24549d3`: Zwei Scheiben **Fleisch-Galantine/Terrine** mit sichtbarer gelatinöser Bindung (Fleischstücke + Karottenflecken in Gelee), kalt auf Teller. **Kein** warmer Eintopf, **keine** Pastete ohne Gelee-Charakter, **keine** Wurstscheiben ohne Aspik.
- **Sałatka śledziowa** `1719403196215-304b79398cad`: Schicht-/Buffet-**Heringssalat** mit **Mayo-Drizzle** und cremigen Lagen (≠ plain Filets in Öl, ≠ homogener Mayo-Gemüsesalat ohne Fisch-Charakter).

---

## Neue Dateien

| Datei | Inhalt |
|-------|--------|
| `src/lib/data/seed-recipes-wave15-b.ts` | `seedRecipesWave15B` — beide Rezepte, `relatedPostIds` on-object, guide-only |
| `src/lib/data/recipe-articles-w15-b.ts` | `W15_FACTS_B` — Longform-FACTS mit Markdown-Inline-Links |
| `content/wave-15-status-b.md` | dieses Doc |

---

## relatedPostIds (on recipe)

| Rezept | relatedPostIds |
|--------|----------------|
| galareta | `post-sonntagsessen`, `post-polenladen`, `post-wielkanoc` |
| salatka-sledziowa | `post-wigilia`, `post-polenladen`, `post-ersatzprodukte-de` |

---

## Touch / Backlinks (gesetzt)

| Bestehend | Aktion |
|-----------|--------|
| `seed-blog.ts` `post-wigilia` | `relatedRecipeIds` += salatka-sledziowa + galareta |
| `seed-blog.ts` `post-polenladen` | `relatedRecipeIds` += galareta + salatka-sledziowa |
| `seed-blog-wave2.ts` `post-wielkanoc` | `relatedRecipeIds` += `recipe-galareta` |
| `seed-blog-wave2.ts` `post-sonntagsessen` | `relatedRecipeIds` += `recipe-galareta` |
| `seed-blog-wave2.ts` `post-ersatzprodukte-de` | `relatedRecipeIds` += `recipe-salatka-sledziowa` |
| `blog-bodies-de.ts` / `blog-bodies-pl.ts` | Wigilia → descriptive Anchor Sałatka śledziowa ≠ Śledź w oleju |
| `content/keyword-ownership.md` | +2 Primary-Zeilen + Intent-Trennung W15 B draft |

**Nicht angefasst:** `SEED_VERSION`, Wave15 Aggregator/`seed.ts` Recipe-Import, `recipe-articles.ts` Object.assign, A/C/D Seed-/FACTS-Dateien, Commit/Push.

---

## Final Photo-IDs (B) — für Unique-Gate E

```
1750874694799-ab25e24549d3   # galareta (meat galantine / aspic-bound terrine slices)
1719403196215-304b79398cad   # salatka-sledziowa (layered herring salad + mayo drizzle)
```

Geprüft gegen Live-Katalog (alle seed-recipes + seed.ts) — keine Kollision zum Zeitpunkt B. E dedupt final vs A/C/D Status.

---

## Gates (lokal gemessen)

| Gate | galareta DE/PL | salatka-sledziowa DE/PL |
|------|----------------|-------------------------|
| FACTS expand Wörter ≥400 | **563** / **568** | **484** / **488** |
| FACTS Inline-Links ≥4 (≥2 Rezept + ≥2 Blog) | **28** (12R+16B) / **28** | **23** (8R+15B) / **23** |
| Steps/Tips Inline-Links ≥2 | **8** / **8** | **7** / **7** |
| `relatedPostIds` ≥3 | 3 | 3 |
| Unique cover GET 200 | ja | ja |
| Affiliate | guide-only | guide-only |

---

## Integrator E — Merge-Checkliste

1. [ ] `seedRecipesWave15B` in Wave15-Aggregator / `seed.ts`
2. [ ] `W15_FACTS_B` in `recipe-articles.ts` Object.assign
3. [ ] Photo-IDs gegen A/C/D Status deduplizieren
4. [ ] `keyword-ownership.md` Primary final + Intent-Trennung W15
5. [ ] `SEED_VERSION` 28→29 nur durch E
6. [ ] Visual: Galareta = Gelee/Galantine mit Fleisch; Śledziowa ≠ Öl-Śledź ≠ Jarzynowa
7. [ ] Kein Teil-Push aus B

## Konflikt-Hotspot

`post-wigilia` Body: Sałatka śledziowa descriptiv neben Śledź — nicht mit D (Kisiel) überschreiben. `keyword-ownership.md` parallel mit A/C/D — E final dedupt.
`seed-blog.ts` / `seed-blog-wave2.ts` relatedRecipeIds: parallel von A/C/D — B-IDs belassen.
