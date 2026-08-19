import type { Recipe } from "@/types/content";

/**
 * Wave 9 Paket C — Babka money page (Wielkanoc Hefegugelhupf).
 * Integrator E merges into seed-recipes-wave9 / seed.ts.
 * No new blog pillar; no SEED_VERSION bump here.
 */
export const seedRecipesWave9C: Recipe[] = [
  {
    id: "recipe-babka",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-babka/84d44e7f-75f4-4463-88c9-f32c015c879b.webp",
    prepMinutes: 40,
    cookMinutes: 55,
    servings: 12,
    regionIds: [],
    occasionIds: ["occasion-wielkanoc"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-suess", "category-vegetarisch"],
    relatedPostIds: [
      "post-wielkanoc",
      "post-makowiec-technik",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Babka",
        slug: "babka",
        excerpt:
          "Babka wielkanocna ist der luftige polnische Hefegugelhupf aus der geriffelten Form, der zu Ostern fast in jedem polnischen Haushalt auf dem Tisch steht.",
        steps: [
          {
            text: "Die Hefe in lauwarmer Milch mit etwas Zucker auflösen und etwa 10 Minuten gehen lassen, bis sie schäumt.",
            tip: "Die Milch darf nur lauwarm sein, denn zu heiße Flüssigkeit tötet die Hefe sofort ab. Wie du das richtige Gefühl für Hefeteig entwickelst, zeigt der [Makowiec-Technik](/de/blog/makowiec-technik)-Guide, auch wenn die gerollte Mohnrolle dort ein eigenes Rezept bleibt.",
          },
          {
            text: "Mit Mehl, dem restlichen Zucker, Eiern, weicher Butter, einer Prise Salz sowie Vanille oder Zitronenschale zu einem glatten, elastischen Teig verkneten. Abgedeckt gehen lassen, bis sich das Volumen verdoppelt hat, das dauert etwa 60 bis 90 Minuten.",
            tip: "Je länger und geduldiger der Teig geht, desto lockerer wird später die Krume, denn die Hefe braucht Zeit, um genug Gas für die feine Porung zu bilden.",
          },
          {
            text: "Die Gugelhupf- oder Babka-Form gut fetten und mehlieren, den Teig einfüllen, höchstens zu zwei Dritteln, und noch einmal 20 bis 30 Minuten gehen lassen, bis die Form gut gefüllt wirkt.",
            tip: "Das ist keine gerollte Mohnspirale wie bei [Makowiec](/de/rezepte/makowiec) und keine Quarkmasse wie bei [Sernik](/de/rezepte/sernik), sondern ein eigener Teig in einer eigenen Form.",
          },
          {
            text: "Bei 170 bis 180 Grad, bei Umluft etwas niedriger, goldbraun backen, das dauert ungefähr 45 bis 55 Minuten. Mit einem Holzstäbchen die Mitte prüfen und bei zu dunkler Kruste rechtzeitig Alufolie darüberlegen.",
            tip: "Ein zu heißer Ofen bräunt die Kruste, bevor der Kern durchgebacken ist, deshalb lieber etwas geduldiger bei mittlerer Hitze backen als die Temperatur zu hoch einzustellen.",
          },
          {
            text: "Die Babka etwa 10 Minuten in der Form ruhen lassen, dann stürzen und vollständig abkühlen lassen. Mit Puderzucker oder einer leichten Glasur servieren, oft am [Wielkanoc](/de/blog/wielkanoc-speiseplan)-Tisch.",
            tip: "Frische Hefe und eine passende Form findest du oft günstig im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
        ],
        seoTitle: "Babka Rezept | Babka wielkanocna Hefegugelhupf | Alemniam",
        seoDescription:
          "Babka selbst backen: Hefeteig in der Form, bilingual mit Einkaufstipps für Deutschland und Wielkanoc-Kontext.",
      },
      pl: {
        title: "Babka",
        slug: "babka",
        excerpt:
          "Babka wielkanocna to puszyste polskie ciasto drożdżowe z karbowanej formy, które na Wielkanoc stoi niemal na każdym polskim stole.",
        steps: [
          {
            text: "Rozpuść drożdże w letnim mleku z odrobiną cukru i odstaw na około 10 minut, aż zaczną się pienić.",
            tip: "Mleko musi być tylko letnie, bo zbyt gorące od razu zabija drożdże. Wyczucie ciasta drożdżowego pomaga wyćwiczyć [technika makowca](/pl/blog/makowiec-technika), choć zwijana rolada makowa zostaje tam osobnym przepisem.",
          },
          {
            text: "Zagnieć z mąką, resztą cukru, jajkami, miękkim masłem, szczyptą soli oraz wanilią lub skórką cytryny na gładkie, elastyczne ciasto. Przykryte odstaw, aż podwoi objętość, co zajmuje zwykle 60 do 90 minut.",
            tip: "Im dłużej i cierpliwiej ciasto rośnie, tym bardziej puszysty miękisz wyjdzie później, bo drożdże potrzebują czasu, żeby wytworzyć wystarczająco gazu na drobne pory.",
          },
          {
            text: "Formę babkową lub keksową dobrze natłuść i oprósz mąką, włóż ciasto maksymalnie do dwóch trzecich wysokości i odczekaj 20 do 30 minut drugiego wyrastania.",
            tip: "To nie zwijana spirala makowa jak w [makowcu](/pl/rezepte/makowiec) ani masa twarogowa jak w [serniku](/pl/rezepte/sernik), tylko własne ciasto we własnej formie.",
          },
          {
            text: "Piecz w 170 do 180 stopni, przy termoobiegu nieco niżej, na złoty kolor, co zajmuje około 45 do 55 minut. Sprawdź środek patyczkiem, a przy zbyt ciemnej skórce w porę przykryj folią aluminiową.",
            tip: "Zbyt gorący piekarnik rumieni skórkę, zanim środek się dopiecze, dlatego lepiej piec cierpliwiej w średniej temperaturze niż ustawiać za wysoką.",
          },
          {
            text: "Odstaw babkę na około 10 minut w formie, potem wyjmij i całkowicie ostudź. Posyp cukrem pudrem lub polukruj lekko, często przy [menu wielkanocnym](/pl/blog/menu-wielkanocne).",
            tip: "Świeże drożdże i pasującą formę często kupisz taniej w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
        ],
        seoTitle: "Babka przepis | Babka wielkanocna z formy | Alemniam",
        seoDescription:
          "Babka w domu: ciasto drożdżowe w formie, dwujęzycznie z zakupami w Niemczech i kontekstem Wielkanocy.",
      },
    },
    ingredients: [
      {
        id: "bk-1",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 450,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "bk-2",
        name: { de: "Milch", pl: "Mleko" },
        amount: 180,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "bk-3",
        name: { de: "Frischhefe", pl: "Drożdże świeże" },
        amount: 25,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "oder Trockenhefe nach Packung",
      },
      {
        id: "bk-4",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "bk-5",
        name: { de: "Eier", pl: "Jajka" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "bk-6",
        name: { de: "Butter (weich)", pl: "Masło (miękkie)" },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "bk-7",
        name: { de: "Vanillezucker oder Vanille", pl: "Cukier waniliowy / wanilia" },
        amount: 1,
        unit: { de: "Päckchen", pl: "opak." },
        group: "pantry",
      },
      {
        id: "bk-8",
        name: {
          de: "Abrieb einer Bio-Zitrone (optional)",
          pl: "Skórka z cytryny bio (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "bk-9",
        name: { de: "Puderzucker zum Bestäuben", pl: "Cukier puder do posypania" },
        amount: 30,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "bk-10",
        name: {
          de: "Butter/Mehl für die Form",
          pl: "Masło/mąka do formy",
        },
        amount: 1,
        unit: { de: "EL", pl: "łyżka" },
        group: "pantry",
        storeHintDe: "Gugelhupf- oder Babka-Form gut vorbereiten",
      },
    ],
    createdAt: "2026-07-20T22:00:00.000Z",
    updatedAt: "2026-07-20T22:00:00.000Z",
  },
];
