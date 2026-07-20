# Wave 11 — Status B (Photo P1: Suppen / Fleisch / Herzhaft)

Status: **DONE** (Implementer B · 2026-07-21)  
Scope: 17 recipe covers (Paket B)  
No new recipes · no `SEED_VERSION` bump · no commit/push

## Scope (17 IDs)

`recipe-flaki`, `recipe-uszka`, `recipe-rosol`, `recipe-ogorkowa`, `recipe-botwinka`,  
`recipe-golabki`, `recipe-schab-pieczony`, `recipe-zeberka`, `recipe-zrazy`, `recipe-rolada-slaska`, `recipe-kaszanka`,  
`recipe-karp`, `recipe-sledz`, `recipe-fasolka`, `recipe-lazanki`, `recipe-makaron-z-serem`, `recipe-krokiety`

## Cover-Tabelle (old → new)

| Recipe-ID | Alt Photo-ID | Neu Photo-ID | GET | Fit-Notiz |
|-----------|--------------|--------------|-----|-----------|
| `recipe-flaki` | `1559847844-5315695dadae` (Shrimp-Gumbo) | `1623302044887-ac8ac6c04d40` | 200 | Dunkle Offal-/Streifen in Sauce — **≠** Shrimp/Gumbo |
| `recipe-uszka` | `1496116218417-1a781b1c416c` (Gyoza+Chopsticks) | `1716834092803-08c8dca5226f` | 200 | Kleine gekochte Teigtaschen in klarer Brühe — **kein** Gyoza/Chopsticks |
| `recipe-rosol` | `1547592180-85f173990554` (Lachs-Bowl) | `1612966948332-81d747414a8f` | 200 | Klare europäische Hühnersuppe mit Nudeln, Karotte, Petersilie |
| `recipe-ogorkowa` | `1478144592103-25e218a04891` (Drachenfrucht) | `1659603667872-915f2b953cb7` | 200 | Helle grüne Brühe mit Gurken-/Zucchini-Scheiben (Ogórkowa-Proxy) |
| `recipe-botwinka` | `1615485290382-441e4d049cb5` (Brokkoli) | `1526401363794-c96708fb8089` | 200 | Rote-Bete-Suppe mit Blattgrün/Stielen — Botwinka-nah |
| `recipe-golabki` | `1604908176997-125f25cc6f3d` (mediterranes Hähnchen) | `1622220734058-23ce1f89d84d` | 200 | **Kohlrouladen** in Tomatensauce, Füllung sichtbar |
| `recipe-schab-pieczony` | `1588168333986-5078d3ae3976` (Beef Filet) | `1580476262843-d5e9b687d4d4` | 200 | Gebratener Schweinebraten mit Kruste + glasierte Karotten |
| `recipe-zeberka` | `1603360946369-dc9bb6258143` (Souvlaki) | `1569352304334-6e422cd70ecd` | 200 | Geröstete/glasierte Rippchen auf Holzbrett |
| `recipe-zrazy` | `1544025162-d76694265947` (BBQ-Ribs) | `1703553591265-91e21fca98ad` | 200 | Geschmortes Rind + Sauce + Knödel (mitteleuropäischer Teller) |
| `recipe-rolada-slaska` | `1432139509613-5c4255815697` (Bone-in Steak) | `1769773183948-d24e3c5a2b82` | 200 | Geschmortes Fleisch in dunkler Sauce + Püree |
| `recipe-kaszanka` | `1558030006-450675393462` (Steak) | `1779119866183-55f8f9c409c6` | 200 | Dunkle gebratene Blutwurst-/Morcilla-Stücke |
| `recipe-karp` | `1519708227418-c8fd9a32b7a2` (Lachs+Zoodles) | `1548704087-b11dab0fbec0` | 200 | Ganzer gebratener Fisch auf Teller (Wigilia-Karp-Proxy) |
| `recipe-sledz` | `1559339352-11d035aa65de` (Terrasse ohne Food) | `1665841265022-27fd74b83005` | 200 | **Hering** mit Zwiebel auf dunklem Brot — Fisch sichtbar |
| `recipe-fasolka` | `1546549032-9571cd6b27df` (Carbonara) | `1698917467449-08bcd1d9014b` | 200 | Weiße Bohnen + Wurst in Eintopf (Fasolka-po-bretonsku-nah) |
| `recipe-lazanki` | `1621996346565-e3dbc646d9a9` (Penne Bolognese) | `1587544704492-243de6821419` | 200 | Breite Nudeln in Pfanne mit Pilzen/weißen Würfeln (Łazanki-Proxy) |
| `recipe-makaron-z-serem` | `1473093295043-cdd812d0e601` (Pesto-Salat) | `1597394412452-60ed971d3917` | 200 | Einfache gewellte Eiernudeln (Basis für Butter/Twaróg) |
| `recipe-krokiety` | `1529042410759-befb1204b468` (Meatballs) | `1626011852881-4609127619a8` | 200 | Panierte/frittierte Croquettes auf Teller |

