/**
 * Wave 12 Paket D — FACTS for klopsy, kluski-kladzione.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W12_FACTS_D } from "./recipe-articles-w12-d";
 * Object.assign(FACTS, …, W12_FACTS_D);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Klopsy / Pulpety (Kugeln in Dillsoße) ≠ Kotlet mielony (panierte Bulette)
 * - Kluski kładzione (Fallnudeln) ≠ Kluski śląskie / Kopytka / Makaron z serem
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

export const W12_FACTS_D: Record<string, ArticleFacts> = {
 "recipe-klopsy": {
 dishDe: "Klopsy in Dillsoße",
 dishPl: "Klopsy w sosie koperkowym",
 vibeDe: "mild und cremig, mit Dill und einem Hauch Brühe, ein warmer Alltagsteller mit viel Soße",
 vibePl: "łagodne i kremowe, z koperkiem i nutą bulionu, ciepły talerz na co dzień, z dużą ilością sosu",
 originDe:
 "Der bekannteste Verwandte dieser Klopsy heißt Königsberger Klopse, ein Rezept aus dem ehemaligen Ostpreußen rund um Königsberg, das heutige Kaliningrad, mit einer markanten Sahnesoße aus Kapern und Zitrone. Diese Version wanderte über Ostpreußen und Pommern nach Polen und wird dort bis heute in Warmia und Masuren gekocht. Die Hausvariante mit Dillsoße, wie sie hier steht, ist eine mildere polnische Ableitung ohne Kapern, entstanden aus der einfachen Logik des Alltags: Zwiebel und Brühe waren immer im Haus, Kapern nicht. Historiker der Küchengeschichte führen das Wort Klops selbst auf norddeutsche Wurzeln zurück, während der italienische Ursprung von Hackfleischkugeln als polpette über Handelswege ganz eigene, meist kleinere Pulpety in Polen entstehen ließ. Das ist weder die panierte Bulette [Kotlet mielony](/de/rezepte/kotlet-mielony) noch der panierte Sonntagsschnitzel [Kotlet schabowy](/de/rezepte/kotlet-schabowy), sondern eine runde, ungepanierte Kugel, die in Soße gart. Wie die polnische Menükultur solche Alltagsteller einordnet, zeigt der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch), Panierwissen liefert der [Panieren-Guide](/de/blog/panieren-schabowy).",
 originPl:
 "Najbardziej znanym krewnym tych klopsów są klopsy królewieckie, przepis z dawnych Prus Wschodnich wokół Królewca, dzisiejszego Kaliningradu, z wyrazistym sosem śmietanowym z kaparami i cytryną. Ta wersja trafiła przez Prusy Wschodnie i Pomorze do Polski i do dziś gotuje się ją na Warmii i Mazurach. Domowy wariant z sosem koperkowym, jak w tym przepisie, to łagodniejsza polska odmiana bez kaparów, powstała z prostej logiki codzienności: cebula i bulion zawsze były w domu, kapary nie. Historycy kuchni wywodzą samo słowo klops z północnoniemieckich korzeni, podczas gdy włoski rodowód kulek z mielonego mięsa jako polpette trafił szlakami handlowymi do Polski i dał początek osobnym, zwykle mniejszym pulpetom. To ani panierowany [kotlet mielony](/pl/rezepte/kotlet-mielony), ani [schabowy](/pl/rezepte/kotlet-schabowy), tylko okrągła, niepanierowana kulka duszona w sosie. Jak polska kultura menu wpisuje taki codzienny talerz, pokazuje [obiad niedzielny](/pl/blog/obiad-niedzielny), o panierce opowiada [przewodnik panierowania](/pl/blog/panierowanie-kotlet).",
 shopDe:
 "Für die Klopsy brauchst du gemischtes Hack, ein altes Brötchen, ein Ei und eine Zwiebel sowie Brühe zum Garziehen. Frischen Dill findest du im normalen Supermarkt, Śmietana mit 12 bis 18 Prozent Fett gibt es oft günstiger im [Polenladen](/de/blog/polenladen-einkaufen). Das ist kein flacher Pfannen-[Kotlet mielony](/de/rezepte/kotlet-mielony) und kein Ofenlaib wie [Pieczeń rzymska](/de/rezepte/pieczen-rzymska), hier schwimmen die Bällchen stattdessen in einer Dill-Sahnesoße.",
 shopPl:
 "Na klopsy weź mięso mielone mieszane, czerstwą bułkę, jajko i cebulę oraz bulion do gotowania. Świeży koperek kupisz w zwykłym markecie, śmietanę o zawartości 12 do 18 procent tłuszczu często taniej w [sklepie polskim](/pl/blog/sklep-polski-zakupy). To nie płaski [kotlet mielony](/pl/rezepte/kotlet-mielony) z patelni ani bochenek jak [pieczeń rzymska](/pl/rezepte/pieczen-rzymska), tu klopsy pływają w sosie koperkowo-śmietanowym.",
 techniqueDe:
 "Zuerst wird die Masse gebunden und zu Kugeln geformt, dann angebraten, danach die Soße aufgebaut und die Klopsy darin fertig gegart. Śmietana kommt erst bei reduzierter Hitze in die Soße, sonst flockt sie sofort aus. Dill gehört immer erst ganz am Ende dazu, sein Aroma verflüchtigt sich beim Mitkochen. Zu große Klopsy bleiben innen roh, während zu kleine schnell austrocknen, die richtige Größe macht hier den Unterschied. Eine dreifache Panade wie bei [Kotlet mielony](/de/rezepte/kotlet-mielony) braucht es nicht, das wäre eine andere Zubereitungslinie.",
 techniquePl:
 "Najpierw wiąże się farsz i formuje kulki, potem się je obsmaża, następnie buduje sos i dusi w nim klopsy do końca. Śmietana trafia do sosu dopiero przy obniżonym ogniu, inaczej od razu się zetnie. Koperek zawsze dodaje się na sam koniec, bo podczas gotowania traci swój aromat. Za duże klopsy zostają surowe w środku, za małe szybko wysychają, odpowiedni rozmiar robi tu różnicę. Potrójna panierka jak przy [kotlecie mielonym](/pl/rezepte/kotlet-mielony) nie jest potrzebna, to zupełnie inna linia przygotowania.",
 serveDe:
 "Heiß mit reichlich Soße, dazu Kartoffeln, Reis oder Brot, optional Dill und eine Gurke. Den Menüplatz für so einen Alltagsteller zeigt das [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer lieber die knusprige Panade möchte, greift zu [Kotlet mielony](/de/rezepte/kotlet-mielony) oder [Schabowy](/de/rezepte/kotlet-schabowy). Reste in der Soße aufwärmen lohnt sich, am zweiten Tag schmecken die Klopsy oft runder.",
 servePl:
 "Na gorąco z obfitym sosem, do tego ziemniaki, ryż lub chleb, opcjonalnie koperek i ogórek. Miejsce takiego codziennego talerza w menu pokazuje [obiad niedzielny](/pl/blog/obiad-niedzielny). Kto woli chrupiącą panierkę, sięgnie po [kotlet mielony](/pl/rezepte/kotlet-mielony) lub [schabowy](/pl/rezepte/kotlet-schabowy). Warto podgrzać resztki razem z sosem, następnego dnia klopsy często smakują jeszcze lepiej.",
 diasporaDe:
 "Hack und Brötchen sind in Deutschland überall greifbar, Dill und Śmietana geben dem Gericht seinen polnischen Charakter. Kinder dürfen die Kugeln formen, während der heiße Topf bei den Erwachsenen bleibt. Das geht deutlich schneller als eine volle Panierstation, wie der Guide zum [Panieren](/de/blog/panieren-schabowy) zeigt. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du Śmietana und Majoran meist günstiger als im Supermarkt um die Ecke.",
 diasporaPl:
 "Mięso mielone i bułka są w Niemczech dostępne wszędzie, koperek i śmietana budują polski charakter dania. Dzieci mogą formować kulki, gorący garnek zostaje przy dorosłych. To znacznie szybsze niż pełna stacja panierowania, co pokazuje przewodnik [panierowanie](/pl/blog/panierowanie-kotlet). W [sklepie polskim](/pl/blog/sklep-polski-zakupy) kupisz śmietanę i majeranek zwykle taniej niż w markecie obok.",
 mistakesDe:
 "Klopsy werden oft mit [Kotlet mielony](/de/rezepte/kotlet-mielony) verwechselt und dann paniert, dabei bleiben sie eigentlich ungepanierte Kugeln in Soße. Śmietana darf niemals sprudelnd aufkochen, sonst flockt sie sichtbar aus. Zu wenig Dill lässt den Teller fad wirken, und ungleich große Klopsy garen ungleichmäßig durch.",
 mistakesPl:
 "Klopsy często myli się z [kotletem mielonym](/pl/rezepte/kotlet-mielony) i się je paniere, choć w rzeczywistości zostają niepanierowanymi kulkami w sosie. Śmietana nigdy nie powinna się gwałtownie zagotować, bo widocznie się zważy. Za mało koperku sprawia, że danie smakuje mdło, a nierówne wielkości klopsów powodują nierówne gotowanie.",
 variantsDe:
 "Wer die ursprüngliche Version mit Kapern und Zitrone probieren will, sucht nach Königsberger Klopsen, dem historischen Vorbild aus Ostpreußen. Eine mildere Hausvariante ersetzt den Dill durch Tomatensoße, mit Putenhack wird das Ganze insgesamt leichter. Passende Nachbarn sind [Kotlet mielony](/de/rezepte/kotlet-mielony) und [Schabowy](/de/rezepte/kotlet-schabowy), dazu passen die Guides zum [Panieren](/de/blog/panieren-schabowy), zur [Śmietana](/de/blog/smietana-schmand) und zum [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 variantsPl:
 "Kto chce spróbować pierwotnej wersji z kaparami i cytryną, powinien szukać klopsów królewieckich, historycznego pierwowzoru z Prus Wschodnich. Łagodniejszy wariant domowy zamienia koperek na sos pomidorowy, z mięsem z indyka całość robi się lżejsza. Pasującymi sąsiadami są [kotlet mielony](/pl/rezepte/kotlet-mielony) i [schabowy](/pl/rezepte/kotlet-schabowy), a dobrymi przewodnikami [panierowanie](/pl/blog/panierowanie-kotlet), [śmietana](/pl/blog/smietana-czy-schmand) i [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 },

 "recipe-kluski-kladzione": {
 dishDe: "Kluski kładzione",
 dishPl: "Kluski kładzione",
 vibeDe: "weich, eiig und unregelmäßig geformt, gemacht für klare Brühe",
 vibePl: "miękkie, jajeczne i nieregularnie uformowane, stworzone do jasnego bulionu",
 originDe:
 "Kluski kładzione heißen wörtlich gelegte Klöße, benannt nach genau dem Handgriff, der sie ausmacht: Der Teig wird mit dem Löffel direkt in die kochende Flüssigkeit gelegt, nicht gerollt, nicht geschnitten. Sprachforscher, die polnische Klößenamen im deutsch-polnisch-tschechischen Grenzgebiet untersucht haben, ordnen kładzione klar in die Gruppe der nach ihrer Zubereitungstechnik benannten Klöße ein, ähnlich wie krojone (geschnittene) oder gniecione (geknetete) Varianten. Die zweite gängige Bezeichnung, Kluski francuskie oder französische Klöße, verweist auf den französischen Einfluss an polnischen Adelshöfen im 18. und 19. Jahrhundert, als aufgeschlagenes Eiweiß und leichte Mehlteige als vornehme Zutat aus Frankreich galten. Das ist weder die schlesische Mulden-Kartoffelklößchen-Linie [Kluski śląskie](/de/rezepte/kluski-slaskie) noch die ausgerollten Kartoffelstückchen [Kopytka](/de/rezepte/kopytka) noch die Quark-Pasta [Makaron z serem](/de/rezepte/makaron-z-serem), sondern ein löffelbarer Ei-Mehl-Teig für klare Brühe. Wie diese Brühe klar bleibt, erklärt die [Rosół-Technik](/de/blog/rosol-technik), einen Überblick über die ganze Suppenfamilie gibt [Polnische Suppen](/de/blog/polnische-suppen).",
 originPl:
 "Nazwa kluski kładzione odnosi się dokładnie do ruchu, który je definiuje: ciasto kładzie się łyżką prosto do wrzącego płynu, nie wałkuje się go ani nie kroi. Językoznawcy badający gwarowe nazwy klusek na polsko-czesko-niemieckim pograniczu jednoznacznie zaliczają kładzione do grupy nazw motywowanych sposobem przyrządzania, obok krojonych czy gniecionych. Druga popularna nazwa, kluski francuskie, odsyła do francuskich wpływów na polskich dworach szlacheckich w XVIII i XIX wieku, gdy ubita piana z białek i lekkie ciasta mączne uchodziły za wykwintny, francuski dodatek. To ani śląska linia knedli z dziurką [kluski śląskie](/pl/rezepte/kluski-slaskie), ani wałkowane [kopytka](/pl/rezepte/kopytka), ani twarogowa pasta [makaron z serem](/pl/rezepte/makaron-z-serem), tylko łyżkowalne ciasto jajeczno-mączne do jasnego bulionu. Jak zachować klarowność tego bulionu, wyjaśnia [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol), przegląd całej rodziny zup daje [polskie zupy](/pl/blog/polskie-zupy).",
 shopDe:
 "Eier, Weizenmehl, Salz und etwas Wasser oder Milch reichen als Zutaten. Die Brühe ist idealerweise selbst gekochter [Rosół](/de/rezepte/rosol), Dill und Butter zum Servieren sind optional. Alles dafür findest du im normalen deutschen Supermarkt, ein Polenladen ist hier nicht nötig. Wer die Brühe selbst vertiefen möchte, findet Hintergrund in der [Rosół-Technik](/de/blog/rosol-technik) und in der Einordnung unter [Polnische Suppen](/de/blog/polnische-suppen).",
 shopPl:
 "Jajka, mąka pszenna, sól i odrobina wody lub mleka wystarczą jako składniki. Bulion najlepiej ugotować sam jako [rosół](/pl/rezepte/rosol), koperek i masło do podania są opcjonalne. Wszystko znajdziesz w zwykłym niemieckim markecie, sklep polski nie jest tu konieczny. Kto chce pogłębić temat bulionu, znajdzie więcej w [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol) i w przeglądzie [polskie zupy](/pl/blog/polskie-zupy).",
 techniqueDe:
 "Der Teig muss löffelbar bleiben und darf keinesfalls knetfest werden, sonst lassen sich die Kluski nicht mehr sauber abstechen. In leicht kochendes Wasser oder Brühe gelegt, garen sie erst nach dem Aufschwimmen noch kurz nach. Ein zu flüssiger Teig zerfällt beim Kochen, ein zu fester wird zäh und gummiartig statt zart. Fertige Fadennudeln aus der Packung sind eine ganz andere Zubereitungslinie, hier zählt bewusst die Handarbeit mit dem Löffel.",
 techniquePl:
 "Ciasto musi zostać łyżkowalne i w żadnym razie nie może być twarde jak do wyrabiania, inaczej nie da się go czysto odkładać. Włożone do lekko wrzącej wody lub bulionu, dogotowuje się jeszcze chwilę po wypłynięciu na powierzchnię. Zbyt rzadkie ciasto rozpada się podczas gotowania, zbyt twarde robi się gumowate zamiast delikatne. Gotowe nitki z paczki to zupełnie inna linia przygotowania, tu liczy się świadomie praca łyżką.",
 serveDe:
 "In heißem [Rosół](/de/rezepte/rosol) mit Karotte und Petersilie oder mit Butter und Dill als eigenständige Beilage. Den passenden Menürahmen liefert das [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Andere Teigbeilagen bleiben davon klar getrennt, etwa [Kluski śląskie](/de/rezepte/kluski-slaskie) oder [Kopytka](/de/rezepte/kopytka). Die Nudeln sollten nicht dauerhaft in der Restbrühe liegen bleiben, sonst quellen sie unschön nach.",
 servePl:
 "W gorącym [rosole](/pl/rezepte/rosol) z marchewką i pietruszką albo z masłem i koperkiem jako samodzielny dodatek. Odpowiednią ramę menu daje [obiad niedzielny](/pl/blog/obiad-niedzielny). Inne dodatki z ciasta pozostają wyraźnie osobno, jak [kluski śląskie](/pl/rezepte/kluski-slaskie) czy [kopytka](/pl/rezepte/kopytka). Klusek nie warto zostawiać na dłużej w resztkach bulionu, bo brzydko napęcznieją.",
 diasporaDe:
 "Das ist die schnellste frische Nudel zum sonntäglichen [Rosół](/de/rezepte/rosol), wenn Packungsnudeln nicht infrage kommen. Kinder dürfen den Teig rühren, während der heiße Topf bei den Erwachsenen bleibt. Den technischen Rahmen dafür liefert die [Rosół-Technik](/de/blog/rosol-technik), einen Überblick über die ganze Familie geben die [Polnischen Suppen](/de/blog/polnische-suppen).",
 diasporaPl:
 "To najszybszy świeży makaron do niedzielnego [rosołu](/pl/rezepte/rosol), gdy nitki z paczki po prostu nie wchodzą w grę. Dzieci mogą mieszać ciasto, gorący garnek zostaje przy dorosłych. Ramę techniczną daje [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol), przegląd całej rodziny [polskie zupy](/pl/blog/polskie-zupy).",
 mistakesDe:
 "Kluski kładzione werden oft mit [Kluski śląskie](/de/rezepte/kluski-slaskie) oder [Kopytka](/de/rezepte/kopytka) verwechselt, dabei ist der Teig hier ein ganz anderer. Wird der Teig zu fest geknetet, werden die Kluski zäh statt zart. Zu stark sprudelndes Kochen lässt sie außerdem an den Rändern zerfasern, bevor sie innen durch sind.",
 mistakesPl:
 "Kluski kładzione często myli się z [kluskami śląskimi](/pl/rezepte/kluski-slaskie) lub [kopytkami](/pl/rezepte/kopytka), choć ciasto jest tu zupełnie inne. Zbyt mocno wyrabiane ciasto sprawia, że kluski robią się gumowate zamiast delikatne. Zbyt gwałtowne gotowanie dodatkowo strzępi ich brzegi, zanim środek zdąży się ugotować.",
 variantsDe:
 "Mit mehr Ei wird der Teig fester, mit etwas Grieß bekommt er zusätzlich Biss. Serviert mit Butter statt in Brühe werden die Kluski zur eigenständigen Beilage statt zur Suppeneinlage. Passende Nachbarn sind [Rosół](/de/rezepte/rosol), [Kluski śląskie](/de/rezepte/kluski-slaskie) und [Kopytka](/de/rezepte/kopytka), dazu passen die Guides zur [Rosół-Technik](/de/blog/rosol-technik), zu den [Polnischen Suppen](/de/blog/polnische-suppen) und zum [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 variantsPl:
 "Z większą ilością jajek ciasto robi się twardsze, z odrobiną kaszy manny zyskuje dodatkowo na strukturze. Podane z masłem zamiast w bulionie kluski stają się samodzielnym dodatkiem, a nie wkładką do zupy. Pasującymi sąsiadami są [rosół](/pl/rezepte/rosol), [kluski śląskie](/pl/rezepte/kluski-slaskie) i [kopytka](/pl/rezepte/kopytka), a dobrymi przewodnikami [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol), [polskie zupy](/pl/blog/polskie-zupy) i [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 },
};
