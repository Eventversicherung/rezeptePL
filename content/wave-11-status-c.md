# Wave 11 — Status C (Photo P2: Teigwaren / Backen / Naleśniki)

Status: **DONE** (Implementer C · 2026-07-20)  
Scope: 17 recipe covers + `family-nalesniki.coverImage`  
No new recipes · no `SEED_VERSION` bump · no commit/push

## Corrected C-Liste (17, disjunkt A+B)

`recipe-kopytka`, `recipe-pyzy`, `recipe-knedle-sliwki`, `recipe-pierogi-leniwe`,  
`recipe-nalesniki`, `recipe-nalesniki-mieso`, `recipe-nalesniki-szpinak`, `recipe-nalesniki-dzem`,  
`recipe-kapusta-zasmażana`, `recipe-salatka-jarzynowa`, `recipe-oscypek`,  
`recipe-faworki`, `recipe-makowiec`, `recipe-sernik`, `recipe-piernik`, `recipe-babka`, `recipe-racuchy`  
(+ Family-Cover Naleśniki = default `recipe-nalesniki`)

`recipe-mizeria` bleibt bei A (MISSING) — nicht angefasst.

## Cover-Tabelle

| Recipe-ID | Alt Photo-ID | Neu Photo-ID | GET | Fit-Notiz |
|-----------|--------------|--------------|-----|-----------|
| `recipe-kopytka` | `1516684669134-de6f7c473a2a` | `1745871136691-8fb229223fc8` | 200 | Kartoffelklößchen/Gnocchi mit Sauce — kopytka-nah |
| `recipe-pyzy` | `1603133872878-684f208fb84b` | `1698688332650-8724293b2ad8` | 200 | Große Klöße auf Teller (≠ gebratener Reis) |
| `recipe-knedle-sliwki` | `1571115177098-24ec42ed204d` | `1747628857843-96f695316cfc` | 200 | Brösel-bestäubte Knödel — klassische Knedle-Serve |
| `recipe-pierogi-leniwe` | `1586511925558-a4c6376fe65f` | `1601556123240-462c758a50db` | 200 | Kleine Kartoffel-/Käseklößchen in Butter |
| `recipe-nalesniki` | `1567620905732-2d1ec7ab7445` | `1587314168485-3236d6710814` | 200 | Dünne gerollte Crepes + Creme/Beeren (≠ US-Pancakes); `variantImage` mitgezogen |
| `recipe-nalesniki-mieso` | `1528207776546-365bb710ee93` | `1761095596614-31172e9822e0` | 200 | Herzhaft gerollter Crepe (≠ Blaubeer-Pancakes); `variantImage` mitgezogen |
| `recipe-nalesniki-szpinak` | `1626074353765-517a681e40be` | `1677844592730-ce9c936d8f1a` | 200 | Crepe mit sichtbarem Spinat (≠ Hähnchen); `variantImage` mitgezogen |
| `recipe-nalesniki-dzem` | `1484723091739-30a097e8f929` | `1770802803773-35cd82bc215b` | 200 | Crepes mit Kirsch-/Marmelade-Topping (≠ French Toast); `variantImage` mitgezogen |
| `recipe-kapusta-zasmażana` | `1518977676601-b53f82aba655` | `1745827223757-c98bc93108d2` | 200 | Geschmortes Sauerkraut sichtbar (Teller mit Wurst — Kraut dominant) |
| `recipe-salatka-jarzynowa` | `1540420773420-3366772f4999` | `1718096125279-15f47cab1cc9` | 200 | Kartoffel-/Gemüsesalat-Bowl (besser als Rainbow-Rohkost; Mayo-Olivier-Ideal auf Unsplash knapp) |
| `recipe-oscypek` | `1452195100486-9cc805987862` | `1774853602664-9f6321892e6d` | 200 | Käsebrett mit Fruchtaufstrich (Preiselbeer-/Jam-Nähe; ≠ Blauschimmel) |
| `recipe-faworki` | `1551024601-bec78aea704b` | `1714545049821-9eddecf6e20d` | 200 | Frittierte Teigstücke + Puderzucker (Beignet-Form; ≠ Streusel-Donuts) — Angel-Wings-Form auf Unsplash rar |
| `recipe-makowiec` | `1488477181946-6428a0291777` | `1756137939545-f2daf3d0742c` | 200 | Dunkle Mohn-/Swirl-Hefe-Rolle (≠ Panna-Cotta) |
| `recipe-sernik` | `1565958011703-44f9829ba187` | `1773632996592-e150b9ed5059` | 200 | Käsekuchen-Stück ohne Himbeer-Schichttorte |
| `recipe-piernik` | `1606313564200-e75d5e30476c` | `1757522745938-c54b94802591` | 200 | Dunkle Gewürz-/Gingerbread-Cookies (≠ Brownies; ≠ nur Weihnachtsbaum) |
| `recipe-babka` | `1586985289906-406988974504` | `1521398359471-8997fbaa9406` | 200 | Gugelhupf/Bundt mit Puderzucker (≠ Schokotorte mit Sternen) |
| `recipe-racuchy` | `1509440159596-0249088772ff` | `1703876087705-818f2af21c65` | 200 | Apfel-Teiggebäck/Galette mit Karamell (≠ Brotlaibe) |
| `family-nalesniki` | `1567620905732-2d1ec7ab7445` | `1587314168485-3236d6710814` | 200 | Synced mit `recipe-nalesniki` default |

