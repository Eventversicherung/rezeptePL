/**
 * Wave 15 Paket A — FACTS for kaczka, pieczen-rzymska.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W15_FACTS_A } from "./recipe-articles-w15-a";
 * Object.assign(FACTS, …, W15_FACTS_A);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Kaczka pieczona ≠ Schab pieczony / Golonka / Żeberka
 * - Pieczeń rzymska ≠ Kotlet mielony (Pfanne) / Pasztet
 * - Sonntagsessen bleibt Kultur-Guide; hier nur Cook-Rezept
 */

export type ArticleFacts = {
 dishDe: string;
 dishPl: string;
 vibeDe: string;
 vibePl: string;
 originDe: string;
 originPl: string;
 shopDe: string;
 shopPl: string;
 techniqueDe: string;
 techniquePl: string;
 serveDe: string;
 servePl: string;
 diasporaDe: string;
 diasporaPl: string;
 mistakesDe: string;
 mistakesPl: string;
 variantsDe: string;
 variantsPl: string;
};

export const W15_FACTS_A: Record<string, ArticleFacts> = {
 "recipe-kaczka": {
 dishDe: "Kaczka pieczona",
 dishPl: "Kaczka pieczona",
 vibeDe:
 "festlich-ofenwarm, knusprige Haut, Apfel-Majoran — ganze Ente, kein Schweinebraten",
 vibePl:
 "świątecznie-piecowy, chrupiąca skóra, jabłko-majeranek — cała kaczka, nie pieczeń wieprzowa",
 originDe:
 "Kaczka pieczona ist die polnische Ofenente: ganze Ente, Apfelviertel in der Bauchhöhle, Majeranek, Salz und Pfeffer — langsam gebacken, bis die Haut knusprig und das Fleisch saftig ist. Sie ist weder Ofenschweinebraten wie [Schab pieczony](/de/rezepte/schab-pieczony) noch geschmorte Haxe wie [Golonka](/de/rezepte/golonka) noch Ofenrippen wie [Żeberka pieczone](/de/rezepte/zeberka). Am [Sonntagsessen](/de/blog/sonntagsessen-polnisch) darf sie der Festbraten sein; zum Gewürz hilft [Majeranek](/de/blog/majeranek). In der Diaspora ist sie oft der Sonntags- oder Feiertagsvogel, den man selten genug macht, um ihn richtig zu feiern.",
 originPl:
 "Kaczka pieczona to polska kaczka z pieca: cała sztuka, ćwiartki jabłka w brzuchu, majeranek, sól i pieprz — wolno pieczona, aż skóra chrupie, a mięso zostaje soczyste. To ani pieczeń wieprzowa jak [schab pieczony](/pl/rezepte/schab-pieczony), ani duszona [golonka](/pl/rezepte/golonka), ani [żeberka pieczone](/pl/rezepte/zeberka). Przy [obiedzie niedzielnym](/pl/blog/obiad-niedzielny) bywa pieczeniem świątecznym; przyprawę opisuje [majeranek](/pl/blog/majeranek-leksykon). W diasporze często to ptak niedzielny lub świąteczny, którego robi się rzadko i z szacunkiem.",
 shopDe:
 "Hol eine ganze Ente — frisch oder vollständig aufgetaut — und säuerliche Äpfel, Majoran, Salz und Pfeffer; optional eine Zwiebel und etwas Flüssigkeit für die Form. Ente und gutes Majeranek findest du oft im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt frische Ente, nimm tiefgekühlt und benenne es ehrlich; Qualität laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) nur dort, wo es Sinn ergibt — nicht durch Schweinekamm ersetzen, sonst driftet das Gericht zu [Schab pieczony](/de/rezepte/schab-pieczony). Haxe und Rippen gehören in [Golonka](/de/rezepte/golonka) bzw. [Żeberka](/de/rezepte/zeberka).",
 shopPl:
 "Weź całą kaczkę — świeżą lub całkowicie rozmrożoną — oraz kwaskowe jabłka, majeranek, sól i pieprz; opcjonalnie cebulę i odrobinę płynu do naczynia. Kaczkę i dobry majeranek często kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Brak świeżej — weź mrożoną i nazwij uczciwie; jakość według [zamienników](/pl/blog/zamienniki-skladnikow) tylko tam, gdzie ma sens — nie zamieniaj na schab, bo dryfuje w stronę [schab pieczony](/pl/rezepte/schab-pieczony). Golonka i żebra należą do [golonki](/pl/rezepte/golonka) lub [żeberek](/pl/rezepte/zeberka).",
 techniqueDe:
 "Ente trocken tupfen — nasse Haut wird nicht knusprig. Würzen innen und außen; Apfel füllt und aromatisieren, ohne die Höhle zu stopfen. Heiß anbräunen, dann bei 180 °C weiter; regelmäßig begießen. Ruhezeit vor dem Tranchieren hält den Saft. Zu heiß austrocknet; zu wenig Zeit lässt die Haut weich. Das ist kein Schweinekamm wie [Schab](/de/rezepte/schab-pieczony) und keine Schmorhaxe wie [Golonka](/de/rezepte/golonka). Majoran-Feeling: [Majeranek](/de/blog/majeranek). Sonntagsrhythmus: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 techniquePl:
 "Kaczkę osusz — mokra skóra nie chrupie. Przypraw w środku i na zewnątrz; jabłko aromatyzuje bez ubijania. Zacznij mocniej, potem 180 °C; polewaj. Odpoczynek przed krojeniem trzyma sok. Za mocno — wysycha; za krótko — skóra miękka. To nie schab jak [schab pieczony](/pl/rezepte/schab-pieczony) i nie golonka jak [golonka](/pl/rezepte/golonka). Majeranek: [majeranek](/pl/blog/majeranek-leksykon). Rytm niedzielny: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 serveDe:
 "Tranchiert mit knuspriger Haut, oft Kartoffeln und Rotkohl oder Beilage. Bratensaft abschmecken, Fett abschöpfen. Menüplatz: [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Auf dem Tisch klar halten: Schweinekamm = [Schab](/de/rezepte/schab-pieczony); Haxe = [Golonka](/de/rezepte/golonka); Rippen = [Żeberka](/de/rezepte/zeberka). Im [Polenladen](/de/blog/polenladen-einkaufen) findest du typische Spezialzutaten. Reste kalt oder aufgewärmt — Haut separat knusprig halten.",
 servePl:
 "Porcjowana z chrupiącą skórą, często ziemniaki i czerwona kapusta. Sos dopraw, tłuszcz zbierz. Miejsce w menu: [obiad niedzielny](/pl/blog/obiad-niedzielny). Na stole: schab = [schab pieczony](/pl/rezepte/schab-pieczony); golonka = [golonka](/pl/rezepte/golonka); żebra = [żeberka](/pl/rezepte/zeberka). W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności. Resztki zimne lub odgrzane — skórę osobno.",
 diasporaDe:
 "Ofenente ist diaspora-festlich: ein Vogel für Gäste, Apfel und Majoran aus dem Vorrat, Ofenzeit als Planungszeit. Selten genug, dass man sie richtig macht — nicht als Alltags-Hackbraten. Qualität vor drei Festbraten am selben Tag. Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen. Kultur [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Nachbarn bleiben [Schab](/de/rezepte/schab-pieczony) und [Golonka](/de/rezepte/golonka).",
 diasporaPl:
 "Kaczka z pieca lubi diasporę świąteczną: jeden ptak dla gości, jabłko i majeranek ze spiżarni, czas pieca jako plan. Robi się ją rzadko na tyle, by zrobić dobrze — nie jako codzienny hackbraten. Jakość przed trzema pieczeniami tego samego dnia. W [sklepie polskim](/pl/blog/sklep-polski-zakupy) i pod [zamiennikami](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe. Ramę kultury daje [obiad niedzielny](/pl/blog/obiad-niedzielny); sąsiedzi to [schab](/pl/rezepte/schab-pieczony) i [golonka](/pl/rezepte/golonka).",
 mistakesDe:
 "Nicht mit [Schab pieczony](/de/rezepte/schab-pieczony), [Golonka](/de/rezepte/golonka) oder [Żeberka](/de/rezepte/zeberka) verwechseln — anderes Stück, andere Technik. Nasse Haut wird nicht knusprig; zu heiß austrocknet das Fleisch; ohne Ruhezeit vor dem Tranchieren läuft der Saft aus. Majoran-Feeling bleibt im [Majeranek](/de/blog/majeranek)-Lexikon.",
 mistakesPl:
 "Nie myl z [schabem pieczonym](/pl/rezepte/schab-pieczony), [golonką](/pl/rezepte/golonka) ani [żeberkami](/pl/rezepte/zeberka) — inny kawałek, inna technika. Mokra skóra nie chrupie; za mocny piec suszy mięso; bez odpoczynku przed krojeniem ucieka sok. Majeranek opisuje [leksykon](/pl/blog/majeranek-leksykon).",
 variantsDe:
 "Mit mehr Apfel; mit getrockneten Pflaumen in der Füllung (ehrlich benennen); halbe Ente für kleinere Haushalte. Passende Nachbarn sind [Schab](/de/rezepte/schab-pieczony), [Golonka](/de/rezepte/golonka), [Żeberka](/de/rezepte/zeberka). Guides: [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Majeranek](/de/blog/majeranek), [Polenladen](/de/blog/polenladen-einkaufen).",
 variantsPl:
 "Z większą ilością jabłka; ze śliwką suszoną w farszu (nazwać uczciwie); pół kaczki dla mniejszego domu. Pasujący sąsiedzi to [schab](/pl/rezepte/schab-pieczony), [golonka](/pl/rezepte/golonka), [żeberka](/pl/rezepte/zeberka). Przewodniki: [obiad niedzielny](/pl/blog/obiad-niedzielny), [majeranek](/pl/blog/majeranek-leksykon), [sklep polski](/pl/blog/sklep-polski-zakupy).",
 },

 "recipe-pieczen-rzymska": {
 dishDe: "Pieczeń rzymska",
 dishPl: "Pieczeń rzymska",
 vibeDe:
 "ofenwarm, Laib-Schnitt mit Ei-Kern — Hackbraten aus dem Ofen, keine Frikadelle",
 vibePl:
 "ciepły z pieca, przekrój bochenka z jajkiem — pieczeń mielona, nie kotlet z patelni",
 originDe:
 "Pieczeń rzymska ist der polnische Ofen-Hackbraten: gemischtes Hack mit eingeweichtem Brötchen und Majeranek, hartgekochte Eier längs im Kern, als Laib gebacken, bis die Scheiben den Ei-Schnitt zeigen. Das ist weder flache Pfannen-Frikadellen wie [Kotlet mielony](/de/rezepte/kotlet-mielony) noch gebackene Pastete wie [Pasztet](/de/rezepte/pasztet). Am [Sonntagsessen](/de/blog/sonntagsessen-polnisch) darf sie der ruhige Alltags-Festbraten sein; zum Feinmahlen hilft die [Fleischwolf-Kaufberatung](/de/blog/fleischwolf-kaufberatung). In der Diaspora oft der Laib, den man samstags formt und sonntags nur noch schneidet.",
 originPl:
 "Pieczeń rzymska to polska pieczeń mielona z pieca: mielone z namoczoną bułką i majerankiem, jajka na twardo wzdłuż środka, pieczona jako bochenek, aż plastry pokazują jajko. To ani płaskie kotlety z patelni jak [kotlet mielony](/pl/rezepte/kotlet-mielony), ani [pasztet](/pl/rezepte/pasztet). Przy [obiedzie niedzielnym](/pl/blog/obiad-niedzielny) bywa spokojnym pieczeniem na co dzień; mielenie opisuje [wilk do mięsa](/pl/blog/wilk-do-miesa). W diasporze często to bochenek z soboty, który w niedzielę tylko kroisz.",
 shopDe:
 "Für die Masse brauchst du gemischtes Hack, alte Brötchen, Milch und ein Ei; für den Kern hartgekochte Eier; dazu Zwiebel, Majeranek, Salz und Pfeffer — optional Speck zum Umwickeln. Gutes Hack und Majoran findest du oft im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt Brötchen oder Hack-Qualität, ersetze ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Flache panierte Kotlets gehören zu [Kotlet mielony](/de/rezepte/kotlet-mielony); Leber-Pastetenmasse zu [Pasztet](/de/rezepte/pasztet).",
 shopPl:
 "Na masę weź mielone mieszane, czerstwe bułki, mleko i jajko; do środka jajka na twardo; do tego cebula, majeranek, sól i pieprz — opcjonalnie boczek do owinięcia. Dobre mięso i majeranek często są w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Brak bułki lub jakości — zamień uczciwie według [zamienników](/pl/blog/zamienniki-skladnikow). Płaskie panierowane kotlety należą do [kotleta mielonego](/pl/rezepte/kotlet-mielony); masa pasztetowa do [pasztetu](/pl/rezepte/pasztet).",
 techniqueDe:
 "Brötchen gut ausdrücken — zu nass rutscht der Laib. Masse binden und kalt stellen; Eier längs einlegen und fest schließen, damit der Schnitt sauber bleibt. Bei 180 °C durchbacken; Ruhezeit vor dem Schneiden. Zu mageres Hack trocknet; zu lose geformt reißt der Kern. Das ist kein Pfannenbraten wie [Kotlet mielony](/de/rezepte/kotlet-mielony) und keine Terrine wie [Pasztet](/de/rezepte/pasztet). Feinere Füllung: [Fleischwolf](/de/blog/fleischwolf-kaufberatung). Sonntag: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 techniquePl:
 "Bułkę dobrze odciśnij — za mokra masa się rozjeżdża. Zwiąż masę i schłódź; jajka włóż wzdłuż i domknij. Piecz w 180 °C; odpoczynek przed krojeniem. Za chude mięso — sucho; za luźno — pęka środek. To nie patelnia jak [kotlet mielony](/pl/rezepte/kotlet-mielony) i nie terrina jak [pasztet](/pl/rezepte/pasztet). Mielenie: [wilk do mięsa](/pl/blog/wilk-do-miesa). Niedziela: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 serveDe:
 "In Scheiben mit sichtbarem Ei-Kern, oft Kartoffeln, Surówka oder leichte Soße. Zum Menü passt [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer Pfannen-Kotlets will: [Kotlet mielony](/de/rezepte/kotlet-mielony); wer Pastete: [Pasztet](/de/rezepte/pasztet). Im [Polenladen](/de/blog/polenladen-einkaufen) findest du typische Spezialzutaten. Alternativen stehen unter [Ersatzprodukte](/de/blog/ersatzprodukte-de). Hält gekühlt zwei bis drei Tage; kalt oder aufgewärmt.",
 servePl:
 "W plastrach z widocznym jajkiem, często ziemniaki, surówka lub lekki sos. Do menu pasuje [obiad niedzielny](/pl/blog/obiad-niedzielny). Kotlety z patelni: [kotlet mielony](/pl/rezepte/kotlet-mielony); pasztet: [pasztet](/pl/rezepte/pasztet). W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności. Zamienniki znajdziesz w [zamienniki](/pl/blog/zamienniki-skladnikow). Trzyma 2–3 dni w chłodzie.",
 diasporaDe:
 "Pieczeń rzymska ist diaspora-freundlich: ein Laib, Hack aus der Theke oder dem Wolf, Eier aus dem Kühlschrank, Ofen statt Pfannenrunde. Samstag formen, Sonntag schneiden — entlastet den Morgen. Kinder dürfen Eier schälen; heißer Ofen bei Erwachsenen. Qualität vor drei Hack-Gerichten am selben Tag. Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen. Den Kulturrahmen liefert [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Nicht verwechseln mit [Kotlet mielony](/de/rezepte/kotlet-mielony).",
 diasporaPl:
 "Pieczeń rzymska lubi diasporę: jeden bochenek, mielone z lady lub wilka, jajka z lodówki, piec zamiast rundy na patelni. Sobota formowanie, niedziela krojenie. Dzieci obiorą jajka; gorący piec u dorosłych. Jakość przed trzema daniami z mielonego. W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe. Ramę kulturową daje [obiad niedzielny](/pl/blog/obiad-niedzielny). Nie mylić z [kotlet mielony](/pl/rezepte/kotlet-mielony).",
 mistakesDe:
 "Mit [Kotlet mielony](/de/rezepte/kotlet-mielony) verwechseln (Pfanne). Mit [Pasztet](/de/rezepte/pasztet) verwechseln. Zu nasse Masse; Eier nicht mittig; zu kurz backen. nein. Panade-Fokus bleibt beim [Panieren-Guide](/de/blog/panieren-schabowy).",
 mistakesPl:
 "Mylenie z [kotletem mielonym](/pl/rezepte/kotlet-mielony) z patelni albo z [pasztetem](/pl/rezepte/pasztet) gubi formę. Za mokra masa; jajka nie na środku; za krótkie pieczenie. Panierka zostaje przy [panierowaniu](/pl/blog/panierowanie-kotlet).",
 variantsDe:
 "Mit Speckmantel; ohne Ei-Kern (ehrlich benennen — Fokus bleibt Ofen-Laib); feinere Hackmischung. Passende Nachbarn sind [Kotlet mielony](/de/rezepte/kotlet-mielony), [Pasztet](/de/rezepte/pasztet). Guides: [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Fleischwolf](/de/blog/fleischwolf-kaufberatung), [Ersatzprodukte](/de/blog/ersatzprodukte-de), [Polenladen](/de/blog/polenladen-einkaufen).",
 variantsPl:
 "Z boczkiem; bez jajka w środku (nazwać uczciwie — fokus zostaje bochenek z pieca); drobniejsze mielone. Pasujący sąsiedzi to [kotlet mielony](/pl/rezepte/kotlet-mielony), [pasztet](/pl/rezepte/pasztet). Przewodniki: [obiad niedzielny](/pl/blog/obiad-niedzielny), [wilk do mięsa](/pl/blog/wilk-do-miesa), [zamienniki](/pl/blog/zamienniki-skladnikow), [sklep polski](/pl/blog/sklep-polski-zakupy).",
 },
};
