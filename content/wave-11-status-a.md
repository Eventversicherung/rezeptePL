# Wave 11 — Status A (Photo P0: Broken + Money Heroes)

Status: **Implementer A fertig** · kein Merge · kein `SEED_VERSION`-Bump · kein Push  
Datum: 2026-07-21

## Scope

20 recipe IDs (11 MISSING + 9 Heroes) + Family covers Pierogi/Placki synced.  
Nur `coverImage` / `variantImage` / Family-`coverImage`. Keine neuen Rezepte.

## Final Photo-IDs (unique innerhalb Batch A)

| Recipe-ID | Alt | Neu Photo-ID | GET | Fit-Notiz |
|-----------|-----|--------------|-----|-----------|
| `recipe-chlodnik` | `1625944525533-217feca6f147` (404) | `1621608953630-00d9eb860392` | 200 | Cremige magenta Rote-Bete-Suppe — Chłodnik-Look |
| `recipe-gulasz` | `1607628311673-4fc15faa5791` (404) | `1519699788450-ad34386a3bfc` | 200 | Paprika-/Fleisch-Eintopf mit Kartoffel & Karotte |
| `recipe-kapusniak` | `1543332164-6e82f355bad8` (404) | `1740993382497-65dba6c7a689` | 200 | Dunkler Schmortopf (Proxy; kein Sauerkraut sichtbar) |
| `recipe-kluski-slaskie` | `1612872087338-bb623d2a77d5` (404) | `1723511413901-99439b957bbf` | 200 | Kartoffelpüree + Schmorfleisch/Sauce (Schlesien-Teller-Proxy) |
| `recipe-kotlet-mielony` | `1588346301655-83add6be44f7` (404) | `1770966666361-b448e634e163` | 200 | Panierte Bratlinge/Schnitzel-Stücke |
| `recipe-mizeria` | `1604977042946-4fba4c5ec4a2` (404) | `1760368104784-79f5f757f66a` | 200 | Kiszone Gurken/Dill — **kein** Śmietana-Dressing (best free cucumber) |
| `recipe-placki` | `1631453717818-536547643874` (404) | `1678527040378-ca2285fbee57` | 200 | Kartoffelpuffer in Sour Cream getunkt |
| `recipe-placki-cukinia` | `1565299500977-26105862a20b` (404) | `1607095591644-9f97a2099c92` | 200 | Gemüse-/Zucchini-Fritter-Stack |
| `recipe-placki-jablka` | `1488477181941-6d2ea94eb813` (404) | `1476877249698-58c37406aa43` | 200 | Süße Pancakes mit Puderzucker |
| `recipe-placki-ser` | `1627308595229-245cf2199a7f` (404) | `1678684277271-aa9fc6d3bca0` | 200 | Herzhafter Placki-Teller mit Gemüse |
| `recipe-zupa-pomidorowa` | `1548943487-a2e4e43b485c` (404) | `1752058238517-81cd22ef6087` | 200 | Cremige Tomatensuppe + Śmietana |
| `recipe-pierogi` | lokal `/recipes/pierogi-ruskie.jpg` (Gyoza) | `1662116663511-9d79d49da183` | 200 | Gebratene Pierogi + Skwarki + Sour Cream — **kein** Gyoza |
| `recipe-pierogi-meat` | `1625220194771-7ebdea0b70b9` | `1766309498484-a781ddb7e74c` | 200 | Hände falten dunkle Fleisch-/Pilzfüllung |
| `recipe-pierogi-cabbage` | `1585032226651-759b368d7246` | `1766309416197-5982d32f4ce0` | 200 | Füllung Kapusta/Grzyby auf Teigkreis |
| `recipe-pierogi-jagody` | `1498557850523-fd3d118b962e` | `1764831257619-24aa3930e02d` | 200 | Rohe Pierogi auf Brettern (Füllung nicht sichtbar; Plan-Fallback OK) |
| `recipe-schabowy` | `1529692236671-f1f6cf9683ba` | `1599921841143-819065a55cc6` | 200 | Panierter Cutlet + Zitrone/Preiselbeere — **kein** Steak |
| `recipe-barszcz` | `1590412200988-a436970781fa` | `1677889173479-c8a0ab15ae18` | 200 | Rote Bete-Suppe im Teller |
| `recipe-zurek` | `1547592166-23ac45744acd` | `1625147541750-dfecb0a624a5` | 200 | Beige Cream-Gravy + Fleischbällchen (**Proxy**; kein klassisches Żurek mit Ei/Kielbasa) |
| `recipe-bigos` | `1534939561126-855b8675edd7` | `1740993382511-c9ab25afb7d4` | 200 | Fleischschmorgericht mit Sauce (**Proxy**; Kohl nicht dominant) |
| `recipe-paczki` | `1527515637462-cff94eecc1ac` (Vacuum) | `1578257264874-5a9858af7d68` | 200 | Runde Berliner/Pączki mit Puderzucker — **Food** |

