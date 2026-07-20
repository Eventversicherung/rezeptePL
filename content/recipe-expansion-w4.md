# Recipe Expansion — Wave 4–7

Status: **Wave 4–7 shipped**  
Date: 2026-07-20 · `SEED_VERSION` 21

## Wave 4 (done)

Placki family (4 variants) + standalones: Gulasz, Kotlet mielony, Kluski śląskie, Racuchy, Chłodnik.

## Wave 5 — shipped

### Families
| Family | Variants | Legacy redirect |
|--------|----------|-----------------|
| **Naleśniki** | twaróg (default), mięso, szpinak | `/rezepte/nalesniki-twarog` → `/rezepte/nalesniki/twarog` |

### Standalone recipes
| Dish | ID | Notes |
|------|-----|--------|
| Pierogi leniwe | `recipe-pierogi-leniwe` | Not folded pierogi family |
| Kopytka | `recipe-kopytka` | Gulasz pairing |
| Łazanki | `recipe-lazanki` | Kapusta / Kiszenie silo |
| Pyzy | `recipe-pyzy` | Sunday project |
| Zrazy | `recipe-zrazy` | Schmoren + region-slask |

### Blog gaps (Wave 5b)
| Post | Supports |
|------|----------|
| `post-faworki-technik` | recipe-faworki + post-tlusty-czwartek |
| `post-fasolka-guide` | thin money page Fasolka |
| `post-majeranek` | meat / gołąbki / fasolka / shopping |

## Wave 6 — shipped

### Blog (Backen pillar first)
| Post | Supports |
|------|----------|
| `post-makowiec-technik` | Silo D/C baking pillar → unlocks Makowiec money page |

### Standalone recipes
| Dish | ID | Notes |
|------|-----|--------|
| Makowiec | `recipe-makowiec` | relatedPostIds include baking pillar |
| Uszka | `recipe-uszka` | Own KW owner; Barszcz stays soup owner |

## Wave 7 — shipped this batch

### Standalone recipes (depth, no new blogs)
| Dish | ID | Notes |
|------|-----|--------|
| Karp | `recipe-karp` | Wigilia warm fish; Speiseplan stays menu owner |
| Krokiety | `recipe-krokiety` | Naleśniki + Barszcz + Kapusta silo links |
| Sernik | `recipe-sernik` | Baking silo; Makowiec KW untouched |
| Śledź | `recipe-sledz` | Cold fish; distinct from Karp |

### Skips
| Item | Why |
|------|-----|
| Pączki | Needs technik pillar; Tłusty Czwartek owns occasion culture — avoid spray |
| 5th diaspora | Quality gate: four clean money pages enough this wave |

### Coupling notes
- Wigilia `relatedRecipeIds` → karp + sledz (plus existing uszka/makowiec)
- Naleśniki-Guide / Barszcz-Technik / Makowiec-Technik → descriptive related recipes
- No new blog pillars

### Tech SEO (unchanged)
- Blog `BlogPosting` + FAQ JSON-LD  
- Recipe JSON-LD: Org author, dates, absolute image  
- Thin **region** hubs: `noindex,follow` until intro ≥400  

## Still HOLD / next backlog

- Kotlet family hub (SEO-safe split)  
- Region hub intros ≥400 before index  
- Lab product tests  
- Meal-Prep Arbeitswoche ≠ Freezer-Pierogi  
- Pączki (only with clear ownership vs Tłusty / optional technik)

## Keyword ownership

See `content/keyword-ownership.md` — one primary KW = one Owner-URL.
