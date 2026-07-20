/**
 * Wave 8 Paket B — FACTS for Ogórkowa + Kapuśniak.
 * Isolated export `W8_FACTS_B` — Integrator merges into recipe-articles.ts FACTS map.
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

export const W8_FACTS_B: Record<string, ArticleFacts> = {
  "recipe-ogorkowa": {
    dishDe: "Zupa ogórkowa",
    dishPl: "Zupa ogórkowa",
    vibeDe: "säuerlich-frisch, cremig, alltagstauglich warm",
    vibePl: "kwaśno-świeża, kremowa, ciepła na co dzień",
    originDe:
      "Ogórkowa ist die warme Saure-Gurken-Suppe der polnischen Hausküche: Säure kommt von fermentierten Gurken und ihrer Lake, nicht von Roggen-Zakwas. Wer [Żurek](/de/rezepte/zurek) kennt, merkt den Unterschied sofort — hier tragen Kartoffeln und Dill, nicht biała kiełbasa und Majoran. Im Überblick ordnet sie der Guide [Polnische Suppen](/de/blog/polnische-suppen) neben Rosół, Barszcz und Kapuśniak ein. Sie ist auch kein kalter Sommerbecher wie [Chłodnik](/de/rezepte/chlodnik-litewski) und kein rubinroter [Barszcz](/de/rezepte/barszcz-czerwony). Diaspora-Alltag: ein Topf, der Reste vom Gurkenglas rettet und am nächsten Tag oft runder schmeckt.",
    originPl:
      "Ogórkowa to ciepła zupa z kiszonych ogórków w polskiej kuchni domowej: kwas pochodzi z fermentowanych ogórków i zalewy, nie z żytniego zakwasu. Kto zna [żurek](/pl/rezepte/zurek), czuje różnicę od razu — tu grają ziemniaki i koperek, nie biała kiełbasa i majeranek. W przeglądzie ustawia ją przewodnik [polskie zupy](/pl/blog/polskie-zupy) obok rosołu, barszczu i kapuśniaka. To też nie zimny letni kubek jak [chłodnik](/pl/rezepte/chlodnik-litewski) ani rubinowy [barszcz](/pl/rezepte/barszcz-czerwony). Codzienność diasporowa: jeden garnek, który ratuje resztki ze słoika i nazajutrz często smakuje lepiej.",
    shopDe:
      "Ogórki kiszone und Lake holst du zuverlässig im [Polenladen](/de/blog/polenladen-einkaufen); Supermarkt-Salzgurken nur, wenn klar fermentiert und nicht süß-sauer industriell. Kartoffeln, Karotte, Dill und Schmand liegen im deutschen Markt. Wer selbst fermentiert, folgt dem [Kiszenie-Guide](/de/blog/kiszenie-guide) — Essiggurken ergeben ein anderes Gericht. Brühe darf Hausfond sein; Technik-Feeling liefert [Rosół-Technik](/de/blog/rosol-technik), ohne dass Ogórkowa klare Festtagsbrühe braucht. Śmietana temperieren, damit sie nicht flockt.",
    shopPl:
      "Ogórki kiszone i zalewę najpewniej kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy); supermarketowe tylko gdy naprawdę kiszone, nie słodko-kwaśne octowe. Ziemniaki, marchew, koperek i śmietana są w niemieckim markecie. Kto kisi sam, idzie za [kiszeniem w domu](/pl/blog/kiszenie-w-domu) — ogórki z octu to inne danie. Wywar może być domowy; wyczucie daje [technika rosołu](/pl/blog/jak-ugotowac-rosol), bez wymogu klarownego wywaru świątecznego. Śmietanę ocieplić, żeby nie zwarzyła.",
    techniqueDe:
      "Zuerst Gemüse in der Brühe weich garen, dann Gurken und Lake — sonst zerkochen die Kartoffeln, während die Säure noch fehlt. Lake dosieren: lieber nachlegen als sofort zu sauer. Śmietana erst nach dem Herunternehmen vom Herd unterziehen. Sanft köcheln, nicht sprudeln. Dill frisch zum Schluss.",
    techniquePl:
      "Najpierw ugotuj warzywa w wywarze, potem ogórki i zalewę — inaczej ziemniaki się rozpadną, zanim będzie kwas. Zalewę dawkuje: lepiej dodać niż od razu przesolić kwasem. Śmietanę włącz po zdjęciu z ognia. Gotuj łagodnie, nie burząc. Koperek świeży na końcu.",
    serveDe:
      "Heiß als Hauptsuppe mit Brot — sättigend genug für einen Wochentag. Optional Speckwürfel oder ein Ei, aber der Kern bleibt Gurke und Dill. Neben [Kapuśniak](/de/rezepte/kapusniak) die zweite große Kiszone-Suppe im Silo; zu Festen eher [Barszcz](/de/rezepte/barszcz-czerwony) oder Żurek wählen. Reste kühlen, am nächsten Tag vorsichtig erwärmen und Śmietana erneut prüfen.",
    servePl:
      "Gorąca jako zupa główna z chlebem — wystarczająco sycąca na dzień powszedni. Opcjonalnie boczek lub jajko, ale rdzeń to ogórek i koperek. Obok [kapuśniaka](/pl/rezepte/kapusniak) druga duża zupa z kiszonek w silosie; na święta raczej [barszcz](/pl/rezepte/barszcz-czerwony) albo żurek. Resztki chłodzić, nazajutrz ogrzewać ostrożnie i sprawdzić śmietanę.",
    diasporaDe:
      "In deutschen Küchen rettet Ogórkowa das angebrochene Gurkenglas nach dem Grillabend. Ein Topf für zwei Mittage — ideal zwischen Schicht und Kita. Wer Fermentieren lernt, verbindet Einkauf und Topf über [Kiszenie](/de/blog/kiszenie-guide) und den Suppen-Überblick.",
    diasporaPl:
      "W niemieckich kuchniach ogórkowa ratuje niedojedzony słoik po grillu. Jeden garnek na dwa obiady — idealnie między zmianą a przedszkolem. Kto uczy się kiszenia, łączy zakupy i garnek przez [kiszenie](/pl/blog/kiszenie-w-domu) i przegląd zup.",
    mistakesDe:
      "Essiggurken statt Kiszone; Lake zu früh und zu viel; Śmietana kochend einrühren; mit Żurek verwechseln und Zakwas suchen. Zu wenig Kartoffel macht die Suppe dünn und aggressiv sauer.",
    mistakesPl:
      "Ogórki z octu zamiast kiszonych; za wcześnie i za dużo zalewy; śmietana wrzucana do wrzątku; mylenie z żurkiem i szukanie zakwasu. Za mało ziemniaka robi zupę rzadką i ostro kwaśną.",
    variantsDe:
      "Mit geräuchertem Fleisch kräftiger, vegetarisch nur mit Gemüsefond, oder etwas dicker püriert. Schwester-Säure aus Kapusta: [Kapuśniak](/de/rezepte/kapusniak). Wer die Suppenfamilie sortieren will: [Polnische Suppen](/de/blog/polnische-suppen) und Einkauf im [Polenladen](/de/blog/polenladen-einkaufen). Kalte Alternative im Sommer bleibt Chłodnik — anderer Intent. Frühlings-Bete mit Blättern (nicht Gurkensäure): [Botwinka](/de/rezepte/botwinka).",
    variantsPl:
      "Z wędzonką mocniejsza, wegetariańska tylko na warzywnym, albo gęstsza po zblendowaniu. Siostrzany kwas z kapusty: [kapuśniak](/pl/rezepte/kapusniak). Kto chce uporządkować rodzinę zup: [polskie zupy](/pl/blog/polskie-zupy) i zakupy w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Zimna alternatywa latem to chłodnik — inny intent. Wiosenne buraki z botwiną (nie kwas ogórkowy): [botwinka](/pl/rezepte/botwinka).",
  },
  "recipe-kapusniak": {
    dishDe: "Kapuśniak",
    dishPl: "Kapuśniak",
    vibeDe: "säuerlich-rauchig, sättigend, winterfest",
    vibePl: "kwaśno-wędzony, sycący, zimowy",
    originDe:
      "Kapuśniak ist Sauerkrautsuppe — löffelbar, mit Brühe und Kartoffeln — und bewusst kein [Bigos](/de/rezepte/bigos), der als Schmorgericht ohne Suppencharakter bleibt. Die Säure kommt von Kapusta kiszona, nicht von Zakwas wie bei [Żurek](/de/rezepte/zurek) und nicht von Rote Bete wie bei [Barszcz](/de/rezepte/barszcz-czerwony). Im Guide [Polnische Suppen](/de/blog/polnische-suppen) steht Kapuśniak schon als sättigende Linie neben Krupnik; hier wird sie Money Page. Schwester mit Gurkensäure: [Ogórkowa](/de/rezepte/ogorkowa). Nicht kalt und rosa wie Chłodnik.",
    originPl:
      "Kapuśniak to zupa z kapusty kiszonej — na łyżkę, z wywarem i ziemniakami — świadomie nie [bigos](/pl/rezepte/bigos), który zostaje daniem duszonym bez charakteru zupy. Kwas pochodzi z kapusty kiszonej, nie z zakwasu jak w [żurku](/pl/rezepte/zurek) i nie z buraków jak w [barszczu](/pl/rezepte/barszcz-czerwony). W przewodniku [polskie zupy](/pl/blog/polskie-zupy) kapuśniak już stoi jako linia sycąca obok krupniku; tu staje się money page. Siostra z kwasem ogórkowym: [ogórkowa](/pl/rezepte/ogorkowa). Nie zimny i różowy jak chłodnik.",
    shopDe:
      "Gute Kapusta kiszona und geräucherte Wurst im [Polenladen](/de/blog/polenladen-einkaufen); Qualität und Schnitt erklärt [Kiełbasa-Arten](/de/blog/kielbasa-arten). Majoran frisch genug — siehe [Majeranek](/de/blog/majeranek). Wer selbst säuert: [Kiszenie-Guide](/de/blog/kiszenie-guide). Kartoffeln und Zwiebel aus dem Supermarkt. Brühe mit Körper; nicht nur Wasser mit Würfel.",
    shopPl:
      "Dobra kapusta kiszona i wędzona kiełbasa w [sklepie polskim](/pl/blog/sklep-polski-zakupy); jakość i rodzaj w [rodzajach kiełbasy](/pl/blog/rodzaje-kielbasy). Majeranek świeży w aromacie — [majeranek](/pl/blog/majeranek-leksykon). Kto kisi sam: [kiszenie w domu](/pl/blog/kiszenie-w-domu). Ziemniaki i cebula z supermarketu. Wywar z ciałem; nie sama woda z kostką.",
    techniqueDe:
      "Rauchware zuerst anbraten für Tiefe, dann Brühe und Kartoffeln, Kraut nicht zu früh zu lange kochen wenn es schon sehr weich ist. Kraut ausdrücken, damit die Suppe nicht wässrig-salzig kippt — Lake sparsam nachjustieren. Majoran gegen Ende. Sanft köcheln; Bigos-Logik (stundenlanges Eindicken) gehört nicht hierher.",
    techniquePl:
      "Najpierw podsmaż wędzonkę dla głębi, potem wywar i ziemniaki; kapusty nie gotuj zbędnie długo, jeśli już jest miękka. Odciśnij kapustę, żeby zupa nie poszła w wodnisto-słony — zalewę koryguj ostrożnie. Majeranek pod koniec. Gotuj łagodnie; logika bigosu (wielogodzinne gęstnienie) tu nie pasuje.",
    serveDe:
      "Als Hauptsuppe mit kräftigem Brot. Optional Schmand. Menülogik: nach Kapuśniak eher leichter Nachtisch oder gar nichts Schweres. Abgrenzung: [Ogórkowa](/de/rezepte/ogorkowa) für Gurkensäure, [Żurek](/de/rezepte/zurek) für Zakwas-Festtag, Bigos wenn du Schmoren willst statt Löffeln.",
    servePl:
      "Jako zupa główna z mocnym chlebem. Opcjonalnie śmietana. Logika menu: po kapuśniaku raczej lekki deser albo nic ciężkiego. Rozróżnienie: [ogórkowa](/pl/rezepte/ogorkowa) na kwas ogórkowy, [żurek](/pl/rezepte/zurek) na zakwas świąteczny, bigos gdy chcesz dusić zamiast jeść łyżką.",
    diasporaDe:
      "Kapuśniak ist Freezer-freundlich ohne Milchprodukte im Topf — portionieren, beschriften, auftauen und frisch abschmecken. In DE oft das Gericht, das deutsche Nachbarn als „Sauerkrautsuppe“ verstehen, ohne Bigos-Erklärung. Ferment-Vorrat aus dem Kiszenie-Glas wird so Wochenessen.",
    diasporaPl:
      "Kapuśniak lubi zamrażarkę bez nabiału w garnku — porcjuj, etykietuj, rozmrażaj i dopraw świeżo. W DE często danie, które sąsiedzi rozumieją jako „zupę z kapusty”, bez wykładu o bigosie. Zapas z kiszenia staje się obiadem tygodnia.",
    mistakesDe:
      "Zu nasses Kraut ohne Ausdrücken; zu wenig Raucharoma und dann Überwürzen; Kapuśniak wie Bigos stundenlang einkochen bis Paste; Primary von Bigos oder Żurek stehlen. Zu starkes Kochen macht Kartoffeln matschig und die Suppe trüb-aggressiv.",
    mistakesPl:
      "Za mokra kapusta bez odciśnięcia; za mało dymu i potem przesada z przyprawami; gotowanie jak bigos do pasty; kradzież primary bigosu lub żurku. Zbyt gwałtowne gotowanie rozgotowuje ziemniaki i robi zupę mętno-ostrą.",
    variantsDe:
      "Mit Räucherrippchen, vegetarisch mit geräuchertem Tofu/Paprika-Hinweis ehrlich benennen, oder mit mehr Kartoffel als Winterteller. Übersicht und Einordnung: [Polnische Suppen](/de/blog/polnische-suppen). Kraut-Kontext: [Kiszenie](/de/blog/kiszenie-guide). Wurstwahl: [Kiełbasa-Arten](/de/blog/kielbasa-arten). Nicht mit Bigos-Varianten verwechseln.",
    variantsPl:
      "Z żeberkami wędzonymi, wegetariańsko z uczciwym dopiskiem o dymie, albo z większą ilością ziemniaka jako zimowy talerz. Przegląd: [polskie zupy](/pl/blog/polskie-zupy). Kontekst kapusty: [kiszenie](/pl/blog/kiszenie-w-domu). Wybór kiełbasy: [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy). Nie mylić z wariantami bigosu.",
  },
};
