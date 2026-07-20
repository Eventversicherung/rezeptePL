# Recipe Expansion Wave 4 — Research & Backlog

Status: **Wave 4 shipped** (Placki family + 5 new dishes)  
Date: 2026-07-20

## Placki variants — research (shipped)

Polish potato pancakes (`placki ziemniaczane`) share technique across variants: raw grated potato, bind with egg + little flour, **squeeze water**, fry hot. Diaspora kitchens in DE cook these often — Rewe potatoes, Polenladen śmietana, Gusseisen or heavy pan.

| Variant | PL name | Why distinct | Diaspora fit |
|---------|---------|--------------|--------------|
| **Classic** | placki ziemniaczane | Raw potato + onion, śmietana or gulasz | Default; matches blog pillar `post-placki-guide` |
| **Z cukinią** | placki z cukinią | ~⅓ zucchini in mass — lighter, summer | Common when garden/zucchini overload; same fry technique |
| **Z serem** | placki z serem | Twaróg / ser biały in batter — savory, richer | Uses twaróg shopping path; kid-friendly |
| **Z jabłkami** | placki z jabłkami | Grated apple, cinnamon sugar | Sweet branch; distinct from racuchy (different batter ratio) |

**Not shipped as variants (wave 2):** placki z wędliną (meat bits — niche), placki z cebulą only (subset of classic), leniwe placki (different dish — cottage cheese + potato mash).

**URL model:** `/rezepte/placki/{variant}` — legacy `/rezepte/placki-ziemniaczane` → redirect.

**Keyword ownership:** Broad “Placki Rezept” stays on `/blog/placki-guide`. Recipe SEO targets variant KWs (ziemniaczane, cukinia, ser, jabłka).

## New standalone dishes — research (shipped 5)

Gap vs existing catalog (pierogi*, bigos, żurek, barszcz, rosół, gołąbki, naleśniki, placki*, schabowy, oscypek, fasolka, faworki):

| Dish | ID | Rationale DE diaspora |
|------|-----|----------------------|
| **Gulasz wieprzowy** | `recipe-gulasz` | Classic partner to placki; Dutch oven; Sunday table |
| **Kotlet mielony** | `recipe-kotlet-mielony` | Everyday minced cutlet — distinct from schabowy; panieren guide |
| **Kluski śląskie** | `recipe-kluski-slaskie` | Iconic Silesian side; rosół / Sunday; potato + starch |
| **Racuchy z jabłkami** | `recipe-racuchy` | Yeasted apple pancakes — family/kids; different from placki jabłka |
| **Chłodnik litewski** | `recipe-chlodnik` | Cold summer soup; śmietana + zakwas/beet; distinct from barszcz czerwony |

**Considered but deferred:** Zrazy (long braise, overlap with gulasz), Makowiec (needs baking pillar), Pyzy/Kopytka/Łazanki (side-dish cluster — wave 2), Kotlety mielone could merge with schabowy SEO — kept separate as minced vs pounded cutlet.

## Wave 2 backlog (next sprint)

### Recipe families (variant switcher candidates)
- **Naleśniki** — twaróg / mięso / szpinak
- **Kotlet** — schabowy vs mielony vs drobiowy (careful SEO split with guides)
- **Zupa** — rosół / barszcz / chłodnik / żurek hub (browse-only family?)

### Standalone recipes (high demand)
- Zrazy zawijane (Sunday project)
- Makowiec (Wigilia/Easter)
- Kopytka + gulasz pairing page
- Pyzy z mięsem
- Łazanki z kapustą
- Fasolka po bretońsku depth (article upgrade)
- Pierogi leniwe (not same family as folded pierogi)

### Content / wiring
- Update blog body links from `/rezepte/placki-ziemniaczane` → `/rezepte/placki/ziemniaczane` (optional cleanup)
- Gulasz buying guide or rosół+kluski cluster post
- `post-placki-guide` relatedRecipeIds → all placki variants (done in seed)

## Shipped variant list (Placki family)

1. `recipe-placki` — ziemniaczane (default)
2. `recipe-placki-cukinia` — z cukinią
3. `recipe-placki-ser` — z serem
4. `recipe-placki-jablka` — z jabłkami
