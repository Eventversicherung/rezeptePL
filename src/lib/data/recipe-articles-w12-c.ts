/**
 * Wave 12 Paket C — FACTS for mazurek + buraczki.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W12_FACTS_C } from "./recipe-articles-w12-c";
 * Object.assign(FACTS, …, W12_FACTS_C);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Mazurek orzechowy ≠ Babka (Hefegugelhupf) ≠ Sernik ≠ Makowiec ≠ Piernik
 * - Buraczki = warme Beilage ≠ Botwinka (Suppe) ≠ Barszcz ≠ Sałatka jarzynowa
 * - Wielkanoc Speiseplan bleibt Anlass-Owner; Mazurek nur Cook
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

export const W12_FACTS_C: Record<string, ArticleFacts> = {
 "recipe-mazurek": {
 dishDe: "Mazurek orzechowy",
 dishPl: "Mazurek orzechowy",
 vibeDe:
 "flach und knusprig-nussig, festlich und schnittfest, Ostern ohne hohen Turmkuchen",
 vibePl:
 "płaski i chrupiąco-orzechowy, świąteczny i do krojenia, Wielkanoc bez wysokiej babki z formy",
 originDe:
 "Der Name Mazurek geht auf „Mazur“ zurück, das alte Wort für einen Bewohner Masowiens, ein Mazurek war also ursprünglich schlicht ein „masowischer Kuchen“, genau wie der gleichnamige Tanz ein masowischer Tanz ist. Die ältesten polnischen Wörterbücher kannten dabei noch keine Verbindung zu Ostern: Bei Linde war ein Mazurek Anfang des 19. Jahrhunderts einfach ein „Kuchen aus Mandeln“. Seine Wurzeln reichen zurück zu orientalischer Mandelkonfekt-Kunst, die über osmanische Handelskontakte im 17. Jahrhundert nach Polen kam und in den Küchen der Adelshöfe verfeinert wurde, in Klosterküchen soll Ähnliches schon im Mittelalter gebacken worden sein. Fest mit Ostern verbunden wurde der Mazurek erst in Wörterbüchern nach dem Zweiten Weltkrieg. Genau diese Herkunft erklärt die charakteristische Form: ein dünner, knuspriger Boden mit einem reichen Belag obenauf, statt eines hohen, aufgehenden Kuchens. Das ist weder der hohe Hefegugelhupf [Babka](/de/rezepte/babka) noch der Quarkkuchen [Sernik](/de/rezepte/sernik) noch die Mohnrolle [Makowiec](/de/rezepte/makowiec) noch der Gewürzkuchen [Piernik](/de/rezepte/piernik).",
 originPl:
 "Nazwa mazurek pochodzi od słowa Mazur, czyli dawnego określenia mieszkańca Mazowsza, mazurek był więc pierwotnie po prostu „ciastem mazowieckim”, tak jak taniec o tej samej nazwie jest tańcem mazowieckim. Najstarsze polskie słowniki nie łączyły go jeszcze ze świętami: u Lindego na początku XIX wieku mazurek to po prostu „placek z migdałów”. Jego korzenie sięgają orientalnej sztuki wyrobu słodyczy migdałowych, która dotarła do Polski przez kontakty handlowe z Imperium Osmańskim w XVII wieku i została dopracowana na dworach szlacheckich, podobne wypieki miały powstawać już wcześniej w kuchniach klasztornych. Na stałe z Wielkanocą połączyły go dopiero słowniki powojenne. Właśnie to pochodzenie tłumaczy charakterystyczną formę: cienki, chrupiący spód z bogatym wierzchem, a nie wysokie, wyrastające ciasto. To ani wysoka drożdżowa [babka](/pl/rezepte/babka), ani [sernik](/pl/rezepte/sernik), ani rolada [makowiec](/pl/rezepte/makowiec), ani korzenny [piernik](/pl/rezepte/piernik).",
 shopDe:
 "Mehl, kalte Butter, Zucker und Ei bilden den Boden, gemischte Nüsse und Honig den Belag, beides findest du oft besonders frisch im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt eine bestimmte Nusssorte, hilft ein ehrlicher Ersatz laut den [Ersatzprodukten DE](/de/blog/ersatzprodukte-de) weiter. Hefe braucht dieses Rezept nicht, wer das Gefühl für Hefeteig sucht, wird eher bei der [Makowiec-Technik](/de/blog/makowiec-technik) fündig. Als Form reicht ein flaches Blech, eine Gugelhupfform wie bei der Babka ist hier nicht nötig.",
 shopPl:
 "Mąka, zimne masło, cukier i jajko budują spód, mieszanka orzechów i miód wierzch, oba te składniki znajdziesz często szczególnie świeże w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Jeśli brakuje konkretnej odmiany orzechów, pomogą uczciwe [zamienniki składników](/pl/blog/zamienniki-skladnikow). Drożdże nie są tu potrzebne, kto szuka wyczucia ciasta drożdżowego, znajdzie je raczej w [technice makowca](/pl/blog/makowiec-technika). Wystarczy płaska blacha, forma jak do babki nie jest tu potrzebna.",
 techniqueDe:
 "Der Mürbeteig sollte kurz und kalt verarbeitet werden, warmes Kneten macht ihn zäh statt kurz und mürbe. Nach dem dünnen Ausrollen wird der Boden vorgebacken, danach kommen die mit Butter und Honig gerösteten Nüsse sofort heiß darauf. Der zweite Backgang setzt den Belag fest, ohne den Boden zu verbrennen, deshalb sollte er beim ersten Mal nur leicht golden werden. Eine zu dicke Teigschicht wirkt schnell wie ein Keksboden ohne den typischen Mazurek-Charakter, während zu wenig Belag den Kuchen karg erscheinen lässt. Geschnitten wird erst nach vollständigem Abkühlen, heiß bricht der Belag sonst leicht.",
 techniquePl:
 "Kruche ciasto trzeba wyrabiać krótko i na zimno, na ciepło robi się gumowate zamiast krótkiego i kruchego. Po cienkim rozwałkowaniu spód podpieka się wcześniej, a potem od razu na gorąco kładzie orzechy związane z masłem i miodem. Drugie pieczenie utwardza wierzch, nie paląc przy tym spodu, dlatego za pierwszym razem wystarczy lekkie złocenie. Zbyt gruba warstwa ciasta szybko przypomina spód ciasteczkowy bez charakteru mazurka, a zbyt mało wierzchu sprawia, że placek wygląda ubogo. Kroi się dopiero po całkowitym ostudzeniu, na gorąco wierzch łatwo pęka.",
 serveDe:
 "In Rauten oder Rechtecken auf einer Platte, optional mit getrockneten Früchten dekoriert, am Ostertisch neben Żurek und bunten Eiern. Wer Höhe und Hefeteig sucht, findet das bei [Babka](/de/rezepte/babka), wer Quark bevorzugt, bei [Sernik](/de/rezepte/sernik), und wer die Mohnspirale möchte, bei [Makowiec](/de/rezepte/makowiec). Luftdicht verpackt bleibt der Belag mehrere Tage knusprig-nussig.",
 servePl:
 "W romby lub prostokąty na półmisku, opcjonalnie z suszonymi owocami, przy stole wielkanocnym obok żurku i kolorowych jajek. Kto szuka wysokości i drożdży, znajdzie to w [babce](/pl/rezepte/babka), kto woli twaróg, w [serniku](/pl/rezepte/sernik), a kto chce spiralę makową, w [makowcu](/pl/rezepte/makowiec). Szczelnie zapakowany wierzch zostaje chrupiący przez kilka dni.",
 diasporaDe:
 "In Deutschland wird oft am Samstag gebacken und am Sonntag nur noch angerichtet, das entlastet den Ostermorgen spürbar. Kinder dürfen Nüsse abzählen und die Rauten einteilen, der heiße Ofen bleibt bei den Erwachsenen. Ein Blech reicht für viele Gäste, Qualität schlägt hier drei verschiedene Kuchen. Der Einkauf lohnt sich früh im [Polenladen](/de/blog/polenladen-einkaufen), bevor die Nuss- und Honigregale vor Ostern leer sind.",
 diasporaPl:
 "W Niemczech często piecze się w sobotę, a w niedzielę tylko układa na stole, co odciąża poranek wielkanocny. Dzieci mogą liczyć orzechy i układać romby, gorący piekarnik zostaje przy dorosłych. Jedna blacha wystarcza dla wielu gości, jakość liczy się tu bardziej niż trzy różne wypieki. Zakupy warto zrobić wcześnie w [sklepie polskim](/pl/blog/sklep-polski-zakupy), zanim półki z orzechami i miodem opustoszeją przed świętami.",
 mistakesDe:
 "Ein zu dicker Boden erdrückt schnell den feinen Belag, und wer den Belag ohne Vorbacken des Bodens aufträgt, riskiert einen matschigen Kuchen. Mit dem hohen [Babka](/de/rezepte/babka) oder dem Quarkkuchen [Sernik](/de/rezepte/sernik) verwechselt man ihn schnell, dabei ist die flache Form gerade sein Markenzeichen. Wer den Kuchen noch heiß schneidet, bekommt einen brechenden Belag statt sauberer Rauten.",
 mistakesPl:
 "Zbyt gruby spód szybko przytłacza delikatny wierzch, a nałożenie go bez wcześniejszego podpieczenia spodu grozi rozmoknięciem całości. Łatwo pomylić go z wysoką [babką](/pl/rezepte/babka) lub [sernikiem](/pl/rezepte/sernik), choć to właśnie płaska forma jest jego znakiem rozpoznawczym. Krojenie na gorąco łamie wierzch zamiast dawać równe romby.",
 variantsDe:
 "Ein Kajmak-Belag statt Nüssen ist eine verbreitete Hausvariante, die sich ehrlich im Titel ankündigen lässt, ebenso eine Version nur mit Walnüssen oder mit getrockneten Aprikosen. Passende Nachbarn sind [Babka](/de/rezepte/babka), [Sernik](/de/rezepte/sernik), [Makowiec](/de/rezepte/makowiec) und [Piernik](/de/rezepte/piernik). Zum Anlass passt der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan), und Einkaufshilfen liefern der [Polenladen](/de/blog/polenladen-einkaufen) und die [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
 variantsPl:
 "Wierzch kajmakowy zamiast orzechów to popularny zwyczaj domowy, który warto uczciwie zapowiedzieć w tytule, podobnie jak wersja tylko z orzechami włoskimi lub z suszonymi morelami. Pasującymi sąsiadami są [babka](/pl/rezepte/babka), [sernik](/pl/rezepte/sernik), [makowiec](/pl/rezepte/makowiec) i [piernik](/pl/rezepte/piernik). Do okazji pasuje [menu wielkanocne](/pl/blog/menu-wielkanocne), a zakupy ułatwią [sklep polski](/pl/blog/sklep-polski-zakupy) i [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
 },

 "recipe-buraczki": {
 dishDe: "Buraczki",
 dishPl: "Buraczki",
 vibeDe: "erdig-süß, säuerlich-scharf, warm auf dem Teller — Beilage, keine Suppe",
 vibePl: "ziemisto-słodki, kwaśno-ostry, ciepły na talerzu — dodatek, nie zupa",
 originDe:
 "Buraczki sind das Rezept für die warme Rote-Bete-Beilage der polnischen Sonntags- und Festküche: gekocht, geraspelt oder in Streifen, mit Zwiebel, oft Apfel und Meerrettich — heiß oder lauwarm neben Fleisch. Das ist weder die junge-Bete-Suppe [Botwinka](/de/rezepte/botwinka) noch die klare oder cremige Bete-Suppe [Barszcz czerwony](/de/rezepte/barszcz-czerwony) noch der kalte Mayo-Festsalat [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Menüwahl und Rhythmus bleiben im [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch); hier liegt der enge Beilagen-Fokus. Klassischer Nachbar auf dem Teller: [Kotlet schabowy](/de/rezepte/kotlet-schabowy).",
 originPl:
 "Buraczki to przepis na ciepły dodatek z buraków w polskiej kuchni niedzielnej i świątecznej — ugotowane, tarte lub w paski, z cebulą, często jabłkiem i chrzanem — gorące lub letnie obok mięsa. To ani zupa z młodych buraków [botwinka](/pl/rezepte/botwinka), ani [barszcz czerwony](/pl/rezepte/barszcz-czerwony), ani zimna majonezowa [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Wybór menu zostaje w [obiadzie niedzielnym](/pl/blog/obiad-niedzielny); tu wąski fokus dodatku. Klasyczny sąsiad: [kotlet schabowy](/pl/rezepte/kotlet-schabowy).",
 shopDe:
 "Rote Bete roh oder vorgekocht, Zwiebel, saurer Apfel, Meerrettich aus Glas oder frisch — oft im [Polenladen](/de/blog/polenladen-einkaufen). Butter/Öl, Salz, Pfeffer, Prise Zucker. Śmietana separat reichen: Orientierung [Śmietana/Schmand](/de/blog/smietana-schmand). Wer Bete-Suppe sucht, bleibt bei [Botwinka](/de/rezepte/botwinka) oder [Barszcz](/de/rezepte/barszcz-czerwony) — anderer Charakter, andere URL.",
 shopPl:
 "Buraki surowe lub gotowane, cebula, kwaśne jabłko, chrzan ze słoika lub świeży — często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Masło/olej, sól, pieprz, szczypta cukru. Śmietanę osobno: [śmietana/schmand](/pl/blog/smietana-czy-schmand). Kto szuka zupy z buraków: [botwinka](/pl/rezepte/botwinka) lub [barszcz](/pl/rezepte/barszcz-czerwony) — inny charakter, inne da",
 techniqueDe:
 "Bete weich kochen (oder vorgekocht nutzen), schälen, raspeln — Handschuhe gegen Farbe. Zwiebel glasig, Bete warm ziehen mit wenig Flüssigkeit; Apfel und Meerrettich erst gegen Ende, sonst verkocht die Schärfe. Zu viel Wasser macht eine Mini-Suppe und rückt zu nah an Botwinka oder Barszcz. Abschmecken: Säure, Salz, Prise Süße. Heiß servieren, nicht stundenlang offen warmhalten.",
 techniquePl:
 "Buraki ugotować (lub gotowane), obrać, zetrzeć — rękawiczki na kolor. Cebulę zeszklić, buraki duś z małą ilością płynu; jabłko i chrzan pod koniec, by nie stracić ostrości. Za dużo wody = mini-zupa i zbyt mocno przypomina botwinkę lub barszcz. Dopraw: kwas, sól, szczypta słodyczy. Podawaj gorące, nie trzymaj godzinami na ciepło.",
 serveDe:
 "Heiß neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy), Kartoffeln oder Kasza; Śmietana in Schälchen. Menüplatz: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch). Panier-Technik [Panieren](/de/blog/panieren-schabowy). Ostern optional als Beilage, Menürahmen: [Wielkanoc](/de/blog/wielkanoc-speiseplan). Nicht mit [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) mischen — anderer Charakter.",
 servePl:
 "Gorące obok [schabowego](/pl/rezepte/kotlet-schabowy), ziemniaków lub kaszy; śmietana w miseczce. Miejsce w menu: [obiad niedzielny](/pl/blog/obiad-niedzielny). Panierka [panierowanie](/pl/blog/panierowanie-kotlet). Na Wielkanoc opcjonalnie jako dodatek, przy menu: [menu wielkanocne](/pl/blog/menu-wielkanocne). Nie mieszać z [sałatką jarzynową](/pl/rezepte/salatka-jarzynowa).",
 diasporaDe:
 "Vorgekochte Bete spart Zeit nach Schichtarbeit — ehrlich benennen. Farbe fleckt: Brett und Hände schützen. Kinder dürfen Apfel raspeln; Meerrettich-Schärfe für Erwachsene dosieren. Reste im Kühlschrank, am Folgetag kurz erhitzen. Sonntagsplan bleibt beim Guide: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 diasporaPl:
 "Gotowane buraki oszczędzają czas po zmianie — nazwać uczciwie. Kolor brudzi: deska i ręce. Dzieci zetrą jabłko; ostrość chrzanu u dorosłych. Resztki w lodówce, nazajutrz krótko podgrzać. Plan niedzieli zostaje przy przewodniku: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 mistakesDe:
 "Zu viel Flüssigkeit (wird zur Suppe und wirkt wie [Botwinka](/de/rezepte/botwinka)/[Barszcz](/de/rezepte/barszcz-czerwony)). Mit [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) verwechseln. Meerrettich von Anfang an verkochen. Roh essen wollen ohne Garung. Den Sonntagsplan hier nicht ersetzen — dafür gibt es [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 mistakesPl:
 "Za dużo płynu (robi się zupa — mylenie z [botwinką](/pl/rezepte/botwinka)/[barszczem](/pl/rezepte/barszcz-czerwony)). Mylenie z [sałatką jarzynową](/pl/rezepte/salatka-jarzynowa). Chrzan od początku wygotowany. Jedzenie na surowo bez ugotowania. Nie mieszać ilości i kroków z sąsiednim przepisem.",
 variantsDe:
 "Ohne Apfel nur Meerrettich; mit etwas Butter am Ende; milder für Kinder. Kalter Relish Bete+Meerrettich (≠ diese warme Beilage): [Ćwikła](/de/rezepte/cwikla). Passende Nachbarn sind [Schabowy](/de/rezepte/kotlet-schabowy), [Botwinka](/de/rezepte/botwinka) (Suppe ≠ Beilage), [Barszcz](/de/rezepte/barszcz-czerwony), [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Guides: [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Panieren](/de/blog/panieren-schabowy), [Śmietana](/de/blog/smietana-schmand).",
 variantsPl:
 "Bez jabłka tylko chrzan; z odrobiną masła na końcu; łagodniej dla dzieci. Zimny relish burak+chrzan (≠ ten ciepły dodatek): [ćwikła](/pl/rezepte/cwikla). Pasujący sąsiedzi to [schabowy](/pl/rezepte/kotlet-schabowy), [botwinka](/pl/rezepte/botwinka) (zupa ≠ dodatek), [barszcz](/pl/rezepte/barszcz-czerwony), [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Przewodniki: [obiad niedzielny](/pl/blog/obiad-niedzielny), [panierowanie](/pl/blog/panierowanie-kotlet), [śmietana](/pl/blog/smietana-czy-schmand).",
 },
};
