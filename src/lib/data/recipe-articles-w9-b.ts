/**
 * Wave 9 Paket B — FACTS for Sałatka jarzynowa + Botwinka.
 * Isolated export `W9_FACTS_B` — Integrator merges into recipe-articles.ts FACTS map.
 * Shape matches ArticleFacts in recipe-articles.ts.
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

export const W9_FACTS_B: Record<string, ArticleFacts> = {
 "recipe-salatka-jarzynowa": {
 dishDe: "Sałatka jarzynowa",
 dishPl: "Sałatka jarzynowa",
 vibeDe: "cremig, mild-säuerlich, festlich und sättigend-kalt",
 vibePl: "kremowa, łagodnie kwaśna, świąteczna i sycąco-zimna",
 originDe:
 "Sałatka jarzynowa ist der polnische Gemüsesalat mit Mayonnaise — gekochte Kartoffeln, Karotten, Sellerie, Erbsen, Ei, oft Apfel und saure Gurke — und bewusst kein [Mizeria](/de/rezepte/mizeria). Mizeria bleibt Gurke mit Śmietana und Dill; hier tragen Würfelgemüse und Mayo den Teller. An [Wielkanoc](/de/blog/wielkanoc-speiseplan) und vielen Sonntagen steht die Schüssel neben Wurst, Ei und Fleisch: sie ist Buffet- und Festbeilage, nicht Vorspeisen-Snack. Im Alltag der Diaspora ersetzt sie oft den „Kartoffelsalat“, bleibt aber klarer im polnischen Profil: kleinere Würfel, mehr Gemüseanteil, weniger Speck-Domäne. Menü-Kultur ohne Koch-Fokus: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 originPl:
 "Sałatka jarzynowa to polska sałatka warzywna z majonezem — ugotowane ziemniaki, marchew, seler, groszek, jajko, często jabłko i ogórek kiszony — świadomie nie [mizeria](/pl/rezepte/mizeria). Mizeria zostaje ogórkiem ze śmietaną i koperkiem; tu talerz niosą kostka warzyw i majonez. Na [Wielkanoc](/pl/blog/menu-wielkanocne) i wiele niedziel miska stoi obok wędlin, jaj i mięsa: to dodatek bufetowy i świąteczny, nie przystawka-przekąska. W diasporze bywa „zamiennikiem sałatki ziemniaczanej”, ale profil zostaje polski: drobniejsza kostka, więcej warzyw, mniej dominacji boczku. Kultura menu bez fokus gotowania: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 shopDe:
 "Kartoffeln, Karotten, Sellerie und Erbsen holst du im deutschen Supermarkt; saure Gurken (ogórki kiszone) und oft bessere Mayo im [Polenladen](/de/blog/polenladen-einkaufen). Apfel säuerlich, Eier frisch. Mayonnaise darf „gut“ sein — billige, zu süße Industrie-Mayo macht den Salat flach. Wer Alternativen zu Milch/Fettsäuren sucht, bleibt beim Einkauf; Śmietana-Lexikon gehört zu anderen Gerichten wie Mizeria, nicht als Hauptgericht hier hier. Festtagsmengen: lieber eine große Schüssel als drei halbvolle Varianten.",
 shopPl:
 "Ziemniaki, marchew, seler i groszek kupisz w niemieckim markecie; ogórki kiszone i często lepszy majonez w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Jabłko kwaśne, jajka świeże. Majonez ma być „dobry” — tani, zbyt słodki przemysłowy spłaszcza sałatkę. Alternatywy nabiałowe zostaw innym daniom jak mizeria — tu fokus to majonezowa kostka. Na święta: jedna duża miska zamiast trzech półpełnych wariantów.",
 techniqueDe:
 "Gemüse weich, aber nicht matschig garen; vollständig abkühlen, bevor Mayo dazu kommt — sonst wird die Emulsion weich und der Salat wässrig. Gleichmäßige kleine Würfel; Gurke und Apfel nicht zu früh, wenn der Buffet erst später startet. Lake oder Senf nur sparsam zum Abschmecken. Mindestens eine Stunde Kühlung bindet Aromen. Parallel zum Fleischgang: [Kotlet schabowy](/de/rezepte/kotlet-schabowy) braten, Salat kalt halten.",
 techniquePl:
 "Warzywa ugotuj miękko, ale nie na papkę; całkowicie ostudź przed majonezem — inaczej emulsja się rozluźni i sałatka zrobi się wodnista. Równa drobna kostka; ogórka i jabłka nie mieszaj za wcześnie, jeśli bufet startuje później. Zalewa lub musztarda tylko do doprawienia. Co najmniej godzina w lodówce spaja smaki. Równolegle do mięsa: smaż [kotleta schabowego](/pl/rezepte/kotlet-schabowy), sałatkę trzymaj zimną.",
 serveDe:
 "Kalt in einer Schüssel, oft mit Petersilie oben. Klassisch zu Schinken, Weißwurst, Ei und [Schabowy](/de/rezepte/kotlet-schabowy); an Ostern nach dem [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan). Schwester-Beilage mit anderem Fokus: [Mizeria](/de/rezepte/mizeria) für Gurke/Śmietana. Am Sonntag reicht oft eine kühle Beilage — siehe [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Reste abgedeckt im Kühlschrank; erneut abschmecken, ggf. Mayo nachlegen.",
 servePl:
 "Zimna w misce, często z pietruszką. Klasycznie do szynki, białej kiełbasy, jaj i [schabowego](/pl/rezepte/kotlet-schabowy); na Wielkanoc według [menu wielkanocnego](/pl/blog/menu-wielkanocne). Siostrzany dodatek z innym intentem: [mizeria](/pl/rezepte/mizeria) na ogórek/śmietanę. W niedzielę często wystarczy jeden chłodny dodatek — [obiad niedzielny](/pl/blog/obiad-niedzielny). Resztki szczelnie w lodówce; dopraw, ewentualnie dołóż majonezu.",
 diasporaDe:
 "In DE ist Sałatka jarzynowa oft das Gericht, das Nachbarn als „polnischen Kartoffelsalat“ erkennen — erkläre ruhig den Mayo-Gemüse-Charakter statt Mizeria. Vorbereiten am Vortag entlastet Oster- und Sonntagsmorgen. Einkauf zweigeteilt: Volumen im Supermarkt, Kiszone und Mayo-Qualität im Polenladen. Kein Affiliate-Zwang: gute Mayo aus dem Regal reicht.",
 diasporaPl:
 "W DE sałatka jarzynowa bywa daniem, które sąsiedzi rozpoznają jako „polską sałatkę ziemniaczaną” — spokojnie wyjaśnij charakter majonezowo-warzywny zamiast mizerii. Przygotowanie dzień wcześniej odciąża Wielkanoc i niedzielny poranek. Zakupy w dwóch sklepach: objętość w markecie, kiszone i jakość majonezu w sklepie polskim. Bez affiliate: dobry majonez z półki wystarczy.",
 mistakesDe:
 "Heißes Gemüse mit Mayo mischen; zu große Würfel; Mizeria hier als Hauptgericht verkaufen (Gurke/Śmietana als Hauptgericht hier); zu süße Mayo ohne Abschmecken; Salat stundenlang warm am Buffet. Zu viel Lake macht ihn scharf und wässrig.",
 mistakesPl:
 "Mieszanie gorących warzyw z majonezem; za duża kostka; mylenie z mizerii (ogórek/śmietana jako fokus); zbyt słodki majonez bez doprawienia; trzymanie sałatki godzinami w cieple na bufecie. Za dużo zalewy robi ją ostrą i wodnistą.",
 variantsDe:
 "Mit mehr Apfel fruchtiger, mit weniger Mayo fester, vegetarisch ohne Ei ehrlich benennen. Manche geben Mais — als Hausvariante, nicht als „das“ Rezept. Verwandte kühle Beilage: [Mizeria](/de/rezepte/mizeria). Gefüllte Eier (≠ dieser Mayo-Gemüsesalat): [Jajka faszerowane](/de/rezepte/jajka-faszerowane). Fest- und Sonntagskontext: [Wielkanoc](/de/blog/wielkanoc-speiseplan), [Sonntagsessen](/de/blog/sonntagsessen-polnisch), Einkauf [Polenladen](/de/blog/polenladen-einkaufen).",
 variantsPl:
 "Z większą ilością jabłka bardziej owocowa, z mniejszą majonezu bardziej zbita, bez jajka — uczciwie jako wariant. Kukurydza — wariant domu, nie „ten” przepis. Pokrewny chłodny dodatek: [mizeria](/pl/rezepte/mizeria). Faszerowane jajka (≠ ta majonezowa sałatka): [jajka faszerowane](/pl/rezepte/jajka-faszerowane). Kontekst świąt i niedzieli: [Wielkanoc](/pl/blog/menu-wielkanocne), [obiad niedzielny](/pl/blog/obiad-niedzielny), zakupy [sklep polski](/pl/blog/sklep-polski-zakupy).",
 },
 "recipe-botwinka": {
 dishDe: "Botwinka",
 dishPl: "Botwinka",
 vibeDe: "warm, kräuterig-rosa, leicht und frühlingshaft",
 vibePl: "ciepła, ziołowo-różowa, lekka i wiosenna",
 originDe:
 "Botwinka ist die warme Suppe aus junger Rote Bete **inklusive Blätter und Stiele** — kein klarer Festtags-[Barszcz](/de/rezepte/barszcz-czerwony) und kein kalter Sommer-[Chłodnik](/de/rezepte/chlodnik-litewski). Barszcz lebt von klarer, durchgeseihter Bete-Brühe; Chłodnik von Kefir/Joghurt und Kälte; Botwinka bleibt ein Topf mit Gemüse, Grün und oft Kartoffel, mild-säuerlich mit Śmietana. Im Überblick [Polnische Suppen](/de/blog/polnische-suppen) gehört sie zur Frühlingslinie neben Rosół-Alltag — hier bleibt das Rezept. Auch nicht [Ogórkowa](/de/rezepte/ogorkowa): dort trägt Kiszone-Gurke, hier junge Bete mit Botwina. Technik-Klarheit für den Nachbarn Barszcz: [Barszcz-Technik](/de/blog/barszcz-technik) — klarer Barszcz bleibt dort.",
 originPl:
 "Botwinka to ciepła zupa z młodych buraków **z liśćmi i ogonkami** — nie klarowny świąteczny [barszcz](/pl/rezepte/barszcz-czerwony) i nie zimny letni [chłodnik](/pl/rezepte/chlodnik-litewski). Barszcz żyje klarownym, przecedzonym wywarem; chłodnik kefirem/jogurtem i zimnem; botwinka zostaje garnkiem z warzywami, zielenią i często ziemniakiem, łagodnie kwaśna ze śmietaną. W przeglądzie [polskie zupy](/pl/blog/polskie-zupy) należy do linii wiosennej obok codziennego rosołu — tu zostaje przepis. Też nie [ogórkowa](/pl/rezepte/ogorkowa): tam niesie ogórek kiszony, tu młody burak z botwiną. Technika sąsiada barszczu: [jak ugotować barszcz](/pl/blog/jak-ugotowac-barszcz) — rozróżnienie, fokus klarownego czerwonego zostaje tam.",
 shopDe:
 "Frische Botwina (junge Bund-Rote-Bete mit Grün) im Frühjahr am Markt oder Bio-Regal; sonst ehrlich Notvariante kommunizieren. Leichte Brühe, Kartoffeln, Dill, Śmietana — Einkauf Milch: [Śmietana/Schmand](/de/blog/smietana-schmand). Polenladen für Dill und manchmal Bund-Bete. Kein Zakwas, keine Kiszone-Gurke als Kern — das wären Żurek bzw. Ogórkowa.",
 shopPl:
 "Świeża botwina (młode buraki z naćią) wiosną na targu lub w bio; inaczej uczciwie nazwij wariant awaryjny. Lekki wywar, ziemniaki, koperek, śmietana — nabiał: [śmietana/Schmand](/pl/blog/smietana-czy-schmand). Sklep polski po koperek i czasem pęczek buraków. Bez zakwasu i bez ogórka kiszonego jako rdzenia — to byłyby żurek albo ogórkowa.",
 techniqueDe:
 "Knollen und Stiele zuerst weich, Blätter spät — sonst olivgrün und matschig. Sanft köcheln, nicht sprudeln. Śmietana temperieren und nach dem Herunternehmen unterziehen. Säure am Ende; Salz gestaffelt. Wer Klarheit und Seihen übt, bleibt bei Barszcz-Technik — Botwinka darf einlagenreich und undurchsichtig sein.",
 techniquePl:
 "Najpierw bulwy i ogonki do miękkości, liście późno — inaczej oliwkowo i na papkę. Gotuj łagodnie, nie burząc. Śmietanę ocieplij i włącz po zdjęciu z ognia. Kwas na końcu; sól etapami. Kto ćwiczy klarowność i przecedzanie, zostaje przy technice barszczu — botwinka może być z dodatkami i nieprzejrzysta.",
 serveDe:
 "Heiß als leichte Hauptsuppe oder Frühjahrsstarter, mit Dill und optional Ei. Nach Ostern oder an milden Sonntagen statt schwerem Barszcz — Menüplanung bleibt bei [Wielkanoc](/de/blog/wielkanoc-speiseplan) bzw. Kultur [Sonntagsessen](/de/blog/sonntagsessen-polnisch); hier nur das Gericht. Auf dem Tisch klar halten: klarer [Barszcz](/de/rezepte/barszcz-czerwony) zu Wigilia/Uszka, kalter [Chłodnik](/de/rezepte/chlodnik-litewski) im Hochsommer.",
 servePl:
 "Gorąca jako lekka zupa główna lub wiosenny starter, z koperkiem i opcjonalnie jajkiem. Po Wielkanocy lub w łagodne niedziele zamiast ciężkiego barszczu — owner speiseplanu zostaje [Wielkanoc](/pl/blog/menu-wielkanocne) / [obiad niedzielny](/pl/blog/obiad-niedzielny); tu tylko danie. Na stole: klarowny [barszcz](/pl/rezepte/barszcz-czerwony) na Wigilię/uszka, zimny [chłodnik](/pl/rezepte/chlodnik-litewski) w upał.",
 diasporaDe:
 "In deutschen Küchen ist frische Botwina saisonal — wer sie findet, kocht Botwinka; wer nicht, wartet oder benennt die Ersatzgrün-Variante. Ein Topf für zwei warme Mittage. Überblick und Einordnung ohne neuen Überblick: [Polnische Suppen](/de/blog/polnische-suppen).",
 diasporaPl:
 "W niemieckich kuchniach świeża botwina jest sezonowa — kto znajdzie, gotuje botwinkę; kto nie, czeka albo nazywa wariant z zastępczą zielenią. Jeden garnek na dwa ciepłe obiady. Przegląd bez nowego filaru: [polskie zupy](/pl/blog/polskie-zupy).",
 mistakesDe:
 "Mit Barszcz verwechseln und alles abseihen; kalt wie Chłodnik servieren; Blätter von Anfang an mitkochen bis grau; Śmietana kochend einrühren; ",
 mistakesPl:
 "Mylenie z barszczem i przecedzanie wszystkiego; podawanie zimne jak chłodnik; gotowanie liści od początku do szarości; śmietana do wrzątku; mylenie z techniki barszczu lub ogórkowej.",
 variantsDe:
 "Mit mehr Kartoffel sättigender, mit weniger Śmietana leichter, vegetarisch auf Gemüsefond. Übersicht: [Polnische Suppen](/de/blog/polnische-suppen). Klarer Nachbar: [Barszcz](/de/rezepte/barszcz-czerwony) + [Barszcz-Technik](/de/blog/barszcz-technik). Kalt/Sommer: [Chłodnik](/de/rezepte/chlodnik-litewski). Kiszone-Gurken-Linie: [Ogórkowa](/de/rezepte/ogorkowa). Grün/Sauerampfer-Nachbar: [Szczawiowa](/de/rezepte/szczawiowa).",
 variantsPl:
 "Z większą ilością ziemniaka sycąca, z mniejszą śmietaną lżejsza, wegetariańska na warzywnym. Przegląd: [polskie zupy](/pl/blog/polskie-zupy). Klarowny sąsiad: [barszcz](/pl/rezepte/barszcz-czerwony) + [technika barszczu](/pl/blog/jak-ugotowac-barszcz). Zimno/lato: [chłodnik](/pl/rezepte/chlodnik-litewski). Linia ogórkowa: [ogórkowa](/pl/rezepte/ogorkowa). Sąsiad szczawiowy: [szczawiowa](/pl/rezepte/szczawiowa).",
 },
};