### Family sync

| Family | coverImage neu | Sync mit |
|--------|----------------|----------|
| `family-pierogi` | `1662116663511-9d79d49da183` | `recipe-pierogi` |
| `family-placki` | `1678527040378-ca2285fbee57` | `recipe-placki` |

### Pierogi local → Unsplash

- Alt: `/recipes/pierogi-ruskie.jpg` (visuell Gyoza-Mismatch)
- Neu: Unsplash `photo-1662116663511-9d79d49da183` für `coverImage` + `variantImage` + Family
- Lokale Datei `public/recipes/pierogi-ruskie.jpg` **nicht gelöscht** (kein Asset-Cleanup in A; E kann später entscheiden)

## Touched files

- `src/lib/data/seed.ts` — pierogi, bigos, zurek, placki, barszcz, schabowy, gulasz, kotlet-mielony, kluski-slaskie, chlodnik
- `src/lib/data/seed-families.ts` — family-pierogi, family-placki, pierogi-meat/cabbage, placki-cukinia/ser/jablka
- `src/lib/data/seed-recipes-wave8-a.ts` — mizeria
- `src/lib/data/seed-recipes-wave8-b.ts` — kapusniak
- `src/lib/data/seed-recipes-wave8-c.ts` — paczki
- `src/lib/data/seed-recipes-wave10-b.ts` — zupa-pomidorowa
- `src/lib/data/seed-recipes-wave10-c.ts` — pierogi-jagody

## Gates A

- [x] Alle 20 GET 200
- [x] Unique innerhalb Batch A (20 distinct IDs)
- [x] Unique vs. aktueller Restkatalog (keine Kollision mit nicht-ersetzten Recipe-Covers)
- [x] Pierogi-Family: keine Chopsticks/Gyoza
- [x] Pączki: Food, gefüllter/runder Hefeteig — kein Haushaltsgerät
- [x] Placki-Family-Cover synced
- [x] Kein `SEED_VERSION`-Bump
- [x] Kein Commit/Push

## Claimed Photo-IDs (für B/C/D — nicht wiederverwenden)

```
1662116663511-9d79d49da183
1766309498484-a781ddb7e74c
1766309416197-5982d32f4ce0
1764831257619-24aa3930e02d
1599921841143-819065a55cc6
1677889173479-c8a0ab15ae18
1625147541750-dfecb0a624a5
1740993382511-c9ab25afb7d4
1578257264874-5a9858af7d68
1621608953630-00d9eb860392
1519699788450-ad34386a3bfc
1740993382497-65dba6c7a689
1723511413901-99439b957bbf
1770966666361-b448e634e163
1760368104784-79f5f757f66a
1678527040378-ca2285fbee57
1607095591644-9f97a2099c92
1476877249698-58c37406aa43
1678684277271-aa9fc6d3bca0
1752058238517-81cd22ef6087
```

## Diff-Liste für Integrator E

1. Cover-Patches in Seed-Dateien oben mergen
2. Visuell spotten: Pierogi-Switcher (4), Placki-Switcher (4), Schabowy, Barszcz, Pączki, Żurek/Bigos Proxies
3. Optional: schwache Proxies später verbessern — `recipe-zurek`, `recipe-bigos`, `recipe-kapusniak`, `recipe-kluski-slaskie`, `recipe-mizeria`, `recipe-pierogi-jagody`
4. `SEED_VERSION` 24 → 25 erst nach A+B+C+D
5. Kein Push von A

## Besonderheiten / Risiken

- **Unsplash Free-Pool** für echte polnische Klassiker (Żurek mit Kielbasa+Ei, Bigos mit Sauerkraut, Mizeria mit Śmietana) ist dünn — deshalb bewusste Proxies mit ehrlicher Fit-Notiz.
- Pierogi von lokalem Asset auf Unsplash umgestellt (konsistent mit CDN-Policy).
- Agent E: Photo-ID-Dedup gegen Status B/C/D prüfen.