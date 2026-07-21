/**
 * Wave 13 Paket B — FACTS for Kutia + Napoleonka.
 * Isolated export `W13_FACTS_B` — Integrator merges into recipe-articles.ts FACTS map.
 * Shape matches ArticleFacts in recipe-articles.ts.
 *
 * Ownership:
 * - Kutia Primary nur /rezepte/kutia
 * ≠ Makaron z makiem (Nudeln+Mohn) ≠ Makowiec (Rolle) ≠ Kompot z suszu
 * - Napoleonka Primary nur /rezepte/napoleonka
 * ≠ Szarlotka ≠ Sernik ≠ Mazurek ≠ Wuzetka (Schoko-Sahne → /rezepte/wuzetka)
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
 vibeDe: "süß-mohnig, körnig-nussig, wigilijny und ruhig in der Schüssel",
 vibePl: "słodko-makowy, ziarnisto-orzechowy, wigilijny i spokojny w misce",
 originDe:
 "Kutia ist das Rezept für das süße Getreide-Dessert aus Weizenkörnern, Mohn, Honig und Nüssen — typisch ostpolnisch und diaspora-stark zur Wigilia — und bewusst keine Nudelplatte. [Makaron z makiem](/de/rezepte/makaron-z-makiem) bleibt das passende Rezept der Pasta+Mohn-Linie; [Makowiec](/de/rezepte/makowiec) bleibt das passende Rezept der Hefe-Mohnrolle und des Backprojekts; der Technik-Guide bleibt [Makowiec-Technik](/de/blog/makowiec-technik). Parallel klar getrennt von [Kompot z suszu](/de/rezepte/kompot-z-suszu): dort Getränk/Dessert-Kompot, hier die Schüssel mit gekochtem Weizen. Am [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan) steht Kutia oft als regionales Getreide-Mohn-Gericht — der Speiseplan bleibt Menü-Artikel, hier nur Mengen und Schritte. In der Diaspora ist Kutia der Moment, in dem Körner, Mohn und Honig zusammenkommen, ohne Ofen und ohne Nudeltopf: Weizen garen, Masse binden, vermengen, kühlen. Keine Pasta, keine Spirale, kein Hefeteig.",
 originPl:
 "Kutia to przepis na słodki deser zbożowy z ziaren pszenicy, maku, miodu i orzechów — typowo wschodniopolski i mocny w diasporze na Wigilię — świadomie nie talerz makaronu. [Makaron z makiem](/pl/rezepte/makaron-z-makiem) zostaje przepisem na linii pasta+mak; [makowiec](/pl/rezepte/makowiec) zostaje przepisem na drożdżowej rolady i projektu pieczenia; filar techniki zostaje przy [technice makowca](/pl/blog/makowiec-technika). Równolegle jasno osobno od [kompotu z suszu](/pl/rezepte/kompot-z-suszu): tam napój/kompot, tu miska ugotowanej pszenicy. Przy [menu wigilijnym](/pl/blog/menu-wigilijne) bywa regionalną potrawą zbożowo-makową — artykuł menu zostaje artykułem o okazji, tu tylko ilości i kroki. W diasporze kutia to moment, gdy ziarna, mak i miód spotykają się bez pieca i bez garnka makaronu: ugotować pszenicę, związać masę, wymieszać, schłodzić. Bez makaronu, bez spirali, bez drożdży.",
 shopDe:
 "Geschälte Weizenkörner (pszenica) und blauer Mohn — möglichst frisch gemahlen — sind Charakterträger und oft im [Polenladen](/de/blog/polenladen-einkaufen) besser als im Supermarkt. Dazu Honig, Walnüsse oder Mandeln, Rosinen, etwas Milch. Wenn gemahlener Mohn fehlt: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) — Funktion vor Label, aber kein Kakao als „Mohnfake“ und keine Nudeln als „Weizenersatz“. Perlgerste nur ehrlich als Ersatz benennen; klassische Linie bleibt Weizen. Keine Hefe und kein Rollteig: das bliebe [Makowiec](/de/rezepte/makowiec). Keine kurzen Eiernudeln: das wäre [Makaron z makiem](/de/rezepte/makaron-z-makiem).",
 shopPl:
 "Obrana pszenica i mak niebieski — najlepiej świeżo mielony — to charakter; często lepsze w [sklepie polskim](/pl/blog/sklep-polski-zakupy) niż w markecie. Do tego miód, orzechy włoskie lub migdały, rodzynki, odrobina mleka. Gdy brak mielonego: [zamienniki składników](/pl/blog/zamienniki-skladnikow) — funkcja przed etykietą, ale bez kakao jako „fake maku” i bez makaronu jako „zamiennika pszenicy”. Pęczak tylko uczciwie jako zamiennik; klasyczna linia zostaje przy pszenicy. Bez drożdży i ciasta na rolację: to zostaje [makowiec](/pl/rezepte/makowiec). Bez krótkiego makaronu: to byłby [makaron z makiem](/pl/rezepte/makaron-z-makiem).",
 techniqueDe:
 "Weizen weich, aber mit Biss kochen — zu hart bleibt sandig, zu zerkocht wird Brei. Mohn aufquellen, mahlen, mit Honig und Nüssen binden: streichfähig und glänzend, nicht tropfen, nicht mehlig-trocken. Heiß oder lauwarm vermengen, dann kühlen — Geschmack rundet sich. Bitterkeit kommt oft von altem Mohn; frische Samen prüfen. Masse-Logik darf an [Makowiec-Technik](/de/blog/makowiec-technik) anknüpfen Kein Nudelwasser, kein Ofenschritt: fertig in der Schüssel.",
 techniquePl:
 "Pszenicę ugotować miękko, ale z gryzieniem — za twarda zostaje piaszczysta, za rozgotowana robi kleik. Mak namoczyć, zmielić, związać miodem i orzechami: smarownie i z połyskiem, nie cieknie, nie jest sucha jak mąka. Mieszać ciepło lub letnio, potem chłodzić — smak się zbiera. Gorycz często ze starego maku; sprawdź świeżość. Logika masy może nawiązać do [techniki makowca](/pl/blog/makowiec-technika), osobny farsz i osobne ilości. „pieczenia ciasta makowego”. Bez wody z makaronu i pieca: gotowe w misce.",
 serveDe:
 "In Schalen oder einer gemeinsamen Schüssel, oft kalt oder zimmerwarm, als süßer Gang am [Wigilia](/de/blog/wigilia-speiseplan)-Tisch neben Kompot und Fisch — Menü-Artikel bleibt der Speiseplan. Klar getrennt: Nudeln mit Mohn = [Makaron z makiem](/de/rezepte/makaron-z-makiem); Scheiben mit Spirale = [Makowiec](/de/rezepte/makowiec); Glas mit Trockenobst = [Kompot z suszu](/de/rezepte/kompot-z-suszu). Reste abgedeckt im Kühlschrank; vor dem Servieren umrühren, ggf. etwas Honig nachziehen.",
 servePl:
 "W miseczkach lub jednej misce, często na zimno lub w temperaturze pokojowej, jako słodki element przy [menu wigilijnym](/pl/blog/menu-wigilijne) obok kompotu i ryby — artykuł menu zostaje przy artykule. Na stole: makaron z makiem = [makaron z makiem](/pl/rezepte/makaron-z-makiem); plastry ze spiralą = [makowiec](/pl/rezepte/makowiec); szklanka z suszem = [kompot z suszu](/pl/rezepte/kompot-z-suszu). Resztki przykryte w lodówce; przed podaniem wymieszać, ewentualnie dolać miodu.",
 diasporaDe:
 "In deutschen Küchen rettet Kutia oft den Mohn-Slot, wenn niemand Hefe führen und niemand noch Nudeln mit Masse rühren will: ein Topf Weizen, eine Schüssel Masse, Kühlschrank. Mohn und Weizen aus dem Polenladen halten; Kinder dürfen Nüsse streuen — heißer Topf bei Erwachsenen. Kein Affiliate-Zwang: gute Körner und frischer Mohn reichen. Technik-Nachbar: [Makowiec-Technik](/de/blog/makowiec-technik). Im [Polenladen](/de/blog/polenladen-einkaufen) findest du typische Spezialzutaten.",
 diasporaPl:
 "W niemieckich kuchniach kutia często ratuje slot makowy, gdy nikt nie chce prowadzić drożdży i nikt nie chce już mieszać makaronu z masą: jeden garnek pszenicy, jedna miska masy, lodówka. Mak i pszenica ze sklepu polskiego; dzieci mogą sypać orzechy — gorący garnek u dorosłych. Bez affiliate: dobre ziarna i świeży mak wystarczą. Sąsiad techniki: [technika makowca](/pl/blog/makowiec-technika). W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności.",
 mistakesDe:
 "Mit Makaron z makiem verwechseln (Nudeln statt Weizenkörner). Mit Makowiec verwechseln (Rolle statt Schüssel). Zu trockene, sandige Masse; bitterer alter Mohn; zu hart gekochter Weizen; Speiseplan-Mengen hier duplizieren statt zu verlinken. Kasza manna als „dasselbe“ verkaufen, ohne ehrlich zu benennen.",
 mistakesPl:
 "Mylenie z makaronem z makiem (makaron zamiast ziaren). Mylenie z makowcem (rolada zamiast miski). Za sucha, piaszczysta masa; gorzki stary mak; za twarda pszenica; duplikować menu zamiast linkować. Sprzedawać kaszę manną jako „to samo” bez uczciwej nazwy.",
 variantsDe:
 "Mit mehr Honig runder; mit Orangenschale statt Zitrone; mit mehr Nüssen; kalt als Restespeise. Nudeln+Mohn bleibt [Makaron z makiem](/de/rezepte/makaron-z-makiem); Mohnrolle: [Makowiec](/de/rezepte/makowiec). Zum Anlass passt [Wigilia](/de/blog/wigilia-speiseplan). Technik-Feeling: [Makowiec-Technik](/de/blog/makowiec-technik). Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen.",
 variantsPl:
 "Z większą ilością miodu łagodniej; ze skórką pomarańczy zamiast cytryny; z większą ilością orzechów; na zimno jako resztka. Makaron+mak: [makaron z makiem](/pl/rezepte/makaron-z-makiem); rolada: [makowiec](/pl/rezepte/makowiec). Do okazji pasuje [menu wigilijne](/pl/blog/menu-wigilijne). Więcej w artykule [makowiec-technika](/pl/blog/makowiec-technika). W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe.",
 },
 "recipe-napoleonka": {
 dishDe: "Napoleonka / Kremówka",
 dishPl: "Napoleonka / kremówka",
 vibeDe: "blättrig-cremig, puderzuckerweiß, Bäckerei und Sonntagskaffee",
 vibePl: "listkowato-kremowy, biały od cukru pudru, cukiernia i niedzielna kawa",
 originDe:
 "Napoleonka (auch Kremówka) ist der polnische Blätterteig-Schnitt mit Vanillecreme — millefeuille-ähnlich, oft mit Puderzucker — und bewusst kein Apfelkuchen und keine Schoko-Sahne-Torte. [Szarlotka](/de/rezepte/szarlotka) bleibt das passende Rezept des Apfelkuchens vom Blech; [Sernik](/de/rezepte/sernik) dem Käsekuchen; [Mazurek](/de/rezepte/mazurek) dem flachen Osterbelag. Wer Schoko-Sahne-Torte sucht: [Wuzetka](/de/rezepte/wuzetka) — anderer Rezept. Hier tragen Blätterteig und Vanillecreme den Fokus „Napoleonka / Kremówka Rezept“: knusprige Platten, dicke Creme, kalter Rechteckschnitt. Am [Sonntagsessen](/de/blog/sonntagsessen-polnisch) darf sie der ruhige Kaffee-Schluss sein  — Mengen und Schritte stehen oben im Rezept. In der Diaspora ist das oft der Bäckerei-Klassiker, den man zu Hause mit Fertigteig nachbaut, wenn der Sonntagsnachmittag Zeit für Schichten und Kühlschrank hat. Kein generisches „beste Millefeuille“- ohne polnischen Namen: eng bei Napoleonka/Kremówka bleiben.",
 originPl:
 "Napoleonka (kremówka) to polski przekrój z ciasta francuskiego i kremu waniliowego — w stylu millefeuille, często z cukrem pudrem — świadomie nie jabłecznik i nie tort czekoladowo-śmietankowy. [Szarlotka](/pl/rezepte/szarlotka) zostaje przepisem na ciasta jabłkowego z blachy; [sernik](/pl/rezepte/sernik) sernika; [mazurek](/pl/rezepte/mazurek) płaskiego wielkanocnego. Kto szuka tortu czekoladowo-śmietankowego: [wuzetka](/pl/rezepte/wuzetka) — inny Rezept. Tu ciasto francuskie i krem waniliowy niosą charakter „napoleonka / kremówka przepis”: chrupkie płaty, gęsty krem, zimny prostokątny przekrój. Przy [obiadzie niedzielnym](/pl/blog/obiad-niedzielny) bywa spokojnym domknięciem przy kawie — Tu zostają ilości i kroki. W diasporze to często klasyk cukierniczy, który w domu odtwarza się z gotowym ciastem, gdy niedzielne popołudnie ma czas na warstwy i lodówkę. Bez generycznego „best millefeuille” bez polskiej nazwy: wąsko przy napoleonce/kremówce.",
 shopDe:
 "Blätterteig (fertig all-butter oder selbst), Milch, Eigelb, Zucker, Speisestärke oder Vanillepudding, Butter, Vanille, Puderzucker. Basis im Supermarkt; Vanille und manchmal bessere Puddingmischung im [Polenladen](/de/blog/polenladen-einkaufen). Wenn Butter oder Vanille knapp: ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) — keine Margarine-Show als „dasselbe“. Kein Apfelkern: das wäre [Szarlotka](/de/rezepte/szarlotka). Kein Quarkkern: das wäre [Sernik](/de/rezepte/sernik). Keine Schokocreme als Hauptgericht hier: das wäre [Wuzetka](/de/rezepte/wuzetka).",
 shopPl:
 "Ciasto francuskie (gotowe maślane lub własne), mleko, żółtka, cukier, skrobia lub budyń waniliowy, masło, wanilia, cukier puder. Baza w markecie; wanilia i czasem lepszy budyń w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Gdy brak masła lub wanilii: uczciwie według [zamienników składników](/pl/blog/zamienniki-skladnikow) — bez show margaryny jako „to samo”. Bez jabłka: to byłaby [szarlotka](/pl/rezepte/szarlotka). Bez twarogu: to byłby [sernik](/pl/rezepte/sernik). Bez kremu czekoladowego jako fokus: to byłaby [wuzetka](/pl/rezepte/wuzetka).",
 techniqueDe:
 "Blätterteig dünn, gut einstechen, heiß und knusprig backen — zu weich trägt die Creme nicht; zu dunkel schmeckt bitter. Creme dicklich und abgekühlt binden; heiße Creme weicht den Teig sofort auf und macht den Schnitt matschig. Schichten ruhig und gleichmäßig; mindestens zwei bis drei Stunden kühlen, bis der Schnitt sauber ist. Zu flüssige Creme = Rutschen; zu trockene Creme = bröckelnde Füllung. Mit scharfem Messer und ruhigem Druck schneiden, nicht sägen. Eine Hausvariante festhalten: fertiger Blätterteig + Vanillecreme + Puderzucker (keine Schoko-Glasur als Hauptgericht hier, kein Apfelkern).",
 techniquePl:
 "Ciasto francuskie cienko, dobrze nakłuć, piec na chrupko — zbyt miękkie nie uniesie kremu; zbyt ciemne smakuje gorzko. Krem gęsty i ostudzony; gorący od razu rozmiękcza ciasto i psuje przekrój. Warstwy spokojnie i równo; chłodzić co najmniej dwie–trzy godziny aż krojenie jest czyste. Za rzadki krem = ślizganie; za suchy = krusząca się masa. Ostrym nożem i spokojnym naciskiem, bez piłowania. Trzymać jeden wariant domu: gotowe ciasto francuskie + krem waniliowy + cukier puder (bez lukru czekoladowego jako fokus, bez jabłka).",
 serveDe:
 "In Rechtecken, kalt, oft mit Puderzucker, zu Tee oder Kaffee. Als Sonntagsschluss unter [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Auf dem Tisch klar halten: Apfelkuchen = [Szarlotka](/de/rezepte/szarlotka); Quarkkuchen = [Sernik](/de/rezepte/sernik); flacher Osterkuchen = [Mazurek](/de/rezepte/mazurek). Keine Schoko-Sahne-Präsentation als „dasselbe“. Hält ein bis zwei Tage gekühlt; Teig weicht allmählich — am besten am Backtag oder am Tag danach servieren.",
 servePl:
 "W prostokątach, na zimno, często z cukrem pudrem, do herbaty lub kawy. Jako niedzielne domknięcie pod [obiadem niedzielnym](/pl/blog/obiad-niedzielny). Na stole: jabłecznik = [szarlotka](/pl/rezepte/szarlotka); sernik = [sernik](/pl/rezepte/sernik); płaski wielkanocny = [mazurek](/pl/rezepte/mazurek). Bez prezentacji czekoladowo-śmietankowej jako „to samo”. Trzyma dzień–dwa w chłodzie; ciasto z czasem mięknie — najlepiej w dniu pieczenia lub dzień później.",
 diasporaDe:
 "Napoleonka ist der Bäckerei-Klassiker, den deutsche Gäste als „Creme-Schnitt“ verstehen und polnische Familien als Kremówka wiedererkennen, wenn der Teig knusprig und die Creme vanillig ist. Ein Blech für den Sonntag, Stücke für Gäste, Rest für den nächsten Morgen. Fertigteig ist diaspora-ehrlich und spart Zeit — die Creme bleibt der Charakterträger. Kein Zwang zu Schoko-Torten-Ästhetik — Puderzucker reicht. Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen.",
 diasporaPl:
 "Napoleonka to klasyk cukierniczy, który niemieccy goście rozumieją jako „przekrój z kremem”, a polskie rodziny rozpoznają jako kremówkę, gdy ciasto jest chrupkie, a krem waniliowy. Jedna blacha na niedzielę, kawałki dla gości, resztka na następny poranek. Gotowe ciasto jest uczciwe w diasporze i oszczędza czas — charakter niesie krem. Bez przymusu estetyki tortu czekoladowego — cukier puder wystarczy. W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe.",
 mistakesDe:
 "Mit Szarlotka verwechseln (Apfel). Mit Sernik Mit [Wuzetka](/de/rezepte/wuzetka) verwechseln (Schoko-Sahne). Zu weicher Teig; zu flüssige Creme; zu früh schneiden; heiße Creme auf heißem Teig. Generisches Millefeuille- ohne Napoleonka/Kremówka.",
 mistakesPl:
 "Mylenie z szarlotką (jabłko). Kradzież fokus sernika. Mylenie z [wuzetką](/pl/rezepte/wuzetka) (czekolada+śmietana). Zbyt miękkie ciasto; za rzadki krem; zbyt wczesne krojenie; gorący krem na gorącym cieście. Generyczne millefeuille bez napoleonki/kremówki.",
 variantsDe:
 "Mit mehr Vanille, mit dünner Glasur statt nur Puderzucker, mit drei Teiglagen. Apfelkuchen: [Szarlotka](/de/rezepte/szarlotka). Käsekuchen: [Sernik](/de/rezepte/sernik). Osterflachkuchen: [Mazurek](/de/rezepte/mazurek). Alltagskultur: [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen.",
 variantsPl:
 "Z większą ilością wanilii, z cienkim lukrem zamiast samego pudru, z trzema warstwami ciasta. Jabłecznik: [szarlotka](/pl/rezepte/szarlotka). Sernik: [sernik](/pl/rezepte/sernik). Wielkanocny płaski: [mazurek](/pl/rezepte/mazurek). Kultura dnia: [obiad niedzielny](/pl/blog/obiad-niedzielny). W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe.",
 },
};
