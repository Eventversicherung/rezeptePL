# Wave 13 — Status Paket B (Wigilia-Süß + Bäckerei-Creme)

Status: **DONE** (Implementer B · 2026-07-21)  
Scope: `recipe-kutia` + `recipe-napoleonka` (NOT Wuzetka)  
No `SEED_VERSION` bump · no commit/push · no new blog pillar

---

## Deliverables

| Asset | ID | Slugs DE / PL | Cover Photo-ID | GET |
|-------|-----|---------------|----------------|-----|
| Recipe | `recipe-kutia` | `kutia` / `kutia` | `1558985212-fdbd3c3eb611` | **200** |
| Recipe | `recipe-napoleonka` | `napoleonka` / `napoleonka` | `1659275798960-ca2c2056d516` | **200** |

**Ziel-URLs (nach Integrator-Merge):**

- DE: `/de/rezepte/kutia`, `/de/rezepte/napoleonka`
- PL: `/pl/rezepte/kutia`, `/pl/rezepte/napoleonka`

Ownership (eingehalten):

- **Kutia** ≠ Makaron z makiem (Nudeln+Mohn) ≠ Makowiec (Hefeteig-Rolle; Technik bleibt `/blog/makowiec-technik`) ≠ Kompot z suszu; Wigilia bleibt Anlass-Owner
- **Napoleonka / Kremówka** ≠ Szarlotka ≠ Sernik ≠ Mazurek; **Wuzetka HOLD** (nicht angelegt)
- Affiliate: **guide-only** (`relatedProductIds` nicht gesetzt)

### Cover Visual-Fit (Acceptance §3)

- **Kutia** `1558985212-fdbd3c3eb611`: Schüssel mit körnig-cremigem Getreide-/Pudding-Look, dunkle Samen/Körner und Nüsse sichtbar — Weizen/Mohn/Nuss-Dessert-Intent. **Keine Nudeln**, keine Mohnrolle, kein Kompot-Glas.
- **Napoleonka** `1659275798960-ca2c2056d516`: Rechteckiger Blätterteig-Creme-Schnitt (millefeuille/kremówka), dicke Vanillecreme, Puderzucker auf dem Teller. **Keine Schoko-Torte (Wuzetka)**, kein Apfelkuchen, kein Käsekuchen.

---

## Neue Dateien

| Datei | Inhalt |
|-------|--------|
| `src/lib/data/seed-recipes-wave13-b.ts` | `seedRecipesWave13B` — beide Rezepte, `relatedPostIds` on-object, guide-only |
| `src/lib/data/recipe-articles-w13-b.ts` | `W13_FACTS_B` — Longform-FACTS mit Markdown-Inline-Links |
| `content/wave-13-status-b.md` | dieses Doc |

---

## relatedPostIds (on recipe)

| Rezept | relatedPostIds |
|--------|----------------|
| kutia | `post-wigilia`, `post-makowiec-technik`, `post-ersatzprodukte-de` |
| napoleonka | `post-sonntagsessen`, `post-ersatzprodukte-de`, `post-polenladen` |

---

## Touch / Backlinks (gesetzt)

| Bestehend | Aktion |
|-----------|--------|
| `seed-blog.ts` `post-wigilia` | `relatedRecipeIds` += `recipe-kutia` |
| `seed-blog.ts` `post-polenladen` | `relatedRecipeIds` += kutia + napoleonka |
| `seed-blog-w6.ts` `post-makowiec-technik` | `relatedRecipeIds` += `recipe-kutia` |
| `seed-blog-wave2.ts` `post-sonntagsessen` | `relatedRecipeIds` += `recipe-napoleonka` |
| `seed-blog-wave2.ts` `post-ersatzprodukte-de` | `relatedRecipeIds` += beide |
| `blog-bodies-de.ts` / `-pl.ts` | Wigilia → kutia (descriptiv; Speiseplan bleibt Owner; A-Grzybowa/Makaron-Sätze unangetastet in Struktur) |
| `recipe-articles-w12-b.ts` | Makaron variants → Kutia-Abgrenzung; Szarlotka variants → Napoleonka-Abgrenzung |
| `recipe-articles-w8-d-retrofit.ts` | Makowiec variants → Kutia-Abgrenzung |
| `content/keyword-ownership.md` | +2 Primary-Zeilen + Intent-Trennung W13 B draft |

**Nicht angefasst:** `SEED_VERSION`, Wave13 Aggregator/`seed.ts` Recipe-Import, `recipe-articles.ts` Object.assign, A/C/D Seed-/FACTS-Dateien, Wuzetka, Commit/Push.

---

## Final Photo-IDs (B) — für Unique-Gate E

```
1558985212-fdbd3c3eb611   # kutia (grain/seed/nut bowl pudding look, ≠ pasta)
1659275798960-ca2c2056d516   # napoleonka (cream puff pastry slice / millefeuille)
```

Geprüft gegen A (`1626200949840-…`, `1636044993194-…`), C (`1629321962567-…`, `1605992728160-…`), D (`1675619448864-…`) — keine Kollision.

---

## Gates (lokal gemessen)

| Gate | kutia DE/PL | napoleonka DE/PL |
|------|-------------|------------------|
| FACTS expand Wörter ≥400 | **434** / **452** | **432** / **448** |
| FACTS Inline-Links ≥4 (≥2 Rezept + ≥2 Blog) | **22** (10R+12B) / **22** | **20** (11R+9B) / **20** |
| Steps/Tips Inline-Links ≥2 | **6** / **6** | **5** / **5** |
| `relatedPostIds` ≥3 | 3 | 3 |
| Unique cover GET 200 | ja | ja |
| Affiliate | guide-only | guide-only |

---

## Integrator E — Merge-Checkliste

1. [ ] `seedRecipesWave13B` in Wave13-Aggregator / `seed.ts`
2. [ ] `W13_FACTS_B` in `recipe-articles.ts` Object.assign
3. [ ] Photo-IDs gegen A/C/D Status deduplizieren
4. [ ] `keyword-ownership.md` +7 Primary final + Intent-Trennung W13
5. [ ] `SEED_VERSION` 26→27 nur durch E
6. [ ] Visual: Kutia ≠ Nudeln/Makaron; Napoleonka ≠ Wuzetka-Schoko / ≠ Szarlotka
7. [ ] Kein Teil-Push aus B

## Konflikt-Hotspot

`post-wigilia` Body: A = Grzybowa-Satz; B = Kutia in Punkt 9 / PL-Liste — getrennte Sätze, nicht gegenseitig überschreiben. Wuzetka nicht anlegen.
