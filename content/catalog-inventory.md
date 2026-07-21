# Catalog Inventory — Live Seed Audit

Stand: 2026-07-21 · Quelle: `src/lib/data/seed*.ts` + `store.ts` (programmatisch)  
**Kein fluff** — Zahlen aus published Recipes.

---

## 1. Totals

| Metrik | Wert |
|--------|------|
| `SEED_VERSION` | **31** |
| Rezepte (published) | **87** |
| Rezepte draft/other | **0** |
| Standalone (ohne Family) | **75** |
| Family-Varianten (tagged `familyId`) | **12** |
| RecipeFamilies | **3** (Pierogi / Placki / Naleśniki) |
| Blog Posts | **36** |
| Cluster-Hubs gesamt | **31** (category 5 · occasion 9 · technique 9 · region 8) |
| Blog : Rezept | **36 : 87** ≈ **1 : 2.42** |

### Families (Variant counts)

| Family | Variants | Default | Variant IDs / Labels |
|--------|----------|---------|----------------------|
| `family-nalesniki` · Naleśniki | **4** | `recipe-nalesniki` | `recipe-nalesniki` (Twaróg → `twarog`)<br>`recipe-nalesniki-mieso` (Fleisch → `fleisch`)<br>`recipe-nalesniki-szpinak` (Spinat → `szpinak`)<br>`recipe-nalesniki-dzem` (Marmelade → `dzem`) |
| `family-pierogi` · Pierogi | **4** | `recipe-pierogi` | `recipe-pierogi` (Ruskie → `ruskie`)<br>`recipe-pierogi-meat` (Fleisch → `fleisch`)<br>`recipe-pierogi-cabbage` (Kraut & Pilze → `kraut-pilze`)<br>`recipe-pierogi-jagody` (Heidelbeeren → `jagody`) |
| `family-placki` · Placki | **4** | `recipe-placki` | `recipe-placki` (Ziemniaczane → `ziemniaczane`)<br>`recipe-placki-cukinia` (Mit Zucchini → `cukinia`)<br>`recipe-placki-ser` (Mit Käse → `mit-kaese`)<br>`recipe-placki-jablka` (Mit Apfel → `mit-apfel`) |

**Hinweis:** Placek po węgiersku ist **Standalone Composed** — keine 5. Placki-Variante.

---

## 2. By category (`categoryIds`)

> Rezepte können mehrere Kategorien haben → Summe der Counts > 79.

