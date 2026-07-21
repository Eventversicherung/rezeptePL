import type { Recipe } from "@/types/content";

/**
 * Wave 13 Paket D — Ostern-Wurst-Cook (1 Rezept).
 * - recipe-biala-kielbasa — Biała kiełbasa kochen/backen (Cook-Primary)
 *
 * Lexikon post-kielbasa-arten bleibt Arten/Qualität-Owner.
 * ≠ Kaszanka (Blutwurst-Cook) ≠ dunkle Grillkiełbasa-Stock.
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
      "https://images.unsplash.com/photo-1675619448864-4b46c66e7212?w=1600&q=80",
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
          "Helle frische Weißwurst schonend garen — Ostern-Teller mit Meerrettich/Senf oder Einlage für Żurek. Rezept; Arten bleiben im Kiełbasa-Lexikon.",
        steps: [
          {
            text: "Biała kiełbasa aus dem Kühlschrank nehmen. Hülle prüfen: frisch, blassrosa bis grauweiß, nicht stark geräuchert oder dunkelbraun. Bei Bedarf in Portionen teilen, ohne die Hülle unnötig aufzuschlitzen.",
            tip: "Einkauf und Qualitätslesen: [Polenladen](/de/blog/polenladen-einkaufen). Welche Wurst wohin gehört, bleibt im [Kiełbasa-Arten-Lexikon](/de/blog/kielbasa-arten) — hier nur Cook.",
          },
          {
            text: "Einen Topf mit Wasser (oder leichter Brühe) aufsetzen, bis knapp unter dem Siedepunkt erhitzen — nicht sprudelnd kochen. Optional Lorbeer und ein paar Pfefferkörner mitgeben.",
          },
          {
            text: "Wurst einlegen und 20–30 Minuten bei kleiner Hitze garziehen, bis sie durch ist. Zu starkes Kochen lässt die Hülle platzen und das Fleisch trocken werden.",
            tip: "Als Żurek-Einlage: Wurst separat garziehen oder spät in die Suppe — siehe [Żurek](/de/rezepte/zurek). Zakwas-Basis bleibt beim [Zakwas-Guide](/de/blog/zakwas-zurek).",
          },
          {
            text: "Optional Ofen-Variante: bei 180 °C 15–20 Minuten backen, bis die Oberfläche leicht Farbe hat, aber hell bleibt — kein Grill-Char wie dunkle Rauchwurst.",
          },
          {
            text: "Heiß mit Meerrettich, Senf und Brot servieren, oder in Scheiben zu [Żurek](/de/rezepte/zurek). Menü-Kontext Ostern: [Wielkanoc Speiseplan](/de/blog/wielkanoc-speiseplan) — Speiseplan bleibt Menü-Artikel.",
          },
        ],
        seoTitle: "Biała kiełbasa Rezept | Weiße Wurst polnisch | Alemniam",
        seoDescription:
          "Biała kiełbasa kochen oder backen — hell, schonend, bilingual. Rezept neben dem Kiełbasa-Arten-Lexikon.",
      },
      pl: {
        title: "Biała kiełbasa",
        slug: "biala-kielbasa",
        excerpt:
          "Świeża biała kiełbasa delikatnie ugotowana — talerz wielkanocny z chrzanem/musztardą albo dodatek do żurku. Rezept; rodzaje zostają w leksykonie kiełbasy.",
        steps: [
          {
            text: "Wyjmij białą kiełbasę z lodówki. Sprawdź osłonkę: świeża, bladoróżowa do szarobiałej, nie mocno wędzona ani ciemnobrązowa. W razie potrzeby podziel na porcje, bez zbędnego nacinania osłonki.",
            tip: "Zakupy i jakość: [sklep polski](/pl/blog/sklep-polski-zakupy). Która kiełbasa gdzie pasuje, zostaje w [leksykonie rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy) — tu tylko gotowanie.",
          },
          {
            text: "Zagotuj wodę (lub lekki bulion) prawie do wrzenia — bez gwałtownego bulgotania. Opcjonalnie liść laurowy i kilka ziaren pieprzu.",
          },
          {
            text: "Włóż kiełbasę i gotuj 20–30 minut na małym ogniu, aż będzie gotowa. Zbyt mocne gotowanie pęka osłonkę i suszy mięso.",
            tip: "Jako dodatek do żurku: gotuj osobno albo włóż późno — zobacz [żurek](/pl/rezepte/zurek). Zakwas zostaje w [przewodniku po zakwasie](/pl/blog/zakwas-na-zurek).",
          },
          {
            text: "Opcja piekarnik: 180 °C przez 15–20 minut, aż powierzchnia lekko się zarumieni, ale zostanie jasna — bez grillowego char jak ciemna wędzonka.",
          },
          {
            text: "Podawaj gorącą z chrzanem, musztardą i chlebem albo w plastrach do [żurku](/pl/rezepte/zurek). Kontekst świąt: [menu wielkanocne](/pl/blog/menu-wielkanocne) — plan menu zostaje artykułem o okazji.",
          },
        ],
        seoTitle: "Biała kiełbasa przepis | Gotowanie i pieczenie | Alemniam",
        seoDescription:
          "Biała kiełbasa — gotowanie lub pieczenie, jasna i delikatna. Rezept obok leksykonu rodzajów kiełbasy.",
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
          "Polenladen — blass, frisch, Kühlkette; nicht dunkle Grill-/Rauchwurst",
        substitute: {
          de: "Gute frische DE-Bratwurst hell — ehrlich benennen; Charakter kann milder sein",
          pl: "Dobra świeża jasna kiełbasa DE — nazwać uczciwie; smak może być łagodniejszy",
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
        storeHintDe: "Polenladen Chrzan oder Supermarkt-Meerrettich",
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
