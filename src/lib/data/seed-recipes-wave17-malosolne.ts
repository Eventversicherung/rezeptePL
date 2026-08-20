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
          "Die scharfe Linie nutzt dieselbe milde 2-Prozent-Lake wie die klassischen Ogórki małosolne, bringt aber mit frischen Chilischoten und einem Stück Meerrettich spürbare Schärfe in die kurze Gärzeit, ganz ohne einen Tropfen Essig.",
        steps: [
          {
            text: "Frische, feste Gurken waschen und die Enden anschneiden, dann mit Knoblauch, Dill, ein bis zwei längs eingeschnittenen frischen Chilischoten und einem Stück Meerrettichwurzel in ein großes Glas schichten.",
            tip: "Das ist derselbe kurze Ferment wie bei der [klassischen Version](/de/rezepte/ogorki-malosolne/klassisch), nur die Würze ändert sich, mit den echten [Ogórki kiszone](/de/rezepte/ogorki-kiszone) oder den essiggesäuerten [Ogórki konserwowe](/de/rezepte/ogorki-konserwowe) hat das nichts zu tun.",
          },
          {
            text: "Für die Lake 1 Liter kaltes Wasser mit 20 g unjodiertem Salz verrühren, das entspricht etwa 2 Prozent, die Gurken damit vollständig bedecken und bei 18 bis 22 Grad 24 bis 48 Stunden stehen lassen, bevor du zum ersten Mal kostest.",
            tip: "Chili und Meerrettich machen die Lake schneller aromatisch, an der Salzmenge selbst ändert sich dabei nichts, mehr zur Technik erklärt der [Kiszenie-Guide](/de/blog/kiszenie-guide).",
          },
          {
            text: "Danach in den Kühlschrank stellen und innerhalb von zwei bis vier Tagen aufessen, am besten zu Grillwurst und frischem Brot, bei Schimmel oder fauligem Geruch gehört das ganze Glas in den Müll.",
            tip: "Wer es milder mag, findet die Linie mit [Honig](/de/rezepte/ogorki-malosolne/honig), für mehr Biss sorgt die Linie mit [Eichenblatt](/de/rezepte/ogorki-malosolne/eichenblatt), frische Chilischoten gibt es im Supermarkt, Meerrettichwurzel oft günstiger im [Polenladen](/de/blog/polenladen-einkaufen).",
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
          "Ostry wariant korzysta z tej samej łagodnej zalewy 2 procent co klasyczne ogórki małosolne, ale świeże chili i kawałek chrzanu wprowadzają wyraźną ostrość w krótkim czasie kiszenia, bez odrobiny octu.",
        steps: [
          {
            text: "Umyj twarde ogórki i przytnij końce, potem ułóż je w słoju z czosnkiem, koperkiem, jedną lub dwiema naciętymi wzdłuż papryczkami chili i kawałkiem korzenia chrzanu.",
            tip: "To ten sam krótki kis co w [wersji klasycznej](/pl/rezepte/ogorki-malosolne/klasyczne), zmienia się tylko przyprawa, z prawdziwymi [ogórkami kiszonymi](/pl/rezepte/ogorki-kiszone) czy octowymi [ogórkami konserwowymi](/pl/rezepte/ogorki-konserwowe) to nie ma nic wspólnego.",
          },
          {
            text: "Na zalewę wymieszaj 1 litr chłodnej wody z 20 g soli niejodowanej, co daje około 2 procent, przykryj ogórki całkowicie i zostaw w temperaturze 18 do 22 stopni na 24 do 48 godzin, zanim po raz pierwszy spróbujesz.",
            tip: "Chili i chrzan szybciej aromatyzują zalewę, sama ilość soli się nie zmienia, więcej o technice pisze [poradnik o kiszeniu](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Potem przenieś słoik do lodówki i zjedz ogórki w ciągu dwóch do czterech dni, najlepiej do kiełbasy z grilla i świeżego chleba, a przy pleśni lub nieprzyjemnym zapachu wyrzuć cały słoik.",
            tip: "Kto woli łagodniej, znajdzie wersję z [miodem](/pl/rezepte/ogorki-malosolne/miod), kto chce więcej chrupkości, wersję z [liściem dębu](/pl/rezepte/ogorki-malosolne/lisc-debu), świeże chili kupisz w markecie, a chrzan często taniej w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
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
          "Die Linie mit Honig rundet dieselbe kurze Gärzeit mit einem Löffel Honig und Senfkörnern ab, dadurch wird die Säure milder und runder, ohne dass daraus ein Essigglas wird.",
        steps: [
          {
            text: "Frische, feste Gurken waschen und die Enden anschneiden, dann mit Knoblauch, Dill und einem Teelöffel Senfkörnern in ein großes Glas schichten.",
            tip: "Die Basis bleibt genau die der [klassischen Version](/de/rezepte/ogorki-malosolne/klassisch), der Honig kommt in die Lake und nicht als Glasur über die Gurken, mehr zur Technik erklärt der [Kiszenie-Guide](/de/blog/kiszenie-guide).",
          },
          {
            text: "Für die Lake 1 Liter kaltes Wasser mit 20 g unjodiertem Salz und 1 Esslöffel flüssigem Honig gut verrühren, bis sich alles löst, die Gurken vollständig damit bedecken und 24 bis 48 Stunden bei Zimmertemperatur stehen lassen.",
            tip: "Ein Esslöffel Honig reicht völlig, mehr macht die Lake klebrig und lässt sie unruhiger gären, danach gehört das Glas in jedem Fall in den Kühlschrank.",
          },
          {
            text: "Kosten, kühlen und innerhalb von wenigen Tagen aufessen, am besten zu kaltem Aufschnitt oder Braten, bei Schimmel gehört das ganze Glas in den Müll.",
            tip: "Wer es lieber scharf mag, findet die Linie mit [Chili](/de/rezepte/ogorki-malosolne/scharf), die essiggesäuerten Verwandten heißen [Ogórki konserwowe](/de/rezepte/ogorki-konserwowe).",
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
          "Wariant z miodem łagodzi tę samą krótką fermentację łyżką miodu i gorczycą, dzięki czemu kwas robi się bardziej okrągły, a ogórki wciąż nie mają nic wspólnego z octową konserwą.",
        steps: [
          {
            text: "Umyj twarde ogórki i przytnij końce, potem ułóż je w słoju z czosnkiem, koperkiem i łyżeczką ziaren gorczycy.",
            tip: "Baza zostaje taka jak w [wersji klasycznej](/pl/rezepte/ogorki-malosolne/klasyczne), miód trafia do zalewy, a nie na wierzch ogórków, więcej o technice pisze [poradnik o kiszeniu](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Na zalewę rozpuść w 1 litrze chłodnej wody 20 g soli niejodowanej i 1 łyżkę płynnego miodu, przykryj ogórki całkowicie i zostaw je na 24 do 48 godzin w temperaturze pokojowej.",
            tip: "Jedna łyżka miodu w zupełności wystarczy, więcej skleiłoby zalewę i sprawiło, że fermentacja stanie się mniej przewidywalna, potem słoik zawsze trafia do lodówki.",
          },
          {
            text: "Skosztuj, schłodź i zjedz w ciągu kilku dni, najlepiej do wędlin albo zimnego pieczystego, a przy pleśni wyrzuć cały słoik.",
            tip: "Kto lubi ostro, znajdzie wariant z [chili](/pl/rezepte/ogorki-malosolne/ostre), octowym krewnym jest [konserwa](/pl/rezepte/ogorki-konserwowe).",
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
          "Ein sauberes Eichenblatt in der Lake liefert dieselben Gerbstoffe wie bei den lange gegorenen Kiszone und macht die Gurken bei gleicher kurzer Gärzeit spürbar knackiger, ganz ohne zusätzliches Salz oder Essig.",
        steps: [
          {
            text: "Frische, feste Gurken waschen und die Enden anschneiden, ein gewaschenes, ungespritztes Eichenblatt, ersatzweise ein Kirsch- oder Meerrettichblatt, auf den Glasboden legen und Gurken, Knoblauch und Dill darauf fest schichten.",
            tip: "Verwende nur Blätter von einem eigenen, sauberen Baum und nie vom Straßenrand, denn die enthaltenen Gerbstoffe sind derselbe Trick, der auch bei den [Ogórki kiszone](/de/rezepte/ogorki-kiszone) für Biss sorgt, an der [klassischen Version](/de/rezepte/ogorki-malosolne/klassisch) ändert das sonst nichts.",
          },
          {
            text: "Für die Lake 1 Liter kaltes Wasser mit 20 g unjodiertem Salz verrühren, das entspricht etwa 2 Prozent, alles muss vollständig unter der Lake bleiben, und bei 18 bis 22 Grad 24 bis 72 Stunden gären lassen.",
            tip: "Das Blatt ersetzt kein Salz, es hält die Gurken nur fester, mehr zur Hygiene und Technik erklärt der [Kiszenie-Guide](/de/blog/kiszenie-guide), passende Gläser zeigt die [Kaufberatung für Fermentiergläser](/de/blog/fermentier-glaeser-kaufberatung).",
          },
          {
            text: "Kosten, kühlen, das Blatt vor dem Servieren entfernen und innerhalb von wenigen Tagen aufessen, bei Schimmel oder einem unbekannten Blatt gehört das ganze Glas in den Müll.",
            tip: "Für Schärfe sorgt die Linie mit [Chili](/de/rezepte/ogorki-malosolne/scharf), wer stattdessen wochenlang haltbare Gurken für den Winter sucht, findet sie bei den [Ogórki kiszone](/de/rezepte/ogorki-kiszone).",
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
          "Czysty liść dębu w zalewie wnosi te same garbniki co przy długo kiszonych ogórkach i przy tej samej krótkiej fermentacji daje wyraźnie więcej chrupkości, bez dodatkowej soli czy octu.",
        steps: [
          {
            text: "Umyj twarde ogórki i przytnij końce, na dno słoika połóż umyty, niepryskany liść dębu, zamiennie liść wiśni albo chrzanu, a na niego ułóż ciasno ogórki, czosnek i koperek.",
            tip: "Używaj tylko liści z własnego, czystego drzewa, nigdy z pobocza drogi, bo te same garbniki dają chrupkość również przy [ogórkach kiszonych](/pl/rezepte/ogorki-kiszone), do [wersji klasycznej](/pl/rezepte/ogorki-malosolne/klasyczne) nic więcej się nie zmienia.",
          },
          {
            text: "Na zalewę wymieszaj 1 litr chłodnej wody z 20 g soli niejodowanej, co daje około 2 procent, wszystko musi zostać całkowicie pod zalewą, i kiś w temperaturze 18 do 22 stopni od 24 do 72 godzin.",
            tip: "Liść nie zastępuje soli, tylko dodatkowo utrzymuje ogórki w formie, więcej o technice i higienie pisze [poradnik o kiszeniu](/pl/blog/kiszenie-w-domu), dobre słoiki opisuje [poradnik o słoikach do kiszenia](/pl/blog/sloiki-do-kiszenia).",
          },
          {
            text: "Skosztuj, schłodź, wyjmij liść przed podaniem i zjedz ogórki w ciągu kilku dni, a przy pleśni albo nieznanym liściu wyrzuć cały słoik.",
            tip: "Ostrość znajdziesz w wariancie z [chili](/pl/rezepte/ogorki-malosolne/ostre), kto szuka trwałych na całą zimę, sięgnie po [ogórki kiszone](/pl/rezepte/ogorki-kiszone).",
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