| Category | Count | Dishes (DE title · slug) |
|----------|------:|--------------------------|
| `category-vegetarisch` · **Vegetarisch** (`/vegetarisch`) | **44** | Babka (`babka`); Barszcz czerwony (`barszcz-czerwony`); Botwinka (`botwinka`); Buraczki (`buraczki`); Chałka (`chalka`); Chłodnik litewski (`chlodnik-litewski`); Ćwikła (`cwikla`); Drożdżówka / Placek drożdżowy (`drozdzowka`); Gegrillter Oscypek mit Preiselbeeren (`oscypek-preiselbeeren`); Jajka faszerowane (`jajka-faszerowane`); Kapusta zasmażana (`kapusta-zasmażana`); Kluski kładzione (`kluski-kladzione`); Kluski śląskie (`kluski-slaskie`); Knedle ze śliwkami (`knedle-sliwki`); Kompot z suszu (`kompot-z-suszu`); Kopytka (`kopytka`); Krokiety (`krokiety`); Kutia (`kutia`); Makaron z makiem (`makaron-z-makiem`); Makaron z serem (`makaron-z-serem`); Makowiec (`makowiec`); Mazurek orzechowy (`mazurek`); Mizeria (`mizeria`); Naleśniki mit Marmelade (`dzem`); Naleśniki mit Spinat (`szpinak`); Naleśniki mit Twaróg (`twarog`); Napoleonka / Kremówka (`napoleonka`); Pączki (`paczki`); Piernik (`piernik`); Pierogi leniwe (`pierogi-leniwe`); Pierogi mit Heidelbeeren (`jagody`); Pierogi mit Kraut und Pilzen (`kraut-pilze`); Pierogi Ruskie (`ruskie`); Placki mit Apfel (`mit-apfel`); Placki mit Zucchini (`cukinia`); Placki ziemniaczane (`ziemniaczane`); Racuchy z jabłkami (`racuchy-jablka`); Sałatka jarzynowa (`salatka-jarzynowa`); Sernik (`sernik`); Szarlotka (`szarlotka`); Uszka mit Pilzen (`uszka`); Wuzetka (`wuzetka`); Zupa grzybowa (`zupa-grzybowa`); Zupa szczawiowa (`szczawiowa`) |
| `category-hauptgerichte` · **Hauptgerichte** (`/hauptgerichte`) | **43** | Biała kiełbasa (`biala-kielbasa`); Bigos (`bigos`); Fasolka po bretońsku (`fasolka-po-bretonsku`); Gołąbki (`golabki`); Golonka (`golonka`); Gulasz wieprzowy (`gulasz-wieprzowy`); Kapusta zasmażana (`kapusta-zasmażana`); Karp po polsku (`karp`); Kaszanka (`kaszanka`); Klopsy in Dillsoße (`klopsy`); Kluski kładzione (`kluski-kladzione`); Kluski śląskie (`kluski-slaskie`); Knedle ze śliwkami (`knedle-sliwki`); Kopytka (`kopytka`); Kotlet mielony (`kotlet-mielony`); Kotlet schabowy (`kotlet-schabowy`); Krokiety (`krokiety`); Kutia (`kutia`); Łazanki mit Kapusta (`lazanki`); Leczo (`leczo`); Makaron z makiem (`makaron-z-makiem`); Makaron z serem (`makaron-z-serem`); Naleśniki mit Fleisch (`fleisch`); Naleśniki mit Spinat (`szpinak`); Pasztet drobiowy (`pasztet`); Pierogi leniwe (`pierogi-leniwe`); Pierogi mit Fleisch (`fleisch`); Pierogi mit Heidelbeeren (`jagody`); Pierogi mit Kraut und Pilzen (`kraut-pilze`); Pierogi Ruskie (`ruskie`); Placek po węgiersku (`placek-po-wegiersku`); Placki mit Käse (`mit-kaese`); Placki mit Zucchini (`cukinia`); Placki ziemniaczane (`ziemniaczane`); Pyzy mit Fleisch (`pyzy`); Rolada śląska (`rolada-slaska`); Ryba po grecku (`ryba-po-grecku`); Schab pieczony (`schab-pieczony`); Śledź w oleju (`sledz`); Uszka mit Pilzen (`uszka`); Zapiekanka (`zapiekanka`); Żeberka pieczone (`zeberka`); Zrazy zawijane (`zrazy`) |
| `category-schnell` · **Schnelle Rezepte** (`/schnelle-rezepte`) | **27** | Biała kiełbasa (`biala-kielbasa`); Buraczki (`buraczki`); Ćwikła (`cwikla`); Fasolka po bretońsku (`fasolka-po-bretonsku`); Faworki (`faworki`); Gegrillter Oscypek mit Preiselbeeren (`oscypek-preiselbeeren`); Jajka faszerowane (`jajka-faszerowane`); Kaszanka (`kaszanka`); Klopsy in Dillsoße (`klopsy`); Kluski kładzione (`kluski-kladzione`); Kompot z suszu (`kompot-z-suszu`); Kotlet mielony (`kotlet-mielony`); Kotlet schabowy (`kotlet-schabowy`); Leczo (`leczo`); Makaron z makiem (`makaron-z-makiem`); Makaron z serem (`makaron-z-serem`); Mizeria (`mizeria`); Naleśniki mit Marmelade (`dzem`); Naleśniki mit Spinat (`szpinak`); Naleśniki mit Twaróg (`twarog`); Pierogi leniwe (`pierogi-leniwe`); Placki mit Apfel (`mit-apfel`); Placki mit Käse (`mit-kaese`); Placki mit Zucchini (`cukinia`); Placki ziemniaczane (`ziemniaczane`); Śledź w oleju (`sledz`); Zapiekanka (`zapiekanka`) |
| `category-suess` · **Süßes & Gebäck** (`/suesses`) | **23** | Babka (`babka`); Chałka (`chalka`); Drożdżówka / Placek drożdżowy (`drozdzowka`); Faworki (`faworki`); Knedle ze śliwkami (`knedle-sliwki`); Kompot z suszu (`kompot-z-suszu`); Kutia (`kutia`); Makaron z makiem (`makaron-z-makiem`); Makaron z serem (`makaron-z-serem`); Makowiec (`makowiec`); Mazurek orzechowy (`mazurek`); Naleśniki mit Marmelade (`dzem`); Naleśniki mit Twaróg (`twarog`); Napoleonka / Kremówka (`napoleonka`); Pączki (`paczki`); Piernik (`piernik`); Pierogi leniwe (`pierogi-leniwe`); Pierogi mit Heidelbeeren (`jagody`); Placki mit Apfel (`mit-apfel`); Racuchy z jabłkami (`racuchy-jablka`); Sernik (`sernik`); Szarlotka (`szarlotka`); Wuzetka (`wuzetka`) |
| `category-suppen` · **Suppen** (`/suppen`) | **13** | Barszcz czerwony (`barszcz-czerwony`); Botwinka (`botwinka`); Chłodnik litewski (`chlodnik-litewski`); Flaki (`flaki`); Grochówka (`grochowka`); Kapuśniak (`kapusniak`); Krupnik (`krupnik`); Rosół (`rosol`); Zupa grzybowa (`zupa-grzybowa`); Zupa ogórkowa (`ogorkowa`); Zupa pomidorowa (`zupa-pomidorowa`); Zupa szczawiowa (`szczawiowa`); Żurek (`zurek`) |

