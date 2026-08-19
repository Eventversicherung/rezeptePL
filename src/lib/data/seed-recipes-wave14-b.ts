import type { Recipe } from "@/types/content";

/**
 * Wave 14 Paket B — Ostern-Beilagen (Jajka faszerowane + Ćwikła).
 * Isolated for Integrator E: do not import into seed.ts until merge.
 * Affiliate: guide-only (no relatedProductIds / no catalog recipeIds).
 * No new blog pillar.
 * Ownership:
 * - Jajka faszerowane ≠ Sałatka jarzynowa ≠ Mizeria ≠ Pasztet
 * - Ćwikła ≠ Buraczki (warm) ≠ Barszcz ≠ Botwinka ≠ Sałatka
 * Wielkanoc Speiseplan bleibt Anlass-Owner.
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave14B: Recipe[] = [
  {
    id: "recipe-jajka-faszerowane",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-jajka-faszerowane/4fb7ceb9-5d01-4710-8965-9cfe99fc9f57.webp",
    prepMinutes: 25,
    cookMinutes: 12,
    servings: 6,
    regionIds: [],
    occasionIds: ["occasion-wielkanoc", "occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-vegetarisch", "category-schnell"],
    relatedPostIds: [
      "post-wielkanoc",
      "post-sonntagsessen",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Jajka faszerowane",
        slug: "jajka-faszerowane",
        excerpt:
          "Gefüllte Eier mit einer cremigen Eigelb-Mayo-Schnittlauch-Füllung, ein Klassiker auf dem Ostern-Buffet, klar zu unterscheiden von Sałatka jarzynowa und von Mizeria.",
        steps: [
          {
            text: "Eier in reichlich Wasser hart kochen (ca. 9–11 Minuten ab Siedebeginn), abschrecken, schälen. Der Länge nach halbieren; Eigelb vorsichtig herauslösen und in eine Schüssel geben. Eiweiße auf einer Platte bereitlegen.",
            tip: "Hier geht es um gefüllte Eihälften, nicht um einen Mayo-Gemüsesalat wie [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) und auch nicht um einen Gurkensalat wie [Mizeria](/de/rezepte/mizeria).",
          },
          {
            text: "Eigelb mit Mayo, fein geschnittenem Schnittlauch, einer Prise Salz und Pfeffer zu einer cremigen, streichfähigen Masse verrühren. Optional ein Tropfen Senf, der aber nicht dominieren sollte. Die Masse darf glänzen, sollte aber nicht tropfen.",
            tip: "Gute Mayonnaise und frischen Schnittlauch findest du oft im [Polenladen](/de/blog/polenladen-einkaufen) oder im Supermarkt, Alternativen listet [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
          {
            text: "Füllung mit Löffel oder Sterntülle in die Eiweiß-Hälften füllen. Mit etwas Schnittlauch oder Paprika bestreuen. Mindestens 30 Minuten kühlen, damit die Masse setzt.",
            tip: "Den Menürahmen für Ostern liefert der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan), hier geht es nur um das Rezept selbst.",
          },
          {
            text: "Kalt als Buffet- oder Vorspeisenplatte servieren. Auf der kalten Platte stehen sie oft neben [Biała kiełbasa](/de/rezepte/biala-kielbasa) und [Pasztet](/de/rezepte/pasztet), im Mittelpunkt bleiben aber die gefüllten Eier. Reste abgedeckt im Kühlschrank aufbewahren und wegen der Mayonnaise nicht zu lange draußen stehen lassen.",
            tip: "Das Sonntagsteller-Gefühl passt gut zum [polnischen Sonntagsessen](/de/blog/sonntagsessen-polnisch), am besten schmecken die Eier aber noch am selben Tag, solange die Füllung frisch und cremig ist.",
          },
        ],
        seoTitle: "Jajka faszerowane Rezept | Gefüllte Eier polnisch | Alemniam",
        seoDescription:
          "Jajka faszerowane mit Eigelb-Mayo-Schnittlauch-Füllung fürs Ostern-Buffet. Bilingual, klar getrennt von Sałatka und Mizeria.",
      },
      pl: {
        title: "Jajka faszerowane",
        slug: "jajka-faszerowane",
        excerpt:
          "Jajka faszerowane z kremową masą z żółtka, majonezu i szczypiorku, klasyk wielkanocnego bufetu, wyraźnie inny niż sałatka jarzynowa i mizeria.",
        steps: [
          {
            text: "Jajka ugotuj na twardo (ok. 9–11 minut od wrzenia), ostudź, obierz. Przekrój wzdłuż; żółtka ostrożnie wyjmij do miski. Białka ułóż na półmisku.",
            tip: "To faszerowane połówki jajek, a nie majonezowa sałatka jak [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa) ani ogórkowa jak [mizeria](/pl/rezepte/mizeria).",
          },
          {
            text: "Rozetrzyj żółtka z majonezem, drobno pokrojonym szczypiorkiem, szczyptą soli i pieprzu na kremową, smarowną masę. Opcjonalnie dodaj odrobinę musztardy, która nie powinna dominować. Masa ma błyszczeć, ale nie ciec.",
            tip: "Dobry majonez i świeży szczypiorek często kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy) lub markecie, zamienniki opisuje wpis o [zamiennikach składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Wypełnij białka łyżeczką lub rękawem cukierniczym. Posyp szczypiorkiem lub papryką. Chłodź co najmniej 30 minut, aż masa się ułoży.",
            tip: "Ramę świątecznego stołu daje [menu wielkanocne](/pl/blog/menu-wielkanocne), tu chodzi wyłącznie o sam przepis.",
          },
          {
            text: "Podawaj na zimno jako półmisek bufetowy lub przystawkę. Na zimnej półce stoją często obok [białej kiełbasy](/pl/rezepte/biala-kielbasa) i [pasztetu](/pl/rezepte/pasztet), ale w centrum zostają faszerowane jajka. Resztki trzymaj przykryte w lodówce i nie zostawiaj ich zbyt długo na cieplejszym stole ze względu na majonez.",
            tip: "Nastrój niedzielnego stołu pasuje do [obiadu niedzielnego](/pl/blog/obiad-niedzielny), najlepiej smakują jednak jeszcze tego samego dnia, gdy farsz jest świeży i kremowy.",
          },
        ],
        seoTitle: "Jajka faszerowane przepis | Żółtko majonez szczypiorek | Alemniam",
        seoDescription:
          "Jajka faszerowane z żółtkiem, majonezem i szczypiorkiem na Wielkanoc. Dwujęzycznie, jasno osobno od sałatki i mizerii.",
      },
    },
    ingredients: [
      {
        id: "jaj-1",
        name: { de: "Eier (Größe M/L)", pl: "Jajka (rozmiar M/L)" },
        amount: 8,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "jaj-2",
        name: { de: "Mayonnaise", pl: "Majonez" },
        amount: 4,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
        storeHintDe: "Im Supermarkt oder Polenladen auf gute Qualität achten",
        substitute: {
          de: "Teilweise griechischer Joghurt ergibt eine leichtere Variante, die im Rezept ehrlich benannt werden sollte",
          pl: "Częściowo jogurt grecki daje lżejszy wariant, warto to uczciwie napisać",
        },
      },
      {
        id: "jaj-3",
        name: {
          de: "Schnittlauch, fein geschnitten",
          pl: "Szczypiorek, drobno pokrojony",
        },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "produce",
      },
      {
        id: "jaj-4",
        name: { de: "Senf (optional)", pl: "Musztarda (opcjonalnie)" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "pantry",
      },
      {
        id: "jaj-5",
        name: { de: "Salz", pl: "Sól" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
      {
        id: "jaj-6",
        name: { de: "Schwarzer Pfeffer", pl: "Pieprz czarny" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
      {
        id: "jaj-7",
        name: {
          de: "Paprika edelsüß zum Bestreuen (optional)",
          pl: "Papryka słodka do oprószenia (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
  {
    id: "recipe-cwikla",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-cwikla/6ae28221-2f69-4a14-bf3f-8e83eac61d4c.webp",
    prepMinutes: 20,
    cookMinutes: 45,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-wielkanoc", "occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-vegetarisch", "category-schnell", "category-eingelegt"],
    relatedPostIds: [
      "post-wielkanoc",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Ćwikła",
        slug: "cwikla",
        excerpt:
          "Kalte Ćwikła aus geriebener Roter Bete und Meerrettich, ein scharfer Relish zu Ostern, klar zu unterscheiden von den warmen Buraczki, von Barszcz und von Botwinka.",
        steps: [
          {
            text: "Rote Bete waschen und in Salzwasser weich kochen, oder fertig gekochte, vakuumierte Rote Bete verwenden. Abkühlen lassen, schälen und grob bis mittelfein reiben, keine Würfel und kein Püree.",
            tip: "Das ist ein kalter Relish, keine warme Beilage wie [Buraczki](/de/rezepte/buraczki) und keine Suppe wie [Barszcz](/de/rezepte/barszcz-czerwony) oder [Botwinka](/de/rezepte/botwinka).",
          },
          {
            text: "Geriebene Bete mit geriebenem Meerrettich (frisch oder aus dem Glas), etwas Essig oder Zitronensaft, einer Prise Zucker und Salz vermengen. Das Ergebnis sollte scharf, süß und säuerlich schmecken, aber nicht wässrig sein. Bei Bedarf noch etwas Meerrettich nachziehen.",
            tip: "Meerrettich und gute Rote Bete findest du oft im [Polenladen](/de/blog/polenladen-einkaufen), Alternativen dazu listet [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
          {
            text: "Mindestens 1–2 Stunden (besser über Nacht) kalt ziehen lassen, damit sich Schärfe und Farbe verbinden. Vor dem Servieren umrühren und nachwürzen.",
            tip: "Den Menürahmen für Ostern liefert der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan).",
          },
          {
            text: "Kalt in Schüssel oder Glas servieren, zu Wurst, [Pasztet](/de/rezepte/pasztet), Ei und Brot. Klassisch steht sie neben [Biała kiełbasa](/de/rezepte/biala-kielbasa). Hält einige Tage gekühlt, die Rote Bete färbt kräftig, Handschuhe beim Anrichten sind daher praktisch.",
            tip: "Wer Flecken vermeiden möchte, arbeitet am besten mit Einweghandschuhen, denn Rote-Bete-Saft lässt sich aus hellen Textilien kaum wieder herausbekommen.",
          },
        ],
        seoTitle: "Ćwikła Rezept | Rote Bete Meerrettich | Alemniam",
        seoDescription:
          "Ćwikła aus geriebener Roter Bete mit Meerrettich, kalt serviert. Bilingual, klar getrennt von Buraczki, Barszcz und Botwinka.",
      },
      pl: {
        title: "Ćwikła",
        slug: "cwikla",
        excerpt:
          "Zimna ćwikła z tartego buraka i chrzanu, ostry dodatek wielkanocny, wyraźnie inny niż ciepłe buraczki, barszcz i botwinka.",
        steps: [
          {
            text: "Ugotuj buraki w osolonej wodzie do miękkości, albo użyj gotowych, ugotowanych buraków. Ostudź, obierz i zetrzyj na tarce o grubych lub średnich oczkach, bez kostek i bez puree.",
            tip: "To zimny dodatek, a nie ciepła surówka jak [buraczki](/pl/rezepte/buraczki) ani zupa jak [barszcz](/pl/rezepte/barszcz-czerwony) czy [botwinka](/pl/rezepte/botwinka).",
          },
          {
            text: "Wymieszaj tarty burak ze startym chrzanem (świeżym lub ze słoika), odrobiną octu lub soku z cytryny, szczyptą cukru i soli. Smak powinien być ostry, słodki i kwaśny, ale nie wodnisty. W razie potrzeby dodaj więcej chrzanu.",
            tip: "Chrzan i dobre buraki często kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), zamienniki opisuje wpis o [zamiennikach składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Odstaw na zimno na 1–2 godziny (lepiej na noc), żeby ostrość i kolor się połączyły. Przed podaniem wymieszaj i dopraw.",
            tip: "Ramę świątecznego menu daje [menu wielkanocne](/pl/blog/menu-wielkanocne).",
          },
          {
            text: "Podawaj na zimno w misce lub słoiku, do kiełbasy, [pasztetu](/pl/rezepte/pasztet), jaj i chleba. Klasycznie stoi obok [białej kiełbasy](/pl/rezepte/biala-kielbasa). Trzyma kilka dni w lodówce, mocno barwi, więc rękawiczki przy przygotowaniu bywają przydatne.",
            tip: "Jeśli zależy ci na czystych dłoniach i obrusie, pracuj w rękawiczkach jednorazowych, bo sok z buraków trudno usunąć z jasnych tkanin.",
          },
        ],
        seoTitle: "Ćwikła przepis | Burak chrzan | Alemniam",
        seoDescription:
          "Ćwikła z tartego buraka z chrzanem, podawana na zimno. Dwujęzycznie, jasno osobno od buraczków, barszczu i botwinki.",
      },
    },
    ingredients: [
      {
        id: "cwk-1",
        name: {
          de: "Rote Bete (roh zum Kochen oder vakuumiert gekocht)",
          pl: "Buraki (surowe do gotowania lub gotowane próżniowo)",
        },
        amount: 600,
        unit: { de: "g", pl: "g" },
        group: "produce",
        storeHintDe: "Im Supermarkt erhältlich, vakuumiert gekocht spart Zeit",
      },
      {
        id: "cwk-2",
        name: {
          de: "Meerrettich, gerieben (frisch oder Glas)",
          pl: "Chrzan starty (świeży lub ze słoika)",
        },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "polish",
        storeHintDe: "Im Polenladen bekommst du ihn oft frisch gerieben",
        substitute: {
          de: "Fertiger Meerrettich aus dem Glas funktioniert auch, die Schärfe dann nach Geschmack anpassen",
          pl: "Gotowy chrzan ze słoika też się sprawdzi, ostrość dopasuj według smaku",
        },
      },
      {
        id: "cwk-3",
        name: {
          de: "Essig (Wein- oder Apfelessig) oder Zitronensaft",
          pl: "Ocet (winny lub jabłkowy) albo sok z cytryny",
        },
        amount: 1,
        unit: { de: "EL", pl: "łyżka" },
        group: "pantry",
      },
      {
        id: "cwk-4",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "pantry",
      },
      {
        id: "cwk-5",
        name: { de: "Salz", pl: "Sól" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "cwk-6",
        name: {
          de: "Schwarzer Pfeffer (optional)",
          pl: "Pieprz czarny (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
];
