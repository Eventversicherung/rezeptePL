# Wave 12 — Status Paket D (Klopsy + Kluski kładzione)

Status: **READY FOR INTEGRATOR E** (Implementer D · 2026-07-21)  
Kein `SEED_VERSION`-Bump · kein Commit/Push · kein neuer Blog-Pillar · keine Family/Routing-Slug-Dateien.

---

## Deliverables

| Datei | Rolle |
|-------|--------|
| `src/lib/data/seed-recipes-wave12-d.ts` | `seedRecipesWave12D` — 2 Rezepte |
| `src/lib/data/recipe-articles-w12-d.ts` | `W12_FACTS_D` |
| `content/keyword-ownership.md` | +2 Primary + Intent-Trennung W12 D |
| `content/wave-12-status-d.md` | dieses Status-Doc |

**Affiliate:** guide-only (keine `relatedProductIds` auf den Rezepten).

---

## Rezepte + Covers

| ID | Slug | Cover Photo-ID | HTTP | Fit |
|----|------|----------------|:----:|-----|
| `recipe-klopsy` | `klopsy` | `1600688685721-852c38f6e8a6` | 200 | Hackfleischkugeln mit cremiger Soße/Gravy auf Teller — klar ≠ panierte Bulette. |
| `recipe-kluski-kladzione` | `kluski-kladzione` | `1708782340699-599c20fa5eec` | 200 | Unregelmäßige Fallnudeln/Klöße in klarer Brühe — Rosół-Einlage-Intent ≠ Mulden-Śląskie. |

**Unique-Gate D:** beide Photo-IDs unbenutzt in bestehenden Seed-Covers (Stand Audit; ≠ A/C Status-IDs).

**Soßenlinie Klopsy:** Dill-Sahne (Primary im Title/Excerpt festgenagelt).

---

## Ownership

| Primary KW DE | Owner |
|---------------|-------|
| Klopsy / Pulpety (Kugeln in Soße) | `/rezepte/klopsy` |
| Kluski kładzione / Fallnudeln | `/rezepte/kluski-kladzione` |

**Abgrenzung:** Klopsy ≠ Kotlet mielony (Panade) ≠ Schabowy; Kładzione ≠ Kluski śląskie ≠ Kopytka ≠ Makaron z serem.

---

## relatedPostIds

| Rezept | relatedPostIds |
|--------|----------------|
| klopsy | `post-sonntagsessen`, `post-panieren`, `post-smietana-schmand` |
| kluski-kladzione | `post-rosol-technik`, `post-polnische-suppen`, `post-sonntagsessen` |

---

## FACTS / Steps Gates

| Recipe | Locale | FACTS Inline-Links | R/B | Feld-Wörter ≈ | expand() |
|--------|--------|-------------------:|-----|--------------:|----------|
| klopsy | DE | 20 | 9/11 | ~352 | ≫400 |
| klopsy | PL | 20 | 9/11 | ~328 | ≫400 |
| kluski-kladzione | DE | 26 | 14/12 | ~344 | ≫400 |
| kluski-kladzione | PL | 26 | 14/12 | ~320 | ≫400 |

**Steps/Tips Inline-Links:** klopsy DE/PL **6**; kluski DE/PL **6** (Gate ≥2).

---

## Backlinks gesetzt (D-owned)

| Quelle | Aktion |
|--------|--------|
| `bodySonntagsessenDe` | Abschnitte Klopsy + Kluski kładzione |
| `bodySonntagsessenPl` | Abschnitte klopsy + kluski kładzione |
| `bodyRosolTechnikDe` | Servieren → kluski-kladzione |
| `bodyRosolTechnikPl` | Podanie → kluski kładzione |
| `bodyPanierenDe` | Abgrenzung ≠ Klopsy |
| `bodyPanierenPl` | Abgrenzung ≠ klopsy |
| FACTS `recipe-kotlet-mielony` | descriptive → klopsy |
| FACTS `recipe-rosol` | descriptive → kluski-kladzione |
| FACTS `recipe-kluski-slaskie` | descriptive → kluski-kladzione |
| `post-sonntagsessen` `relatedRecipeIds` | + `recipe-klopsy`, `recipe-kluski-kladzione` |
| `post-rosol-technik` `relatedRecipeIds` | + `recipe-kluski-kladzione` |
| `post-panieren` `relatedRecipeIds` | + `recipe-klopsy` |
| `post-polnische-suppen` `relatedRecipeIds` | + `recipe-kluski-kladzione` |

