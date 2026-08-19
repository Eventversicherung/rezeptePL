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
 vibeDe:
 "süß und mohnig, butterweich, festlich und trotzdem in einer knappen Stunde aus dem Topf",
 vibePl:
 "słodko-makowy, maślany, świąteczny, a mimo to gotowy w niecałą godzinę z garnka",
 originDe:
 "Mohn gehört seit vorchristlicher Zeit zur Wigilia, denn seine schlaffördernde Wirkung galt als Brücke zwischen der Welt der Lebenden und der der Ahnen, die in der Winterzeit um den Heiligabend als besonders nah galt. Eine Mohnkapsel trägt über tausend winzige Samen, deshalb stand Mohn zusätzlich für Fülle, Fruchtbarkeit und Wohlstand im kommenden Jahr. Makaron z makiem, gekochte Nudeln mit süßer Mohnmasse, ist die regionale Antwort auf diese Symbolik aus Wielkopolska, Kujawy und der Gegend um Łódź, also aus Gebieten, die einst zur preußischen Teilung gehörten. Dort übernahm diese Nudelspeise die Rolle, die im Osten Polens die [Kutia](/de/rezepte/kutia) aus Weizenkörnern spielt. Ganz bewusst ist das keine gerollte Hefeteig-Spezialität wie [Makowiec](/de/rezepte/makowiec), dessen Technik der [Makowiec-Technik](/de/blog/makowiec-technik)-Guide erklärt, und auch kein Quarkgericht wie [Makaron z serem](/de/rezepte/makaron-z-serem).",
 originPl:
 "Mak towarzyszy Wigilii od czasów przedchrześcijańskich, bo jego usypiające działanie miało otwierać most między światem żywych a duszami przodków, które w środku zimy, blisko Bożego Narodzenia, uznawano za szczególnie bliskie. Jedna makówka niesie ponad tysiąc drobnych ziaren, dlatego mak symbolizował też obfitość, płodność i pomyślność w nadchodzącym roku. Makaron z makiem, czyli ugotowany makaron ze słodką masą makową, to regionalna odpowiedź na tę symbolikę z Wielkopolski, Kujaw i okolic Łodzi, czyli terenów dawnego zaboru pruskiego. Tam ta potrawa pełni rolę, którą na wschodzie Polski odgrywa pszeniczna [kutia](/pl/rezepte/kutia). Świadomie nie jest to zwijana rolada drożdżowa jak [makowiec](/pl/rezepte/makowiec), którego technikę opisuje [technika makowca](/pl/blog/makowiec-technika), ani danie z twarogiem jak [makaron z serem](/pl/rezepte/makaron-z-serem).",
 shopDe:
 "Kurze Eiernudeln oder Bandnudeln bekommst du im Supermarkt, dazu Butter, Zucker und Milch. Der eigentliche Geschmacksträger ist blauer, möglichst frisch gemahlener Mohn, den du oft im [Polenladen](/de/blog/polenladen-einkaufen) findest. Ganze Mohnsamen lassen sich auch selbst mahlen, das dann aber ehrlich so kennzeichnen. Optional passen Honig, Rosinen und Zitronenschale dazu. Fehlt gemahlener Mohn, hilft der Beitrag zu [Ersatzprodukten DE](/de/blog/ersatzprodukte-de) weiter, allerdings sollte kein Kakao als Mohnersatz herhalten.",
 shopPl:
 "Krótki makaron jajeczny lub wstążki kupisz w markecie, do tego masło, cukier i mleko. Prawdziwym nośnikiem smaku jest mak niebieski, najlepiej świeżo mielony, który znajdziesz często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Całe ziarna można też zmielić samodzielnie, ale trzeba to uczciwie napisać. Opcjonalnie pasują miód, rodzynki i skórka cytryny. Gdy brakuje mielonego maku, pomogą [zamienniki składników](/pl/blog/zamienniki-skladnikow), choć kakao jako zamiennik maku raczej się nie sprawdza.",
 techniqueDe:
 "Die Nudeln sollten al dente bleiben, während der Mohn kurz in heißer Flüssigkeit aufquillt und danach gut abtropft. Mit Zucker und Butter verrührt entsteht daraus eine streichfähige Masse, die weder tropft noch trocken und sandig wirkt. Alles heiß vermengen, denn kalte Nudeln nehmen den Geschmack schlechter an, und Nudelwasser nur sparsam zugeben, sonst verwässert die Masse. Bitterkeit stammt fast immer von altem Mohn oder zu starkem Rösten, deshalb lohnt sich ein Blick auf das Herstellungsdatum. Anders als beim [Makowiec](/de/rezepte/makowiec) gibt es hier keinen Rollschritt und keinen Ofengang, das Gericht ist fertig, sobald alles im Topf vermengt ist.",
 techniquePl:
 "Makaron powinien zostać al dente, podczas gdy mak krótko pęcznieje w gorącym płynie, a potem dobrze się odsącza. Wymieszany z cukrem i masłem tworzy smarowną masę, która ani nie cieknie, ani nie jest sucha jak piasek. Wszystko łącz na gorąco, bo zimny makaron gorzej przyjmuje smak, a wody z gotowania dodawaj oszczędnie, inaczej masa się rozwodni. Gorycz niemal zawsze pochodzi ze starego maku lub zbyt mocnego prażenia, dlatego warto sprawdzić datę produkcji. W przeciwieństwie do [makowca](/pl/rezepte/makowiec) nie ma tu etapu zwijania ani pieczenia, danie jest gotowe, gdy wszystko połączy się w garnku.",
 serveDe:
 "Warm auf Tellern, oft mit Puderzucker bestäubt, als süßer Gang am [Wigilia](/de/blog/wigilia-speiseplan)-Tisch neben Kompot und Fisch. Klar getrennt bleiben davon Scheiben mit Spirale, das ist [Makowiec](/de/rezepte/makowiec), und cremige Pasta mit Quark, das ist [Makaron z serem](/de/rezepte/makaron-z-serem). Reste schmecken kalt oder kurz in Butter aufgewärmt in der Pfanne, ein erneutes hartes Kochen sollte man ihnen ersparen.",
 servePl:
 "Ciepło na talerzach, często z cukrem pudrem, jako słodki element przy [menu wigilijnym](/pl/blog/menu-wigilijne) obok kompotu i ryby. Wyraźnie osobno zostają plastry ze spiralą, czyli [makowiec](/pl/rezepte/makowiec), oraz kremowy makaron z twarogiem, czyli [makaron z serem](/pl/rezepte/makaron-z-serem). Resztki smakują na zimno albo krótko podgrzane na maśle, ponownego mocnego gotowania lepiej im oszczędzić.",
 diasporaDe:
 "In deutschen Küchen rettet Makaron z makiem oft den 24. Dezember, wenn der Ofen schon mit anderen Gerichten belegt ist und niemand mehr Hefeteig führen möchte: ein Topf Nudeln, eine Schüssel Mohnmasse, fertig. Mohn hältst du am besten aus dem [Polenladen](/de/blog/polenladen-einkaufen) vorrätig, Kinder dürfen streuen und rühren, während der heiße Topf bei den Erwachsenen bleibt. Gute Standardnudeln und frischer Mohn reichen völlig aus, ein Nachbar zur Technik der Mohnmasse steht im [Makowiec-Technik](/de/blog/makowiec-technik)-Guide.",
 diasporaPl:
 "W niemieckich kuchniach makaron z makiem często ratuje 24 grudnia, gdy piekarnik jest już zajęty innymi daniami i nikt nie chce prowadzić ciasta drożdżowego: jeden garnek makaronu, jedna miska masy makowej, gotowe. Mak najlepiej trzymać zawsze pod ręką ze [sklepu polskiego](/pl/blog/sklep-polski-zakupy), dzieci mogą sypać i mieszać, a gorący garnek zostaje przy dorosłych. Wystarczy dobry zwykły makaron i świeży mak, a sąsiadem technicznym jest [technika makowca](/pl/blog/makowiec-technika).",
 mistakesDe:
 "Wer Makaron z makiem mit der gerollten [Makowiec](/de/rezepte/makowiec)-Rolle verwechselt, erwartet fälschlich einen Hefekuchen statt einer Nudelspeise. Ebenso führt eine Verwechslung mit [Makaron z serem](/de/rezepte/makaron-z-serem) in die falsche Richtung, denn dort dominiert Quark statt Mohn. Zu trockene, sandige Masse entsteht meist durch zu wenig Flüssigkeit, während alter, bitterer Mohn den ganzen Geschmack kippen kann. Zu viel Nudelwasser wiederum macht aus der cremigen Masse schnell eine Suppe.",
 mistakesPl:
 "Mylenie makaronu z makiem z roladą [makowca](/pl/rezepte/makowiec) prowadzi do błędnego oczekiwania ciasta drożdżowego zamiast dania z makaronu. Podobnie myląca jest pomyłka z [makaronem z serem](/pl/rezepte/makaron-z-serem), gdzie rządzi twaróg, a nie mak. Zbyt sucha, piaszczysta masa zwykle wynika z za małej ilości płynu, a stary, gorzki mak potrafi zepsuć cały smak. Za dużo wody z gotowania z kolei zamienia kremową masę w rzadką zupkę.",
 variantsDe:
 "Mehr Honig macht die Masse runder im Geschmack, Rosinen bleiben die klassische Zutat, und Orangenschale statt Zitrone gibt eine mildere Note. Kalt schmeckt die Speise am Folgetag fast wie ein Dessert. Die Mohnrolle bleibt [Makowiec](/de/rezepte/makowiec), Pasta mit Quark ist [Makaron z serem](/de/rezepte/makaron-z-serem), und Weizenkörner mit Mohn statt Nudeln findest du bei [Kutia](/de/rezepte/kutia). Zum Anlass passt der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan), zur Mohnmasse die [Makowiec-Technik](/de/blog/makowiec-technik), und Einkaufshilfen liefern der [Polenladen](/de/blog/polenladen-einkaufen) und die [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
 variantsPl:
 "Więcej miodu daje łagodniejszy smak, rodzynki zostają klasycznym dodatkiem, a skórka pomarańczy zamiast cytryny daje delikatniejszą nutę. Na zimno danie następnego dnia smakuje niemal jak deser. Rolada to [makowiec](/pl/rezepte/makowiec), pasta z twarogiem to [makaron z serem](/pl/rezepte/makaron-z-serem), a pszenica z makiem zamiast makaronu czeka w [kutii](/pl/rezepte/kutia). Do okazji pasuje [menu wigilijne](/pl/blog/menu-wigilijne), do masy makowej [technika makowca](/pl/blog/makowiec-technika), a zakupy ułatwią [sklep polski](/pl/blog/sklep-polski-zakupy) i [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
 },
 "recipe-szarlotka": {
 dishDe: "Szarlotka",
 dishPl: "Szarlotka",
 vibeDe:
 "nach Apfel und Zimt, mürbe vom Blech, ein Kaffee- und Sonntagskuchen",
 vibePl:
 "jabłkowo-cynamonowy, kruchy z blachy, ciasto do kawy i na niedzielę",
 originDe:
 "Der Name Szarlotka geht auf die Charlotte russe zurück, ein Dessert, das der berühmte französische Konditor Marie-Antoine Carême Anfang des 19. Jahrhunderts für Zar Alexander I. kreierte und nach dessen Schwägerin Charlotte von Preußen benannte. Diese ursprüngliche Charlotte bestand aus Löffelbiskuits und einer Bayerischen Creme und hatte mit Äpfeln zunächst nichts zu tun. Erst in Polen entwickelte sich daraus über das 19. Jahrhundert ein völlig anderes Gebäck: Die einflussreiche Kochbuchautorin Lucyna Ćwierczakiewiczowa verwendete in ihren Rezepten bereits altbackenes Roggenbrot als Basis für eine Apfelfüllung, aus der sich mit der Zeit der heutige Mürbeteigkuchen entwickelte. Äpfel selbst sind in Polen seit dem 7. Jahrhundert bekannt, eingeführt von Zisterziensermönchen, und das Land zählt heute zu den größten Apfelexporteuren der Welt. Vom französischen Vorbild blieb am Ende nur der Name übrig, das Gericht dahinter ist rein polnisch. Klar unterschieden bleibt sie vom Hefe-Pfannkuchen [Racuchy z jabłkami](/de/rezepte/racuchy-jablka), vom Honig-Gewürzkuchen [Piernik](/de/rezepte/piernik), vom Quarkkuchen [Sernik](/de/rezepte/sernik) und vom Hefegugelhupf [Babka](/de/rezepte/babka).",
 originPl:
 "Nazwa szarlotka pochodzi od charlotte russe, deseru, który na początku XIX wieku słynny francuski cukiernik Marie-Antoine Carême stworzył dla cara Aleksandra I i nazwał na cześć jego szwagierki, Charlotty Pruskiej. Ta pierwotna charlotte składała się z biszkoptów i kremu bawarskiego i z jabłkami nie miała nic wspólnego. Dopiero w Polsce w ciągu XIX wieku powstało z tego zupełnie inne ciasto: wpływowa autorka książek kucharskich Lucyna Ćwierczakiewiczowa używała w swoich przepisach czerstwego razowego chleba jako podstawy pod nadzienie jabłkowe, z czego z czasem wykształcił się dzisiejszy kruchy placek. Same jabłka są w Polsce znane od VII wieku, sprowadzone przez cystersów, a kraj należy dziś do największych eksporterów jabłek na świecie. Z francuskiego pierwowzoru zostawiła się właściwie tylko nazwa, danie za nią stoi w pełni polskie. Wyraźnie osobno zostają drożdżowe [racuchy z jabłkami](/pl/rezepte/racuchy-jablka), miodowo-korzenny [piernik](/pl/rezepte/piernik), [sernik](/pl/rezepte/sernik) i drożdżowa [babka](/pl/rezepte/babka).",
 shopDe:
 "Für den Boden brauchst du Mehl, kalte Butter, Zucker und Ei, für die Füllung säuerliche Äpfel, Zimt und Zitrone, optional Semmelbrösel gegen zu viel Saft. Die Basis findest du im Supermarkt, Zimt und manchmal besonders aromatische Äpfel auch im [Polenladen](/de/blog/polenladen-einkaufen). Hefeteig mit Apfel gehört zu [Racuchy](/de/rezepte/racuchy-jablka), Honig und Gewürze zu [Piernik](/de/rezepte/piernik).",
 shopPl:
 "Na spód potrzebujesz mąki, zimnego masła, cukru i jajka, na farsz kwaskowych jabłek, cynamonu i cytryny, opcjonalnie bułki tartej na nadmiar soku. Bazę kupisz w markecie, cynamon i czasem szczególnie aromatyczne jabłka też w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Ciasto drożdżowe z jabłkiem należy do [racuchów](/pl/rezepte/racuchy-jablka), miód i przyprawy korzenne do [piernika](/pl/rezepte/piernik).",
 techniqueDe:
 "Der Mürbeteig sollte kurz und kalt verarbeitet werden, denn warmes, langes Kneten macht ihn zäh statt mürbe. Der Boden wird fest angedrückt, die Apfelmasse darf nicht zu nass sein, sonst weicht der Boden durch, hier helfen Brösel oder ein kurzes Vorschmoren der Äpfel. Ob Gitter, Deckel oder Streusel obenauf kommen, ist reine Hausvariante. Bei mittlerer Ofentemperatur wird die Oberfläche goldbraun, während die Äpfel weich garen, zu heiß gebacken bleibt die Kruste dunkel und die Äpfel innen hart. Vor dem Schneiden muss der Kuchen vollständig auskühlen, sonst bricht der Boden.",
 techniquePl:
 "Kruche ciasto trzeba wyrabiać krótko i na zimno, bo ciepłe i długie wyrabianie robi je gumowate zamiast kruchego. Spód mocno się wciska, a masa jabłkowa nie może być zbyt mokra, inaczej spód rozmięknie, tutaj pomaga bułka tarta lub krótkie podduszenie jabłek wcześniej. To, czy na wierzchu znajdzie się kratka, pokrywa czy kruszonka, zależy wyłącznie od zwyczaju domu. W średniej temperaturze wierzch robi się złoty, a jabłka miękną, za gorący piekarnik zostawia ciemną skórkę i twarde jabłka w środku. Przed krojeniem ciasto musi całkowicie ostygnąć, inaczej spód pęka.",
 serveDe:
 "In Stücken, oft mit Puderzucker bestäubt, zu Tee oder Kaffee, gerne als ruhiger Abschluss nach dem [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Klar getrennt bleiben davon der Hefe-Pfannkuchen [Racuchy](/de/rezepte/racuchy-jablka), der Gewürzkuchen [Piernik](/de/rezepte/piernik) und der Quarkkuchen [Sernik](/de/rezepte/sernik). Gut abgedeckt hält sie sich ein bis zwei Tage, einzelne Stücke lassen sich auch gut einfrieren.",
 servePl:
 "W kawałkach, często z cukrem pudrem, do herbaty lub kawy, chętnie jako spokojne zwieńczenie po [obiedzie niedzielnym](/pl/blog/obiad-niedzielny). Wyraźnie osobno zostają drożdżowe [racuchy](/pl/rezepte/racuchy-jablka), korzenny [piernik](/pl/rezepte/piernik) i [sernik](/pl/rezepte/sernik). Dobrze przykryta trzyma się dzień lub dwa, a pojedyncze kawałki można też zamrozić.",
 diasporaDe:
 "Szarlotka ist der Apfelkuchen, den deutsche Gäste sofort verstehen und polnische Großeltern als richtig anerkennen, sobald der Teig mürbe und die Äpfel angenehm säuerlich sind. Ein Blech reicht für die ganze Woche, einzelne Stücke wandern gerne in den Freezer für spontanen Besuch. Spezialformen braucht es dafür nicht, eine Springform oder ein normales Backblech genügt völlig. Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) findest du bei Bedarf weitere Einkaufshilfen.",
 diasporaPl:
 "Szarlotka to ciasto jabłkowe, które niemieccy goście od razu rozumieją, a polscy dziadkowie uznają za właściwe, gdy ciasto jest kruche, a jabłka przyjemnie kwaśne. Jedna blacha starcza na cały tydzień, a pojedyncze kawałki chętnie trafiają do zamrażarki na wypadek nieplanowanych gości. Specjalne formy nie są potrzebne, wystarczy tortownica lub zwykła blacha. W [sklepie polskim](/pl/blog/sklep-polski-zakupy) i pod [zamiennikami składników](/pl/blog/zamienniki-skladnikow) znajdziesz w razie potrzeby dodatkowe wskazówki zakupowe.",
 mistakesDe:
 "Wer Szarlotka mit dem Hefe-Pfannkuchen [Racuchy](/de/rezepte/racuchy-jablka) verwechselt, erwartet fälschlich eine Pfanne statt eines Ofenkuchens. Zu warmes Kneten des Butterteigs macht ihn zäh, zu süße Äpfel ohne jede Säure lassen den Kuchen flach schmecken, und ein zu nasser Boden entsteht, wenn der Apfelsaft nicht gebunden wird. Zu frühes Schneiden lässt den noch warmen Boden auseinanderbrechen.",
 mistakesPl:
 "Mylenie szarlotki z drożdżowymi [racuchami](/pl/rezepte/racuchy-jablka) prowadzi do błędnego oczekiwania patelni zamiast pieczenia w piekarniku. Zbyt ciepłe wyrabianie kruchego ciasta robi je gumowatym, zbyt słodkie jabłka bez odrobiny kwasu spłaszczają smak, a mokry spód pojawia się, gdy sok z jabłek nie zostanie związany. Zbyt wczesne krojenie łamie jeszcze ciepły spód.",
 variantsDe:
 "Mit Streusel, mit Gitter, mit Deckel oder mit mehr Zimt bleibt sie im Kern immer dieselbe Szarlotka. Wer stattdessen einen Hefe-Pfannkuchen sucht, findet ihn bei [Racuchy](/de/rezepte/racuchy-jablka), einen Honig-Gewürzkuchen bei [Piernik](/de/rezepte/piernik), einen Käsekuchen bei [Sernik](/de/rezepte/sernik) und einen Hefegugelhupf bei [Babka](/de/rezepte/babka). Wer lieber Blätterteig mit Vanillecreme möchte, findet das bei [Napoleonka](/de/rezepte/napoleonka), als Alltagskultur passt das [Sonntagsessen](/de/blog/sonntagsessen-polnisch), und typische Zutaten liefert der [Polenladen](/de/blog/polenladen-einkaufen).",
 variantsPl:
 "Z kruszonką, z kratką, z pokrywą albo z większą ilością cynamonu, w środku wciąż zostaje tą samą szarlotką. Kto szuka drożdżowego placka na patelni, znajdzie go w [racuchach](/pl/rezepte/racuchy-jablka), korzennego ciasta w [pierniku](/pl/rezepte/piernik), sernika w [serniku](/pl/rezepte/sernik), a drożdżowej formy w [babce](/pl/rezepte/babka). Kto woli ciasto francuskie z kremem, znajdzie je w [napoleonce](/pl/rezepte/napoleonka), do kultury dnia pasuje [obiad niedzielny](/pl/blog/obiad-niedzielny), a typowe specjały kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
 },
};
