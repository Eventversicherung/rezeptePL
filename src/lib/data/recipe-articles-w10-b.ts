/**
 * Wave 10 Paket B — FACTS for Piernik + Zupa pomidorowa.
 * Isolated export `W10_FACTS_B` — Integrator merges into recipe-articles.ts FACTS map.
 * Shape matches ArticleFacts in recipe-articles.ts.
 *
 * Ownership:
 * - Piernik Primary nur /rezepte/piernik; Makowiec/Sernik/Babka unangetastet (descriptive)
 * - Zupa pomidorowa = Cook-Primary; post-polnische-suppen bleibt Overview-Owner
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

export const W10_FACTS_B: Record<string, ArticleFacts> = {
  "recipe-piernik": {
    dishDe: "Piernik",
    dishPl: "Piernik",
    vibeDe: "honig-gewürzig, weich-festlich, warm und duftig",
    vibePl: "miodowo-korzenny, miękko-świąteczny, ciepły i pachnący",
    originDe:
      "Piernik hat seine Wurzeln im mittelalterlichen Toruń, das seit dem 13. Jahrhundert an einer wichtigen Hanseroute lag und dadurch Zugang zu Gewürzen aus dem Orient hatte, die über das Schwarze Meer und Lwów bis an die Weichsel gelangten. Die erste schriftliche Erwähnung eines Toruner Lebkuchenbäckers namens Niclos Czan stammt aus dem Jahr 1380. Der Name Piernik kommt vom altpolnischen Wort pierny, was so viel wie pfeffrig oder würzig bedeutet, denn ursprünglich stand der Pfeffer im Vordergrund, nicht der Ingwer. Die harten, oft kunstvoll verzierten Toruner Pierniki, wie sie noch heute als Souvenir verkauft werden, unterscheiden sich deutlich vom weichen Honigkuchen, der in polnischen Haushalten zur Wigilia oder als Alltagskuchen gebacken wird und den dieses Rezept beschreibt. Bewusst kein gerollter Mohnkuchen: [Makowiec](/de/rezepte/makowiec) bleibt das Rezept für die Mohnrolle, [Sernik](/de/rezepte/sernik) die Käsekuchen-Linie und [Babka](/de/rezepte/babka) der Hefegugelhupf. Piernik trägt sein Aroma über Honig und Gewürz, nicht über Hefe-Spirale oder Twaróg. Am [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan) steht er oft als süßer Schluss oder Mitbringsel neben Kompott und Mohnspeise.",
    originPl:
      "Piernik ma korzenie w średniowiecznym Toruniu, który od XIII wieku leżał na ważnym szlaku hanzeatyckim i dzięki temu miał dostęp do przypraw z Orientu, docierających przez Morze Czarne i Lwów aż nad Wisłę. Pierwsza pisemna wzmianka o toruńskim piekarzu piernikarskim, Niclosie Czanie, pochodzi z 1380 roku. Nazwa piernik wywodzi się od staropolskiego słowa pierny, czyli pieprzny albo korzenny, bo pierwotnie na pierwszym planie był pieprz, a nie imbir. Twarde, często ozdobnie rzeźbione toruńskie pierniki, sprzedawane do dziś jako pamiątka, znacznie różnią się od miękkiego ciasta miodowego, które piecze się w polskich domach na Wigilię albo na codzienną kawę i które opisuje ten przepis. Świadomie nie rolada makowa: [makowiec](/pl/rezepte/makowiec) zostaje przepisem na roladę z makiem, [sernik](/pl/rezepte/sernik) linii sernikowej, a [babka](/pl/rezepte/babka) ciasta drożdżowego z formy. Piernik niesie aromat przez miód i korzenie, nie przez drożdżową spiralę czy twaróg. Przy [menu wigilijnym](/pl/blog/menu-wigilijne) bywa słodkim finałem lub poczęstunkiem obok kompotu i maku.",
    shopDe:
      "Für den Honigkuchen brauchst du Honig, Mehl (405/550), Butter, Eier, Zucker und Backpulver sowie Gewürze wie Zimt, Nelke, Ingwer, Muskat und Piment oder eine fertige Piernik-Mischung, optional dazu Kakao und dunkle Schokolade. Honig und gute Gewürze findest du oft im [Polenladen](/de/blog/polenladen-einkaufen). Das Apfelblech ist [Szarlotka](/de/rezepte/szarlotka), die Mohnrolle [Makowiec](/de/rezepte/makowiec).",
    shopPl:
      "Na piernik potrzebujesz miodu, mąki (405/550), masła, jajek, cukru i proszku do pieczenia oraz przypraw (cynamon, goździk, imbir, gałka, ziele angielskie) albo gotowej przyprawy do piernika, opcjonalnie kakao i ciemnej czekolady. Miód i dobre przyprawy często kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Jabłko z blachy to [szarlotka](/pl/rezepte/szarlotka), rolka makowa to [makowiec](/pl/rezepte/makowiec).",
    techniqueDe:
      "Die Honigmasse nur erwärmen, niemals kochen, sonst wird sie bitter, und erst danach mit den trockenen Zutaten zu einem zähen, streichfähigen Teig verbinden. Die Form gut fetten, bei mittlerer Ofentemperatur backen und mit der Stäbchenprobe im Kern prüfen. Ein zu heißer Ofen ergibt eine dunkle Kruste außen, während der Kern innen klebrig bleibt, dieselbe Ofengeduld gilt auch im [Makowiec-Technik](/de/blog/makowiec-technik)-Guide, nur ohne Rollen und ohne Mohnmasse. Den Kuchen vollständig abkühlen lassen, bevor du ihn anschneidest oder glasierst, sonst zieht die Glasur ein und wird fleckig. Wer zwei Böden mit Powidła schichtet, macht daraus eine Hausvariante, keinen anderen Kuchen.",
    techniquePl:
      "Masę miodową tylko podgrzej, nigdy nie doprowadzaj do wrzenia, bo zrobi się gorzka, a dopiero potem połącz z suchymi składnikami w gęste, smarowne ciasto. Formę dobrze natłuść, piecz w średniej temperaturze i sprawdzaj środek patyczkiem. Za gorący piec daje ciemną skórkę na zewnątrz, a klejący środek w głębi, ta sama cierpliwość obowiązuje w [technice makowca](/pl/blog/makowiec-technika), tylko bez zwijania i bez masy makowej. Ciasto ostudź całkowicie przed krojeniem albo lukrowaniem, inaczej lukier wsiąka i robi się nierówny. Kto przekłada dwa blaty powidłami, robi wariant domowy, nie inne ciasto.",
    serveDe:
      "In Scheiben oder Würfeln, oft mit Puderzucker oder dünner Schokoglasur, zu Tee oder Kaffee servieren. An Wigilia folgt er nach Barszcz und Pierogi als ruhiger süßer Schluss, der Menürahmen bleibt der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan). Alternativ hält er sich als Alltagskuchen für die ganze Woche. Verwechsle ihn nicht mit Scheiben von [Makowiec](/de/rezepte/makowiec), dort dreht sich alles um die Mohnspirale, hier um Honig und Gewürz. Der Käsekuchen bleibt beim [Sernik](/de/rezepte/sernik).",
    servePl:
      "Podawaj w plastrach lub kostkach, często z cukrem pudrem lub cienkim lukrem, do herbaty lub kawy. Na Wigilię trafia po barszczu i pierogach jako spokojny słodki finał, rama menu zostaje przy [menu wigilijnym](/pl/blog/menu-wigilijne). Alternatywnie sprawdza się jako ciasto na cały tydzień. Nie myl go z plastrami [makowca](/pl/rezepte/makowiec): tam liczy się spirala makowa, tu miód i korzenie. Sernik zostaje osobnym przepisem pod [sernikiem](/pl/rezepte/sernik).",
    diasporaDe:
      "In deutschen Küchen rettet Piernik oft den Festtag, wenn niemand mehr Zeit oder Lust für eine Mohnrolle hat: ein Topf Honigmasse, eine Form, am Vortag gebacken. Gewürze aus dem Polenladen halten länger frisch als ein Impulskauf vom Aktionsregal. Kinder dürfen den Teig streichen und Zucker streuen, die heiße Ofenarbeit bleibt bei den Erwachsenen. Gute Standardgewürze und Honig aus dem Regal reichen völlig aus, es braucht keine teuren Spezialzutaten.",
    diasporaPl:
      "W niemieckich kuchniach piernik często ratuje święta, gdy nikt nie ma już czasu ani chęci na roladę makową: jeden garnek masy miodowej, jedna forma, pieczenie dzień wcześniej. Przyprawy ze sklepu polskiego trzymają świeżość dłużej niż impulsowy zakup z końcówki promocji. Dzieci mogą smarować ciasto i sypać cukier, gorący piec zostaje dla dorosłych. Dobre standardowe przyprawy i miód z półki w zupełności wystarczą, nie trzeba drogich specjalności.",
    mistakesDe:
      "Wer den Honig zu heiß kocht, riskiert einen bitteren Geschmack, und ein zu heißer Ofen führt schnell zu dunkler Kruste bei klebrigem Kern. Zu frühes Anschneiden lässt den Kuchen zerfallen, und alte, schwach riechende Gewürze machen den ganzen Kuchen flach im Aroma. Trage die Glasur außerdem nie auf einen noch warmen Kuchen auf, sonst zieht sie sofort ein und wird fleckig statt glänzend.",
    mistakesPl:
      "Zbyt gorące podgrzewanie miodu grozi goryczą, a za gorący piekarnik szybko daje ciemną skórkę przy klejącym środku. Za wczesne krojenie rozsypuje ciasto, a stare, słabo pachnące przyprawy spłaszczają cały smak. Lukru nigdy nie kładź na jeszcze ciepłe ciasto, bo natychmiast wsiąka i robi się nierówny, zamiast błyszczeć.",
    variantsDe:
      "Beliebt ist die Schichtvariante mit Powidła zwischen zwei Böden, dazu passt eine dünne Schokoglasur, oder man backt kleinere Muffins, die sich gut einfrieren lassen. Die Mohnrolle bleibt [Makowiec](/de/rezepte/makowiec), der Hefe-Gugelhupf [Babka](/de/rezepte/babka), der Käsekuchen [Sernik](/de/rezepte/sernik) und das Apfelkuchenblech [Szarlotka](/de/rezepte/szarlotka). Ofengefühl und Backtag-Logik vertieft der Guide [Makowiec-Technik](/de/blog/makowiec-technik), zum Anlass passt der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan), und typische Zutaten findest du im [Polenladen](/de/blog/polenladen-einkaufen).",
    variantsPl:
      "Popularny jest wariant warstwowy z powidłami między dwoma blatami, do tego pasuje cienki lukier czekoladowy, albo piecze się mniejsze babeczki, które dobrze się mrożą. Rolada makowa zostaje przy [makowcu](/pl/rezepte/makowiec), drożdżowa forma przy [babce](/pl/rezepte/babka), sernik przy [serniku](/pl/rezepte/sernik), a ciasto jabłkowe z blachy przy [szarlotce](/pl/rezepte/szarlotka). Więcej o cierpliwości pieca w artykule [technika makowca](/pl/blog/makowiec-technika), do okazji pasuje [menu wigilijne](/pl/blog/menu-wigilijne), a typowe specjalności znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
  },
  "recipe-zupa-pomidorowa": {
    dishDe: "Zupa pomidorowa",
    dishPl: "Zupa pomidorowa",
    vibeDe: "mild-tomatig, cremig mit Śmietana, alltagsleicht",
    vibePl: "łagodnie pomidorowa, kremowa ze śmietaną, codzienna",
    originDe:
      "Die Tomate kam im 16. Jahrhundert mit Königin Bona Sforza nach Polen, wurde aber jahrhundertelang nur als Zierpflanze angebaut, weil man sie für giftig hielt. Erst zu Beginn des 20. Jahrhunderts landete die frische Tomate auf polnischen Tellern, und Tomatensuppen-Rezepte finden sich in polnischen Kochbüchern bereits im 19. Jahrhundert. Ihren wahren Durchbruch erlebte Zupa pomidorowa aber in der Zeit der Volksrepublik, als preiswertes und lange haltbares Tomatenmark aus Fabriken wie Pudliszki zur festen Größe in Suppenküchen und Schulkantinen wurde. Traditionell baut man die Suppe auf einer hellen Hühner- oder Gemüsebrühe auf, oft direkt aus Resten von [Rosół](/de/rezepte/rosol), verfeinert mit Śmietana, Reis oder kleinen Nudeln. Das ist bewusst kein Festtags-[Barszcz](/de/rezepte/barszcz-czerwony) mit roter Bete, keine kiszone [Ogórkowa](/de/rezepte/ogorkowa) und kein klarer [Rosół](/de/rezepte/rosol) ohne Tomate. Im Überblick [Polnische Suppen](/de/blog/polnische-suppen) gehört Pomidorowa zur ruhigen Alltagslinie, während der Guide selbst der breite Überblick bleibt.",
    originPl:
      "Pomidor trafił do Polski w XVI wieku dzięki królowej Bonie Sforzy, ale przez wieki uprawiano go głównie jako rośliny ozdobne, bo uważano go za trujący. Świeży pomidor pojawił się na polskich talerzach dopiero na początku XX wieku, choć przepisy na zupę pomidorową można znaleźć w polskich książkach kucharskich już w XIX wieku. Prawdziwy przełom zupa pomidorowa przeżyła w czasach Polskiej Rzeczpospolitej Ludowej, gdy tani i trwały koncentrat pomidorowy z fabryk jak Pudliszki stał się podstawą stołówek i domowych obiadów. Tradycyjnie zupę buduje się na jasnym wywarze drobiowym lub warzywnym, często wprost z resztek [rosołu](/pl/rezepte/rosol), i dopełnia śmietaną, ryżem lub drobnym makaronem. To świadomie nie świąteczny [barszcz](/pl/rezepte/barszcz-czerwony) z burakiem, nie kiszona [ogórkowa](/pl/rezepte/ogorkowa) i nie klarowny [rosół](/pl/rezepte/rosol) bez pomidora. W przeglądzie [polskich zup](/pl/blog/polskie-zupy) pomidorowa należy do spokojnej linii codziennej, a sam przewodnik zostaje szerokim przeglądem.",
    shopDe:
      "Nimm passierte Tomaten oder eine gute Tomatensauce, Brühe (Huhn oder Gemüse), Zwiebel und Karotte sowie Reis oder kleine Nudeln, Śmietana oder Schmand und Dill. Passata und manchmal die etwas rundere Sauce findest du im [Polenladen](/de/blog/polenladen-einkaufen). Eine klare Brühe allein ist [Rosół](/de/rezepte/rosol), eine Dillsuppe ohne Tomate ist [Koperkowa](/de/rezepte/koperkowa).",
    shopPl:
      "Weź przecier lub dobrą passatę, wywar (drobiowy lub warzywny), cebulę i marchew oraz ryż lub drobny makaron, śmietanę i koperek. Passata, a czasem trochę bardziej okrągły sos, znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Sam klarowny wywar to [rosół](/pl/rezepte/rosol), zupa koperkowa bez pomidora to [koperkowa](/pl/rezepte/koperkowa).",
    techniqueDe:
      "Baue zuerst die Brühe auf oder nutze Reste von Rosół, rühre dann die Tomaten ein und lasse alles sanft köcheln, ohne dass die Suppe sprudelt. Koche Reis oder Nudeln nicht zu weich, sie ziehen in der Schüssel noch nach und werden sonst matschig. Temperiere die Śmietana, bevor du sie nach dem Herunternehmen vom Herd unterziehst, sonst flockt sie in der heißen Suppe. Säure und Süße gehören ans Ende: Eine Prise Zucker kann industrielle Tomaten runden, ersetzt aber keine gute Passata. Das Brühe-Gefühl kann an [Rosół-Technik](/de/blog/rosol-technik) erinnern, im Mittelpunkt bleibt hier aber die Pomidorowa.",
    techniquePl:
      "Najpierw zbuduj wywar albo skorzystaj z resztek rosołu, wmieszaj pomidory i gotuj łagodnie, bez gwałtownego wrzenia. Ryżu lub makaronu nie rozgotowuj za mocno, dociągną jeszcze w misce, inaczej zrobią się papkowate. Śmietanę ociepl, zanim wmieszasz ją po zdjęciu zupy z ognia, inaczej zważy się w gorącym płynie. Kwas i słodycz dodaj na końcu: szczypta cukru zaokrągli przemysłowe pomidory, ale nie zastąpi dobrej passaty. Wyczucie wywaru może przypominać [technikę rosołu](/pl/blog/jak-ugotowac-rosol), w centrum zostaje jednak pomidorowa.",
    serveDe:
      "Heiß mit Dill oder Petersilie servieren, oft mit extra Śmietana direkt am Tisch. Als leichter Hauptgang oder als Vorsuppe vor dem Fleisch passt sie in die Menükultur des [Sonntagsessens](/de/blog/sonntagsessen-polnisch). Halte auf dem Tisch klar: Der klare [Barszcz](/de/rezepte/barszcz-czerwony) gehört zu Wigilia und Uszka, die saure [Ogórkowa](/de/rezepte/ogorkowa) zu Kiszone, und die klare [Rosół](/de/rezepte/rosol)-Schale bleibt ohne Tomate. Reste gut gekühlt aufbewahren und beim Aufwärmen die Śmietana nicht erneut hart aufkochen.",
    servePl:
      "Podawaj gorącą z koperkiem lub pietruszką, często z dodatkową śmietaną na stole. Jako lekki główny posiłek albo przystawka przed mięsem wpisuje się w kulturę menu [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Na stole trzymaj jasność: klarowny [barszcz](/pl/rezepte/barszcz-czerwony) należy do Wigilii i uszek, kwaśna [ogórkowa](/pl/rezepte/ogorkowa) do kiszonek, a klarowna miska [rosołu](/pl/rezepte/rosol) zostaje bez pomidora. Resztki przechowuj dobrze schłodzone, a przy odgrzewaniu nie doprowadzaj śmietany ponownie do wrzenia.",
    diasporaDe:
      "In Deutschland ist Pomidorowa oft die Suppe, die Kinder von klein auf kennen und die Erwachsene aus Rosół-Resten retten, ein Topf reicht für zwei Mittage. Den Überblick ohne einen weiteren Guide gibt [Polnische Suppen](/de/blog/polnische-suppen). Wer regelmäßig Brühe auf Vorrat kocht, hat die Basis bereits fertig, Tomate sowie Reis oder Nudeln machen dann den eigentlichen Charakter aus. Es braucht keine bestimmte polnische Flaschenmarke, eine gute Passata reicht völlig.",
    diasporaPl:
      "W Niemczech pomidorowa bywa zupą, którą dzieci znają od małego, a dorośli ratują nią resztki rosołu, jeden garnek wystarcza na dwa obiady. Przegląd bez kolejnego przewodnika daje artykuł [polskie zupy](/pl/blog/polskie-zupy). Kto regularnie gotuje wywar na zapas, ma gotową bazę, a pomidor oraz ryż lub makaron budują właściwy charakter. Nie trzeba konkretnej polskiej marki w butelce, dobra passata w pełni wystarcza.",
    mistakesDe:
      "Am häufigsten wird Pomidorowa mit [Barszcz](/de/rezepte/barszcz-czerwony) oder mit [Ogórkowa](/de/rezepte/ogorkowa) verwechselt, obwohl beide einen ganz anderen Charakter haben. Śmietana kochend einzurühren lässt sie sofort flocken, und zu lange gekochter Reis wird schnell breiig statt bissfest. Wer zu wenig abschmeckt, verpasst genau die milde Säure, die den polnischen Charakter dieser Tomatensuppe ausmacht.",
    mistakesPl:
      "Najczęściej pomidorową myli się z [barszczem](/pl/rezepte/barszcz-czerwony) albo z [ogórkową](/pl/rezepte/ogorkowa), choć obie mają zupełnie inny charakter. Wlewanie śmietany do wrzątku powoduje jej natychmiastowe zważenie, a zbyt długo gotowany ryż robi się papkowaty, zamiast zostać jędrny. Kto za mało dopraw kwasu, przegapia właśnie tę łagodną kwaskowość, która nadaje tej zupie polski charakter.",
    variantsDe:
      "Manche Häuser kochen sie mit Reis, andere mit Nudeln oder mit mehr Gemüse, eine vegetarische Version gelingt gut auf klarem Gemüsefond. Den Überblick gibt [Polnische Suppen](/de/blog/polnische-suppen), mehr zur Śmietana der Beitrag [Śmietana und Schmand](/de/blog/smietana-schmand). Der klare Nachbar bleibt [Rosół](/de/rezepte/rosol) mitsamt der [Rosół-Technik](/de/blog/rosol-technik), der Festtags-Nachbar mit roter Bete ist [Barszcz](/de/rezepte/barszcz-czerwony), und die kiszone Linie vertritt [Ogórkowa](/de/rezepte/ogorkowa).",
    variantsPl:
      "Niektóre domy gotują ją z ryżem, inne z makaronem albo z większą ilością warzyw, wegetariańska wersja dobrze wychodzi na klarownym wywarze warzywnym. Przegląd daje [polskie zupy](/pl/blog/polskie-zupy), więcej o śmietanie artykuł [śmietana czy Schmand](/pl/blog/smietana-czy-schmand). Klarowny sąsiad zostaje przy [rosole](/pl/rezepte/rosol) razem z [techniką rosołu](/pl/blog/jak-ugotowac-rosol), świątecznym sąsiadem z burakiem jest [barszcz](/pl/rezepte/barszcz-czerwony), a linię kiszoną reprezentuje [ogórkowa](/pl/rezepte/ogorkowa).",
  },
};