---

## Stichprobe Covers A/B/C

| Paket | Status-Doc | Photo-IDs (Stichprobe je 2) | GET |
|-------|------------|-----------------------------|:---:|
| A | `content/wave-12-status-a.md` | `1761545832874-02e1d41dc649`, `1712334619829-831fa0625a0f` | **200** / **200** |
| B | `content/wave-12-status-b.md` | `1630563775062-bbaf8ad3d73c`, `1694505396696-b093cca3d8ea` | **200** / **200** |
| C | `content/wave-12-status-c.md` | `1776268927285-21968dfe5fcb`, `1764314555345-2691cf16517b` | **200** / **200** |

→ Keine fremden Photo-IDs überschrieben. Kollision D vs A/B/C: keine.

---

## Agent E — Merge Notes

1. `seedRecipesWave12D` → Aggregator `seed-recipes-wave12.ts` + Import in `seed.ts`.
2. FACTS: `import { W12_FACTS_D } from "./recipe-articles-w12-d"` + `Object.assign(FACTS, …, W12_FACTS_D)`.
3. Related-Arrays (sonntagsessen, rosol-technik, panieren, polnische-suppen) mit A–C **deduplizieren**.
4. Photo-IDs D gegen finale A/B/C-Liste prüfen (D: `1600688685721-852c38f6e8a6`, `1708782340699-599c20fa5eec`).
5. `SEED_VERSION` nur E: **25 → 26**.
6. Kein neuer Blog-Pillar · keine Family.

---

## Gates checklist

- [x] 2 Rezepte seed + unique Unsplash covers GET 200
- [x] FACTS ≥400 (expand) DE+PL; ≥4 Inline-Links/Locale (≥2 Rezept + ≥2 Blog)
- [x] Steps ≥2 Inline-Links/Locale
- [x] Ownership + Intent-Trennung (≠ Mielony / ≠ Śląskie)
- [x] Backlinks Sonntagsessen / Rosół-Technik / Panieren (+ FACTS Abgrenzung)
- [x] guide-only affiliate
- [x] No SEED_VERSION bump
- [x] No commit / push
- [x] Isolation: keine wave12-a|b|c Seed/FACTS überschrieben

---

## Diff-Liste für Integrator

**Neu:**
- `src/lib/data/seed-recipes-wave12-d.ts`
- `src/lib/data/recipe-articles-w12-d.ts`
- `content/wave-12-status-d.md`

**Geändert:**
- `content/keyword-ownership.md` (+2 Primary + Intent W12 D)
- `src/lib/data/recipe-articles.ts` (FACTS mielony / rosol / kluski-slaskie Abgrenzung)
- `src/lib/data/blog-bodies-wave2-de.ts` (Sonntag + Rosół → klopsy / kluski)
- `src/lib/data/blog-bodies-wave2-pl.ts` (Niedziela + Rosół → klopsy / kluski)
- `src/lib/data/blog-bodies-w3c-de.ts` (Panieren ≠ Klopsy)
- `src/lib/data/blog-bodies-w3c-pl.ts` (Panierowanie ≠ klopsy)
- `src/lib/data/seed-blog-wave2.ts` (related: sonntagsessen, rosol-technik, polnische-suppen)
- `src/lib/data/seed-blog-w3c.ts` (related: panieren → klopsy)
