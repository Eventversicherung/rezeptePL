# Wave 13 — Status Paket D (Biała kiełbasa Cook)

Status: **READY FOR INTEGRATOR E** (Implementer D · 2026-07-21)  
Kein `SEED_VERSION`-Bump · kein Commit/Push · kein neuer Blog-Pillar · keine Family.

---

## Deliverables

| Datei | Rolle |
|-------|--------|
| `src/lib/data/seed-recipes-wave13-d.ts` | `seedRecipesWave13D` — 1 Rezept |
| `src/lib/data/recipe-articles-w13-d.ts` | `W13_FACTS_D` |
| `content/keyword-ownership.md` | +1 Primary + Intent-Trennung W13 D |
| `content/wave-13-status-d.md` | dieses Status-Doc |

**Affiliate:** guide-only (keine `relatedProductIds` auf dem Rezept).

---

## Rezept + Cover

| ID | Slug | Cover Photo-ID | HTTP | Fit |
|----|------|----------------|:----:|-----|
| `recipe-biala-kielbasa` | `biala-kielbasa` | `1675619448864-4b46c66e7212` | **200** | **Hell / cooked white sausage:** drei blassrosa–graue, schonend gegarte Würste auf dem Teller (kein dunkler Grill-Char), mit Kartoffeln und Dip-Schalen (Meerrettich/Senf-Kontext). Klar ≠ dunkle Rauch-/Grillkiełbasa, ≠ Kaszanka, ≠ Hotdog. |

**Unique-Gate D:** Photo-ID unbenutzt im Live-Seed-Katalog; ≠ C (`1629321962567-e15cd77bb5ec`, `1605992728160-8d119bf2b5db`).

---

## Ownership

| Primary KW DE | Owner |
|---------------|-------|
| Biała kiełbasa Rezept (Cook) | `/rezepte/biala-kielbasa` |

**Abgrenzung:** Cook ≠ Kiełbasa-Arten-Lexikon (Broad) ≠ Kaszanka ≠ dunkle Grillwurst. Żurek bleibt Suppen-Primary; Wielkanoc bleibt Anlass-Owner.

---

## relatedPostIds

| Rezept | relatedPostIds |
|--------|----------------|
| biala-kielbasa | `post-kielbasa-arten`, `post-wielkanoc`, `post-zakwas-zurek`, `post-polenladen` |

---

## FACTS / Steps Gates

| Recipe | Locale | FACTS Inline-Links (unique) | R/B | Feld-Wörter ≈ | expand() |
|--------|--------|----------------------------:|-----|--------------:|----------|
| biala-kielbasa | DE | 6 unique (24 total) | 2/4 | ~317 | ≫400 |
| biala-kielbasa | PL | 6 unique (24 total) | 2/4 | ~323 | ≫400 |

**FACTS Inline-Ziele:** zurek, kaszanka, kielbasa-arten, wielkanoc, zakwas-zurek, polenladen (+ PL-Slugs).

**Steps/Tips Inline-Links:** DE **6**, PL **6** (Gate ≥2).

---

## Backlinks gesetzt (D-owned)

| Quelle | Aktion |
|--------|--------|
| `bodyKielbasaArtenDe/Pl` | Absatz **Types vs Cook: Biała kiełbasa** → `/rezepte/biala-kielbasa` (Lexikon bleibt Arten-Owner) |
| `post-kielbasa-arten` `relatedRecipeIds` | + `recipe-biala-kielbasa` |
| `bodyWielkanocDe` | Menüprinzip → cook-Link (Arten descriptiv Lexikon) |
| `bodyWielkanocPl` | Kern-Absatz → cook-Link; C-Sätze Chałka/Pasztet **nicht** überschrieben |
| `post-wielkanoc` `relatedRecipeIds` | + `recipe-biala-kielbasa` (neben C: chalka/pasztet) |
| FACTS `recipe-zurek` | shop/technique/serve DE+PL → Einlage descriptiv Cook |
| `seed.ts` Żurek Steps | Tip DE+PL → biala-kielbasa + Lexikon |
| `keyword-ownership.md` | +1 Primary + Intent W13 D |

---

## Stichprobe Covers A/B/C

| Paket | Status-Doc | Photo-IDs (Stichprobe) | GET |
|-------|------------|------------------------|:---:|
| A | — | Status noch nicht vorhanden | n/a |
| B | — | Status noch nicht vorhanden | n/a |
| C | `content/wave-13-status-c.md` | `1629321962567-e15cd77bb5ec`, `1605992728160-8d119bf2b5db` | **200** / **200** |

→ Keine fremden Photo-IDs überschrieben. Kollision D vs C: keine.

---

## Agent E — Merge Notes

1. `seedRecipesWave13D` → Aggregator `seed-recipes-wave13.ts` + Import in `seed.ts`.
2. FACTS: `import { W13_FACTS_D } from "./recipe-articles-w13-d"` + `Object.assign(FACTS, …, W13_FACTS_D)`.
3. Related-Arrays (`post-kielbasa-arten`, `post-wielkanoc`) mit C **deduplizieren** (bereits additiv gesetzt).
4. Photo-ID D gegen finale A/B/C-Liste: `1675619448864-4b46c66e7212`.
5. `SEED_VERSION` nur E: **26 → 27**.
6. Kein neuer Blog-Pillar · Lexikon-Primary unangetastet.

---

## Gates checklist

- [x] 1 Rezept seed + unique Unsplash cover GET 200
- [x] Visual-Fit: hell / cooked white sausage (Status-Notiz)
- [x] FACTS ≥400 (expand) DE+PL; ≥4 Inline-Links/Locale (≥2 Rezept + ≥2 Blog)
- [x] Steps ≥2 Inline-Links/Locale
- [x] Ownership Cook ≠ Arten-Lexikon ≠ Kaszanka
- [x] Backlinks Wielkanoc / Kielbasa-Arten / Żurek Einlage
- [x] guide-only affiliate
- [x] No SEED_VERSION bump
- [x] No commit / push
- [x] Isolation: keine wave13-a|b|c Seed/FACTS überschrieben

---

## Diff-Liste für Integrator

**Neu:**
- `src/lib/data/seed-recipes-wave13-d.ts`
- `src/lib/data/recipe-articles-w13-d.ts`
- `content/wave-13-status-d.md`

**Geändert:**
- `content/keyword-ownership.md` (+1 Primary + Intent W13 D)
- `src/lib/data/blog-bodies-wave2-de.ts` (Kielbasa Types vs Cook Biała; Wielkanoc Menüprinzip)
- `src/lib/data/blog-bodies-wave2-pl.ts` (Kielbasa Types vs Cook Biała; Wielkanoc Kern → cook)
- `src/lib/data/seed-blog-wave2.ts` (related: kielbasa-arten, wielkanoc → biala-kielbasa)
- `src/lib/data/recipe-articles.ts` (Żurek FACTS Einlage → cook)
- `src/lib/data/seed.ts` (Żurek Steps Tips → cook)