### Category cluster without recipes?

Alle 5 Category-Hubs haben ≥1 Recipe-Tag. (Kein leerer Category-Cluster.)

---

## 3. By occasion / silo (`occasionIds`)

| Occasion | Count | Dishes |
|----------|------:|--------|
| `occasion-niedziela` · **Sonntagsessen** | **49** | Biała kiełbasa (`biala-kielbasa`); Buraczki (`buraczki`); Chałka (`chalka`); Ćwikła (`cwikla`); Drożdżówka / Placek drożdżowy (`drozdzowka`); Flaki (`flaki`); Gołąbki (`golabki`); Golonka (`golonka`); Grochówka (`grochowka`); Gulasz wieprzowy (`gulasz-wieprzowy`); Jajka faszerowane (`jajka-faszerowane`); Kapusta zasmażana (`kapusta-zasmażana`); Kaszanka (`kaszanka`); Klopsy in Dillsoße (`klopsy`); Kluski kładzione (`kluski-kladzione`); Kluski śląskie (`kluski-slaskie`); Knedle ze śliwkami (`knedle-sliwki`); Kopytka (`kopytka`); Kotlet mielony (`kotlet-mielony`); Kotlet schabowy (`kotlet-schabowy`); Krokiety (`krokiety`); Krupnik (`krupnik`); Łazanki mit Kapusta (`lazanki`); Leczo (`leczo`); Mizeria (`mizeria`); Naleśniki mit Fleisch (`fleisch`); Napoleonka / Kremówka (`napoleonka`); Pasztet drobiowy (`pasztet`); Pierogi leniwe (`pierogi-leniwe`); Pierogi mit Fleisch (`fleisch`); Pierogi Ruskie (`ruskie`); Placek po węgiersku (`placek-po-wegiersku`); Placki mit Käse (`mit-kaese`); Placki mit Zucchini (`cukinia`); Placki ziemniaczane (`ziemniaczane`); Pyzy mit Fleisch (`pyzy`); Rolada śląska (`rolada-slaska`); Rosół (`rosol`); Ryba po grecku (`ryba-po-grecku`); Sałatka jarzynowa (`salatka-jarzynowa`); Schab pieczony (`schab-pieczony`); Sernik (`sernik`); Szarlotka (`szarlotka`); Wuzetka (`wuzetka`); Żeberka pieczone (`zeberka`); Zrazy zawijane (`zrazy`); Zupa grzybowa (`zupa-grzybowa`); Zupa pomidorowa (`zupa-pomidorowa`); Zupa szczawiowa (`szczawiowa`) |
| `occasion-wigilia` · **Wigilia** | **15** | Barszcz czerwony (`barszcz-czerwony`); Karp po polsku (`karp`); Kompot z suszu (`kompot-z-suszu`); Krokiety (`krokiety`); Kutia (`kutia`); Makaron z makiem (`makaron-z-makiem`); Makowiec (`makowiec`); Piernik (`piernik`); Pierogi mit Kraut und Pilzen (`kraut-pilze`); Pierogi Ruskie (`ruskie`); Ryba po grecku (`ryba-po-grecku`); Śledź w oleju (`sledz`); Uszka mit Pilzen (`uszka`); Zupa grzybowa (`zupa-grzybowa`); Żurek (`zurek`) |
| `occasion-wielkanoc` · **Ostern** | **12** | Babka (`babka`); Biała kiełbasa (`biala-kielbasa`); Botwinka (`botwinka`); Buraczki (`buraczki`); Chałka (`chalka`); Ćwikła (`cwikla`); Jajka faszerowane (`jajka-faszerowane`); Mazurek orzechowy (`mazurek`); Mizeria (`mizeria`); Pasztet drobiowy (`pasztet`); Sałatka jarzynowa (`salatka-jarzynowa`); Sernik (`sernik`) |
| `occasion-post` · **Fastenzeit** | **4** | Karp po polsku (`karp`); Pierogi mit Kraut und Pilzen (`kraut-pilze`); Śledź w oleju (`sledz`); Uszka mit Pilzen (`uszka`) |
| `occasion-tlusty-czwartek` · **Tłusty Czwartek** | **2** | Faworki (`faworki`); Pączki (`paczki`) |

**Occasion-Cluster ohne Recipe-Tags:** `occasion-imieniny` (Imieniny), `occasion-komunia` (Kommunion), `occasion-grill` (Grill), `occasion-sylwester` (Silvester)

**Rezepte ohne `occasionIds` (14):** Bigos (`recipe-bigos`); Gegrillter Oscypek mit Preiselbeeren (`recipe-oscypek`); Naleśniki mit Twaróg (`recipe-nalesniki`); Fasolka po bretońsku (`recipe-fasolka`); Racuchy z jabłkami (`recipe-racuchy`); Chłodnik litewski (`recipe-chlodnik`); Placki mit Apfel (`recipe-placki-jablka`); Naleśniki mit Spinat (`recipe-nalesniki-szpinak`); Zupa ogórkowa (`recipe-ogorkowa`); Kapuśniak (`recipe-kapusniak`); Pierogi mit Heidelbeeren (`recipe-pierogi-jagody`); Naleśniki mit Marmelade (`recipe-nalesniki-dzem`); Makaron z serem (`recipe-makaron-z-serem`); Zapiekanka (`recipe-zapiekanka`)

