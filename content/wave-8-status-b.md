# Wave 8 — Status Paket B (Suppen)

Status: **Implementer B fertig** · kein Merge · kein SEED_VERSION-Bump · kein Push  
Stand: 2026-07-20

## Neue Rezepte

| ID | Slug DE/PL | Title | Cover (unique) |
|----|------------|-------|----------------|
| `recipe-ogorkowa` | `ogorkowa` | Zupa ogórkowa | `photo-1478144592103-25e218a04891` |
| `recipe-kapusniak` | `kapusniak` | Kapuśniak | `photo-1543332164-6e82f355bad8` |

**Ziel-URLs (nach Integrator-Merge):**

- DE: `/de/rezepte/ogorkowa`, `/de/rezepte/kapusniak`
- PL: `/pl/rezepte/ogorkowa`, `/pl/rezepte/kapusniak`

## Isolierte Dateien (noch nicht in seed.ts / FACTS-Map)

| Datei | Inhalt |
|-------|--------|
| `src/lib/data/seed-recipes-wave8-b.ts` | `seedRecipesWave8B` — beide Rezepte, `relatedPostIds` on-object, guide-only (kein Affiliate) |
| `src/lib/data/recipe-articles-w8-b.ts` | `W8_FACTS_B` — Longform-FACTS mit Markdown-Inline-Links |

## relatedPostIds (on recipe)

| Rezept | relatedPostIds |
|--------|----------------|
| ogorkowa | `post-polnische-suppen`, `post-kiszenie`, `post-polenladen`, `post-rosol-technik` |
| kapusniak | `post-polnische-suppen`, `post-kiszenie`, `post-kielbasa-arten`, `post-majeranek` |

## Backlinks (surgical, live files)

| Datei | Änderung |
|-------|----------|
| `seed-blog-wave2.ts` | `post-polnische-suppen` + `post-kiszenie` → `relatedRecipeIds` += ogorkowa, kapusniak |
| `blog-bodies-wave2-de.ts` | polnische-suppen Intro + Vier Säulen; kiszenie Nutzung; rosol-technik Zielprofil |
| `blog-bodies-wave2-pl.ts` | polskie-zupy Cztery kierunki; kiszenie Jak używać; rosół Podanie |
| `recipe-articles.ts` | FACTS variants Abgrenzung+Link: zurek, barszcz, chlodnik → neue Suppen |
| `content/keyword-ownership.md` | Primary rows Ogórkowa + Kapuśniak + Intent-Notiz |

## Gates (B)

- [x] Kein neuer Suppen-Pillar (bleibt `post-polnische-suppen`)
- [x] Intent ≠ Żurek / Barszcz / Chłodnik; Kapuśniak ≠ Bigos
- [x] FACTS mit ≥4 Inline-Links/Locale (≥2 Rezept + ≥2 Blog) in `W8_FACTS_B`
- [x] Steps/Tips ≥2 Links/Locale
- [x] Unique covers; bilingual; affiliate guide-only
- [x] Ownership-Zeilen skizziert
- [ ] SEED_VERSION / seed.ts Import / FACTS-Merge → **Agent E**

## Integrator E — Merge-Checkliste

1. `seedRecipesWave8B` in `seed-recipes-wave8.ts` (oder seed.ts) importieren
2. `W8_FACTS_B` in `recipe-articles.ts` FACTS spreizen
3. Optional: relatedPostIds-Map in seed.ts withRelated (bereits on-object gesetzt)
4. `SEED_VERSION` 21 → 22 erst nach A+B+C+D
5. Build/Link-Audit; ein Push
