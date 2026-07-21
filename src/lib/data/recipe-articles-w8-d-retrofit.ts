/**
 * Wave 8 Paket D — FACTS Link-Retrofit for Wave 5–7 recipe IDs.
 *
 * Complete replacement ArticleFacts objects (not patches).
 * Agent E merge into recipe-articles.ts FACTS map:
 *
 * import { W8_FACTS_D } from "./recipe-articles-w8-d";
 * import { W8_FACTS_D_RETROFIT } from "./recipe-articles-w8-d-retrofit";
 * Object.assign(FACTS, W8_FACTS_D_RETROFIT, W8_FACTS_D);
 *
 * Order: retrofit first, then W8_FACTS_D (Knedle wins if key clash — none expected).
 * Do NOT drop existing A/B/C FACTS when merging; assign only these keys.
 *
 * IDs: pierogi-leniwe, kopytka, lazanki, pyzy, zrazy, makowiec, uszka,
 * karp, krokiety, sernik, sledz
 * Gate: ≥4 markdown links [/de|/pl/..] per locale in FACTS fields
 * (≥2 recipe + ≥2 blog).
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
 "Twaróg oder abgetropfter Speisequark, Mehl, Ei, Butter, Semmelbrösel. Konsistenz und DE-Im [Twaróg-Guide](/de/blog/twarog-deutschland) findest du typische Spezialzutaten. Ladenroute: [Polenladen](/de/blog/polenladen-einkaufen). Ersatzquark ehrlich nach [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
 shopPl:
 "Twaróg lub odsączony Quark, mąka, jajko, masło, bułka tarta. Konsystencja i zakupy w DE: [przewodnik po twarogu](/pl/blog/twarog-w-niemczech). Trasa: [sklep polski](/pl/blog/sklep-polski-zakupy). Zamienniki według [zamienników składników](/pl/blog/zamienniki-skladnikow).",
 techniqueDe:
 "Der Teig soll weich, aber formbar bleiben — zu viel Mehl macht die Klößchen gummiartig. Koche sie in leicht siedendem, nicht sprudelndem Wasser und nimm sie heraus, sobald sie aufschwimmen.",
 techniquePl:
 "Ciasto ma zostać miękkie, ale formowalne — za dużo mąki robi kluseczki gumowate. Gotuj w lekko wrzącej, nie burzącej wodzie i wyjmij, gdy wypłyną.",
 serveDe:
 "Klassisch mit Butterbröseln und Zucker, oder mit Śmietana — siehe [Śmietana vs. Schmand](/de/blog/smietana-schmand). Auch herzhaft mit Salz und Dill möglich. Als Sonntags-Dessert neben dem [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 servePl:
 "Klasycznie z bułką na maśle i cukrem albo ze śmietaną — [śmietana czy Schmand](/pl/blog/smietana-czy-schmand). Też wytrawnie z solą i koperkiem. Jako deser niedzielny obok [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
 diasporaDe:
 "Für viele Kinder in Deutschland sind Leniwe das erste „Pierogi“-Erlebnis, weil niemand falten muss. Wer später Obst einpacken will, wechselt zu [Knedle](/de/rezepte/knedle-sliwki), nicht zu noch mehr Mehl hier.",
 diasporaPl:
 "Dla wielu dzieci w Niemczech leniwe są pierwszym doświadczeniem „pierogów”, bo nikt nie musi lepić. Kto później chce owoc w środku, idzie w [knedle](/pl/rezepte/knedle-sliwki), nie w jeszcze więcej mąki tutaj.",
 mistakesDe:
 "Zu viel Mehl, zu starkes Kochen und zu nasser Quark sind die klassischen Fehler. Tropfe den Twaróg gut ab und bleibe ruhig am Topf — und vermische die Technik nicht mit gefalteten [Pierogi Ruskie](/de/rezepte/pierogi/ruskie) oder mit Knedle.",
 mistakesPl:
 "Za dużo mąki, zbyt gwałtowne gotowanie i za mokry twaróg to klasyczne błędy. Dobrze odsącz twaróg i trzymaj spokój przy garnku — nie mieszaj techniki ze sklejanymi [ruskimi](/pl/rezepte/pierogi/ruskie) ani z knedlami.",
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
 "Für den Teig reichen mehligkochende Kartoffeln, Mehl, Ei, Butter und Zwiebel. Grundlagen holst du im Supermarkt; Würzlogik und typische Zwiebel-Butter oft über den [Polenladen](/de/blog/polenladen-einkaufen). Wenn Gulasz dazu soll, hilft die [Dutch-Oven-Kaufberatung](/de/blog/dutch-oven-kaufberatung) bei Topf und Timing.",
 shopPl:
 "Do ciasta wystarczą mączyste ziemniaki, mąka, jajko, masło i cebula. Podstawy kupisz w markecie; przyprawy i typowe dodatki często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Gdy ma być gulasz obok, [garnek do duszenia](/pl/blog/garnek-do-duszenia) pomaga z czasem i naczyniem.",
 techniqueDe:
 "Dampfe die Kartoffeln gut aus, bevor du Mehl und Ei untermengst — Restfeuchte macht den Teig klebrig. Halte ihn fest genug zum Rollen, schneide schräge Stücke und koche sanft; sobald sie aufschwimmen, nimm sie heraus.",
 techniquePl:
 "Dobrze odparuj ziemniaki, zanim dodasz mąkę i jajko — resztki wilgoci robią ciasto kleiste. Trzymaj je na tyle twarde, by dało się wałkować, kroić skośnie i gotuj delikatnie; gdy wypłyną, wyjmij je.",
 serveDe:
 "Serviere Kopytka als Hauptbeilage mit Butterzwiebeln, [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy) oder Pilzsoße — nicht als Snack nebenbei. Als regionale Alternative stehen [Kluski śląskie](/de/rezepte/kluski-slaskie) bereit.",
 servePl:
 "Podawaj kopytka jako główny dodatek z cebulą na maśle, [gulaszem wieprzowym](/pl/rezepte/gulasz-wieprzowy) albo sosem grzybowym — nie jako przekąskę. Regionalną alternatywą są [kluski śląskie](/pl/rezepte/kluski-slaskie).",
 diasporaDe:
 "Sie sind einfacher als gefüllte Pyzy und sättigender als Reis — eine ruhige Brücke für deutsche Nachbarn am [Sonntagsessen](/de/blog/sonntagsessen-polnisch)-Tisch.",
 diasporaPl:
 "Są prostsze niż nadziewane pyzy i bardziej sycące niż ryż — spokojna kładka dla niemieckich sąsiadów przy [obiedzie niedzielnym](/pl/blog/obiad-niedzielny).",
 mistakesDe:
 "Zu viel Mehl macht sie hart, zu nasse Kartoffeln lassen sie zerfallen, und zu starkes Kochen reißt die Oberfläche auf. Forme zuerst eine kleine Testcharge und korrigiere die Konsistenz, bevor der ganze Teig geschnitten ist.",
 mistakesPl:
 "Za dużo mąki robi je twarde, zbyt mokre ziemniaki sprawiają, że się rozpadają, a zbyt gwałtowne gotowanie rozrywa powierzchnię. Najpierw uformuj małą partię próbną i popraw konsystencję, zanim pokroisz całe ciasto.",
 variantsDe:
 "Spinat im Teig ändert die Farbe, ohne die Technik zu wechseln; neben [Kluski śląskie](/de/rezepte/kluski-slaskie) entsteht ein regionaler Vergleich. Aufwendiger mit Füllung sind [Pyzy](/de/rezepte/pyzy) — Kontext liefert das [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 variantsPl:
 "Szpinak w cieście zmienia kolor bez zmiany techniki; obok [klusek śląskich](/pl/rezepte/kluski-slaskie) powstaje porównanie regionalne. Z nadzieniem są [pyzy](/pl/rezepte/pyzy) — kontekst daje [obiad niedzielny](/pl/blog/obiad-niedzielny).",
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
 "Schmore das Kraut, bis es weich und aromatisch ist, koche die Nudeln al dente und mische erst dann — zu viel Flüssigkeit macht den Teller wässrig statt deftig.",
 techniquePl:
 "Duś kapustę do miękkości i aromatu, ugotuj makaron al dente i dopiero wtedy wymieszaj — za dużo płynu robi talerz wodnisty zamiast treściwy.",
 serveDe:
 "Heiß, mit Dill oder pur. Reste braten am nächsten Tag in der Pfanne auf. Wer länger schmoren will: [Bigos-Rezept](/de/rezepte/bigos).",
 servePl:
 "Gorące, z koperkiem albo same. Resztki podsmaż nazajutrz na patelni. Kto chce dłuższe duszenie: [przepis na bigos](/pl/rezepte/bigos).",
 diasporaDe:
 "Schneller als Bigos, nutzt dieselbe Kapusta-Logik. Gut für Wochentage nach dem [Sonntagsessen](/de/blog/sonntagsessen-polnisch)-Rest.",
 diasporaPl:
 "Szybsze niż bigos, ta sama logika kapusty. Dobre na tydzień po resztkach [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
 mistakesDe:
 "Zu nasses Kraut, zu weiche Nudeln und zu wenig Abschmecken lassen Łazanki flach. Pfeffer und genug Fett zählen hier mehr als extra Sauerkraut.",
 mistakesPl:
 "Za mokra kapusta, za miękki makaron i za mało doprawienia spłaszczają łazanki. Pieprz i dość tłuszczu znaczą tu więcej niż dodatkowa kapusta.",
 variantsDe:
 "Vegetarisch ohne Speck, mit Pilzen, oder neben [Bigos](/de/rezepte/bigos) als Kraut-Silo. Ferment vertiefen: [Kiszenie](/de/blog/kiszenie-guide). Im [Polenladen](/de/blog/polenladen-einkaufen) findest du typische Spezialzutaten.",
 variantsPl:
 "Wegetariańskie bez boczku, z grzybami albo obok [bigosu](/pl/rezepte/bigos). Ferment: [kiszenie](/pl/blog/kiszenie-w-domu). W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności.",
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
 "Der Kartoffelteig muss fest genug sein, um die Fleischfüllung zu tragen, ohne zu reißen. Forme gleichmäßige Kugeln, verschließe die Naht gut und koche sanft — zu wildes Wasser öffnet die Pyzy.",
 techniquePl:
 "Ciasto ziemniaczane musi być na tyle twarde, by unieść farsz bez pękania. Formuj równe kule, dobrze zamknij szew i gotuj delikatnie — zbyt burząca woda otwiera pyzy.",
 serveDe:
 "Mit Butterzwiebeln — klassisch. Ein bis zwei Pyzy pro Person reichen oft. Beilage-Schwester ohne Füllung: [Kopytka](/de/rezepte/kopytka).",
 servePl:
 "Z cebulą na maśle — klasycznie. Jedna–dwie pyzy na osobę często wystarczą. Siostra bez nadzienia: [kopytka](/pl/rezepte/kopytka).",
 diasporaDe:
 "Weniger bekannt als Pierogi in DE — lohnt als Familienprojekt am Wochenende mit [Sonntagsessen](/de/blog/sonntagsessen-polnisch)-Rhythmus.",
 diasporaPl:
 "Mniej znane niż pierogi w DE — warto jako rodzinny projekt w rytmie [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
 mistakesDe:
 "Zu weicher Teig, zu nasse Füllung und zu starkes Kochen sind die häufigsten Fehler. Teste eine Kugel, bevor du die ganze Charge formst, und korrigiere Mehl oder Feuchtigkeit früh.",
 mistakesPl:
 "Za miękkie ciasto, zbyt mokry farsz i zbyt gwałtowne gotowanie to najczęstsze błędy. Przetestuj jedną kulę, zanim uformujesz całą partię, i wcześnie popraw mąkę lub wilgotność.",
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
 "Plastry wołowiny, musztarda, boczek, ogórki, bulion, majeranek. Garnek: [dutch oven](/pl/blog/garnek-do-duszenia). Przyprawa: [majeranek](/pl/blog/majeranek-leksykon). Bazę kupisz w markecie, specjalności w [sklep polski](/pl/blog/sklep-polski-zakupy).",
 techniqueDe:
 "Klopfe das Fleisch dünn, streiche Senf, rolle Speck und Gurke fest ein und schmore lange bei niedriger Hitze. Die Soße soll den Löffel tragen, ohne zu mehlig zu werden.",
 techniquePl:
 "Rozbij mięso cienko, posmaruj musztardą, szczelnie zwiń z boczkiem i ogórkiem i duś długo na małym ogniu. Sos ma nieść łyżkę, bez mącznej gęstości.",
 serveDe:
 "Mit [Kluski śląskie](/de/rezepte/kluski-slaskie), Kartoffeln oder Kasza. Soße großzügig — sie trägt den Teller. Schnellere Schmor-Alternative: [Gulasz](/de/rezepte/gulasz-wieprzowy).",
 servePl:
 "Z [kluskami śląskimi](/pl/rezepte/kluski-slaskie), ziemniakami albo kaszą. Sos hojnie — on niesie talerz. Szybsza alternatywa: [gulasz](/pl/rezepte/gulasz-wieprzowy).",
 diasporaDe:
 "Länger als Gulasz, festlicher — gut wenn Gäste kommen und Zeit da ist. Plant ihn bewusst in den [Sonntagsessen](/de/blog/sonntagsessen-polnisch)-Slot.",
 diasporaPl:
 "Dłuższe niż gulasz, bardziej odświętne — dobre gdy są goście i czas. Planuj świadomie w slot [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
 mistakesDe:
 "Zu kurze Schmorzeit, zu wenig Flüssigkeit und lockere Rollen lassen Zrazy trocken oder formlos. Binde die Rouladen fest und gib dem Topf Zeit — wie beim [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 mistakesPl:
 "Za krótkie duszenie, za mało płynu i luźne rolki zostawiają zrazy suche albo bez kształtu. Mocno zwiąż rolady i daj garnkowi czas — jak przy [obiedzie niedzielnym](/pl/blog/obiad-niedzielny).",
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
 "Makowiec ist der gerollte polnische Mohnkuchen: Hefeteig, dichte Mohnmasse, oft zur Wigilia. Kein Blech-Mohnkuchen und kein Strudel — eigene Form, eigene Technik. Handgriffe im [Makowiec-Technik](/de/blog/makowiec-technik)-Guide; Menüplatz: im [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan). Käsekuchen bleibt [Sernik](/de/rezepte/sernik) — anderes Gericht.",
 originPl:
 "Makowiec to polska rolada makowa: ciasto drożdżowe, gęsta masa, często na Wigilię. Nie ciasto z blachy i nie strudel — własna forma, własna technika. Gesty w filarze [technika makowca](/pl/blog/makowiec-technika); miejsce w menu: [menu wigilijne](/pl/blog/menu-wigilijne). Sernik zostaje przy [serniku](/pl/rezepte/sernik) — inny fokus.",
 shopDe:
 "Blauer Mohn, Mehl, Hefe, Milch, Butter, Eier, Zucker und optional Rosinen tragen Rolle und Masse. Guten Mohn findest du im [Polenladen](/de/blog/polenladen-einkaufen); wenn etwas fehlt, hilft die ehrliche Logik in [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Ofentemperatur und Handgriffe vertieft der [Makowiec-Technik](/de/blog/makowiec-technik)-Guide.",
 shopPl:
 "Niebieski mak, mąka, drożdże, mleko, masło, jajka, cukier i opcjonalnie rodzynki niosą rolkę i masę. Dobry mak kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy); gdy czegoś brakuje, pomaga uczciwa logika w [zamiennikach](/pl/blog/zamienniki-skladnikow). Temperaturę pieca i chwyty pogłębia [technika makowca](/pl/blog/makowiec-technika).",
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
 "Eine trockene Mohnmasse, zu viel Mehl im Teig, ein zu heißer Ofen, zu frühes Schneiden und kochende Flüssigkeit auf der Hefe ruinieren Spirale und Krume. Lass beim Füllen einen Rand stehen und warte mit dem Anschneiden, bis der Laib ruhig ist.",
 mistakesPl:
 "Sucha masa makowa, za dużo mąki w cieście, zbyt gorący piekarnik, zbyt wczesne krojenie i wrzątek na drożdżach psują spiralę i miękisz. Przy nadziewaniu zostaw brzeg i czekaj z krojeniem, aż bochenek ostyg",
 variantsDe:
 "Mit Rosinen, mit Zuckerguss, kleinere Rollen. Anderes Festtagsbacken: [Faworki](/de/rezepte/faworki) + [Faworki-Technik](/de/blog/faworki-technik). Käsekuchen-Linie: [Sernik](/de/rezepte/sernik). Formkuchen ohne Mohnspirale: [Babka](/de/rezepte/babka) — anderer Rezept. Honig-Gewürz-Lebkuchen (≠ Mohnrolle): [Piernik](/de/rezepte/piernik). Weizenkörner+Mohn in der Schüssel (≠ Rolle): [Kutia](/de/rezepte/kutia).",
 variantsPl:
 "Z rodzynkami, z lukrem, mniejsze rolady. Inne pieczenie świąteczne: [faworki](/pl/rezepte/faworki) + [technika faworków](/pl/blog/faworki-technika). Linia sernika: [sernik](/pl/rezepte/sernik). Ciasto z formy bez spirali: [babka](/pl/rezepte/babka) — inny Rezept. Piernik miodowo-korzenny (≠ rolada makowa): [piernik](/pl/rezepte/piernik). Pszenica+mak w misce (≠ rolada): [kutia](/pl/rezepte/kutia).",
 },

 "recipe-uszka": {
 dishDe: "Uszka mit Pilzen",
 dishPl: "Uszka z grzybami",
 vibeDe: "klein, intensiv pilzig, wigilijny",
 vibePl: "małe, intensywnie grzybowe, wigilijne",
 originDe:
 "Uszka sind kleine Teigtaschen — oft mit Pilzfüllung — die klassisch in klarem [Barszcz](/de/rezepte/barszcz-czerwony) schwimmen. Eigene Rezept, eigener Fokus. Barszcz bleibt Rezept für die Suppe; Technik der Klarheit: [Barszcz-Technik](/de/blog/barszcz-technik). Zum Menü passt [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan). Große gefaltete Taschen: [Pierogi-Guide](/de/blog/pierogi-guide).",
 originPl:
 "Uszka to małe pierogi — często z farszem grzybowym — klasycznie w klarownym [barszczu](/pl/rezepte/barszcz-czerwony). Własna Rezept, własny fokus. Barszcz zostaje przepisem na zupy; klarowność: [technika barszczu](/pl/blog/jak-ugotowac-barszcz). Do menu pasuje [menu wigilijne](/pl/blog/menu-wigilijne). Duże sklejane: [przewodnik pierogi](/pl/blog/przewodnik-pierogi).",
 shopDe:
 "Getrocknete Pilze im [Polenladen](/de/blog/polenladen-einkaufen), Zwiebel, Mehl, Ei, Öl. Barszcz separat nach [Barszcz-Rezept](/de/rezepte/barszcz-czerwony). Teiggefühl: [Pierogi-Teig](/de/blog/pierogi-teig). Vortag formen: [Freezer-Guide](/de/blog/freezer-meal-prep).",
 shopPl:
 "Suszone grzyby w [sklepie polskim](/pl/blog/sklep-polski-zakupy), cebula, mąka, jajko, olej. Barszcz osobno: [przepis na barszcz](/pl/rezepte/barszcz-czerwony). Przy cieście pomaga [ciasto na pierogi](/pl/blog/ciasto-na-pierogi). Dzień wcześniej: [mrożenie](/pl/blog/mrozenie-pierogow).",
 techniqueDe:
 "Füllung trocken schmoren, kleine Kreise, wenig Füllung, fest zu Öhrchen schließen. In leicht siedendem Wasser garen, bis sie aufschwimmen. In der Schale mit heißem Barszcz zusammenführen — nicht stundenlang in der Suppe lagern.",
 techniquePl:
 "Farsz dusić na sucho, małe koła, mało farszu, szczelnie zamykać w uszka. Gotować w lekko wrzącej wodzie aż wypłyną. W misce łączyć z gorącym barszczem — nie trzymać godzinami w zupie.",
 serveDe:
 "Als erste Gang-Logik zur Wigilia mit klarem [Barszcz](/de/rezepte/barszcz-czerwony). Auch allein mit Butter. Verwandte Rolle/Panade: [Krokiety](/de/rezepte/krokiety) — andere Form, oft dieselbe Füllungsfamilie.",
 servePl:
 "Jako logika pierwszego dania Wigilii z klarownym [barszczem](/pl/rezepte/barszcz-czerwony). Też same z masłem. Pokrewna forma: [krokiety](/pl/rezepte/krokiety) — inna forma, często ta sama rodzina farszu.",
 diasporaDe:
 "Am 23. formen, einfrieren oder kühl lagern, am 24. nur kochen — entlastet den Abend neben Barszcz und [Makowiec](/de/rezepte/makowiec). Den Zeitplan findest du unter [Wigilia](/de/blog/wigilia-speiseplan).",
 diasporaPl:
 "23. lepić, mrozić lub chłodzić, 24. tylko gotować — odciąża wieczór obok barszczu i [makowca](/pl/rezepte/makowiec). Den Zeitplan findest du unter [menu wigilijne](/pl/blog/menu-wigilijne).",
 mistakesDe:
 "Nasse Füllung, zu große Stücke, zu aggressives Kochen, Uszka in der Suppe einweichen. Barszcz trüben durch Mitkochen der Teigtaschen.",
 mistakesPl:
 "Mokry farsz, za duże sztuki, zbyt gwałtowne gotowanie, namaczanie w zupie. Mętnienie barszczu przez gotowanie uszek w wywarze.",
 variantsDe:
 "Mit Sauerkraut-Anteil, oder fertige Uszka aus dem Laden als Notfall. Die klare Suppe bleibt beim Rezept [Barszcz](/de/rezepte/barszcz-czerwony). Mehr dazu im Artikel [Barszcz-Technik](/de/blog/barszcz-technik). Zum Teig hilft [Pierogi-Teig](/de/blog/pierogi-teig).",
 variantsPl:
 "Z udziałem kapusty kiszonej albo gotowe uszka ze sklepu. Klarowna zupa zostaje przy przepisie [barszcz](/pl/rezepte/barszcz-czerwony). Więcej w artykule [jak ugotować barszcz](/pl/blog/jak-ugotowac-barszcz). Przy cieście pomaga [ciasto na pierogi](/pl/blog/ciasto-na-pierogi).",
 },

 "recipe-karp": {
 dishDe: "Karp po polsku",
 dishPl: "Karp po polsku",
 vibeDe: "festlich, zart, nach Zwiebel und Majoran",
 vibePl: "świąteczny, delikatny, z cebulą i majerankiem",
 originDe:
 "Karpfen ist für viele Familien der warme Fischgang der Wigilia — nicht Pflichtkanon, aber starkes Signal. Gebacken mit Zwiebel ist die diaspora-taugliche Variante. Menü-Artikel bleibt der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan); hier der Rezept „Karp Rezept“. Kalter Fisch: [Śledź](/de/rezepte/sledz). Vorsuppe: [Barszcz](/de/rezepte/barszcz-czerwony) mit [Uszka](/de/rezepte/uszka).",
 originPl:
 "Karp jest dla wielu domów ciepłą rybą Wigilii — nie sztywny kanon, ale mocny sygnał. Pieczony z cebulą to wariant pod diasporę. Menu: [menu wigilijne](/pl/blog/menu-wigilijne); tu Rezept „karp przepis”. Zimna ryba: [śledź](/pl/rezepte/sledz). Zupa: [barszcz](/pl/rezepte/barszcz-czerwony) z [uszkami](/pl/rezepte/uszka).",
 shopDe:
 "Frisch oder tiefgekühlt an der Fischtheke / im [Polenladen](/de/blog/polenladen-einkaufen). Zwiebel, Zitrone, Majoran, Dill. Gewürz: [Majeranek-Lexikon](/de/blog/majeranek). Ersatz und Etiketten: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
 shopPl:
 "Świeży lub mrożony w ladzie / [sklepie polskim](/pl/blog/sklep-polski-zakupy). Cebula, cytryna, majeranek, koperek. Przyprawa: [majeranek](/pl/blog/majeranek-leksykon). Zamienniki znajdziesz w [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
 techniqueDe:
 "Trockne den Fisch gut ab, würze ihn ruhig und backe oder brate ihn so, dass die Haut knusprig wird, ohne das Fleisch auszutrocknen. Zur Wigilia bleibt Zeitplanung wichtiger als spektakuläre Garnitur.",
 techniquePl:
 "Dokładnie osusz rybę, przypraw spokojnie i piecz lub smaż tak, by skórka była chrupiąca, a mięso nie wyschło. Na Wigilię ważniejszy jest timing niż spektakularna dekoracja.",
 serveDe:
 "Serviere den Karpfen heiß mit Beilagen, die das Menü tragen — oft neben klarem [Barszcz](/de/rezepte/barszcz-czerwony) und anderen Wigilia-Tellern, nicht als Alltagsfisch neben Pommes.",
 servePl:
 "Podawaj karpia gorącego z dodatkami, które niosą menu — często obok klarownego [barszczu](/pl/rezepte/barszcz-czerwony) i innych wigilijnych talerzy, nie jako rybę codzienną z frytkami.",
 diasporaDe:
 "In deutschen Wohnungen ist Karpfen oft das Gericht, das am meisten nach Hause riecht — und gleichzeitig das, bei dem Timing und Geruchskompromisse mit Nachbarn zählen.",
 diasporaPl:
 "W niemieckich mieszkaniach karp często najbardziej pachnie domem — i jednocześnie wymaga kompromisu z sąsiadami co do zapachu i czasu.",
 mistakesDe:
 "Zu wenig abgetrockneter Fisch, zu heiße Pfanne und zu frühes Salzen vor dem Braten machen Haut weich oder Fleisch trocken. Arbeite ruhig und halte die Hitze mittel.",
 mistakesPl:
 "Zbyt słabo osuszona ryba, za gorąca patelnia i zbyt wczesne solenie przed smażeniem robią skórkę miękką albo mięso suche. Pracuj spokojnie i trzymaj średni ogień.",
 variantsDe:
 "In Gelee, paniert gebraten, oder moderne Alternative Lachs — ehrlich benennen. Kalter Hering: [Śledź](/de/rezepte/sledz). Zum Menü passt [Wigilia](/de/blog/wigilia-speiseplan). Würze: [Majeranek](/de/blog/majeranek).",
 variantsPl:
 "W galarecie, smażony w panierce albo łosoś — nazywać uczciwie. Zimny śledź: [śledź](/pl/rezepte/sledz). Do menu pasuje [menu wigilijne](/pl/blog/menu-wigilijne). Przyprawa: [majeranek](/pl/blog/majeranek-leksykon).",
 },

 "recipe-krokiety": {
 dishDe: "Krokiety",
 dishPl: "Krokiety",
 vibeDe: "knusprig außen, weich innen, barszczfreundlich",
 vibePl: "chrupiące na zewnątrz, miękkie w środku, do barszczu",
 originDe:
 "Krokiety sind gerollte, panierte Naleśniki — klassisch mit Kraut und Pilzen, oft neben klarem [Barszcz](/de/rezepte/barszcz-czerwony). Eigene Form (Rolle + Panade), eigener Fokus. Teiggefühl im [Naleśniki-Guide](/de/blog/nalesniki-guide); Panade-Logik: [Panieren-Guide](/de/blog/panieren-schabowy). Kleine Teigtaschen: [Uszka](/de/rezepte/uszka).",
 originPl:
 "Krokiety to zwinięte, panierowane naleśniki — klasycznie z kapustą i grzybami, często obok klarownego [barszczu](/pl/rezepte/barszcz-czerwony). Własna forma (rolka + panierka), własny fokus. Przy cieście pomaga [przewodnik naleśników](/pl/blog/nalesniki-przewodnik); przy panierce [panierowanie](/pl/blog/panierowanie-kotlet). Małe pierożki znajdziesz przy [uszkach](/pl/rezepte/uszka).",
 shopDe:
 "Für die Platten brauchst du Milch, Mehl und Eier; für die Füllung Sauerkraut mit Pilzen oder Fleischreste, dazu Semmelbrösel zum Panieren. Einkauf und Ferment-Logik führen oft über [Polenladen](/de/blog/polenladen-einkaufen) und [Kiszenie](/de/blog/kiszenie-guide); die Platten-Basis teilt sich mit dem [Naleśniki-Guide](/de/blog/nalesniki-guide).",
 shopPl:
 "Do placków potrzebujesz mleka, mąki i jajek; do farszu kapusty z grzybami lub resztek mięsa oraz bułki tartej do panierowania. Zakupy i logika kiszenia często prowadzą przez [sklep polski](/pl/blog/sklep-polski-zakupy) i [kiszenie](/pl/blog/kiszenie-w-domu); bazę placków dzieli [przewodnik naleśników](/pl/blog/nalesniki-przewodnik).",
 techniqueDe:
 "Rolle die gefüllten Platten fest, paniere sie sorgfältig und brate bei mittlerer Hitze goldbraun. Die Füllung muss kalt und nicht zu nass sein, sonst weicht die Kruste auf, bevor sie schließt.",
 techniquePl:
 "Zwijaj napełnione placki szczelnie, starannie obtocz i smaż na średnim ogniu na złoto. Farsz musi być zimny i niezbyt mokry, inaczej skórka rozmięknie, zanim się zamk",
 serveDe:
 "Heiß mit klarem [Barszcz](/de/rezepte/barszcz-czerwony) oder allein mit Śmietana — [Śmietana/Schmand](/de/blog/smietana-schmand). Reste erneut in der Pfanne knusprig. Wigilia-Partner: [Uszka](/de/rezepte/uszka).",
 servePl:
 "Gorące z klarownym [barszczem](/pl/rezepte/barszcz-czerwony) albo same ze śmietaną — [śmietana/Schmand](/pl/blog/smietana-czy-schmand). Resztki odsmażyć. Partner Wigilii: [uszka](/pl/rezepte/uszka).",
 diasporaDe:
 "Wochenendprojekt: vormittags Teig und Füllung, nachmittags rollen und braten. Freezer: geformte Rollen vor dem Panieren — siehe [Freezer-Guide](/de/blog/freezer-meal-prep). Menükontext: [Wigilia](/de/blog/wigilia-speiseplan).",
 diasporaPl:
 "Projekt weekendowy: rano ciasto i farsz, po południu zwijać i smażyć. Freezer: uformowane rolki przed panierowaniem — [mrożenie](/pl/blog/mrozenie-pierogow). Do menu pasuje [menu wigilijne](/pl/blog/menu-wigilijne).",
 mistakesDe:
 "Zu nasse Kapusta, lockere Rollen und zu heißes Fett machen Krokiety ölig oder rissig. Tropfe die Füllung ab und brate lieber in kleinen Batches.",
 mistakesPl:
 "Za mokra kapusta, luźne rolki i zbyt gorący tłuszcz robią krokiety tłuste albo spękane. Odsącz farsz i smaż raczej małymi partiami.",
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
 "Sernik ist der polnische Käsekuchen auf Twaróg-Basis — dichter und oft höher als mancher deutsche Käsekuchen. Er steht neben [Makowiec](/de/rezepte/makowiec) auf dem Festtisch, bleibt aber ein eigenes Gericht: hier Käse und Vanille, dort Mohnrolle. Ofengeduld und Festtagsplanung vertieft der [Makowiec-Technik-Guide](/de/blog/makowiec-technik); Quark-Qualität erklärt der [Twaróg-Guide](/de/blog/twarog-deutschland). Zum Ostermenü passt [Wielkanoc](/de/blog/wielkanoc-speiseplan).",
 originPl:
 "Sernik to polski sernik na twarogu — gęstszy i często wyższy niż niejedne niemieckie serniki. Stoi obok [makowca](/pl/rezepte/makowiec) na stole świątecznym, ale zostaje osobnym daniem: tu ser i wanilia, tam rolada makowa. Piec i plan świąt pogłębia [technika makowca](/pl/blog/makowiec-technika); jakość twarogu opisuje [przewodnik](/pl/blog/twarog-w-niemczech). Do menu pasuje [Wielkanoc](/pl/blog/menu-wielkanocne).",
 shopDe:
 "Twaróg sernikowy oder gut abgetropfter Speisequark, Eier, Zucker, Butter, etwas Bindung, Vanille und optional ein Mürbeteigboden. Orientierung geben [Twaróg-Guide](/de/blog/twarog-deutschland) und [Ersatzprodukte DE](/de/blog/ersatzprodukte-de); typische Qualität findest du im [Polenladen](/de/blog/polenladen-einkaufen).",
 shopPl:
 "Twaróg sernikowy lub dobrze odsączony Quark, jajka, cukier, masło, odrobina spoiwa, wanilia i opcjonalnie kruchy spód. Orientację dają [twaróg](/pl/blog/twarog-w-niemczech) i [zamienniki](/pl/blog/zamienniki-skladnikow); typową jakość kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
 techniqueDe:
 "Die Masse glatt rühren, aber nicht schaumig überrühren — sonst bricht sie später ein. Bei mittlerer Hitze backen; die Mitte darf leicht wackeln. Im ausgeschalteten Ofen nachruhen und erst kalt schneiden. Risse entstehen oft durch zu hohe Hitze oder Zugluft beim Öffnen.",
 techniquePl:
 "Masę wymieszaj na gładko, ale nie ubijaj do piany — inaczej później opada. Piecz w średniej temperaturze; środek może lekko drgać. Dociągnij w wyłączonym piecu i kroić dopiero zimny. Pęknięcia często biorą się z zbyt wysokiej temperatury lub przeciągu przy otwarciu.",
 serveDe:
 "In Stücken mit Puderzucker, Früchten oder allein zum Kaffee servieren. Zu Ostern und Sonntag häufig; zu Wigilia oft neben oder statt [Makowiec](/de/rezepte/makowiec) — Hausbrauch entscheidet. Menühilfe: [Wielkanoc](/de/blog/wielkanoc-speiseplan).",
 servePl:
 "Podawaj w kawałkach z cukrem pudrem, owocami albo samym do kawy. Na Wielkanoc i niedzielę często; na Wigilię obok lub zamiast [makowca](/pl/rezepte/makowiec) — decyduje dom. Pomoc przy menu: [Wielkanoc](/pl/blog/menu-wielkanocne).",
 diasporaDe:
 "Am Vortag backen entlastet Gästeessen. Deutscher Quark braucht oft Abtropfen — siehe [Twaróg](/de/blog/twarog-deutschland). Nicht mit [Faworki](/de/rezepte/faworki) verwechseln; das ist anderes Fettgebäck.",
 diasporaPl:
 "Pieczenie dzień wcześniej odciąża gości. Niemiecki Quark często wymaga odsączenia — [twaróg](/pl/blog/twarog-w-niemczech). Nie myl z [faworkami](/pl/rezepte/faworki); to inne wypieki tłuszczowe.",
 mistakesDe:
 "Zu nasser Quark macht die Masse wässrig. Zu heißer Ofen reißt die Oberfläche. Zu früh schneiden zerbricht die Scheiben. Mit [Makowiec](/de/rezepte/makowiec) verwechseln heißt Mohnrolle statt Käsekuchen. Ein zu kurz gebackener Boden bleibt roh.",
 mistakesPl:
 "Za mokry twaróg robi masę wodnistą. Zbyt gorący piec pęka powierzchnię. Zbyt wczesne krojenie kruszy plastry. Mylenie z [makowcem](/pl/rezepte/makowiec) oznacza roladę zamiast sernika. Za krótko pieczony spód zostaje surowy.",
 variantsDe:
 "Ohne Boden, mit Rosinen, mit Schokotropfen oder in kleinerer Springform. Die Mohnrolle bleibt [Makowiec](/de/rezepte/makowiec); der Hefegugelhupf [Babka](/de/rezepte/babka); Honig-Gewürz [Piernik](/de/rezepte/piernik). Technik-Feeling: [Makowiec-Technik](/de/blog/makowiec-technik). Quark: [Twaróg](/de/blog/twarog-deutschland).",
 variantsPl:
 "Bez spodu, z rodzynkami, z czekoladą albo w mniejszej tortownicy. Rolada makowa zostaje [makowcem](/pl/rezepte/makowiec); ciasto drożdżowe z formy [babką](/pl/rezepte/babka); miód i korzeń [piernikiem](/pl/rezepte/piernik). Więcej w artykule [makowiec-technika](/pl/blog/makowiec-technika). Twaróg: [twaróg](/pl/blog/twarog-w-niemczech).",
 },

 "recipe-sledz": {
 dishDe: "Śledź w oleju",
 dishPl: "Śledź w oleju",
 vibeDe: "kalt, zwiebelig, salzig-fettig zum Brot",
 vibePl: "zimny, cebulowy, słono-tłusty do chleba",
 originDe:
 "Śledź ist der kalte Fischgang vieler Wigilia-Tische und zugleich Alltagsteller mit Brot. In Öl mit Zwiebel ist die klarste diaspora-Variante. Rezept für „Śledź Rezept“; Menü: [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan); warmer Fisch: [Karp](/de/rezepte/karp). Im [Polenladen](/de/blog/polenladen-einkaufen) findest du typische Spezialzutaten.",
 originPl:
 "Śledź to zimna ryba wielu stołów wigilijnych i zarazem codzienny talerz z chlebem. W oleju z cebulą to najczytelniejszy wariant diasporowy. menu: [menu wigilijne](/pl/blog/menu-wigilijne); ryba ciepła: [karp](/pl/rezepte/karp). W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności.",
 shopDe:
 "Nimm Matjes- oder Salzheringfilets aus der Kühltruhe des [Polenladens](/de/blog/polenladen-einkaufen), dazu Zwiebeln, neutrales Öl, Lorbeer und Piment. Wenn nur Rollmops da ist, deklariere den Teller ehrlich um — Orientierung gibt [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
 shopPl:
 "Weź filety śledziowe matjes lub solone z chłodni [sklepu polskiego](/pl/blog/sklep-polski-zakupy), cebulę, olej, liść laurowy i ziele angielskie. Gdy jest tylko rolmops, nazwij talerz uczciwie — orientację dają [zamienniki](/pl/blog/zamienniki-skladnikow).",
 techniqueDe:
 "Schneiden, schichten, würzen, ziehen lassen — Kühlschrank, abgedeckt. Schärfe der Zwiebel mit kurzem Brühen mildern. Nicht kochen. Über Nacht oft besser.",
 techniquePl:
 "Kroić, warstwić, przyprawiać, odstawić — lodówka, przykryte. Ostrość cebuli złagodzić krótkim sparzeniem. Nie gotować. Przez noc często lepiej.",
 serveDe:
 "Kalt mit Brot, manchmal mit Ei oder Gurke. An Wigilia oft neben anderen kalten Speisen; an Werktagen als schneller Teller. Warm: [Karp](/de/rezepte/karp). Sahnevariante: [Śmietana-Lexikon](/de/blog/smietana-schmand).",
 servePl:
 "Zimne z chlebem, czasem z jajkiem lub ogórkiem. Na Wigilię obok innych zimnych; w tygodniu jako szybki talerz. Na ciepło: [karp](/pl/rezepte/karp). Wariant śmietany: [śmietana](/pl/blog/smietana-czy-schmand).",
 diasporaDe:
 "Vorbereiten am 23., servieren am 24. — null Ofenstress neben [Barszcz](/de/rezepte/barszcz-czerwony) und [Karp](/de/rezepte/karp). Den Zeitplan findest du unter [Wigilia](/de/blog/wigilia-speiseplan).",
 diasporaPl:
 "Przygotować 23., podać 24. — zero stresu pieca obok [barszczu](/pl/rezepte/barszcz-czerwony) i [karpia](/pl/rezepte/karp). Den Zeitplan findest du unter [menu wigilijne](/pl/blog/menu-wigilijne).",
 mistakesDe:
 "Zu kurze Marinade, zu scharfe Zwiebel ohne Bad und zu wenig Öl lassen den Hering streng oder trocken. Plane ein paar Stunden Ruhe im Kühlschrank, bevor der Teller auf den Tisch kommt.",
 mistakesPl:
 "Za krótka marynata, zbyt ostra cebula bez namoczenia i za mało oleju zostawiają śledzia ostrego albo suchego. Zaplanuj kilka godzin spokoju w lodówce, zanim talerz trafi na stół.",
 variantsDe:
 "Śledź w śmietanie, po kaszubsku mit Apfel, mit Senf. Sahne: [Śmietana](/de/blog/smietana-schmand). Warm: [Karp](/de/rezepte/karp). Zum Menü passt [Wigilia](/de/blog/wigilia-speiseplan). Laden: [Polenladen](/de/blog/polenladen-einkaufen).",
 variantsPl:
 "Śledź w śmietanie, po kaszubsku z jabłkiem, z musztardą. Śmietana: [leksykon](/pl/blog/smietana-czy-schmand). Ciepło: [karp](/pl/rezepte/karp). Do menu pasuje [menu wigilijne](/pl/blog/menu-wigilijne). Sklep: [sklep polski](/pl/blog/sklep-polski-zakupy).",
 },
};
