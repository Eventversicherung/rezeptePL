import type { Recipe } from "@/types/content";

/**
 * Wave 13 Paket B — Kutia + Napoleonka.
 * Isolated for Integrator E: do not import into seed.ts until merge.
 * Affiliate: guide-only (no relatedProductIds / no catalog recipeIds).
 * No new blog pillar. NO Wuzetka.
 * Ownership: Kutia is different from Makaron z makiem (Nudeln), Makowiec (Rolle) and Kompot z suszu.
 * Napoleonka is different from Szarlotka, Sernik, Mazurek and Wuzetka (HOLD).
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave13B: Recipe[] = [
  {
    id: "recipe-kutia",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-kutia/0088aa6b-0eb5-4e7f-af68-56c011688e28.webp",
    prepMinutes: 25,
    cookMinutes: 90,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-wigilia"],
    techniqueIds: [],
    categoryIds: [
      "category-suess",
      "category-vegetarisch",
      "category-hauptgerichte",
    ],
    relatedPostIds: [
      "post-wigilia",
      "post-makowiec-technik",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Kutia",
        slug: "kutia",
        excerpt:
          "Die klassische Wigilia-Kutia aus ganzen Weizenkörnern, Mohn, Honig und Nüssen ist ein süßes Getreide-Dessert für den Heiligabendtisch, ganz anders als die Mohnnudeln Makaron z makiem oder die Hefe-Mohnrolle Makowiec.",
        steps: [
          {
            text: "Die geschälten Weizenkörner waschen und in reichlich Wasser weich kochen, bis sie bissfest weich sind, das dauert oft 60 bis 90 Minuten. Wenn du Zeit hast, weiche sie am Vortag ein, das verkürzt die Kochzeit deutlich. Danach abgießen und abkühlen lassen.",
            tip: "In der Schüssel liegen später ganze Körner, keine Nudeln wie bei [Makaron z makiem](/de/rezepte/makaron-z-makiem). Den Rahmen für den ganzen Heiligabend liefert der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
          },
          {
            text: "Blauen Mohn mit heißem Wasser oder Milch aufquellen lassen, abtropfen und möglichst fein mahlen oder zerreiben. Mit Honig oder Zucker, gehackten Walnüssen oder Mandeln, Rosinen und optional etwas Vanille oder Zitronenschale zu einer bindenden Masse verrühren, die nicht trocken bröckelt.",
            tip: "Gute Mohnqualität für den Festtagseinkauf findest du oft im [Polenladen](/de/blog/polenladen-einkaufen). Das Mahlgefühl ähnelt der [Makowiec-Technik](/de/blog/makowiec-technik), auch wenn hier Getreide und Mohn im Mittelpunkt stehen und keine Hefe-Rolle.",
          },
          {
            text: "Den Weizen mit der Mohn-Nuss-Masse vermengen und bei Bedarf etwas Milch oder Honig für Glanz und Bindung unterrühren. Am Ende sollte Kutia süß, mohnig und nussig schmecken, aber weder bitter noch sandig-trocken.",
            tip: "Ein Getränk gehört hier nicht hinein, dafür bleibt der [Kompot z suszu](/de/rezepte/kompot-z-suszu) zuständig. Fehlt eine Zutat, hilft der Beitrag zu [Ersatzprodukten](/de/blog/ersatzprodukte-de) weiter.",
          },
          {
            text: "Kutia kühl stellen, sie schmeckt oft nach ein paar Stunden Ziehzeit noch runder. In Schalen oder einer großen Schüssel servieren, optional mit ein paar zusätzlichen Nüssen oder etwas Honig obenauf. Reste abgedeckt im Kühlschrank aufbewahren.",
            tip: "Wer die Süße lieber über mehrere Tage verteilt genießt, kann kleine Portionen einfrieren und vor dem Servieren nur kurz auftauen lassen.",
          },
        ],
        seoTitle: "Kutia Rezept | Weizen Mohn Wigilia | Alemniam",
        seoDescription:
          "Kutia: Weizenkörner mit Mohn, Honig und Nüssen für die Wigilia, klar getrennt von Makaron z makiem und Makowiec. Bilingual mit Diaspora-Tipps.",
      },
      pl: {
        title: "Kutia",
        slug: "kutia",
        excerpt:
          "Klasyczna wigilijna kutia z ziaren pszenicy, maku, miodu i orzechów to słodki deser zbożowy na wieczerzę wigilijną, zupełnie inny niż makaron z makiem czy makowiec.",
        steps: [
          {
            text: "Opłucz obrane ziarna pszenicy i gotuj je w dużej ilości wody do miękkości z lekkim gryzieniem, co zwykle zajmuje 60 do 90 minut. Jeśli masz czas, namocz ziarna dzień wcześniej, to wyraźnie skróci gotowanie. Potem odcedź i ostudź.",
            tip: "W misce mają się znaleźć całe ziarna, a nie makaron jak w [makaronie z makiem](/pl/rezepte/makaron-z-makiem). Ramę całej wieczerzy daje [menu wigilijne](/pl/blog/menu-wigilijne).",
          },
          {
            text: "Mak niebieski zalej gorącą wodą lub mlekiem, odsącz i jak najdrobniej zmiel lub rozetrzyj. Wymieszaj z miodem lub cukrem, posiekanymi orzechami włoskimi lub migdałami, rodzynkami oraz opcjonalnie odrobiną wanilii lub skórki cytryny, aż powstanie wiążąca, niesucha masa.",
            tip: "Dobry mak na święta często kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Wyczucie mielenia przypomina [technikę makowca](/pl/blog/makowiec-technika), choć tu w centrum jest zboże i mak, a nie drożdżowa rolada.",
          },
          {
            text: "Wymieszaj pszenicę z masą makowo-orzechową, w razie potrzeby dodaj odrobinę mleka lub miodu dla połysku i lepszego wiązania. Na koniec kutia powinna być słodka, makowa i orzechowa, bez goryczy i bez piaszczystej suchości.",
            tip: "Napój do tego dania to osobna sprawa, o niego dba [kompot z suszu](/pl/rezepte/kompot-z-suszu). Gdy brakuje składnika, pomogą [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Schłodź kutię, po kilku godzinach w lodówce często smakuje jeszcze lepiej. Podawaj w miseczkach albo w jednej wspólnej misie, opcjonalnie z dodatkowymi orzechami lub odrobiną miodu na wierzchu. Resztki trzymaj przykryte w lodówce.",
            tip: "Jeśli wolisz rozłożyć słodycz na kilka dni, możesz zamrozić małe porcje i przed podaniem tylko krótko je rozmrozić.",
          },
        ],
        seoTitle: "Kutia przepis | Pszenica mak Wigilia | Alemniam",
        seoDescription:
          "Kutia: pszenica z makiem, miodem i orzechami na Wigilię, jasno osobno od makaronu z makiem i makowca. Dwujęzycznie, z poradami dla diaspory.",
      },
    },
    ingredients: [
      {
        id: "kut-1",
        name: {
          de: "Weizenkörner (geschält / Weizenbeeren)",
          pl: "Pszenica (obrana / ziarna)",
        },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Im Polenladen als geschälte Weizenbeeren oder pszenica erhältlich",
        substitute: {
          de: "Perlgerste funktioniert als Ersatz, ist dann aber ehrlich keine klassische Weizen-Kutia mehr",
          pl: "Pęczak nadaje się jako zamiennik, ale wtedy uczciwie nie jest to już klasyczna kutia z pszenicy",
        },
      },
      {
        id: "kut-2",
        name: {
          de: "Blauer Mohn, gemahlen",
          pl: "Mak niebieski, mielony",
        },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Im Polenladen ist frisch gemahlener Mohn oft die bessere Wahl",
        substitute: {
          de: "Ganze Mohnsamen selbst mahlen und das im Rezept ehrlich vermerken",
          pl: "Całe ziarna maku zmielić samodzielnie i uczciwie to zaznaczyć",
        },
      },
      {
        id: "kut-3",
        name: { de: "Honig", pl: "Miód" },
        amount: 4,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "kut-4",
        name: {
          de: "Walnüsse oder Mandeln, gehackt",
          pl: "Orzechy włoskie lub migdały, posiekane",
        },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "kut-5",
        name: { de: "Rosinen", pl: "Rodzynki" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "kut-6",
        name: {
          de: "Milch oder Wasser (zum Aufquellen / Binden)",
          pl: "Mleko lub woda (do namoczenia / wiązania)",
        },
        amount: 200,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "kut-7",
        name: {
          de: "Vanille oder Zitronenschale (optional)",
          pl: "Wanilia lub skórka cytryny (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "kut-8",
        name: { de: "Prise Salz (Kochwasser)", pl: "Szczypta soli (woda)" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T11:00:00.000Z",
    updatedAt: "2026-07-21T11:00:00.000Z",
  },
  {
    id: "recipe-napoleonka",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-napoleonka/9306475f-0fef-4acc-9daf-a0b3250b17d0.webp",
    prepMinutes: 45,
    cookMinutes: 35,
    servings: 12,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-suess", "category-vegetarisch"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-ersatzprodukte-de",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Napoleonka / Kremówka",
        slug: "napoleonka",
        excerpt:
          "Die hausgemachte Napoleonka, auch Kremówka genannt, besteht aus knusprigen Blätterteigschichten mit dicker Vanillecreme, ganz im Stil eines Millefeuille, und hat weder mit Szarlotka noch mit Sernik oder Wuzetka etwas zu tun.",
        steps: [
          {
            text: "Fertigen oder selbst gemachten Blätterteig auf zwei bis drei Blechen zu dünnen Platten ausrollen und mehrfach mit einer Gabel einstechen, damit er beim Backen nicht zu stark aufgeht. Bei hoher Ofentemperatur goldbraun und knusprig backen, abkühlen lassen und in Rechtecke schneiden.",
            tip: "Hier geht es um Blätterteig mit Creme, keinen Apfelkuchen wie die [Szarlotka](/de/rezepte/szarlotka) und keinen Käsekuchen wie den [Sernik](/de/rezepte/sernik).",
          },
          {
            text: "Für die Vanillecreme die Milch mit Vanille erhitzen. Eigelb, Zucker und Speisestärke glatt verrühren, unter die heiße Milch rühren und unter ständigem Rühren dicklich kochen, dann die Butter unterziehen. Die Creme abdecken und auf lauwarm bis kühl abkühlen lassen, sie soll am Ende streichfähig und nicht flüssig sein.",
            tip: "Vanille und Speisestärke findest du oft im [Polenladen](/de/blog/polenladen-einkaufen) oder im Supermarkt, ehrliche Alternativen listen die [Ersatzprodukte](/de/blog/ersatzprodukte-de). Eine Schoko-Sahne-Torte ist das hier nicht, dafür bleibt die Wuzetka ein eigenes Rezept.",
          },
          {
            text: "Teigplatte und Creme abwechselnd schichten, meist reichen zwei bis drei Teiglagen. Die oberste Schicht mit Puderzucker bestäuben oder dünn glasieren. Mindestens zwei bis drei Stunden kühl stellen, damit sich die Napoleonka später sauber schneiden lässt.",
            tip: "Als ruhiger Abschluss passt sie gut zum [polnischen Sonntagsessen](/de/blog/sonntagsessen-polnisch), auch wenn hier ausschließlich die Napoleonka selbst im Mittelpunkt steht.",
          },
          {
            text: "Mit einem scharfen Messer in Rechtecke schneiden und kalt servieren. Reste abgedeckt im Kühlschrank aufbewahren, der Teig weicht mit der Zeit etwas auf, während der Geschmack erhalten bleibt.",
            tip: "Am saubersten schneidest du, wenn du das Messer zwischendurch kurz unter heißes Wasser hältst und abtrocknest, dann drückt es die Creme nicht seitlich heraus.",
          },
        ],
        seoTitle: "Napoleonka Rezept | Kremówka | Alemniam",
        seoDescription:
          "Napoleonka / Kremówka: Blätterteig mit Vanillecreme, klar getrennt von Szarlotka, Sernik und Wuzetka. Bilingual mit Diaspora-Tipps.",
      },
      pl: {
        title: "Napoleonka / kremówka",
        slug: "napoleonka",
        excerpt:
          "Domowa napoleonka, znana też jako kremówka, to warstwy ciasta francuskiego z gęstym kremem waniliowym w stylu millefeuille, zupełnie inna niż szarlotka, sernik czy wuzetka.",
        steps: [
          {
            text: "Gotowe lub własne ciasto francuskie rozwałkuj na dwie do trzech cienkich blach i nakłuj widelcem w kilku miejscach, żeby zbytnio nie wyrosło podczas pieczenia. Piecz w wysokiej temperaturze na złoto i chrupko, ostudź i pokrój w prostokąty.",
            tip: "Tu liczy się ciasto francuskie z kremem, a nie jabłecznik jak [szarlotka](/pl/rezepte/szarlotka) i nie sernik jak [sernik](/pl/rezepte/sernik).",
          },
          {
            text: "Na krem waniliowy podgrzej mleko z wanilią. Żółtka, cukier i skrobię wymieszaj na gładko, wlej do gorącego mleka i gotuj pod stałym mieszaniem, aż zgęstnieje, na koniec wmieszaj masło. Przykryj krem i ostudź do temperatury smarowności, nie powinien być płynny.",
            tip: "Wanilię i skrobię często znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy) lub w markecie, uczciwe zamienniki opisują [zamienniki składników](/pl/blog/zamienniki-skladnikow). To nie tort czekoladowo-śmietankowy, wuzetka to zupełnie inny przepis.",
          },
          {
            text: "Ułóż na przemian płat ciasta i krem, zwykle wystarczą dwie do trzech warstw ciasta. Wierzch oprósz cukrem pudrem albo lekko polukruj. Chłodź co najmniej dwie do trzech godzin, żeby krojenie wyszło czyste.",
            tip: "Jako spokojne zwieńczenie pasuje do [obiadu niedzielnego](/pl/blog/obiad-niedzielny), choć tutaj w centrum zostaje wyłącznie sama napoleonka.",
          },
          {
            text: "Pokrój ostrym nożem w prostokąty i podawaj na zimno. Resztki trzymaj przykryte w lodówce, ciasto z czasem trochę mięknie, ale smak zostaje.",
            tip: "Najczyściej kroisz, gdy nóż od czasu do czasu zanurzysz w gorącej wodzie i osuszysz, wtedy krem się nie wyciska na boki.",
          },
        ],
        seoTitle: "Napoleonka przepis | Kremówka | Alemniam",
        seoDescription:
          "Napoleonka / kremówka: ciasto francuskie z kremem waniliowym, jasno osobno od szarlotki, sernika i wuzetki. Dwujęzycznie, z poradami dla diaspory.",
      },
    },
    ingredients: [
      {
        id: "nap-1",
        name: {
          de: "Blätterteig (fertig oder selbst)",
          pl: "Ciasto francuskie (gotowe lub własne)",
        },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Aus dem Supermarkt, am besten eine Variante mit reinem Butteranteil",
      },
      {
        id: "nap-2",
        name: { de: "Vollmilch", pl: "Mleko pełne" },
        amount: 700,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "nap-3",
        name: { de: "Eigelb", pl: "Żółtka" },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "nap-4",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 120,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "nap-5",
        name: {
          de: "Speisestärke / Puddingpulver Vanille",
          pl: "Skrobia / budyń waniliowy",
        },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Im Supermarkt oder im Polenladen erhältlich",
      },
      {
        id: "nap-6",
        name: { de: "Butter", pl: "Masło" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "nap-7",
        name: {
          de: "Vanille (Extrakt oder Mark)",
          pl: "Wanilia (ekstrakt lub miąższ)",
        },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "nap-8",
        name: {
          de: "Puderzucker zum Bestäuben",
          pl: "Cukier puder do oprószenia",
        },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-21T11:00:00.000Z",
    updatedAt: "2026-07-21T11:00:00.000Z",
  },
];
