# Wave 8 — Status Paket C (Pączki)

Status: **DONE (Implementer C)** · kein Commit/Push · kein `SEED_VERSION`-Bump  
Stand: 2026-07-20

---

## Deliverables

| Asset | ID | Slugs DE / PL | Cover |
|-------|-----|---------------|-------|
| Blog pillar | `post-paczek-technik` | `paczek-technik` / `paczki-technika` | `photo-1558326567-98ae2405596b` (unique) |
| Recipe | `recipe-paczki` | `paczki` / `paczki` | `photo-1527515637462-cff94eecc1ac` (unique) |

Ownership (eingehalten):

- **Tłusty Czwartek** = Anlass/Kultur (nicht „Pączki Rezept“)
- **Pillar** = Technik / Hefe frittieren
- **Rezept** = Cook-Intent „Pączki Rezept“
- **Faworki** Technik/Rezept unangetastet als Owner — nur Backlinks *zu* Pączki

---

## Neue Dateien

- `src/lib/data/blog-bodies-w8-de.ts`
- `src/lib/data/blog-bodies-w8-pl.ts`
- `src/lib/data/seed-blog-w8.ts` — export `seedBlogPostsW8` + Alias `seedBlogW8`
- `src/lib/data/seed-recipes-wave8-c.ts` — `seedRecipesWave8C`
- `src/lib/data/recipe-articles-w8-c.ts` — `W8_FACTS_C`
- `content/wave-8-status-c.md` (dieses Doc)

---

## Wiring (für lokalen Test; E bestätigt Merge)

| Datei | Änderung |
|-------|----------|
| `seed-blog.ts` | `...seedBlogPostsW8` eingehängt |
| `seed.ts` | `...seedRecipesWave8C`; `relatedPostIds` für `recipe-paczki`; Faworki/Racuchy related erweitert |
| `recipe-articles.ts` | `...W8_FACTS_C` + Faworki-FACTS Backlinks |
| `keyword-ownership.md` | Primary-Zeilen Pączki Technik + Rezept |

**SEED_VERSION:** unverändert (21) — nur Agent E → 22.

---

## Gates (lokal gemessen)

| Gate | DE | PL |
|------|----|----|
| Pillar Wörter ≥1100 | **1332** | **1335** |
| Pillar Inline-Links ≥6 | **30** | **30** |
| FACTS expand Wörter ≥400 | **964** | **964** |
| FACTS-Felder Inline-Links ≥4 | **16** | **16** |
| Steps Inline-Links ≥2 | **3** | **3** |
| Affiliate | guide-only (`relatedProductIds: []`) | same |
| Fake lab tests | keine | keine |

---

## Backlinks gesetzt

| Bestehend | Aktion |
|-----------|--------|
| `post-tlusty-czwartek` | Body DE+PL → Technik + Rezept; `relatedRecipeIds` += `recipe-paczki`; `relatedPostIds` += `post-paczek-technik`, `post-faworki-technik` |
| `post-faworki-technik` | Body DE+PL Abgrenzung → Pączki Technik + Rezept; related += paczki / paczek-technik |
| `recipe-faworki` | FACTS origin/serve/variants + Step-Tip → paczki; relatedPostIds += paczek-technik |
| `post-makowiec-technik` | Weiterlesen DE+PL → paczek-technik (Hefeverwandtschaft) |
| `recipe-racuchy` | Step-Tip DE+PL → paczki; relatedPostIds += paczek-technik |

---

## Integrator E — Merge-Hinweise

1. Bei parallelen Wave-8-Rezept-Dateien A/B/D: `seedRecipesWave8C` in gemeinsame `seed-recipes-wave8.ts` ziehen (oder Spread behalten).
2. `W8_FACTS_C`-Spread in `recipe-articles.ts` bei Rebase behalten (Konflikt-Hotspot mit D-Retrofit).
3. `seed-blog.ts` W8-Import behalten — Pillar ist einziger neuer Blog in W8.
4. Docs final: `recipe-expansion-w4.md`, `topical-backlog.md`, `topical-authority-status.md`, Plan → shipped.
5. Dann erst `SEED_VERSION` 21→22 + ein Push.

---

## Diff-Liste (Kurz)

**Neu:** blog-bodies-w8-{de,pl}.ts, seed-blog-w8.ts, seed-recipes-wave8-c.ts, recipe-articles-w8-c.ts, wave-8-status-c.md  

**Touch:** seed-blog.ts, seed.ts, recipe-articles.ts, seed-blog-wave2.ts, seed-blog-w5.ts, blog-bodies-wave2-{de,pl}.ts, blog-bodies-w5-{de,pl}.ts, blog-bodies-w6-{de,pl}.ts, keyword-ownership.md
