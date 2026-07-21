/**
 * Wave 13 Paket A — FACTS for krupnik, szczawiowa.
 *
 * Agent E merge into recipe-articles.ts:
 *   import { W13_FACTS_A } from "./recipe-articles-w13-a";
 *   Object.assign(FACTS, …, W13_FACTS_A);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Krupnik ≠ Grochówka (Erbsen) / Zupa grzybowa (Pilz) / Kapuśniak / Rosół-Primary
 * - Szczawiowa ≠ Botwinka / Ogórkowa / Chłodnik / Żurek
 * - Polnische Suppen Overview bleibt Broad-Owner
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

export const W13_FACTS_A: Record<string, ArticleFacts> = {
  "recipe-krupnik": {
    dishDe: "Krupnik",
    dishPl: "Krupnik",
    vibeDe: "getreidewarm, nach Gerste und Wurzelgemüse — Alltag und Sonntagstopf",
    vibePl: "zbożowy, od kaszy jęczmiennej i włoszczyzny — codzienność i niedziela",
    originDe:
      "Krupnik ist das Rezept für die klassische polnische Gerstensuppe — hier als Hausvariante mit Perlgerste (kasza jęczmienna), Wurzelgemüse und optional Hühnerfleisch. Der Topf bindet leicht durch die Gerste, bleibt aber klar als Suppe mit sichtbaren Körnern — nicht als dickes Erbsenpüree. Das ist weder [Grochówka](/de/rezepte/grochowka) (gelbe Trockenerbsen, oft Rauchwurst) noch [Zupa grzybowa](/de/rezepte/zupa-grzybowa) (Trockenpilz-Fond) noch Sauerkrautsuppe [Kapuśniak](/de/rezepte/kapusniak). Der Overview [Polnische Suppen](/de/blog/polnische-suppen) gibt den Überblick über die Landschaft; hier liegt nur der enge Gersten-Fokus. Menüplatz: beim [Sonntagsessen](/de/blog/sonntagsessen-polnisch) — Kulturrahmen bleibt bei der Guide, Rezept dieses Rezept.",
    originPl:
      "Krupnik to przepis na klasyczna polska zupa z kaszy jęczmiennej — tu linia domowa z pęczakiem, warzywami korzeniowymi i opcjonalnie kurczakiem. Garnek lekko gęstnieje od kaszy, ale zostaje zupą z widocznymi ziarnami — nie papką z grochu. To ani [grochówka](/pl/rezepte/grochowka), ani [zupa grzybowa](/pl/rezepte/zupa-grzybowa), ani [kapuśniak](/pl/rezepte/kapusniak). Przegląd [polskie zupy](/pl/blog/polskie-zupy) zostaje Überblickem; tu tylko wąski fokus jęczmienia. Miejsce w menu: przy [obiadzie niedzielnym](/pl/blog/obiad-niedzielny) — przewodnik kulturowy zostaje przy guide, Rezept przy tym przepisie.",
    shopDe:
      "Perlgerste ist der Charakterträger — oft im [Polenladen](/de/blog/polenladen-einkaufen) oder im Supermarkt-Getreideregal. Wurzelgemüse, Zwiebel, Lorbeer und Dill aus dem Markt. Optional Huhn aus dem Kühlregal. Fehlt eine Sorte Gerste: ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) benennen, ohne in Erbsen-Fokus zu kippen. Keine Trockenerbsen und kein Trockenpilz-Batch als Basis — sonst wird daraus [Grochówka](/de/rezepte/grochowka) oder [Zupa grzybowa](/de/rezepte/zupa-grzybowa). Brühe-Qualität über [Rosół-Technik](/de/blog/rosol-technik).",
    shopPl:
      "Kasza jęczmienna niesie charakter — często w [sklepie polskim](/pl/blog/sklep-polski-zakupy) lub w markecie. Warzywa korzeniowe, cebula, liść laurowy, koperek z marketu. Opcjonalnie kurczak. Brak sorty kaszy: uczciwie według [zamienników](/pl/blog/zamienniki-skladnikow), bez dryfu w groch. Bez suchego grochu i bez suszonych grzybów jako bazy — inaczej dryfuje w stronę [grochówkę](/pl/rezepte/grochowka) lub [zupę grzybową](/pl/rezepte/zupa-grzybowa). Jakość bulionu [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol).",
    techniqueDe:
      "Gerste abspülen und mitrösten, dann ruhig köcheln — zu hartes Blubbern macht den Topf trüb und die Körner ungleich. Einlagen und Fleisch so zeitigen, dass nichts zerkocht. Teilweise pürieren ist optional und selten nötig; Krupnik will Körner, nicht Babybrei wie dicke [Grochówka](/de/rezepte/grochowka). Salz gestaffelt; Säure sparsam. Das ist kein Wald-Fond aus Trockenpilzen wie [Zupa grzybowa](/de/rezepte/zupa-grzybowa). Klarheit der Brühe üben: [Rosół-Technik](/de/blog/rosol-technik).",
    techniquePl:
      "Kaszą przepłucz i podsmaż, potem spokojnie gotuj — zbyt mocne burzenie mąci i nierówno gotuje ziarna. Dodatki i mięso tak, by nic się nie rozpadło. Blendowanie rzadko potrzebne; krupnik chce ziarna, nie papkę jak gęsta [grochówka](/pl/rezepte/grochowka). Sól etapami; kwasu mało. To nie leśny wywar z suszu jak [zupa grzybowa](/pl/rezepte/zupa-grzybowa). Klarowność: [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol).",
    serveDe:
      "Heiß mit Dill, Brot dazu. Passt als sättigender Starter oder Alltagsmittag im Sinne von [polnischem Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer Erbsen will: [Grochówka](/de/rezepte/grochowka); wer Pilzfond: [Zupa grzybowa](/de/rezepte/zupa-grzybowa); wer klare Festtagsbrühe: [Rosół](/de/rezepte/rosol). Landschaft: [Polnische Suppen](/de/blog/polnische-suppen). Einkaufskontext: [Polenladen](/de/blog/polenladen-einkaufen).",
    servePl:
      "Gorąca z koperkiem, chleb obok. Starter lub obiad w duchu [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Groch: [grochówka](/pl/rezepte/grochowka); grzyby: [zupa grzybowa](/pl/rezepte/zupa-grzybowa); klarowny wywar: [rosół](/pl/rezepte/rosol). Krajobraz: [polskie zupy](/pl/blog/polskie-zupy). W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności.",
    diasporaDe:
      "Krupnik ist Diaspora-freundlich: ein Topf, Gerste aus dem Vorrat, Gemüse aus dem Supermarkt. Batch für zwei Tage möglich — Gerste zieht Flüssigkeit, am zweiten Tag Brühe nachgießen. Kinder dürfen Gerste abmessen; heißer Topf bei Erwachsenen. Vor dem Wochenende Gerste checken im [Polenladen](/de/blog/polenladen-einkaufen). Speiseplan entlasten heißt: klare Cook-URL, Kultur bleibt [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    diasporaPl:
      "Krupnik lubi diasporę: jeden garnek, kasza ze spiżarni, warzywa z marketu. Zapas na dwa dni — kasza ciągnie płyn, nazajutrz dolej. Dzieci odmierzą kaszę; gorący garnek u dorosłych. Przed weekendem sprawdź kaszę w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Odciążenie menu: jasny cook-URL, kultura zostaje w [obiadzie niedzielnym](/pl/blog/obiad-niedzielny).",
    mistakesDe:
      "Mit [Grochówka](/de/rezepte/grochowka) verwechseln (Erbsen). Mit [Zupa grzybowa](/de/rezepte/zupa-grzybowa) verwechseln (Pilz). Zu stark pürieren bis Brei. Gerste ungewaschen. Mengen und Schritte nicht mit dem verlinkten Nachbarn vermischen. nein, dort Überblick bzw. Kultur.",
    mistakesPl:
      "Mylenie z [grochówką](/pl/rezepte/grochowka). Mylenie z [zupą grzybową](/pl/rezepte/zupa-grzybowa). Zbyt mocne blendowanie. Kasza bez płukania. Nie mieszać ilości i kroków z sąsiednim przepisem. nie.",
    variantsDe:
      "Mit mehr Huhn sättigender; vegetarisch ehrlich ohne Fleisch; mit getrockneten Pilzen nur als Beinote — Fokus bleibt Gerste, nicht [Zupa grzybowa](/de/rezepte/zupa-grzybowa). Passende Nachbarn sind [Grochówka](/de/rezepte/grochowka), [Kapuśniak](/de/rezepte/kapusniak), [Rosół](/de/rezepte/rosol). Guides: [Polnische Suppen](/de/blog/polnische-suppen), [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Polenladen](/de/blog/polenladen-einkaufen), [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Z większą ilością kurczaka sycący; wege uczciwie bez mięsa; z suszonymi grzybami tylko jako dopisek — tu zostaje kasza, nie [zupa grzybowa](/pl/rezepte/zupa-grzybowa). Pasujący sąsiedzi to [grochówka](/pl/rezepte/grochowka), [kapuśniak](/pl/rezepte/kapusniak), [rosół](/pl/rezepte/rosol). Przewodniki: [polskie zupy](/pl/blog/polskie-zupy), [obiad niedzielny](/pl/blog/obiad-niedzielny), [sklep polski](/pl/blog/sklep-polski-zakupy), [zamienniki](/pl/blog/zamienniki-skladnikow).",
  },

  "recipe-szczawiowa": {
    dishDe: "Zupa szczawiowa",
    dishPl: "Zupa szczawiowa",
    vibeDe: "grün, säuerlich-frisch, nach Sauerampfer und Dill — Frühling und früher Sommer",
    vibePl: "zielona, kwaskowato-świeża, od szczawiu i koperku — wiosna i wczesne lato",
    originDe:
      "Zupa szczawiowa ist das Rezept für die klassische polnische Sauerampfersuppe — hier als eine klare Hauslinie: frischer Szczaw, Kartoffeln, temperierte Śmietana und hartgekochtes Ei. Die Farbe bleibt grün und der Geschmack säuerlich-pflanzlich. Das ist weder warme junge Rote-Bete-Suppe [Botwinka](/de/rezepte/botwinka) noch Kiszone-Gurkensuppe [Ogórkowa](/de/rezepte/ogorkowa) noch kalter, oft rosa [Chłodnik](/de/rezepte/chlodnik-litewski) und auch kein Zakwas-[Żurek](/de/rezepte/zurek). Der Overview [Polnische Suppen](/de/blog/polnische-suppen) ordnet die Landschaft; hier liegt der enge Sauerampfer-Fokus. Śmietana-Technik im [Śmietana/Schmand](/de/blog/smietana-schmand)-Guide — Zutaten-Guide bleibt dort, Rezept dieses Rezept.",
    originPl:
      "Zupa szczawiowa to przepis na klasyczna zupa ze szczawiu — tu jedna linia domowa: świeży szczaw, ziemniaki, zahartowana śmietana i jajko na twardo. Kolor zostaje zielony, smak kwaskowato-roślinny. To ani ciepła [botwinka](/pl/rezepte/botwinka), ani [ogórkowa](/pl/rezepte/ogorkowa), ani zimny [chłodnik](/pl/rezepte/chlodnik-litewski), ani zakwasowy [żurek](/pl/rezepte/zurek). Przegląd [polskie zupy](/pl/blog/polskie-zupy) porządkuje krajobraz; tu wąski fokus szczawiu. Technika śmietany w [śmietana/Schmand](/pl/blog/smietana-czy-schmand) — przewodnikiem po składniku zostaje tam, Rezept przy tym przepisie.",
    shopDe:
      "Frischer Sauerampfer ist saisonal — Markt, Garten oder [Polenladen](/de/blog/polenladen-einkaufen); gefroren ehrlich benennen laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Kartoffeln, Eier, Dill aus dem Supermarkt. Śmietana/Schmand-Wahl im [Śmietana-Guide](/de/blog/smietana-schmand). Keine jungen Rote-Bete-Blätter als „Ersatz“ ohne Hinweis — sonst wird daraus [Botwinka](/de/rezepte/botwinka). Kein Gurkenglas und kein Kefir-Kühlbecher als Basis — sonst [Ogórkowa](/de/rezepte/ogorkowa) bzw. [Chłodnik](/de/rezepte/chlodnik-litewski).",
    shopPl:
      "Świeży szczaw jest sezonowy — targ, ogród lub [sklep polski](/pl/blog/sklep-polski-zakupy); mrożony uczciwie według [zamienników](/pl/blog/zamienniki-skladnikow). Ziemniaki, jajka, koperek z marketu. Wybór śmietany w [przewodniku](/pl/blog/smietana-czy-schmand). Bez młodej botwiny jako „zamiennika” bez dopisku — inaczej dryfuje w stronę [botwinkę](/pl/rezepte/botwinka). Bez słoika ogórków i bez kefiru jako bazy — inaczej [ogórkowa](/pl/rezepte/ogorkowa) lub [chłodnik](/pl/rezepte/chlodnik-litewski).",
    techniqueDe:
      "Kartoffelbasis weich kochen, Sauerampfer spät und kurz — lange Hitze macht Oliv und Bitterkeit. Śmietana immer temperieren, nie in den kochenden Topf. Ei separat hart kochen und erst im Teller. Abschmecken: Salz, etwas Pfeffer, Dill; Zucker selten nötig. Das ist kein Kiszone-Topf wie [Ogórkowa](/de/rezepte/ogorkowa) und kein kalter Kefirbecher wie [Chłodnik](/de/rezepte/chlodnik-litewski). Bete-Nachbar [Botwinka](/de/rezepte/botwinka).",
    techniquePl:
      "Bazę ziemniaczaną dogotuj, szczaw późno i krótko — długi ogień daje oliwkowy kolor i gorycz. Śmietanę zawsze zahartuj. Jajko osobno na twardo, do talerza. Dopraw: sól, pieprz, koperek; cukier rzadko. To nie garnek kiszony jak [ogórkowa](/pl/rezepte/ogorkowa) i nie zimny kefir jak [chłodnik](/pl/rezepte/chlodnik-litewski). Sąsiad buraczany [botwinka](/pl/rezepte/botwinka).",
    serveDe:
      "Heiß, grün, mit Ei und Dill. Frühlings- und Frühsommer-Teller; Brot dazu. Wer junge Bete mit Blättern will: [Botwinka](/de/rezepte/botwinka); wer Gurkensäure: [Ogórkowa](/de/rezepte/ogorkowa); wer kalt und oft rosa: [Chłodnik](/de/rezepte/chlodnik-litewski). Landschaft: [Polnische Suppen](/de/blog/polnische-suppen). Milchprodukt-Kontext: [Śmietana/Schmand](/de/blog/smietana-schmand).",
    servePl:
      "Gorąca, zielona, z jajkiem i koperkiem. Wiosna i wczesne lato; chleb obok. Młode buraki z botwiną: [botwinka](/pl/rezepte/botwinka); kwas ogórkowy: [ogórkowa](/pl/rezepte/ogorkowa); zimno i często różowo: [chłodnik](/pl/rezepte/chlodnik-litewski). Krajobraz: [polskie zupy](/pl/blog/polskie-zupy). Nabiał: [śmietana/Schmand](/pl/blog/smietana-czy-schmand).",
    diasporaDe:
      "In DE ist frischer Sauerampfer das Nadelöhr — wer ihn findet, kocht; wer nicht, wartet auf die Saison oder nennt den gefrorenen Vorrat ehrlich. Ein Topf für den gleichen Tag, Farbe frisch halten. Kinder dürfen Eier schälen; heißer Topf und scharfe Messer bei Erwachsenen. Einkaufshilfe: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) und [Polenladen](/de/blog/polenladen-einkaufen). Overview [Polnische Suppen](/de/blog/polnische-suppen).",
    diasporaPl:
      "W DE świeży szczaw to wąskie gardło — kto znajdzie, gotuje; kto nie, czeka na sezon albo nazywa mrożonkę uczciwie. Jeden garnek na ten sam dzień, kolor świeży. Dzieci obiorą jajka; gorący garnek u dorosłych. W [zamienniki](/pl/blog/zamienniki-skladnikow) i pod [sklep polski](/pl/blog/sklep-polski-zakupy) znajdziesz wskazówki zakupowe. Przegląd osobny farsz i osobne ilości.: [polskie zupy](/pl/blog/polskie-zupy).",
    mistakesDe:
      "Mit [Botwinka](/de/rezepte/botwinka) verwechseln (Bete). Mit [Ogórkowa](/de/rezepte/ogorkowa) verwechseln (Gurke). Mit [Chłodnik](/de/rezepte/chlodnik-litewski) verwechseln (kalt). Sauerampfer zu lange kochen. Śmietana kochend einrühren. Mengen und Schritte nicht mit dem verlinkten Nachbarn vermischen. nein.",
    mistakesPl:
      "Mylenie z [botwinką](/pl/rezepte/botwinka). Mylenie z [ogórkową](/pl/rezepte/ogorkowa). Mylenie z [chłodnikiem](/pl/rezepte/chlodnik-litewski). Zbyt długie gotowanie szczawiu. Śmietana do wrzątku. Nie mieszać ilości i kroków z sąsiednim przepisem. nie.",
    variantsDe:
      "Mit mehr Dill frischer; mit weniger Śmietana säuerlicher; vegetarisch auf Gemüsebrühe. Passende Nachbarn sind [Botwinka](/de/rezepte/botwinka), [Ogórkowa](/de/rezepte/ogorkowa), [Chłodnik](/de/rezepte/chlodnik-litewski). Guides: [Polnische Suppen](/de/blog/polnische-suppen), [Śmietana/Schmand](/de/blog/smietana-schmand), [Ersatzprodukte](/de/blog/ersatzprodukte-de), [Polenladen](/de/blog/polenladen-einkaufen).",
    variantsPl:
      "Z większą ilością koperku świeższa; z mniejszą śmietaną bardziej kwaskowa; wege na warzywnym. Pasujący sąsiedzi to [botwinka](/pl/rezepte/botwinka), [ogórkowa](/pl/rezepte/ogorkowa), [chłodnik](/pl/rezepte/chlodnik-litewski). Przewodniki: [polskie zupy](/pl/blog/polskie-zupy), [śmietana/Schmand](/pl/blog/smietana-czy-schmand), [zamienniki](/pl/blog/zamienniki-skladnikow), [sklep polski](/pl/blog/sklep-polski-zakupy).",
  },
};
