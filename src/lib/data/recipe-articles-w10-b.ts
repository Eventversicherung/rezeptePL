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
      "Piernik ist der polnische Lebkuchen — Honig, Gewürz, oft weicher Kuchen aus der Form oder in Scheiben — und bewusst kein gerollter Mohnkuchen. [Makowiec](/de/rezepte/makowiec) bleibt Owner der Mohnrolle; [Sernik](/de/rezepte/sernik) der Käsekuchen-Linie; [Babka](/de/rezepte/babka) dem Hefegugelhupf. Piernik trägt Aroma über Gewürz und Honig, nicht über Hefe-Spirale oder Twaróg. Am [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan) steht er oft als süßer Schluss oder Mitbringsel neben Kompot und Mohnspeise — der Speiseplan bleibt Anlass-Owner, hier nur das Gericht. Ofengeduld und Backtag-Logik dürfen descriptiv an [Makowiec-Technik](/de/blog/makowiec-technik) anknüpfen, ohne Primary „polnisches Backen“ oder Hefeteig zu stehlen. In der Diaspora ist Piernik auch Alltagskaffee: ein Blech oder eine Form, die Tage hält und nach Gewürz duftet, ohne den 24. Dezember zu blockieren.",
    originPl:
      "Piernik to polski piernik miodowo-korzenny — często miękkie ciasto z formy lub w plastrach — świadomie nie rolada makowa. [Makowiec](/pl/rezepte/makowiec) zostaje ownerem rolady; [sernik](/pl/rezepte/sernik) linii sernika; [babka](/pl/rezepte/babka) ciasta drożdżowego z formy. Piernik niesie aromat korzeniem i miodem, nie spiralą drożdżową ani twarogiem. Przy [menu wigilijnym](/pl/blog/menu-wigilijne) bywa słodkim finałem lub poczęstunkiem obok kompotu i maku — artykuł menu zostaje ownerem okazji, tu tylko danie. Cierpliwość pieca i logika dnia pieczenia mogą opisowo nawiązać do [techniki makowca](/pl/blog/makowiec-technika), bez kradzieży primary „polskiego pieczenia” czy ciasta drożdżowego. W diasporze piernik bywa też codzienną kawą: jedna forma, która trzyma dni i pachnie korzeniem, bez blokowania 24 grudnia.",
    shopDe:
      "Honig, Mehl 405/550, Butter, Eier, Zucker, Backpulver, Gewürze (Zimt, Nelke, Ingwer, Muskat, Piment) oder fertige Piernik-Mischung, optional Kakao und dunkle Schokolade für Glasur. Frische Gewürze und oft die Mischung im [Polenladen](/de/blog/polenladen-einkaufen); Basis im Supermarkt. Wenn etwas fehlt: [Zutaten ersetzen](/de/blog/ersatzprodukte-de) — Funktion vor Label. Kein Mohn als Kernzutat: das wäre Makowiec. Keine Pflicht-Hefe: wer Hefeteig will, bleibt bei Makowiec oder Babka.",
    shopPl:
      "Miód, mąka 405/550, masło, jajka, cukier, proszek do pieczenia, przyprawy (cynamon, goździk, imbir, gałka, ziele) albo gotowa przyprawa do piernika, opcjonalnie kakao i czekolada na lukier. Świeże przyprawy i często mieszanka w [sklepie polskim](/pl/blog/sklep-polski-zakupy); baza w markecie. Gdy czegoś brakuje: [zamienniki składników](/pl/blog/zamienniki-skladnikow) — funkcja przed etykietą. Bez maku jako rdzenia: to byłby makowiec. Bez obowiązkowych drożdży: kto chce drożdże, zostaje przy makowcu lub babce.",
    techniqueDe:
      "Honigmasse nur erwärmen, nicht kochen; mit trockenen Zutaten zu einem zähen, streichfähigen Teig verbinden. Form gut fetten; mittlere Ofentemperatur; Stäbchenprobe im Kern. Zu heiß = dunkle Kruste, klebriger Kern — dieselbe Ofengeduld wie im [Makowiec-Technik](/de/blog/makowiec-technik)-Guide, aber ohne Rollen und ohne Mohnmasse. Abkühlen vor dem Schneiden; Glasur erst auf kühlem Kuchen. Wer schichtet (zwei Böden mit Powidła), nennt es Hausvariante, nicht „das“ Rezept als Primary.",
    techniquePl:
      "Masę miodową tylko podgrzać, nie gotować; połączyć z suchymi składnikami w gęste, smarowne ciasto. Formę dobrze natłuścić; średnia temperatura; patyczek w środku. Za gorąco = ciemna skórka, klejący środek — ta sama cierpliwość pieca co w [technice makowca](/pl/blog/makowiec-technika), ale bez zwijania i bez masy makowej. Studzić przed krojeniem; lukier dopiero na chłodne. Kto warstwy (dwa blaty z powidłami), nazywa wariantem domu, nie „tym” przepisem jako primary.",
    serveDe:
      "In Scheiben oder Würfeln, oft mit Puderzucker oder dünner Schokoglasur, zu Tee oder Kaffee. An Wigilia nach Barszcz und Pierogi als ruhiger süßer Schluss — Menürahmen bleibt [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan). Alternativ als Alltagskuchen für die Woche. Nicht mit [Makowiec](/de/rezepte/makowiec)-Scheiben verwechseln: dort Mohnspirale, hier Gewürz-Honig. Käsekuchen bleibt [Sernik](/de/rezepte/sernik).",
    servePl:
      "W plastrach lub kostkach, często z cukrem pudrem lub cienkim lukrem, do herbaty lub kawy. Na Wigilię po barszczu i pierogach jako spokojny słodki finał — rama menu zostaje przy [menu wigilijnym](/pl/blog/menu-wigilijne). Alternatywnie jako ciasto na tydzień. Nie mylić z plastrami [makowca](/pl/rezepte/makowiec): tam spirala makowa, tu miód i korzeń. Sernik zostaje przy [serniku](/pl/rezepte/sernik).",
    diasporaDe:
      "In deutschen Küchen rettet Piernik oft den Festtag, wenn niemand noch eine Mohnrolle führen will: ein Topf Honigmasse, eine Form, am Vortag backen. Gewürze aus dem Polenladen halten länger als Impulsbeutel vom Aktionsende. Kinder dürfen streichen und streuen — heiße Ofenarbeit bleibt bei Erwachsenen. Kein Affiliate-Zwang: gute Standardgewürze und Honig aus dem Regal reichen.",
    diasporaPl:
      "W niemieckich kuchniach piernik często ratuje święta, gdy nikt nie chce już prowadzić rolady makowej: jeden garnek masy miodowej, jedna forma, pieczenie dzień wcześniej. Przyprawy ze sklepu polskiego trzymają dłużej niż impuls z końca akcji. Dzieci mogą smarować i posypywać — gorący piec zostaje dla dorosłych. Bez affiliate: dobre standardowe przyprawy i miód z półki wystarczą.",
    mistakesDe:
      "Honig kochen bis bitter; zu heißer Ofen; Makowiec- oder Babka-Primary stehlen (Hefe/Mohn als Titel); zu früh schneiden; Gewürze alt und flach; Glasur auf heißem Kuchen. Speiseplan-Mengen hier duplizieren statt zu verlinken.",
    mistakesPl:
      "Gotowanie miodu do goryczy; zbyt gorący piec; kradzież primary makowca lub babki (drożdże/mak w tytule); zbyt wczesne krojenie; stare, płaskie przyprawy; lukier na gorące. Duplikować menu zamiast linkować.",
    variantsDe:
      "Mit Powidła zwischen zwei Böden, mit Schokoglasur, als kleinere Muffins für den Freezer der Nachbarn. Mohnrolle bleibt [Makowiec](/de/rezepte/makowiec); Form-Hefe [Babka](/de/rezepte/babka); Käsekuchen [Sernik](/de/rezepte/sernik); Apfelkuchen-Blech [Szarlotka](/de/rezepte/szarlotka) (≠ Piernik-Primary). Technik-Feeling: [Makowiec-Technik](/de/blog/makowiec-technik). Anlass: [Wigilia](/de/blog/wigilia-speiseplan). Einkauf: [Polenladen](/de/blog/polenladen-einkaufen).",
    variantsPl:
      "Z powidłami między dwoma blatami, z lukrem czekoladowym, jako mniejsze babeczki. Rolada makowa: [makowiec](/pl/rezepte/makowiec); drożdże z formy: [babka](/pl/rezepte/babka); sernik: [sernik](/pl/rezepte/sernik); ciasto jabłkowe z blachy: [szarlotka](/pl/rezepte/szarlotka) (≠ piernik-primary). Technika: [makowiec-technika](/pl/blog/makowiec-technika). Okazja: [menu wigilijne](/pl/blog/menu-wigilijne). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
  },
  "recipe-zupa-pomidorowa": {
    dishDe: "Zupa pomidorowa",
    dishPl: "Zupa pomidorowa",
    vibeDe: "mild-tomatig, cremig mit Śmietana, alltagsleicht",
    vibePl: "łagodnie pomidorowa, kremowa ze śmietaną, codzienna",
    originDe:
      "Zupa pomidorowa ist die polnische Tomatensuppe — typisch mit Reis oder kleinen Nudeln und einem Schuss Śmietana — und bewusst kein Festtags-[Barszcz](/de/rezepte/barszcz-czerwony), keine Kiszone-[Ogórkowa](/de/rezepte/ogorkowa) und kein klarer [Rosół](/de/rezepte/rosol) als Primary. Rosół liefert oft die Brühe-Basis; die Money Page hier bleibt der Tomaten-Teller. Im Überblick [Polnische Suppen](/de/blog/polnische-suppen) gehört Pomidorowa zur Alltagslinie neben Rosół-Resten — der Pillar bleibt Broad-Owner, hier nur Cook-Intent „Zupa pomidorowa“. SEO und Titel bleiben eng: polnische Tomatensuppe / Zupa pomidorowa, nicht generisches „beste Tomatensuppe“. Am [Sonntagsessen](/de/blog/sonntagsessen-polnisch) darf sie leichter Starter sein; am Werktag oft der ganze Mittagsteller.",
    originPl:
      "Zupa pomidorowa to polska zupa z pomidorów — typowo z ryżem lub drobnym makaronem i śmietaną — świadomie nie świąteczny [barszcz](/pl/rezepte/barszcz-czerwony), nie kiszona [ogórkowa](/pl/rezepte/ogorkowa) i nie klarowny [rosół](/pl/rezepte/rosol) jako primary. Rosół często daje bazę wywaru; money page tu zostaje talerzem pomidorowym. W przeglądzie [polskie zupy](/pl/blog/polskie-zupy) należy do linii codziennej obok resztek rosołu — filar zostaje broad-ownerem, tu tylko cook-intent „zupa pomidorowa”. SEO i tytuł zostają wąskie: zupa pomidorowa / polska zupa pomidorowa, nie generyczne „najlepsza zupa pomidorowa”. Przy [obiedzie niedzielnym](/pl/blog/obiad-niedzielny) bywa lekkim starterem; w tygodniu często całym obiadem.",
    shopDe:
      "Passierte Tomaten oder gute Tomatensauce, Brühe (Huhn/Gemüse), Zwiebel, Karotte, Reis oder kleine Nudeln, Śmietana/Schmand, Dill. Passata und manchmal bessere Sauce im [Polenladen](/de/blog/polenladen-einkaufen); Volumen im Supermarkt. Milchprodukt-Wahl: [Śmietana/Schmand](/de/blog/smietana-schmand). Kein Zakwas, keine Rote Bete, keine Kiszone-Gurke als Kern — das wären Żurek, Barszcz bzw. Ogórkowa.",
    shopPl:
      "Przecier lub dobra passata, wywar (drobiowy/warzywny), cebula, marchew, ryż lub drobny makaron, śmietana, koperek. Passata i czasem lepszy sos w [sklepie polskim](/pl/blog/sklep-polski-zakupy); objętość w markecie. Nabiał: [śmietana/Schmand](/pl/blog/smietana-czy-schmand). Bez zakwasu, buraka i ogórka kiszonego jako rdzenia — to byłyby żurek, barszcz albo ogórkowa.",
    techniqueDe:
      "Brühe erst aufbauen oder Reste von Rosół nutzen; Tomaten einrühren und sanft köcheln, nicht sprudeln. Reis/Nudeln nicht zu weich zerkochen — lieber al dente und in der Schüssel nachziehen. Śmietana temperieren und nach dem Herunternehmen unterziehen. Säure und Süße am Ende: eine Prise Zucker kann industrielle Tomaten runden, ersetzt aber keine gute Passata. Brühe-Feeling descriptiv: [Rosół-Technik](/de/blog/rosol-technik) — Primary bleibt Pomidorowa.",
    techniquePl:
      "Najpierw wywar lub resztki rosołu; wmeszać pomidory i gotować łagodnie, nie burząc. Ryżu/makaronu nie rozgotować — lepiej al dente i dociągnąć w misce. Śmietanę ocieplić i włączyć po zdjęciu z ognia. Kwas i słodycz na końcu: szczypta cukru może zaokrąglić przemysłowe pomidory, ale nie zastąpi dobrej passaty. Wyczucie wywaru opisowo: [technika rosołu](/pl/blog/jak-ugotowac-rosol) — primary zostaje pomidorowa.",
    serveDe:
      "Heiß mit Dill oder Petersilie, oft mit extra Śmietana am Tisch. Als leichter Hauptgang oder Vorsuppe vor Fleisch — Menükultur descriptiv unter [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Abgrenzung auf dem Tisch: klarer [Barszcz](/de/rezepte/barszcz-czerwony) zu Wigilia/Uszka; saure [Ogórkowa](/de/rezepte/ogorkowa) mit Kiszone; klare [Rosół](/de/rezepte/rosol)-Schale ohne Tomate. Reste gut gekühlt; beim Aufwärmen Śmietana nicht erneut hart kochen.",
    servePl:
      "Gorąca z koperkiem lub pietruszką, często z dodatkową śmietaną na stole. Jako lekki główny lub przystawka przed mięsem — kultura menu opisowo pod [obiadem niedzielnym](/pl/blog/obiad-niedzielny). Na stole: klarowny [barszcz](/pl/rezepte/barszcz-czerwony) na Wigilię/uszka; kwaśna [ogórkowa](/pl/rezepte/ogorkowa); klarowny [rosół](/pl/rezepte/rosol) bez pomidora. Resztki chłodno; przy odgrzewaniu nie gotować śmietany ponownie.",
    diasporaDe:
      "In DE ist Pomidorowa oft die Suppe, die Kinder kennen und Erwachsene aus Rosół-Resten retten. Ein Topf für zwei Mittage. Overview ohne neuen Pillar: [Polnische Suppen](/de/blog/polnische-suppen). Wer Brühe batcht, hat die Basis; Tomate und Reis/Nudeln machen den Charakter. Kein Zwang zu polnischer Flaschenmarke — gute Passata zählt.",
    diasporaPl:
      "W DE pomidorowa bywa zupą, którą znają dzieci i którą dorośli ratują z resztek rosołu. Jeden garnek na dwa obiady. Przegląd bez nowego filaru: [polskie zupy](/pl/blog/polskie-zupy). Kto batche wywar, ma bazę; pomidor i ryż/makaron robią charakter. Bez przymusu polskiej marki — liczy się dobra passata.",
    mistakesDe:
      "Mit Barszcz verwechseln; Ogórkowa-Intent stehlen; Śmietana kochend einrühren; generisches „beste Tomatensuppe“-SEO; Reis zu Matsch kochen; Overview-Primary von polnische-suppen klaueen. Zu wenig Abschmecken der Tomaten-Säure.",
    mistakesPl:
      "Mylenie z barszczem; kradzież intentu ogórkowej; śmietana do wrzątku; generyczne SEO „najlepsza zupa pomidorowa”; rozgotowany ryż; kradzież primary przeglądu polskie-zupy. Za mało doprawienia kwasu pomidorów.",
    variantsDe:
      "Mit Reis, mit Nudeln, mit mehr Gemüse, vegetarisch auf Gemüsefond. Übersicht: [Polnische Suppen](/de/blog/polnische-suppen). Śmietana: [Śmietana/Schmand](/de/blog/smietana-schmand). Klarer Nachbar: [Rosół](/de/rezepte/rosol) + [Rosół-Technik](/de/blog/rosol-technik). Festtags-Bete: [Barszcz](/de/rezepte/barszcz-czerwony). Kiszone-Linie: [Ogórkowa](/de/rezepte/ogorkowa).",
    variantsPl:
      "Z ryżem, z makaronem, z większą ilością warzyw, wegetariańsko na warzywnym. Przegląd: [polskie zupy](/pl/blog/polskie-zupy). Śmietana: [śmietana/Schmand](/pl/blog/smietana-czy-schmand). Klarowny sąsiad: [rosół](/pl/rezepte/rosol) + [technika rosołu](/pl/blog/jak-ugotowac-rosol). Świąteczny burak: [barszcz](/pl/rezepte/barszcz-czerwony). Linia kiszona: [ogórkowa](/pl/rezepte/ogorkowa).",
  },
};
