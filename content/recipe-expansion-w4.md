# Recipe Expansion — Wave 4 shipped · Wave 5 progress

Status: **Wave 4 shipped** · **Wave 5 (Authority Upgrade) shipped**  
Date: 2026-07-20 · `SEED_VERSION` 19

## Wave 4 (done)

Placki family (4 variants) + standalones: Gulasz, Kotlet mielony, Kluski śląskie, Racuchy, Chłodnik.

## Wave 5 — shipped this upgrade

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

All with FACTS longform ≥400, bilingual, unique covers, `relatedPostIds`.

### Blog gaps (Wave 5b)
| Post | Supports |
|------|----------|
| `post-faworki-technik` | recipe-faworki + post-tlusty-czwartek |
| `post-fasolka-guide` | thin money page Fasolka |
| `post-majeranek` | meat / gołąbki / fasolka / shopping |

### Tech SEO (parallel)
- Blog `BlogPosting` + FAQ JSON-LD  
- Recipe JSON-LD: Org author, dates, absolute image  
- Hub intros ≥400 for panieren, freezer, kiszenie, schmoren, wielkanoc, tłusty czwartek  
- Thin **region** hubs: `noindex,follow` + excluded from sitemap until intro ≥400 or curated+intro  


## Still HOLD / next backlog

- Kotlet family hub (SEO-safe split)  
- Makowiec (needs baking pillar)  
- Region hub intros ≥400 before index  
- Lab product tests  
- Meal-Prep Arbeitswoche ≠ Freezer-Pierogi  

## Keyword ownership

See `content/keyword-ownership.md` — one primary KW = one Owner-URL.
