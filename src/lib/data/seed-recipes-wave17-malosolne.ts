import type { Recipe } from "@/types/content";

const CAT = [
  "category-eingelegt",
  "category-vegetarisch",
  "category-schnell",
] as const;
const RELATED = [
  "post-kiszenie",
  "post-ferment-glaeser",
  "post-polenladen",
  "post-ersatzprodukte-de",
] as const;

const IMG_OSTRE =
  "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-ogorki-malosolne-ostre/8d85b2d6-3204-4897-95c8-75f9582aba02.webp";
const IMG_MIOD =
  "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-ogorki-malosolne-miod/73217c93-afb6-4a38-8c74-0c8e9ec429f4.webp";
const IMG_DEB =
  "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-ogorki-malosolne-deb/5a4e3524-1fd2-46d1-95e7-70aaed42ac13.webp";

/**
 * Ogórki małosolne family variants (classic lives in seed-recipes-wave17.ts).
 */
export const seedRecipesWave17Malosolne: Recipe[] = [
  {
    id: "recipe-ogorki-malosolne-ostre",
    status: "published",
    coverImage: IMG_OSTRE,
    prepMinutes: 20,
    cookMinutes: 0,
    servings: 6,
    familyId: "family-ogorki-malosolne",
    variantLabel: { de: "Scharf", pl: "ostre" },
    variantImage: IMG_OSTRE,
    regionIds: ["region-malopolska"],
    occasionIds: ["occasion-grill"],
    techniqueIds: ["technique-kiszenie"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED],
    videoUrl: null,
    translations: {
      de: {
        title: "Ogórki małosolne scharf",
        slug: "scharf",
        excerpt:
          "Dieselbe 2-Prozent-Lake, plus Chili und Meerrettich. Hausversion aus dem Süden, nicht Essiggurken.",
        steps: [
          {
            text: "Gurken waschen, Enden anschneiden. Mit Knoblauch, Dill, 1 bis 2 frischen Chilischoten (längs eingeschnitten) und einem Stück Meerrettichwurzel schichten.",
            tip: "Gleicher Kurzferment wie [klassisch](/de/rezepte/ogorki-malosolne/klassisch), nur die Würze ändert sich. Nicht [Ogórki kiszone](/de/rezepte/ogorki-kiszone) und nicht [Ogórki konserwowe](/de/rezepte/ogorki-konserwowe).",
          },
          {
            text: "Lake: 1 l kaltes Wasser plus 20 g unjodiertes Salz (2 Prozent). Vollständig bedecken. 24 bis 48 Stunden bei 18 bis 22 Grad, dann kosten.",
            tip: "Chili macht die Lake schneller aromatisch, die Salzmenge bleibt. Technik: [Kiszenie](/de/blog/kiszenie-guide).",
          },
          {
            text: "In den Kühlschrank, in 2 bis 4 Tagen aufessen. Zu Grillwurst und Brot. Schimmel oder Fäulnisgeruch: Glas verwerfen.",
            tip: "Milder mit [Honig](/de/rezepte/ogorki-malosolne/honig), knackiger mit [Eichenblatt](/de/rezepte/ogorki-malosolne/eichenblatt). Einkauf Chili: Supermarkt, Meerrettich oft im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
        ],
        seoTitle: "Ogórki małosolne scharf | Chili Gurken | Alemniam",
        seoDescription:
          "Scharfe Ogórki małosolne mit Chili und Meerrettich. Bilingual, 2-Prozent-Lake, nicht Essig.",
      },
      pl: {
        title: "Ogórki małosolne ostre",
        slug: "ostre",
        excerpt:
          "Ta sama zalewa 2 procent, plus chili i chrzan. Wersja z południa, nie konserwa octowa.",
        steps: [
          {
            text: "Umyj ogórki, przytnij końce. Ułóż z czosnkiem, koperkiem, 1–2 papryczkami chili (naciętymi) i kawałkiem chrzanu.",
            tip: "Ten sam krótki kis co [klasyczne](/pl/rezepte/ogorki-malosolne/klasyczne), zmienia się tylko ostrość. Nie [kiszone](/pl/rezepte/ogorki-kiszone) i nie [konserwowe](/pl/rezepte/ogorki-konserwowe).",
          },
          {
            text: "Zalewa: 1 l wody plus 20 g soli niejodowanej (2 procent). Przykryj całkowicie. 24–48 h w 18–22 °C, potem spróbuj.",
            tip: "Chili szybciej aromatyzuje zalewę, sól zostaje. Technika: [kiszenie](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Do lodówki, zjedz w 2–4 dni. Do kiełbasy z grilla i chleba. Pleśń albo zgnilizna: wyrzuć słoik.",
            tip: "Łagodniej z [miodem](/pl/rezepte/ogorki-malosolne/miod), bardziej chrupko z [liściem dębu](/pl/rezepte/ogorki-malosolne/lisc-debu). Chrzan często w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
        ],
        seoTitle: "Ogórki małosolne ostre | Chili | Alemniam",
        seoDescription:
          "Ostre ogórki małosolne z chili i chrzanem. Dwujęzycznie, zalewa 2 procent, nie ocet.",
      },
    },
    ingredients: [
      { id: "omo-1", name: { de: "Feste Gurken", pl: "Twarde ogórki" }, amount: 1000, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "omo-2", name: { de: "Kaltes Wasser", pl: "Zimna woda" }, amount: 1000, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "omo-3", name: { de: "Unjodiertes Salz", pl: "Sól niejodowana" }, amount: 20, unit: { de: "g", pl: "g" }, group: "spices", storeHintDe: "Kein Jodsalz" },
      { id: "omo-4", name: { de: "Knoblauch", pl: "Czosnek" }, amount: 5, unit: { de: "Zehen", pl: "ząbki" }, group: "produce" },
      { id: "omo-5", name: { de: "Dill", pl: "Koper" }, amount: 3, unit: { de: "Dolden", pl: "kwiatostany" }, group: "produce" },
      { id: "omo-6", name: { de: "Chilischoten", pl: "Papryczki chili" }, amount: 2, unit: { de: "Stück", pl: "szt." }, group: "produce" },
      { id: "omo-7", name: { de: "Meerrettichwurzel", pl: "Korzeń chrzanu" }, amount: 30, unit: { de: "g", pl: "g" }, group: "produce", storeHintDe: "Polenladen" },
    ],
    createdAt: "2026-08-20T11:00:00.000Z",
    updatedAt: "2026-08-20T11:00:00.000Z",
  },
  {
    id: "recipe-ogorki-malosolne-miod",
    status: "published",
    coverImage: IMG_MIOD,
    prepMinutes: 20,
    cookMinutes: 0,
    servings: 6,
    familyId: "family-ogorki-malosolne",
    variantLabel: { de: "Mit Honig", pl: "z miodem" },
    variantImage: IMG_MIOD,
    regionIds: [],
    occasionIds: ["occasion-grill", "occasion-niedziela"],
    techniqueIds: ["technique-kiszenie"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED],
    videoUrl: null,
    translations: {
      de: {
        title: "Ogórki małosolne mit Honig",
        slug: "honig",
        excerpt:
          "Leicht süß-scharf mit Honig und Senf, immer noch Kurzferment. Kein Glas aus dem Essigregal.",
        steps: [
          {
            text: "Gurken waschen, Enden anschneiden. Mit Knoblauch, Dill und 1 TL Senfkörnern schichten.",
            tip: "Die Basis bleibt [klassisch](/de/rezepte/ogorki-malosolne/klassisch). Honig kommt in die Lake, nicht als Glasur. Technik: [Kiszenie](/de/blog/kiszenie-guide).",
          },
          {
            text: "Lake: 1 l kaltes Wasser, 20 g unjodiertes Salz, 1 EL flüssiger Honig. Gut lösen, vollständig bedecken. 24 bis 48 Stunden bei Zimmertemperatur.",
            tip: "Nur ein Esslöffel Honig, mehr macht die Lake klebrig und unruhig. Danach immer in den Kühlschrank.",
          },
          {
            text: "Kosten, kühlen, in wenigen Tagen essen. Passt zu Aufschnitt und kaltem Braten. Schimmel: verwerfen.",
            tip: "Scharf bleibt bei [Chili](/de/rezepte/ogorki-malosolne/scharf). Essig-Gurken sind [Konserwowe](/de/rezepte/ogorki-konserwowe).",
          },
        ],
        seoTitle: "Ogórki małosolne mit Honig | Süß-sauer kurz | Alemniam",
        seoDescription:
          "Ogórki małosolne mit Honig und Senf. Bilingual, 2-Prozent-Lake, nicht Essigkonserwa.",
      },
      pl: {
        title: "Ogórki małosolne z miodem",
        slug: "miod",
        excerpt:
          "Lekko słodko-ostre z miodem i gorczycą, nadal krótki kis. Nie słoik z półki octowej.",
        steps: [
          {
            text: "Umyj ogórki, przytnij końce. Ułóż z czosnkiem, koperkiem i 1 łyżeczką gorczycy.",
            tip: "Baza zostaje [klasyczna](/pl/rezepte/ogorki-malosolne/klasyczne). Miód idzie do zalewy. Technika: [kiszenie](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Zalewa: 1 l wody, 20 g soli niejodowanej, 1 łyżka płynnego miodu. Rozpuść, zalej całkowicie. 24–48 h w temperaturze pokojowej.",
            tip: "Tylko łyżka miodu, więcej klei zalewę. Potem zawsze lodówka.",
          },
          {
            text: "Skosztuj, schłodź, zjedz w kilka dni. Do wędlin i zimnego pieczystego. Pleśń: wyrzuć.",
            tip: "Ostrost zostaje przy [chili](/pl/rezepte/ogorki-malosolne/ostre). Ocet to [konserwowe](/pl/rezepte/ogorki-konserwowe).",
          },
        ],
        seoTitle: "Ogórki małosolne z miodem | Krótki kis | Alemniam",
        seoDescription:
          "Ogórki małosolne z miodem i gorczycą. Dwujęzycznie, zalewa 2 procent, nie konserwa.",
      },
    },
    ingredients: [
      { id: "omm-1", name: { de: "Feste Gurken", pl: "Twarde ogórki" }, amount: 1000, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "omm-2", name: { de: "Kaltes Wasser", pl: "Zimna woda" }, amount: 1000, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "omm-3", name: { de: "Unjodiertes Salz", pl: "Sól niejodowana" }, amount: 20, unit: { de: "g", pl: "g" }, group: "spices", storeHintDe: "Kein Jodsalz" },
      { id: "omm-4", name: { de: "Flüssiger Honig", pl: "Płynny miód" }, amount: 1, unit: { de: "EL", pl: "łyżka" }, group: "pantry" },
      { id: "omm-5", name: { de: "Knoblauch", pl: "Czosnek" }, amount: 4, unit: { de: "Zehen", pl: "ząbki" }, group: "produce" },
      { id: "omm-6", name: { de: "Dill", pl: "Koper" }, amount: 3, unit: { de: "Dolden", pl: "kwiatostany" }, group: "produce" },
      { id: "omm-7", name: { de: "Senfkörner", pl: "Ziarna gorczycy" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices" },
    ],
    createdAt: "2026-08-20T11:00:00.000Z",
    updatedAt: "2026-08-20T11:00:00.000Z",
  },
  {
    id: "recipe-ogorki-malosolne-deb",
    status: "published",
    coverImage: IMG_DEB,
    prepMinutes: 25,
    cookMinutes: 0,
    servings: 6,
    familyId: "family-ogorki-malosolne",
    variantLabel: { de: "Eichenblatt", pl: "z liściem dębu" },
    variantImage: IMG_DEB,
    regionIds: ["region-wielkopolska"],
    occasionIds: ["occasion-grill"],
    techniqueIds: ["technique-kiszenie"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED],
    videoUrl: null,
    translations: {
      de: {
        title: "Ogórki małosolne mit Eichenblatt",
        slug: "eichenblatt",
        excerpt:
          "Das leise Hausgeheimnis für Biss: ein sauberes Eichen- oder Kirschblatt in der Lake. Immer noch Małosolne, nicht Kiszone.",
        steps: [
          {
            text: "Gurken waschen, Enden anschneiden. Ein gewaschenes, ungespritztes Eichenblatt (oder Kirschblatt, Meerrettichblatt) auf den Glasboden legen, dann Gurken, Knoblauch und Dill fest schichten.",
            tip: "Nur Blätter vom eigenen, sauberen Baum, nie vom Straßenrand. Das ist der Tannin-Trick für den Biss, kein anderes Gericht als [klassisch](/de/rezepte/ogorki-malosolne/klassisch).",
          },
          {
            text: "Lake: 1 l Wasser plus 20 g unjodiertes Salz (2 Prozent). Alles muss unter der Lake bleiben. 24 bis 72 Stunden bei 18 bis 22 Grad.",
            tip: "Blätter ersetzen kein Salz. Technik und Hygiene: [Kiszenie](/de/blog/kiszenie-guide). Gläser: [Fermentiergläser](/de/blog/fermentier-glaeser-kaufberatung).",
          },
          {
            text: "Kosten, kühlen, in wenigen Tagen essen. Blatt vor dem Servieren entfernen. Schimmel oder unbekannte Blätter: Glas weg.",
            tip: "Scharf: [Chili](/de/rezepte/ogorki-malosolne/scharf). Lange Kiszone bleiben bei [Ogórki kiszone](/de/rezepte/ogorki-kiszone).",
          },
        ],
        seoTitle: "Ogórki małosolne mit Eichenblatt | Knackig | Alemniam",
        seoDescription:
          "Małosolne mit Eichenblatt für mehr Biss. Bilingual, 2-Prozent-Lake, nur saubere Blätter.",
      },
      pl: {
        title: "Ogórki małosolne z liściem dębu",
        slug: "lisc-debu",
        excerpt:
          "Cichy domowy sekret chrupkości: czysty liść dębu albo wiśni w zalewie. Nadal małosolne, nie kiszone.",
        steps: [
          {
            text: "Umyj ogórki, przytnij końce. Na dno słoika połóż umyty, niepryskany liść dębu (albo wiśni, chrzanu), potem ogórki, czosnek i koper.",
            tip: "Tylko liście z czystego drzewa, nigdy z pobocza. To trick na chrupkość, nie inne danie niż [klasyczne](/pl/rezepte/ogorki-malosolne/klasyczne).",
          },
          {
            text: "Zalewa: 1 l wody plus 20 g soli niejodowanej (2 procent). Wszystko pod zalewą. 24–72 h w 18–22 °C.",
            tip: "Liść nie zastępuje soli. Technika: [kiszenie](/pl/blog/kiszenie-w-domu). Słoiki: [poradnik](/pl/blog/sloiki-do-kiszenia).",
          },
          {
            text: "Skosztuj, schłodź, zjedz w kilka dni. Liść wyjmij przed podaniem. Pleśń albo nieznany liść: wyrzuć słoik.",
            tip: "Ostrost: [chili](/pl/rezepte/ogorki-malosolne/ostre). Długi kis zostaje przy [ogórkach kiszonych](/pl/rezepte/ogorki-kiszone).",
          },
        ],
        seoTitle: "Ogórki małosolne z liściem dębu | Chrupkie | Alemniam",
        seoDescription:
          "Małosolne z liściem dębu na chrupkość. Dwujęzycznie, zalewa 2 procent, tylko czyste liście.",
      },
    },
    ingredients: [
      { id: "omd-1", name: { de: "Feste Gurken", pl: "Twarde ogórki" }, amount: 1000, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "omd-2", name: { de: "Kaltes Wasser", pl: "Zimna woda" }, amount: 1000, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "omd-3", name: { de: "Unjodiertes Salz", pl: "Sól niejodowana" }, amount: 20, unit: { de: "g", pl: "g" }, group: "spices", storeHintDe: "Kein Jodsalz" },
      { id: "omd-4", name: { de: "Knoblauch", pl: "Czosnek" }, amount: 4, unit: { de: "Zehen", pl: "ząbki" }, group: "produce" },
      { id: "omd-5", name: { de: "Dill", pl: "Koper" }, amount: 3, unit: { de: "Dolden", pl: "kwiatostany" }, group: "produce" },
      { id: "omd-6", name: { de: "Eichen- oder Kirschblatt, ungespritzt", pl: "Liść dębu lub wiśni, niepryskany" }, amount: 1, unit: { de: "Stück", pl: "szt." }, group: "produce", storeHintDe: "Nur vom eigenen, sauberen Baum" },
    ],
    createdAt: "2026-08-20T11:00:00.000Z",
    updatedAt: "2026-08-20T11:00:00.000Z",
  },
];
