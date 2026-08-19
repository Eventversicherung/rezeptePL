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
 "knusprige Puffer, paprikarotes Gulasch obenauf, optional Käse — ein zusammengesetzter Teller",
 vibePl:
 "chrupiące placki, paprykowy gulasz na wierzchu, opcjonalnie ser — jeden złożony talerz",
 originDe:
 "Placek po węgiersku ist der zusammengesetzte Sonntagsteller: knusprige Kartoffelpuffer mit paprikarotem Schweinegulasch obenauf — oft noch mit geschmolzenem Käse. Er verbindet zwei Klassiker zu einem Gericht, ohne die Einzelrezepte zu ersetzen: die Puffer allein bleiben bei [Placki ziemniaczane](/de/rezepte/placki/ziemniaczane), der Eintopf allein bei [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy). Masse und Pfannentechnik vertieft der [Placki-Guide](/de/blog/placki-guide); den Menürahmen setzt [Sonntagsessen](/de/blog/sonntagsessen-polnisch). In der Diaspora ist das oft der Tag, an dem man beide Stränge bewusst plant — Gulasch früh, Placki zuletzt.",
 originPl:
 "Placek po węgiersku to złożony talerz niedzielny: chrupiące placki ziemniaczane z paprykowym gulaszem wieprzowym na wierzchu — często jeszcze z roztopionym serem. Łączy dwa klasyki w jedno danie, bez zastępowania osobnych przepisów: same placki zostają przy [plackach ziemniaczanych](/pl/rezepte/placki/ziemniaczane), sam gulasz przy [gulaszu wieprzowym](/pl/rezepte/gulasz-wieprzowy). Masę i patelnię pogłębia [przewodnik po plackach](/pl/blog/placki-przewodnik); ramę menu daje [obiad niedzielny](/pl/blog/obiad-niedzielny). W diasporze to często dzień, gdy świadomie planujesz dwa tory — gulasz wcześniej, placki na końcu.",
 shopDe:
 "Plane zwei Einkaufskörbe: fürs Gulasch Schweinenacken mit Fettanteil, Paprika und Zwiebel sowie Tomatenmark, edelsüßes Paprikapulver und Brühe; für die Placki festkochende Kartoffeln plus Ei, Mehl und Öl — optional Gouda oder Edamer. Fleisch und Paprika-Feeling holst du oft im [Polenladen](/de/blog/polenladen-einkaufen). Wer nur Puffer will, bleibt bei [Placki](/de/rezepte/placki/ziemniaczane); wer nur schmoren will, bei [Gulasz](/de/rezepte/gulasz-wieprzowy). Zur Masse hilft der [Placki-Guide](/de/blog/placki-guide), zum Topf der [Dutch Oven](/de/blog/dutch-oven-kaufberatung).",
 shopPl:
 "Zaplanuj dwa koszyki: na gulasz kark z tłuszczem, paprykę i cebulę oraz koncentrat, słodką paprykę w proszku i bulion; na placki ziemniaki typu sałatkowego plus jajko, mąkę i olej — opcjonalnie gouda lub edam. Mięso i paprykę z charakterem często kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Kto chce same placki, zostaje przy [plackach](/pl/rezepte/placki/ziemniaczane); kto tylko dusić — przy [gulaszu](/pl/rezepte/gulasz-wieprzowy). Przy masie pomaga [przewodnik](/pl/blog/placki-przewodnik), przy garnku [dutch oven](/pl/blog/garnek-do-duszenia).",
 techniqueDe:
 "Zwei Stränge, ein Teller: Gulasch früh starten (anbraten, Paprika nicht verbrennen, lange schmoren). Placki zuletzt — Masse ausdrücken, heiß ausbacken, warm halten ohne Stapeln. Anrichten: Soße **obenauf**, nicht daneben als „zwei Gerichte auf einem Tisch“. Käse optional unter Grill. Timing: Gulasch wartet, Puffer nicht — sonst matschig unter der Soße.",
 techniquePl:
 "Dwa tory, jeden talerz: gulasz wcześniej (obsmażyć, nie spalić papryki, długo dusić). Placki na końcu — odcisnąć masę, smażyć na gorąco, trzymać ciepłe bez stosu. Podanie: sos **na wierzchu**, nie obok jako „dwa dania na stole”. Ser opcjonalnie pod grillem. Timing: gulasz poczeka, placki nie — inaczej miękną pod sosem.",
 serveDe:
 "Serviere heiß zwei bis drei Puffer pro Person, Gulasch großzügig darüber, optional Käse und Śmietana am Rand. Den Menürahmen setzt [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer die Komponenten einzeln will, bleibt bei [Placki](/de/rezepte/placki/ziemniaczane) oder [Gulasz](/de/rezepte/gulasz-wieprzowy); Technik nachschlagen hilft der [Placki-Guide](/de/blog/placki-guide).",
 servePl:
 "Podawaj gorące dwa do trzech placków na osobę, gulasz hojnie na wierzchu, opcjonalnie ser i śmietanę z boku. Ramę menu daje [obiad niedzielny](/pl/blog/obiad-niedzielny). Osobne komponenty zostają przy [plackach](/pl/rezepte/placki/ziemniaczane) lub [gulaszu](/pl/rezepte/gulasz-wieprzowy); technikę pogłębia [przewodnik po plackach](/pl/blog/placki-przewodnik).",
 diasporaDe:
 "In DE oft Samstag Gulasch, Sonntag nur Placki braten und anrichten — entlastet den Tag. Kinder dürfen reiben und Käse streuen; heißes Öl und Schmortopf bei Erwachsenen. Ein zusammengesetzter Teller statt zwei getrennter Gerichte. Einkauf früh: [Polenladen](/de/blog/polenladen-einkaufen). Kulturrahmen bleibt bei [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 diasporaPl:
 "W DE często sobota gulasz, niedziela tylko smażyć placki i układać — odciąża dzień. Dzieci trą i sypią ser; gorący olej i garnek u dorosłych. Jeden złożony talerz zamiast dwóch osobnych dań. Zakupy wcześniej: [sklep polski](/pl/blog/sklep-polski-zakupy). Kultura: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 mistakesDe:
 "Nur nackte Placki zu kochen verfehlt den Teller — dafür gibt es [Placki](/de/rezepte/placki/ziemniaczane). Nur eine Gulaschschüssel ist [Gulasz](/de/rezepte/gulasz-wieprzowy), nicht Placek po węgiersku. Puffer unter der Soße zu lange warten lassen macht sie matschig; Gulasch darf warten, Placki nicht. Den Sonntagsplan ersetzt du hier nicht — dafür steht [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 mistakesPl:
 "Same gołe placki mijają ten talerz — na to jest przepis [placki](/pl/rezepte/placki/ziemniaczane). Sama miska gulaszu to [gulasz](/pl/rezepte/gulasz-wieprzowy), nie placek po węgiersku. Placki za długo pod sosem miękną; gulasz poczeka, placki nie. Planu niedzieli tu nie zastępujesz — jest [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 variantsDe:
 "Ohne Käse; mit Pilzgulasch (ehrlich benennen); schärfer. Passende Nachbarn sind [Placki](/de/rezepte/placki/ziemniaczane), [Gulasz](/de/rezepte/gulasz-wieprzowy), Guide [Placki](/de/blog/placki-guide), [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Dutch Oven](/de/blog/dutch-oven-kaufberatung), [Polenladen](/de/blog/polenladen-einkaufen).",
 variantsPl:
 "Bez sera; z gulaszem pieczarkowym (nazwać uczciwie); ostrzej. Pasujący sąsiedzi to [placki](/pl/rezepte/placki/ziemniaczane), [gulasz](/pl/rezepte/gulasz-wieprzowy), [przewodnik](/pl/blog/placki-przewodnik), [obiad niedzielny](/pl/blog/obiad-niedzielny), [dutch oven](/pl/blog/garnek-do-duszenia), [sklep polski](/pl/blog/sklep-polski-zakupy).",
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
