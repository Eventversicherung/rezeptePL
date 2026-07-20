# Wave 10 — Status Paket C (Family-Varianten)

Status: **SHIPPED** (merged by Integrator E · 2026-07-20)

---

## Deliverables

| Asset | ID | Slugs DE / PL | Family | Cover |
|-------|-----|---------------|--------|-------|
| Recipe | `recipe-pierogi-jagody` | `jagody` / `jagody` | `family-pierogi` | `photo-1498557850523-fd3d118b962e` (unique) |
| Recipe | `recipe-nalesniki-dzem` | `dzem` / `dzem` | `family-nalesniki` | `photo-1484723091739-30a097e8f929` (unique) |

Ownership (eingehalten):

- **Pierogi jagody** ≠ Knedle śliwki (gefaltet vs runde Obst-Knödel)
- **Naleśniki dżem** ≠ Twaróg-Primary (eigene Varianten-URL)
- **Kein** kraut-pilze neu; **kein** Placki-5th; Guides bleiben Broad-Owner
- Affiliate: **guide-only** (`relatedProductIds` nicht gesetzt)

Labels: DE „Heidelbeeren“ / „Marmelade“ · PL „z jagodami“ / „z dżemem“

---

## Neue Dateien

- `src/lib/data/seed-recipes-wave10-c.ts` — `seedRecipesWave10C`
- `src/lib/data/recipe-articles-w10-c.ts` — `W10_FACTS_C`
- `content/wave-10-status-c.md` (dieses Doc)

---

## wave10-c-family-patch (für Integrator E)

### A) Bereits von C gesetzt (seed-families.ts)

```diff
 family-pierogi.variantIds += "recipe-pierogi-jagody"
 family-nalesniki.variantIds += "recipe-nalesniki-dzem"
 # DE/PL excerpt + seoDescription erwähnen Heidelbeeren / jagody bzw. Marmelade / dżem
```

Default-Varianten **unverändert**: `recipe-pierogi` (ruskie), `recipe-nalesniki` (twaróg).

### B) Recipe-Merge-Pfad (E wählt einen)

**Empfohlen (isoliert, analog W9 Aggregator):**

1. `src/lib/data/seed-recipes-wave10.ts` Aggregator anlegen/erweitern:
   `export const seedRecipesWave10 = [...seedRecipesWave10A, …B, …seedRecipesWave10C, …D]`
2. In `seed.ts` neben `...seedFamilyVariantRecipes` auch `...seedRecipesWave10` (oder nur C) spreaden.
3. **Nicht** `recipe-pierogi-cabbage` / kraut-pilze duplizieren.

**Alternative (klassischer Family-Pfad):**

1. Inhalt von `seedRecipesWave10C` an Ende von `seedFamilyVariantRecipes` in `seed-families.ts` anhängen.
2. Dann **kein** doppelter Spread derselben IDs über Wave10-Aggregator.

### C) FACTS

```ts
import { W10_FACTS_C } from "./recipe-articles-w10-c";
// Object.assign(FACTS, …, W10_FACTS_C);
```

### D) Sibling-FACTS (bereits von C in recipe-articles.ts)

Kurze Geschwister-Links in `variantsDe`/`variantsPl` für:

- `recipe-pierogi`, `recipe-pierogi-meat`, `recipe-pierogi-cabbage`
- `recipe-nalesniki`, `recipe-nalesniki-mieso`, `recipe-nalesniki-szpinak`

Bei Merge mit anderen W10-Patches: diese `variants*`-Zeilen erhalten.

---

## Touch / Backlinks (gesetzt)

| Bestehend | Aktion |
|-----------|--------|
| `seed-families.ts` | variantIds + excerpts/seo (siehe patch oben) |
| `post-pierogi-guide` body DE | Füllungen + Varianten-Matrix + Weiter-Links → jagody |
| `post-pierogi-guide` body PL | Einstiegsabsatz → jagody (+ Knedle-Abgrenzung) |
| `post-pierogi-guide` / freezer related | `pierogiRecipes` += `recipe-pierogi-jagody` |
| `post-nalesniki-guide` body DE+PL | Süß-Absatz + Weiterlesen → dzem |
| `post-nalesniki-guide` seed | `relatedRecipeIds` += `recipe-nalesniki-dzem` |
| Sibling FACTS | siehe D |
| `keyword-ownership.md` | +2 Primary-Zeilen |

**Nicht angefasst:** `SEED_VERSION`, Wave10 Aggregator/seed.ts Import, `recipe-articles.ts` Object.assign für W10_FACTS_C, Placki, kraut-pilze neu, A/B/D Seed-Dateien, Commit/Push.

---

## Gates (lokal gemessen)

| Gate | pierogi-jagody DE/PL | nalesniki-dzem DE/PL |
|------|----------------------|----------------------|
| FACTS expand Wörter ≥400 | **~1051** / PL-Template länger | **~996** / PL länger |
| FACTS-Felder Inline-Links ≥4 | **24** (≥2 Rezept + ≥2 Blog) | **23** |
| Steps/Tips Inline-Links ≥2 | **5** / **5** | **4** / **4** |
| `relatedPostIds` ≥3 | 4 | 4 |
| Unique cover | ja | ja |
| Affiliate | guide-only | guide-only |
| Switcher-fähig (variantIds) | ja (nach Recipe-Merge) | ja |

---

## Integrator E — Merge-Checkliste

1. [ ] `seedRecipesWave10C` mergen (Aggregator **oder** `seedFamilyVariantRecipes`) — **ein** Pfad, keine Doppel-IDs
2. [ ] `W10_FACTS_C` in `recipe-articles.ts` Object.assign
3. [ ] Family Switcher QA: Pierogi **4** Varianten; Naleśniki **4** Varianten; Catalog zeigt Families einmal
4. [ ] Sibling `variants*` + Guide-Bodies behalten
5. [ ] Docs final + `SEED_VERSION` 23→24 nur durch E
6. [ ] Kein Teil-Push aus C

---

## Diff-Liste (Kurz)

**Neu:**

- `src/lib/data/seed-recipes-wave10-c.ts`
- `src/lib/data/recipe-articles-w10-c.ts`
- `content/wave-10-status-c.md`

**Touch:**

- `src/lib/data/seed-families.ts` (variantIds + excerpts + kurze Geschwister in bestehenden Variant-articles)
- `src/lib/data/recipe-articles.ts` (Sibling variants* only)
- `src/lib/data/seed.ts` (Ruskie Geschwister-Text DE/PL)
- `src/lib/data/blog-bodies-wave2-de.ts` / `-pl.ts` (Pierogi-Guide)
- `src/lib/data/blog-bodies-w3a-de.ts` / `-pl.ts` (Naleśniki-Guide)
- `src/lib/data/seed-blog-wave2.ts` (`pierogiRecipes`)
- `src/lib/data/seed-blog-w3a.ts` (nalesniki relatedRecipeIds)
- `content/keyword-ownership.md` (+2)
