import type { Recipe } from "@/types/content";

/**
 * Wave 13 Paket A — Suppen-Rest (+2).
 * - recipe-krupnik — Gersten-/Gemüsesuppe (Gerste + Wurzelgemüse, optional Huhn), anders als Grochówka/Grzybowa
 * - recipe-szczawiowa — Sauerampfersuppe mit Ei/Sahne, anders als Botwinka/Ogórkowa/Chłodnik
 *
 * Integrator E: merge into seed aggregator + recipe-articles + related maps.
 * Affiliate: guide-only (no relatedProductIds).
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave13A: Recipe[] = [
  {
    id: "recipe-krupnik",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-krupnik/d71fb2f2-23ab-4055-a851-2042de77b343.webp",
    prepMinutes: 20,
    cookMinutes: 55,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-bulion"],
    categoryIds: ["category-suppen"],
    relatedPostIds: [
      "post-polnische-suppen",
      "post-sonntagsessen",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Krupnik",
        slug: "krupnik",
        excerpt:
          "Eine wärmende polnische Suppe aus Perlgerste und Wurzelgemüse, wahlweise mit zartem Hühnerfleisch, ganz anders als die Erbsensuppe Grochówka oder die dunkle Pilzsuppe Zupa grzybowa.",
        steps: [
          {
            text: "Die Perlgerste in einem Sieb gründlich abspülen. Zwiebel, Karotte, Sellerie und Petersilienwurzel würfeln und, falls verwendet, das Hühnerfleisch in Stücke schneiden. Die Zwiebel in Butter oder Öl glasig dünsten und die Gerste kurz mitrösten, bis sie leicht nussig duftet.",
            tip: "Krupnik lebt von der Gerste, nicht von Erbsen wie bei der [Grochówka](/de/rezepte/grochowka). Einen Überblick über die ganze Suppenfamilie gibt der Beitrag zu [polnischen Suppen](/de/blog/polnische-suppen).",
          },
          {
            text: "Mit Wasser oder einer leichten Hühner- oder Gemüsebrühe auffüllen und Lorbeerblatt, Pfeffer sowie das restliche Wurzelgemüse hinzufügen. Die Suppe 35 bis 45 Minuten ruhig köcheln lassen, bis die Gerste weich ist und der Topf von selbst leicht bindet. Nicht pürieren, denn Krupnik soll nach Körnern schmecken und nicht nach Brei.",
            tip: "Wie du eine klare, kräftige Brühe hinbekommst, zeigt die [Rosół-Technik](/de/blog/rosol-technik). Gute Perlgerste findest du oft günstiger im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Die Hühnerstücke, falls verwendet, im Topf mitgaren oder bereits gegartes Fleisch erst gegen Ende zugeben, damit es nicht trocken wird. Mit Salz abschmecken und nur sparsam mit Säure arbeiten, denn Krupnik soll rund und getreidewarm schmecken, nicht sauer. Zum Schluss frischen Dill oder Petersilie einrühren.",
            tip: "Die Suppe bleibt hell und getreidig, ganz anders als der dunkle Trockenpilzsud der [Zupa grzybowa](/de/rezepte/zupa-grzybowa). Als Alltagsgericht passt sie gut in den Rahmen des [polnischen Sonntagsessens](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Heiß in tiefen Tellern servieren, dazu passt frisches Brot. Reste halten sich gut im Kühlschrank und schmecken am zweiten Tag oft sogar runder, weil sich die Aromen setzen. Da die Gerste weiter Flüssigkeit zieht, beim Aufwärmen einfach etwas Brühe oder Wasser nachgießen.",
            tip: "Fehlt dir Perlgerste, findest du ehrliche Alternativen bei den [Ersatzprodukten](/de/blog/ersatzprodukte-de). Am Charakter ändert das nichts, es bleibt eine Gerstensuppe und keine Erbsensuppe.",
          },
        ],
        seoTitle: "Krupnik Rezept | Polnische Gerstensuppe | Alemniam",
        seoDescription:
          "Krupnik: polnische Gerstensuppe mit Wurzelgemüse, anders als Grochówka und Zupa grzybowa. Bilingual mit Diaspora-Einkaufstipps für Deutschland.",
      },
      pl: {
        title: "Krupnik",
        slug: "krupnik",
        excerpt:
          "Rozgrzewająca polska zupa z kaszy jęczmiennej i warzyw korzeniowych, opcjonalnie z delikatnym kurczakiem, zupełnie inna niż grochówka czy zupa grzybowa.",
        steps: [
          {
            text: "Kaszę jęczmienną dokładnie przepłucz na sitku. Cebulę, marchew, seler i pietruszkę pokrój w kostkę, a jeśli używasz kurczaka, potnij go na kawałki. Cebulę zeszklij na maśle lub oleju, a potem krótko podsmaż kaszę, aż zacznie pachnieć orzechowo.",
            tip: "Krupnik zawdzięcza charakter kaszy, nie grochowi jak [grochówka](/pl/rezepte/grochowka). Przegląd całej rodziny zup znajdziesz w artykule o [polskich zupach](/pl/blog/polskie-zupy).",
          },
          {
            text: "Zalej wodą lub lekkim bulionem drobiowym albo warzywnym, dodaj liść laurowy, pieprz i resztę warzyw korzeniowych. Gotuj spokojnie 35 do 45 minut, aż kasza zmięknie, a zupa sama lekko zgęstnieje. Nie blenduj jej, bo krupnik ma smakować ziarnami, a nie papką.",
            tip: "Jak ugotować klarowny, mocny bulion, pokazuje [technika rosołu](/pl/blog/jak-ugotowac-rosol). Dobrą kaszę jęczmienną często taniej kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Kurczaka, jeśli go używasz, dogotuj razem z zupą, a już ugotowane mięso dodaj dopiero pod koniec, żeby się nie wysuszyło. Dopraw solą i sięgaj po kwas oszczędnie, bo krupnik ma być łagodny i zbożowy, a nie kwaśny. Na koniec wmieszaj świeży koperek lub natkę pietruszki.",
            tip: "Zupa zostaje jasna i zbożowa, zupełnie inna niż ciemny wywar z suszonych grzybów w [zupie grzybowej](/pl/rezepte/zupa-grzybowa). Jako danie na co dzień pasuje dobrze w duchu [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Podawaj gorącą w głębokich talerzach, z chlebem obok. Resztki dobrze się przechowują i nazajutrz często smakują jeszcze lepiej, bo smaki się przegryzają. Kasza dalej wchłania płyn, więc przy odgrzewaniu po prostu dolej trochę bulionu lub wody.",
            tip: "Jeśli brakuje ci kaszy jęczmiennej, uczciwe zamienniki znajdziesz w artykule o [zamiennikach składników](/pl/blog/zamienniki-skladnikow). Charakter zupy się nie zmienia, to nadal zupa jęczmienna, a nie grochowa.",
          },
        ],
        seoTitle: "Krupnik przepis | Zupa jęczmienna | Alemniam",
        seoDescription:
          "Krupnik: zupa z kaszy jęczmiennej i warzyw, inna niż grochówka i zupa grzybowa. Dwujęzycznie, z poradami zakupowymi w Niemczech.",
      },
    },
    ingredients: [
      {
        id: "kr-1",
        name: {
          de: "Perlgerste (kasza jęczmienna)",
          pl: "Kasza jęczmienna (pęczak)",
        },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Polenladen oder Supermarkt, im Regal für Getreide und Hülsenfrüchte",
      },
      {
        id: "kr-2",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "kr-3",
        name: { de: "Karotte", pl: "Marchew" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "kr-4",
        name: {
          de: "Sellerie / Petersilienwurzel",
          pl: "Seler / pietruszka",
        },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "kr-5",
        name: {
          de: "Hühnerfleisch (optional)",
          pl: "Kurczak (opcjonalnie)",
        },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "other",
        substitute: {
          de: "Für die vegetarische Version einfach weglassen und im Titel ehrlich benennen",
          pl: "W wersji wegetariańskiej po prostu pominąć i uczciwie napisać o tym w tytule",
        },
      },
      {
        id: "kr-6",
        name: {
          de: "Wasser oder leichte Brühe",
          pl: "Woda lub lekki bulion",
        },
        amount: 1.5,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "kr-7",
        name: {
          de: "Butter oder Öl",
          pl: "Masło lub olej",
        },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "dairy",
      },
      {
        id: "kr-8",
        name: {
          de: "Lorbeer, Salz, Pfeffer, Dill",
          pl: "Liść laurowy, sól, pieprz, koperek",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T11:00:00.000Z",
    updatedAt: "2026-07-21T11:00:00.000Z",
  },
  {
    id: "recipe-szczawiowa",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-szczawiowa/e82fb107-2862-444c-8151-09b5c195ccfe.webp",
    prepMinutes: 15,
    cookMinutes: 35,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-bulion"],
    categoryIds: ["category-suppen", "category-vegetarisch"],
    relatedPostIds: [
      "post-polnische-suppen",
      "post-ersatzprodukte-de",
      "post-smietana-schmand",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Zupa szczawiowa",
        slug: "szczawiowa",
        excerpt:
          "Eine leuchtend grüne polnische Frühlingssuppe aus frischem Sauerampfer, verfeinert mit Ei und Śmietana, ganz anders als die junge Rote-Bete-Suppe Botwinka oder der kalte Chłodnik.",
        steps: [
          {
            text: "Eine leichte Brühe oder Wasser mit Zwiebel- und Kartoffelwürfeln aufsetzen und weich kochen. Den frischen Sauerampfer (szczaw) waschen und grob schneiden. Zähe Stiele am besten weglassen oder sehr fein schneiden.",
            tip: "Frischer Sauerampfer ist in Deutschland saisonal auf dem Markt oder im [Polenladen](/de/blog/polenladen-einkaufen) erhältlich. Ist gerade keiner zu bekommen, hilft der Beitrag zu [Ersatzprodukten](/de/blog/ersatzprodukte-de) weiter, und ein Überblick über die ganze Familie steht bei den [polnischen Suppen](/de/blog/polnische-suppen).",
          },
          {
            text: "Den Sauerampfer kurz in Butter oder direkt in der Brühe zusammenfallen lassen und dann in den Topf geben. Nur wenige Minuten mitköcheln, denn zu lange Hitze macht die Farbe olivgrün und den Geschmack bitter. Mit Salz und Pfeffer abschmecken.",
            tip: "Hier zählen Grün und die Säure des Sauerampfers, ganz anders als bei der jungen Rote Bete in der [Botwinka](/de/rezepte/botwinka) oder der Gurkensäure der [Ogórkowa](/de/rezepte/ogorkowa).",
          },
          {
            text: "Den Topf vom Herd nehmen. Die Śmietana temperieren, indem du etwas heiße Brühe unterrührst, und erst dann in die Suppe geben, damit sie nicht gerinnt. Hartgekochte Eier halbieren oder würfeln und in die Teller legen, dann mit Dill bestreuen.",
            tip: "Wie du Śmietana richtig temperierst, zeigt der [Śmietana-Guide](/de/blog/smietana-schmand). Kalt und oft rosa serviert wird dagegen der [Chłodnik](/de/rezepte/chlodnik-litewski), das ist ein völlig anderes Gericht.",
          },
          {
            text: "Heiß servieren, solange die Suppe noch kräftig grün ist, dazu passt frisches Brot. Reste kühl stellen. Die Farbe dunkelt mit der Zeit nach, deshalb schmeckt Zupa szczawiowa am besten frisch am gleichen Tag.",
            tip: "Weitere grüne und saure Suppenverwandte findest du im Überblick zu den [polnischen Suppen](/de/blog/polnische-suppen), hier geht es aber nur um die Sauerampfersuppe selbst.",
          },
        ],
        seoTitle: "Szczawiowa Rezept | Sauerampfersuppe polnisch | Alemniam",
        seoDescription:
          "Zupa szczawiowa: grüne Sauerampfersuppe mit Ei und Śmietana, anders als Botwinka, Ogórkowa und Chłodnik. Bilingual mit Diaspora-Einkaufstipps.",
      },
      pl: {
        title: "Zupa szczawiowa",
        slug: "szczawiowa",
        excerpt:
          "Wyraziście zielona polska zupa wiosenna ze świeżego szczawiu, dopełniona jajkiem i śmietaną, zupełnie inna niż ciepła botwinka czy zimny chłodnik.",
        steps: [
          {
            text: "Zagotuj lekki bulion lub wodę z cebulą i kostkami ziemniaka, ugotuj do miękkości. Szczaw umyj i pokrój grubo. Twarde ogonki lepiej odrzucić albo pokroić bardzo drobno.",
            tip: "Świeży szczaw w Niemczech kupisz sezonowo na targu albo w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Gdy go brakuje, pomogą uczciwe [zamienniki składników](/pl/blog/zamienniki-skladnikow), a przegląd całej rodziny zup znajdziesz wśród [polskich zup](/pl/blog/polskie-zupy).",
          },
          {
            text: "Szczaw krótko zwiędnij na maśle albo bezpośrednio w bulionie, a potem przełóż do garnka. Gotuj tylko kilka minut, bo zbyt długie gotowanie robi z niego oliwkową i gorzką masę. Dopraw solą i pieprzem.",
            tip: "Liczy się tu zieleń i kwas szczawiu, zupełnie inny charakter niż młoda botwina w [botwince](/pl/rezepte/botwinka) czy kwas ogórkowy w [ogórkowej](/pl/rezepte/ogorkowa).",
          },
          {
            text: "Zdejmij garnek z ognia. Zahartuj śmietanę, dolewając odrobinę gorącego bulionu, i dopiero wtedy wmieszaj ją do zupy, żeby się nie zważyła. Jajka na twardo przekrój na pół albo pokrój w kostkę i połóż na talerzach, a na wierzch posyp koperkiem.",
            tip: "Jak prawidłowo hartować śmietanę, pokazuje [przewodnik po śmietanie](/pl/blog/smietana-czy-schmand). Na zimno i często na różowo podaje się za to [chłodnik](/pl/rezepte/chlodnik-litewski), czyli zupełnie inne danie.",
          },
          {
            text: "Podawaj gorącą, dopóki zupa jest wyraźnie zielona, z chlebem obok. Resztki trzymaj w lodówce. Kolor z czasem ciemnieje, dlatego zupa szczawiowa smakuje najlepiej świeżo tego samego dnia.",
            tip: "Więcej zielonych i kwaśnych krewnych znajdziesz w przeglądzie [polskich zup](/pl/blog/polskie-zupy), ale tutaj chodzi tylko o zupę szczawiową samą w sobie.",
          },
        ],
        seoTitle: "Zupa szczawiowa przepis | Szczaw z jajkiem | Alemniam",
        seoDescription:
          "Zupa szczawiowa: zielona zupa ze szczawiu, jajkiem i śmietaną, inna niż botwinka, ogórkowa i chłodnik. Dwujęzycznie, z poradami zakupowymi.",
      },
    },
    ingredients: [
      {
        id: "sz-1",
        name: {
          de: "Frischer Sauerampfer (szczaw)",
          pl: "Świeży szczaw",
        },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "produce",
        storeHintDe:
          "Saisonal auf dem Markt oder im Polenladen, gefrorene Ware bitte ehrlich kennzeichnen",
        substitute: {
          de: "Gefrorener Szczaw funktioniert auch, dann aber klar als Sauerampfer kennzeichnen",
          pl: "Mrożony szczaw też się nada, tylko trzeba go uczciwie nazwać szczawiem",
        },
      },
      {
        id: "sz-2",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "sz-3",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "sz-4",
        name: {
          de: "Wasser oder leichte Brühe",
          pl: "Woda lub lekki bulion",
        },
        amount: 1.2,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "sz-5",
        name: {
          de: "Butter",
          pl: "Masło",
        },
        amount: 1,
        unit: { de: "EL", pl: "łyżka" },
        group: "dairy",
      },
      {
        id: "sz-6",
        name: {
          de: "Śmietana / Schmand",
          pl: "Śmietana",
        },
        amount: 100,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
        storeHintDe: "Vor dem Einrühren temperieren, mehr dazu im Śmietana-Guide",
      },
      {
        id: "sz-7",
        name: {
          de: "Eier (hartgekocht)",
          pl: "Jajka (na twardo)",
        },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "sz-8",
        name: {
          de: "Salz, Pfeffer, Dill",
          pl: "Sól, pieprz, koperek",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T11:00:00.000Z",
    updatedAt: "2026-07-21T11:00:00.000Z",
  },
];