---

## 4. By technique (`techniqueIds`)

| Technique | Count | Dishes |
|-----------|------:|--------|
| `technique-teig` · **Teig** | **26** | Babka (`babka`); Chałka (`chalka`); Drożdżówka / Placek drożdżowy (`drozdzowka`); Faworki (`faworki`); Kluski kładzione (`kluski-kladzione`); Kluski śląskie (`kluski-slaskie`); Knedle ze śliwkami (`knedle-sliwki`); Kopytka (`kopytka`); Krokiety (`krokiety`); Makowiec (`makowiec`); Mazurek orzechowy (`mazurek`); Naleśniki mit Fleisch (`fleisch`); Naleśniki mit Marmelade (`dzem`); Naleśniki mit Spinat (`szpinak`); Naleśniki mit Twaróg (`twarog`); Pączki (`paczki`); Pierogi leniwe (`pierogi-leniwe`); Pierogi mit Fleisch (`fleisch`); Pierogi mit Heidelbeeren (`jagody`); Pierogi mit Kraut und Pilzen (`kraut-pilze`); Pierogi Ruskie (`ruskie`); Pyzy mit Fleisch (`pyzy`); Racuchy z jabłkami (`racuchy-jablka`); Sernik (`sernik`); Uszka mit Pilzen (`uszka`); Wuzetka (`wuzetka`) |
| `technique-bulion` · **Brühe** | **11** | Botwinka (`botwinka`); Chłodnik litewski (`chlodnik-litewski`); Flaki (`flaki`); Grochówka (`grochowka`); Kapuśniak (`kapusniak`); Krupnik (`krupnik`); Rosół (`rosol`); Zupa grzybowa (`zupa-grzybowa`); Zupa ogórkowa (`ogorkowa`); Zupa pomidorowa (`zupa-pomidorowa`); Zupa szczawiowa (`szczawiowa`) |
| `technique-schmoren` · **Schmoren** | **8** | Golonka (`golonka`); Gulasz wieprzowy (`gulasz-wieprzowy`); Kapusta zasmażana (`kapusta-zasmażana`); Kaszanka (`kaszanka`); Łazanki mit Kapusta (`lazanki`); Placek po węgiersku (`placek-po-wegiersku`); Rolada śląska (`rolada-slaska`); Zrazy zawijane (`zrazy`) |
| `technique-panieren` · **Panieren** | **7** | Kotlet mielony (`kotlet-mielony`); Krokiety (`krokiety`); Placek po węgiersku (`placek-po-wegiersku`); Placki mit Apfel (`mit-apfel`); Placki mit Käse (`mit-kaese`); Placki mit Zucchini (`cukinia`); Placki ziemniaczane (`ziemniaczane`) |
| `technique-freezer` · **Freezer** | **6** | Naleśniki mit Fleisch (`fleisch`); Naleśniki mit Twaróg (`twarog`); Pierogi mit Fleisch (`fleisch`); Pierogi mit Heidelbeeren (`jagody`); Pierogi mit Kraut und Pilzen (`kraut-pilze`); Pierogi Ruskie (`ruskie`) |
| `technique-fuellen` · **Füllen & Rollen** | **4** | Pyzy mit Fleisch (`pyzy`); Rolada śląska (`rolada-slaska`); Uszka mit Pilzen (`uszka`); Zrazy zawijane (`zrazy`) |
| `technique-kiszenie` · **Fermentieren** | **1** | Kapuśniak (`kapusniak`) |

**Technique-Cluster ohne Recipe-Tags:** `technique-grill-rauch` (Grill & Räuchern), `technique-konserven` (Vorrat)

**Rezepte ohne `techniqueIds`:** 29 (nicht kritisch — viele Cooks brauchen kein Technik-Hub).

---

## 5. By region (`regionIds`) — dünn

| Region | Count | Dishes |
|--------|------:|--------|
| `region-slask` · **Schlesien** | **3** | Rolada śląska (`rolada-slaska`); Zrazy zawijane (`zrazy`); Żurek (`zurek`) |
| `region-podhale` · **Podhale** | **1** | Gegrillter Oscypek mit Preiselbeeren (`oscypek-preiselbeeren`) |

**Region-getagged:** 4 · **ohne Region:** 75  
→ Region-Hubs bleiben bewusst thin / `noindex,follow` (siehe Authority-Status).

---

## 6. Complete published recipe ID list (79)

