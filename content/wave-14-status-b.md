# Wave 14 — Status Paket B (Ostern-Beilagen)

Status: **DONE** (Implementer B · 2026-07-21)  
Scope: `recipe-jajka-faszerowane` + `recipe-cwikla`  
No `SEED_VERSION` bump · no commit/push · no new blog pillar

---

## Deliverables

| Asset | ID | Slugs DE / PL | Cover Photo-ID | GET |
|-------|-----|---------------|----------------|-----|
| Recipe | `recipe-jajka-faszerowane` | `jajka-faszerowane` / `jajka-faszerowane` | `1626895597772-74988e263fab` | **200** |
| Recipe | `recipe-cwikla` | `cwikla` / `cwikla` | `1541690325738-d4ba017004b6` | **200** |

**Ziel-URLs (nach Integrator-Merge):**

- DE: `/de/rezepte/jajka-faszerowane`, `/de/rezepte/cwikla`
- PL: `/pl/rezepte/jajka-faszerowane`, `/pl/rezepte/cwikla`

Ownership (eingehalten):

- **Jajka faszerowane** ≠ Sałatka jarzynowa (Mayo-Gemüse) ≠ Mizeria (Gurke/Śmietana) ≠ Pasztet; Wielkanoc bleibt Anlass-Owner
- **Ćwikła** ≠ Buraczki (warme Beilage) ≠ Barszcz ≠ Botwinka ≠ Sałatka; Wielkanoc bleibt Anlass-Owner
- Affiliate: **guide-only** (`relatedProductIds` nicht gesetzt)

### Cover Visual-Fit (Acceptance §3)

- **Jajka faszerowane** `1626895597772-74988e263fab`: Weiße Platte mit längs aufgeschnittenen Eiern, **pipierte gelbe Mayo/Eigelb-Füllung** sichtbar, Schnittlauch darüber — klar gefüllt/Buffet. **Keine** plain boiled halves only, **kein** Mayo-Gemüsesalat (Sałatka), **keine** Mizeria.
- **Ćwikła** `1541690325738-d4ba017004b6`: Schüssel mit **dunkelmagenta geriebenem** Bete-Relish und Löffel — kalter Relish-Charakter. **Keine** warme Buraczki-Pfanne, **keine** Barszcz-Brühe, **keine** Botwinka-Suppe.

---

## Neue Dateien

| Datei | Inhalt |
|-------|--------|
| `src/lib/data/seed-recipes-wave14-b.ts` | `seedRecipesWave14B` — beide Rezepte, `relatedPostIds` on-object, guide-only |
| `src/lib/data/recipe-articles-w14-b.ts` | `W14_FACTS_B` — Longform-FACTS mit Markdown-Inline-Links |
| `content/wave-14-status-b.md` | dieses Doc |

---

## relatedPostIds (on recipe)

| Rezept | relatedPostIds |
|--------|----------------|
| jajka-faszerowane | `post-wielkanoc`, `post-sonntagsessen`, `post-polenladen` |
| cwikla | `post-wielkanoc`, `post-polenladen`, `post-ersatzprodukte-de` |

---

## Touch / Backlinks (gesetzt)

| Bestehend | Aktion |
|-----------|--------|
| `seed-blog-wave2.ts` `post-wielkanoc` | `relatedRecipeIds` += jajka-faszerowane + cwikla |
| `seed-blog-wave2.ts` `post-sonntagsessen` | `relatedRecipeIds` += `recipe-jajka-faszerowane` |
| `seed-blog-wave2.ts` `post-ersatzprodukte-de` | `relatedRecipeIds` += `recipe-cwikla` |
| `seed-blog.ts` `post-polenladen` | `relatedRecipeIds` += jajka-faszerowane + cwikla |
| `blog-bodies-wave2-de.ts` / `-pl.ts` | Wielkanoc → getrennte descriptive Sätze Jajka + Ćwikła (Speiseplan bleibt Owner) |
| `recipe-articles-w12-c.ts` | Buraczki variants → Ćwikła-Abgrenzung |
| `recipe-articles-w9-b.ts` | Sałatka variants → Jajka-Abgrenzung |
| `content/keyword-ownership.md` | +2 Primary-Zeilen + Intent-Trennung W14 B draft |

**Nicht angefasst:** `SEED_VERSION`, Wave14 Aggregator/`seed.ts` Recipe-Import, `recipe-articles.ts` Object.assign, A/C/D Seed-/FACTS-Dateien, Commit/Push.

---

## Final Photo-IDs (B) — für Unique-Gate E

```
1626895597772-74988e263fab   # jajka-faszerowane (piped stuffed eggs + chives platter)
1541690325738-d4ba017004b6   # cwikla (grated beet relish bowl, cold)
```

Geprüft gegen Live-Katalog (alle seed-recipes + seed.ts) — keine Kollision zum Zeitpunkt B. E dedupt final vs A/C/D Status.

---

## Gates (lokal gemessen)

| Gate | jajka DE/PL | cwikla DE/PL |
|------|-------------|--------------|
| FACTS expand Wörter ≥400 | **491** / **485** | **428** / **431** |
| FACTS Inline-Links ≥4 (≥2 Rezept + ≥2 Blog) | **29** (14R+15B) / **29** | **33** (21R+12B) / **33** |
| Steps/Tips Inline-Links ≥2 | **8** / **8** | **8** / **8** |
| `relatedPostIds` ≥3 | 3 | 3 |
| Unique cover GET 200 | ja | ja |
| Affiliate | guide-only | guide-only |

---

## Integrator E — Merge-Checkliste

1. [ ] `seedRecipesWave14B` in Wave14-Aggregator / `seed.ts`
2. [ ] `W14_FACTS_B` in `recipe-articles.ts` Object.assign
3. [ ] Photo-IDs gegen A/C/D Status deduplizieren
4. [ ] `keyword-ownership.md` +7 Primary final + Intent-Trennung W14
5. [ ] `SEED_VERSION` 27→28 nur durch E
6. [ ] Visual: Jajka = gefüllt/aufgeschnitten; Ćwikła ≠ warme Buraczki
7. [ ] Kein Teil-Push aus B

## Konflikt-Hotspot

`post-wielkanoc` Body: getrennte Sätze Jajka / Ćwikła — nicht mit A/C/D überschreiben. `keyword-ownership.md` parallel mit D (Leczo) — E final dedupt.
