/**
 * Wave 11 Paket D — FACTS for ryba-po-grecku, golonka, kompot-z-suszu.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W11_FACTS_D } from "./recipe-articles-w11-d";
 * Object.assign(FACTS, …, W11_FACTS_D);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Ryba po grecku ≠ Karp (ganzer/panierter Wigilia-Fisch)
 * - Golonka ≠ Schabowy / Schab pieczony / Żeberka
 * - Kompot z suszu = Getränk-Primary; Wigilia-Pillar bleibt Anlass-Owner
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

export const W11_FACTS_D: Record<string, ArticleFacts> = {
 "recipe-ryba-po-grecku": {
 dishDe: "Ryba po grecku",
 dishPl: "Ryba po grecku",
 vibeDe:
 "süß-säuerlich, gemüsig und meist kalt serviert, ein fester Programmpunkt bei Buffet und Wigilia",
 vibePl:
 "słodko-kwaśny, warzywny, podawany na zimno lub letnio, stały punkt bufetu i Wigilii",
 originDe:
 "Ryba po grecku heißt übersetzt „Fisch nach griechischer Art“, hat aber trotz des Namens nichts mit der griechischen Küche zu tun. Niemand weiß genau, woher die Bezeichnung stammt. Die plausibelste Erklärung ist, dass gebratener Fisch unter einer bunten Gemüsesauce in den 1950er Jahren einfach als typisch mediterran empfunden wurde, vielleicht mit einer entfernten Anlehnung an das griechische Psari Plaki. Fest steht dagegen die praktische Seite: Das Gericht ist eine der klassischen Fastenspeisen der Wigilia, weil es ohne Fleisch auskommt, und wurde zur kommunistischen Zeit noch beliebter, als frischer Fisch von der Ostsee leichter zu bekommen war als gutes Fleisch. Die Sauce aus Karotte, Petersilienwurzel, Zwiebel und Tomatenmark macht aus einem einfachen Filet ein festliches, kalt servierbares Gericht, das sich schon einen Tag vorher vorbereiten lässt. Klar getrennt bleibt das vom ganzen Ofenkarpfen: [Karp](/de/rezepte/karp) ist die Knochen- und Ofen-Fischlinie der Wigilia, hier arbeiten Filet und Gemüsesauce zusammen. Menürahmen und Timeline stehen im [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
 originPl:
 "Ryba po grecku, czyli dosłownie ryba po grecku, tak naprawdę nie ma nic wspólnego z kuchnią grecką. Nikt do końca nie wie, skąd wzięła się ta nazwa. Najbardziej prawdopodobne wytłumaczenie mówi, że smażona ryba pod kolorowym sosem warzywnym w latach pięćdziesiątych po prostu kojarzyła się z czymś śródziemnomorskim, może z odległym echem greckiego psari plaki. Pewna jest za to praktyczna strona: to jedna z klasycznych potraw postnych na Wigilię, bo obywa się bez mięsa, a w czasach PRL zyskała jeszcze na popularności, kiedy świeżą rybę z Bałtyku łatwiej było kupić niż dobre mięso. Sos z marchewki, pietruszki korzeniowej, cebuli i koncentratu pomidorowego zmienia proste filety w świąteczne danie, które można przygotować już dzień wcześniej. Wyraźnie osobno zostaje przy tym cały karp z pieca: [karp](/pl/rezepte/karp) to linia kości i pieca na Wigilię, tutaj pracują razem filet i sos warzywny. Ramę menu i harmonogram pokazuje [menu wigilijne](/pl/blog/menu-wigilijne).",
 shopDe:
 "Weißfischfilets holst du am besten frisch von der Fischtheke oder aus der Tiefkühltruhe, dazu Karotten, Zwiebeln und Tomatenmark aus dem normalen Supermarkt. Petersilienwurzel oder Sellerie findest du oft zuverlässiger im [Polenladen](/de/blog/polenladen-einkaufen), und falls eine der beiden fehlt, hilft mehr Karotte plus eine Selleriestange als ehrlicher Ersatz laut den [Ersatzprodukten](/de/blog/ersatzprodukte-de). Lorbeer und Gewürznelke kommen aus dem Gewürzregal. Einen ganzen Karpfen brauchst du für dieses Rezept nicht, das spart Grätenarbeit und hält den Fokus klar getrennt von [Karp](/de/rezepte/karp).",
 shopPl:
 "Filety białej ryby najlepiej kupić świeże z lady rybnej albo mrożone, do tego marchew, cebulę i koncentrat pomidorowy ze zwykłego sklepu. Pietruszkę korzeniową lub seler pewniej znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), a gdy brakuje jednego z nich, uczciwym zamiennikiem będzie więcej marchewki i łodyga selera według [zamienników składników](/pl/blog/zamienniki-skladnikow). Liść laurowy i goździk weź z przypraw. Do tego przepisu nie potrzebujesz całego karpia, co oszczędza pracy z ośćmi i trzyma wyraźną granicę wobec [karpia](/pl/rezepte/karp).",
 techniqueDe:
 "Der Fisch wird zuerst separat gebraten und beiseitegestellt, erst danach entsteht die Sauce in derselben Pfanne oder im Topf. Das Gemüse muss weich und süß werden, nicht braun und bitter, deshalb bei mittlerer statt hoher Hitze dünsten. Das Tomatenmark kurz mitkochen lässt seine Säure milder werden, und die Sauce sollte einkochen, bis sie den Löffel trägt, sonst wässert sie später den Teller. Die heiße Sauce kommt danach über den kalten Fisch, und genau diese Ziehzeit im Kühlschrank verbindet beide Elemente zu einem Gericht statt zu getrennten Zutaten auf einem Teller.",
 techniquePl:
 "Rybę smaży się najpierw osobno i odkłada na bok, dopiero potem w tej samej patelni albo garnku powstaje sos. Warzywa muszą zmięknąć i zrobić się słodkie, a nie brązowe i gorzkie, dlatego lepiej dusić je na średnim ogniu niż na dużym. Krótkie podgotowanie koncentratu pomidorowego łagodzi jego kwasowość, a sos powinien się zredukować na tyle, żeby niósł łyżkę, inaczej rozwodni później danie na talerzu. Gorący sos trafia na zimną już rybę, a właśnie czas odpoczynku w lodówce łączy oba elementy w jedno danie, zamiast zostawiać osobno rybę i warzywa na talerzu.",
 serveDe:
 "Am besten kalt oder höchstens lauwarm direkt aus der Form, mit Zitronenscheiben und etwas Dill. Als Gang passt es nach dem [Barszcz](/de/rezepte/barszcz-czerwony) oder als Teil eines Buffets neben [Śledź](/de/rezepte/sledz). Den Platz am Wigilia-Tisch zeigt der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan), während hier nur das Fischrezept selbst im Fokus steht. Im Kühlschrank hält sich das Gericht gut, und am zweiten Tag schmeckt es oft sogar runder.",
 servePl:
 "Najlepiej na zimno albo najwyżej letnio, prosto z naczynia, z plasterkami cytryny i koperkiem. Jako danie pasuje po [barszczu](/pl/rezepte/barszcz-czerwony) albo jako część bufetu obok [śledzia](/pl/rezepte/sledz). Miejsce przy stole wigilijnym pokazuje [menu wigilijne](/pl/blog/menu-wigilijne), a tutaj w centrum zostaje sam przepis na rybę. W lodówce danie dobrze się trzyma, a drugiego dnia smakuje często jeszcze pełniej.",
 diasporaDe:
 "In Deutschland ist das oft die pragmatische Fischlinie an Wigilia: Statt einen ganzen Karpfen zu organisieren, reichen Filets aus der Tiefkühltruhe, und die Sauce lässt sich schon am Vortag kochen, während der Kühlschrank den Rest der Arbeit übernimmt. Kinder dürfen beim Raspeln des Gemüses helfen, heißes Öl bleibt Sache der Erwachsenen. Wer den Speiseplan insgesamt entlasten will, kombiniert dieses Gericht mit tiefgekühlten Pierogi und einer klaren Suppe, mehr dazu steht im [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
 diasporaPl:
 "W Niemczech to często pragmatyczna wersja ryby na Wigilię: zamiast organizować całego karpia, wystarczą filety z zamrażarki, a sos można ugotować dzień wcześniej, bo resztę pracy wykona lodówka. Dzieci mogą pomóc przy tarciu warzyw, gorący olej zostaje przy dorosłych. Kto chce odciążyć całe menu, łączy to danie z mrożonymi pierogami i lekką zupą, więcej podpowiada [menu wigilijne](/pl/blog/menu-wigilijne).",
 mistakesDe:
 "Die häufigsten Fehler sind eine zu dünne, wässrige Sauce und Gemüse, das statt zu dünsten verbrennt und dadurch bitter wird. Manche verwechseln das Gericht mit dem ganzen Ofenkarpfen, aber [Karp](/de/rezepte/karp) ist ein eigenständiges Rezept mit anderer Fischform und anderer Garmethode. Wird die Sauce zu kurz gezogen, schmeckt am Ende Fisch und Gemüse getrennt statt als ein Gericht, und zu viel Zucker überdeckt die natürliche Süße der Karotte, die eigentlich schon ausreicht.",
 mistakesPl:
 "Najczęstsze błędy to zbyt rzadki, wodnisty sos i warzywa, które zamiast się dusić, przypalają się i robią gorzkie. Niektórzy mylą to danie z całym karpiem z pieca, ale [karp](/pl/rezepte/karp) to osobny przepis z inną formą ryby i inną metodą pieczenia. Zbyt krótki czas odpoczynku sprawia, że ryba i sos smakują osobno zamiast jako jedno danie, a nadmiar cukru zagłusza naturalną słodycz marchewki, która sama w sobie zwykle wystarcza.",
 variantsDe:
 "Statt Petersilienwurzel funktioniert auch reiner Sellerie, und wer die Gewürznelke weglässt, bekommt eine mildere Version. Etwas edelsüßes Paprikapulver in der Sauce gibt eine leicht rötlichere Farbe und mehr Tiefe, ohne das Gericht scharf zu machen. Zum Aufwärmen reicht ein kurzes Erhitzen, ein erneutes Braten würde die Textur des Fisches zerstören. Als Nachbarn am Wigilia-Tisch passen [Karp](/de/rezepte/karp) und [Śledź](/de/rezepte/sledz), Einkaufshilfen liefern der [Polenladen](/de/blog/polenladen-einkaufen) und die [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
 variantsPl:
 "Zamiast pietruszki korzeniowej sprawdza się sam seler, a rezygnacja z goździka daje łagodniejszą wersję. Odrobina słodkiej papryki w proszku dodaje sosowi lekko czerwonawego koloru i głębi smaku, bez ostrości. Do podgrzania wystarczy krótkie ogrzanie, ponowne smażenie zniszczyłoby strukturę ryby. Sąsiadami przy stole wigilijnym są [karp](/pl/rezepte/karp) i [śledź](/pl/rezepte/sledz), a wskazówek zakupowych szukaj w [sklepie polskim](/pl/blog/sklep-polski-zakupy) i w [zamiennikach składników](/pl/blog/zamienniki-skladnikow).",
 },

 "recipe-golonka": {
 dishDe: "Golonka",
 dishPl: "Golonka",
 vibeDe:
 "kräftig, deftig, nach Majoran und Fond, ein Gericht für die Geduld eines ganzen Sonntags",
 vibePl:
 "treściwy, na kości, z majerankiem i sosem, danie na cały niedzielny dzień cierpliwości",
 originDe:
 "Golonka heißt wörtlich „die Nackte“, denn der polnische Name geht auf „goła“ zurück, was bloß oder nackt bedeutet und sich auf das freigelegte Gelenk der Schweinshaxe bezieht. Das Gericht steht der deutschen Eisbein beziehungsweise Schweinshaxe sehr nah, und diese Nähe ist kein Zufall: In Schlesien und besonders in Wrocław, dem historischen Breslau, hat sich die Zubereitung stark an bayrischer und deutscher Küche orientiert, während weiter östlich eigene Wege entstanden sind. Ursprünglich galt die Haxe als einfaches, günstiges Stück vom Schwein, das nur durch langes Schmoren zart wird, und wurde deshalb vor allem in Wirtshäusern und Bierstuben serviert, wo sie bis heute als klassisches Bier-Essen gilt. Zu kommunistischen Zeiten, als gute Fleischstücke oft knapp waren, blieb Golonka verlässlich verfügbar und wurde dadurch noch populärer. Klar getrennt bleibt sie von der panierten [Schabowy](/de/rezepte/kotlet-schabowy), vom Ofenbraten [Schab pieczony](/de/rezepte/schab-pieczony) und von den Ofenrippen [Żeberka](/de/rezepte/zeberka). Kultur und Menüwahl rund ums Sonntagsessen zeigt der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch).",
 originPl:
 "Golonka to dosłownie „ta goła”, bo polska nazwa pochodzi od słowa goła i odnosi się do obnażonego stawu golenia wieprzowego. Danie jest bardzo bliskie niemieckiemu Eisbein czy Schweinshaxe, a to podobieństwo nie jest przypadkiem: na Śląsku, a zwłaszcza we Wrocławiu, dawnym Breslau, sposób przygotowania mocno czerpał z kuchni bawarskiej i niemieckiej, podczas gdy dalej na wschodzie wykształciły się własne warianty. Pierwotnie golonka była prostym, tanim kawałkiem wieprzowiny, który mięknie tylko dzięki długiemu duszeniu, dlatego najczęściej podawano ją w karczmach i piwiarniach, gdzie do dziś uchodzi za klasyczną zakąskę do piwa. W czasach PRL, kiedy dobre kawałki mięsa bywały trudno dostępne, golonka pozostawała łatwo osiągalna, co jeszcze zwiększyło jej popularność. Wyraźnie osobno zostaje przy tym panierowany [schabowy](/pl/rezepte/kotlet-schabowy), pieczeń [schab pieczony](/pl/rezepte/schab-pieczony) i [żeberka](/pl/rezepte/zeberka) z pieca. Kulturę i wybór menu wokół niedzielnego obiadu pokazuje [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 shopDe:
 "Eine gute Haxe mit Haut bekommst du beim Metzger deines Vertrauens oder im [Polenladen](/de/blog/polenladen-einkaufen), wobei die hintere Haxe meist mehr Fleisch und weniger Sehnen mitbringt. Majoran gehört unbedingt dazu, frisch oder getrocknet, die richtige Dosierung erklärt das [Majeranek-Lexikon](/de/blog/majeranek). Für das lange Schmoren hilft ein schwerer Topf mit dickem Boden, eine Kaufberatung dazu liefert der Beitrag zum [Dutch Oven](/de/blog/dutch-oven-kaufberatung). Senf und Meerrettich zum Servieren gibt es in jedem Supermarkt.",
 shopPl:
 "Dobrą golonkę ze skórą kupisz u zaufanego rzeźnika albo w [sklepie polskim](/pl/blog/sklep-polski-zakupy), przy czym tylna golonka zwykle ma więcej mięsa i mniej ścięgien niż przednia. Majeranek jest tu niezbędny, świeży albo suszony, a właściwe dawkowanie opisuje [leksykon majeranku](/pl/blog/majeranek-leksykon). Do długiego duszenia przyda się ciężki garnek z grubym dnem, poradnik znajdziesz przy [garnku do duszenia](/pl/blog/garnek-do-duszenia). Musztardę i chrzan do podania kupisz w każdym supermarkecie.",
 techniqueDe:
 "Erst scharf anbraten, dann lange bei niedriger Hitze schmoren, das ist die Grundregel, weil Kollagen im Bindegewebe nur langsam in Gelatine umgewandelt wird und bei zu hoher Hitze das Fleisch trotzdem zäh bleibt. Die Haut wird erst ganz am Ende bei hoher Temperatur knusprig, denn zu früh geröstet trocknet sie aus, bevor das Fleisch darunter fertig ist. Majoran sollte man nicht wie Oregano großzügig streuen, sein Aroma ist deutlich kräftiger und kann das Gericht schnell bitter machen. Wer die Flüssigkeit während des Schmorens nicht im Auge behält, riskiert, dass der Fond verkocht und das Fleisch am Boden ansetzt.",
 techniquePl:
 "Najpierw mocno obsmażyć, potem długo dusić na małym ogniu, to podstawowa zasada, bo kolagen w tkance łącznej zamienia się w żelatynę powoli, a przy zbyt wysokiej temperaturze mięso mimo to zostaje twarde. Skórka robi się chrupiąca dopiero na samym końcu w wysokiej temperaturze, bo zbyt wcześnie zapieczona wysycha, zanim mięso pod spodem będzie gotowe. Majeranku nie warto sypać tak hojnie jak oregano, bo jego aromat jest znacznie mocniejszy i łatwo przesadzić w stronę goryczy. Kto nie pilnuje poziomu płynu podczas duszenia, ryzykuje, że sos wyparuje, a mięso przypali się od spodu.",
 serveDe:
 "Heiß serviert mit Soße, Senf, Meerrettich, Sauerkraut oder Kartoffeln findet die Golonka ihren festen Platz beim [polnischen Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer lieber Rippen mag, greift zu [Żeberka](/de/rezepte/zeberka), wer einen Braten ohne Knochen bevorzugt, zu [Schab pieczony](/de/rezepte/schab-pieczony), und wer die panierte Variante sucht, zu [Schabowy](/de/rezepte/kotlet-schabowy). Reste schmecken am nächsten Tag in der aufgewärmten Soße oft noch besser, weil sich die Aromen weiter setzen.",
 servePl:
 "Podana na gorąco z sosem, musztardą, chrzanem, kapustą kiszoną lub ziemniakami golonka ma swoje stałe miejsce w [obiedzie niedzielnym](/pl/blog/obiad-niedzielny). Kto woli żeberka, sięgnie po [żeberka](/pl/rezepte/zeberka), kto woli pieczeń bez kości, po [schab pieczony](/pl/rezepte/schab-pieczony), a kto szuka panierowanej wersji, po [schabowy](/pl/rezepte/kotlet-schabowy). Resztki odgrzane następnego dnia w sosie smakują często jeszcze lepiej, bo aromaty mają czas się ułożyć.",
 diasporaDe:
 "In Deutschland reibt man die Haxe oft schon am Samstag ein und schmort sie am Sonntag, oder umgekehrt, wenn Schichtarbeit den Rhythmus verschiebt. Ein einziger Topf und wenig aktives Rühren lassen genug Zeit für einen Spaziergang, während das Fleisch vor sich hin köchelt. Eine große Haxe reicht meist für die ganze Familie, Kinder bekommen dabei automatisch das zarteste Fleisch nahe am Knochen. Den übrig gebliebenen Fond einzufrieren lohnt sich, denn er gibt später Suppen oder Soßen zusätzlichen Geschmack.",
 diasporaPl:
 "W Niemczech golonkę często naciera się już w sobotę, a dusi w niedzielę, albo odwrotnie, gdy praca zmianowa zmienia rytm tygodnia. Jeden garnek i niewiele mieszania zostawiają czas na spacer, podczas gdy mięso powoli się dusi. Jedna większa golonka zwykle wystarcza dla całej rodziny, a dzieci naturalnie dostają najdelikatniejsze mięso blisko kości. Warto zamrozić pozostały sos, bo później nada dodatkowy smak zupom albo innym sosom.",
 mistakesDe:
 "Zu hohe Hitze über zu kurze Zeit macht das Fleisch zäh statt zart, weil das Bindegewebe keine Zeit zum Weichwerden bekommt. Golonka wird leicht mit der panierten [Schabowy](/de/rezepte/kotlet-schabowy), dem Ofenbraten [Schab pieczony](/de/rezepte/schab-pieczony) oder den [Żeberka](/de/rezepte/zeberka) verwechselt, dabei handelt es sich um drei eigenständige Gerichte. Wer den Majoran wie Oregano dosiert, riskiert eine bittere Note, und wer die Haut von Anfang an knusprig haben will, trocknet meist das Fleisch darunter aus. Zu wenig Flüssigkeit im Topf führt außerdem dazu, dass der Fond während der langen Garzeit verkocht.",
 mistakesPl:
 "Zbyt wysoka temperatura przez zbyt krótki czas sprawia, że mięso zostaje twarde zamiast miękkiego, bo tkanka łączna nie ma czasu zmięknąć. Golonkę łatwo pomylić z panierowanym [schabowym](/pl/rezepte/kotlet-schabowy), pieczenią [schab pieczony](/pl/rezepte/schab-pieczony) czy [żeberkami](/pl/rezepte/zeberka), a to trzy osobne dania. Kto dawkuje majeranek jak oregano, ryzykuje gorzki posmak, a kto chce chrupiącej skórki od samego początku, zwykle wysusza mięso pod spodem. Zbyt mało płynu w garnku prowadzi też do tego, że sos wyparowuje podczas długiego duszenia.",
 variantsDe:
 "In Schlesien wird die Haxe traditionell in Bier mit viel Zwiebel geschmort, was ihr eine leicht malzige Süße gibt. In Masowien kommt oft mehr Kümmel dazu, dazu eine Senfglasur zum Nachbräunen, während man in Kaschubien manchmal Apfelwein und Wacholderbeeren in den Fond gibt. Nachbarn am Sonntagstisch sind [Żeberka](/de/rezepte/zeberka), [Schab pieczony](/de/rezepte/schab-pieczony) und [Schabowy](/de/rezepte/kotlet-schabowy), passendes Werkzeug findet sich beim [Dutch Oven](/de/blog/dutch-oven-kaufberatung) und die richtige Würzmenge im [Majeranek-Lexikon](/de/blog/majeranek).",
 variantsPl:
 "Na Śląsku golonkę tradycyjnie dusi się w piwie z dużą ilością cebuli, co daje jej lekko słodkawą, słodową nutę. Na Mazowszu częściej dodaje się kminku i musztardowej glazury do zapiekania na końcu, a na Kaszubach do sosu trafia czasem cydr i jagody jałowca. Sąsiadami na niedzielnym stole są [żeberka](/pl/rezepte/zeberka), [schab pieczony](/pl/rezepte/schab-pieczony) i [schabowy](/pl/rezepte/kotlet-schabowy), odpowiedni sprzęt znajdziesz przy [garnku do duszenia](/pl/blog/garnek-do-duszenia), a właściwą ilość przypraw w [leksykonie majeranku](/pl/blog/majeranek-leksykon).",
 },

 "recipe-kompot-z-suszu": {
 dishDe: "Kompot z suszu",
 dishPl: "Kompot z suszu",
 vibeDe:
 "dunkel, würzig-süß, nach Pflaume und Zimt, gleichzeitig Getränk und fruchtiger Nachtisch",
 vibePl:
 "ciemny, korzenno-słodki, ze śliwką i cynamonem, jednocześnie napój i deser",
 originDe:
 "Kompot z suszu geht vermutlich auf die Łemken zurück, eine Volksgruppe aus dem Niedrigen Beskiden im Südosten Polens, wo der Trockenobstkompot lokal „juha” hieß. Im Sommer wurde Obst getrocknet, um im Winter aus Pflaumen, Äpfeln und Birnen ein wärmendes, verdauungsförderndes Getränk zu kochen, lange bevor es überhaupt zur Wigilia gehörte. Der Brauch, ihn beim Weihnachtsessen zu servieren, kam erst später dazu und hat einen praktischen Grund: Die Wigilia besteht traditionell aus zwölf Gerichten, viele davon gebraten oder in Öl zubereitet wie Fisch und Pilze, und die Fruchtsäuren sowie die Ballaststoffe im Kompot helfen dabei, diese schwere Mahlzeit zu verdauen. Symbolisch stehen Äpfel für Gesundheit, Frieden und Liebe, während Pflaumen ein langes Leben andeuten sollen. Klar getrennt bleibt das Getränk vom gestärkten Fruchtdessert [Kisiel](/de/rezepte/kisiel), das mit Stärke gebunden wird und keine ganzen Fruchtstücke enthält. Den gesamten Menürahmen der Wigilia zeigt der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
 originPl:
 "Kompot z suszu wywodzi się prawdopodobnie od Łemków, grupy etnicznej z Beskidu Niskiego, gdzie lokalnie nazywano go juhą. Latem suszono owoce, żeby zimą ugotować z nich rozgrzewający, wspomagający trawienie napój ze śliwek, jabłek i gruszek, długo zanim w ogóle trafił na wigilijny stół. Zwyczaj podawania go podczas wieczerzy pojawił się później i ma praktyczne uzasadnienie: Wigilia tradycyjnie składa się z dwunastu potraw, z których wiele jest smażonych albo tłustych, jak ryba czy grzyby, a kwasy owocowe i błonnik z kompotu pomagają strawić ten ciężki posiłek. Symbolicznie jabłka mają oznaczać zdrowie, pokój i miłość, a śliwki długie życie. Wyraźnie osobno zostaje przy tym gęsty, zagęszczany skrobią [kisiel](/pl/rezepte/kisiel), w którym nie ma całych kawałków owoców. Cały plan wigilijnego stołu pokazuje [menu wigilijne](/pl/blog/menu-wigilijne).",
 shopDe:
 "Eine fertige Susz-Mischung aus Pflaumen, Äpfeln, Birnen und Aprikosen bekommst du oft im [Polenladen](/de/blog/polenladen-einkaufen), aber auch gutes Trockenobst aus dem Supermarkt funktioniert, solange die Qualität stimmt. Fehlt eine bestimmte Sorte, findest du im Beitrag zu [Ersatzprodukten](/de/blog/ersatzprodukte-de) einen ehrlichen Ersatz. Zimtstange, Gewürznelken und ungespritzte Orangenschale kommen aus dem Gewürzregal, Wasser und Zucker oder Honig bilden die Basis.",
 shopPl:
 "Gotową mieszankę suszu ze śliwek, jabłek, gruszek i moreli często znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), ale dobry susz z supermarketu też się sprawdzi, jeśli jakość jest odpowiednia. Gdy brakuje jednej odmiany, uczciwy zamiennik podpowiadają [zamienniki składników](/pl/blog/zamienniki-skladnikow). Laska cynamonu, goździki i nieopryskiwana skórka pomarańczy pochodzą z przypraw, a woda z cukrem lub miodem tworzą bazę.",
 techniqueDe:
 "Der Kompot startet immer mit kaltem Wasser, damit die Aromen langsam aus dem Trockenobst gezogen werden, statt sofort zu verkochen. Nach dem ersten Aufkochen sollte die Hitze klein bleiben, denn zu starkes Blubbern zerkocht die Früchte zu Brei, statt sie sanft weich werden zu lassen. Gesüßt wird erst am Ende, weil Trockenobst schon von Natur aus viel Süße mitbringt und zu früh zugegebener Zucker das Gleichgewicht verschiebt. Gewürze wie Zimt und Nelken vor dem Servieren zu entfernen verhindert, dass ihr Aroma beim Ziehen im Kühlschrank zu dominant wird.",
 techniquePl:
 "Kompot zawsze zaczyna się od zimnej wody, żeby aromaty powoli wydobywały się z suszu, zamiast od razu się rozgotować. Po pierwszym zagotowaniu ogień powinien być mały, bo zbyt mocne bulgotanie rozgotuje owoce na papkę, zamiast delikatnie je zmiękczyć. Słodzi się dopiero na końcu, bo susz sam w sobie ma sporo cukru, a zbyt wczesne dosładzanie zaburza równowagę smaku. Wyjęcie cynamonu i goździków przed podaniem zapobiega temu, żeby ich aromat zdominował smak podczas stania w lodówce.",
 serveDe:
 "Kalt in einer Karaffe mit den Früchten oder abgeseiht als klares Getränk serviert, passt der Kompot an den Wigilia-Tisch neben Barszcz und Fischgang, ganz gleich ob [Karp](/de/rezepte/karp) oder [Ryba po grecku](/de/rezepte/ryba-po-grecku) auf dem Menü steht. Am Folgetag schmeckt er gut zu [Makowiec](/de/rezepte/makowiec) oder einfach zum Frühstück. Verwechseln sollte man ihn nicht mit einem frischen Apfelkompot, denn hier prägt allein das Trockenobst den Charakter.",
 servePl:
 "Podany na zimno w karafce z owocami albo przecedzony jako czysty napój, kompot pasuje do stołu wigilijnego obok barszczu i dania rybnego, niezależnie od tego, czy jest to [karp](/pl/rezepte/karp) czy [ryba po grecku](/pl/rezepte/ryba-po-grecku). Następnego dnia dobrze komponuje się z [makowcem](/pl/rezepte/makowiec) albo po prostu ze śniadaniem. Nie warto mylić go ze świeżym kompotem jabłkowym, bo tutaj charakter buduje wyłącznie susz.",
 diasporaDe:
 "In Deutschland wird der Kompot oft schon am 23. Dezember gekocht, damit am Heiligabend selbst nur noch kaltgestellt werden muss und der Herd frei bleibt. Kinder dürfen das Obst abmessen und an Zimt und Nelken riechen, den heißen Topf übernehmen die Erwachsenen. Reste schmecken am nächsten Morgen gut zum Frühstück oder als fruchtige Beilage. Wer früh einkauft, findet die besten Susz-Mischungen im [Polenladen](/de/blog/polenladen-einkaufen), bevor sie kurz vor den Feiertagen knapp werden.",
 diasporaPl:
 "W Niemczech kompot często gotuje się już 23 grudnia, żeby w Wigilię trzeba było go tylko schłodzić, a kuchenka zostawała wolna. Dzieci mogą odmierzać owoce i wąchać cynamon z goździkami, gorący garnek zostaje przy dorosłych. Resztki dobrze smakują następnego ranka na śniadanie albo jako owocowy dodatek. Kto robi zakupy wcześnie, znajdzie najlepsze mieszanki suszu w [sklepie polskim](/pl/blog/sklep-polski-zakupy), zanim zabraknie ich tuż przed świętami.",
 mistakesDe:
 "Zu viel Zucker von Anfang an übertönt die natürliche Fruchtsüße, die der Kompot eigentlich schon mitbringt. Zu starkes Kochen zerfällt die Früchte zu Brei, statt sie sanft weich werden zu lassen. Frisches statt getrocknetes Obst im Verhältnis eins zu eins zu verwenden ergibt ein völlig anderes, viel dünneres Getränk. Verwechseln lässt sich der Kompot außerdem leicht mit dem gestärkten [Kisiel](/de/rezepte/kisiel), der keine ganzen Fruchtstücke enthält, und vergessene Gewürznelken im fertigen Getränk sorgen für unangenehme Überraschungen beim Trinken.",
 mistakesPl:
 "Zbyt duża ilość cukru od razu zagłusza naturalną słodycz, którą susz sam w sobie wnosi do kompotu. Zbyt mocne gotowanie rozgotowuje owoce na papkę, zamiast delikatnie je zmiękczyć. Użycie świeżych owoców w proporcji jeden do jednego zamiast suszu daje zupełnie inny, dużo rzadszy napój. Kompot łatwo pomylić też z gęstym [kisielem](/pl/rezepte/kisiel), w którym nie ma całych kawałków owoców, a zapomniane w gotowym napoju goździki potrafią nieprzyjemnie zaskoczyć podczas picia.",
 variantsDe:
 "Mehr Pflaumenanteil macht den Kompot dunkler und kräftiger, mehr Aprikose dagegen heller und milder süß. Ohne Gewürznelke wird die Note insgesamt sanfter, ein Spritzer Zitronensaft am Ende bringt zusätzliche Frische. Am Wigilia-Tisch passen als Nachbarn die Fischgerichte [Ryba po grecku](/de/rezepte/ryba-po-grecku) und [Karp](/de/rezepte/karp) sowie [Makowiec](/de/rezepte/makowiec) zum Nachtisch, während das gestärkte Pendant weiterhin [Kisiel](/de/rezepte/kisiel) heißt. Einkaufshilfen für Trockenobst und Ersatzzutaten liefern der [Polenladen](/de/blog/polenladen-einkaufen) und die [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
 variantsPl:
 "Więcej śliwek robi kompot ciemniejszym i mocniejszym, a więcej moreli jaśniejszym i łagodniej słodkim. Bez goździka smak staje się delikatniejszy, a odrobina soku z cytryny na końcu dodaje świeżości. Przy stole wigilijnym sąsiadują z nim dania rybne [ryba po grecku](/pl/rezepte/ryba-po-grecku) i [karp](/pl/rezepte/karp) oraz [makowiec](/pl/rezepte/makowiec) na deser, podczas gdy zagęszczanym odpowiednikiem pozostaje [kisiel](/pl/rezepte/kisiel). Wskazówek zakupowych dotyczących suszu i zamienników szukaj w [sklepie polskim](/pl/blog/sklep-polski-zakupy) i w [zamiennikach składników](/pl/blog/zamienniki-skladnikow).",
 },
};