| # | ID | DE Title | DE slug | Family | Categories | Occasions |
|--:|----|----------|---------|--------|------------|-----------|
| 1 | `recipe-babka` | Babka | `babka` | — | Süßes & Gebäck, Vegetarisch | Ostern |
| 2 | `recipe-barszcz` | Barszcz czerwony | `barszcz-czerwony` | — | Suppen, Vegetarisch | Wigilia |
| 3 | `recipe-biala-kielbasa` | Biała kiełbasa | `biala-kielbasa` | — | Hauptgerichte, Schnelle Rezepte | Ostern, Sonntagsessen |
| 4 | `recipe-bigos` | Bigos | `bigos` | — | Hauptgerichte | — |
| 5 | `recipe-botwinka` | Botwinka | `botwinka` | — | Suppen, Vegetarisch | Ostern |
| 6 | `recipe-buraczki` | Buraczki | `buraczki` | — | Vegetarisch, Schnelle Rezepte | Sonntagsessen, Ostern |
| 7 | `recipe-chalka` | Chałka | `chalka` | — | Süßes & Gebäck, Vegetarisch | Ostern, Sonntagsessen |
| 8 | `recipe-chlodnik` | Chłodnik litewski | `chlodnik-litewski` | — | Suppen, Vegetarisch | — |
| 9 | `recipe-cwikla` | Ćwikła | `cwikla` | — | Vegetarisch, Schnelle Rezepte | Ostern, Sonntagsessen |
| 10 | `recipe-drozdzowka` | Drożdżówka / Placek drożdżowy | `drozdzowka` | — | Süßes & Gebäck, Vegetarisch | Sonntagsessen |
| 11 | `recipe-fasolka` | Fasolka po bretońsku | `fasolka-po-bretonsku` | — | Schnelle Rezepte, Hauptgerichte | — |
| 12 | `recipe-faworki` | Faworki | `faworki` | — | Schnelle Rezepte, Süßes & Gebäck | Tłusty Czwartek |
| 13 | `recipe-flaki` | Flaki | `flaki` | — | Suppen | Sonntagsessen |
| 14 | `recipe-oscypek` | Gegrillter Oscypek mit Preiselbeeren | `oscypek-preiselbeeren` | — | Schnelle Rezepte, Vegetarisch | — |
| 15 | `recipe-golabki` | Gołąbki | `golabki` | — | Hauptgerichte | Sonntagsessen |
| 16 | `recipe-golonka` | Golonka | `golonka` | — | Hauptgerichte | Sonntagsessen |
| 17 | `recipe-grochowka` | Grochówka | `grochowka` | — | Suppen | Sonntagsessen |
| 18 | `recipe-gulasz` | Gulasz wieprzowy | `gulasz-wieprzowy` | — | Hauptgerichte | Sonntagsessen |
| 19 | `recipe-jajka-faszerowane` | Jajka faszerowane | `jajka-faszerowane` | — | Vegetarisch, Schnelle Rezepte | Ostern, Sonntagsessen |
| 20 | `recipe-kapusniak` | Kapuśniak | `kapusniak` | — | Suppen | — |
| 21 | `recipe-kapusta-zasmażana` | Kapusta zasmażana | `kapusta-zasmażana` | — | Vegetarisch, Hauptgerichte | Sonntagsessen |
| 22 | `recipe-karp` | Karp po polsku | `karp` | — | Hauptgerichte | Wigilia, Fastenzeit |
| 23 | `recipe-kaszanka` | Kaszanka | `kaszanka` | — | Hauptgerichte, Schnelle Rezepte | Sonntagsessen |
| 24 | `recipe-klopsy` | Klopsy in Dillsoße | `klopsy` | — | Hauptgerichte, Schnelle Rezepte | Sonntagsessen |
| 25 | `recipe-kluski-kladzione` | Kluski kładzione | `kluski-kladzione` | — | Hauptgerichte, Vegetarisch, Schnelle Rezepte | Sonntagsessen |
| 26 | `recipe-kluski-slaskie` | Kluski śląskie | `kluski-slaskie` | — | Hauptgerichte, Vegetarisch | Sonntagsessen |
| 27 | `recipe-knedle-sliwki` | Knedle ze śliwkami | `knedle-sliwki` | — | Süßes & Gebäck, Hauptgerichte, Vegetarisch | Sonntagsessen |
| 28 | `recipe-kompot-z-suszu` | Kompot z suszu | `kompot-z-suszu` | — | Süßes & Gebäck, Vegetarisch, Schnelle Rezepte | Wigilia |
| 29 | `recipe-kopytka` | Kopytka | `kopytka` | — | Hauptgerichte, Vegetarisch | Sonntagsessen |
| 30 | `recipe-kotlet-mielony` | Kotlet mielony | `kotlet-mielony` | — | Schnelle Rezepte, Hauptgerichte | Sonntagsessen |
| 31 | `recipe-schabowy` | Kotlet schabowy | `kotlet-schabowy` | — | Schnelle Rezepte, Hauptgerichte | Sonntagsessen |
| 32 | `recipe-krokiety` | Krokiety | `krokiety` | — | Hauptgerichte, Vegetarisch | Sonntagsessen, Wigilia |
| 33 | `recipe-krupnik` | Krupnik | `krupnik` | — | Suppen | Sonntagsessen |
| 34 | `recipe-kutia` | Kutia | `kutia` | — | Süßes & Gebäck, Vegetarisch, Hauptgerichte | Wigilia |
| 35 | `recipe-lazanki` | Łazanki mit Kapusta | `lazanki` | — | Hauptgerichte | Sonntagsessen |
| 36 | `recipe-leczo` | Leczo | `leczo` | — | Hauptgerichte, Schnelle Rezepte | Sonntagsessen |
| 37 | `recipe-makaron-z-makiem` | Makaron z makiem | `makaron-z-makiem` | — | Süßes & Gebäck, Schnelle Rezepte, Vegetarisch, Hauptgerichte | Wigilia |
| 38 | `recipe-makaron-z-serem` | Makaron z serem | `makaron-z-serem` | — | Schnelle Rezepte, Hauptgerichte, Vegetarisch, Süßes & Gebäck | — |
| 39 | `recipe-makowiec` | Makowiec | `makowiec` | — | Süßes & Gebäck, Vegetarisch | Wigilia |
| 40 | `recipe-mazurek` | Mazurek orzechowy | `mazurek` | — | Süßes & Gebäck, Vegetarisch | Ostern |
| 41 | `recipe-mizeria` | Mizeria | `mizeria` | — | Vegetarisch, Schnelle Rezepte | Sonntagsessen, Ostern |
| 42 | `recipe-nalesniki-mieso` | Naleśniki mit Fleisch | `fleisch` | `family-nalesniki` | Hauptgerichte | Sonntagsessen |
| 43 | `recipe-nalesniki-dzem` | Naleśniki mit Marmelade | `dzem` | `family-nalesniki` | Schnelle Rezepte, Süßes & Gebäck, Vegetarisch | — |
| 44 | `recipe-nalesniki-szpinak` | Naleśniki mit Spinat | `szpinak` | `family-nalesniki` | Schnelle Rezepte, Hauptgerichte, Vegetarisch | — |
| 45 | `recipe-nalesniki` | Naleśniki mit Twaróg | `twarog` | `family-nalesniki` | Schnelle Rezepte, Süßes & Gebäck, Vegetarisch | — |
| 46 | `recipe-napoleonka` | Napoleonka / Kremówka | `napoleonka` | — | Süßes & Gebäck, Vegetarisch | Sonntagsessen |
| 47 | `recipe-paczki` | Pączki | `paczki` | — | Süßes & Gebäck, Vegetarisch | Tłusty Czwartek |
| 48 | `recipe-pasztet` | Pasztet drobiowy | `pasztet` | — | Hauptgerichte | Ostern, Sonntagsessen |
| 49 | `recipe-piernik` | Piernik | `piernik` | — | Süßes & Gebäck, Vegetarisch | Wigilia |
| 50 | `recipe-pierogi-leniwe` | Pierogi leniwe | `pierogi-leniwe` | — | Schnelle Rezepte, Hauptgerichte, Vegetarisch, Süßes & Gebäck | Sonntagsessen |
| 51 | `recipe-pierogi-meat` | Pierogi mit Fleisch | `fleisch` | `family-pierogi` | Hauptgerichte | Sonntagsessen |
| 52 | `recipe-pierogi-jagody` | Pierogi mit Heidelbeeren | `jagody` | `family-pierogi` | Süßes & Gebäck, Hauptgerichte, Vegetarisch | — |
| 53 | `recipe-pierogi-cabbage` | Pierogi mit Kraut und Pilzen | `kraut-pilze` | `family-pierogi` | Hauptgerichte, Vegetarisch | Wigilia, Fastenzeit |
| 54 | `recipe-pierogi` | Pierogi Ruskie | `ruskie` | `family-pierogi` | Hauptgerichte, Vegetarisch | Wigilia, Sonntagsessen |
| 55 | `recipe-placek-po-wegiersku` | Placek po węgiersku | `placek-po-wegiersku` | — | Hauptgerichte | Sonntagsessen |
| 56 | `recipe-placki-jablka` | Placki mit Apfel | `mit-apfel` | `family-placki` | Schnelle Rezepte, Süßes & Gebäck, Vegetarisch | — |
| 57 | `recipe-placki-ser` | Placki mit Käse | `mit-kaese` | `family-placki` | Schnelle Rezepte, Hauptgerichte | Sonntagsessen |
| 58 | `recipe-placki-cukinia` | Placki mit Zucchini | `cukinia` | `family-placki` | Schnelle Rezepte, Hauptgerichte, Vegetarisch | Sonntagsessen |
| 59 | `recipe-placki` | Placki ziemniaczane | `ziemniaczane` | `family-placki` | Schnelle Rezepte, Hauptgerichte, Vegetarisch | Sonntagsessen |
| 60 | `recipe-pyzy` | Pyzy mit Fleisch | `pyzy` | — | Hauptgerichte | Sonntagsessen |
| 61 | `recipe-racuchy` | Racuchy z jabłkami | `racuchy-jablka` | — | Süßes & Gebäck, Vegetarisch | — |
| 62 | `recipe-rolada-slaska` | Rolada śląska | `rolada-slaska` | — | Hauptgerichte | Sonntagsessen |
| 63 | `recipe-rosol` | Rosół | `rosol` | — | Suppen | Sonntagsessen |
| 64 | `recipe-ryba-po-grecku` | Ryba po grecku | `ryba-po-grecku` | — | Hauptgerichte | Wigilia, Sonntagsessen |
| 65 | `recipe-salatka-jarzynowa` | Sałatka jarzynowa | `salatka-jarzynowa` | — | Vegetarisch | Sonntagsessen, Ostern |
| 66 | `recipe-schab-pieczony` | Schab pieczony | `schab-pieczony` | — | Hauptgerichte | Sonntagsessen |
| 67 | `recipe-sernik` | Sernik | `sernik` | — | Süßes & Gebäck, Vegetarisch | Sonntagsessen, Ostern |
| 68 | `recipe-sledz` | Śledź w oleju | `sledz` | — | Hauptgerichte, Schnelle Rezepte | Wigilia, Fastenzeit |
| 69 | `recipe-szarlotka` | Szarlotka | `szarlotka` | — | Süßes & Gebäck, Vegetarisch | Sonntagsessen |
| 70 | `recipe-uszka` | Uszka mit Pilzen | `uszka` | — | Vegetarisch, Hauptgerichte | Wigilia, Fastenzeit |
| 71 | `recipe-wuzetka` | Wuzetka | `wuzetka` | — | Süßes & Gebäck, Vegetarisch | Sonntagsessen |
| 72 | `recipe-zapiekanka` | Zapiekanka | `zapiekanka` | — | Schnelle Rezepte, Hauptgerichte | — |
| 73 | `recipe-zeberka` | Żeberka pieczone | `zeberka` | — | Hauptgerichte | Sonntagsessen |
| 74 | `recipe-zrazy` | Zrazy zawijane | `zrazy` | — | Hauptgerichte | Sonntagsessen |
| 75 | `recipe-zupa-grzybowa` | Zupa grzybowa | `zupa-grzybowa` | — | Suppen, Vegetarisch | Wigilia, Sonntagsessen |
| 76 | `recipe-ogorkowa` | Zupa ogórkowa | `ogorkowa` | — | Suppen | — |
| 77 | `recipe-zupa-pomidorowa` | Zupa pomidorowa | `zupa-pomidorowa` | — | Suppen | Sonntagsessen |
| 78 | `recipe-szczawiowa` | Zupa szczawiowa | `szczawiowa` | — | Suppen, Vegetarisch | Sonntagsessen |
| 79 | `recipe-zurek` | Żurek | `zurek` | — | Suppen | Wigilia |

