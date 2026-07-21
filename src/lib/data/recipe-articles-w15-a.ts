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
 "Kaczka pieczona ist das Rezept für die klassische polnische Ofenente — hier als eine klare Hauslinie: ganze Ente mit Apfelvierteln in der Bauchhöhle, Majeranek, Salz und Pfeffer, langsam im Ofen bis die Haut knusprig und das Fleisch saftig ist. Das ist weder Ofenschweinebraten [Schab pieczony](/de/rezepte/schab-pieczony) noch geschmorte Haxe [Golonka](/de/rezepte/golonka) noch Ofenrippen [Żeberka pieczone](/de/rezepte/zeberka). Am [Sonntagsessen](/de/blog/sonntagsessen-polnisch) darf sie der Festbraten sein  — Mengen und Schritte stehen oben im Rezept. Zum Gewürz hilft [Majeranek](/de/blog/majeranek). In der Diaspora oft der Sonntags- oder Feiertagsvogel, den man rare genug macht, um ihn richtig zu feiern.",
 originPl:
 "Kaczka pieczona to przepis na klasyczna polska kaczka z pieca — tu jedna linia domowa: cała kaczka z jabłkiem w brzuchu, majeranek, sól i pieprz, wolno w piecu aż skóra chrupiąca, a mięso soczyste. To ani pieczeń wieprzowa [schab pieczony](/pl/rezepte/schab-pieczony), ani duszona [golonka](/pl/rezepte/golonka), ani [żeberka pieczone](/pl/rezepte/zeberka). Przy [obiadzie niedzielnym](/pl/blog/obiad-niedzielny) bywa pieczeniem świątecznym — Tu zostają ilości i kroki. Przyprawa opisowo: [majeranek](/pl/blog/majeranek-leksykon). W diasporze często ptak niedzielny lub świąteczny, którego robi się rzadko i z szacunkiem.",
 shopDe:
 "Ganze Ente (frisch oder tiefgekühlt vollständig auftauen), säuerliche Äpfel, Majoran, Salz, Pfeffer, optional Zwiebel; etwas Flüssigkeit für die Form. Ente und gutes Majeranek oft im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt frische Ente: tiefgekühlt ehrlich benennen; Qualität laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) nur wo sinnvoll — nicht durch Schweinekamm ersetzen, sonst wird daraus [Schab pieczony](/de/rezepte/schab-pieczony). Keine Haxe und keine Rippen — sonst [Golonka](/de/rezepte/golonka) bzw. [Żeberka](/de/rezepte/zeberka).",
 shopPl:
 "Cała kaczka (świeża lub rozmrożona), jabłka kwaskowate, majeranek, sól, pieprz, opcjonalnie cebula; odrobina płynu do naczynia. Kaczka i dobry majeranek często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Brak świeżej: mrożona uczciwie; jakość według [zamienników](/pl/blog/zamienniki-skladnikow) tylko sensownie — nie zamieniać na schab, bo dryfuje w stronę [schab pieczony](/pl/rezepte/schab-pieczony). Bez golonki i żeber — inaczej [golonka](/pl/rezepte/golonka) lub [żeberka](/pl/rezepte/zeberka).",
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
 "Kaczka z pieca lubi diasporę świąteczną: jeden ptak dla gości, jabłko i majeranek ze spiżarni, czas pieca jako plan. Rzadko na tyle, by zrobić ją dobrze — nie jako codzienny hackbraten. Jakość przed trzema pieczeniami tego samego dnia. W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe. Kultura osobny farsz i osobne ilości.: [obiad niedzielny](/pl/blog/obiad-niedzielny). Pasujący sąsiedzi to [schab](/pl/rezepte/schab-pieczony), [golonka](/pl/rezepte/golonka).",
 mistakesDe:
 "Mit [Schab pieczony](/de/rezepte/schab-pieczony) verwechseln. Mit [Golonka](/de/rezepte/golonka) oder [Żeberka](/de/rezepte/zeberka) verwechseln. Nasse Haut; zu heiß austrocknen; keine Ruhezeit. Majoran-Lexikon bleibt [Majeranek](/de/blog/majeranek).",
 mistakesPl:
 "Mylenie z [schabem pieczonym](/pl/rezepte/schab-pieczony). Mylenie z [golonką](/pl/rezepte/golonka) lub [żeberkami](/pl/rezepte/zeberka). Mokra skóra; za mocne pieczenie; brak odpoczynku. Nie mieszać ilości i kroków z sąsiednim przepisem. nie. Leksykon: [majeranek](/pl/blog/majeranek-leksykon).",
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
 "Pieczeń rzymska ist das Rezept für den klassischen polnischen Ofen-Hackbraten — hier als eine klare Hauslinie: gemischtes Hack mit eingeweichtem Brötchen, Majeranek, hartgekochte Eier längs im Kern, als Laib gebacken bis die Scheiben den Ei-Schnitt zeigen. Das ist weder flache Pfannen-Frikadellen [Kotlet mielony](/de/rezepte/kotlet-mielony) noch gebackene Pastete [Pasztet](/de/rezepte/pasztet). Am [Sonntagsessen](/de/blog/sonntagsessen-polnisch) darf sie der Alltags-Festbraten sein  — Mengen und Schritte stehen oben im Rezept. Zum Feinmahlen hilft [Fleischwolf-Kaufberatung](/de/blog/fleischwolf-kaufberatung). In der Diaspora oft der Laib, den man samstags formt und sonntags nur noch schneidet.",
 originPl:
 "Pieczeń rzymska to przepis na klasyczna polska pieczeń mielona z pieca — tu jedna linia domowa: mielone z namoczoną bułką, majeranek, jajka na twardo wzdłuż środka, pieczona jako bochenek aż plastry pokazują jajko. To ani płaskie [kotlety mielone](/pl/rezepte/kotlet-mielony) z patelni, ani [pasztet](/pl/rezepte/pasztet). Przy [obiadzie niedzielnym](/pl/blog/obiad-niedzielny) bywa pieczeniem na co dzień-świątecznie — Tu zostają ilości i kroki. Mielenie opisowo: [wilk do mięsa](/pl/blog/wilk-do-miesa). W diasporze często bochenek z soboty, w niedzielę tylko kroje",
 shopDe:
 "Hack gemischt, alte Brötchen, Milch, Ei für die Masse, hartgekochte Eier für den Kern, Zwiebel, Majeranek, Salz, Pfeffer; optional Speck zum Umwickeln. Gutes Hack und Majoran oft im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt Brötchen oder Hack-Qualität: ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Keine flachen panierten Kotlets — sonst [Kotlet mielony](/de/rezepte/kotlet-mielony). Keine Leber-Pastetenmasse — sonst [Pasztet](/de/rezepte/pasztet). Panier-Technik: [Panieren-Guide](/de/blog/panieren-schabowy).",
 shopPl:
 "Mielone mieszane, czerstwe bułki, mleko, jajko do masy, jajka na twardo do środka, cebula, majeranek, sól, pieprz; opcjonalnie boczek. Dobre mięso i majeranek często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Brak bułki lub jakości: uczciwie według [zamienników](/pl/blog/zamienniki-skladnikow). Bez płaskich panierowanych kotletów — inaczej [kotlet mielony](/pl/rezepte/kotlet-mielony). Bez masy pasztetowej — inaczej [pasztet](/pl/rezepte/pasztet). Panierka opisowo: [panierowanie](/pl/blog/panierowanie-kotlet).",
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
 "Mylenie z [kotletem mielonym](/pl/rezepte/kotlet-mielony) (patelnia). Mylenie z [pasztetem](/pl/rezepte/pasztet). Za mokra masa; jajka nie na środku; za krótkie pieczenie. Nie mieszać ilości i kroków z sąsiednim przepisem. nie. Panierka zostaje przy [panierowaniu](/pl/blog/panierowanie-kotlet).",
 variantsDe:
 "Mit Speckmantel; ohne Ei-Kern (ehrlich benennen — Fokus bleibt Ofen-Laib); feinere Hackmischung. Passende Nachbarn sind [Kotlet mielony](/de/rezepte/kotlet-mielony), [Pasztet](/de/rezepte/pasztet). Guides: [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Fleischwolf](/de/blog/fleischwolf-kaufberatung), [Ersatzprodukte](/de/blog/ersatzprodukte-de), [Polenladen](/de/blog/polenladen-einkaufen).",
 variantsPl:
 "Z boczkiem; bez jajka w środku (nazwać uczciwie — fokus zostaje bochenek z pieca); drobniejsze mielone. Pasujący sąsiedzi to [kotlet mielony](/pl/rezepte/kotlet-mielony), [pasztet](/pl/rezepte/pasztet). Przewodniki: [obiad niedzielny](/pl/blog/obiad-niedzielny), [wilk do mięsa](/pl/blog/wilk-do-miesa), [zamienniki](/pl/blog/zamienniki-skladnikow), [sklep polski](/pl/blog/sklep-polski-zakupy).",
 },
};