## Final Photo-IDs (B) — für Unique-Gate E

```
1623302044887-ac8ac6c04d40
1716834092803-08c8dca5226f
1612966948332-81d747414a8f
1659603667872-915f2b953cb7
1526401363794-c96708fb8089
1622220734058-23ce1f89d84d
1580476262843-d5e9b687d4d4
1569352304334-6e422cd70ecd
1703553591265-91e21fca98ad
1769773183948-d24e3c5a2b82
1779119866183-55f8f9c409c6
1548704087-b11dab0fbec0
1665841265022-27fd74b83005
1698917467449-08bcd1d9014b
1587544704492-243de6821419
1597394412452-60ed971d3917
1626011852881-4609127619a8
```

17 unique IDs · geprüft gegen Status A/C/D Claimed-Listen · keine Kollision.

## Dateien gepatcht (nur `coverImage`)

| Datei | IDs |
|-------|-----|
| `src/lib/data/seed.ts` | golabki, rosol, fasolka |
| `src/lib/data/seed-recipes-wave5.ts` | lazanki, zrazy |
| `src/lib/data/seed-recipes-wave6.ts` | uszka |
| `src/lib/data/seed-recipes-wave7.ts` | karp, krokiety, sledz |
| `src/lib/data/seed-recipes-wave8-b.ts` | ogorkowa |
| `src/lib/data/seed-recipes-wave9-a.ts` | zeberka, rolada-slaska |
| `src/lib/data/seed-recipes-wave9-b.ts` | botwinka |
| `src/lib/data/seed-recipes-wave9-d.ts` | kaszanka |
| `src/lib/data/seed-recipes-wave10-a.ts` | flaki, schab-pieczony |
| `src/lib/data/seed-recipes-wave10-d.ts` | makaron-z-serem |

## Gates B

- [x] Alle 17 GET 200 (`?w=1600&q=80`)
- [x] Unique innerhalb Batch B
- [x] Unique vs. Status A/C/D claimed IDs
- [x] Flaki ≠ Gumbo/Shrimp
- [x] Uszka ≠ Gyoza/Chopsticks
- [x] Śledź = Fisch auf dem Teller
- [x] Gołąbki = Kohlrouladen
- [x] Nur Cover-Felder · kein FACTS/Ownership · kein SEED bump · kein Push

## Proxies / Hinweise für E

- **Ogórkowa / Łazanki / Makaron z serem / Flaki / Karp:** Unsplash-Free-Pool für exakte polnische Klassiker dünn — bewusste Proxies mit ehrlicher Fit-Notiz.
- Visuell spotten: Flaki, Uszka, Rosół, Gołąbki, Śledź, Żeberka.
- `SEED_VERSION` 24 → 25 nur Agent E nach A+B+C+D.
