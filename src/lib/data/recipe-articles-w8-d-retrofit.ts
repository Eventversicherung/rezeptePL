/**
 * Wave 8 Paket D — FACTS Link-Retrofit for Wave 5–7 recipe IDs.
 *
 * Complete replacement ArticleFacts objects (not patches).
 * Agent E merge into recipe-articles.ts FACTS map:
 *
 *   import { W8_FACTS_D } from "./recipe-articles-w8-d";
 *   import { W8_FACTS_D_RETROFIT } from "./recipe-articles-w8-d-retrofit";
 *   Object.assign(FACTS, W8_FACTS_D_RETROFIT, W8_FACTS_D);
 *
 * Order: retrofit first, then W8_FACTS_D (Knedle wins if key clash — none expected).
 * Do NOT drop existing A/B/C FACTS when merging; assign only these keys.
 *
 * IDs: pierogi-leniwe, kopytka, lazanki, pyzy, zrazy, makowiec, uszka,
 *       karp, krokiety, sernik, sledz
 * Gate: ≥4 markdown links [/de|/pl/...] per locale in FACTS fields
 *       (≥2 recipe + ≥2 blog).
 */

import type { ArticleFacts } from "./recipe-articles-w8-d";

export const W8_FACTS_D_RETROFIT: Record<string, ArticleFacts> = {
  "recipe-pierogi-leniwe": {
    dishDe: "Pierogi leniwe",
    dishPl: "Pierogi leniwe",
    vibeDe: "mild, weich, ohne Falten-Stress",
    vibePl: "łagodne, miękkie, bez stresu lepienia",
    originDe:
      "Pierogi leniwe sind keine gefalteten Pierogi: Twaróg, Mehl und Ei werden zu Klößchen geformt und gekocht. Schneller Einstieg für Kinder und für Tage ohne Zeit zum Falten — verwandt mit Naleśniki-Twaróg-Geschmack, aber andere Technik. Die breite Teigfamilie ordnet der [Pierogi-Guide](/de/blog/pierogi-guide); gefüllte Obst-Knödel sind [Knedle ze śliwkami](/de/rezepte/knedle-sliwki), nicht diese Seite.",
    originPl:
      "Pierogi leniwe to nie sklejane pierogi: twaróg, mąka i jajko formuje się w kluseczki i gotuje. Szybki start dla dzieci i dni bez czasu na lepienie — blisko smaku naleśników z twarogiem, ale inna technika. Rodzinę ciast porządkuje [przewodnik po pierogach](/pl/blog/przewodnik-pierogi); knedle owocowe to [knedle ze śliwkami](/pl/rezepte/knedle-sliwki), nie ta strona.",
    shopDe:
      "Twaróg oder abgetropfter Speisequark, Mehl, Ei, Butter, Semmelbrösel. Konsistenz und DE-Einkauf: [Twaróg-Guide](/de/blog/twarog-deutschland). Ladenroute: [Polenladen](/de/blog/polenladen-einkaufen). Ersatzquark ehrlich nach [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
    shopPl:
      "Twaróg lub odsączony Quark, mąka, jajko, masło, bułka tarta. Konsystencja i zakupy w DE: [przewodnik po twarogu](/pl/blog/twarog-w-niemczech). Trasa: [sklep polski](/pl/blog/sklep-polski-zakupy). Zamienniki według [zamienników składników](/pl/blog/zamienniki-skladnikow).",
    techniqueDe:
      "Teig weich aber formbar. Nicht zu viel Mehl. In leicht siedendem Wasser — nicht sprudelnd — garen bis sie schwimmen.",
    techniquePl:
      "Ciasto miękkie, ale formowalne. Nie za dużo mąki. Gotować w lekko wrzącej wodzie — nie burząc — aż wypłyną.",
    serveDe:
      "Klassisch mit Butterbröseln und Zucker, oder mit Śmietana — siehe [Śmietana vs. Schmand](/de/blog/smietana-schmand). Auch herzhaft mit Salz und Dill möglich. Als Sonntags-Dessert neben dem [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    servePl:
      "Klasycznie z bułką na maśle i cukrem albo ze śmietaną — [śmietana czy Schmand](/pl/blog/smietana-czy-schmand). Też wytrawnie z solą i koperkiem. Jako deser niedzielny obok [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
    diasporaDe:
      "Oft das erste „Pierogi“-Erlebnis für Kinder in DE — ohne Faltenlernen. Wer später Obst einpacken will, wechselt zu Knedle, nicht zu mehr Mehl hier.",
    diasporaPl:
      "Często pierwsze „pierogi” dla dzieci w DE — bez nauki lepienia. Kto później chce owoc w środku, idzie w knedle, nie w więcej mąki tutaj.",
    mistakesDe:
      "Zu viel Mehl, zu starkes Kochen, zu nasser Quark. Abtropfen und ruhig bleiben. Nicht mit [Pierogi Ruskie](/de/rezepte/pierogi/ruskie) oder Knedle vermischen.",
    mistakesPl:
      "Za dużo mąki, zbyt gwałtowne gotowanie, za mokry twaróg. Odsącz i spokój. Nie mieszać z [ruskimi](/pl/rezepte/pierogi/ruskie) ani knedlami.",
    variantsDe:
      "Mit Kartoffelanteil, süßer oder salziger. Nicht verwechseln mit gefalteten [Pierogi Ruskie](/de/rezepte/pierogi/ruskie). Süße gefüllte Nachbarschaft: [Knedle mit Pflaumen](/de/rezepte/knedle-sliwki).",
    variantsPl:
      "Z udziałem ziemniaka, słodsze lub słone. Nie mylić ze sklejanymi [ruskimi](/pl/rezepte/pierogi/ruskie). Słodkie sąsiedztwo z nadzieniem: [knedle ze śliwkami](/pl/rezepte/knedle-sliwki).",
  },

  "recipe-kopytka": {
    dishDe: "Kopytka",
    dishPl: "Kopytka",
    vibeDe: "neutral, sättigend, beilagenstark",
    vibePl: "neutralne, sycące, mocne jako dodatek",
    originDe:
      "Kopytka sind Kartoffel-Teigstückchen — verwandt mit italienischen Gnocchi, aber polnisch im Servieren: Butterzwiebeln oder Gulasz. Partner zu [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy) und zum [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Einfacher als [Pyzy mit Fleisch](/de/rezepte/pyzy), ohne Füllen.",
    originPl:
      "Kopytka to kluseczki ziemniaczane — blisko gnocchi, ale polskie w podaniu: cebula na maśle albo gulasz. Partner [gulaszu wieprzowego](/pl/rezepte/gulasz-wieprzowy) i [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Prostsze niż [pyzy z mięsem](/pl/rezepte/pyzy), bez nadziewania.",
    shopDe:
      "Kartoffeln, Mehl, Ei, Butter, Zwiebel. Schmortopf und Timing: [Dutch-Oven-Kaufberatung](/de/blog/dutch-oven-kaufberatung). Einkauf Basics im Supermarkt; Würzlogik oft über [Polenladen](/de/blog/polenladen-einkaufen).",
    shopPl:
      "Ziemniaki, mąka, jajko, masło, cebula. Garnek i timing: [garnek do duszenia](/pl/blog/garnek-do-duszenia). Podstawy w markecie; przyprawy często w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    techniqueDe:
      "Kartoffeln gut ausdampfen. Teig nicht zu weich. Schräg schneiden, sanft kochen, nach dem Aufschwimmen herausnehmen.",
    techniquePl:
      "Ziemniaki dobrze odparować. Ciasto nie za miękkie. Kroić skośnie, gotować delikatnie, wyjąć po wypłynięciu.",
    serveDe:
      "Mit Butterzwiebeln, [Gulasz](/de/rezepte/gulasz-wieprzowy) oder Pilzsoße. Als Hauptbeilage, nicht als Snack. Regionale Alternative: [Kluski śląskie](/de/rezepte/kluski-slaskie).",
    servePl:
      "Z cebulą na maśle, [gulaszem](/pl/rezepte/gulasz-wieprzowy) albo sosem grzybowym. Jako główny dodatek, nie przekąska. Alternatywa regionalna: [kluski śląskie](/pl/rezepte/kluski-slaskie).",
    diasporaDe:
      "Einfacher als Pyzy, sättigender als Reis — gute Brücke für deutsche Nachbarn am Sonntagstisch.",
    diasporaPl:
      "Prostsze niż pyzy, bardziej sycące niż ryż — dobra kładka dla niemieckich sąsiadów przy stole niedzielnym.",
    mistakesDe:
      "Zu viel Mehl, zu nasse Kartoffeln, zu starkes Kochen. Erste Charge als Test.",
    mistakesPl:
      "Za dużo mąki, zbyt mokre ziemniaki, zbyt gwałtowne gotowanie. Pierwsza partia na próbę.",
    variantsDe:
      "Mit Spinat im Teig, oder neben [Kluski śląskie](/de/rezepte/kluski-slaskie) als regionale Alternative. Aufwendiger mit Füllung: [Pyzy](/de/rezepte/pyzy). Kontext: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    variantsPl:
      "Ze szpinakiem w cieście albo obok [klusek śląskich](/pl/rezepte/kluski-slaskie). Z nadzieniem: [pyzy](/pl/rezepte/pyzy). Kontekst: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
  },

  "recipe-lazanki": {
    dishDe: "Łazanki mit Kapusta",
    dishPl: "Łazanki z kapustą",
    vibeDe: "deftig, säuerlich, alltagstauglich",
    vibePl: "treściwe, kwaśne, na co dzień",
    originDe:
      "Łazanki sind quadratische Nudeln, oft mit Sauerkraut und Speck — Diaspora-Alltagsteller zwischen [Bigos](/de/rezepte/bigos) und Pasta. Weniger Drama als Bigos, mehr Struktur als Kraut allein. Kapusta-Kontext: [Kiszenie-Guide](/de/blog/kiszenie-guide).",
    originPl:
      "Łazanki to kwadratowy makaron, często z kapustą i boczkiem — talerz diasporowy między [bigosem](/pl/rezepte/bigos) a pastą. Mniej dramatu niż bigos, więcej struktury niż sama kapusta. Kontekst kapusty: [kiszenie w domu](/pl/blog/kiszenie-w-domu).",
    shopDe:
      "Łazanki im [Polenladen](/de/blog/polenladen-einkaufen) oder breite Bandnudeln, Sauerkraut, Zwiebel, Speck optional. Ferment-Logik: [Kiszenie-Guide](/de/blog/kiszenie-guide). Bigos-Tiefe zum Vergleich: [Bigos-Guide](/de/blog/bigos-guide).",
    shopPl:
      "Łazanki w [sklepie polskim](/pl/blog/sklep-polski-zakupy) lub szeroki makaron, kapusta kiszona, cebula, boczek opcjonalnie. Ferment: [kiszenie w domu](/pl/blog/kiszenie-w-domu). Głębia bigosu: [przewodnik po bigosie](/pl/blog/bigos-przewodnik).",
    techniqueDe:
      "Kraut schmoren bis weich und aromatisch, Nudeln al dente, dann mischen — nicht zu wässrig.",
    techniquePl:
      "Kapustę dusić do miękkości i aromatu, makaron al dente, potem wymieszać — nie za rzadko.",
    serveDe:
      "Heiß, mit Dill oder pur. Reste braten am nächsten Tag in der Pfanne auf. Wer länger schmoren will: [Bigos-Rezept](/de/rezepte/bigos).",
    servePl:
      "Gorące, z koperkiem albo same. Resztki podsmaż nazajutrz na patelni. Kto chce dłuższe duszenie: [przepis na bigos](/pl/rezepte/bigos).",
    diasporaDe:
      "Schneller als Bigos, nutzt dieselbe Kapusta-Logik. Gut für Wochentage nach dem [Sonntagsessen](/de/blog/sonntagsessen-polnisch)-Rest.",
    diasporaPl:
      "Szybsze niż bigos, ta sama logika kapusty. Dobre na tydzień po resztkach [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
    mistakesDe:
      "Zu nasses Kraut, zu weiche Nudeln, zu wenig Abschmecken. Pfeffer und Fett zählen.",
    mistakesPl:
      "Za mokra kapusta, za miękki makaron, za mało doprawienia. Pieprz i tłuszcz mają znaczenie.",
    variantsDe:
      "Vegetarisch ohne Speck, mit Pilzen, oder neben [Bigos](/de/rezepte/bigos) als Kraut-Silo. Ferment vertiefen: [Kiszenie](/de/blog/kiszenie-guide). Einkauf: [Polenladen](/de/blog/polenladen-einkaufen).",
    variantsPl:
      "Wegetariańskie bez boczku, z grzybami albo obok [bigosu](/pl/rezepte/bigos). Ferment: [kiszenie](/pl/blog/kiszenie-w-domu). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
  },

  "recipe-pyzy": {
    dishDe: "Pyzy mit Fleisch",
    dishPl: "Pyzy z mięsem",
    vibeDe: "groß, sättigend, Sonntagsprojekt",
    vibePl: "duże, sycące, niedzielny projekt",
    originDe:
      "Pyzy sind große Kartoffelklöße mit Fleischfüllung — aufwendiger als [Kopytka](/de/rezepte/kopytka), sättigender als gefaltete Pierogi. Ein ruhiges Projekt für den [Sonntagsessen](/de/blog/sonntagsessen-polnisch)-Tag. Nicht verwechseln mit [Knedle ze śliwkami](/de/rezepte/knedle-sliwki) (süß, Obst).",
    originPl:
      "Pyzy to duże kluski ziemniaczane z farszem — bardziej pracochłonne niż [kopytka](/pl/rezepte/kopytka), bardziej sycące niż sklejane pierogi. Spokojny projekt na [obiad niedzielny](/pl/blog/obiad-niedzielny). Nie mylić z [knedlami ze śliwkami](/pl/rezepte/knedle-sliwki) (słodkie, owoc).",
    shopDe:
      "Kartoffeln, Stärke, Hack, Zwiebel, Butter. Chargen und Farce: [Fleischwolf-Kaufberatung](/de/blog/fleischwolf-kaufberatung). Freezer-Logik: [Pierogi einfrieren / Freezer](/de/blog/freezer-meal-prep) — gleiche Vorbereitungsdisziplin, anderer Teig.",
    shopPl:
      "Ziemniaki, skrobia, mielone, cebula, masło. Partie i farsz: [wilk do mięsa](/pl/blog/wilk-do-miesa). Freezer: [mrożenie pierogów](/pl/blog/mrozenie-pierogow) — ta sama dyscyplina przygotowań, inne ciasto.",
    techniqueDe:
      "Masse muss halten. Füllung kalt. Sanft kochen, nicht werfen. Erste Probe-Pyza testen.",
    techniquePl:
      "Masa musi trzymać. Farsz zimny. Gotować delikatnie, nie rzucać. Pierwsza próbna pyza.",
    serveDe:
      "Mit Butterzwiebeln — klassisch. Ein bis zwei Pyzy pro Person reichen oft. Beilage-Schwester ohne Füllung: [Kopytka](/de/rezepte/kopytka).",
    servePl:
      "Z cebulą na maśle — klasycznie. Jedna–dwie pyzy na osobę często wystarczą. Siostra bez nadzienia: [kopytka](/pl/rezepte/kopytka).",
    diasporaDe:
      "Weniger bekannt als Pierogi in DE — lohnt als Familienprojekt am Wochenende mit [Sonntagsessen](/de/blog/sonntagsessen-polnisch)-Rhythmus.",
    diasporaPl:
      "Mniej znane niż pierogi w DE — warto jako rodzinny projekt w rytmie [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
    mistakesDe:
      "Zu weiche Masse, heiße Füllung, zu starkes Kochen. Geduld schlägt Tempo.",
    mistakesPl:
      "Za miękka masa, gorący farsz, zbyt gwałtowne gotowanie. Cierpliwość bije tempo.",
    variantsDe:
      "Mit Pilzfüllung, oder [Kopytka](/de/rezepte/kopytka) als einfachere Alternative ohne Füllen. Würzen mit [Majeranek](/de/blog/majeranek). Batch: [Freezer-Guide](/de/blog/freezer-meal-prep).",
    variantsPl:
      "Z farszem grzybowym albo [kopytka](/pl/rezepte/kopytka) bez nadziewania. Doprawianie: [majeranek](/pl/blog/majeranek-leksykon). Batch: [mrożenie](/pl/blog/mrozenie-pierogow).",
  },

  "recipe-zrazy": {
    dishDe: "Zrazy zawijane",
    dishPl: "Zrazy zawijane",
    vibeDe: "festlich, langsam geschmort, sonntags",
    vibePl: "odświętne, długo duszone, niedzielne",
    originDe:
      "Zrazy sind polnische Rinderrouladen: Senf, Speck, Gurke, lange geschmort. Schlesisch und sonntagstauglich — Partner zu [Kluski śląskie](/de/rezepte/kluski-slaskie) und klarer Soße. Festlicher als [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy), gleicher Schmor-Gedanke. Rahmen: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    originPl:
      "Zrazy to wołowe zawijane: musztarda, boczek, ogórek, długo duszone. Śląskie i niedzielne — partner [klusek śląskich](/pl/rezepte/kluski-slaskie) i jasnego sosu. Bardziej odświętne niż [gulasz wieprzowy](/pl/rezepte/gulasz-wieprzowy), ta sama logika duszenia. Rama: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
    shopDe:
      "Rinderplätzchen, Senf, Speck, Gewürzgurken, Brühe, Majoran. Topf: [Dutch Oven](/de/blog/dutch-oven-kaufberatung). Würzen: [Majeranek-Lexikon](/de/blog/majeranek). Einkauf Fleisch und Gurken oft Supermarkt + [Polenladen](/de/blog/polenladen-einkaufen).",
    shopPl:
      "Plastry wołowiny, musztarda, boczek, ogórki, bulion, majeranek. Garnek: [dutch oven](/pl/blog/garnek-do-duszenia). Przyprawa: [majeranek](/pl/blog/majeranek-leksykon). Zakupy: market + [sklep polski](/pl/blog/sklep-polski-zakupy).",
    techniqueDe:
      "Fest rollen, anbraten, zugedeckt schmoren bis gabelweich. Soße abschmecken, nicht eilig. Deckel zu — wie bei anderen Schmorgerichten im Dutch Oven.",
    techniquePl:
      "Szczelnie zwinąć, obsmażyć, dusić pod przykryciem do miękkości. Sos doprawić bez pośpiechu. Pokrywka — jak przy innych daniach w dutch oven.",
    serveDe:
      "Mit [Kluski śląskie](/de/rezepte/kluski-slaskie), Kartoffeln oder Kasza. Soße großzügig — sie trägt den Teller. Schnellere Schmor-Alternative: [Gulasz](/de/rezepte/gulasz-wieprzowy).",
    servePl:
      "Z [kluskami śląskimi](/pl/rezepte/kluski-slaskie), ziemniakami albo kaszą. Sos hojnie — on niesie talerz. Szybsza alternatywa: [gulasz](/pl/rezepte/gulasz-wieprzowy).",
    diasporaDe:
      "Länger als Gulasz, festlicher — gut wenn Gäste kommen und Zeit da ist. Plant ihn bewusst in den [Sonntagsessen](/de/blog/sonntagsessen-polnisch)-Slot.",
    diasporaPl:
      "Dłuższe niż gulasz, bardziej odświętne — dobre gdy są goście i czas. Planuj świadomie w slot [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
    mistakesDe:
      "Zu kurze Schmorzeit, lose Rollen, zu wenig Flüssigkeit. Deckel zu lassen.",
    mistakesPl:
      "Za krótkie duszenie, luźne rolady, za mało płynu. Pokrywkę trzymać.",
    variantsDe:
      "Mit Pilzen in der Füllung, oder [Gulasz](/de/rezepte/gulasz-wieprzowy) als schnellere Schmor-Alternative. Beilage: [Kluski śląskie](/de/rezepte/kluski-slaskie). Würze: [Majeranek](/de/blog/majeranek).",
    variantsPl:
      "Z grzybami w farszu albo [gulasz](/pl/rezepte/gulasz-wieprzowy) jako szybsza alternatywa. Dodatek: [kluski śląskie](/pl/rezepte/kluski-slaskie). Przyprawa: [majeranek](/pl/blog/majeranek-leksykon).",
  },

  "recipe-makowiec": {
    dishDe: "Makowiec",
    dishPl: "Makowiec",
    vibeDe: "festlich, mohnig, gerollt und geduldig",
    vibePl: "świąteczny, makowy, zwinięty i cierpliwy",
    originDe:
      "Makowiec ist der gerollte polnische Mohnkuchen: Hefeteig, dichte Mohnmasse, oft zur Wigilia. Kein Blech-Mohnkuchen und kein Strudel — eigene Form, eigene Technik. Handgriffe im [Makowiec-Technik](/de/blog/makowiec-technik)-Pillar; Menüplatz im [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan). Käsekuchen bleibt [Sernik](/de/rezepte/sernik) — anderer Primary.",
    originPl:
      "Makowiec to polska rolada makowa: ciasto drożdżowe, gęsta masa, często na Wigilię. Nie ciasto z blachy i nie strudel — własna forma, własna technika. Gesty w filarze [technika makowca](/pl/blog/makowiec-technika); miejsce w menu: [menu wigilijne](/pl/blog/menu-wigilijne). Sernik zostaje przy [serniku](/pl/rezepte/sernik) — inny primary.",
    shopDe:
      "Blauer Mohn, Mehl, Hefe, Milch, Butter, Eier, Zucker, optional Rosinen. Guter Mohn im [Polenladen](/de/blog/polenladen-einkaufen). DE-Ersatzlogik: [Ersatzprodukte](/de/blog/ersatzprodukte-de). Technik und Ofentemperatur: [Makowiec-Technik](/de/blog/makowiec-technik).",
    shopPl:
      "Mak niebieski, mąka, drożdże, mleko, masło, jajka, cukier, opcjonalnie rodzynki. Dobry mak w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Zamienniki: [zamienniki składników](/pl/blog/zamienniki-skladnikow). Technika i piec: [makowiec-technika](/pl/blog/makowiec-technika).",
    techniqueDe:
      "Mohnmasse streichfähig binden, Teig elastisch gehen lassen, mit Randabstand rollen, mittlere Hitze, erst nach dem Abkühlen schneiden. Zu heiß zerstört die Spirale außen und lässt innen roh.",
    techniquePl:
      "Masę makową związać do smarowania, ciasto elastycznie wyrosnąć, zwijać z zapasem od brzegu, średnia temperatura, kroić po ostudzeniu. Za gorąco niszczy spiralę z zewnątrz i zostawia środek surowy.",
    serveDe:
      "In Scheiben, oft mit Puderzucker. Am Vortag gebacken oft ruhiger für den Heiligabend. Passt als Schluss nach [Barszcz](/de/rezepte/barszcz-czerwony) und [Uszka](/de/rezepte/uszka).",
    servePl:
      "W plastrach, często z cukrem pudrem. Upieczony dzień wcześniej spokojniejszy na Wigilię. Pasuje jako finał po [barszczu](/pl/rezepte/barszcz-czerwony) i [uszkach](/pl/rezepte/uszka).",
    diasporaDe:
      "In DE rettet früher Backtag den 24.: Geruch am 23., Ruhe am Abend. Fertigware aus dem Laden ist Notfall, nicht Technikersatz — siehe [Makowiec-Technik](/de/blog/makowiec-technik).",
    diasporaPl:
      "W DE wcześniejszy dzień pieczenia ratuje 24.: zapach 23., spokój wieczorem. Gotowiec ze sklepu to awaria, nie zamiennik techniki — [makowiec-technika](/pl/blog/makowiec-technika).",
    mistakesDe:
      "Trockene Masse, zu viel Mehl, zu heißer Ofen, zu früh schneiden, Hefe mit kochender Flüssigkeit. Randzone beim Füllen nicht vergessen.",
    mistakesPl:
      "Sucha masa, za dużo mąki, zbyt gorący piec, zbyt wczesne krojenie, drożdże zabite wrzątkiem. Nie zapomnij strefy brzegowej przy smarowaniu.",
    variantsDe:
      "Mit Rosinen, mit Zuckerguss, kleinere Rollen. Anderes Festtagsbacken: [Faworki](/de/rezepte/faworki) + [Faworki-Technik](/de/blog/faworki-technik). Käsekuchen-Linie: [Sernik](/de/rezepte/sernik). Formkuchen ohne Mohnspirale: [Babka](/de/rezepte/babka) — anderer Cook-Primary. Honig-Gewürz-Lebkuchen (≠ Mohnrolle): [Piernik](/de/rezepte/piernik). Weizenkörner+Mohn in der Schüssel (≠ Rolle): [Kutia](/de/rezepte/kutia).",
    variantsPl:
      "Z rodzynkami, z lukrem, mniejsze rolady. Inne pieczenie świąteczne: [faworki](/pl/rezepte/faworki) + [technika faworków](/pl/blog/faworki-technika). Linia sernika: [sernik](/pl/rezepte/sernik). Ciasto z formy bez spirali: [babka](/pl/rezepte/babka) — inny cook-primary. Piernik miodowo-korzenny (≠ rolada makowa): [piernik](/pl/rezepte/piernik). Pszenica+mak w misce (≠ rolada): [kutia](/pl/rezepte/kutia).",
  },

  "recipe-uszka": {
    dishDe: "Uszka mit Pilzen",
    dishPl: "Uszka z grzybami",
    vibeDe: "klein, intensiv pilzig, wigilijny",
    vibePl: "małe, intensywnie grzybowe, wigilijne",
    originDe:
      "Uszka sind kleine Teigtaschen — oft mit Pilzfüllung — die klassisch in klarem [Barszcz](/de/rezepte/barszcz-czerwony) schwimmen. Eigene Money Page, eigene Primary Keywords. Barszcz bleibt Owner der Suppe; Technik der Klarheit: [Barszcz-Technik](/de/blog/barszcz-technik). Menü: [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan). Große gefaltete Taschen: [Pierogi-Guide](/de/blog/pierogi-guide).",
    originPl:
      "Uszka to małe pierogi — często z farszem grzybowym — klasycznie w klarownym [barszczu](/pl/rezepte/barszcz-czerwony). Własna money page, własne primary. Barszcz zostaje ownerem zupy; klarowność: [technika barszczu](/pl/blog/jak-ugotowac-barszcz). Menu: [menu wigilijne](/pl/blog/menu-wigilijne). Duże sklejane: [przewodnik pierogi](/pl/blog/przewodnik-pierogi).",
    shopDe:
      "Getrocknete Pilze im [Polenladen](/de/blog/polenladen-einkaufen), Zwiebel, Mehl, Ei, Öl. Barszcz separat nach [Barszcz-Rezept](/de/rezepte/barszcz-czerwony). Teiggefühl: [Pierogi-Teig](/de/blog/pierogi-teig). Vortag formen: [Freezer-Guide](/de/blog/freezer-meal-prep).",
    shopPl:
      "Suszone grzyby w [sklepie polskim](/pl/blog/sklep-polski-zakupy), cebula, mąka, jajko, olej. Barszcz osobno: [przepis na barszcz](/pl/rezepte/barszcz-czerwony). Ciasto: [ciasto na pierogi](/pl/blog/ciasto-na-pierogi). Dzień wcześniej: [mrożenie](/pl/blog/mrozenie-pierogow).",
    techniqueDe:
      "Füllung trocken schmoren, kleine Kreise, wenig Füllung, fest zu Öhrchen schließen. In leicht siedendem Wasser garen, bis sie aufschwimmen. In der Schale mit heißem Barszcz zusammenführen — nicht stundenlang in der Suppe lagern.",
    techniquePl:
      "Farsz dusić na sucho, małe koła, mało farszu, szczelnie zamykać w uszka. Gotować w lekko wrzącej wodzie aż wypłyną. W misce łączyć z gorącym barszczem — nie trzymać godzinami w zupie.",
    serveDe:
      "Als erste Gang-Logik zur Wigilia mit klarem [Barszcz](/de/rezepte/barszcz-czerwony). Auch allein mit Butter. Verwandte Rolle/Panade: [Krokiety](/de/rezepte/krokiety) — andere Form, oft dieselbe Füllungsfamilie.",
    servePl:
      "Jako logika pierwszego dania Wigilii z klarownym [barszczem](/pl/rezepte/barszcz-czerwony). Też same z masłem. Pokrewna forma: [krokiety](/pl/rezepte/krokiety) — inna forma, często ta sama rodzina farszu.",
    diasporaDe:
      "Am 23. formen, einfrieren oder kühl lagern, am 24. nur kochen — entlastet den Abend neben Barszcz und [Makowiec](/de/rezepte/makowiec). Timeline: [Wigilia](/de/blog/wigilia-speiseplan).",
    diasporaPl:
      "23. lepić, mrozić lub chłodzić, 24. tylko gotować — odciąża wieczór obok barszczu i [makowca](/pl/rezepte/makowiec). Timeline: [menu wigilijne](/pl/blog/menu-wigilijne).",
    mistakesDe:
      "Nasse Füllung, zu große Stücke, zu aggressives Kochen, Uszka in der Suppe einweichen. Barszcz trüben durch Mitkochen der Teigtaschen.",
    mistakesPl:
      "Mokry farsz, za duże sztuki, zbyt gwałtowne gotowanie, namaczanie w zupie. Mętnienie barszczu przez gotowanie uszek w wywarze.",
    variantsDe:
      "Mit Sauerkraut-Anteil, oder fertige Uszka aus dem Laden als Notfall. Klare Suppe: [Barszcz](/de/rezepte/barszcz-czerwony). Technik: [Barszcz-Technik](/de/blog/barszcz-technik). Teig: [Pierogi-Teig](/de/blog/pierogi-teig).",
    variantsPl:
      "Z udziałem kapusty kiszonej albo gotowe uszka ze sklepu. Klarowna zupa: [barszcz](/pl/rezepte/barszcz-czerwony). Technika: [jak ugotować barszcz](/pl/blog/jak-ugotowac-barszcz). Ciasto: [ciasto na pierogi](/pl/blog/ciasto-na-pierogi).",
  },

  "recipe-karp": {
    dishDe: "Karp po polsku",
    dishPl: "Karp po polsku",
    vibeDe: "festlich, zart, nach Zwiebel und Majoran",
    vibePl: "świąteczny, delikatny, z cebulą i majerankiem",
    originDe:
      "Karpfen ist für viele Familien der warme Fischgang der Wigilia — nicht Pflichtkanon, aber starkes Signal. Gebacken mit Zwiebel ist die diaspora-taugliche Variante. Menü-Owner bleibt der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan); hier der Cook-Intent „Karp Rezept“. Kalter Fisch: [Śledź](/de/rezepte/sledz). Vorsuppe: [Barszcz](/de/rezepte/barszcz-czerwony) mit [Uszka](/de/rezepte/uszka).",
    originPl:
      "Karp jest dla wielu domów ciepłą rybą Wigilii — nie sztywny kanon, ale mocny sygnał. Pieczony z cebulą to wariant pod diasporę. Owner menu: [menu wigilijne](/pl/blog/menu-wigilijne); tu cook-intent „karp przepis”. Zimna ryba: [śledź](/pl/rezepte/sledz). Zupa: [barszcz](/pl/rezepte/barszcz-czerwony) z [uszkami](/pl/rezepte/uszka).",
    shopDe:
      "Frisch oder tiefgekühlt an der Fischtheke / im [Polenladen](/de/blog/polenladen-einkaufen). Zwiebel, Zitrone, Majoran, Dill. Gewürz: [Majeranek-Lexikon](/de/blog/majeranek). Ersatz und Etiketten: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
    shopPl:
      "Świeży lub mrożony w ladzie / [sklepie polskim](/pl/blog/sklep-polski-zakupy). Cebula, cytryna, majeranek, koperek. Przyprawa: [majeranek](/pl/blog/majeranek-leksykon). Zamienniki: [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
    techniqueDe:
      "Salzen, säuern, würzen, ziehen lassen; Zwiebeln anschwitzen; mittlere Ofentemperatur, bis sich die Fasern lösen. Nicht austrocknen.",
    techniquePl:
      "Posolić, skwasić, doprawić, odstawić; cebulę zeszklić; średnia temperatura pieca aż mięso się oddziela. Nie wysuszać.",
    serveDe:
      "Mit Zitrone und Dill, oft nach klarem [Barszcz](/de/rezepte/barszcz-czerwony) und [Uszka](/de/rezepte/uszka). Kartoffeln oder Brot je nach Hausbrauch. Kalter Kontrast: [Śledź](/de/rezepte/sledz).",
    servePl:
      "Z cytryną i koperkiem, często po klarownym [barszczu](/pl/rezepte/barszcz-czerwony) i [uszkach](/pl/rezepte/uszka). Ziemniaki lub chleb według domu. Zimny kontrast: [śledź](/pl/rezepte/sledz).",
    diasporaDe:
      "In DE ist lebender Karpfen selten Alltag — Portionen und Filets sind praxisnäher. Am 24. vormittags würzen, abends nur backen. Timeline: [Wigilia](/de/blog/wigilia-speiseplan).",
    diasporaPl:
      "W DE żywy karp rzadko jest codziennością — porcje i filety są praktyczniejsze. 24. rano doprawić, wieczorem tylko piec. Timeline: [menu wigilijne](/pl/blog/menu-wigilijne).",
    mistakesDe:
      "Zu heiß und zu lange = trocken. Zu wenig Säure = fade. Speiseplan-Mengen hier duplizieren statt zu verlinken. Mit Śledź-Intent vermischen.",
    mistakesPl:
      "Za gorąco i za długo = suchy. Za mało kwasu = mdły. Duplikować menu zamiast linkować. Mieszać intent ze śledziem.",
    variantsDe:
      "In Gelee, paniert gebraten, oder moderne Alternative Lachs — ehrlich benennen. Kalter Hering: [Śledź](/de/rezepte/sledz). Menü: [Wigilia](/de/blog/wigilia-speiseplan). Würze: [Majeranek](/de/blog/majeranek).",
    variantsPl:
      "W galarecie, smażony w panierce albo łosoś — nazywać uczciwie. Zimny śledź: [śledź](/pl/rezepte/sledz). Menu: [menu wigilijne](/pl/blog/menu-wigilijne). Przyprawa: [majeranek](/pl/blog/majeranek-leksykon).",
  },

  "recipe-krokiety": {
    dishDe: "Krokiety",
    dishPl: "Krokiety",
    vibeDe: "knusprig außen, weich innen, barszczfreundlich",
    vibePl: "chrupiące na zewnątrz, miękkie w środku, do barszczu",
    originDe:
      "Krokiety sind gerollte, panierte Naleśniki — klassisch mit Kraut und Pilzen, oft neben klarem [Barszcz](/de/rezepte/barszcz-czerwony). Eigene Form (Rolle + Panade), eigener Primary-KW. Teiggefühl im [Naleśniki-Guide](/de/blog/nalesniki-guide); Panade-Logik: [Panieren-Guide](/de/blog/panieren-schabowy). Kleine Teigtaschen: [Uszka](/de/rezepte/uszka).",
    originPl:
      "Krokiety to zwinięte, panierowane naleśniki — klasycznie z kapustą i grzybami, często obok klarownego [barszczu](/pl/rezepte/barszcz-czerwony). Własna forma (rolka + panierka), własne primary. Ciasto: [przewodnik naleśników](/pl/blog/nalesniki-przewodnik); panierka: [panierowanie](/pl/blog/panierowanie-kotlet). Małe pierożki: [uszka](/pl/rezepte/uszka).",
    shopDe:
      "Mehl, Milch, Eier; Sauerkraut, getrocknete Pilze, Zwiebel; Semmelbrösel und Fett. Kapusta/Pilze: [Kiszenie](/de/blog/kiszenie-guide) und [Polenladen](/de/blog/polenladen-einkaufen). Teig: [Naleśniki-Guide](/de/blog/nalesniki-guide).",
    shopPl:
      "Mąka, mleko, jajka; kapusta kiszona, suszone grzyby, cebula; bułka tarta i tłuszcz. Kapusta/grzyby: [kiszenie](/pl/blog/kiszenie-w-domu) i [sklep polski](/pl/blog/sklep-polski-zakupy). Ciasto: [naleśniki-przewodnik](/pl/blog/nalesniki-przewodnik).",
    techniqueDe:
      "Dünne Naleśniki, trockene Füllung, fest rollen, panieren, goldbraun braten. Füllung muss abgekühlt sein. Zu nass = Rollen platzen; zu dick = Teig dominiert.",
    techniquePl:
      "Cienkie naleśniki, suchy farsz, mocno zwijać, panierować, smażyć na złoto. Farsz ostudzony. Za mokry = pękają; za gruby = ciasto dominuje.",
    serveDe:
      "Heiß mit klarem [Barszcz](/de/rezepte/barszcz-czerwony) oder allein mit Śmietana — [Śmietana/Schmand](/de/blog/smietana-schmand). Reste erneut in der Pfanne knusprig. Wigilia-Partner: [Uszka](/de/rezepte/uszka).",
    servePl:
      "Gorące z klarownym [barszczem](/pl/rezepte/barszcz-czerwony) albo same ze śmietaną — [śmietana/Schmand](/pl/blog/smietana-czy-schmand). Resztki odsmażyć. Partner Wigilii: [uszka](/pl/rezepte/uszka).",
    diasporaDe:
      "Wochenendprojekt: vormittags Teig und Füllung, nachmittags rollen und braten. Freezer: geformte Rollen vor dem Panieren — siehe [Freezer-Guide](/de/blog/freezer-meal-prep). Menükontext: [Wigilia](/de/blog/wigilia-speiseplan).",
    diasporaPl:
      "Projekt weekendowy: rano ciasto i farsz, po południu zwijać i smażyć. Freezer: uformowane rolki przed panierowaniem — [mrożenie](/pl/blog/mrozenie-pierogow). Menu: [menu wigilijne](/pl/blog/menu-wigilijne).",
    mistakesDe:
      "Nasse Füllung, zu dicke Pfannkuchen, kaltes Fett, Panade abplatzen lassen. Barszcz- oder Naleśniki-Primary-KW stehlen.",
    mistakesPl:
      "Mokry farsz, za grube naleśniki, zimny tłuszcz, odpadająca panierka. Kradzież primary KW barszczu lub naleśników.",
    variantsDe:
      "Mit Fleischfüllung, mit Champignons, vegetarisch ohne Speck. Gefaltete Variante derselben Aromen: Kraut-Pilz über [Pierogi-Guide](/de/blog/pierogi-guide). Panade: [Panieren](/de/blog/panieren-schabowy). Suppe: [Barszcz](/de/rezepte/barszcz-czerwony).",
    variantsPl:
      "Z farszem mięsnym, z pieczarkami, wegetariańsko. Wariant sklejany: kapusta-grzyby przez [przewodnik pierogi](/pl/blog/przewodnik-pierogi). Panierka: [panierowanie](/pl/blog/panierowanie-kotlet). Zupa: [barszcz](/pl/rezepte/barszcz-czerwony).",
  },

  "recipe-sernik": {
    dishDe: "Sernik",
    dishPl: "Sernik",
    vibeDe: "cremig, festlich, nach Twaróg und Vanille",
    vibePl: "kremowy, świąteczny, z twarogu i wanilii",
    originDe:
      "Sernik ist der polnische Käsekuchen auf Twaróg-Basis — dichter und oft höher als mancher deutsche Käsekuchen. Back-Silo neben [Makowiec](/de/rezepte/makowiec), ohne dessen Primary zu stehlen. Ofengeduld descriptiv: [Makowiec-Technik](/de/blog/makowiec-technik). Quark-Qualität: [Twaróg-Guide](/de/blog/twarog-deutschland). Ostern: [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan).",
    originPl:
      "Sernik to polski sernik na twarogu — gęstszy i często wyższy niż niejedne niemieckie serniki. Silos pieczenia obok [makowca](/pl/rezepte/makowiec), bez kradzieży primary. Piec descriptively: [technika makowca](/pl/blog/makowiec-technika). Jakość: [twaróg w Niemczech](/pl/blog/twarog-w-niemczech). Wielkanoc: [menu wielkanocne](/pl/blog/wielkanoc-speiseplan).",
    shopDe:
      "Twaróg sernikowy oder gut abgetropfter Speisequark, Eier, Zucker, Butter, Bindung, Vanille, optional Mürbeteigboden. [Twaróg-Guide](/de/blog/twarog-deutschland) und [Ersatzprodukte DE](/de/blog/ersatzprodukte-de); typische Qualität im [Polenladen](/de/blog/polenladen-einkaufen).",
    shopPl:
      "Twaróg sernikowy lub dobrze odsączony Quark, jajka, cukier, masło, spoiwo, wanilia, opcjonalnie kruchy spód. [Twaróg](/pl/blog/twarog-w-niemczech) i [zamienniki](/pl/blog/zamienniki-skladnikow); jakość w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    techniqueDe:
      "Masse glatt, nicht überrühren bis schaumig-kollabierend; mittlere Hitze; Mitte darf leicht wackeln; im Ofen nachruhen; erst kalt schneiden. Risse oft durch zu heiße Hitze oder Zugluft.",
    techniquePl:
      "Masę gładką, nie ubijać do zapadnięcia; średnia temperatura; środek może lekko drgać; dociągnąć w piecu; kroić zimny. Pęknięcia często od zbyt wysokiej temperatury lub przeciągu.",
    serveDe:
      "In Stücken mit Puderzucker, Früchten oder allein zum Kaffee. Zu Ostern und Sonntag häufig; zu Wigilia oft neben oder statt [Makowiec](/de/rezepte/makowiec) — Hausbrauch entscheidet. Kontext: [Wielkanoc](/de/blog/wielkanoc-speiseplan).",
    servePl:
      "W kawałkach z cukrem pudrem, owocami albo samym do kawy. Na Wielkanoc i niedzielę często; na Wigilię obok lub zamiast [makowca](/pl/rezepte/makowiec). Kontekst: [Wielkanoc](/pl/blog/wielkanoc-speiseplan).",
    diasporaDe:
      "Am Vortag backen entlastet Gästeessen. Deutscher Quark braucht oft Abtropfen — siehe [Twaróg](/de/blog/twarog-deutschland). Nicht mit Faworki-Intent vermischen — [Faworki](/de/rezepte/faworki) sind anderes Fettgebäck.",
    diasporaPl:
      "Pieczenie dzień wcześniej odciąża gości. Niemiecki Quark często wymaga odsączenia — [twaróg](/pl/blog/twarog-w-niemczech). Nie mieszać z intentem faworków — [faworki](/pl/rezepte/faworki) to inne wypieki.",
    mistakesDe:
      "Zu nasser Quark, zu heißer Ofen, zu früh schneiden, Makowiec-Keywords im Title stehlen. Boden roh lassen durch zu kurze Zeit.",
    mistakesPl:
      "Za mokry twaróg, zbyt gorący piec, zbyt wczesne krojenie, kradzież słów kluczowych makowca w title. Surowy spód przez za krótki czas.",
    variantsDe:
      "Ohne Boden, mit Rosinen, mit Schokotropfen, kleinerer Springform. Mohnrolle bleibt [Makowiec](/de/rezepte/makowiec). Hefegugelhupf aus der Form: [Babka](/de/rezepte/babka) — anderer Cook-Primary. Honig-Gewürz: [Piernik](/de/rezepte/piernik). Technik-Feeling: [Makowiec-Technik](/de/blog/makowiec-technik). Quark: [Twaróg](/de/blog/twarog-deutschland).",
    variantsPl:
      "Bez spodu, z rodzynkami, z czekoladą, mniejsza tortownica. Rolada makowa: [makowiec](/pl/rezepte/makowiec). Ciasto drożdżowe z formy: [babka](/pl/rezepte/babka) — inny cook-primary. Miód i korzeń: [piernik](/pl/rezepte/piernik). Technika: [makowiec-technika](/pl/blog/makowiec-technika). Twaróg: [twaróg](/pl/blog/twarog-w-niemczech).",
  },

  "recipe-sledz": {
    dishDe: "Śledź w oleju",
    dishPl: "Śledź w oleju",
    vibeDe: "kalt, zwiebelig, salzig-fettig zum Brot",
    vibePl: "zimny, cebulowy, słono-tłusty do chleba",
    originDe:
      "Śledź ist der kalte Fischgang vieler Wigilia-Tische und zugleich Alltagsteller mit Brot. In Öl mit Zwiebel ist die klarste diaspora-Variante. Owner für „Śledź Rezept“; Menü: [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan); warmer Fisch: [Karp](/de/rezepte/karp). Einkauf: [Polenladen](/de/blog/polenladen-einkaufen).",
    originPl:
      "Śledź to zimna ryba wielu stołów wigilijnych i zarazem codzienny talerz z chlebem. W oleju z cebulą to najczytelniejszy wariant diasporowy. Owner „śledź przepis”; menu: [menu wigilijne](/pl/blog/menu-wigilijne); ryba ciepła: [karp](/pl/rezepte/karp). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
    shopDe:
      "Matjes oder Salzheringfilets (Polenladen/Kühltruhe), Zwiebeln, neutrales Öl, Lorbeer, Piment. Marken und Kühltruhe: [Polenladen](/de/blog/polenladen-einkaufen). Wenn nur Rollmops: ehrlich umdeklarieren — [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
    shopPl:
      "Matjas lub filety solone (sklep/chłodnia), cebula, olej, liść laurowy, ziele angielskie. Marki: [sklep polski](/pl/blog/sklep-polski-zakupy). Gdy tylko rolmops — uczciwie nazwać: [zamienniki](/pl/blog/zamienniki-skladnikow).",
    techniqueDe:
      "Schneiden, schichten, würzen, ziehen lassen — Kühlschrank, abgedeckt. Schärfe der Zwiebel mit kurzem Brühen mildern. Nicht kochen. Über Nacht oft besser.",
    techniquePl:
      "Kroić, warstwić, przyprawiać, odstawić — lodówka, przykryte. Ostrość cebuli złagodzić krótkim sparzeniem. Nie gotować. Przez noc często lepiej.",
    serveDe:
      "Kalt mit Brot, manchmal mit Ei oder Gurke. An Wigilia oft neben anderen kalten Speisen; an Werktagen als schneller Teller. Warm: [Karp](/de/rezepte/karp). Sahnevariante: [Śmietana-Lexikon](/de/blog/smietana-schmand).",
    servePl:
      "Zimne z chlebem, czasem z jajkiem lub ogórkiem. Na Wigilię obok innych zimnych; w tygodniu jako szybki talerz. Na ciepło: [karp](/pl/rezepte/karp). Wariant śmietany: [śmietana](/pl/blog/smietana-czy-schmand).",
    diasporaDe:
      "Vorbereiten am 23., servieren am 24. — null Ofenstress neben [Barszcz](/de/rezepte/barszcz-czerwony) und [Karp](/de/rezepte/karp). Timeline: [Wigilia](/de/blog/wigilia-speiseplan).",
    diasporaPl:
      "Przygotować 23., podać 24. — zero stresu pieca obok [barszczu](/pl/rezepte/barszcz-czerwony) i [karpia](/pl/rezepte/karp). Timeline: [menu wigilijne](/pl/blog/menu-wigilijne).",
    mistakesDe:
      "Zu salzig ohne Wässern, zu wenig Öl, warme Lagerung. Karp- oder Speiseplan-Primary stehlen. Mit Rollmops-Sauce als „klassisch“ verkaufen ohne Hinweis.",
    mistakesPl:
      "Za słony bez namaczania, za mało oleju, trzymanie w cieple. Kradzież primary karpia lub menu. Rolmops w sosie jako „klasyka” bez dopisku.",
    variantsDe:
      "Śledź w śmietanie, po kaszubsku mit Apfel, mit Senf. Sahne: [Śmietana](/de/blog/smietana-schmand). Warm: [Karp](/de/rezepte/karp). Menü: [Wigilia](/de/blog/wigilia-speiseplan). Laden: [Polenladen](/de/blog/polenladen-einkaufen).",
    variantsPl:
      "Śledź w śmietanie, po kaszubsku z jabłkiem, z musztardą. Śmietana: [leksykon](/pl/blog/smietana-czy-schmand). Ciepło: [karp](/pl/rezepte/karp). Menu: [menu wigilijne](/pl/blog/menu-wigilijne). Sklep: [sklep polski](/pl/blog/sklep-polski-zakupy).",
  },
};