---

## 7. Gap table — Diaspora classics vs LIVE

Legende: **PRESENT** = published Money Page · **MISSING** = fehlt, ownership-klar/klarbar · **HOLD** = bewusst nicht / Clash / Niche.

Audit-Kriterien: kulturelle Gewichtigkeit für DE/PL-Diaspora + Search-Intent + kein Cannibal vs `keyword-ownership.md` + Cover-Glaubwürdigkeit.

### 7.1 Core already PRESENT (Auswahl — nicht vollständig)

| Gericht | Status | Owner |
|---------|--------|-------|
| Pierogi (4) / Placki (4) / Naleśniki (4) | PRESENT | Families |
| Żurek / Barszcz czerwony / Rosół / Ogórkowa / Kapuśniak / Botwinka / Chłodnik / Pomidorowa / Flaki / Grzybowa / Grochówka / Krupnik / Szczawiowa | PRESENT | Suppen-Cooks + `/blog/polnische-suppen` |
| Bigos / Gołąbki / Schabowy / Gulasz / Golonka / Żeberka / Schab / Zrazy / Rolada / Klopsy / Kaszanka / Biała / Pasztet / Leczo | PRESENT | Fleisch/Eintopf |
| Wigilia: Uszka / Karp / Śledź / Ryba po grecku / Kutia / Makaron z makiem / Kompot / Pierogi kraut | PRESENT | + Wigilia-Pillar |
| Ostern: Babka / Mazurek / Jajka / Ćwikła / Sałatka / Mizeria / Buraczki / Chałka | PRESENT | + Wielkanoc-Pillar |
| Bäckerei: Sernik / Szarlotka / Makowiec / Piernik / Pączki / Faworki / Napoleonka / Wuzetka / Drożdżówka / Racuchy | PRESENT | |
| Street/Alltag: Zapiekanka / Placek po węgiersku / Makaron z serem / Fasolka / Oscypek | PRESENT | |

