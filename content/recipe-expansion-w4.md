# Recipe Expansion — Wave 4–8

Status: **Wave 4–8 shipped**  
Date: 2026-07-20 · `SEED_VERSION` 23

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

## Wave 9 — shipped this batch

### Blog
Kein neuer Pillar — Ownership über Sonntagsessen, Wielkanoc, Suppen, Kielbasa-Arten, Makowiec-Technik.

### Standalone recipes
| Dish | ID | Notes |
|------|-----|--------|
| Żeberka pieczone | `recipe-zeberka` | Ofenrippen; ≠ Gulasz/Zrazy |
| Rolada śląska | `recipe-rolada-slaska` | Schmor-Roulade; ≠ Zrazy |
| Sałatka jarzynowa | `recipe-salatka-jarzynowa` | Festsalat; ≠ Mizeria |
| Botwinka | `recipe-botwinka` | Junge Rübenblätter-Suppe; ≠ Barszcz/Chłodnik |
| Babka | `recipe-babka` | Hefegugelhupf; ≠ Makowiec/Sernik/Pączki |
| Kaszanka | `recipe-kaszanka` | Cook; ≠ Kielbasa-Arten Types |

### Link retrofit
W8 Kapusta ↔ Kaszanka Pairing (optional); W8 FACTS-Audit all green (≥4 links/locale).

### Tech SEO (unchanged)
- Thin **region** hubs: `noindex,follow` until intro ≥400  
- Affiliate guide-only on recipes  
- Target inventory: **47** recipes · **36** blog · `SEED_VERSION` **23**

## Wave 10 — shipped this batch

### Blog
Kein neuer Pillar — Ownership über polnische-suppen, Sonntagsessen, Wigilia, Makowiec-Technik, Pierogi-/Naleśniki-Guides, Twaróg.

### Standalone recipes
| Dish | ID | Notes |
|------|-----|--------|
| Flaki | `recipe-flaki` | Kuttelsuppe; ≠ Barszcz/Żurek/Ogórkowa/Botwinka |
| Schab pieczony | `recipe-schab-pieczony` | Ofenbraten; ≠ Kotlet schabowy |
| Piernik | `recipe-piernik` | Lebkuchen; ≠ Makowiec/Sernik/Babka |
| Zupa pomidorowa | `recipe-zupa-pomidorowa` | Eng primary; Overview bleibt Broad |
| Makaron z serem | `recipe-makaron-z-serem` | Pasta+Twaróg; ≠ Leniwe/Łazanki |

### Family variants (+2)
| Dish | ID | Family |
|------|-----|--------|
| Pierogi jagody | `recipe-pierogi-jagody` | family-pierogi (jetzt 4) |
| Naleśniki dżem | `recipe-nalesniki-dzem` | family-nalesniki (jetzt 4) |

### Link retrofit
W9 FACTS-Audit all green; Leniwe/Łazanki ↔ Makaron pairing.

### Tech SEO (unchanged)
- Thin **region** hubs: `noindex,follow` until intro ≥400  
- Affiliate guide-only on recipes  
- Target inventory: **54** recipes · **36** blog · Families **3** · `SEED_VERSION` **24**

## Wave 11 — shipped (2026-07-21)

### Covers
Full-catalog Unsplash retrofit (54) + Family covers Pierogi/Placki/Naleśniki synced. Unique Photo-IDs · HTTP 200.

### +3 recipes
| Dish | ID | Notes |
|------|-----|--------|
| Ryba po grecku | `recipe-ryba-po-grecku` | ≠ Karp |
| Golonka | `recipe-golonka` | ≠ Schabowy / Schab / Żeberka |
| Kompot z suszu | `recipe-kompot-z-suszu` | Getränk-Primary ≠ Wigilia-Steal |

### Tech SEO
- Affiliate guide-only on recipes  
- Target inventory: **57** recipes · **36** blog · Families **3** · `SEED_VERSION` **25**

## Still HOLD / next backlog

- Kotlet family hub (SEO-safe split)  
- Region hub intros ≥400 before index  
- Lab product tests  
- Meal-Prep Arbeitswoche ≠ Freezer-Pierogi  
- Czernina, Placek po węgiersku, Drożdżówka  
- Cover-Proxy upgrades (Żurek, Bigos, Kapuśniak, Mizeria, Faworki, …)  

## Keyword ownership

See `content/keyword-ownership.md` — one primary KW = one Owner-URL.
