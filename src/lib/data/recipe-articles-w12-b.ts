/**
 * Wave 12 Paket B — FACTS for Makaron z makiem + Szarlotka.
 * Isolated export `W12_FACTS_B` — Integrator merges into recipe-articles.ts FACTS map.
 * Shape matches ArticleFacts in recipe-articles.ts.
 *
 * Ownership:
 * - Makaron z makiem Primary nur /rezepte/makaron-z-makiem
 * ≠ Makowiec (Rolle/Hefeteig) ≠ Makaron z serem (Twaróg)
 * - Szarlotka Primary nur /rezepte/szarlotka
 * ≠ Racuchy (Hefe-Pfanne) ≠ Piernik ≠ Sernik ≠ Babka
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

export const W12_FACTS_B: Record<string, ArticleFacts> = {
 "recipe-makaron-z-makiem": {
 dishDe: "Makaron z makiem",
 dishPl: "Makaron z makiem",
 vibeDe: "süß-mohnig, butterweich, festlich und trotzdem topfschnell",
 vibePl: "słodko-makowy, maślany, świąteczny a jednocześnie szybki z garnka",
 originDe:
 "Makaron z makiem ist das Rezept für gekochte Nudeln mit Mohnmasse — Butter, Zucker, oft Rosinen — und bewusst keine gerollte Hefe-Mohnrolle. [Makowiec](/de/rezepte/makowiec) bleibt Rezept für die Mohnrolle und des Wigilia-Backprojekts; der Technik-Guide bleibt [Makowiec-Technik](/de/blog/makowiec-technik). Parallel klar getrennt von [Makaron z serem](/de/rezepte/makaron-z-serem): dort Twaróg und Butter/Zucker als Pasta+Quark-Linie, hier trägt gemahlener Mohn den Charakter. Am [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan) steht Makaron z makiem oft als machbare Mohnspeise, wenn niemand noch eine Rolle führen will — der Speiseplan bleibt Menü-Artikel, hier nur Mengen und Schritte. In der Diaspora ist das der Mohn-Teller, der in unter einer Stunde fertig ist: Nudeln kochen, Masse binden, vermengen. Kein Hefeteig, kein Rollen, kein Ofengeduld-Marathon.",
 originPl:
 "Makaron z makiem to przepis na ugotowany makaron z masą makową — masło, cukier, często rodzynki — świadomie nie zwijana rolada drożdżowa. [Makowiec](/pl/rezepte/makowiec) zostaje przepisem na spiralę i projekt pieczenia; filar techniki zostaje przy [technice makowca](/pl/blog/makowiec-technika). Równolegle jasno osobno od [makaronu z serem](/pl/rezepte/makaron-z-serem): tam twaróg i masło/cukier jako linia pasta+twaróg, tu charakter niesie mielony mak. Przy [menu wigilijnym](/pl/blog/menu-wigilijne) bywa wykonalną potrawą makową, gdy nikt nie chce już prowadzić rolady — artykuł menu zostaje artykułem o okazji, tu tylko ilości i kroki. W diasporze to talerz maku gotowy poniżej godziny: ugotować makaron, związać masę, wymieszać. Bez drożdży, bez zwijania, bez maratonu pieca.",
 shopDe:
 "Kurze Eiernudeln oder Bandnudeln aus dem Supermarkt, Butter, Zucker, Milch. Der Charakterträger ist blauer Mohn — möglichst frisch gemahlen im [Polenladen](/de/blog/polenladen-einkaufen); ganze Samen selbst mahlen und ehrlich benennen. Optional Honig, Rosinen, Zitronenschale. Wenn gemahlener Mohn fehlt: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) — Funktion vor Label, aber kein Kakao als „Mohnfake“. Kein Twaróg als Kern: das wäre [Makaron z serem](/de/rezepte/makaron-z-serem). Keine Hefe und kein Rollteig: das bliebe [Makowiec](/de/rezepte/makowiec).",
 shopPl:
 "Krótki makaron jajeczny lub wstążki z supermarketu, masło, cukier, mleko. Charakter buduje mak niebieski — najlepiej świeżo mielony w [sklepie polskim](/pl/blog/sklep-polski-zakupy); całe ziarna zmiel i nazwij uczciwie. Opcjonalnie miód, rodzynki, skórka cytryny. Gdy brak mielonego: [zamienniki składników](/pl/blog/zamienniki-skladnikow) — funkcja przed etykietą, ale bez kakao jako „fake maku”. Bez twarogu jako rdzenia: to byłby [makaron z serem](/pl/rezepte/makaron-z-serem). Bez drożdży i ciasta na rolację: to zostaje [makowiec](/pl/rezepte/makowiec).",
 techniqueDe:
 "Nudeln al dente, Mohn mit heißer Flüssigkeit aufquellen, abtropfen, mit Zucker und Butter zu einer streichfähigen Masse binden — nicht tropfen, nicht sandig-trocken. Heiß vermengen; Nudelwasser nur sparsam. Bitterkeit kommt oft von altem Mohn oder zu starkem Rösten — frische Samen prüfen. Masse-Logik darf an [Makowiec-Technik](/de/blog/makowiec-technik) anknüpfen Kein Rollen, kein Ofenschritt: fertig im Topf.",
 techniquePl:
 "Makaron al dente, mak zalać gorącym płynem, odsączyć, związać cukrem i masłem do masy smarownej — nie cieknie, nie jest sucha jak piasek. Mieszać na gorąco; wody z gotowania tylko odrobinę. Gorycz często ze starego maku lub zbyt mocnego prażenia — sprawdź świeżość. Logika masy może nawiązać do [techniki makowca](/pl/blog/makowiec-technika), osobny farsz i osobne ilości. „pieczenia ciasta makowego”. Bez zwijania i pieca: gotowe w garnku.",
 serveDe:
 "Warm auf Tellern, oft mit Puderzucker, als süßer Gang oder Mohnspeise am [Wigilia](/de/blog/wigilia-speiseplan)-Tisch neben Kompot und Fisch — Menü-Artikel bleibt der Speiseplan. Klar getrennt: Scheiben mit Spirale = [Makowiec](/de/rezepte/makowiec); cremige Pasta mit Quark = [Makaron z serem](/de/rezepte/makaron-z-serem). Reste kalt oder kurz in Butter in der Pfanne; nicht erneut hart kochen.",
 servePl:
 "Ciepło na talerzach, często z cukrem pudrem, jako słodki element lub potrawa makowa przy [menu wigilijnym](/pl/blog/menu-wigilijne) obok kompotu i ryby — artykuł menu zostaje przy artykule. Na stole: plastry ze spiralą = [makowiec](/pl/rezepte/makowiec); kremowy makaron z twarogiem = [makaron z serem](/pl/rezepte/makaron-z-serem). Resztki na zimno albo krótko na maśle; nie gotować ponownie na twardo.",
 diasporaDe:
 "In deutschen Küchen rettet Makaron z makiem oft den 24. Dezember, wenn der Ofen schon voll ist und niemand Hefe führen will: ein Topf Nudeln, eine Schüssel Masse, fertig. Mohn aus dem Polenladen halten; Kinder dürfen streuen und rühren — heißer Topf bei Erwachsenen. Kein Affiliate-Zwang: gute Standardnudeln und frischer Mohn reichen. Technik-Nachbar: [Makowiec-Technik](/de/blog/makowiec-technik).",
 diasporaPl:
 "W niemieckich kuchniach makaron z makiem często ratuje 24 grudnia, gdy piec jest zajęty i nikt nie chce prowadzić drożdży: jeden garnek makaronu, jedna miska masy, gotowe. Mak ze sklepu polskiego; dzieci mogą sypać i mieszać — gorący garnek u dorosłych. Bez affiliate: dobry zwykły makaron i świeży mak wystarczą. Sąsiad techniki: [technika makowca](/pl/blog/makowiec-technika).",
 mistakesDe:
 "Mit Makowiec verwechseln (Rolle statt Pasta). Mit Makaron z serem verwechseln (Quark statt Mohn). Zu trockene, sandige Masse; bitterer alter Mohn; zu viel Nudelwasser wird zur Suppe; Speiseplan-Mengen hier duplizieren statt zu verlinken. Hefe oder Ofenschritt als Hauptgericht hier erfinden.",
 mistakesPl:
 "Mylenie z makowcem (rolada zamiast makaronu). Mylenie z makaronem z serem (twaróg zamiast maku). Za sucha, piaszczysta masa; gorzki stary mak; za dużo wody robi się zupa; duplikować menu zamiast linkować. Wymyślać drożdże lub piec jako fokus.",
 variantsDe:
 "Mit mehr Honig runder; mit Rosinen klassisch; mit Orangenschale statt Zitrone; kalt als Restespeise. Mohnrolle bleibt [Makowiec](/de/rezepte/makowiec); Pasta+Quark: [Makaron z serem](/de/rezepte/makaron-z-serem). Weizenkörner+Mohn (≠ Nudeln): [Kutia](/de/rezepte/kutia). Zum Anlass passt [Wigilia](/de/blog/wigilia-speiseplan). Technik-Feeling: [Makowiec-Technik](/de/blog/makowiec-technik). Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen.",
 variantsPl:
 "Z większą ilością miodu łagodniej; z rodzynkami klasycznie; ze skórką pomarańczy zamiast cytryny; na zimno jako resztka. Rolada: [makowiec](/pl/rezepte/makowiec); pasta+twaróg: [makaron z serem](/pl/rezepte/makaron-z-serem). Pszenica+mak (≠ makaron): [kutia](/pl/rezepte/kutia). Do okazji pasuje [menu wigilijne](/pl/blog/menu-wigilijne). Więcej w artykule [makowiec-technika](/pl/blog/makowiec-technika). W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe.",
 },
 "recipe-szarlotka": {
 dishDe: "Szarlotka",
 dishPl: "Szarlotka",
 vibeDe: "apflig-zimtig, mürbe vom Blech, Kaffee- und Sonntagskuchen",
 vibePl: "jabłkowo-cynamonowy, kruchy z blachy, ciasto do kawy i niedzieli",
 originDe:
 "Szarlotka ist der polnische Apfelkuchen — typisch Mürbeteig vom Blech oder aus der Form, saftige Äpfel, oft mit Streusel oder Deckel — und bewusst kein Hefe-Pfannkuchen. [Racuchy z jabłkami](/de/rezepte/racuchy-jablka) bleiben Rezept für die Apfel-Hefe in der Pfanne; [Piernik](/de/rezepte/piernik) dem Honig-Gewürz-Lebkuchen; [Sernik](/de/rezepte/sernik) dem Käsekuchen; [Babka](/de/rezepte/babka) dem Hefegugelhupf. Hier tragen Apfel und kurzer Teig den Thema „polnischer Apfelkuchen / Szarlotka“. Am [Sonntagsessen](/de/blog/sonntagsessen-polnisch) darf sie der ruhige Kaffee-Schluss sein  — Mengen und Schritte stehen oben im Rezept. Eng bei Szarlotka bleiben, nicht bei generischem Apfelkuchen.",
 originPl:
 "Szarlotka to polskie ciasto jabłkowe — typowo kruche z blachy lub formy, soczyste jabłka, często z kruszonką lub pokrywą — świadomie nie drożdżowy placek z patelni. [Racuchy z jabłkami](/pl/rezepte/racuchy-jablka) zostają przepisem na jabłka na drożdżach na patelni; [piernik](/pl/rezepte/piernik) piernika miodowo-korzennego; [sernik](/pl/rezepte/sernik) sernika; [babka](/pl/rezepte/babka) babki drożdżowej. Tu jabłko i krótkie ciasto niosą charakter „szarlotka / polskie ciasto jabłkowe”. Przy [obiadzie niedzielnym](/pl/blog/obiad-niedzielny) bywa spokojnym domknięciem przy kawie — Tu zostają ilości i kroki. Wąsko przy szarlotce, nie przy generycznym cieście jabłkowym.",
 shopDe:
 "Mehl 405/550, kalte Butter, Zucker, Ei, säuerliche Äpfel, Zimt, Zitrone; optional Semmelbrösel gegen Saft. Basis im Supermarkt; Zimt und manchmal bessere Äpfel-Saisonware im [Polenladen](/de/blog/polenladen-einkaufen). Wenn Butter knapp: ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) — keine Margarine-Show als „dasselbe“. Kein Hefeteig: das wäre Richtung [Racuchy](/de/rezepte/racuchy-jablka) oder [Babka](/de/rezepte/babka). Kein Honig-Gewürz-Kern wie [Piernik](/de/rezepte/piernik).",
 shopPl:
 "Mąka 405/550, zimne masło, cukier, jajko, kwaśniejsze jabłka, cynamon, cytryna; opcjonalnie bułka tarta na sok. Baza w markecie; cynamon i czasem lepsze jabłka w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Gdy brak masła: uczciwie według [zamienników składników](/pl/blog/zamienniki-skladnikow) — bez show margaryny jako „to samo”. Bez drożdży: to byłby kierunek [racuchów](/pl/rezepte/racuchy-jablka) lub [babki](/pl/rezepte/babka). Bez rdzenia miodowo-korzennego jak [piernik](/pl/rezepte/piernik).",
 techniqueDe:
 "Mürbeteig kurz und kalt halten; nicht warm durchkneten bis zäh. Boden fest andrücken; Apfelmasse nicht zu nass — Brösel oder kurze Vorkarussellierung der Äpfel helfen. Deckel, Gitter oder Streusel: eine Hausvariante wählen und im Excerpt festhalten (hier: Blech mit Deckel/Streusel-Option). Mittlere Ofentemperatur; goldbraun, Äpfel weich. Zu heiß = dunkle Kruste, harte Äpfel. Abkühlen vor dem Schneiden — sonst bricht der Teig.",
 techniquePl:
 "Kruche ciasto krótko i zimno; nie wyrabiać na ciepło do gumy. Spód mocno wcisnąć; jabłka nie za mokre — bułka lub krótke obsmażenie pomaga. Pokrywa, kratka lub kruszonka: jeden wariant domu i trzymać w excerpt (tu: blacha z opcją pokrywy/kruszonki). Średnia temperatura; złoto, jabłka miękkie. Za gorąco = ciemna skórka, twarde jabłka. Studzić przed krojeniem — inaczej ciasto pęka.",
 serveDe:
 "In Stücken, oft mit Puderzucker, zu Tee oder Kaffee. Als Sonntagsschluss unter [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Auf dem Tisch klar halten: Apfel in der Pfanne = [Racuchy](/de/rezepte/racuchy-jablka); Gewürz-Honig = [Piernik](/de/rezepte/piernik); Quarkkuchen = [Sernik](/de/rezepte/sernik). Hält ein bis zwei Tage gut abgedeckt; Freezer möglich in Stücken.",
 servePl:
 "W kawałkach, często z cukrem pudrem, do herbaty lub kawy. Jako niedzielne domknięcie pod [obiadem niedzielnym](/pl/blog/obiad-niedzielny). Na stole: jabłko na patelni = [racuchy](/pl/rezepte/racuchy-jablka); miód i korzeń = [piernik](/pl/rezepte/piernik); sernik = [sernik](/pl/rezepte/sernik). Trzyma dzień–dwa przykryte; freezer możliwy w kawałkach.",
 diasporaDe:
 "Szarlotka ist der Apfelkuchen, den deutsche Gäste sofort verstehen und polnische Großeltern als „richtig“ erkennen, wenn der Teig mürbe und die Äpfel säuerlich sind. Ein Blech für die Woche, ein Stück für den Freezer der Nachbarn. Kein Zwang zu Spezialformen — eine Springform oder ein normales Blech reicht. Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen.",
 diasporaPl:
 "Szarlotka to ciasto jabłkowe, które niemieccy goście od razu rozumieją, a polscy dziadkowie uznają za „właściwe”, gdy ciasto jest kruche, a jabłka kwaśniejsze. Jedna blacha na tydzień, kawałek do freezera sąsiadów. Bez przymusu specjalnych form — tortownica lub zwykła blacha wystarczy. W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe.",
 mistakesDe:
 "Mit Racuchy verwechseln (Pfanne/Hefe). Mit Piernik oder Sernik Zu warmes Butterteig-Kneten; zu süße Äpfel ohne Säure; zu nasser Boden (Saftsee); zu früh schneiden. Generischen Apfelkuchen statt Szarlotka backen.",
 mistakesPl:
 "Mylenie z racuchami (patelnia/drożdże). Kradzież fokus piernika lub sernika. Zbyt ciepłe wyrabianie masła; zbyt słodkie jabłka bez kwasu; mokry spód (kałuża soku); zbyt wczesne krojenie. Generyczne apple pie zamiast szarlotki.",
 variantsDe:
 "Mit Streusel (kruszonka), mit Gitter, mit Deckel, mit mehr Zimt. Apfel-Pfanne: [Racuchy](/de/rezepte/racuchy-jablka). Honig-Gewürz: [Piernik](/de/rezepte/piernik). Käsekuchen: [Sernik](/de/rezepte/sernik). Hefe-Form: [Babka](/de/rezepte/babka). Blätterteig+Vanillecreme (≠ Apfel): [Napoleonka](/de/rezepte/napoleonka). Alltagskultur: [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Im [Polenladen](/de/blog/polenladen-einkaufen) findest du typische Spezialzutaten.",
 variantsPl:
 "Z kruszonką, z kratką, z pokrywą, z większą ilością cynamonu. Jabłko na patelni: [racuchy](/pl/rezepte/racuchy-jablka). Miód i korzeń: [piernik](/pl/rezepte/piernik). Sernik: [sernik](/pl/rezepte/sernik). Drożdże z formy: [babka](/pl/rezepte/babka). Ciasto francuskie+krem (≠ jabłko): [napoleonka](/pl/rezepte/napoleonka). Kultura dnia: [obiad niedzielny](/pl/blog/obiad-niedzielny). W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności.",
 },
};
