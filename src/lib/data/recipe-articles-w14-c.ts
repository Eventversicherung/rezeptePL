/**
 * Wave 14 Paket C — FACTS for placek-po-wegiersku + zapiekanka.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W14_FACTS_C } from "./recipe-articles-w14-c";
 * Object.assign(FACTS, …, W14_FACTS_C);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership CRITICAL:
 * - Placek po węgiersku = composed Primary (Placki + Gulasz plating)
 * ≠ Placki ziemniaczane alone ≠ Gulasz wieprzowy alone
 * - Zapiekanka = Baguette-Street ≠ Krokiety ≠ Naleśniki ≠ Pierogi
 * - Placki-Guide / Gulasz bleiben Einzeln-Owner; hier nur descriptive Crosslinks
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

export const W14_FACTS_C: Record<string, ArticleFacts> = {
 "recipe-placek-po-wegiersku": {
 dishDe: "Placek po węgiersku",
 dishPl: "Placek po węgiersku",
 vibeDe:
 "knusprige Puffer, paprikarotes Gulasch obenauf, optional Käse, ein zusammengesetzter Teller",
 vibePl:
 "chrupiące placki, paprykowy gulasz na wierzchu, opcjonalnie ser, jeden złożony talerz",
 originDe:
 "Trotz des Namens hat Placek po węgiersku mit Ungarn wenig zu tun: Ungarn selbst kennen diese Kombination kaum, dort isst man Gulasch traditionell zu einer Scheibe Brot, nicht zu Kartoffelpuffern. Die Verbindung aus Puffer und Gulaschsoße gilt vielen Kulinarik-Historikern als polnische Erfindung, die vor allem in den Milchbars (bary mleczne) der PRL-Zeit populär wurde: Wenn Fleisch knapp und rationiert war, streckte man eine kleine Menge Gulasch, indem man es großzügig über einen günstigen, sättigenden Kartoffelpuffer goss, statt es pur zu servieren. Im Tatra-Gebiet um Zakopane, wo früher Wilderei und Schmuggel eine Rolle spielten, ist bis heute der Name Placek zbójnicki gebräuchlich, der Räuberpuffer. Manche Quellen vermuten die eigentliche Wurzel der Kombination sogar in der Slowakei, die historisch lange zu Ungarn gehörte, denn dort wird Kartoffelpuffer mit Gulasch tatsächlich traditionell gegessen, wenn auch mit einer eigenen Note aus Senf und sauren Gurken im Fleisch. Der Name blieb bei der ungarischen Assoziation hängen, weil das Gulasch selbst nach ungarischem Vorbild mit reichlich Paprikapulver gewürzt wird. Die Puffer allein bleiben bei [Placki ziemniaczane](/de/rezepte/placki/ziemniaczane), der Eintopf allein bei [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy). Masse und Pfannentechnik vertieft der [Placki-Guide](/de/blog/placki-guide), den Menürahmen setzt das [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 originPl:
 "Mimo nazwy placek po węgiersku niewiele ma wspólnego z Węgrami: tamtejsi mieszkańcy prawie nie znają tego zestawienia, bo gulasz jedzą tradycyjnie z kromką chleba, nie z plackiem ziemniaczanym. Połączenie placka z sosem gulaszowym wielu historyków kuchni uznaje za polski pomysł, który spopularyzował się zwłaszcza w barach mlecznych czasów PRL: gdy mięsa było mało i podlegało reglamentacji, niewielką porcję gulaszu rozciągano, polewając nim tani i sycący placek ziemniaczany, zamiast podawać je osobno. Na Podhalu wokół Zakopanego, gdzie dawniej znaczącą rolę odgrywało kłusownictwo i przemyt, do dziś funkcjonuje nazwa placek zbójnicki. Część źródeł wskazuje nawet, że prawdziwym źródłem tego połączenia mogła być Słowacja, która historycznie długo należała do Węgier, bo tam placek z gulaszem faktycznie jada się tradycyjnie, choć z własnym akcentem musztardy i kiszonego ogórka w mięsie. Nazwa została przy skojarzeniu z Węgrami, bo sam gulasz przyrządza się na węgierską modłę, z dużą ilością papryki. Same placki zostają przy [plackach ziemniaczanych](/pl/rezepte/placki/ziemniaczane), sam gulasz przy [gulaszu wieprzowym](/pl/rezepte/gulasz-wieprzowy). Masę i patelnię pogłębia [przewodnik po plackach](/pl/blog/placki-przewodnik), ramę menu daje [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 shopDe:
 "Plane am besten zwei Einkaufskörbe: fürs Gulasch Schweinenacken mit Fettanteil, Paprika und Zwiebel sowie Tomatenmark, edelsüßes Paprikapulver und Brühe, für die Placki festkochende Kartoffeln, Ei, Mehl und Öl, optional Gouda oder Edamer. Fleisch und gutes Paprikapulver findest du oft im [Polenladen](/de/blog/polenladen-einkaufen). Wer nur Puffer möchte, bleibt bei [Placki](/de/rezepte/placki/ziemniaczane), wer nur schmoren möchte, bei [Gulasz](/de/rezepte/gulasz-wieprzowy). Zur Masse hilft der [Placki-Guide](/de/blog/placki-guide), zum passenden Topf die [Dutch-Oven-Kaufberatung](/de/blog/dutch-oven-kaufberatung).",
 shopPl:
 "Najlepiej zaplanuj dwa koszyki: na gulasz kark z odrobiną tłuszczu, paprykę i cebulę oraz koncentrat, słodką paprykę w proszku i bulion, na placki ziemniaki typu sałatkowego, jajko, mąkę i olej, opcjonalnie gouda lub edam. Dobre mięso i paprykę z charakterem często kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Kto chce same placki, zostaje przy [plackach](/pl/rezepte/placki/ziemniaczane), kto tylko dusić mięso, przy [gulaszu](/pl/rezepte/gulasz-wieprzowy). Przy masie pomaga [przewodnik po plackach](/pl/blog/placki-przewodnik), przy garnku [dutch oven](/pl/blog/garnek-do-duszenia).",
 techniqueDe:
 "Am besten startest du das Gulasch früh am Tag: kurz scharf anbraten, das Paprikapulver darf beim Anrösten nicht verbrennen, sonst wird es bitter, danach lange und geduldig schmoren. Die Placki kommen zuletzt an die Reihe, die geriebene Kartoffelmasse muss vor dem Backen kräftig ausgedrückt werden, sonst werden die Puffer im heißen Öl nicht knusprig, sondern weich. Beim Warmhalten die Puffer einzeln auf dem Blech verteilen statt zu stapeln, sonst weicht der eigene Dampf die Kruste wieder auf. Beim Anrichten kommt die Soße direkt auf die Puffer, nicht als zweites Gericht daneben, denn genau dieses Übereinander macht das Gericht aus. Der Käse schmilzt optional kurz unter dem Grill. Entscheidend fürs Timing ist, dass das Gulasch geduldig warten kann, während frisch gebackene Placki das nicht tun, unter der Soße werden sie sonst schnell weich.",
 techniquePl:
 "Najlepiej zacząć od gulaszu wcześnie w ciągu dnia: krótko obsmażyć mięso, uważać, żeby papryka w proszku się nie spaliła podczas podsmażania, bo zrobi się gorzka, a potem długo i cierpliwie dusić. Placki przygotowuje się na końcu, startą masę ziemniaczaną trzeba mocno odcisnąć, inaczej placki na gorącym oleju nie będą chrupiące, tylko miękkie. Przy trzymaniu ciepła placki układaj osobno na blasze, a nie w stos, bo inaczej własna para znowu zmiękczy skórkę. Przy podawaniu sos trafia bezpośrednio na placki, a nie obok jako osobne danie, właśnie to nałożenie jednego na drugie definiuje to danie. Ser opcjonalnie roztapia się krótko pod grillem. Kluczowe dla czasu jest to, że gulasz cierpliwie poczeka, a świeżo usmażone placki nie, pod sosem szybko miękną.",
 serveDe:
 "Serviere heiß zwei bis drei Puffer pro Person, Gulasch großzügig darüber, optional Käse und einen Löffel Śmietana am Rand. Den Menürahmen dafür setzt das [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer die Komponenten lieber einzeln möchte, bleibt bei [Placki](/de/rezepte/placki/ziemniaczane) oder bei [Gulasz](/de/rezepte/gulasz-wieprzowy), Technik zum Nachschlagen liefert der [Placki-Guide](/de/blog/placki-guide).",
 servePl:
 "Podawaj gorące, dwa do trzech placków na osobę, gulasz hojnie na wierzchu, opcjonalnie ser i łyżkę śmietany z boku. Ramę menu daje [obiad niedzielny](/pl/blog/obiad-niedzielny). Kto woli osobne komponenty, zostaje przy [plackach](/pl/rezepte/placki/ziemniaczane) lub przy [gulaszu](/pl/rezepte/gulasz-wieprzowy), technikę pogłębia [przewodnik po plackach](/pl/blog/placki-przewodnik).",
 diasporaDe:
 "In Deutschland kocht man das Gulasch oft am Samstag vor und brät sonntags nur noch die Placki frisch, das entlastet den Sonntag spürbar. Kinder dürfen die Kartoffeln reiben und den Käse verteilen, heißes Öl und der Schmortopf bleiben bei den Erwachsenen. Aus zwei einzelnen Gerichten wird auf dem Teller eines. Zutaten dafür findest du früh genug im [Polenladen](/de/blog/polenladen-einkaufen). Der kulturelle Rahmen bleibt beim [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 diasporaPl:
 "W Niemczech gulasz często gotuje się w sobotę, a w niedzielę smaży się już tylko świeże placki, co wyraźnie odciąża niedzielę. Dzieci mogą trzeć ziemniaki i posypywać serem, gorący olej i garnek zostają przy dorosłych. Z dwóch osobnych dań na talerzu powstaje jedno. Składniki warto kupić wcześniej w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Rama kulturowa zostaje przy [obiedzie niedzielnym](/pl/blog/obiad-niedzielny).",
 mistakesDe:
 "Nur nackte Placki zu servieren verfehlt den Teller, dafür gibt es [Placki](/de/rezepte/placki/ziemniaczane) als eigenes Rezept. Eine einzelne Gulaschschüssel ist [Gulasz](/de/rezepte/gulasz-wieprzowy), nicht Placek po węgiersku. Puffer zu lange unter der Soße stehen zu lassen macht sie matschig, das Gulasch darf warten, die Placki nicht. Den Sonntagsplan insgesamt liefert ohnehin das [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 mistakesPl:
 "Same gołe placki mijają się z tym daniem, na to jest osobny przepis na [placki](/pl/rezepte/placki/ziemniaczane). Sama miska gulaszu to [gulasz](/pl/rezepte/gulasz-wieprzowy), nie placek po węgiersku. Placki stojące zbyt długo pod sosem miękną, gulasz poczeka, placki nie. Cały plan niedzieli i tak daje [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 variantsDe:
 "Ohne Käse bleibt die Kombination genauso stimmig, mit Pilzgulasch entsteht eine vegetarisch nähere Variante, die man ehrlich benennen sollte, mit mehr Chili wird es schärfer. Wer die slowakische Linie mit Senf und sauren Gurken im Gulasch ausprobieren möchte, bekommt damit eine spürbar andere Säure als bei der klassischen Paprikaversion. Passende Nachbarn sind [Placki](/de/rezepte/placki/ziemniaczane), [Gulasz](/de/rezepte/gulasz-wieprzowy) und der [Placki-Guide](/de/blog/placki-guide). Zum Rahmen passt das [Sonntagsessen](/de/blog/sonntagsessen-polnisch), zum Topf die [Dutch-Oven-Kaufberatung](/de/blog/dutch-oven-kaufberatung), zum Einkauf der [Polenladen](/de/blog/polenladen-einkaufen).",
 variantsPl:
 "Bez sera zestawienie smakuje równie dobrze, z gulaszem pieczarkowym powstaje wariant bliższy wegetariańskiemu, warto go uczciwie nazwać, z większą ilością chili robi się ostrzej. Kto chce wypróbować słowacką linię z musztardą i kiszonym ogórkiem w gulaszu, poczuje wyraźnie inną kwasowość niż w klasycznej wersji paprykowej. Pasujący sąsiedzi to [placki](/pl/rezepte/placki/ziemniaczane), [gulasz](/pl/rezepte/gulasz-wieprzowy) i [przewodnik po plackach](/pl/blog/placki-przewodnik). Do ramy pasuje [obiad niedzielny](/pl/blog/obiad-niedzielny), do garnka [dutch oven](/pl/blog/garnek-do-duszenia), do zakupów [sklep polski](/pl/blog/sklep-polski-zakupy).",
 },

"recipe-zapiekanka": {
dishDe: "Zapiekanka",
dishPl: "Zapiekanka",
vibeDe:
"knuspriges Baguette mit Pilzen, Schinken und geschmolzenem Käse, dazu ein Klecks Ketchup",
vibePl:
"chrupiąca bagietka z pieczarkami, szynką i roztopionym serem, do tego odrobina keczupu",
originDe:
"Die Zapiekanka entstand in den 1970er Jahren, als Polen unter Edward Gierek eine französische Lizenz zur Baguetteproduktion kaufte, weil Gierek das Brot aus seiner Jugend in Frankreich und Belgien schätzte. Kleine private Imbisse, damals als „mała gastronomia“ nur knapp erlaubt, brauchten ein Gericht, das billig, schnell und aus zuverlässig verfügbaren Zutaten machbar war, und landeten bei ausgedämpften Champignons auf halbiertem Baguette mit Käse. Der Name kommt von „zapiekać“, was so viel bedeutet wie überbacken, bis es blubbert und bräunt. Ketchup kam vor allem aus Kostengründen dazu, brachte aber genau die Säure und Feuchte, die trockenem Brot und mildem Belag fehlten. Kultstatus bekam die Zapiekanka am Plac Nowy im Krakauer Stadtteil Kazimierz, wo Dutzende Stände rund um den Okrąglak, eine zwölfeckige Markthalle aus dem Jahr 1900, bis tief in die Nacht verkaufen. Der Geschmack entsteht aus dem Kontrast von reichlich ausgedämpften Pilzen für Umami, geschmolzenem Käse für Fett und Bindung, geröstetem Brot für Biss und dem süßsauren Ketchup obenauf für den letzten Kick. Form und Belag unterscheiden sie klar von der gerollten Panade der [Krokiety](/de/rezepte/krokiety) und von der dünnen Pfannkuchenplatte der [Naleśniki](/de/rezepte/nalesniki/twarog).",
originPl:
"Zapiekanka powstała w latach siedemdziesiątych, kiedy Polska za czasów Edwarda Gierka kupiła od Francuzów licencję na produkcję bagietek, bo Gierek pamiętał ten chleb z młodości spędzonej we Francji i Belgii. Małe prywatne bary, dopuszczone wtedy tylko jako tak zwana mała gastronomia, potrzebowały dania szybkiego, taniego i opartego na składnikach, które zawsze były dostępne, i tak powstała bagietka z odparowanymi pieczarkami i serem. Nazwa pochodzi od słowa zapiekać, czyli piec, aż danie się zrumieni i zabąbelkuje. Keczup dodano głównie z powodów kosztowych, ale to on dał potrzebną kwaskowość i wilgoć, których suchemu chlebowi i łagodnemu nadzieniu brakowało. Kultowy status zapiekanka zdobyła na krakowskim placu Nowym na Kazimierzu, gdzie dziesiątki straganów wokół Okrąglaka, dwunastokątnej hali targowej z 1900 roku, sprzedają je do późnej nocy. Smak buduje kontrast dużej ilości odparowanych pieczarek, które dają umami, roztopionego sera, który dodaje tłustości i spójności, podpieczonego chleba, który daje chrupkość, i słodko kwaśnego keczupu na wierzchu jako ostatniego akcentu. Forma i nadzienie odróżniają ją jasno od zwijanej panierki [krokietów](/pl/rezepte/krokiety) i od cienkiej płyty [naleśników](/pl/rezepte/nalesniki/twarog).",
shopDe:
"Für die klassische Version brauchst du ein knuspriges Baguette, Champignons und Zwiebel, gekochten Schinken, einen gut schmelzenden Käse wie Gouda oder Edamer, Butter oder Öl und Ketchup. Die Basis bekommst du im Supermarkt, Schinken und Käse mit mehr Charakter findest du oft günstiger im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt eine bestimmte Käsesorte, hilft der Beitrag zu [Ersatzprodukten](/de/blog/ersatzprodukte-de) weiter. Wer lieber etwas Gerolltes und Paniertes mag, ist bei [Krokiety](/de/rezepte/krokiety) besser aufgehoben, und wer einen dünnen Pfannkuchen füllen möchte, bei [Naleśniki](/de/rezepte/nalesniki/twarog).",
shopPl:
"Na klasyczną wersję potrzebujesz chrupiącej bagietki, pieczarek i cebuli, szynki gotowanej, sera który dobrze się roztapia, na przykład gouda albo edam, masła lub oleju oraz keczupu. Bazę kupisz w markecie, a szynkę i ser z charakterem często taniej znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Jeśli brakuje konkretnej odmiany sera, sprawdź [zamienniki składników](/pl/blog/zamienniki-skladnikow). Kto woli coś zwijanego i panierowanego, powinien sięgnąć po [krokiety](/pl/rezepte/krokiety), a kto chce nadziać cienki naleśnik, po [naleśniki](/pl/rezepte/nalesniki/twarog).",
techniqueDe:
"Champignons und Zwiebel müssen so lange in der Pfanne bleiben, bis die austretende Flüssigkeit komplett verdampft ist, sonst wird das Baguette später matschig statt knusprig. Das Brot kurz vor dem Belegen anrösten, den Belag gleichmäßig verteilen und den Käse großzügig darüber verteilen, damit die Ränder schön braun werden. Gouda und Edamer bräunen zuverlässig, Mozzarella bleibt eher hell und zieht dafür lange Fäden. Der Ketchup gehört erst nach dem Backen darauf, damit er nicht verbrennt. Für eine vegetarische Version lässt sich der Schinken einfach weglassen, dann aber im Titel ehrlich als „nur Pilze“ kennzeichnen.",
techniquePl:
"Pieczarki z cebulą muszą smażyć się tak długo, aż odparuje cała wydzielona woda, inaczej bagietka rozmoknie, zamiast być chrupiąca. Chleb podpiecz krótko przed nakładaniem farszu, rozłóż go równo i hojnie posyp serem, żeby brzegi ładnie się przypiekły. Gouda i edam brązowieją pewnie, mozzarella zostaje bledsza, ale ciągnie się długimi niciami. Keczup dodaj dopiero po pieczeniu, żeby się nie spalił. W wersji wegetariańskiej po prostu pomiń szynkę i uczciwie napisz w tytule „tylko pieczarki”.",
serveDe:
"Am besten heiß aus der Hand oder von einem Brett, längs geschnitten oder in mundgerechte Stücke geteilt, mit einem Streifen Ketchup und optional etwas Schnittlauch. Als schneller Alltagsgriff steht sie neben einem ausführlichen [Sonntagsessen](/de/blog/sonntagsessen-polnisch), ersetzt es aber nicht. Verwechsle sie nicht mit [Pierogi](/de/rezepte/pierogi/ruskie) oder [Krokiety](/de/rezepte/krokiety), beide haben einen völlig anderen Teig. Zutaten mit mehr Charakter findest du im [Polenladen](/de/blog/polenladen-einkaufen).",
servePl:
"Najlepiej podawać na gorąco, prosto z ręki albo z deski, w całości lub pokrojoną na kawałki, z paskiem keczupu i opcjonalnie szczypiorkiem. Jako szybkie rozwiązanie na dzień powszedni stoi obok pełnego [obiadu niedzielnego](/pl/blog/obiad-niedzielny), ale go nie zastępuje. Nie myl jej z [pierogami](/pl/rezepte/pierogi/ruskie) ani z [krokietami](/pl/rezepte/krokiety), bo wszystkie trzy mają zupełnie inne ciasto. Składniki z charakterem znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
diasporaDe:
"In Deutschland landet die Zapiekanka oft am Freitagabend oder direkt nach dem Sport auf dem Tisch, weil sie in etwa 20 Minuten fertig ist und kaum Geschirr macht. Kinder dürfen den Käse verteilen, den heißen Ofen übernehmen die Erwachsenen. Ein Baguette reicht für vier Portionen, was sie auch für spontanen Besuch praktisch macht. Passende Zutaten und typische polnische Wurst- und Käsesorten findest du im [Polenladen](/de/blog/polenladen-einkaufen), Alternativen dazu stehen im Beitrag zu [Ersatzprodukten](/de/blog/ersatzprodukte-de).",
diasporaPl:
"W Niemczech zapiekanka trafia na stół najczęściej w piątkowy wieczór albo po treningu, bo jest gotowa w około 20 minut i zostawia mało naczyń do zmywania. Dzieci mogą sypać ser, gorący piekarnik zostaje przy dorosłych. Jedna bagietka wystarcza na cztery porcje, co sprawdza się też przy niezaplanowanych gościach. Typowe polskie wędliny i sery znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), a zamienniki opisuje wpis o [zamiennikach składników](/pl/blog/zamienniki-skladnikow).",
mistakesDe:
"Zu nasse Pilze verwandeln das Baguette in einen weichen Brei, deshalb muss die Flüssigkeit vollständig verdampfen. Wer zu wenig Käse verwendet, verliert genau den Schmelz, der das Gericht ausmacht. Eine runde Pizza statt der länglichen Baguetteform ist etwas anderes, auch wenn die Zutaten ähnlich klingen. Und Zapiekanka lässt sich leicht mit [Krokiety](/de/rezepte/krokiety) oder [Naleśniki](/de/rezepte/nalesniki/twarog) verwechseln, obwohl alle drei einen komplett unterschiedlichen Teig haben.",
mistakesPl:
"Za mokre pieczarki zamieniają bagietkę w rozmokłą papkę, więc woda musi całkowicie odparować. Za mało sera oznacza brak charakterystycznego roztopionego wykończenia. Okrągła pizza to inne danie niż wydłużona bagietka, nawet jeśli składniki wyglądają podobnie. Zapiekankę łatwo pomylić z [krokietami](/pl/rezepte/krokiety) albo [naleśnikami](/pl/rezepte/nalesniki/twarog), choć wszystkie trzy mają zupełnie inne ciasto.",
variantsDe:
"Am bekanntesten neben der klassischen Version mit Ketchup ist die Zapiekanka meksykańska, bei der Mais, eingelegte Peperoni und eine scharfe Sauce für ordentlich Schärfe sorgen. Am Plac Nowy in Krakau servieren viele Stände zusätzlich Sos czosnkowy, eine milde Knoblauchsauce, oft zusammen mit einer Scheibe Essiggurke unter dem Käse. Statt Schinken passt auch Kiełbasa, und wer ganz auf Fleisch verzichtet, lässt den Schinken weg und schreibt „nur Pilze“ ehrlich in den Titel. Wer stattdessen etwas Gerolltes mag, findet das bei [Krokiety](/de/rezepte/krokiety), wer einen Pfannkuchen füllen will, bei [Naleśniki](/de/rezepte/nalesniki/twarog). Hintergrund und Einkauf liefern der [Polenladen](/de/blog/polenladen-einkaufen) und die [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
variantsPl:
"Obok klasycznej wersji z keczupem najbardziej znana jest zapiekanka meksykańska, w której kukurydza, papryczki jalapeño i ostry sos dodają wyraźnej ostrości. Na krakowskim placu Nowym wiele straganów proponuje też sos czosnkowy jako alternatywę dla keczupu, często razem z plasterkiem ogórka konserwowego pod serem. Szynkę można zastąpić kiełbasą, a kto woli wersję bezmięsną, po prostu ją pomija i uczciwie pisze „tylko pieczarki” w tytule. Kto szuka czegoś zwijanego, znajdzie to w [krokietach](/pl/rezepte/krokiety), a kto chce nadziać naleśnik, w [naleśnikach](/pl/rezepte/nalesniki/twarog). Więcej o zakupach i zamiennikach piszemy w [sklepie polskim](/pl/blog/sklep-polski-zakupy) i w [zamiennikach składników](/pl/blog/zamienniki-skladnikow).",
},
};