### 7.2 Wichtige Gaps (ehrlich)

| Gericht | Status | Priorität | Begründung |
|---------|--------|-----------|------------|
| **Kaczka pieczona** | **LIVE** (W15) | — | `/rezepte/kaczka` |
| **Galareta / nóźki w galarecie** | **LIVE** (W15) | — | `/rezepte/galareta` |
| **Sałatka śledziowa** | **LIVE** (W15) | — | `/rezepte/salatka-sledziowa` |
| **Marchewka z groszkiem** | **LIVE** (W15) | — | `/rezepte/marchewka-groszek` |
| **Zupa koperkowa** | **LIVE** (W15) | — | `/rezepte/koperkowa` |
| **Pieczeń rzymska** | **LIVE** (W15) | — | `/rezepte/pieczen-rzymska` |
| **Kisiel owocowy** | **LIVE** (W15) | — | `/rezepte/kisiel` |
| **Fasolka szparagowa po polsku** | **LIVE** (W15) | — | `/rezepte/fasolka-szparagowa` |
| **Kotlet de volaille** | **MISSING** | mittel | Restaurant/Sonntag; Panade-Nachbar zu Schabowy — Ownership eng halten |
| **Surówka z kapusty** | **MISSING** | mittel | Alltags-Rohkost; ≠ Kapusta zasmażana ≠ Mizeria |
| **Barszcz biały** | **HOLD** | — | Intent ≈ Żurek; Primary bleibt `/rezepte/zurek` (+ Zakwas-Pillar) |
| **Czernina** | **HOLD** | — | niche / Blut / Cover-Glaubwürdigkeit |
| **Sękacz** | **HOLD** | — | regional / Cover schwer |
| **Kwaśnica** | **HOLD** | — | regional thin-Hub-Risiko |
| **Kasza gryczana Cook** | **HOLD** | — | Lexikon `post-kasza` Broad-Owner |
| **Żurek-Varianten** | **HOLD** | — | kein Spray |
| **Kotlet family hub** | **HOLD** | — | erst nach GSC-Clash |
| **5. Family-Variante** (Pierogi/Placki/Naleśniki) | **HOLD** | — | Families satt 4/4/4 |
| **Lane kluski** | **HOLD** | — | Overlap Kładzione |