## Final Photo-IDs (C) — für Unique-Gate E

```
1745871136691-8fb229223fc8
1698688332650-8724293b2ad8
1747628857843-96f695316cfc
1601556123240-462c758a50db
1587314168485-3236d6710814   # nalesniki + family (shared by design)
1761095596614-31172e9822e0
1677844592730-ce9c936d8f1a
1770802803773-35cd82bc215b
1745827223757-c98bc93108d2
1718096125279-15f47cab1cc9
1774853602664-9f6321892e6d
1714545049821-9eddecf6e20d
1756137939545-f2daf3d0742c
1773632996592-e150b9ed5059
1757522745938-c54b94802591
1521398359471-8997fbaa9406
1703876087705-818f2af21c65
```

17 unique recipe Photo-IDs (+ Family teilt bewusst mit default Naleśniki).

## Dateien gepatcht (nur Cover-Felder)

| Datei | IDs |
|-------|-----|
| `src/lib/data/seed-recipes-wave5.ts` | kopytka, pyzy, pierogi-leniwe |
| `src/lib/data/seed-recipes-wave8-d.ts` | knedle-sliwki |
| `src/lib/data/seed.ts` | nalesniki (+variant), oscypek, faworki, racuchy |
| `src/lib/data/seed-families.ts` | family-nalesniki; nalesniki-mieso (+variant); nalesniki-szpinak (+variant) |
| `src/lib/data/seed-recipes-wave10-c.ts` | nalesniki-dzem (+variant) |
| `src/lib/data/seed-recipes-wave8-a.ts` | kapusta-zasmażana |
| `src/lib/data/seed-recipes-wave9-b.ts` | salatka-jarzynowa |
| `src/lib/data/seed-recipes-wave6.ts` | makowiec |
| `src/lib/data/seed-recipes-wave7.ts` | sernik |
| `src/lib/data/seed-recipes-wave10-b.ts` | piernik |
| `src/lib/data/seed-recipes-wave9-c.ts` | babka |

## Kollisionen / Hinweise für E

| Thema | Detail |
|-------|--------|
| **D-Kollision vermieden** | `1476224203421-9ac39bcb3327` war kurz für `nalesniki-mieso` gewählt, kollidiert mit `seed-recipes-wave11-d.ts` → umgestellt auf `1761095596614-31172e9822e0` |
| A/B Status | `wave-11-status-a.md` / `-b.md` beim Ship noch nicht sichtbar — C-IDs absichtlich neu (`17…`/`16…`-Band), nicht aus Plan-Kandidaten A (Pierogi-Boards `176483…`/`176630…`) |
| Shared by design | Family Naleśniki = `recipe-nalesniki` Cover-ID |
| Fit-Kompromisse | Faworki ≈ Puderzucker-Beignets (keine echten Angel Wings); Sałatka ≈ Kartoffel-Gemüse-Bowl (kein klassisches Mayo-Olivier); Oscypek ≈ Käsebrett+Jam (kein Grill-Oscypek-Solo); Racuchy ≈ Apfel-Galette |
| Gates | Kein SEED-Bump · keine FACTS/Ownership · keine neuen Rezepte |

## Diff-Liste für Integrator E

1. Alle Cover-URLs in Tabelle oben mergen  
2. Unique-Check gegen A/B/D Status-Docs  
3. Family Pierogi/Placki (A) nicht von C überschrieben — nur Naleśniki  
4. Visual spot-check: Naleśniki-Family Switcher (4 Varianten) + Makowiec/Sernik/Piernik/Babka/Faworki  
