import type { Recipe } from "@/types/content";

/**
 * Wave 13 Paket D — Ostern-Wurst-Cook (1 Rezept).
 * - recipe-biala-kielbasa — Biała kiełbasa kochen/backen (Cook-Primary)
 *
 * Lexikon post-kielbasa-arten bleibt Arten/Qualität-Owner.
 * Unterscheidet sich von Kaszanka (Blutwurst-Cook) und dunkler Grillkiełbasa.
 *
 * Integrator (E): merge into seed aggregator + recipe-articles + related maps.
 * Affiliate: guide-only (no relatedProductIds).
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave13D: Recipe[] = [
  {
    id: "recipe-biala-kielbasa",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-biala-kielbasa/6f6f246e-9e55-42ae-99a6-94384e3bdd66.webp",
    prepMinutes: 10,
    cookMinutes: 35,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-wielkanoc", "occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte", "category-schnell"],
    relatedPostIds: [
      "post-kielbasa-arten",
      "post-wielkanoc",
      "post-zakwas-zurek",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Biała kiełbasa",
        slug: "biala-kielbasa",
        excerpt:
          "Helle, frische Weißwurst schonend gegart, klassisch zu Ostern mit Meerrettich und Senf oder in Scheiben als Einlage für Żurek serviert.",
        steps: [
          {
            text: "Die Biała kiełbasa aus dem Kühlschrank nehmen. Die Hülle prüfen, sie sollte frisch, blassrosa bis grauweiß sein und nicht stark geräuchert oder dunkelbraun wirken. Bei Bedarf in Portionen teilen, ohne die Hülle unnötig aufzuschlitzen.",
            tip: "Einkauf und Qualitätslesen erklärt der Beitrag zum [Polenladen](/de/blog/polenladen-einkaufen). Welche Wurst wofür geeignet ist, steht ausführlich im [Kiełbasa-Arten-Lexikon](/de/blog/kielbasa-arten), hier geht es nur ums Kochen.",
          },
          {
            text: "Einen Topf mit Wasser oder leichter Brühe aufsetzen und knapp unter den Siedepunkt erhitzen, ohne dass es sprudelnd kocht. Optional ein Lorbeerblatt und ein paar Pfefferkörner mitgeben.",
          },
          {
            text: "Die Wurst einlegen und 20 bis 30 Minuten bei kleiner Hitze gar ziehen lassen, bis sie durch ist. Zu starkes Kochen lässt die Hülle platzen und das Fleisch trocken werden.",
            tip: "Als Żurek-Einlage die Wurst separat gar ziehen oder erst spät in die Suppe geben, mehr dazu im Rezept für [Żurek](/de/rezepte/zurek). Die Zakwas-Basis dafür erklärt der [Zakwas-Guide](/de/blog/zakwas-zurek).",
          },
          {
            text: "Für die Ofen-Variante die Wurst bei 180 Grad 15 bis 20 Minuten backen, bis die Oberfläche leicht Farbe annimmt, aber hell bleibt, ganz ohne den Grill-Char einer dunklen Rauchwurst.",
          },
          {
            text: "Heiß mit Meerrettich, Senf und Brot servieren, oder in Scheiben zu [Żurek](/de/rezepte/zurek) geben.",
            tip: "Für den Osterrahmen bleibt der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan) der eigentliche Menü-Artikel, hier geht es nur um das Kochen der Wurst selbst.",
          },
        ],
        seoTitle: "Biała kiełbasa Rezept | Weiße Wurst polnisch | Alemniam",
        seoDescription:
          "Biała kiełbasa kochen oder backen: hell und schonend gegart, bilingual erklärt, als Ergänzung zum Kiełbasa-Arten-Lexikon.",
      },
      pl: {
        title: "Biała kiełbasa",
        slug: "biala-kielbasa",
        excerpt:
          "Świeża biała kiełbasa delikatnie ugotowana, klasycznie na wielkanocnym talerzu z chrzanem i musztardą albo w plastrach jako dodatek do żurku.",
        steps: [
          {
            text: "Wyjmij białą kiełbasę z lodówki. Sprawdź osłonkę, powinna być świeża, bladoróżowa do szarobiałej, a nie mocno wędzona ani ciemnobrązowa. W razie potrzeby podziel na porcje, bez zbędnego nacinania osłonki.",
            tip: "O zakupach i jakości opowiada wpis o [sklepie polskim](/pl/blog/sklep-polski-zakupy). Która kiełbasa do czego pasuje, znajdziesz w [leksykonie rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy), tu chodzi tylko o gotowanie.",
          },
          {
            text: "Zagotuj wodę lub lekki bulion prawie do wrzenia, bez gwałtownego bulgotania. Opcjonalnie dodaj liść laurowy i kilka ziaren pieprzu.",
          },
          {
            text: "Włóż kiełbasę i gotuj 20 do 30 minut na małym ogniu, aż będzie gotowa. Zbyt mocne gotowanie pęka osłonkę i suszy mięso.",
            tip: "Jako dodatek do żurku gotuj kiełbasę osobno albo włóż ją późno do zupy, więcej w przepisie na [żurek](/pl/rezepte/zurek). Zakwas do niego opisuje [przewodnik po zakwasie](/pl/blog/zakwas-na-zurek).",
          },
          {
            text: "W wersji piekarnikowej piecz kiełbasę w 180 stopniach przez 15 do 20 minut, aż powierzchnia lekko się zarumieni, ale zostanie jasna, bez grillowego przypalenia jak przy ciemnej wędzonce.",
          },
          {
            text: "Podawaj gorącą z chrzanem, musztardą i chlebem, albo w plastrach do [żurku](/pl/rezepte/zurek).",
            tip: "Kontekst świąteczny opisuje osobno [menu wielkanocne](/pl/blog/menu-wielkanocne), tu w centrum zostaje tylko gotowanie samej kiełbasy.",
          },
        ],
        seoTitle: "Biała kiełbasa przepis | Gotowanie i pieczenie | Alemniam",
        seoDescription:
          "Biała kiełbasa: gotowanie lub pieczenie, jasna i delikatna. Dwujęzycznie, jako uzupełnienie leksykonu rodzajów kiełbasy.",
      },
    },
    ingredients: [
      {
        id: "bk-1",
        name: {
          de: "Biała kiełbasa (frische Weißwurst, ungeräuchert)",
          pl: "Biała kiełbasa (świeża, niewędzona)",
        },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe:
          "Im Polenladen auf blasse Farbe, Frische und Kühlkette achten, keine dunkle Grill- oder Rauchwurst",
        substitute: {
          de: "Eine gute frische, helle deutsche Bratwurst funktioniert auch, dann aber ehrlich als solche benennen, der Charakter kann milder sein",
          pl: "Dobra świeża jasna kiełbasa niemiecka też się nada, ale trzeba to uczciwie nazwać, smak może być łagodniejszy",
        },
      },
      {
        id: "bk-2",
        name: {
          de: "Wasser oder leichte Brühe zum Garziehen",
          pl: "Woda lub lekki bulion do gotowania",
        },
        amount: 1.5,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "bk-3",
        name: { de: "Lorbeerblatt (optional)", pl: "Liść laurowy (opcjonalnie)" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "bk-4",
        name: {
          de: "Pfeffer ganz (optional)",
          pl: "Pieprz ziarnisty (opcjonalnie)",
        },
        amount: 6,
        unit: { de: "Körner", pl: "ziaren" },
        group: "spices",
      },
      {
        id: "bk-5",
        name: {
          de: "Meerrettich oder Senf zum Servieren",
          pl: "Chrzan lub musztarda do podania",
        },
        amount: 4,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
        storeHintDe: "Chrzan im Polenladen oder Meerrettich im Supermarkt erhältlich",
      },
      {
        id: "bk-6",
        name: {
          de: "Brot zum Servieren",
          pl: "Chleb do podania",
        },
        amount: 4,
        unit: { de: "Scheiben", pl: "kromki" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-21T14:00:00.000Z",
    updatedAt: "2026-07-21T14:00:00.000Z",
  },
];
