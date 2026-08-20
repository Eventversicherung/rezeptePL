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
 "Twaróg oder gut abgetropfter Speisequark, Mehl und Ei tragen die Masse — dazu Butter und Semmelbrösel zum Anrichten. Konsistenz und DE-Einkauf erklärt der [Twaróg-Guide](/de/blog/twarog-deutschland); die Route über den [Polenladen](/de/blog/polenladen-einkaufen) oft lohnt sich. Das sind keine gefüllten [Pierogi](/de/rezepte/pierogi/ruskie) — Leniwe werden geschnitten und gekocht, nicht gefaltet.",
 shopPl:
 "Twaróg lub dobrze odsączony Quark, mąka i jajko niosą masę — plus masło i bułka tarta do podania. Konsystencję i zakupy w DE opisuje [przewodnik po twarogu](/pl/blog/twarog-w-niemczech); trasa przez [sklep polski](/pl/blog/sklep-polski-zakupy) często się opłaca. To nie nadziewane [pierogi](/pl/rezepte/pierogi/ruskie) — leniwe kroisz i gotujesz, nie sklejasz.",
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
 vibeDe: "zwar schlicht, aber sättigend und in jeder Küche machbar",
 vibePl: "proste, ale sycące i wykonalne w każdej kuchni",
 originDe:
 "Der Name Kopytka bedeutet wörtlich kleine Hufe, denn die schräg geschnittenen Rautenstücke erinnern an die Hufe kleiner Tiere. Kartoffeln erreichten Polen zwar schon im 17. Jahrhundert, richtig verbreitet wurden sie aber erst im 19. Jahrhundert, und Kopytka in ihrer heutigen Form mit Kartoffel, Mehl und Ei tauchen erst in Kochbüchern des frühen 20. Jahrhunderts auf. Ihren festen Platz auf polnischen Tellern verdanken sie vor allem der Zeit nach dem Zweiten Weltkrieg, als die Kartoffel zur unverzichtbaren Grundlage der Alltagsküche wurde und die Milchbars der PRL-Ära Kopytka günstig neben Suppen und Koteletts anboten. In Poznań und der Region Wielkopolska heißen dieselben Klöße Szagówki, benannt nach der Redewendung „iść na szagę“, also schräg oder auf Umwegen gehen, ein Hinweis auf die charakteristische schräge Schnitttechnik. Kopytka ähneln italienischen Gnocchi stark im Grundrezept, fallen aber fester und kompakter aus, weil der Teig mehr Mehl und weniger Ei enthält als seine italienische Verwandte. Die Form ohne Rillen und Füllung unterscheidet sie klar von den großen, gefüllten [Pyzy](/de/rezepte/pyzy) und von den mit Kartoffelstärke gebundenen [Kluski śląskie](/de/rezepte/kluski-slaskie).",
 originPl:
 "Nazwa kopytka oznacza dosłownie małe kopytka, bo pokrojone skośnie romby przypominają kopyta niewielkich zwierząt. Ziemniaki trafiły do Polski już w XVII wieku, ale naprawdę rozpowszechniły się dopiero w XIX wieku, a kopytka w dzisiejszej formie z ziemniaka, mąki i jajka pojawiają się w książkach kucharskich na dobre dopiero na początku XX wieku. Stałe miejsce na polskich talerzach zawdzięczają zwłaszcza czasom po drugiej wojnie światowej, gdy ziemniak stał się podstawą codziennej diety, a bary mleczne czasów PRL serwowały kopytka tanio obok zup i kotletów. W Poznaniu i Wielkopolsce te same kluski nazywa się szagówkami, od powiedzenia „iść na szagę“, czyli iść na skos lub na przełaj, co odnosi się właśnie do charakterystycznego skośnego krojenia. Kopytka są bardzo bliskie włoskim gnocchi w podstawowym przepisie, ale wypadają bardziej zwarte i twardsze, bo ciasto zawiera więcej mąki i mniej jajka niż ich włoska kuzynka. Brak rowków i nadzienia odróżnia je jasno od dużych, nadziewanych [pyz](/pl/rezepte/pyzy) i od klusek związanych skrobią ziemniaczaną, [klusek śląskich](/pl/rezepte/kluski-slaskie).",
 shopDe:
 "Für den Teig reichen mehligkochende Kartoffeln, Mehl, Ei, Butter und Zwiebel, alles Grundzutaten aus dem Supermarkt. Eine kräftige Zwiebel-Butter-Note oder ein Gulasch dazu holst du dir oft passender im [Polenladen](/de/blog/polenladen-einkaufen). Wenn du regelmäßig Gulasch oder andere Schmorgerichte dazu servierst, hilft die [Dutch-Oven-Kaufberatung](/de/blog/dutch-oven-kaufberatung) bei der Wahl von Topf und Timing.",
 shopPl:
 "Do ciasta wystarczą mączyste ziemniaki, mąka, jajko, masło i cebula, wszystko podstawowe zakupy z marketu. Wyrazistą cebulę na maśle albo gulasz do tego często lepiej kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Jeśli regularnie podajesz do tego gulasz lub inne duszone mięso, [garnek do duszenia](/pl/blog/garnek-do-duszenia) pomoże wybrać właściwe naczynie i rozplanować czas.",
 techniqueDe:
 "Dampfe die gekochten Kartoffeln gründlich aus, bevor du Mehl und Ei untermengst, denn Restfeuchte macht den Teig klebrig und zwingt dich später zu mehr Mehl, als dem Geschmack gut tut. Der Teig sollte fest genug sein, um sich zu Rollen formen zu lassen, ohne an den Fingern zu haften. Schneide die Rollen schräg in Rauten, das gibt Kopytka ihre charakteristische Form und ihren Namen. Koche sie sanft in reichlich siedendem Wasser und nimm sie sofort heraus, sobald sie an die Oberfläche steigen, denn zu langes Kochen macht sie weich und lässt die Kanten aufreißen.",
 techniquePl:
 "Dobrze odparuj ugotowane ziemniaki, zanim dodasz mąkę i jajko, bo resztki wilgoci robią ciasto kleiste i zmuszają cię później do dosypywania większej ilości mąki, niż dobrze robi to smakowi. Ciasto powinno być na tyle zwarte, by dało się z niego formować wałki bez lepienia do rąk. Pokrój wałki skośnie na romby, to daje kopytkom ich charakterystyczną formę i nazwę. Gotuj je delikatnie w dużej ilości wrzącej wody i wyjmuj natychmiast, gdy wypłyną na powierzchnię, bo zbyt długie gotowanie rozmiękcza je i rozrywa brzegi.",
 serveDe:
 "Serviere Kopytka als Hauptbeilage mit Butterzwiebeln, [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy) oder einer kräftigen Pilzsoße, nicht als eigenständiges Gericht oder Snack nebenbei. Als regionale Alternative mit eigener Bindung stehen [Kluski śląskie](/de/rezepte/kluski-slaskie) bereit, wenn du etwas anderes zum Gulasch probieren möchtest.",
 servePl:
 "Podawaj kopytka jako główny dodatek z cebulą na maśle, [gulaszem wieprzowym](/pl/rezepte/gulasz-wieprzowy) albo wyrazistym sosem grzybowym, a nie jako samodzielne danie czy przekąskę. Regionalną alternatywą z własnym spoiwem są [kluski śląskie](/pl/rezepte/kluski-slaskie), jeśli chcesz spróbować czegoś innego do gulaszu.",
 diasporaDe:
 "In deutschen Küchen sind Kopytka die unkomplizierte Brücke zwischen zwei Küchen, weil sie mit Kartoffel, Mehl und Ei aus Zutaten bestehen, die ohnehin im Haus sind. Sie sind einfacher zu formen als die gefüllten [Pyzy](/de/rezepte/pyzy) und sättigender als Reis oder Nudeln, deshalb landen sie oft am [Sonntagsessen](/de/blog/sonntagsessen-polnisch)-Tisch, wenn deutsche Gäste zum ersten Mal Gulasch mit polnischer Beilage probieren.",
 diasporaPl:
 "W niemieckich kuchniach kopytka są prostym mostem między dwoma tradycjami kulinarnymi, bo składają się z ziemniaka, mąki i jajka, czyli zwykłych składników, które są w domu i tak. Są łatwiejsze do uformowania niż nadziewane [pyzy](/pl/rezepte/pyzy) i bardziej sycące niż ryż czy makaron, dlatego często trafiają na stół [obiadu niedzielnego](/pl/blog/obiad-niedzielny), gdy niemieccy goście po raz pierwszy próbują gulaszu z polskim dodatkiem.",
 mistakesDe:
 "Zu viel Mehl macht Kopytka hart und mehlig statt zart, meist weil die Kartoffeln vorher nicht gut genug ausgedampft wurden. Zu nasse Kartoffeln lassen den Teig dagegen zerfallen, sobald er ins Wasser kommt. Zu starkes, sprudelndes Kochen reißt die Oberfläche auf und macht sie klebrig. Forme deshalb zuerst eine kleine Testcharge, prüfe Textur und Kochzeit, und korrigiere Mehlmenge oder Hitze, bevor der ganze Teig geschnitten und gekocht ist.",
 mistakesPl:
 "Za dużo mąki robi kopytka twarde i mączyste, zamiast delikatnych, najczęściej dlatego, że ziemniaki nie były wcześniej dobrze odparowane. Za mokre ziemniaki z kolei sprawiają, że ciasto rozpada się od razu po wejściu do wody. Zbyt gwałtowne, burzące się gotowanie rozrywa powierzchnię i robi je kleiste. Uformuj więc najpierw małą partię próbną, sprawdź konsystencję i czas gotowania, a potem popraw ilość mąki lub siłę ognia, zanim pokroisz i ugotujesz całe ciasto.",
 variantsDe:
 "Spinat oder geriebene Rote Bete im Teig ändern nur die Farbe, ohne die Grundtechnik zu verändern, und ergeben ein hübsches Kontrastbild neben Gulasch. Wer die klassische Beilage vergleichen möchte, stellt Kopytka direkt neben [Kluski śląskie](/de/rezepte/kluski-slaskie), die mit Kartoffelstärke statt Mehl gebunden werden und eine charakteristische Kerbe in der Mitte tragen. Aufwendiger und mit Fleischfüllung sind die großen [Pyzy](/de/rezepte/pyzy), einen ruhigen Menürahmen für alle drei liefert das [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 variantsPl:
 "Szpinak albo starty burak w cieście zmieniają tylko kolor, bez zmiany podstawowej techniki, i dają efektowny kontrast na talerzu z gulaszem. Kto chce porównać klasyczne dodatki, stawia kopytka bezpośrednio obok [klusek śląskich](/pl/rezepte/kluski-slaskie), które wiąże się skrobią ziemniaczaną, a nie mąką, i które mają charakterystyczne wgłębienie na środku. Bardziej pracochłonne i z farszem mięsnym są duże [pyzy](/pl/rezepte/pyzy), a spokojną ramę menu dla wszystkich trzech daje [obiad niedzielny](/pl/blog/obiad-niedzielny).",
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
 "Vegetarisch ohne Speck, mit Pilzen, oder neben [Bigos](/de/rezepte/bigos) als weiteres Krautgericht. Ferment vertiefen: [Kiszenie](/de/blog/kiszenie-guide). Im [Polenladen](/de/blog/polenladen-einkaufen) findest du typische Spezialzutaten.",
 variantsPl:
 "Wegetariańskie bez boczku, z grzybami albo obok [bigosu](/pl/rezepte/bigos). Ferment: [kiszenie](/pl/blog/kiszenie-w-domu). W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności.",
 },

 "recipe-pyzy": {
 dishDe: "Pyzy mit Fleisch",
 dishPl: "Pyzy z mięsem",
 vibeDe: "groß, herzhaft gefüllt und ein echtes Sonntagsprojekt",
 vibePl: "duże, treściwie nadziewane i prawdziwy niedzielny projekt",
 originDe:
 "Wer in Poznań oder der Region Wielkopolska nach Pyzy fragt, bekommt etwas völlig anderes serviert als anderswo in Polen: dort meint der Name lockere, ungefüllte Hefeklöße, die über einem mit Leinentuch bespannten Topf gedämpft werden, auch Pampuchy oder Kluchy na łachu genannt. In den meisten anderen Regionen Polens, und so auch hier, sind Pyzy dagegen große Kartoffelklöße mit einer herzhaften Fleischfüllung, die vom aufwendigen Formen her an die litauisch-polnischen Cepeliny und Kartacze erinnern, dort wird der Teig allerdings meist aus rohen, geriebenen statt gekochten Kartoffeln gemacht. Die gekochte Kartoffelmasse macht klassische Pyzy milder und etwas leichter zu verarbeiten als die festeren Cepeliny. Aufwendiger als die einfachen, ungefüllten [Kopytka](/de/rezepte/kopytka) und deutlich herzhafter als die süßen [Knedle ze śliwkami](/de/rezepte/knedle-sliwki), sind Pyzy vor allem ein Gericht für Tage mit Zeit, klassisch am [Sonntagsessen](/de/blog/sonntagsessen-polnisch)-Tisch.",
 originPl:
 "Kto w Poznaniu albo Wielkopolsce zapyta o pyzy, dostanie coś zupełnie innego niż w resztek kraju: tam nazwa oznacza puszyste, nienadziewane kluski drożdżowe gotowane na parze nad garnkiem obwiązanym płótnem, znane też jako pampuchy albo kluchy na łachu. W większości innych regionów Polski, i tak też tutaj, pyzy to duże kluski ziemniaczane z treściwym farszem mięsnym, które sposobem formowania przypominają litewsko-polskie cepeliny i kartacze, tam jednak ciasto robi się najczęściej z surowych, tartych, a nie ugotowanych ziemniaków. Ugotowana masa ziemniaczana robi klasyczne pyzy łagodniejszymi i odrobinę łatwiejszymi w obróbce niż bardziej zwarte cepeliny. Bardziej pracochłonne niż proste, nienadziewane [kopytka](/pl/rezepte/kopytka) i wyraźnie treściwsze niż słodkie [knedle ze śliwkami](/pl/rezepte/knedle-sliwki), pyzy to przede wszystkim danie na dzień z czasem, klasycznie na stole [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
 shopDe:
 "Mehlig kochende Kartoffeln, Kartoffelstärke und Hackfleisch sowie Zwiebel und Butter tragen Teig und Füllung. Chargen und Feinmahlen von eigenem Fleisch erklärt die [Fleischwolf-Kaufberatung](/de/blog/fleischwolf-kaufberatung), wer größere Mengen vorbereitet, plant am besten gleich mit dem [Freezer-Guide](/de/blog/freezer-meal-prep) fürs Einfrieren einzelner Portionen.",
 shopPl:
 "Ziemniaki mączyste, skrobia ziemniaczana i mięso mielone oraz cebula i masło niosą ciasto i farsz. Partie i mielenie własnego mięsa opisuje [wilk do mięsa](/pl/blog/wilk-do-miesa), a kto przygotowuje większe ilości, od razu planuje z [mrożeniem pierogów](/pl/blog/mrozenie-pierogow) dla zamrożenia porcji na później.",
 techniqueDe:
 "Der Kartoffelteig muss fest genug sein, um die Fleischfüllung zuverlässig zu tragen, ohne beim Kochen zu reißen. Die Füllung sollte vollständig ausgekühlt sein, bevor sie in den Teig kommt, sonst erweicht sie ihn von innen. Forme gleichmäßige Kugeln, verschließe die Naht besonders sorgfältig mit angefeuchteten Fingern und koche sanft in leicht siedendem Wasser, denn zu wildes Kochen öffnet genau diese Nahtstelle als erstes.",
 techniquePl:
 "Ciasto ziemniaczane musi być na tyle zwarte, by pewnie unieść farsz mięsny bez pękania podczas gotowania. Farsz powinien być całkiem wystudzony, zanim trafi do ciasta, inaczej mięknie je od wewnątrz. Formuj równe kule, zamykaj szew wyjątkowo starannie wilgotnymi palcami i gotuj delikatnie w lekko wrzącej wodzie, bo zbyt gwałtowne gotowanie otwiera właśnie ten szew jako pierwszy.",
 serveDe:
 "Serviere Pyzy klassisch mit reichlich Butterzwiebeln, ein bis zwei Stück pro Person reichen wegen der Füllung meist schon aus. Die Beilage-Schwester ohne Füllung und ohne den Zeitaufwand findest du bei [Kopytka](/de/rezepte/kopytka).",
 servePl:
 "Podawaj pyzy klasycznie z dużą ilością cebuli na maśle, jedna lub dwie sztuki na osobę zwykle wystarczą ze względu na farsz. Siostrę bez nadzienia i bez tego nakładu czasu znajdziesz przy [kopytkach](/pl/rezepte/kopytka).",
 diasporaDe:
 "In Deutschland sind Pyzy weniger bekannt als Pierogi, gerade deshalb eignen sie sich gut als Familienprojekt am Wochenende, bei dem Kinder die Kugeln formen und Erwachsene die Nahtstelle verschließen. Der Zeitaufwand passt gut in den Rhythmus des [Sonntagsessens](/de/blog/sonntagsessen-polnisch), wenn ohnehin ein ganzer Nachmittag für die Küche eingeplant ist.",
 diasporaPl:
 "W Niemczech pyzy są mniej znane niż pierogi, właśnie dlatego dobrze sprawdzają się jako rodzinny projekt na weekend, w którym dzieci formują kulki, a dorośli zamykają szew. Nakład czasu wpisuje się dobrze w rytm [obiadu niedzielnego](/pl/blog/obiad-niedzielny), gdy na kuchnię jest zaplanowane całe popołudnie.",
 mistakesDe:
 "Zu weicher Teig hält die Füllung nicht und reißt im Wasser, zu nasse oder noch warme Füllung erweicht ihn zusätzlich von innen, und zu starkes, sprudelndes Kochen öffnet die Nahtstelle. Teste deshalb eine einzelne Pyza, bevor du die ganze Charge formst, und korrigiere Mehlmenge oder Kühlzeit der Füllung frühzeitig.",
 mistakesPl:
 "Za miękkie ciasto nie utrzyma farszu i pęka w wodzie, za mokry albo wciąż ciepły farsz dodatkowo mięknie je od wewnątrz, a zbyt gwałtowne, burzące się gotowanie otwiera szew. Przetestuj więc jedną pyzę, zanim uformujesz całą partię, i wcześnie popraw ilość mąki lub czas chłodzenia farszu.",
 variantsDe:
 "Mit Pilzfüllung entsteht eine vegetarische Version, mit [Kopytka](/de/rezepte/kopytka) eine deutlich schnellere Alternative ohne Füllen und ohne den Aufwand der Nahtstelle. Würzen der Füllung hilft das [Majeranek-Lexikon](/de/blog/majeranek), wer größere Mengen für später vorbereitet, ordnet Chargen und Einfrieren mit dem [Freezer-Guide](/de/blog/freezer-meal-prep). Wer die verwandte litauisch-polnische Technik mit rohem Kartoffelteig kennenlernen möchte, findet damit ein spürbar zäheres Gegenstück in Cepeliny und Kartacze.",
 variantsPl:
 "Z farszem grzybowym powstaje wersja wegetariańska, a z [kopytkami](/pl/rezepte/kopytka) wyraźnie szybsza alternatywa bez nadziewania i bez trudu z szwem. Przy przyprawianiu farszu pomaga [majeranek](/pl/blog/majeranek-leksykon), a kto przygotowuje większe partie na później, porządkuje partie i mrożenie z [mrożeniem pierogów](/pl/blog/mrozenie-pierogow). Kto chce poznać pokrewną technikę litewsko-polską z surowego ciasta ziemniaczanego, znajdzie w cepelinach i kartaczach wyraźnie bardziej zbite odpowiedniki.",
 },

 "recipe-zrazy": {
 dishDe: "Zrazy zawijane",
 dishPl: "Zrazy zawijane",
 vibeDe: "festlich, langsam geschmort und ein Klassiker der Adelsküche",
 vibePl: "odświętne, długo duszone i klasyk kuchni szlacheckiej",
 originDe:
 "Der Name Zrazy kommt vom altpolnischen Verb zrazić, ein Stück von einem größeren Braten abschneiden, und beschreibt ursprünglich einfach dünne Fleischscheiben, nicht unbedingt gerollte. Zrazy zählen zu den ältesten Gerichten der polnischen Adelsküche und werden zweimal in Adam Mickiewiczs Nationalepos Pan Tadeusz aus dem 19. Jahrhundert erwähnt, als besonders geschätztes Frühstücksgericht bei einer festlichen Tafel. Die traditionellen, ungerollten Zrazy, sogenannte Suropieki, wurden einfach in Zwiebel- oder Pilzsoße geschmort. Die heute bekanntere gerollte Variante mit Füllung aus Senf, Speck und Gewürzgurke setzte sich erst im 19. Jahrhundert durch, wahrscheinlich unter dem Einfluss der französischen Küche, wo ähnlich gerollte Fleischröllchen als Paupiettes schon seit dem 17. Jahrhundert bekannt waren. Das erste schriftlich überlieferte polnische Rezept für gerollte Zrazy stammt aus dem Kochbuch von Lucyna Ćwierczakiewiczowa aus der zweiten Hälfte des 19. Jahrhunderts. Schlesisch inspiriert und sonntagstauglich sind Zrazy ein naher Partner zu [Kluski śląskie](/de/rezepte/kluski-slaskie) und einer kräftigen Soße, deutlich festlicher als der schnellere [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy), mit dem sie den gleichen Schmor-Gedanken teilen. Den passenden Rahmen dafür setzt das [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 originPl:
 "Nazwa zrazy pochodzi od staropolskiego czasownika zrazić, czyli odciąć kawałek od większej pieczeni, i pierwotnie opisywała po prostu cienkie plastry mięsa, niekoniecznie zawijane. Zrazy należą do najstarszych dań kuchni szlacheckiej i zostały dwukrotnie wspomniane w narodowej epopei Adama Mickiewicza Pan Tadeusz z XIX wieku, jako danie śniadaniowe bardzo cenione podczas odświętnej uczty. Tradycyjne, niezawijane zrazy, tak zwane suropieki, po prostu duszono w sosie cebulowym albo grzybowym. Znana dziś bardziej zawijana wersja z farszem z musztardy, boczku i ogórka kiszonego utrwaliła się dopiero w XIX wieku, prawdopodobnie pod wpływem kuchni francuskiej, gdzie podobnie zwijane roladki mięsne, tak zwane paupiettes, znano już od XVII wieku. Pierwszy spisany polski przepis na zrazy zawijane pochodzi z książki kucharskiej Lucyny Ćwierczakiewiczowej z drugiej połowy XIX wieku. Inspirowane śląsko i niedzielne, zrazy są bliskim partnerem [klusek śląskich](/pl/rezepte/kluski-slaskie) i wyrazistego sosu, wyraźnie bardziej odświętne niż szybszy [gulasz wieprzowy](/pl/rezepte/gulasz-wieprzowy), z którym łączy je ta sama logika długiego duszenia. Odpowiednią ramę daje [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 shopDe:
 "Nimm dünn geschnittene Rinderplätzchen, Senf, Speck und Gewürzgurken sowie Brühe und Majoran. Ein Topf mit gut schließendem Deckel hält die Wärme während der langen Schmorzeit gleichmäßig, Kaufkriterien dafür liefert der [Dutch Oven](/de/blog/dutch-oven-kaufberatung), zum Würzen hilft das [Majeranek-Lexikon](/de/blog/majeranek). Dieselbe Roll-Logik mit anderer Füllung aus Zwiebel und Speck findet sich bei der [Rolada śląska](/de/rezepte/rolada-slaska).",
 shopPl:
 "Weź cienko pokrojone plastry wołowiny, musztardę, boczek i ogórki kiszone oraz bulion i majeranek. Garnek z dobrze przylegającą pokrywką utrzymuje ciepło równomiernie przez długie duszenie, kryteria wyboru opisuje [dutch oven](/pl/blog/garnek-do-duszenia), a przy przyprawianiu pomaga [majeranek](/pl/blog/majeranek-leksykon). Tę samą logikę zwijania z innym farszem z cebuli i boczku znajdziesz w [roladzie śląskiej](/pl/rezepte/rolada-slaska).",
 techniqueDe:
 "Klopfe das Fleisch gleichmäßig dünn, damit es beim langen Schmoren zart wird, ohne an den Rändern zu zerfallen. Streiche Senf auf, rolle Speck und Gurke fest ein und binde die Roulade sorgfältig, denn eine locker gerollte Roulade öffnet sich beim scharfen Anbraten fast immer als erstes. Schmore anschließend lange bei niedriger Hitze, bis sich das Fleisch mühelos mit der Gabel zerteilen lässt, und lasse die Soße einkochen, bis sie den Löffel trägt, ohne mehlig zu wirken.",
 techniquePl:
 "Rozbij mięso równomiernie cienko, żeby podczas długiego duszenia stało się miękkie, a nie rozpadło się na brzegach. Posmaruj musztardą, szczelnie zwiń z boczkiem i ogórkiem i dokładnie związaj roladkę, bo luźno zwinięta roladka rozkleja się przy ostrym obsmażaniu prawie zawsze pierwsza. Następnie duś długo na małym ogniu, aż mięso da się swobodnie rozłożyć widelcem, i zredukuj sos, aż zacznie nieść łyżkę, bez mącznej ciężkości.",
 serveDe:
 "Serviere Zrazy mit [Kluski śląskie](/de/rezepte/kluski-slaskie), Kartoffeln oder Buchweizengrütze und gib die Soße großzügig dazu, sie trägt den ganzen Teller. Traditionell dazu passen Rote-Bete-Salat und ein Glas Rotwein. Eine deutlich schnellere Schmor-Alternative mit ähnlichem Prinzip ist [Gulasz](/de/rezepte/gulasz-wieprzowy).",
 servePl:
 "Podawaj zrazy z [kluskami śląskimi](/pl/rezepte/kluski-slaskie), ziemniakami albo kaszą gryczaną i dolewaj sos hojnie, on niesie cały talerz. Tradycyjnie pasują do tego buraczki i lampka czerwonego wina. Wyraźnie szybszą alternatywą duszenia o podobnej zasadzie jest [gulasz](/pl/rezepte/gulasz-wieprzowy).",
 diasporaDe:
 "Zrazy brauchen deutlich länger als Gulasz und wirken dadurch festlicher, gut geeignet also, wenn Gäste kommen und wirklich Zeit für den Sonntag da ist. Weil sich Fleisch und Füllung schon am Vortag vorbereiten lassen, bleibt am eigentlichen Sonntag nur noch das geduldige Schmoren übrig. Plane sie bewusst in den Rahmen des [Sonntagsessens](/de/blog/sonntagsessen-polnisch).",
 diasporaPl:
 "Zrazy potrzebują znacznie więcej czasu niż gulasz i wyglądają dzięki temu odświętniej, dobrze więc sprawdzają się, gdy są goście i naprawdę jest czas na niedzielę. Ponieważ mięso i farsz można przygotować już dzień wcześniej, w sam dzień zostaje tylko cierpliwe duszenie. Planuj je świadomie w ramach [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
 mistakesDe:
 "Zu kurze Schmorzeit lässt das Fleisch zäh statt zart, zu wenig Flüssigkeit lässt die Soße anbrennen, und locker gebundene Rollen verlieren beim Anbraten ihre Form und die Füllung. Binde die Rouladen deshalb fest, gib genügend Brühe dazu und lass dem Topf wirklich Zeit, ganz im Rhythmus eines ruhigen [Sonntagsessens](/de/blog/sonntagsessen-polnisch).",
 mistakesPl:
 "Za krótkie duszenie zostawia mięso twarde, a nie miękkie, za mało płynu sprawia, że sos się przypala, a luźno związane roladki tracą podczas obsmażania kształt i farsz. Mocno zwiąż roladki, dolej wystarczająco bulionu i daj garnkowi naprawdę czas, w rytmie spokojnego [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
 variantsDe:
 "Mit Pilzen statt Gurke in der Füllung entsteht eine der ältesten Suropieki-Varianten nahe an der Originalversion, mit [Gulasz](/de/rezepte/gulasz-wieprzowy) eine deutlich schnellere Schmor-Alternative für Wochentage. Als Beilage passen klassisch [Kluski śląskie](/de/rezepte/kluski-slaskie), beim Würzen hilft das [Majeranek-Lexikon](/de/blog/majeranek). Wer eine Roulade mit Zwiebel-Speck-Füllung ohne die saure Gurkennote probieren möchte, findet sie bei der [Rolada śląska](/de/rezepte/rolada-slaska).",
 variantsPl:
 "Z grzybami zamiast ogórka w farszu powstaje jedna z najstarszych wersji suropieków, bliska oryginałowi, a z [gulaszem](/pl/rezepte/gulasz-wieprzowy) wyraźnie szybsza alternatywa na dzień powszedni. Jako dodatek klasycznie pasują [kluski śląskie](/pl/rezepte/kluski-slaskie), przy przyprawianiu pomaga [majeranek](/pl/blog/majeranek-leksykon). Kto chce spróbować roladki z farszem cebulowo-boczkowym bez kwaskowej nuty ogórka, znajdzie ją w [roladzie śląskiej](/pl/rezepte/rolada-slaska).",
 },

 "recipe-makowiec": {
 dishDe: "Makowiec",
 dishPl: "Makowiec",
 vibeDe: "gerollt, mohnig, geduldig gebacken und ein fester Programmpunkt am Heiligabend",
 vibePl: "zwinięty, makowy, cierpliwie pieczony i stały punkt kolacji wigilijnej",
 originDe:
 "Mohn erreichte Polen im Mittelalter über Handelswege aus dem Schwarzmeerraum, unter anderem über Lublin, wo genuesische und venezianische Kaufleute exotische Waren wie Mohn, Pfeffer und Safran ins Landesinnere brachten. In der slawischen Volksüberlieferung galt Mohn wegen seiner unzähligen kleinen Samen als Zeichen von Fruchtbarkeit und Überfluss, außerdem schrieb man ihm eine Verbindung zwischen den Lebenden und den Verstorbenen zu, weshalb Mohngerichte lange auch zu Trauerfeiern gehörten. Die Idee, Mohn zu einer Rolle aus Hefeteig zu verarbeiten, wird oft mit einer Anekdote verknüpft: 1681 soll der Hofbäcker von König Jan III. Sobieski eine riesige Mohnstrudel mit dem Bildnis der Königin Marysieńka gebacken haben, so groß und schwer, dass sie mit einem Schlitten transportiert werden musste. Der heutige Makowiec in seiner bekannten Form etablierte sich vor allem im 18. und 19. Jahrhundert, als Zucker und Bäckerhefe leichter verfügbar wurden, in manchen Regionen setzte er sich sogar erst nach dem Zweiten Weltkrieg durch, mitgebracht von Umsiedlern aus den polnischen Ostgebieten. Bis heute bleibt Makowiec eine eigenständige Form neben anderen Mohngerichten der Wigilia wie der Weizen-Mohn-Süßspeise [Kutia](/de/rezepte/kutia), dort schwimmen ganze Weizenkörner in einer Mohn-Honig-Mischung, hier trägt ein gerollter Hefeteig eine dichte, streichfähige Mohnmasse.",
 originPl:
 "Mak trafił do Polski w średniowieczu szlakami handlowymi z basenu Morza Czarnego, między innymi przez Lublin, dokąd genueńscy i wenecjańscy kupcy przywozili egzotyczne towary, takie jak mak, pieprz czy szafran. W słowiańskich wierzeniach ludowych mak, ze względu na tysiące drobnych ziaren w makówce, symbolizował płodność i dostatek, a przypisywano mu też moc łączenia świata żywych ze światem umarłych, dlatego potrawy z makiem długo towarzyszyły również stypom. Pomysł zawinięcia maku w roladę z ciasta drożdżowego wiąże się często z anegdotą o dworze Jana III Sobieskiego: w 1681 roku nadworny piekarz miał upiec ogromną struclę z wizerunkiem królowej Marysieńki, tak wielką i ciężką, że do przewiezienia potrzebne były sanie. Dzisiejszy makowiec w znanej formie utrwalił się głównie w XVIII i XIX wieku, gdy cukier i drożdże piekarskie stały się łatwiej dostępne, w niektórych regionach zadomowił się nawet dopiero po drugiej wojnie światowej, przywieziony przez przesiedleńców z terenów wschodnich. Do dziś makowiec zostaje osobną formą wśród innych wigilijnych dań z makiem, takich jak pszenna [kutia](/pl/rezepte/kutia), tam całe ziarna pszenicy pływają w mieszance maku i miodu, tutaj zwinięte ciasto drożdżowe niesie gęstą, smarowną masę makową.",
 shopDe:
 "Für Teig und Füllung brauchst du blauen Mohn, am besten frisch gemahlen oder fertig gemahlen aus dem [Polenladen](/de/blog/polenladen-einkaufen), dazu Mehl, Frischhefe, Milch, Butter, Eier und Zucker, Rosinen sind optional. Achte beim Mohn auf ein möglichst frisches Mahldatum, denn gemahlener Mohn verliert nach einigen Wochen an Aroma und wird schneller ranzig. Wer die Feuchtigkeit der Masse noch nicht einschätzen kann, findet ausführliche Hinweise im [Makowiec-Technik-Guide](/de/blog/makowiec-technik), der auch den Platz des Kuchens im [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan) einordnet.",
 shopPl:
 "Na ciasto i masę potrzebujesz niebieskiego maku, najlepiej świeżo zmielonego albo gotowego z [polskiego sklepu](/pl/blog/sklep-polski-zakupy), do tego mąki, świeżych drożdży, mleka, masła, jajek i cukru, rodzynki są opcjonalne. Przy maku zwróć uwagę na możliwie świeżą datę zmielenia, bo zmielony mak po kilku tygodniach traci aromat i szybciej jełczeje. Kto nie jest jeszcze pewny właściwej konsystencji masy, znajdzie dokładne wskazówki w [technice makowca](/pl/blog/makowiec-technika), który pokazuje też miejsce ciasta w [menu wigilijnym](/pl/blog/menu-wigilijne).",
 techniqueDe:
 "Die Mohnmasse muss vor dem Füllen streichfähig, aber nicht flüssig sein, sonst läuft sie beim Rollen aus dem Teig heraus. Der Hefeteig sollte weich und elastisch bleiben und wirklich Zeit zum Gehen bekommen, in einem zu kalten Raum verdoppelt sich die Gehzeit locker. Beim Ausrollen lohnt sich ein Randabstand von etwa zwei Zentimetern, damit beim Rollen keine Masse seitlich austritt, und die fertige Rolle kommt mit der Nahtstelle nach unten aufs Blech. Backe bei mittlerer Hitze, denn ein zu heißer Ofen bräunt die Kruste, während der Kern innen roh bleibt, und schneide erst, wenn der Kuchen vollständig ausgekühlt ist, sonst zerfällt die Spirale.",
 techniquePl:
 "Masa makowa musi być przed nadzieniem smarowna, ale nie płynna, inaczej wypłynie z ciasta podczas zwijania. Ciasto drożdżowe powinno zostać miękkie i elastyczne i naprawdę dostać czas na wyrastanie, bo w chłodnym pomieszczeniu ten czas z łatwością się podwaja. Przy wałkowaniu warto zostawić około dwóch centymetrów zapasu od brzegu, żeby masa nie wypłynęła bokiem podczas zwijania, a gotową roladę układa się na blasze łączeniem do dołu. Piecz w średniej temperaturze, bo za gorący piekarnik przypala skórkę, a środek zostaje surowy, i krój dopiero, gdy ciasto całkiem wystygnie, inaczej spirala się rozpada.",
 serveDe:
 "Serviere Makowiec in Scheiben, oft mit etwas Puderzucker bestäubt, klassisch als süßer Abschluss nach klarem [Barszcz](/de/rezepte/barszcz-czerwony) mit [Uszka](/de/rezepte/uszka). Am Vortag gebacken lässt er sich am 24. Dezember einfach nur noch aufschneiden, das entlastet den ohnehin vollen Tag. Wer zwei Süßspeisen nebeneinander servieren möchte, stellt Makowiec neben den cremigen [Sernik](/de/rezepte/sernik) auf den Tisch, beide ergänzen sich gut, weil der eine mohnig und trocken bleibt, der andere cremig und feucht.",
 servePl:
 "Podawaj makowiec w plastrach, często oprószony cukrem pudrem, klasycznie jako słodkie zakończenie po klarownym [barszczu](/pl/rezepte/barszcz-czerwony) z [uszkami](/pl/rezepte/uszka). Upieczony dzień wcześniej wystarczy 24 grudnia tylko pokroić, co odciąża i tak już pełen dzień. Kto chce postawić na stole dwa desery naraz, stawia makowiec obok kremowego [sernika](/pl/rezepte/sernik), bo oba ciasta się dobrze uzupełniają, jedno makowe i zbite, drugie kremowe i wilgotne.",
 diasporaDe:
 "In Deutschland rettet ein früher Backtag oft den 24. Dezember: Der Duft von frisch gebackenem Mohnkuchen zieht schon am 23. durch die Wohnung, während am eigentlichen Feiertag nur noch angerichtet werden muss. Fertiger Makowiec aus dem Regal ist für viele Familien ein Notbehelf für stressige Jahre, kein Ersatz für die eigene Technik, wie der [Makowiec-Technik-Guide](/de/blog/makowiec-technik) im Detail zeigt. Kinder dürfen beim Mohnrühren und beim Bestreichen mit Ei helfen, das Rollen und der heiße Ofen bleiben Erwachsenensache.",
 diasporaPl:
 "W Niemczech wcześniejszy dzień pieczenia często ratuje 24 grudnia: zapach świeżo pieczonego makowca unosi się po domu już 23 grudnia, a w sam dzień świąt zostaje tylko podanie na stół. Gotowy makowiec ze sklepu bywa dla wielu rodzin ratunkiem w gorączce przygotowań, a nie zamiennikiem własnej techniki, co dokładnie opisuje [technika makowca](/pl/blog/makowiec-technika). Dzieci mogą pomagać przy mieszaniu masy makowej i smarowaniu jajkiem, zwijanie rolady i gorący piekarnik zostają przy dorosłych.",
 mistakesDe:
 "Eine zu trockene Mohnmasse lässt sich schlecht verstreichen und reißt beim Rollen, während eine zu feuchte Masse den Teig von innen aufweicht. Zu viel Mehl im Teig macht die Krume trocken und schwer, ein zu heißer Ofen bräunt die Außenseite, bevor der Kern durchgebacken ist. Wer zu früh anschneidet, quetscht die noch warme Spirale platt, deshalb lohnt sich Geduld bis zum vollständigen Auskühlen. Beim Füllen sollte immer ein Rand frei bleiben, sonst quillt die Masse beim Rollen seitlich heraus.",
 mistakesPl:
 "Za sucha masa makowa źle się rozsmarowuje i pęka podczas zwijania, a za mokra rozmiękcza ciasto od wewnątrz. Za dużo mąki w cieście robi miękisz suchy i ciężki, zbyt gorący piekarnik przypala powierzchnię, zanim środek się dopiecze. Kto kroi za wcześnie, przygniata jeszcze ciepłą spiralę na płasko, dlatego warto uzbroić się w cierpliwość do pełnego wystudzenia. Przy nadziewaniu zawsze trzeba zostawić wolny brzeg, inaczej masa wypłynie bokiem podczas zwijania.",
 variantsDe:
 "Mit Rosinen oder einem dünnen Zuckerguss verändert sich der Charakter nur leicht, kleinere Rollen eignen sich gut, wenn mehrere Sorten Festtagsgebäck auf den Tisch sollen. Ganz anderes Festtagsgebäck sind die knusprigen [Faworki](/de/rezepte/faworki), deren Technik der [Faworki-Technik-Guide](/de/blog/faworki-technik) erklärt. Der cremige [Sernik](/de/rezepte/sernik) bleibt trotz gemeinsamer Festtagsrolle ein komplett anderes Gericht, ebenso der Hefegugelhupf [Babka](/de/rezepte/babka) und der würzige Honigkuchen [Piernik](/de/rezepte/piernik). Wer Mohn lieber in Suppenform mag, findet ihn in der Weizen-Mohn-Süßspeise [Kutia](/de/rezepte/kutia).",
 variantsPl:
 "Z rodzynkami albo z cienkim lukrem charakter ciasta zmienia się tylko odrobinę, mniejsze rolady sprawdzają się dobrze, gdy na stole ma się zmieścić kilka rodzajów świątecznych wypieków. Zupełnie innym świątecznym wypiekiem są chrupiące [faworki](/pl/rezepte/faworki), których technikę opisuje [technika faworków](/pl/blog/faworki-technika). Kremowy [sernik](/pl/rezepte/sernik) zostaje mimo wspólnej roli świątecznej zupełnie innym daniem, podobnie jak drożdżowa [babka](/pl/rezepte/babka) i korzenny [piernik](/pl/rezepte/piernik). Kto woli mak w formie na łyżkę, znajdzie go w pszennej [kucji](/pl/rezepte/kutia).",
 },

 "recipe-uszka": {
 dishDe: "Uszka mit Pilzen",
 dishPl: "Uszka z grzybami",
 vibeDe: "winzig, dicht gefüllt mit Waldpilzen und immer im Duett mit klarem Barszcz",
 vibePl: "malutkie, gęsto nadziewane grzybami leśnymi i zawsze w duecie z klarownym barszczem",
 originDe:
 "Uszka gehören zu den ältesten belegten Pierogi-Formen Polens: Schon Stanisław Czerniecki beschreibt 1682 in seinem Kochbuch Compendium Ferculorum, der ersten gedruckten polnischen Kochbuchsammlung, kleine, mit Pilzen gefüllte Teigtaschen, die zu Barszcz gereicht wurden. Der Name kommt von der charakteristischen Form: Beim Falten und Zusammendrücken der Ecken entsteht eine kleine Ausbuchtung, die tatsächlich an ein Ohr erinnert, ganz ähnlich wie bei den italienischen Tortellini, allerdings bleibt der Teig bei Uszka deutlich weicher und wird selten mit Sauce serviert. Verwandte Formen finden sich in der ukrainischen und belarussischen Küche als wuszka beziehungsweise wuschki sowie in der jüdischen Küche als Kreplach, die traditionell zum Laubhüttenfest gegessen werden, ein Hinweis darauf, wie eng die Küchen der einstigen polnisch-litauischen Adelsrepublik miteinander verflochten waren. In vielen Familien versteckt man ein einzelnes Uszko ohne Füllung oder mit einer Münze in der Suppe, wer es findet, soll im kommenden Jahr besonderes Glück haben, ein Brauch, der eng mit dem festlichen Charakter der Wigilia verbunden ist.",
 originPl:
 "Uszka należą do najstarszych udokumentowanych form pierogów w Polsce: już w 1682 roku Stanisław Czerniecki w Compendium Ferculorum, pierwszej drukowanej polskiej książce kucharskiej, opisuje małe pierożki z grzybami podawane do barszczu. Nazwa pochodzi od charakterystycznej formy: podczas składania i zaciskania rożków powstaje niewielkie wybrzuszenie, które naprawdę przypomina ucho, podobnie jak przy włoskich tortellini, choć ciasto uszek zostaje znacznie miększe i rzadko podaje się je z sosem. Podobne formy znajdziemy w kuchni ukraińskiej i białoruskiej jako wuszka, a także w kuchni żydowskiej jako kreplach, tradycyjnie jedzone w Święto Sukkot, co pokazuje, jak silnie przenikały się kuchnie dawnej Rzeczypospolitej. W wielu rodzinach do zupy chowa się jedno uszko bez farszu albo z monetą w środku, a kto je znajdzie, ma mieć szczęście w nadchodzącym roku, zwyczaj mocno związany ze świątecznym charakterem Wigilii.",
 shopDe:
 "Getrocknete Borowiki oder eine Mischung getrockneter Waldpilze bekommst du am zuverlässigsten im [Polenladen](/de/blog/polenladen-einkaufen), dazu Zwiebel, Mehl, Ei und etwas Öl für Teig und Füllung. Den klaren Barszcz kochst du am besten getrennt nach dem [Barszcz-Rezept](/de/rezepte/barszcz-czerwony), die Uszka kommen erst beim Servieren in die Schale. Wie sich der Teig richtig anfühlt und wie lange er ruhen sollte, zeigt der [Pierogi-Teig-Guide](/de/blog/pierogi-teig).",
 shopPl:
 "Suszone borowiki albo mieszankę suszonych grzybów leśnych najpewniej kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), do tego cebulę, mąkę, jajko i odrobinę oleju na ciasto i farsz. Klarowny barszcz najlepiej ugotować osobno według [przepisu na barszcz](/pl/rezepte/barszcz-czerwony), uszka trafiają do miski dopiero przy podawaniu. Jak powinno wyglądać dobre ciasto i jak długo powinno odpoczywać, pokazuje [przewodnik po cieście na pierogi](/pl/blog/ciasto-na-pierogi).",
 techniqueDe:
 "Die Pilzfüllung muss trocken geschmort und vollständig ausgekühlt sein, bevor sie auf den Teig kommt, sonst reißt die dünne Naht beim Kochen auf. Steche für Uszka deutlich kleinere Kreise aus als für gefüllte Pierogi, feuchte die Ränder leicht an und drücke die Ecken fest zu kleinen Öhrchen zusammen. Gare sie in leicht siedendem, nicht sprudelndem Wasser, bis sie an die Oberfläche steigen, und führe sie erst im letzten Moment mit dem heißen Barszcz zusammen, sonst weicht der Teig auf und trübt gleichzeitig die klare Suppe.",
 techniquePl:
 "Farsz grzybowy musi być duszony na sucho i całkiem wystudzony, zanim trafi na ciasto, inaczej cienki szew pęka podczas gotowania. Do uszek wykrawaj wyraźnie mniejsze kółka niż na nadziewane pierogi, delikatnie zwilż brzegi i mocno zaciśnij rożki w małe uszka. Gotuj w lekko wrzącej, nie burzącej się wodzie, aż wypłyną na powierzchnię, i połącz je z gorącym barszczem dosłownie w ostatniej chwili, inaczej ciasto mięknie i jednocześnie mętnieje klarowna zupa.",
 serveDe:
 "Zur Wigilia gehören Uszka als fester Teil des ersten Gangs im klaren [Barszcz](/de/rezepte/barszcz-czerwony), du kannst sie aber auch pur mit brauner Butter und Schnittlauch servieren. Nach der Suppe folgt bei vielen Familien der warme Fischgang mit [Karp](/de/rezepte/karp), eine verwandte Form mit Panade statt gekochtem Teig bietet [Krokiety](/de/rezepte/krokiety).",
 servePl:
 "Na Wigilii uszka są stałym elementem pierwszego dania w klarownym [barszczu](/pl/rezepte/barszcz-czerwony), można je jednak podać też same, z rumianym masłem i szczypiorkiem. Po zupie w wielu domach następuje ciepła ryba, [karp](/pl/rezepte/karp), a pokrewną formę z panierką zamiast gotowanego ciasta znajdziesz przy [krokietach](/pl/rezepte/krokiety).",
 diasporaDe:
 "Am 23. Dezember lassen sich Uszka gut formen und einfrieren oder kühl lagern, am 24. müssen sie dann nur noch gekocht werden, das entlastet den Heiligabend erheblich neben Barszcz und [Makowiec](/de/rezepte/makowiec). Kinder helfen gern beim Füllen der kleinen Teigtaschen, das feste Verschließen der Naht braucht aber etwas Übung und Geduld.",
 diasporaPl:
 "23 grudnia można spokojnie lepić uszka i mrozić je albo trzymać w chłodzie, a 24 grudnia zostaje już tylko ugotowanie, co znacznie odciąża Wigilię obok barszczu i [makowca](/pl/rezepte/makowiec). Dzieci lubią pomagać przy nakładaniu farszu, samo szczelne zamykanie szwu wymaga jednak trochę wprawy i cierpliwości.",
 mistakesDe:
 "Zu nasse Füllung reißt die Naht schon beim Formen oder spätestens beim Kochen auf. Zu große Uszka brauchen länger im Wasser und öffnen sich dabei leichter, kleine, gleichmäßige Stücke garen zuverlässiger. Zu wildes, sprudelndes Kochen öffnet die Öhrchen zusätzlich. Uszka stundenlang in heißer Suppe liegen zu lassen macht den Teig weich und trübt den sonst klaren Barszcz, deshalb erst kochen und abtropfen lassen, dann erst mit der Suppe zusammenführen.",
 mistakesPl:
 "Za mokry farsz rozrywa szew jeszcze podczas formowania albo najpóźniej w garnku. Za duże uszka gotują się dłużej i łatwiej się otwierają, małe, równe sztuki gotują się pewniej. Zbyt gwałtowne, burzące się gotowanie dodatkowo otwiera uszka. Trzymanie ich godzinami w gorącej zupie rozmiękcza ciasto i mętnieje zwykle klarowny barszcz, więc najpierw ugotuj i odcedź, a dopiero potem połącz z zupą.",
 variantsDe:
 "Mit einem Anteil Sauerkraut in der Füllung entsteht eine würzigere, säuerliche Variante, in manchen Familien landet auch reine Zwiebelfüllung in den Öhrchen für Gäste ohne Pilzvorliebe. Fertige Uszka aus dem Kühlregal sind ein akzeptabler Notfall an stressigen Tagen, ersetzen aber nicht das selbst gekochte Aroma. Mehr zur Geschichte der Suppe liefert der Artikel [Barszcz-Technik](/de/blog/barszcz-technik), zum Teiggefühl hilft der [Pierogi-Teig-Guide](/de/blog/pierogi-teig).",
 variantsPl:
 "Z dodatkiem kapusty kiszonej w farszu powstaje bardziej wyrazista, kwaskowata wersja, w niektórych rodzinach do uszek trafia też sam farsz cebulowy dla gości, którzy nie przepadają za grzybami. Gotowe uszka z chłodni to akceptowalny ratunek w gorączce świąt, nie zastąpią jednak aromatu z własnej kuchni. Więcej o historii zupy pisze artykuł [technika barszczu](/pl/blog/jak-ugotowac-barszcz), przy cieście pomaga [przewodnik po cieście na pierogi](/pl/blog/ciasto-na-pierogi).",
 },

 "recipe-karp": {
 dishDe: "Karp po polsku",
 dishPl: "Karp po polsku",
 vibeDe: "warm gebacken, zart, nach Zwiebel und Majoran, der ruhigere Gegenpart zum süßsauren Karp po żydowsku",
 vibePl: "pieczony na ciepło, delikatny, z cebulą i majerankiem, spokojniejszy odpowiednik słodko-kwaśnego karpia po żydowsku",
 originDe:
 "Karpfen kam wahrscheinlich schon im 12. oder 13. Jahrhundert mit Zisterziensermönchen nach Polen, die im Tal der Barycz und in der Gegend von Zator große Teichwirtschaften anlegten, weil ihr Ordensleben rund 180 Fastentage im Jahr vorschrieb und Fisch als einzige verlässliche Fleischalternative galt. Bis ins 20. Jahrhundert war Karpfen dabei nur einer von vielen Süßwasserfischen auf dem Wigilia-Tisch, gleichrangig neben Hecht, Zander oder Lachs, und wurde vor allem mit der jüdischen Küche in Verbindung gebracht, die daraus den bekannten süßsauren Karp po żydowsku in Gelee mit Rosinen und Mandeln entwickelte. Zum unumstrittenen Wigilia-Symbol wurde Karpfen erst nach 1947, als der kommunistische Minister Hilary Minc die Kampagne Karp na każdym wigilijnym stole ausrief: Nach dem Krieg war die Hochseefischerei zerstört, Teichkarpfen ließen sich dagegen einfach und günstig in Masse züchten, ab 1951 gab es sogar eigene Dezember-Bezugsscheine für Karpfen und Hering. Aus dieser fast beiläufigen Wirtschaftspolitik wurde binnen wenigen Jahrzehnten eine Tradition, die heute kaum ein polnischer Weihnachtstisch mehr infrage stellt. Die gebackene Variante mit Zwiebeln, wie sie hier vorgestellt wird, ist die unkompliziertere, warme Linie neben dem kalt servierten, süßsauren Karp po żydowsku.",
 originPl:
 "Karp trafił do Polski prawdopodobnie już w XII lub XIII wieku wraz z cystersami, którzy zakładali wielkie stawy hodowlane w dolinie Baryczy i w okolicach Zatora, bo ich reguła zakonna nakazywała blisko 180 dni postnych w roku, a ryba była jedyną pewną alternatywą dla mięsa. Aż do XX wieku karp był jednak tylko jedną z wielu ryb słodkowodnych na wigilijnym stole, na równi ze szczupakiem, sandaczem czy łososiem, i kojarzono go głównie z kuchnią żydowską, która stworzyła znany słodko-kwaśny karp po żydowsku w galarecie z rodzynkami i migdałami. Niepodważalnym symbolem Wigilii karp stał się dopiero po 1947 roku, gdy komunistyczny minister Hilary Minc ogłosił kampanię Karp na każdym wigilijnym stole: po wojnie flota rybacka była zniszczona, a stawowe karpie dało się łatwo i tanio rozmnażać masowo, od 1951 roku istniały nawet specjalne grudniowe kartki na karpie i śledzie. Z tej niemal przypadkowej polityki gospodarczej w ciągu kilku dekad powstała tradycja, której dziś prawie nikt w Polsce nie podważa. Pieczony wariant z cebulą, przedstawiony w tym przepisie, to prostsza, ciepła linia obok podawanego na zimno, słodko-kwaśnego karpia po żydowsku.",
 shopDe:
 "Frischen oder tiefgekühlten Karpfen bekommst du an der Fischtheke oder im [Polenladen](/de/blog/polenladen-einkaufen), dazu Zwiebeln, Zitrone, Majoran und Dill. Frag beim Fischhändler ruhig nach bereits filetiertem oder portioniertem Fisch, das erspart dir das mühsame Entgräten zu Hause. Mehr zum Gewürz Majoran erklärt das [Majeranek-Lexikon](/de/blog/majeranek), Ersatz für schwer erhältliche Zutaten listet der Beitrag zu [Ersatzprodukten](/de/blog/ersatzprodukte-de).",
 shopPl:
 "Świeżego lub mrożonego karpia kupisz w ladzie rybnej albo w [sklepie polskim](/pl/blog/sklep-polski-zakupy), do tego cebulę, cytrynę, majeranek i koperek. Śmiało poproś sprzedawcę o rybę już filetowaną albo porcjowaną, to oszczędza żmudne usuwanie ości w domu. Więcej o przyprawie pisze [majeranek](/pl/blog/majeranek-leksykon), zamienniki trudniej dostępnych składników opisuje wpis o [zamiennikach składników](/pl/blog/zamienniki-skladnikow).",
 techniqueDe:
 "Trockne den Fisch vor dem Würzen wirklich gründlich ab, feuchte Haut wird im Ofen nie richtig knusprig. Die Marinade aus Zitrone, Salz, Pfeffer und Majoran braucht mindestens 20 Minuten Zeit, damit sie ins Fleisch einziehen kann. Beim Backen bei 180 Grad entscheidet die Konsistenz des Fleisches mehr als die Uhr, sobald es sich leicht von der Gräte löst, ist der Fisch fertig, zu langes Backen trocknet ihn dagegen aus. Wird die Oberfläche zu schnell dunkel, hilft lockeres Abdecken mit Folie für die restliche Backzeit.",
 techniquePl:
 "Dokładnie osusz rybę przed przyprawieniem, wilgotna skórka nigdy nie zrobi się w piekarniku naprawdę chrupiąca. Marynata z cytryny, soli, pieprzu i majeranku potrzebuje przynajmniej 20 minut, by wniknąć w mięso. Podczas pieczenia w 180 stopniach o gotowości decyduje bardziej stan mięsa niż zegar, gdy mięso zaczyna łatwo odchodzić od ości, ryba jest gotowa, za długie pieczenie ją wysusza. Jeśli wierzch zbyt szybko ciemnieje, pomaga luźne przykrycie folią na resztę czasu pieczenia.",
 serveDe:
 "Serviere den Karpfen heiß mit den mitgebackenen Zwiebeln, frischer Zitrone und Dill, traditionell als warmer Fischgang nach klarem [Barszcz](/de/rezepte/barszcz-czerwony) mit [Uszka](/de/rezepte/uszka). Den kühlen Gegenpart auf dem Wigilia-Tisch liefert eingelegter [Śledź](/de/rezepte/sledz), beide Fischgänge ergänzen sich, ohne sich zu ähneln, weil der eine warm und mild bleibt, der andere kalt und säuerlich schmeckt.",
 servePl:
 "Podawaj karpia na gorąco z przypieczoną cebulą, świeżą cytryną i koperkiem, tradycyjnie jako ciepłą rybę po klarownym [barszczu](/pl/rezepte/barszcz-czerwony) z [uszkami](/pl/rezepte/uszka). Chłodnym przeciwieństwem na wigilijnym stole jest marynowany [śledź](/pl/rezepte/sledz), obie ryby się uzupełniają, choć wcale do siebie nie przypominają, bo jedna zostaje ciepła i delikatna, druga zimna i kwaskowata.",
 diasporaDe:
 "In deutschen Wohnungen ist Karpfen oft das Gericht, das am intensivsten nach Fisch riecht, deshalb lohnt sich rechtzeitiges Lüften und ein offenes Wort mit Nachbarn, wenn die Küche keine starke Abzugshaube hat. Weil sich der Fisch schon am Vormittag würzen lässt und nur die letzten 30 bis 40 Minuten Ofenzeit am Nachmittag verbleiben, bleibt trotzdem genug Zeit für Barszcz und Uszka parallel. Den ganzen Zeitplan für den Abend ordnet der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
 diasporaPl:
 "W niemieckich mieszkaniach karp jest często daniem, które najmocniej pachnie rybą, dlatego warto wcześniej wywietrzyć i uprzedzić sąsiadów, jeśli kuchnia nie ma silnego okapu. Ponieważ rybę można przyprawić już przed obiadem, a w piekarniku spędza tylko ostatnie 30 do 40 minut, wystarcza czasu równolegle na barszcz i uszka. Cały harmonogram wieczoru porządkuje [menu wigilijne](/pl/blog/menu-wigilijne).",
 mistakesDe:
 "Zu wenig abgetrockneter Fisch bleibt beim Backen wässrig statt knusprig, zu kurz gebacken bleibt er innen glasig, zu lange gebacken wird er trocken und faserig. Zu frühes Salzen direkt nach dem Waschen zieht schon vor dem Backen Feuchtigkeit aus dem Fleisch. Wer diese gebackene Variante mit dem süßsauren Karp po żydowsku verwechselt, erwartet fälschlich Rosinen und Gelee statt Zwiebeln und Ofenhitze, dabei handelt es sich um zwei ganz unterschiedliche Zubereitungen desselben Fisches.",
 mistakesPl:
 "Za słabo osuszona ryba zostaje podczas pieczenia wodnista, a nie chrupiąca, za krótko pieczona jest w środku szklista, za długo pieczona robi się sucha i włóknista. Zbyt wczesne solenie zaraz po myciu wyciąga wodę z mięsa jeszcze przed pieczeniem. Kto myli tę pieczoną wersję ze słodko-kwaśnym karpiem po żydowsku, oczekuje błędnie rodzynek i galarety zamiast cebuli i ciepła z piekarnika, a to dwa zupełnie różne sposoby przygotowania tej samej ryby.",
 variantsDe:
 "Neben der Ofenvariante gibt es Karpfen paniert und in der Pfanne gebraten, in Gelee serviert oder als moderne Alternative mit Lachs, dessen Austausch man ehrlich benennen sollte, statt ihn als Original zu verkaufen. Den kühlen Gegenpol bildet eingelegter [Śledź](/de/rezepte/sledz), zum ganzen Menü passt der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan), zur Würze das [Majeranek-Lexikon](/de/blog/majeranek).",
 variantsPl:
 "Obok wersji z piekarnika karpia można też panierować i smażyć na patelni, podawać w galarecie albo, jako nowoczesną alternatywę, zastąpić łososiem, o czym warto uczciwie napisać, a nie sprzedawać jako oryginał. Chłodnym przeciwieństwem zostaje marynowany [śledź](/pl/rezepte/sledz), do całego menu pasuje [menu wigilijne](/pl/blog/menu-wigilijne), a do przyprawy [majeranek](/pl/blog/majeranek-leksykon).",
 },

 "recipe-krokiety": {
 dishDe: "Krokiety",
 dishPl: "Krokiety",
 vibeDe: "knusprig paniert außen, weich gefüllt innen, das herzhafte Gegenstück zu süßen Naleśniki",
 vibePl: "chrupiące w panierce z zewnątrz, miękko nadziewane w środku, wytrawny odpowiednik słodkich naleśników",
 originDe:
 "Der Name Krokiety kommt unmittelbar vom französischen croquette, abgeleitet vom Verb croquer, knuspern. Croquettes selbst entstanden im 17. Jahrhundert am französischen Königshof, ein Rezept aus dem Jahr 1691, das dem Koch Ludwigs XIV. zugeschrieben wird, bindet Trüffel, Bries und Rahmkäse mit einer dicken Sauce, formt daraus Röllchen und frittiert sie paniert. Die Idee kam im 19. Jahrhundert über die aufstrebende bürgerliche Küche und den Einfluss französischer und deutscher Gastronomie nach Polen, damals eng verbunden mit der Adels- und später Bürgerküche der Teilungszeit. Anders als das französische Original, das den Farce direkt zu Röllchen formt und paniert, entwickelten polnische Köche eine eigene Zwischenstufe: Statt einer festen Bechamel-Masse übernimmt ein dünner Naleśniki-Pfannkuchen die Rolle der Hülle, erst er wird gefüllt, gerollt, paniert und gebraten. Historische Kochbücher aus dem frühen 20. Jahrhundert zeigen noch reine Kartoffel- oder Reis-Krokiety nach französischem Vorbild ohne Pfannkuchenteig, das gerollte Naleśniki-Krokiet in heutiger Form setzte sich erst allmählich durch und war in den 1950er-Jahren, laut zeitgenössischen Kochbüchern, meist schon ohne Fleischfüllung, weil Fleisch knapp war. Heute zählen Krokiety mit Kraut und Pilzen zu den festen Programmpunkten der Wigilia, während Fleischfüllungen eher den Alltag oder das [Sonntagsessen](/de/blog/sonntagsessen-polnisch) prägen.",
 originPl:
 "Nazwa krokiety pochodzi wprost od francuskiego croquette, od czasownika croquer, czyli chrupać. Same croquettes powstały w XVII wieku na dworze francuskim, przepis z 1691 roku, przypisywany kucharzowi Ludwika XIV, łączy truflę, cynadrę i tłusty ser gęstym sosem, formuje z tego wałeczki i smaży je w panierce. Idea trafiła do Polski w XIX wieku wraz z rozwijającą się kuchnią mieszczańską i wpływami gastronomii francuskiej oraz niemieckiej, w czasach silnie związanych z kuchnią szlachecką, a później mieszczańską okresu zaborów. W przeciwieństwie do francuskiego oryginału, który formuje farsz od razu w wałeczki i panieruje, polscy kucharze wypracowali własne ogniwo pośrednie: rolę osłony przejął cienki naleśnik, który najpierw się nadziewa, zwija, panieruje i smaży. Przedwojenne książki kucharskie pokazują jeszcze czyste krokiety ziemniaczane albo ryżowe na francuski wzór, bez naleśnika, dzisiejsza forma zwijanego krokietu ustaliła się dopiero stopniowo, a w latach pięćdziesiątych, według książek kucharskich tamtych czasów, była już zwykle bezmięsna, bo mięsa było mało. Dziś krokiety z kapustą i grzybami należą do stałych punktów Wigilii, a farsze mięsne bardziej gościnnie towarzyszą codzienności czy [obiadowi niedzielnemu](/pl/blog/obiad-niedzielny).",
 shopDe:
 "Für die Pfannkuchen brauchst du Milch, Mehl und Eier, für die Füllung Sauerkraut, getrocknete Pilze und Zwiebel, dazu Semmelbrösel zum Panieren. Sauerkraut und Trockenpilze findest du zuverlässig im [Polenladen](/de/blog/polenladen-einkaufen), zur Fermentation im Detail hilft der [Kiszenie-Guide](/de/blog/kiszenie-guide). Wie der Grundteig für die Pfannkuchenhülle gelingt, zeigt der [Naleśniki-Guide](/de/blog/nalesniki-guide).",
 shopPl:
 "Do naleśników potrzebujesz mleka, mąki i jajek, do farszu kapusty kiszonej, suszonych grzybów i cebuli, a do panierowania bułki tartej. Kapustę i suszone grzyby najpewniej znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), o samej fermentacji więcej mówi [kiszenie w domu](/pl/blog/kiszenie-w-domu). Jak udać się bazowe ciasto na naleśniki, pokazuje [przewodnik po naleśnikach](/pl/blog/nalesniki-przewodnik).",
 techniqueDe:
 "Der Naleśniki-Teig muss wirklich dünn ausgebacken werden, sonst lassen sich die fertigen Rollen später kaum schließen und die Panade platzt beim Braten auf. Die Füllung sollte kalt und nicht zu nass sein, feuchtes Kraut weicht die dünne Pfannkuchenhülle sonst von innen auf, bevor sie in die Panade kommt. Beim Panieren erst in Mehl, dann in Ei und zuletzt in Semmelbröseln wenden, dabei jede Schicht gut andrücken, damit sie beim Braten in mittelheißem Fett nicht abblättert.",
 techniquePl:
 "Ciasto na naleśniki musi być naprawdę cienko usmażone, inaczej gotowe rolki trudno później zamknąć, a panierka pęka podczas smażenia. Farsz powinien być zimny i niezbyt mokry, bo wilgotna kapusta rozmiękcza cienki naleśnik od wewnątrz, jeszcze zanim trafi do panierki. Przy panierowaniu obtaczaj najpierw w mące, potem w jajku, na końcu w bułce tartej, każdą warstwę dobrze dociskając, żeby nie odpadła podczas smażenia na średnio gorącym tłuszczu.",
 serveDe:
 "Serviere die Krokiety heiß, klassisch mit klarem [Barszcz](/de/rezepte/barszcz-czerwony) zur Wigilia oder mit einem Löffel Śmietana, mehr zum Unterschied zwischen Śmietana und Schmand erklärt der [Śmietana-Guide](/de/blog/smietana-schmand). Als kleine Vorspeise davor eignen sich [Uszka](/de/rezepte/uszka), beide Formen teilen die Vorliebe für Pilzfüllung, unterscheiden sich aber deutlich in Teig und Garmethode.",
 servePl:
 "Podawaj krokiety na gorąco, klasycznie z klarownym [barszczem](/pl/rezepte/barszcz-czerwony) na Wigilię albo z łyżką śmietany, więcej o różnicy między śmietaną a Schmandem pisze [ten poradnik](/pl/blog/smietana-czy-schmand). Jako małą przystawkę przed nimi dobrze sprawdzają się [uszka](/pl/rezepte/uszka), obie formy łączy upodobanie do farszu grzybowego, choć różnią się wyraźnie ciastem i sposobem gotowania.",
 diasporaDe:
 "Krokiety eignen sich gut als Wochenendprojekt: Vormittags Teig und Füllung vorbereiten, nachmittags rollen, panieren und braten. Fertig geformte, aber noch nicht panierte Rollen lassen sich gut einfrieren, Details dazu liefert der [Freezer-Guide](/de/blog/freezer-meal-prep). So bleibt am eigentlichen Wigilia-Abend nur noch das Braten übrig, während Barszcz und Uszka bereits fertig sind.",
 diasporaPl:
 "Krokiety dobrze sprawdzają się jako projekt na weekend: rano ciasto i farsz, po południu zwijanie, panierowanie i smażenie. Uformowane, ale jeszcze niepanierowane rolki dobrze się mrożą, szczegóły opisuje [mrożenie porcji](/pl/blog/mrozenie-pierogow). Dzięki temu w sam wieczór wigilijny zostaje tylko smażenie, gdy barszcz i uszka są już gotowe.",
 mistakesDe:
 "Zu nasses Sauerkraut oder nicht ausgedrückte Pilze machen die Füllung wässrig und lassen die Panade beim Braten aufreißen. Locker gerollte Rollen öffnen sich in heißem Fett fast immer zuerst an der Nahtstelle, deshalb sorgfältig einklappen und fest andrücken. Zu heißes Fett bräunt die Panade außen, bevor die Füllung innen richtig warm ist, brate deshalb lieber bei mittlerer Hitze in kleineren Portionen.",
 mistakesPl:
 "Za mokra kapusta kiszona albo nieodciśnięte grzyby robią farsz wodnisty i rozsadzają panierkę podczas smażenia. Luźno zwinięte rolki otwierają się w gorącym tłuszczu prawie zawsze najpierw przy szwie, dlatego trzeba starannie wsuwać końce i mocno docisnąć. Za gorący tłuszcz przypala panierkę na zewnątrz, zanim farsz w środku zdąży się ogrzać, lepiej więc smażyć na średnim ogniu w mniejszych partiach.",
 variantsDe:
 "Mit Fleischfüllung oder Champignons statt Sauerkraut entstehen deftigere Varianten, eine vegetarische Version lässt einfach den Speck weg. Eine gefaltete Variante mit sehr ähnlicher Kraut-Pilz-Füllung, aber ohne Panade, findet sich bei [Pierogi mit Kraut und Pilzen](/de/rezepte/pierogi/kraut-pilze). Zur Panade allgemein liefert der [Panieren-Guide](/de/blog/panieren-schabowy) weitere Technik, dort allerdings für Schnitzel statt Rollen.",
 variantsPl:
 "Z farszem mięsnym albo z pieczarkami zamiast kapusty powstają bardziej treściwe wersje, wegetariańska po prostu obejdzie się bez boczku w farszu. Zwijany wariant z bardzo podobnym farszem kapustno-grzybowym, ale bez panierki, znajdziesz przy [pierogach z kapustą i grzybami](/pl/rezepte/pierogi/kapusta-grzyby). O panierowaniu w ogóle więcej mówi [przewodnik panierowania](/pl/blog/panierowanie-kotlet), tam jednak w kontekście kotleta, a nie rolek.",
 },

 "recipe-sernik": {
 dishDe: "Sernik",
 dishPl: "Sernik",
 vibeDe: "cremig, dicht, nach Twaróg und Vanille, klar getrennt von Apfelkuchen und flachem Festtagsgebäck",
 vibePl: "kremowy, gęsty, z twarogu i wanilii, wyraźnie inny niż jabłecznik i płaskie ciasto świąteczne",
 originDe:
 "Käsekuchen selbst reicht weit zurück: Schon im antiken Griechenland soll der Arzt und Philosoph Aigimios über das Erhitzen von frischem Ziegenkäse nachgedacht haben, die Römer verbreiteten die Idee mit ihren Eroberungen über weite Teile Europas, und 1545 erschien im ersten gedruckten englischen Kochbuch bereits ein Rezept mit eingelegtem Käse, Milch, Eiern, Mehl und Zucker. Nach Polen kam die Idee vermutlich über den österreichischen Raum, einer verbreiteten Anekdote zufolge brachte König Jan III. Sobieski nach seinem Sieg bei der Entsatzschlacht von Wien 1683 einen bodenlosen Wiener Käsekuchen mit, der bis heute als sernik wiedeński bekannt ist. Krakauer Konditoren sollen darauf ein Gitter aus Mürbeteig gelegt haben, woraus der sernik wiedeński po krakowsku entstand, während man in Warschau eine Gelee-Schicht aufträgt und vom sernik ze szkiełkiem spricht. Entscheidend für den eigenständigen polnischen Charakter ist die Käsewahl: Wo Italiener Ricotta und Griechen Mizithra verwenden, greifen Polen wie Deutsche traditionell zu Twaróg beziehungsweise Quark, allerdings mit spürbaren Unterschieden in Fettgehalt und Körnung, die den polnischen Sernik oft dichter und höher wirken lassen als seinen deutschen Verwandten.",
 originPl:
 "Sam sernik ma bardzo długą historię: już w starożytnej Grecji lekarz i filozof Ajgimios miał zastanawiać się nad podgrzewaniem świeżego koziego sera, Rzymianie rozpowszechnili ten pomysł podczas swoich podbojów po całej Europie, a w 1545 roku w pierwszej drukowanej angielskiej książce kucharskiej znalazł się już przepis z moczonym serem, mlekiem, jajkami, mąką i cukrem. Do Polski pomysł trafił prawdopodobnie z terenów austriackich, według popularnej anegdoty król Jan III Sobieski po zwycięskiej odsieczy wiedeńskiej w 1683 roku przywiózł bezspodowy wiedeński sernik, znany do dziś jako sernik wiedeński. Krakowscy cukiernicy mieli na niego nałożyć kratkę z ciasta kruchego, tak powstał sernik wiedeński po krakowsku, a w Warszawie polewa się go galaretką i nazywa sernikiem ze szkiełkiem. O odrębnym, polskim charakterze decyduje wybór sera: gdzie Włosi używają ricotty, a Grecy mizithry, Polacy i Niemcy tradycyjnie sięgają po twaróg albo quark, choć z zauważalnymi różnicami w tłustości i ziarnistości, które sprawiają, że polski sernik zwykle wypada gęściej i wyżej niż jego niemiecki kuzyn.",
 shopDe:
 "Nimm Twaróg sernikowy oder gut abgetropften Speisequark, dazu Eier, Zucker, Butter, etwas Mehl oder Puddingpulver zum Binden, Vanille und optional einen Mürbeteigboden. Wie du in Deutschland an geeigneten Twaróg kommst, erklärt der [Twaróg-Guide](/de/blog/twarog-deutschland), Ersatz und Alternativen listet der Beitrag zu [Ersatzprodukten](/de/blog/ersatzprodukte-de). Typische Twaróg-Qualität mit höherem Fettanteil findest du oft im [Polenladen](/de/blog/polenladen-einkaufen).",
 shopPl:
 "Weź twaróg sernikowy albo dobrze odsączony Quark, do tego jajka, cukier, masło, odrobinę mąki lub budyniu do związania masy, wanilię i opcjonalnie kruchy spód. Jak w Niemczech znaleźć dobry twaróg, opisuje [przewodnik po twarogu](/pl/blog/twarog-w-niemczech), zamienniki wymienia wpis o [zamiennikach składników](/pl/blog/zamienniki-skladnikow). Typową jakość twarogu z wyższą zawartością tłuszczu często znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
 techniqueDe:
 "Rühre die Masse glatt, aber schlage sie nicht schaumig, zu viel eingerührte Luft lässt den Kuchen später stärker einfallen. Backe bei mittlerer Ofentemperatur, die Mitte darf beim Herausnehmen noch leicht wackeln, denn sie festigt sich beim Nachruhen im ausgeschalteten, leicht geöffneten Ofen weiter. Risse entstehen meist durch zu hohe Hitze oder durch Zugluft, wenn die Ofentür zu früh und zu weit geöffnet wird. Schneide erst, wenn der Kuchen vollständig ausgekühlt und am besten über Nacht durchgekühlt ist, warme Stücke brechen sonst leicht.",
 techniquePl:
 "Wymieszaj masę na gładko, ale nie ubijaj jej na piankę, bo za dużo wmieszanego powietrza sprawia, że ciasto później bardziej opada. Piecz w średniej temperaturze piekarnika, środek może przy wyjmowaniu jeszcze lekko drgać, bo dociąga podczas stygnięcia w wyłączonym, lekko otwartym piekarniku. Pęknięcia powstają najczęściej przez zbyt wysoką temperaturę albo przeciąg, gdy drzwiczki otwiera się za wcześnie i za szeroko. Kroić dopiero, gdy ciasto całkowicie wystygnie, najlepiej po nocy w lodówce, ciepłe kawałki inaczej łatwo się łamią.",
 serveDe:
 "Serviere Sernik in Stücken, mit Puderzucker, frischen Früchten oder ganz pur zum Kaffee, er passt gut zu Ostern und Sonntagen und steht an Wigilia oft neben oder statt [Makowiec](/de/rezepte/makowiec), je nach Hausbrauch. Für den Osterspeiseplan hilft der [Wielkanoc-Guide](/de/blog/wielkanoc-speiseplan).",
 servePl:
 "Podawaj sernik w kawałkach, z cukrem pudrem, świeżymi owocami albo samym do kawy, dobrze pasuje na Wielkanoc i niedziele, a na Wigilii bywa obok lub zamiast [makowca](/pl/rezepte/makowiec), zależnie od zwyczaju w domu. Przy planowaniu menu wielkanocnego pomaga [ten przewodnik](/pl/blog/menu-wielkanocne).",
 diasporaDe:
 "Am Vortag gebacken entlastet Sernik jedes Gästeessen deutlich, weil er über Nacht ohnehin fester und leichter schneidbar wird. Deutscher Quark ist oft feuchter als polnischer Twaróg und sollte vor dem Backen gründlich abtropfen, sonst wird die Masse wässrig, mehr dazu erklärt der [Twaróg-Guide](/de/blog/twarog-deutschland). Verwechsle Sernik nicht mit den knusprigen [Faworki](/de/rezepte/faworki), das sind zwei völlig unterschiedliche Festtagsgebäcke.",
 diasporaPl:
 "Upieczony dzień wcześniej sernik znacznie odciąża każde przyjęcie, bo przez noc i tak robi się bardziej zwarty i łatwiej się kroi. Niemiecki Quark bywa wilgotniejszy niż polski twaróg i przed pieczeniem warto go dobrze odsączyć, inaczej masa wyjdzie wodnista, więcej pisze o tym [przewodnik po twarogu](/pl/blog/twarog-w-niemczech). Nie myl sernika z chrupiącymi [faworkami](/pl/rezepte/faworki), to dwa zupełnie różne świąteczne wypieki.",
 mistakesDe:
 "Zu feuchter Quark macht die Masse wässrig und verlängert die Backzeit unnötig. Ein zu heißer Ofen lässt die Oberfläche aufreißen, ein zu kurz gebackener Boden bleibt roh und matschig. Zu früh geschnittene Stücke brechen und verlieren ihre Form. Sernik mit Makowiec zu verwechseln bedeutet, eine Mohnrolle statt eines cremigen Käsekuchens zu erwarten, beide teilen sich zwar den Festtagstisch, aber nicht die Zutaten.",
 mistakesPl:
 "Za mokry twaróg robi masę wodnistą i niepotrzebnie wydłuża pieczenie. Za gorący piekarnik pęka powierzchnię, za krótko pieczony spód zostaje surowy i rozmokły. Za wcześnie pokrojone kawałki się łamią i tracą kształt. Mylenie sernika z makowcem oznacza oczekiwanie rolady makowej zamiast kremowego sernika, oba ciasta dzielą świąteczny stół, ale nie składniki.",
 variantsDe:
 "Ohne Boden entsteht die ursprüngliche Wiener Linie, mit Rosinen, Schokotropfen oder in einer kleineren Springform verändert sich nur die Textur, nicht das Grundprinzip. Die gerollte Mohnrolle bleibt [Makowiec](/de/rezepte/makowiec), der Hefegugelhupf [Babka](/de/rezepte/babka), der Apfelkuchen [Szarlotka](/de/rezepte/szarlotka) und das flache Festtagsgebäck [Mazurek](/de/rezepte/mazurek) sind allesamt eigenständige Gerichte trotz gemeinsamer Rolle auf dem Festtagstisch.",
 variantsPl:
 "Bez spodu powstaje pierwotna wiedeńska linia, z rodzynkami, kawałkami czekolady albo w mniejszej tortownicy zmienia się tylko tekstura, nie sama zasada. Zwinięta rolada makowa to [makowiec](/pl/rezepte/makowiec), drożdżowe ciasto z formy to [babka](/pl/rezepte/babka), jabłecznik to [szarlotka](/pl/rezepte/szarlotka), a płaskie świąteczne ciasto to [mazurek](/pl/rezepte/mazurek), wszystkie to osobne desery, mimo że dzielą świąteczny stół.",
 },

 "recipe-sledz": {
 dishDe: "Śledź w oleju",
 dishPl: "Śledź w oleju",
 vibeDe: "kalt, zwiebelig, ölig-salzig zum Brot, die alltagstauglichere Linie neben Śledź w śmietanie",
 vibePl: "zimny, cebulowy, słono-oleisty do chleba, prostsza linia obok śledzia w śmietanie",
 originDe:
 "Hering war für Jahrhunderte eine der wichtigsten Proteinquellen Mittel- und Osteuropas, weil er sich in Salz oder Salzlake extrem lange haltbar machen ließ, lange bevor Kühlung existierte. Schon in den Hofrechnungen König Władysław Jagiełłos ist unter dem 25. März 1389 der Zukauf von sechs Fässern Hering vermerkt, ein früher Beleg dafür, wie fest Fisch im Speiseplan der polnischen Krone verankert war. Grund dafür war der strenge kirchliche Fastenkalender, der in der frühneuzeitlichen Adelsrepublik zeitweise auf bis zu 200 Fastentage im Jahr kam, an denen Fleisch verboten, Fisch aber erlaubt war. Ab dem 14. Jahrhundert verbesserte eine holländische Erfindung, das Einlegen in Salzlake in Fässern statt trockenem Salz, den Geschmack erheblich, während heimisches Salz aus den Gruben von Wieliczka und Bochnia die Konservierung vor Ort ermöglichte. Da reiner Salzhering auf Dauer eintönig schmeckt, wurde er mit einfachen, günstigen Zutaten wie Leinöl, Hanföl oder später Sonnenblumenöl aufgepeppt, genau daraus entstand der bis heute beliebte Śledź w oleju. Śledź gehört seither zu den festen Bestandteilen der zwölf traditionellen Wigilia-Gerichte, die an die zwölf Apostel oder an alte slawische Erntedank-Bräuche zur Wintersonnenwende erinnern sollen.",
 originPl:
 "Śledź był przez wieki jednym z najważniejszych źródeł białka w Europie Środkowej i Wschodniej, bo dało się go bardzo długo przechowywać w soli albo w solance, na długo przed wynalezieniem chłodzenia. Już w rachunkach dworu Władysława Jagiełły pod datą 25 marca 1389 roku odnotowano zakup sześciu beczek śledzi, co jest wczesnym dowodem, jak silnie ryba była zakorzeniona w jadłospisie polskiego dworu. Powodem był ścisły kościelny kalendarz postny, który w Rzeczypospolitej momentami obejmował nawet do 200 dni postnych w roku, kiedy mięso było zakazane, a ryba dozwolona. Od XIV wieku holenderski wynalazek, moczenie śledzi w solance w beczkach zamiast w suchej soli, wyraźnie poprawił smak, a rodzima sól z kopalni w Wieliczce i Bochni umożliwiała konserwację na miejscu. Ponieważ sam solony śledź z czasem smakuje monotonnie, urozmaicano go prostymi, tanimi dodatkami, jak olej lniany, konopny, a później słonecznikowy, i właśnie z tego powstał popularny do dziś śledź w oleju. Śledź od tamtej pory należy do stałych elementów dwunastu tradycyjnych potraw wigilijnych, które mają przypominać dwunastu apostołów albo dawne słowiańskie obrzędy dziękczynne za urodzaj w okresie zimowego przesilenia.",
 shopDe:
 "Nimm Matjes- oder Salzheringfilets aus der Kühltruhe des [Polenladens](/de/blog/polenladen-einkaufen), dazu Zwiebeln, neutrales Öl, Lorbeer und Piment. Achte beim Kauf auf mildes, frisches Aroma ohne strengen Fischgeruch, das unterscheidet guten Matjes von älterer Ware. Ist gerade nur Rollmops verfügbar, deklariere den Teller ehrlich um, Orientierung dazu gibt der Beitrag zu [Ersatzprodukten](/de/blog/ersatzprodukte-de).",
 shopPl:
 "Weź filety śledziowe matjes lub solone z chłodni [sklepu polskiego](/pl/blog/sklep-polski-zakupy), do tego cebulę, olej, liść laurowy i ziele angielskie. Przy zakupie zwróć uwagę na delikatny, świeży zapach bez ostrej rybnej nuty, to odróżnia dobrego matjasa od starszego towaru. Jeśli akurat jest tylko rolmops, nazwij talerz uczciwie inaczej, orientację daje wpis o [zamiennikach składników](/pl/blog/zamienniki-skladnikow).",
 techniqueDe:
 "Schneide die Filets in mundgerechte Stücke und schichte sie abwechselnd mit Zwiebelringen, damit sich Aroma und Öl gleichmäßig verteilen. Wer die Zwiebelschärfe mildern möchte, überbrüht die Ringe kurz mit heißem Wasser, das nimmt einen Teil der Schärfe, ohne den Biss zu verlieren. Koche nichts, sondern lass alles abgedeckt im Kühlschrank ziehen, am besten über Nacht, denn Öl und Gewürze brauchen Zeit, um sich vollständig mit dem Fisch zu verbinden.",
 techniquePl:
 "Pokrój filety na kawałki wielkości jednego kęsa i układaj je warstwami razem z krążkami cebuli, żeby aromat i olej równo się rozłożyły. Kto chce zmiękczyć ostrość cebuli, zalewa krążki na chwilę wrzątkiem, to zdejmuje część ostrości, nie odbierając chrupkości. Niczego nie gotuj, tylko odstaw wszystko przykryte do lodówki, najlepiej na całą noc, bo olej i przyprawy potrzebują czasu, by w pełni połączyć się z rybą.",
 serveDe:
 "Serviere Śledź kalt mit frischem Brot, manchmal mit hartgekochtem Ei oder Gurke, klassisch an Wigilia neben anderen kalten Speisen wie Salaten. Den warmen Gegenpart auf dem Fischteil des Menüs liefert gebackener [Karp](/de/rezepte/karp), zur cremigen Variante mit Sahne hilft das [Śmietana-Lexikon](/de/blog/smietana-schmand).",
 servePl:
 "Podawaj śledzia na zimno ze świeżym chlebem, czasem z jajkiem na twardo lub ogórkiem, klasycznie na Wigilii obok innych zimnych dań, jak sałatki. Ciepłym przeciwieństwem na rybnej części menu jest pieczony [karp](/pl/rezepte/karp), do kremowej wersji ze śmietaną pomaga [leksykon śmietany](/pl/blog/smietana-czy-schmand).",
 diasporaDe:
 "Śledź lässt sich schon am 23. Dezember vorbereiten und zieht über Nacht im Kühlschrank durch, am 24. wird nur noch angerichtet, das bedeutet null Ofenstress neben [Barszcz](/de/rezepte/barszcz-czerwony) und [Karp](/de/rezepte/karp). Den vollständigen Zeitplan rund um die Wigilia-Küche zeigt der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
 diasporaPl:
 "Śledzia można przygotować już 23 grudnia, a przez noc w lodówce sam dojrzewa, 24 grudnia zostaje więc tylko wyłożenie na talerz, czyli zero stresu przy piekarniku obok [barszczu](/pl/rezepte/barszcz-czerwony) i [karpia](/pl/rezepte/karp). Cały harmonogram kuchni wigilijnej pokazuje [menu wigilijne](/pl/blog/menu-wigilijne).",
 mistakesDe:
 "Zu kurze Marinierzeit lässt den Fisch fad schmecken, weil Öl und Gewürze noch nicht eingezogen sind. Zu scharfe, nicht überbrühte Zwiebeln dominieren sonst jeden anderen Geschmack. Zu wenig Öl lässt den Hering an der Luft schnell austrocknen, vor allem an den Rändern der Schüssel. Plane deshalb mehrere Stunden, besser eine ganze Nacht Ruhe im Kühlschrank, bevor der Teller auf den Tisch kommt.",
 mistakesPl:
 "Za krótka marynata sprawia, że ryba smakuje mdło, bo olej i przyprawy nie zdążyły wniknąć. Za ostra, niesparzona cebula przygłusza wtedy każdy inny smak. Za mało oleju powoduje, że śledź szybko wysycha na powietrzu, zwłaszcza przy brzegach miski. Zaplanuj więc kilka godzin, a najlepiej całą noc odpoczynku w lodówce, zanim talerz trafi na stół.",
 variantsDe:
 "Neben Öl gibt es Śledź w śmietanie mit Sahne, die Variante po kaszubsku mit Apfel, oder eine Version mit Senf statt Piment. Der warme Fischgang bleibt bei [Karp](/de/rezepte/karp), zum Sahnevergleich hilft das [Śmietana-Lexikon](/de/blog/smietana-schmand), zum ganzen Menü der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
 variantsPl:
 "Obok wersji w oleju istnieje śledź w śmietanie, wariant po kaszubsku z jabłkiem, albo wersja z musztardą zamiast ziela angielskiego. Ciepła ryba zostaje przy [karpiu](/pl/rezepte/karp), do porównania ze śmietaną pomaga [leksykon śmietany](/pl/blog/smietana-czy-schmand), do całego menu [menu wigilijne](/pl/blog/menu-wigilijne).",
 },
};
