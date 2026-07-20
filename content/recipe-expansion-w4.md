# Recipe Expansion — Wave 4–6

Status: **Wave 4 shipped** · **Wave 5 shipped** · **Wave 6 shipped**  
Date: 2026-07-20 · `SEED_VERSION` 20

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

## Wave 6 — shipped this batch

### Blog (Backen pillar first)
| Post | Supports |
|------|----------|
| `post-makowiec-technik` | Silo D/C baking pillar → unlocks Makowiec money page |

### Standalone recipes (Wigilia money pages)
| Dish | ID | Notes |
|------|-----|--------|
| Makowiec | `recipe-makowiec` | relatedPostIds include baking pillar |
| Uszka | `recipe-uszka` | Own KW owner; Barszcz stays soup owner; crosslinks updated |

Karp skipped (depth over spray). Optional Mohn-Lexikon skipped (pillar covers Mohn-Technik ohne Spray).

### Coupling notes
- Barszcz FACTS + steps + Barszcz-Technik bodies → descriptive links to `/rezepte/uszka`
- Wigilia post relatedRecipeIds → uszka + makowiec; relatedPostIds → makowiec-technik

### Tech SEO (from Wave 5, unchanged)
- Blog `BlogPosting` + FAQ JSON-LD  
- Recipe JSON-LD: Org author, dates, absolute image  
- Thin **region** hubs: `noindex,follow` + excluded from sitemap until intro ≥400 or curated+intro  

## Still HOLD / next backlog

- Kotlet family hub (SEO-safe split)  
- Region hub intros ≥400 before index  
- Lab product tests  
- Meal-Prep Arbeitswoche ≠ Freezer-Pierogi  
- Karp (optional later Wigilia money page)

## Keyword ownership

See `content/keyword-ownership.md` — one primary KW = one Owner-URL.
