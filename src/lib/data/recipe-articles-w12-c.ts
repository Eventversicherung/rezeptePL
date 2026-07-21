/**
 * Wave 12 Paket C — FACTS for mazurek + buraczki.
 *
 * Agent E merge into recipe-articles.ts:
 *   import { W12_FACTS_C } from "./recipe-articles-w12-c";
 *   Object.assign(FACTS, …, W12_FACTS_C);
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
    vibeDe: "flach, knusprig-nussig, festlich und schnittfest — Ostern ohne Turmkuchen",
    vibePl: "płaski, chrupiąco-orzechowy, świąteczny i do krojenia — Wielkanoc bez babki z formy",
    originDe:
      "Mazurek ist das Rezept für den flachen polnischen Osterkuchen: dünner Mürbeteigboden, darauf eine dichte Masse oder ein Belag — hier die Hausvariante orzechowy mit Nüssen und Honig/Zucker. Das ist weder der hohe Hefegugelhupf [Babka](/de/rezepte/babka) noch der Quarkkuchen [Sernik](/de/rezepte/sernik) noch die Mohnrolle [Makowiec](/de/rezepte/makowiec) noch der Gewürz-Lebkuchen [Piernik](/de/rezepte/piernik). Menürahmen und Timeline bleiben im [Wielkanoc Speiseplan](/de/blog/wielkanoc-speiseplan) — dort Menü-Artikel, hier der enge Rezept-Fokus. In der Diaspora oft der Kuchen, den man am Vortag backt und in Rauten schneidet: wenig Höhe, viel Belag, klarer Schnitt.",
    originPl:
      "Mazurek to przepis: płaski polski placek wielkanocny — cienki kruchy spód i gęsty wierzch; tu wersja orzechowa z orzechami i miodem/cukrem. To ani wysoka drożdżowa [babka](/pl/rezepte/babka), ani [sernik](/pl/rezepte/sernik), ani rolada [makowiec](/pl/rezepte/makowiec), ani korzenny [piernik](/pl/rezepte/piernik). Ramę menu zostawiamy w [menu wielkanocnym](/pl/blog/menu-wielkanocne) — tam owner okazji, tu wąski fokus przepisu. W diasporze często wypiek z dnia wcześniej, krojony w romby: mała wysokość, dużo wierzchu, czysty przekrój.",
    shopDe:
      "Mehl, kalte Butter, Zucker, Ei für den Boden; gemischte Nüsse und Honig für den Belag — Nüsse und guter Honig oft im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt eine Nusssorte: ehrlich ersetzen laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Hefe braucht dieses Rezept nicht — wer Hefe-Kontext: sucht, bleibt bei [Makowiec-Technik](/de/blog/makowiec-technik), ohne den Makowiec-Hitze, Feuchtigkeit oder Garzeit falsch einschätzen. Form: flaches Blech, keine Gugelhupf-Form wie bei Babka.",
    shopPl:
      "Mąka, zimne masło, cukier, jajko na spód; mieszanka orzechów i miód na wierzch — orzechy i dobry miód często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Brak sorty: uczciwa zamiana według [zamienników](/pl/blog/zamienniki-skladnikow). Drożdże nie są potrzebne — kto chce wyczucie drożdży, [technika makowca](/pl/blog/makowiec-technika), bez mieszania z makowcem. Forma: płaska blacha, nie babkowa.",
    techniqueDe:
      "Mürbeteig kurz kneten und kühlen — nicht warm verkneten, sonst wird er zäh. Dünn ausrollen, vorbacken, dann Belag: Nüsse mit Butter und Honig bindig rösten und sofort verteilen. Zweiter Brand setzt den Belag, ohne den Boden zu verbrennen. Zu dicke Teigschicht wirkt wie Kekskuchen ohne Mazurek-Charakter; zu wenig Belag wirkt karg. Schneiden erst nach dem Abkühlen — heiß bricht der Belag.",
    techniquePl:
      "Kruche ciasto krótko zagnieść i schłodzić — nie mieszać na ciepło. Cienko rozwałkować, podpiec, potem wierzch: orzechy z masłem i miodem związać i od razu rozprowadzić. Drugie pieczenie ustawia wierzch bez palenia spodu. Za gruby spód jak ciasteczko; za mało wierzchu jak pusty placek. Kroić po ostudzeniu — na gorąco wierzch pęka.",
    serveDe:
      "In Rauten oder Rechtecken auf Platte, optional getrocknete Früchte. Am Ostertisch neben Żurek und Eiern; Fokus bleibt dieses Rezept, Menü-Artikel [Wielkanoc](/de/blog/wielkanoc-speiseplan). Wer Höhe und Hefe will: [Babka](/de/rezepte/babka). Wer Quark: [Sernik](/de/rezepte/sernik). Wer Mohnspirale: [Makowiec](/de/rezepte/makowiec). Reste luftdicht — Belag hält knusprig-nussig.",
    servePl:
      "W romby lub prostokąty na półmisek, opcjonalnie suszone owoce. Przy stole obok żurku i jaj; fokus zostaje ten przepis, owner menu: [menu wielkanocne](/pl/blog/menu-wielkanocne). Kto chce wysokość i drożdże: [babka](/pl/rezepte/babka). Twaróg: [sernik](/pl/rezepte/sernik). Mak: [makowiec](/pl/rezepte/makowiec). Resztki szczelnie — wierzch zostaje chrupiący.",
    diasporaDe:
      "In DE oft Samstag backen, Sonntag nur anrichten — entlastet den Ostermorgen. Kinder dürfen Nüsse zählen und Rauten legen; heißer Ofen bei Erwachsenen. Ein Blech reicht für viele Gäste; Qualität vor drei verschiedenen Kuchen. Einkauf früh im [Polenladen](/de/blog/polenladen-einkaufen), bevor Nuss- und Honigregale leer sind. Speiseplan nicht als Rezeptseite beanspruchen — [Wielkanoc](/de/blog/wielkanoc-speiseplan) bleibt Anlass.",
    diasporaPl:
      "W DE często piecz sobotę, niedzielę tylko układaj — odciąża poranek. Dzieci policzą orzechy i ułożą romby; gorący piec u dorosłych. Jedna blacha wystarczy dla gości; jakość przed trzema wypiekami. Zakupy wcześniej w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Nie rość o rozróżnienie menu — [menu wielkanocne](/pl/blog/menu-wielkanocne) zostaje okazją.",
    mistakesDe:
      "Zu dicker Boden. Belag ohne Vorbacken (matschig). Mit [Babka](/de/rezepte/babka) oder [Sernik](/de/rezepte/sernik) verwechseln. Mohnrollen-Hitze, Feuchtigkeit oder Garzeit falsch einschätzen. Heiß schneiden. Speiseplan-Abgrenzung beanspruchen statt [Wielkanoc](/de/blog/wielkanoc-speiseplan).",
    mistakesPl:
      "Za gruby spód. Wierzch bez podpieczenia. Mylenie z [babką](/pl/rezepte/babka) lub [sernikiem](/pl/rezepte/sernik). Kradzież fokus [makowca](/pl/rezepte/makowiec). Krojenie na gorąco. Roszczenie rozróżnienie menu zamiast [menu wielkanocnego](/pl/blog/menu-wielkanocne).",
    variantsDe:
      "Kajmak-Belag statt Nüssen (Hausbrauch, ehrlich im Title); nur Walnuss; mit getrockneten Aprikosen. Nachbarn: [Babka](/de/rezepte/babka), [Sernik](/de/rezepte/sernik), [Makowiec](/de/rezepte/makowiec), [Piernik](/de/rezepte/piernik). Anlass: [Wielkanoc](/de/blog/wielkanoc-speiseplan). Einkauf: [Polenladen](/de/blog/polenladen-einkaufen), [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Wierzch kajmakowy zamiast orzechów (zwyczaj domu, uczciwie w tytule); tylko włoskie; z morelami. Sąsiedzi: [babka](/pl/rezepte/babka), [sernik](/pl/rezepte/sernik), [makowiec](/pl/rezepte/makowiec), [piernik](/pl/rezepte/piernik). Okazja: [menu wielkanocne](/pl/blog/menu-wielkanocne). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy), [zamienniki](/pl/blog/zamienniki-skladnikow).",
  },

  "recipe-buraczki": {
    dishDe: "Buraczki",
    dishPl: "Buraczki",
    vibeDe: "erdig-süß, säuerlich-scharf, warm auf dem Teller — Beilage, keine Suppe",
    vibePl: "ziemisto-słodki, kwaśno-ostry, ciepły na talerzu — dodatek, nie zupa",
    originDe:
      "Buraczki sind der Rezept für die warme Rote-Bete-Beilage der polnischen Sonntags- und Festküche: gekocht, geraspelt oder in Streifen, mit Zwiebel, oft Apfel und Meerrettich — heiß oder lauwarm neben Fleisch. Das ist weder die junge-Bete-Suppe [Botwinka](/de/rezepte/botwinka) noch die klare oder cremige Bete-Suppe [Barszcz czerwony](/de/rezepte/barszcz-czerwony) noch der kalte Mayo-Festsalat [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Menüwahl und Rhythmus bleiben im [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch); hier liegt der enge Beilagen-Fokus. Klassischer Nachbar auf dem Teller: [Kotlet schabowy](/de/rezepte/kotlet-schabowy).",
    originPl:
      "Buraczki to przepis: ciepły dodatek z buraków w polskiej kuchni niedzielnej i świątecznej — ugotowane, tarte lub w paski, z cebulą, często jabłkiem i chrzanem — gorące lub letnie obok mięsa. To ani zupa z młodych buraków [botwinka](/pl/rezepte/botwinka), ani [barszcz czerwony](/pl/rezepte/barszcz-czerwony), ani zimna majonezowa [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Wybór menu zostaje w [obiadzie niedzielnym](/pl/blog/obiad-niedzielny); tu wąski fokus dodatku. Klasyczny sąsiad: [kotlet schabowy](/pl/rezepte/kotlet-schabowy).",
    shopDe:
      "Rote Bete roh oder vorgekocht, Zwiebel, saurer Apfel, Meerrettich aus Glas oder frisch — oft im [Polenladen](/de/blog/polenladen-einkaufen). Butter/Öl, Salz, Pfeffer, Prise Zucker. Śmietana separat reichen: Orientierung [Śmietana/Schmand](/de/blog/smietana-schmand). Wer Bete-Suppe sucht, bleibt bei [Botwinka](/de/rezepte/botwinka) oder [Barszcz](/de/rezepte/barszcz-czerwony) — anderer Intent, andere URL.",
    shopPl:
      "Buraki surowe lub gotowane, cebula, kwaśne jabłko, chrzan ze słoika lub świeży — często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Masło/olej, sól, pieprz, szczypta cukru. Śmietanę osobno: [śmietana/schmand](/pl/blog/smietana-czy-schmand). Kto szuka zupy z buraków: [botwinka](/pl/rezepte/botwinka) lub [barszcz](/pl/rezepte/barszcz-czerwony) — inny intent, inny URL.",
    techniqueDe:
      "Bete weich kochen (oder vorgekocht nutzen), schälen, raspeln — Handschuhe gegen Farbe. Zwiebel glasig, Bete warm ziehen mit wenig Flüssigkeit; Apfel und Meerrettich erst gegen Ende, sonst verkocht die Schärfe. Zu viel Wasser macht eine Mini-Suppe und stiehlt den Botwinka/Barszcz-Intent. Abschmecken: Säure, Salz, Prise Süße. Heiß servieren, nicht stundenlang offen warmhalten.",
    techniquePl:
      "Buraki ugotować (lub gotowane), obrać, zetrzeć — rękawiczki na kolor. Cebulę zeszklić, buraki duś z małą ilością płynu; jabłko i chrzan pod koniec, by nie stracić ostrości. Za dużo wody = mini-zupa i kradzież intentu botwinki/barszczu. Dopraw: kwas, sól, szczypta słodyczy. Podawaj gorące, nie trzymaj godzinami na ciepło.",
    serveDe:
      "Heiß neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy), Kartoffeln oder Kasza; Śmietana in Schälchen. Menüplatz: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch). Panier-Technik [Panieren](/de/blog/panieren-schabowy). Ostern optional als Beilage, ohne den Speiseplan zu stehlen: [Wielkanoc](/de/blog/wielkanoc-speiseplan). Nicht mit [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) mischen — anderer Intent.",
    servePl:
      "Gorące obok [schabowego](/pl/rezepte/kotlet-schabowy), ziemniaków lub kaszy; śmietana w miseczce. Miejsce w menu: [obiad niedzielny](/pl/blog/obiad-niedzielny). Panierka [panierowanie](/pl/blog/panierowanie-kotlet). Na Wielkanoc opcjonalnie jako dodatek, bez kradzieży planu: [menu wielkanocne](/pl/blog/menu-wielkanocne). Nie mieszać z [sałatką jarzynową](/pl/rezepte/salatka-jarzynowa).",
    diasporaDe:
      "Vorgekochte Bete spart Zeit nach Schichtarbeit — ehrlich benennen. Farbe fleckt: Brett und Hände schützen. Kinder dürfen Apfel raspeln; Meerrettich-Schärfe für Erwachsene dosieren. Reste im Kühlschrank, am Folgetag kurz erhitzen. Sonntagsplan bleibt Guide-Owner: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    diasporaPl:
      "Gotowane buraki oszczędzają czas po zmianie — nazwać uczciwie. Kolor brudzi: deska i ręce. Dzieci zetrą jabłko; ostrość chrzanu u dorosłych. Resztki w lodówce, nazajutrz krótko podgrzać. Plan niedzieli zostaje przy przewodniku: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
    mistakesDe:
      "Zu viel Flüssigkeit (wird Suppe → Clash mit [Botwinka](/de/rezepte/botwinka)/[Barszcz](/de/rezepte/barszcz-czerwony)). Mit [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) verwechseln. Meerrettich von Anfang an verkochen. Roh essen wollen ohne Garung. Sonntags-Abgrenzung stehlen statt [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    mistakesPl:
      "Za dużo płynu (robi się zupa → clash z [botwinką](/pl/rezepte/botwinka)/[barszczem](/pl/rezepte/barszcz-czerwony)). Mylenie z [sałatką jarzynową](/pl/rezepte/salatka-jarzynowa). Chrzan od początku wygotowany. Jedzenie na surowo bez ugotowania. Nie mieszać ilości i kroków z sąsiednim przepisem.",
    variantsDe:
      "Ohne Apfel nur Meerrettich; mit etwas Butter am Ende; milder für Kinder. Kalter Relish Bete+Meerrettich (≠ diese warme Beilage): [Ćwikła](/de/rezepte/cwikla). Nachbarn: [Schabowy](/de/rezepte/kotlet-schabowy), [Botwinka](/de/rezepte/botwinka) (Suppe ≠ Beilage), [Barszcz](/de/rezepte/barszcz-czerwony), [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Guides: [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Panieren](/de/blog/panieren-schabowy), [Śmietana](/de/blog/smietana-schmand).",
    variantsPl:
      "Bez jabłka tylko chrzan; z odrobiną masła na końcu; łagodniej dla dzieci. Zimny relish burak+chrzan (≠ ten ciepły dodatek): [ćwikła](/pl/rezepte/cwikla). Sąsiedzi: [schabowy](/pl/rezepte/kotlet-schabowy), [botwinka](/pl/rezepte/botwinka) (zupa ≠ dodatek), [barszcz](/pl/rezepte/barszcz-czerwony), [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Przewodniki: [obiad niedzielny](/pl/blog/obiad-niedzielny), [panierowanie](/pl/blog/panierowanie-kotlet), [śmietana](/pl/blog/smietana-czy-schmand).",
  },
};
