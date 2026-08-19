/**
 * Wave 13 Paket B — FACTS for Kutia + Napoleonka.
 * Isolated export `W13_FACTS_B` — Integrator merges into recipe-articles.ts FACTS map.
 * Shape matches ArticleFacts in recipe-articles.ts.
 *
 * Ownership:
 * - Kutia is different from Makaron z makiem (Nudeln+Mohn), Makowiec (Rolle) and Kompot z suszu
 * - Napoleonka is different from Szarlotka, Sernik, Mazurek and Wuzetka (Schoko-Sahne, /rezepte/wuzetka)
 * Affiliate: guide-only
 */

type ArticleFacts = {
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

export const W13_FACTS_B: Record<string, ArticleFacts> = {
  "recipe-kutia": {
    dishDe: "Kutia",
    dishPl: "Kutia",
    vibeDe: "süß mohnig, körnig nussig, wigilijny und ruhig in der Schüssel",
    vibePl: "słodko makowy, ziarnisto orzechowy, wigilijny i spokojny w misce",
    originDe:
      "Kutia ist eines der ältesten Gerichte der Wigilia und reicht bis in vorchristliche slawische Bräuche zurück, die mit der Wintersonnenwende zu tun hatten. Der Name geht wohl auf das griechische kókkos für Korn zurück, eine volkstümliche Deutung verbindet ihn mit dem slawischen Wort kut für Ecke, weil die Schüssel früher in der Zimmerecke stand. Symbolisch stehen die Weizenkörner für das Leben, das im Frühling wieder keimt, während der Mohn schon in der Antike mit dem Totenreich verbunden wurde, weshalb Kutia traditionell auch bei Totengedenken und nach Beerdigungen gegessen wurde. Heute ist das Dessert vor allem in Ostpolen verbreitet, in der Podlasie, der Lubelszczyzna und den früheren Ostgebieten, und deshalb bei Nachfahren dieser Regionen in der Diaspora besonders stark verwurzelt. Kutia ist dabei bewusst keine Nudelplatte wie [Makaron z makiem](/de/rezepte/makaron-z-makiem) und keine Hefe-Mohnrolle wie [Makowiec](/de/rezepte/makowiec), Fragen rund um den Mohn beantwortet die [Makowiec-Technik](/de/blog/makowiec-technik). Den Menürahmen für den ganzen Abend liefert der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
    originPl:
      "Kutia to jedno z najstarszych dań wieczerzy wigilijnej, sięgające przedchrześcijańskich zwyczajów słowiańskich związanych z przesileniem zimowym. Nazwa prawdopodobnie pochodzi od greckiego kókkos, czyli ziarno, choć ludowa etymologia łączy ją też ze słowem kut, czyli kąt, bo miska stała dawniej w kącie izby. Symbolicznie ziarna pszenicy oznaczają życie, które wiosną znów wykiełkuje, a mak już w starożytności kojarzono z zaświatami, dlatego kutię jadano też na stypach i w dni zaduszne. Dziś deser jest najsilniej zakorzeniony we wschodniej Polsce, na Podlasiu, Lubelszczyźnie i dawnych Kresach, a przez to szczególnie żywy w diasporze wywodzącej się z tych regionów. Kutia świadomie nie jest talerzem makaronu jak [makaron z makiem](/pl/rezepte/makaron-z-makiem) ani drożdżową roladą jak [makowiec](/pl/rezepte/makowiec), technikę mielenia maku opisuje [technika makowca](/pl/blog/makowiec-technika). Ramę całego wieczoru daje [menu wigilijne](/pl/blog/menu-wigilijne).",
    shopDe:
      "Geschälte Weizenkörner und blauer Mohn tragen den ganzen Charakter von Kutia, am besten frisch gemahlen, und beides findest du oft besser sortiert im [Polenladen](/de/blog/polenladen-einkaufen) als im normalen Supermarkt. Dazu kommen Honig, Walnüsse oder Mandeln, Rosinen und etwas Milch. Fehlt gemahlener Mohn, hilft der Beitrag zu [Ersatzprodukten](/de/blog/ersatzprodukte-de) weiter, wichtig ist dabei die Funktion und nicht nur das Etikett, Kakao als Mohn-Ersatz oder Nudeln als Weizen-Ersatz funktionieren jedenfalls nicht. Perlgerste darfst du nur ehrlich als Ersatz kennzeichnen, klassisch bleibt Weizen. Hefe und Rollteig gehören nicht hinein, sonst landest du beim [Makowiec](/de/rezepte/makowiec).",
    shopPl:
      "Obrana pszenica i mak niebieski niosą cały charakter kutii, najlepiej świeżo mielony, i oba składniki często lepiej znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy) niż w zwykłym markecie. Do tego miód, orzechy włoskie lub migdały, rodzynki i odrobina mleka. Gdy brakuje mielonego maku, pomogą [zamienniki składników](/pl/blog/zamienniki-skladnikow), liczy się jednak funkcja, a nie samo słowo na etykiecie, kakao jako zamiennik maku czy makaron jako zamiennik pszenicy nie zadziałają. Pęczak można oznaczyć tylko uczciwie jako zamiennik, klasyczna wersja zostaje przy pszenicy. Drożdże i ciasto na roladę tu nie pasują, bo wtedy wychodzi [makowiec](/pl/rezepte/makowiec).",
    techniqueDe:
      "Den Weizen weich, aber mit Biss kochen, denn zu hart bleibt er sandig und zu lange gekocht wird er breiig. Den Mohn aufquellen lassen, fein mahlen und mit Honig und Nüssen binden, bis die Masse glänzt und streichfähig ist, statt zu tropfen oder mehlig-trocken zu wirken. Warm oder lauwarm vermengen und danach kühlen, so rundet sich der Geschmack über einige Stunden ab. Bitterkeit kommt meistens von altem Mohn, deshalb lohnt sich ein Blick auf die Frische. Das Mahlgefühl kann sich an der [Makowiec-Technik](/de/blog/makowiec-technik) orientieren, auch wenn hier weder Nudelwasser noch ein Ofenschritt nötig sind.",
    techniquePl:
      "Pszenicę ugotuj miękko, ale z lekkim gryzieniem, bo za twarda zostaje piaszczysta, a za długo gotowana robi się papkowata. Mak namocz, dokładnie zmiel i zwiąż miodem oraz orzechami, tak żeby masa błyszczała i dała się smarować, a nie ciekła albo była sucha jak mąka. Mieszaj na ciepło lub letnio, a potem schłodź, dzięki temu smak zbiera się przez kilka godzin. Gorycz najczęściej bierze się ze starego maku, dlatego warto sprawdzić jego świeżość. Wyczucie mielenia można oprzeć na [technice makowca](/pl/blog/makowiec-technika), choć tutaj nie potrzeba ani wody z makaronu, ani pieczenia.",
    serveDe:
      "Kutia gehört in Schalen oder eine gemeinsame Schüssel, oft kalt oder zimmerwarm, als süßer Gang neben Fisch und Kompot am [Wigilia-Tisch](/de/blog/wigilia-speiseplan). Auf dem Tisch bleibt klar getrennt: Nudeln mit Mohn sind [Makaron z makiem](/de/rezepte/makaron-z-makiem), die Rolle mit Spirale ist [Makowiec](/de/rezepte/makowiec), und das Glas mit Trockenobst bleibt [Kompot z suszu](/de/rezepte/kompot-z-suszu). Reste hältst du abgedeckt im Kühlschrank, vor dem Servieren einmal umrühren und bei Bedarf etwas Honig nachziehen.",
    servePl:
      "Kutię podajesz w miseczkach lub jednej wspólnej misie, często na zimno lub w temperaturze pokojowej, jako słodki element wieczerzy obok ryby i kompotu w [menu wigilijnym](/pl/blog/menu-wigilijne). Na stole zostaje jasny podział: makaron z makiem to [makaron z makiem](/pl/rezepte/makaron-z-makiem), rolada ze spiralą to [makowiec](/pl/rezepte/makowiec), a szklanka z suszem to [kompot z suszu](/pl/rezepte/kompot-z-suszu). Resztki trzymaj przykryte w lodówce, przed podaniem wymieszaj i ewentualnie dolej trochę miodu.",
    diasporaDe:
      "In deutschen Küchen rettet Kutia oft den Mohn-Platz am Heiligabend, wenn niemand Hefeteig führen und niemand noch Nudeln mit Masse verrühren möchte: ein Topf Weizen, eine Schüssel Masse, ab in den Kühlschrank. Mohn und Weizen halten sich gut aus dem [Polenladen](/de/blog/polenladen-einkaufen), Kinder dürfen Nüsse hacken und streuen, am heißen Kochtopf übernehmen Erwachsene. Gute Körner und frischer Mohn reichen völlig aus, mehr braucht dieses Gericht nicht. Technisch verwandt bleibt die [Makowiec-Technik](/de/blog/makowiec-technik).",
    diasporaPl:
      "W niemieckich kuchniach kutia często ratuje wigilijny slot makowy, gdy nikt nie chce prowadzić drożdży ani mieszać kolejnego makaronu z masą: jeden garnek pszenicy, jedna miska masy, lodówka. Mak i pszenicę dobrze kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), dzieci mogą siekać i sypać orzechy, przy gorącym garnku pomagają dorośli. Dobre ziarna i świeży mak w zupełności wystarczą, nic więcej nie jest tu potrzebne. Technicznie blisko jest do [techniki makowca](/pl/blog/makowiec-technika).",
    mistakesDe:
      "Kutia wird gern mit [Makaron z makiem](/de/rezepte/makaron-z-makiem) verwechselt, weil beide Mohn enthalten, dabei stehen hier ganze Weizenkörner statt Nudeln im Mittelpunkt. Mit [Makowiec](/de/rezepte/makowiec) hat sie außer dem Mohn ebenfalls wenig zu tun, denn Kutia bleibt eine Schüssel und keine gebackene Rolle. Eine zu trockene, sandige Masse entsteht meist durch zu wenig Honig oder Milch, während bitterer Geschmack fast immer von altem Mohn kommt.",
    mistakesPl:
      "Kutię łatwo pomylić z [makaronem z makiem](/pl/rezepte/makaron-z-makiem), bo oba dania mają mak, ale tu w centrum są całe ziarna pszenicy, a nie makaron. Z [makowcem](/pl/rezepte/makowiec) łączy ją tylko mak, bo kutia zostaje w misce, a nie zamienia się w pieczoną roladę. Zbyt sucha, piaszczysta masa zwykle wynika z za małej ilości miodu lub mleka, a gorzki smak niemal zawsze pochodzi ze starego maku.",
    variantsDe:
      "Mit mehr Honig wird Kutia runder im Geschmack, mit Orangenschale statt Zitrone bekommt sie eine wärmere Note, und mit mehr Nüssen wird sie kräftiger. Kalt als Restespeise schmeckt sie am nächsten Tag oft noch besser, weil sich alle Aromen gesetzt haben. Passende Nachbarn am Wigilia-Tisch sind [Makaron z makiem](/de/rezepte/makaron-z-makiem) und [Makowiec](/de/rezepte/makowiec), zum Anlass passt der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan), zur Mohntechnik die [Makowiec-Technik](/de/blog/makowiec-technik), und im [Polenladen](/de/blog/polenladen-einkaufen) findest du die passenden Zutaten dafür.",
    variantsPl:
      "Z większą ilością miodu kutia smakuje łagodniej, ze skórką pomarańczy zamiast cytryny zyskuje cieplejszą nutę, a z większą ilością orzechów robi się bardziej wyrazista. Na zimno jako resztka następnego dnia często smakuje jeszcze lepiej, bo smaki się przegryzły. Do wigilijnego stołu pasują [makaron z makiem](/pl/rezepte/makaron-z-makiem) i [makowiec](/pl/rezepte/makowiec), do okazji [menu wigilijne](/pl/blog/menu-wigilijne), do techniki maku [technika makowca](/pl/blog/makowiec-technika), a składniki znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
  },
  "recipe-napoleonka": {
    dishDe: "Napoleonka / Kremówka",
    dishPl: "Napoleonka / kremówka",
    vibeDe: "blättrig cremig, puderzuckerweiß, Bäckerei und Sonntagskaffee",
    vibePl: "listkowato kremowy, biały od cukru pudru, cukiernia i niedzielna kawa",
    originDe:
      "Der Name Napoleonka stammt nicht von Napoleon selbst, sondern von einer Warschauer Konditorei namens „Napoleonka“, die einst am Plac Napoleona lag und dem Blätterteig-Gebäck ihren Namen weitergab. Unter dem Namen Kremówka wurde das Gebäck 1999 noch berühmter, als Papst Johannes Paul II. bei einem Besuch in seiner Heimatstadt Wadowice erzählte, wie er nach dem Abitur mit Freunden in der Konditorei von Karol Hagenhuber Kremówki gegessen hatte, angeblich bis zu achtzehn Stück an einem Tag. Seitdem gilt die „kremówka papieska“ als kulinarisches Wahrzeichen von Wadowice, auch wenn die ursprüngliche Konditorei längst geschlossen ist. Das Grundprinzip bleibt in beiden Fällen gleich: Blätterteig, dicke Vanillecreme, Puderzucker, ganz anders als der Apfelkuchen [Szarlotka](/de/rezepte/szarlotka), der Käsekuchen [Sernik](/de/rezepte/sernik), der flache Osterkuchen [Mazurek](/de/rezepte/mazurek) oder die Schoko-Sahne-Torte [Wuzetka](/de/rezepte/wuzetka).",
    originPl:
      "Nazwa napoleonka nie pochodzi wcale od Napoleona, lecz od warszawskiej cukierni „Napoleonka”, która mieściła się dawniej przy placu Napoleona i przekazała ciastku swoją nazwę. Pod nazwą kremówka ciastko zyskało jeszcze większą sławę w 1999 roku, gdy Jan Paweł II podczas wizyty w rodzinnych Wadowicach opowiedział, jak po maturze z kolegami jadał kremówki w cukierni Karola Hagenhubera, podobno nawet osiemnaście sztuk jednego dnia. Od tamtej pory kremówka papieska stała się kulinarnym symbolem Wadowic, choć tamta konkretna cukiernia dawno już nie istnieje. W obu wersjach zasada zostaje ta sama: ciasto francuskie, gruby krem waniliowy, cukier puder, zupełnie inaczej niż jabłecznik [szarlotka](/pl/rezepte/szarlotka), sernik [sernik](/pl/rezepte/sernik), płaski wielkanocny [mazurek](/pl/rezepte/mazurek) czy tort czekoladowo-śmietankowy [wuzetka](/pl/rezepte/wuzetka).",
    shopDe:
      "Für die Hausversion brauchst du Blätterteig, am besten mit reinem Butteranteil, dazu Milch, Eigelb, Zucker, Speisestärke oder Vanillepudding sowie Butter, Vanille und Puderzucker. Die Grundzutaten bekommst du im Supermarkt, Vanille und manchmal die bessere Puddingmischung im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt Butter oder Vanille, ersetzt du beides ehrlich laut den [Ersatzprodukten](/de/blog/ersatzprodukte-de). Ein Apfelkern wäre [Szarlotka](/de/rezepte/szarlotka), ein Quarkkern [Sernik](/de/rezepte/sernik), Schoko-Sahne führt zur [Wuzetka](/de/rezepte/wuzetka).",
    shopPl:
      "Na domową wersję potrzebujesz ciasta francuskiego, najlepiej z dużym udziałem masła, do tego mleka, żółtek, cukru, skrobi lub budyniu waniliowego oraz masła, wanilii i cukru pudru. Podstawowe składniki kupisz w markecie, wanilię i czasem lepszy budyń w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Brak masła lub wanilii zastąpisz uczciwie według [zamienników składników](/pl/blog/zamienniki-skladnikow). Jabłkowy środek to [szarlotka](/pl/rezepte/szarlotka), twarogowy [sernik](/pl/rezepte/sernik), a czekolada ze śmietaną prowadzi do [wuzetki](/pl/rezepte/wuzetka).",
    techniqueDe:
      "Blätterteig dünn ausrollen, gut einstechen und heiß knusprig backen, denn zu weich trägt er die Creme nicht und zu dunkel wird er bitter. Die Creme dicklich kochen und abkühlen lassen, bevor sie auf den Teig kommt, heiße Creme weicht den Teig sofort auf und macht den Schnitt matschig. Die Schichten ruhig und gleichmäßig aufbauen und mindestens zwei bis drei Stunden kühlen, bis sich die Napoleonka sauber schneiden lässt. Zu flüssige Creme lässt die Schichten verrutschen, zu trockene Creme bröckelt beim Anschneiden. Am Ende zählt eine Hausvariante: fertiger Blätterteig, Vanillecreme, Puderzucker, ohne Schoko-Glasur und ohne Apfelkern.",
    techniquePl:
      "Ciasto francuskie rozwałkuj cienko, dobrze nakłuj i piecz na chrupko w wysokiej temperaturze, bo zbyt miękkie nie uniesie kremu, a zbyt ciemne zrobi się gorzkie. Krem ugotuj do gęstości i ostudź, zanim trafi na ciasto, bo gorący od razu je rozmiękcza i psuje przekrój. Warstwy układaj spokojnie i równo, a chłodź co najmniej dwie do trzech godzin, aż napoleonka da się czysto pokroić. Zbyt rzadki krem powoduje ślizganie się warstw, zbyt suchy kruszy się przy krojeniu. Na końcu liczy się jeden domowy wariant: gotowe ciasto francuskie, krem waniliowy, cukier puder, bez lukru czekoladowego i bez jabłka.",
    serveDe:
      "In Rechtecken, kalt, meist mit Puderzucker bestäubt, zu Tee oder Kaffee servieren, gut als ruhiger Abschluss neben dem [polnischen Sonntagsessen](/de/blog/sonntagsessen-polnisch). Auf dem Tisch bleibt klar: Apfelkuchen ist [Szarlotka](/de/rezepte/szarlotka), Quarkkuchen ist [Sernik](/de/rezepte/sernik), der flache Osterkuchen ist [Mazurek](/de/rezepte/mazurek). Eine Schoko-Sahne-Präsentation gehört nicht dazu, das bleibt die [Wuzetka](/de/rezepte/wuzetka). Gekühlt hält sich Napoleonka ein bis zwei Tage, am besten schmeckt sie am Backtag oder am Tag danach.",
    servePl:
      "Podawaj w prostokątach, na zimno, zwykle z cukrem pudrem, do herbaty lub kawy, dobrze pasuje jako spokojne zwieńczenie [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Na stole zostaje jasny podział: jabłecznik to [szarlotka](/pl/rezepte/szarlotka), sernik to [sernik](/pl/rezepte/sernik), płaski wielkanocny to [mazurek](/pl/rezepte/mazurek). Prezentacja czekoladowo-śmietankowa to zupełnie inna sprawa, czyli [wuzetka](/pl/rezepte/wuzetka). Schłodzona napoleonka trzyma jeden do dwóch dni, najlepiej smakuje w dniu pieczenia lub dzień później.",
    diasporaDe:
      "Napoleonka ist der Bäckerei-Klassiker, den deutsche Gäste oft als Cremeschnitte kennen und polnische Familien sofort als Kremówka wiedererkennen, sobald der Teig knusprig und die Creme vanillig ist. Ein Blech reicht für den ganzen Sonntag, Stücke für Gäste, der Rest hält bis zum nächsten Morgen. Fertiger Blätterteig ist in der Diaspora eine ehrliche und zeitsparende Wahl, den Charakter trägt ohnehin die Creme. Zutaten für die Creme findest du im [Polenladen](/de/blog/polenladen-einkaufen), Alternativen bei den [Ersatzprodukten](/de/blog/ersatzprodukte-de).",
    diasporaPl:
      "Napoleonka to klasyk cukierniczy, który niemieccy goście rozpoznają jako przekrój z kremem, a polskie rodziny od razu jako kremówkę, gdy ciasto jest chrupkie, a krem waniliowy. Jedna blacha starcza na całą niedzielę, kawałki dla gości, reszta na następny poranek. Gotowe ciasto francuskie to w diasporze uczciwy i szybki wybór, bo charakter i tak niesie krem. Składniki na krem znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), alternatywy w [zamiennikach składników](/pl/blog/zamienniki-skladnikow).",
    mistakesDe:
      "Napoleonka wird gern mit [Szarlotka](/de/rezepte/szarlotka) wegen der Blechform oder mit [Wuzetka](/de/rezepte/wuzetka) wegen der Schoko-Sahne-Optik verwechselt, dabei hat sie weder Apfel noch Schokolade. Zu weicher, nicht ausreichend gebackener Teig trägt die Creme schlecht, und zu flüssige Creme lässt die Schichten verrutschen. Wird zu früh geschnitten, bevor die Napoleonka richtig durchgekühlt ist, zerfällt der Schnitt statt sauber zu bleiben.",
    mistakesPl:
      "Napoleonkę łatwo pomylić z [szarlotką](/pl/rezepte/szarlotka) przez formę blachy albo z [wuzetką](/pl/rezepte/wuzetka) przez wygląd czekoladowo-śmietankowy, choć nie ma tu ani jabłka, ani czekolady. Zbyt miękkie, niedopieczone ciasto słabo unosi krem, a zbyt rzadki krem sprawia, że warstwy się ślizgają. Krojenie zbyt wcześnie, zanim napoleonka porządnie się schłodzi, rozwala przekrój zamiast go zostawić czystym.",
    variantsDe:
      "Mit mehr Vanille wird die Creme intensiver, mit dünner Zuckerglasur statt Puderzucker wirkt die Napoleonka festlicher, und mit drei statt zwei Teiglagen wird sie höher. Wer Apfelkuchen sucht, findet ihn bei [Szarlotka](/de/rezepte/szarlotka), Käsekuchen bei [Sernik](/de/rezepte/sernik), den flachen Osterkuchen bei [Mazurek](/de/rezepte/mazurek). Für den Alltagsrahmen passt das [Sonntagsessen](/de/blog/sonntagsessen-polnisch), Einkaufshilfen liefern der [Polenladen](/de/blog/polenladen-einkaufen) und die [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Z większą ilością wanilii krem robi się intensywniejszy, z cienkim lukrem zamiast samego cukru pudru napoleonka wygląda bardziej odświętnie, a z trzema warstwami ciasta zamiast dwóch robi się wyższa. Kto szuka jabłecznika, znajdzie go w [szarlotce](/pl/rezepte/szarlotka), sernik w [serniku](/pl/rezepte/sernik), płaski wielkanocny w [mazurku](/pl/rezepte/mazurek). Do codziennej ramy pasuje [obiad niedzielny](/pl/blog/obiad-niedzielny), a wskazówki zakupowe dają [sklep polski](/pl/blog/sklep-polski-zakupy) i [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
  },
};
