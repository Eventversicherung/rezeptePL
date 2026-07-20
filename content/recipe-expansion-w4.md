# Recipe Expansion — Wave 4–8

Status: **Wave 4–8 shipped**  
Date: 2026-07-20 · `SEED_VERSION` 22

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

### Skips (resolved in Wave 8)
| Item | Why (W7) |
|------|----------|
| Pączki | Held for technik pillar — **shipped in Wave 8** |
| 5th diaspora | Quality gate: four clean money pages enough that wave |

### Coupling notes
- Wigilia `relatedRecipeIds` → karp + sledz (plus existing uszka/makowiec)
- Naleśniki-Guide / Barszcz-Technik / Makowiec-Technik → descriptive related recipes
- No new blog pillars in W7

## Wave 8 — shipped this batch

### Blog
| Post | Supports |
|------|----------|
| `post-paczek-technik` | Pillar before Pączki money page; Tłusty = Anlass only |

### Standalone recipes
| Dish | ID | Notes |
|------|-----|--------|
| Mizeria | `recipe-mizeria` | Beilage; Sonntag/Schabowy/Wielkanoc |
| Kapusta zasmażana | `recipe-kapusta-zasmażana` | Beilage; Kiszenie-Verwertung |
| Zupa ogórkowa | `recipe-ogorkowa` | Kiszone-Gurkensuppe; ≠ Żurek |
| Kapuśniak | `recipe-kapusniak` | Sauerkraut**suppe**; ≠ Bigos |
| Pączki | `recipe-paczki` | Cook-Owner; Technik-Pillar first |
| Knedle ze śliwkami | `recipe-knedle-sliwki` | Intent ≠ Pierogi/Leniwe/Pyzy |

### Link retrofit
W5–W7 FACTS (leniwe, kopytka, łazanki, pyzy, zrazy, makowiec, uszka, karp, krokiety, sernik, śledź): ≥4 Markdown-Inline-Links / Locale.

### Tech SEO (unchanged)
- Blog `BlogPosting` + FAQ JSON-LD  
- Recipe JSON-LD: Org author, dates, absolute image  
- Thin **region** hubs: `noindex,follow` until intro ≥400  

## Still HOLD / next backlog

- Kotlet family hub (SEO-safe split)  
- Region hub intros ≥400 before index  
- Lab product tests  
- Meal-Prep Arbeitswoche ≠ Freezer-Pierogi  
- Flaki, Kaszanka, Piernik, Babka, Rolada śląska (nach Messung)

## Keyword ownership

See `content/keyword-ownership.md` — one primary KW = one Owner-URL.