### 7.3 Gap-Zählung (Important MISSING)

| Bucket | Count |
|--------|------:|
| Important MISSING | **Surówka / de volaille** (+ HOLD-Liste) |
| Bewusst HOLD | 8+ (Czernina, Barszcz biały, Sękacz, …) |

→ **Wave 15 SHIPPED** (+8 · SEED **31** · **87** Rezepte). Parallel: Cover-QA / Region-Hubs / GSC.

---

## 8. Blog inventory (36)

| # | ID |
|--:|----|
| 1 | `post-barszcz-technik` |
| 2 | `post-bigos-guide` |
| 3 | `post-dutch-oven` |
| 4 | `post-ersatzprodukte-de` |
| 5 | `post-fasolka-guide` |
| 6 | `post-faworki-technik` |
| 7 | `post-ferment-glaeser` |
| 8 | `post-fleischwolf` |
| 9 | `post-freezer-boxen` |
| 10 | `post-freezer-meal-prep` |
| 11 | `post-golabki-guide` |
| 12 | `post-gusseisen` |
| 13 | `post-kasza` |
| 14 | `post-kielbasa-arten` |
| 15 | `post-kiszenie` |
| 16 | `post-majeranek` |
| 17 | `post-makowiec-technik` |
| 18 | `post-nalesniki-guide` |
| 19 | `post-oscypek` |
| 20 | `post-paczek-technik` |
| 21 | `post-panieren` |
| 22 | `post-pierogi-formen` |
| 23 | `post-pierogi-guide` |
| 24 | `post-pierogi-teig` |
| 25 | `post-placki-guide` |
| 26 | `post-polenladen` |
| 27 | `post-polnische-suppen` |
| 28 | `post-rosol-technik` |
| 29 | `post-smietana-schmand` |
| 30 | `post-sonntagsessen` |
| 31 | `post-teigmaschine` |
| 32 | `post-tlusty-czwartek` |
| 33 | `post-twarog` |
| 34 | `post-wielkanoc` |
| 35 | `post-wigilia` |
| 36 | `post-zakwas-zurek` |

---

## 9. Empfehlung

| Frage | Antwort |
|-------|---------|
| Katalog voll? | **Kern-Diaspora sehr voll** (87 Cooks · Score ~9.2/10); Rest: Surówka / de volaille / HOLD |
| Nächster Schritt Content? | GSC messen · Cover-Proxy · HOLD nur bei klarer Nachfrage |
| Parallel? | Cover-Proxy-Upgrades · Region-Hubs nur mit Intro ≥400 |

*Generiert aus Live-Seed — bei Seed-Änderungen Doc aktualisieren.*
