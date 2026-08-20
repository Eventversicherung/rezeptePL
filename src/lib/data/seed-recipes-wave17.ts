import type { Recipe } from "@/types/content";

const CAT = ["category-eingelegt", "category-vegetarisch"] as const;
const RELATED = [
  "post-kiszenie",
  "post-ferment-glaeser",
  "post-polenladen",
  "post-ersatzprodukte-de",
] as const;

/**
 * Wave 17 — Kiszonki & Marynaty (10 traditional pickle/preserve recipes).
 * Ferment: Ogórki kiszone, Małosolne, Kapusta kiszona, Czosnek kiszony.
 * Vinegar: Grzyby, Papryka, Śliwki, Cebulka, Kalafior, Buraki w occie.
 */
export const seedRecipesWave17: Recipe[] = [
  {
    id: "recipe-ogorki-kiszone",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-ogorki-kiszone/f2b33a93-8e78-4d79-b0c2-f12de2e81f3c.webp",
    prepMinutes: 30,
    cookMinutes: 0,
    servings: 10,
    regionIds: [],
    occasionIds: ["occasion-grill", "occasion-niedziela"],
    techniqueIds: ["technique-kiszenie"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED],
    videoUrl: null,
    translations: {
      de: {
        title: "Ogórki kiszone",
        slug: "ogorki-kiszone",
        excerpt:
          "Ogórki kiszone entstehen durch reine Milchsäuregärung in Salzlake, ganz ohne Essig, und bleiben dadurch deutlich herzhafter und länger haltbar als die milden, nur kurz ziehenden Małosolne und als die essiggesäuerten Ogórki konserwowe.",
        steps: [
          {
            text: "Feste, kleine Einlegegurken waschen, Blütenansatz abschneiden. Gläser (Weck oder Twist-off) heiß ausspülen. Je Glas Knoblauch, Dilldolden, Senfkörner, Lorbeer und optional ein Stück Meerrettichwurzel einlegen.",
            tip: "Das ist die klassische Kiszone-Linie, ganz anders als die kurz gezogenen [Ogórki małosolne](/de/rezepte/ogorki-malosolne) und ganz anders als Essiggläser wie [Papryka konserwowa](/de/rezepte/papryka-konserwowa), mehr zur Technik erklärt der [Kiszenie-Guide](/de/blog/kiszenie-guide).",
          },
          {
            text: "Für die Lake 1,5 l kaltes Trinkwasser mit 45 g unjodiertem Salz auflösen, das ergibt etwa 3 Prozent und liegt bewusst am oberen Rand der für Gurken üblichen Spanne von 2 bis 3 Prozent, kein Jodsalz und kein Essig verwenden. Die Gurken senkrecht fest ins Glas packen, vollständig mit der Lake bedecken und 1 bis 2 cm Platz bis zum Rand lassen.",
            tip: "Unjodiertes Salz gibt es oft günstiger im [Polenladen](/de/blog/polenladen-einkaufen), passende Gläser mit Gärventil stellt die [Kaufberatung für Fermentiergläser](/de/blog/fermentier-glaeser-kaufberatung) vor.",
          },
          {
            text: "Bei 18 bis 22 Grad 4 bis 7 Tage gären lassen und täglich prüfen, ob wirklich alles unter der Lake bleibt, notfalls mit einem Gewicht oder einem sauberen Kohlblatt beschweren. Eine dünne, weiße und flache Kahmhefe an der Oberfläche einfach abschöpfen, das ist harmlos, während farbiger oder flauschiger Schimmel bedeutet, dass das ganze Glas entsorgt werden muss.",
            tip: "Nach dem Gären wandert das Glas immer in den Kühlschrank, denn Kälte stoppt die Fermentation zuverlässig, aus der fertigen Lake entsteht später die [Ogórkowa](/de/rezepte/ogorkowa), hier stehen aber die Gurken selbst im Mittelpunkt.",
          },
          {
            text: "Im Kühlschrank mindestens zwei Wochen nachreifen lassen, dann schmecken sie am besten. Zu Brot, Schabowy oder vom Grill servieren. Gekühlt halten sie mehrere Monate, solange die Lake klar bis leicht trüb bleibt und angenehm sauer riecht, nicht faulig.",
            tip: "Im Vorratsregal passt gut die [Kapusta kiszona](/de/rezepte/kapusta-kiszona) daneben, und bei fehlenden Zutaten hilft der Überblick zu [Ersatzprodukten](/de/blog/ersatzprodukte-de) weiter.",
          },
        ],
        seoTitle: "Ogórki kiszone Rezept | Eingelegte Gurken polnisch | Alemniam",
        seoDescription:
          "Ogórki kiszone: milchsauer eingelegte Gurken mit 3 %-Lake. Bilingual, sicher, klar getrennt von Małosolne und Essiggurken.",
      },
      pl: {
        title: "Ogórki kiszone",
        slug: "ogorki-kiszone",
        excerpt:
          "Ogórki kiszone powstają dzięki naturalnej fermentacji mlekowej w słonej zalewie, bez ani kropli octu, co daje im wyrazisty smak i długą trwałość, wyraźnie inną niż u łagodnych, kiszonych zaledwie kilka dni małosolnych i inną niż u zakwaszanych octem ogórków konserwowych.",
        steps: [
          {
            text: "Umyj twarde, małe ogórki, odetnij kwiat. Słoiki wypłucz gorącą wodą. Do każdego włóż czosnek, kwiatostany kopru, ziarna gorczycy, liść laurowy i opcjonalnie kawałek chrzanu.",
            tip: "To klasyczna linia kiszonkowa, zupełnie inna niż krótko kiszone [ogórki małosolne](/pl/rezepte/ogorki-malosolne) i inna niż octowa linia jak [papryka konserwowa](/pl/rezepte/papryka-konserwowa), więcej o technice pisze [poradnik o kiszeniu](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Na zalewę rozpuść w 1,5 l zimnej wody 45 g soli niejodowanej, co daje około 3 procent i mieści się na górnej granicy zalecanego dla ogórków zakresu 2 do 3 procent, bez jodu i bez octu. Ułóż ogórki pionowo w słoiku, zalej całkowicie i zostaw 1 do 2 cm miejsca do krawędzi.",
            tip: "Sól niejodowaną często kupisz taniej w [sklepie polskim](/pl/blog/sklep-polski-zakupy), a odpowiednie słoiki do kiszenia opisuje [poradnik o słoikach](/pl/blog/sloiki-do-kiszenia).",
          },
          {
            text: "Kiś 4 do 7 dni w temperaturze 18 do 22 stopni i codziennie sprawdzaj, czy wszystko zostaje pod zalewą, w razie potrzeby dociśnij talerzykiem albo czystym liściem kapusty. Cienki, biały i płaski kożuch po prostu zbierz łyżką, to nieszkodliwa kahmowa drożdżówka, natomiast kolorowa lub puszysta pleśń oznacza, że trzeba wyrzucić cały słoik.",
            tip: "Po ukiszeniu słoik zawsze trafia do lodówki, bo chłód zatrzymuje fermentację, a z gotowej zalewy powstaje później [ogórkowa](/pl/rezepte/ogorkowa), choć tutaj w centrum uwagi zostają same ogórki.",
          },
          {
            text: "W lodówce daj im dojrzeć co najmniej dwa tygodnie, wtedy smakują najlepiej. Podawaj do chleba, schabowego albo prosto z grilla. Trzymają się chłodno wiele miesięcy, dopóki zalewa pozostaje klarowna do lekko mętnej i pachnie przyjemnie kwaśno, a nie zgnilizną.",
            tip: "W spiżarni dobrze komponuje się obok nich [kapusta kiszona](/pl/rezepte/kapusta-kiszona), a przy brakujących składnikach pomogą [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
        ],
        seoTitle: "Ogórki kiszone przepis | Kiszonki | Alemniam",
        seoDescription:
          "Ogórki kiszone z zalewą 3 procent. Dwujęzycznie, wyraźnie inne niż małosolne i inne niż konserwa octowa.",
      },
    },
    ingredients: [
      { id: "ok-1", name: { de: "Kleine Einlegegurken", pl: "Małe ogórki gruntowe" }, amount: 1500, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "ok-2", name: { de: "Kaltes Trinkwasser", pl: "Zimna woda pitna" }, amount: 1500, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "ok-3", name: { de: "Unjodiertes Salz", pl: "Sól niejodowana" }, amount: 45, unit: { de: "g", pl: "g" }, group: "spices", storeHintDe: "Kein Jodsalz, erhältlich im Polenladen oder Reformhaus" },
      { id: "ok-4", name: { de: "Knoblauchzehen", pl: "Ząbki czosnku" }, amount: 6, unit: { de: "Stück", pl: "szt." }, group: "produce" },
      { id: "ok-5", name: { de: "Dilldolden", pl: "Kwiatostany kopru" }, amount: 4, unit: { de: "Stück", pl: "szt." }, group: "produce" },
      { id: "ok-6", name: { de: "Senfkörner", pl: "Ziarna gorczycy" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices" },
      { id: "ok-7", name: { de: "Meerrettichwurzel (optional)", pl: "Chrzan (opcjonalnie)" }, amount: 40, unit: { de: "g", pl: "g" }, group: "produce", storeHintDe: "Polenladen" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-ogorki-malosolne",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-ogorki-malosolne/3fc53722-42c1-4572-870c-99f960c7ceaa.webp",
    prepMinutes: 20,
    cookMinutes: 0,
    servings: 6,
    familyId: "family-ogorki-malosolne",
    variantLabel: { de: "Klassisch", pl: "klasyczne" },
    variantImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-ogorki-malosolne/3fc53722-42c1-4572-870c-99f960c7ceaa.webp",
    regionIds: [],
    occasionIds: ["occasion-grill"],
    techniqueIds: ["technique-kiszenie"],
    categoryIds: [...CAT, "category-schnell"],
    relatedPostIds: [...RELATED],
    videoUrl: null,
    translations: {
      de: {
        title: "Ogórki małosolne klassisch",
        slug: "klassisch",
        excerpt:
          "Die milde Hausversion reift nur ein bis drei Tage bei Zimmertemperatur und bleibt dadurch spürbar milder als die lange gegorenen Kiszone und komplett anders als Essiggurken.",
        steps: [
          {
            text: "Frische, feste Gurken waschen, Enden anschneiden. In ein großes Glas oder eine Schüssel mit Knoblauch, Dill und Senfkörnern schichten.",
            tip: "Das ist ein Kurzferment und kein Ersatz für die lang gegorenen [Ogórki kiszone](/de/rezepte/ogorki-kiszone), oben in der Variantenauswahl findest du außerdem die Linien [scharf](/de/rezepte/ogorki-malosolne/scharf), mit [Honig](/de/rezepte/ogorki-malosolne/honig) oder mit [Eichenblatt](/de/rezepte/ogorki-malosolne/eichenblatt), mehr zur Technik erklärt der [Kiszenie-Guide](/de/blog/kiszenie-guide).",
          },
          {
            text: "Für die Lake 1 Liter kaltes Wasser mit 20 g unjodiertem Salz verrühren, das entspricht etwa 2 Prozent und passt genau zum kurzen Ziehen. Die Gurken vollständig damit bedecken und bei Zimmertemperatur 24 bis 72 Stunden stehen lassen, im Sommer wegen der Wärme lieber schon früher probieren.",
            tip: "Sobald sie nach Gurke und einer leichten Säure schmecken, gehören sie in den Kühlschrank, denn länger auf der Arbeitsfläche werden sie langsam zu waschechten Kiszone.",
          },
          {
            text: "Gekühlt am besten innerhalb von zwei bis vier Tagen aufessen, zu Brot, Wurst oder direkt vom Grill. Eine leicht trübe Lake ist bei diesem kurzen Ferment normal, nur bei Schimmel oder fauligem Geruch gehört das ganze Glas in den Müll.",
            tip: "Der essiggesäuerte Nachbar mit ganz eigenem Charakter sind die [Ogórki konserwowe](/de/rezepte/ogorki-konserwowe), frische Gurken und unjodiertes Salz gibt es oft besonders günstig im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
        ],
        seoTitle: "Ogórki małosolne klassisch | Leicht gesalzene Gurken | Alemniam",
        seoDescription:
          "Ogórki małosolne klassisch in 1–3 Tagen. Bilingual, jung und mild, klar getrennt von Kiszone und Essig.",
      },
      pl: {
        title: "Ogórki małosolne klasyczne",
        slug: "klasyczne",
        excerpt:
          "Ta łagodna domowa wersja dojrzewa zaledwie jeden do trzech dni w temperaturze pokojowej, dzięki czemu jest wyraźnie delikatniejsza niż długo kiszone ogórki i zupełnie inna niż octowe.",
        steps: [
          {
            text: "Umyj twarde ogórki, przytnij końce. Ułóż w słoju z czosnkiem, koperkiem i gorczycą.",
            tip: "To krótki kis, a nie zamiennik długo kiszonych [ogórków kiszonych](/pl/rezepte/ogorki-kiszone), u góry w wyborze wariantów znajdziesz też wersję [ostrą](/pl/rezepte/ogorki-malosolne/ostre), z [miodem](/pl/rezepte/ogorki-malosolne/miod) albo z [liściem dębu](/pl/rezepte/ogorki-malosolne/lisc-debu), więcej o technice pisze [poradnik o kiszeniu](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Na zalewę wymieszaj 1 litr wody z 20 g soli niejodowanej, co daje około 2 procent i w sam raz na krótkie kiszenie. Przykryj ogórki całkowicie i zostaw w temperaturze pokojowej na 24 do 72 godzin, latem ze względu na ciepło próbuj już wcześniej.",
            tip: "Gdy smakują ogórkiem z lekką kwaskowatością, przenieś je do lodówki, bo zostawione dłużej powoli zmieniają się w prawdziwe kiszone.",
          },
          {
            text: "Z lodówki zjedz je najlepiej w ciągu dwóch do czterech dni, do chleba, kiełbasy albo prosto z grilla. Lekko mętna zalewa jest przy tak krótkim kiszeniu normalna, tylko pleśń albo nieprzyjemny zapach oznaczają, że trzeba wyrzucić cały słoik.",
            tip: "Wersja octowa to zupełnie inne danie, [ogórki konserwowe](/pl/rezepte/ogorki-konserwowe), a świeże ogórki i sól niejodowaną najtaniej znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
        ],
        seoTitle: "Ogórki małosolne klasyczne | Lekko solone | Alemniam",
        seoDescription:
          "Ogórki małosolne klasyczne w 1–3 dni. Dwujęzycznie, młode, nie długie kiszone.",
      },
    },
    ingredients: [
      { id: "om-1", name: { de: "Feste Gurken", pl: "Twarde ogórki" }, amount: 1000, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "om-2", name: { de: "Kaltes Wasser", pl: "Zimna woda" }, amount: 1000, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "om-3", name: { de: "Unjodiertes Salz", pl: "Sól niejodowana" }, amount: 20, unit: { de: "g", pl: "g" }, group: "spices", storeHintDe: "Kein Jodsalz" },
      { id: "om-4", name: { de: "Knoblauch", pl: "Czosnek" }, amount: 4, unit: { de: "Zehen", pl: "ząbki" }, group: "produce" },
      { id: "om-5", name: { de: "Dill", pl: "Koper" }, amount: 3, unit: { de: "Dolden", pl: "kwiatostany" }, group: "produce" },
      { id: "om-6", name: { de: "Senfkörner", pl: "Gorczyca" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-kapusta-kiszona",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-kapusta-kiszona/1bf932e9-22f0-4366-ae7a-81759f9a83ed.webp",
    prepMinutes: 45,
    cookMinutes: 0,
    servings: 12,
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-niedziela"],
    techniqueIds: ["technique-kiszenie"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED, "post-bigos-guide"],
    videoUrl: null,
    translations: {
      de: {
        title: "Kapusta kiszona",
        slug: "kapusta-kiszona",
        excerpt:
          "Selbst gemachtes Sauerkraut entsteht durch reine Milchsäuregärung von fein gehobeltem Weißkohl mit 2 Prozent Salz, roh und beschwert, als Vorratsgrundlage für Bigos statt als warme, bereits fertig geschmorte Beilage.",
        steps: [
          {
            text: "Weißkohl vierteln, Strunk entfernen, sehr fein hobeln. Mit 40 g unjodiertem Salz, das entspricht 2 Prozent bei 2 kg Kohl, in einer großen Schüssel fest kneten, bis reichlich eigener Saft austritt, das dauert etwa 8 bis 12 Minuten.",
            tip: "Das hier ist roher Rohferment und keine fertige warme Beilage wie [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana), mehr zur Technik erklärt der [Kiszenie-Guide](/de/blog/kiszenie-guide).",
          },
          {
            text: "Fest in einen sauberen Steintopf oder ein großes Glas stampfen, Schicht für Schicht, bis der eigene Saft alles bedeckt. Optional etwas Kümmel dazugeben und mit einem Gewicht beschweren, zum Beispiel einem kleinen Teller mit einem gefüllten Wasserglas darauf, damit 1 bis 2 cm Lake über dem Kraut stehen.",
            tip: "Reicht der eigene Saft nicht aus, 200 ml Wasser mit 4 g Salz aufkochen lassen und nachgießen, niemals ungesalzenes Wasser nachfüllen, geeignete Gläser stellt die [Kaufberatung für Fermentiergläser](/de/blog/fermentier-glaeser-kaufberatung) vor.",
          },
          {
            text: "Bei 18 bis 22 Grad 7 bis 14 Tage gären lassen, täglich das Gewicht prüfen und aufsteigenden Schaum abschöpfen. Zeigt sich farbiger Schimmel, muss die ganze Charge weg. Danach in saubere Gläser füllen und kühl lagern.",
            tip: "Frisch fertig gekist ist das Kraut die Grundlage für [Bigos](/de/rezepte/bigos) und für [Kapuśniak](/de/rezepte/kapusniak), unjodiertes Salz für die nächste Charge gibt es günstig im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Gekühlt reift das Kraut weiter und wird milder und runder im Geschmack. Vor der Verwendung kosten, ist es zu scharf, kurz kalt abspülen, aber nicht auswaschen, sonst verliert es zu viel von seiner Säure und den nützlichen Milchsäurebakterien.",
            tip: "Als Nachbar im Vorratsregal passen gut die [Ogórki kiszone](/de/rezepte/ogorki-kiszone), beide entstehen durch dieselbe Milchsäuregärung ohne einen Tropfen Essig.",
          },
        ],
        seoTitle: "Kapusta kiszona Rezept | Sauerkraut selbst machen | Alemniam",
        seoDescription:
          "Kapusta kiszona mit 2 % Salz. Bilingual, roher Milchsäureferment, keine zasmażana, Grundlage für Bigos.",
      },
      pl: {
        title: "Kapusta kiszona",
        slug: "kapusta-kiszona",
        excerpt:
          "Domowa kapusta kiszona powstaje dzięki czystej fermentacji mlekowej z drobno szatkowanej kapusty, 2 procent soli i solidnego obciążenia, jako baza na zapas do bigosu, a nie jako gotowy ciepły dodatek prosto z patelni.",
        steps: [
          {
            text: "Kapustę pokrój, usuń głąb, szatkuj bardzo drobno. Z 40 g soli niejodowanej, czyli 2 procent na 2 kg kapusty, ugniataj ją mocno 8 do 12 minut, aż puści dużo własnego soku.",
            tip: "To surowy kis, a nie gotowa ciepła [kapusta zasmażana](/pl/rezepte/kapusta-zasmażana), więcej o technice pisze [poradnik o kiszeniu](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Ubijaj kapustę warstwami w czystym naczyniu, aż własny sok całkowicie ją przykryje. Opcjonalnie dodaj kminek i obciąż całość, na przykład talerzykiem ze słoikiem wody na wierzchu, tak żeby 1 do 2 cm zalewy stało nad kapustą.",
            tip: "Gdy soku jest za mało, dolej zagotowane 200 ml wody z 4 g soli, nigdy samej niesolonej wody, a dobre słoiki opisuje [poradnik o słoikach do kiszenia](/pl/blog/sloiki-do-kiszenia).",
          },
          {
            text: "Kiś 7 do 14 dni w temperaturze 18 do 22 stopni, codziennie sprawdzaj ciężarek i zbieraj pianę z powierzchni. Kolorowa pleśń oznacza, że trzeba wyrzucić całą partię. Potem przełóż do czystych słoików i wstaw do lodówki.",
            tip: "Świeżo ukiszona kapusta to baza na [bigos](/pl/rezepte/bigos) i na [kapuśniak](/pl/rezepte/kapusniak), sól niejodowaną na kolejną partię tanio kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "W lodówce kapusta dalej łagodnieje i robi się bardziej okrągła w smaku. Przed użyciem zawsze skosztuj, a jeśli jest za ostra, krótko przepłucz ją zimną wodą, ale nie wypłukuj, bo straci zbyt dużo kwasu i pożytecznych bakterii.",
            tip: "Sąsiadem w spiżarni dobrze bywają [ogórki kiszone](/pl/rezepte/ogorki-kiszone), obie powstają dzięki tej samej fermentacji mlekowej bez kropli octu.",
          },
        ],
        seoTitle: "Kapusta kiszona przepis | Domowy kis | Alemniam",
        seoDescription:
          "Kapusta kiszona, 2 procent soli. Dwujęzycznie, surowy kis, nie zasmażana, baza do bigosu.",
      },
    },
    ingredients: [
      { id: "kk-1", name: { de: "Weißkohl", pl: "Kapusta biała" }, amount: 2000, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "kk-2", name: { de: "Unjodiertes Salz", pl: "Sól niejodowana" }, amount: 40, unit: { de: "g", pl: "g" }, group: "spices", storeHintDe: "Kein Jodsalz verwenden" },
      { id: "kk-3", name: { de: "Kümmel (optional)", pl: "Kminek (opcjonalnie)" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices", storeHintDe: "Polenladen oft aromatischer" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-czosnek-kiszony",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-czosnek-kiszony/b2446c85-61fc-4d87-bd39-1b55e4f4c353.webp",
    prepMinutes: 20,
    cookMinutes: 0,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-grill"],
    techniqueIds: ["technique-kiszenie"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED],
    videoUrl: null,
    translations: {
      de: {
        title: "Czosnek kiszony",
        slug: "czosnek-kiszony",
        excerpt:
          "Milchsauer eingelegte Knoblauchzehen verlieren beim Kiszen ihre Schärfe und werden mild und rund im Geschmack, ganz anders als der weiß-scharfe geriebene Chrzan und ganz anders als essiggesäuerte Zwiebeln.",
        steps: [
          {
            text: "Zehen schälen, beschädigte Stücke aussortieren, da sie leichter schimmeln. Fest in ein kleines Glas schichten, optional eine Dilldolde dazugeben.",
            tip: "Das ist ein echter Ferment und kein Dip wie [Chrzan tarty](/de/rezepte/chrzan), der weiß und scharf bleibt, mehr zur Technik liefert der [Kiszenie-Guide](/de/blog/kiszenie-guide).",
          },
          {
            text: "Für die Lake 400 ml Wasser mit 12 g unjodiertem Salz auflösen, das ergibt etwa 3 Prozent. Den Knoblauch vollständig damit bedecken und beschweren, dann bei 18 bis 22 Grad 7 bis 14 Tage gären lassen, bevor das Glas in den Kühlschrank wandert.",
            tip: "Die Zehen können dabei harmlos blau oder grün anlaufen, eine Reaktion von Schwefelverbindungen im Knoblauch mit der Säure, nur bei Schimmel oder fauligem Geruch gehört das Glas in den Müll.",
          },
          {
            text: "Gekühlt zu Brot, vom Grill oder zu Wurst servieren. Die Lake nicht trinken, wenn sie unangenehm riecht. Gekühlt hält der Knoblauch mehrere Wochen.",
            tip: "Im Vorratsregal passen gut die [Ogórki kiszone](/de/rezepte/ogorki-kiszone) daneben, eine Übersicht zu passenden Gläsern bietet die [Kaufberatung für Fermentiergläser](/de/blog/fermentier-glaeser-kaufberatung).",
          },
        ],
        seoTitle: "Czosnek kiszony Rezept | Eingelegter Knoblauch | Alemniam",
        seoDescription:
          "Czosnek kiszony in 3-Prozent-Lake. Bilingual, fermentiert, kein Chrzan, keine Essigzwiebel.",
      },
      pl: {
        title: "Czosnek kiszony",
        slug: "czosnek-kiszony",
        excerpt:
          "Kiszone ząbki czosnku tracą podczas fermentacji swoją ostrość i robią się łagodne oraz okrągłe w smaku, zupełnie inaczej niż biały i ostry tarty chrzan oraz octowa cebulka.",
        steps: [
          {
            text: "Obierz ząbki, uszkodzone odrzuć, bo łatwiej pleśnieją. Ułóż szczelnie w małym słoiku, opcjonalnie dodaj gałązkę kopru.",
            tip: "To prawdziwa kiszonka, a nie dip taki jak [chrzan tarty](/pl/rezepte/chrzan), który zostaje biały i ostry, więcej o technice pisze [poradnik o kiszeniu](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Na zalewę rozpuść 400 ml wody z 12 g soli niejodowanej, co daje około 3 procent. Przykryj czosnek całkowicie, obciąż i kiś 7 do 14 dni w temperaturze 18 do 22 stopni, zanim słoik trafi do lodówki.",
            tip: "Ząbki mogą przy tym nieszkodliwie zmienić kolor na niebieski albo zielonkawy, to reakcja związków siarki w czosnku z kwasem, dopiero pleśń albo zgnilizna oznaczają, że trzeba wyrzucić słoik.",
          },
          {
            text: "Z lodówki podawaj do chleba, grilla albo kiełbasy. Nie pij zalewy, jeśli pachnie nieprzyjemnie. Trzyma się chłodno kilka tygodni.",
            tip: "W spiżarni dobrze komponują się obok [ogórki kiszone](/pl/rezepte/ogorki-kiszone), a dobre słoiki opisuje [poradnik o słoikach do kiszenia](/pl/blog/sloiki-do-kiszenia).",
          },
        ],
        seoTitle: "Czosnek kiszony przepis | Kiszonki | Alemniam",
        seoDescription:
          "Czosnek kiszony, zalewa 3 procent. Dwujęzycznie, fermentowany, nie chrzan, nie cebula w occie.",
      },
    },
    ingredients: [
      { id: "cz-1", name: { de: "Knoblauchzehen, geschält", pl: "Ząbki czosnku, obrane" }, amount: 400, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "cz-2", name: { de: "Kaltes Wasser", pl: "Zimna woda" }, amount: 400, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "cz-3", name: { de: "Unjodiertes Salz", pl: "Sól niejodowana" }, amount: 12, unit: { de: "g", pl: "g" }, group: "spices", storeHintDe: "Kein Jodsalz" },
      { id: "cz-4", name: { de: "Dilldolde (optional)", pl: "Koper (opcjonalnie)" }, amount: 1, unit: { de: "Stück", pl: "szt." }, group: "produce" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-grzyby-marynowane",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-grzyby-marynowane/aea3b76f-74ca-4228-96e0-82b4436f092b.webp",
    prepMinutes: 25,
    cookMinutes: 20,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-sylwester"],
    techniqueIds: ["technique-konserven"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED, "post-wigilia"],
    videoUrl: null,
    translations: {
      de: {
        title: "Grzyby marynowane",
        slug: "grzyby-marynowane",
        excerpt:
          "Champignons ziehen hier in einem würzigen Essigsud durch und werden zum kalten Vorspeisenklassiker, ganz anders als die warme Wigilia-Pilzsuppe, die aus denselben Pilzen ein völlig anderes Gericht macht.",
        steps: [
          {
            text: "Nur Speisepilze aus dem Handel verwenden, Champignons oder fertig geputzte Mischpilze. Putzen, größere Exemplare halbieren und 8 Minuten in Salzwasser köcheln, dann abtropfen lassen.",
            tip: "Auf keinen Fall selbst gesammelte Wildpilze ohne sichere Bestimmung verwenden, die warme Suppenvariante bleibt ohnehin der [Zupa grzybowa](/de/rezepte/zupa-grzybowa) vorbehalten, mehr zum Weihnachtsmenü liefert der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
          },
          {
            text: "Für den Sud 250 ml Tafelessig mit 5 Prozent Säure, 250 ml Wasser, 2 EL Zucker und 1 TL Salz mit Piment, Pfeffer, Lorbeer und Zwiebelringen verrühren und 5 Minuten köcheln lassen.",
            tip: "Immer 5-prozentigen Essig verwenden und keinen milderen Hausessig, denn nur die höhere Säure sorgt zuverlässig für Haltbarkeit, den Unterschied zwischen Ferment und Essigkonserve erklärt der [Kiszenie-Guide](/de/blog/kiszenie-guide).",
          },
          {
            text: "Die Pilze in heiße, saubere Gläser füllen und vollständig mit dem kochenden Sud bedecken. Verschließen, abkühlen lassen und mindestens 3 Tage im Kühlschrank durchziehen lassen, danach gekühlt lagern.",
            tip: "Serviere sie zu Brot oder als eigenständige Vorspeise, im Regal daneben passt gut die [Papryka konserwowa](/de/rezepte/papryka-konserwowa).",
          },
        ],
        seoTitle: "Grzyby marynowane Rezept | Eingelegte Pilze | Alemniam",
        seoDescription:
          "Grzyby marynowane in 5-prozentigem Essig. Bilingual, kalte Vorspeise, keine Pilzsuppe. Kühl lagern.",
      },
      pl: {
        title: "Grzyby marynowane",
        slug: "grzyby-marynowane",
        excerpt:
          "Pieczarki marynują się tutaj w wyrazistej zalewie octowej i stają się zimną przystawką, zupełnie inną niż wigilijna zupa grzybowa, która z tych samych grzybów robi ciepłe danie.",
        steps: [
          {
            text: "Użyj tylko grzybów ze sklepu, najlepiej pieczarek. Oczyść je, większe przekrój na pół i gotuj 8 minut w osolonej wodzie, potem odsącz.",
            tip: "Nigdy nie używaj samodzielnie zebranych grzybów bez pewnej identyfikacji, ciepła wersja zupowa zostaje przy [zupie grzybowej](/pl/rezepte/zupa-grzybowa), więcej o wigilijnym menu pisze [poradnik o Wigilii](/pl/blog/menu-wigilijne).",
          },
          {
            text: "Na zalewę połącz 250 ml octu 5 procent, 250 ml wody, 2 łyżki cukru i 1 łyżeczkę soli z zielem angielskim, pieprzem, liściem laurowym i cebulą, i gotuj 5 minut.",
            tip: "Zawsze używaj octu 5 procent, nigdy łagodniejszego domowego octu, bo tylko ta kwasowość gwarantuje trwałość, różnicę między kiszeniem a marynowaniem w occie wyjaśnia [poradnik o kiszeniu](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Przełóż grzyby do gorących, czystych słoików i zalej wrzątkiem z octem. Zamknij, ostudź i trzymaj co najmniej 3 dni w lodówce, zanim spróbujesz, potem przechowuj chłodno.",
            tip: "Podawaj do chleba albo jako samodzielną przystawkę, obok dobrze komponuje się [papryka konserwowa](/pl/rezepte/papryka-konserwowa).",
          },
        ],
        seoTitle: "Grzyby marynowane przepis | Marynaty | Alemniam",
        seoDescription:
          "Grzyby marynowane w occie 5 procent. Dwujęzycznie, zimna przystawka, nie zupa. Do lodówki.",
      },
    },
    ingredients: [
      { id: "gm-1", name: { de: "Champignons", pl: "Pieczarki" }, amount: 800, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "gm-2", name: { de: "Tafelessig 5 %", pl: "Ocet 5 %" }, amount: 250, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "gm-3", name: { de: "Wasser", pl: "Woda" }, amount: 250, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "gm-4", name: { de: "Zucker", pl: "Cukier" }, amount: 2, unit: { de: "EL", pl: "łyżki" }, group: "pantry" },
      { id: "gm-5", name: { de: "Zwiebel", pl: "Cebula" }, amount: 1, unit: { de: "Stück", pl: "szt." }, group: "produce" },
      { id: "gm-6", name: { de: "Piment, Pfeffer, Lorbeer", pl: "Ziele, pieprz, liść laurowy" }, amount: 1, unit: { de: "nach Bedarf", pl: "do smaku" }, group: "spices" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-papryka-konserwowa",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-papryka-konserwowa/344f8465-9afd-4f59-b728-27758d471345.webp",
    prepMinutes: 30,
    cookMinutes: 15,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-grill", "occasion-niedziela"],
    techniqueIds: ["technique-konserven"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED],
    videoUrl: null,
    translations: {
      de: {
        title: "Papryka konserwowa",
        slug: "papryka-konserwowa",
        excerpt:
          "Süße Paprikastreifen ziehen hier in einem klaren Essigsud durch und werden zum haltbaren Glas für den Sonntagstisch, weder das geschmorte Leczo noch fermentierte Gurken.",
        steps: [
          {
            text: "Feste Paprika entkernen und in Streifen schneiden. Optional 3 Minuten blanchieren und abtropfen lassen, ohne Blanchieren bleiben die Streifen dafür knackiger.",
            tip: "Das hier ist ein Essigglas und kein Schmorgericht wie [Leczo](/de/rezepte/leczo), den Unterschied zwischen Essig und Ferment erklärt der [Kiszenie-Guide](/de/blog/kiszenie-guide).",
          },
          {
            text: "Für den Sud 300 ml Essig mit 5 Prozent Säure, 200 ml Wasser, 3 EL Zucker und 1 TL Salz mit Piment und Lorbeer aufkochen.",
            tip: "Nur 5-prozentigen Essig verwenden, das sichert die Haltbarkeit, und die Gläser vorher heiß ausspülen.",
          },
          {
            text: "Die Streifen fest in die Gläser packen und mit dem kochenden Sud vollständig bedecken. Verschließen, abkühlen lassen und 3 Tage kühl durchziehen, bevor sie serviert werden, danach gekühlt lagern.",
            tip: "Serviere sie zu Fleisch, Brot oder vom Grill, im Regal daneben passt gut die [Cebulka marynowana](/de/rezepte/cebulka-marynowana).",
          },
        ],
        seoTitle: "Papryka konserwowa Rezept | Eingelegte Paprika | Alemniam",
        seoDescription:
          "Papryka konserwowa in 5-prozentigem Essig. Bilingual, haltbares Glas, kein Leczo. Kühl lagern.",
      },
      pl: {
        title: "Papryka konserwowa",
        slug: "papryka-konserwowa",
        excerpt:
          "Słodka papryka marynuje się tutaj w klarownej zalewie octowej i staje się trwałym słoikiem na niedzielny stół, zupełnie innym niż duszone leczo i niż kiszone ogórki.",
        steps: [
          {
            text: "Paprykę oczyść z gniazd nasiennych i pokrój w paski. Opcjonalnie zblanszuj 3 minuty i odsącz, bez blanszowania paski zostają za to bardziej chrupiące.",
            tip: "To słoik z octem, a nie duszone [leczo](/pl/rezepte/leczo), różnicę między octem a kiszeniem wyjaśnia [poradnik o kiszeniu](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Na zalewę zagotuj 300 ml octu 5 procent, 200 ml wody, 3 łyżki cukru i 1 łyżeczkę soli z zielem angielskim i liściem laurowym.",
            tip: "Używaj tylko octu 5 procent, to gwarantuje trwałość, a słoiki wcześniej wypłucz gorącą wodą.",
          },
          {
            text: "Paski szczelnie ułóż w słoikach i zalej wrzątkiem z octem. Zamknij, ostudź i trzymaj 3 dni w lodówce, zanim podasz, potem przechowuj chłodno.",
            tip: "Podawaj do mięsa, chleba albo grilla, obok dobrze komponuje się [cebulka marynowana](/pl/rezepte/cebulka-marynowana).",
          },
        ],
        seoTitle: "Papryka konserwowa przepis | Marynaty | Alemniam",
        seoDescription:
          "Papryka konserwowa w occie 5 procent. Dwujęzycznie, trwały słoik, nie leczo. Do lodówki.",
      },
    },
    ingredients: [
      { id: "pk-1", name: { de: "Rote und gelbe Paprika", pl: "Papryka czerwona i żółta" }, amount: 1000, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "pk-2", name: { de: "Tafelessig 5 %", pl: "Ocet 5 %" }, amount: 300, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "pk-3", name: { de: "Wasser", pl: "Woda" }, amount: 200, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "pk-4", name: { de: "Zucker", pl: "Cukier" }, amount: 3, unit: { de: "EL", pl: "łyżki" }, group: "pantry" },
      { id: "pk-5", name: { de: "Salz", pl: "Sól" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices" },
      { id: "pk-6", name: { de: "Piment, Lorbeer", pl: "Ziele angielskie, liść laurowy" }, amount: 1, unit: { de: "nach Bedarf", pl: "do smaku" }, group: "spices" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-sliwki-w-occie",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-sliwki-w-occie/66f92054-016a-48f6-bf9f-484702dcfb3e.webp",
    prepMinutes: 25,
    cookMinutes: 15,
    servings: 10,
    regionIds: [],
    occasionIds: ["occasion-niedziela", "occasion-imieniny"],
    techniqueIds: ["technique-konserven"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED],
    videoUrl: null,
    translations: {
      de: {
        title: "Śliwki w occie",
        slug: "sliwki-w-occie",
        excerpt:
          "Feste Pflaumen ziehen hier in einem würzigen süß-sauren Sud durch und werden zur klassischen Beilage für Braten und Aufschnitt, weder Powidła zum Bestreichen noch die Füllung für Knedle.",
        steps: [
          {
            text: "Feste, nicht überreife Pflaumen waschen, die Stiele entfernen und die Früchte ganz lassen, der Stein bleibt drin. In saubere Gläser schichten.",
            tip: "Das ist eine Essigpflaume für den Vorratsschrank und keine Füllung wie bei [Knedle ze śliwkami](/de/rezepte/knedle-sliwki) und kein Mus, mehr zu Fermenten liefert der [Kiszenie-Guide](/de/blog/kiszenie-guide).",
          },
          {
            text: "Für den Sud 300 ml Essig mit 5 Prozent Säure, 200 ml Wasser und 150 g Zucker mit Zimt und 3 Nelken aufkochen und 3 Minuten ziehen lassen.",
            tip: "Nur 5-prozentigen Essig verwenden, das sichert die Haltbarkeit, wer es weniger süß mag, kürzt später lieber den Zucker als den Essiganteil.",
          },
          {
            text: "Die Pflaumen mit dem kochenden Sud vollständig bedecken, verschließen und abkühlen lassen. Mindestens eine Woche im Kühlschrank durchziehen lassen, dann zu Braten, Käse oder Aufschnitt servieren, danach gekühlt lagern.",
            tip: "Ein süß-saurer Nachbar im Regal ist die [Buraki w occie](/de/rezepte/buraki-w-occie).",
          },
        ],
        seoTitle: "Śliwki w occie Rezept | Pflaumen süß-sauer | Alemniam",
        seoDescription:
          "Śliwki w occie mit 5-prozentigem Essig. Bilingual, Glas zu Braten, keine Knedle, kein Mus.",
      },
      pl: {
        title: "Śliwki w occie",
        slug: "sliwki-w-occie",
        excerpt:
          "Twarde śliwki marynują się tutaj w korzennej słodko-kwaśnej zalewie i stają się klasycznym dodatkiem do pieczystego, a nie powidłami do smarowania ani nadzieniem do knedli.",
        steps: [
          {
            text: "Umyj twarde śliwki, zostaw pestkę w środku. Ułóż je w czystych słoikach.",
            tip: "To marynata na zapas, a nie nadzienie jak w [knedlach ze śliwkami](/pl/rezepte/knedle-sliwki) i nie mus, różnicę między kiszeniem a octem wyjaśnia [poradnik o kiszeniu](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Na zalewę zagotuj 300 ml octu 5 procent, 200 ml wody i 150 g cukru z cynamonem i 3 goździkami, i gotuj 3 minuty.",
            tip: "Używaj tylko octu 5 procent, to gwarantuje trwałość, jeśli wolisz mniej słodko, ogranicz później cukier, a nie ilość octu.",
          },
          {
            text: "Zalej śliwki wrzątkiem z octem, zamknij i ostudź. Trzymaj co najmniej tydzień w lodówce, zanim podasz do pieczystego albo serów, potem przechowuj chłodno.",
            tip: "Sąsiadem o podobnym słodko-kwaśnym charakterze są [buraki w occie](/pl/rezepte/buraki-w-occie).",
          },
        ],
        seoTitle: "Śliwki w occie przepis | Marynaty | Alemniam",
        seoDescription:
          "Śliwki w occie, ocet 5 procent. Dwujęzycznie, do pieczystego, nie knedle.",
      },
    },
    ingredients: [
      { id: "sw-1", name: { de: "Feste Pflaumen", pl: "Twarde śliwki" }, amount: 1000, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "sw-2", name: { de: "Tafelessig 5 %", pl: "Ocet 5 %" }, amount: 300, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "sw-3", name: { de: "Wasser", pl: "Woda" }, amount: 200, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "sw-4", name: { de: "Zucker", pl: "Cukier" }, amount: 150, unit: { de: "g", pl: "g" }, group: "pantry" },
      { id: "sw-5", name: { de: "Zimtstange", pl: "Laska cynamonu" }, amount: 1, unit: { de: "Stück", pl: "szt." }, group: "spices" },
      { id: "sw-6", name: { de: "Nelken", pl: "Goździki" }, amount: 3, unit: { de: "Stück", pl: "szt." }, group: "spices" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-cebulka-marynowana",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-cebulka-marynowana/4cefa73e-e5fc-4897-8175-81c4fd6d3b38.webp",
    prepMinutes: 25,
    cookMinutes: 10,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-grill", "occasion-sylwester"],
    techniqueIds: ["technique-konserven"],
    categoryIds: [...CAT, "category-schnell"],
    relatedPostIds: [...RELATED],
    videoUrl: null,
    translations: {
      de: {
        title: "Cebulka marynowana",
        slug: "cebulka-marynowana",
        excerpt:
          "Silberzwiebeln oder dicke rote Ringe ziehen hier in Essig durch und werden zur klassischen Beilage für Hering, Aufschnitt und Grill, nicht die milchsauer fermentierte Linie wie beim Knoblauch.",
        steps: [
          {
            text: "Silberzwiebeln 2 Minuten blanchieren und pellen, alternativ rote Zwiebel in dicke Ringe schneiden. In saubere Gläser schichten.",
            tip: "Das ist Essig, kein Kis, die fermentierte Linie bleibt dem [Czosnek kiszony](/de/rezepte/czosnek-kiszony) vorbehalten, klassisch dazu passt [Śledź](/de/rezepte/sledz).",
          },
          {
            text: "Für den Sud 250 ml Essig mit 5 Prozent Säure, 150 ml Wasser, 2 EL Zucker und 1 TL Salz mit Pfeffer, Lorbeer und Piment aufkochen.",
            tip: "Nur 5-prozentigen Essig verwenden und ihn heiß über die Zwiebeln gießen, das sichert die Haltbarkeit.",
          },
          {
            text: "Die Zwiebeln vollständig bedecken, verschließen und 2 Tage kühl durchziehen lassen. Zu Wurst, Hering oder vom Grill servieren, gekühlt lagern und innerhalb von 3 bis 4 Wochen aufbrauchen.",
            tip: "Im Regal daneben passt gut die [Papryka konserwowa](/de/rezepte/papryka-konserwowa).",
          },
        ],
        seoTitle: "Cebulka marynowana Rezept | Eingelegte Zwiebeln | Alemniam",
        seoDescription:
          "Cebulka marynowana in 5-prozentigem Essig. Bilingual, zu Hering und Grill, kein fermentierter Knoblauch.",
      },
      pl: {
        title: "Cebulka marynowana",
        slug: "cebulka-marynowana",
        excerpt:
          "Cebulka perłowa albo grube krążki czerwonej cebuli marynują się tutaj w occie i stają się klasycznym dodatkiem do śledzia, wędlin i grilla, a nie kiszoną linią jak przy czosnku.",
        steps: [
          {
            text: "Cebulkę perłową blanszuj 2 minuty i obierz, albo pokrój czerwoną cebulę w grube krążki. Ułóż w czystych słoikach.",
            tip: "To ocet, nie kis, kiszona linia zostaje przy [czosnku kiszonym](/pl/rezepte/czosnek-kiszony), klasycznie pasuje do niej [śledź](/pl/rezepte/sledz).",
          },
          {
            text: "Na zalewę zagotuj 250 ml octu 5 procent, 150 ml wody, 2 łyżki cukru i 1 łyżeczkę soli z pieprzem, liściem laurowym i zielem angielskim.",
            tip: "Używaj tylko octu 5 procent i zlewaj cebulę gorącą zalewą, to gwarantuje trwałość.",
          },
          {
            text: "Przykryj cebulę całkowicie, zamknij i trzymaj 2 dni w lodówce, zanim podasz do kiełbasy, śledzia albo grilla. Przechowuj chłodno i zużyj w ciągu 3 do 4 tygodni.",
            tip: "Obok dobrze komponuje się [papryka konserwowa](/pl/rezepte/papryka-konserwowa).",
          },
        ],
        seoTitle: "Cebulka marynowana przepis | Marynaty | Alemniam",
        seoDescription:
          "Cebulka marynowana w occie 5 procent. Dwujęzycznie, do śledzia, nie kiszony czosnek.",
      },
    },
    ingredients: [
      { id: "cm-1", name: { de: "Silberzwiebeln oder rote Zwiebeln", pl: "Cebulka perłowa lub czerwona" }, amount: 500, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "cm-2", name: { de: "Tafelessig 5 %", pl: "Ocet 5 %" }, amount: 250, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "cm-3", name: { de: "Wasser", pl: "Woda" }, amount: 150, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "cm-4", name: { de: "Zucker", pl: "Cukier" }, amount: 2, unit: { de: "EL", pl: "łyżki" }, group: "pantry" },
      { id: "cm-5", name: { de: "Salz", pl: "Sól" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices" },
      { id: "cm-6", name: { de: "Lorbeer, Piment, Pfeffer", pl: "Liść, ziele, pieprz" }, amount: 1, unit: { de: "nach Bedarf", pl: "do smaku" }, group: "spices" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-kalafior-w-occie",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-kalafior-w-occie/7af3ac94-43ca-46fe-8767-fcbb4861d19c.webp",
    prepMinutes: 30,
    cookMinutes: 15,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-konserven"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED],
    videoUrl: null,
    translations: {
      de: {
        title: "Kalafior w occie",
        slug: "kalafior-w-occie",
        excerpt:
          "Blanchierter Blumenkohl mit Karotte zieht hier in einem Essigsud durch und wird zu knackigen Pikles, ganz anders als eine frisch geraspelte Rohkost-Surówka.",
        steps: [
          {
            text: "Blumenkohl in Röschen teilen, Karotte in Scheiben schneiden. 2 bis 3 Minuten in Salzwasser blanchieren, kalt abschrecken und gut abtropfen lassen.",
            tip: "Das ist ein Essigglas und keine frische [Surówka](/de/rezepte/surowka), den Unterschied zwischen Essig und Ferment erklärt der [Kiszenie-Guide](/de/blog/kiszenie-guide).",
          },
          {
            text: "Für den Sud 300 ml Essig mit 5 Prozent Säure, 200 ml Wasser, 2 EL Zucker und 1 TL Salz mit Senfkörnern und Lorbeer aufkochen.",
            tip: "Nur 5-prozentigen Essig verwenden, das Gemüse muss dabei vollständig unter dem Sud liegen, damit es überall gleichmäßig sauer wird.",
          },
          {
            text: "Fest in Gläser packen, heiß aufgießen und verschließen. 3 Tage kühl durchziehen lassen, dann zu Aufschnitt und Sonntagsbraten servieren, danach gekühlt lagern.",
            tip: "Im Regal daneben passt gut die [Grzyby marynowane](/de/rezepte/grzyby-marynowane).",
          },
        ],
        seoTitle: "Kalafior w occie Rezept | Eingelegter Blumenkohl | Alemniam",
        seoDescription:
          "Kalafior w occie mit Karotte, 5-prozentiger Essig. Bilingual, Pikles, keine Surówka. Kühl lagern.",
      },
      pl: {
        title: "Kalafior w occie",
        slug: "kalafior-w-occie",
        excerpt:
          "Blanszowany kalafior z marchewką marynuje się tutaj w occie i staje się chrupiącymi piklami, zupełnie inaczej niż świeżo starta surowa surówka.",
        steps: [
          {
            text: "Kalafior podziel na różyczki, marchew pokrój w plasterki. Blanszuj 2 do 3 minut w osolonej wodzie, schłodź w zimnej wodzie i dobrze odsącz.",
            tip: "To słoik z octem, a nie świeża [surówka](/pl/rezepte/surowka), różnicę między octem a kiszeniem wyjaśnia [poradnik o kiszeniu](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Na zalewę zagotuj 300 ml octu 5 procent, 200 ml wody, 2 łyżki cukru i 1 łyżeczkę soli z gorczycą i liściem laurowym.",
            tip: "Używaj tylko octu 5 procent, warzywa muszą leżeć całkowicie pod zalewą, żeby zakisły równomiernie.",
          },
          {
            text: "Przełóż do słoików, zalej gorącą zalewą i zamknij. Trzymaj 3 dni w lodówce, zanim podasz do wędlin i pieczystego.",
            tip: "Obok dobrze komponuje się [grzyby marynowane](/pl/rezepte/grzyby-marynowane).",
          },
        ],
        seoTitle: "Kalafior w occie przepis | Pikle | Alemniam",
        seoDescription:
          "Kalafior w occie z marchewką. Dwujęzycznie, chrupiące pikle, nie surówka. Do lodówki.",
      },
    },
    ingredients: [
      { id: "ka-1", name: { de: "Blumenkohl", pl: "Kalafior" }, amount: 1, unit: { de: "Kopf", pl: "główka" }, group: "produce" },
      { id: "ka-2", name: { de: "Karotten", pl: "Marchewki" }, amount: 2, unit: { de: "Stück", pl: "szt." }, group: "produce" },
      { id: "ka-3", name: { de: "Tafelessig 5 %", pl: "Ocet 5 %" }, amount: 300, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "ka-4", name: { de: "Wasser", pl: "Woda" }, amount: 200, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "ka-5", name: { de: "Zucker", pl: "Cukier" }, amount: 2, unit: { de: "EL", pl: "łyżki" }, group: "pantry" },
      { id: "ka-6", name: { de: "Senfkörner, Lorbeer, Salz", pl: "Gorczyca, liść, sól" }, amount: 1, unit: { de: "nach Bedarf", pl: "do smaku" }, group: "spices" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-buraki-w-occie",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-buraki-w-occie/331581a5-e279-4b1c-a999-ce59b9c86357.webp",
    prepMinutes: 20,
    cookMinutes: 50,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-wielkanoc", "occasion-niedziela"],
    techniqueIds: ["technique-konserven"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED, "post-wielkanoc"],
    videoUrl: null,
    translations: {
      de: {
        title: "Buraki w occie",
        slug: "buraki-w-occie",
        excerpt:
          "Gekochte Rote-Bete-Spalten ziehen hier im Essigglas durch und werden süß-sauer und ganz haltbar gemacht, anders als die geriebene Ćwikła, die warmen Buraczki und der Barszcz.",
        steps: [
          {
            text: "Rote Bete ungeputzt weich kochen, das dauert 35 bis 45 Minuten, dann abkühlen lassen, schälen und in Spalten oder Scheiben schneiden. In saubere Gläser schichten.",
            tip: "Das ist ein Glas mit ganzen Stücken, keine geriebene [Ćwikła](/de/rezepte/cwikla), keine warmen [Buraczki](/de/rezepte/buraczki) und kein [Barszcz](/de/rezepte/barszcz-czerwony).",
          },
          {
            text: "Für den Sud 250 ml Essig mit 5 Prozent Säure, 200 ml vom Kochwasser der Roten Bete, 3 EL Zucker und 1 TL Salz mit 2 Nelken und Lorbeer aufkochen.",
            tip: "Nur 5-prozentigen Essig verwenden, das sichert die Haltbarkeit, den österlichen Rahmen dazu setzt der Beitrag zu [Wielkanoc](/de/blog/wielkanoc-speiseplan).",
          },
          {
            text: "Heiß aufgießen, verschließen und 3 Tage kühl durchziehen lassen. Zu Aufschnitt und Braten servieren, danach gekühlt lagern.",
            tip: "Das scharfe Meerrettich-Relish bleibt der Ćwikła vorbehalten, ein süß-saurer Nachbar im Regal ist die [Śliwki w occie](/de/rezepte/sliwki-w-occie).",
          },
        ],
        seoTitle: "Buraki w occie Rezept | Rote Bete eingelegt | Alemniam",
        seoDescription:
          "Buraki w occie, Spalten in 5-prozentigem Essig. Bilingual, klar anders als Ćwikła, Buraczki und Barszcz.",
      },
      pl: {
        title: "Buraki w occie",
        slug: "buraki-w-occie",
        excerpt:
          "Gotowane ćwiartki buraka marynują się tutaj w słoiku z octem i stają się słodko-kwaśnym, trwałym dodatkiem, a nie ćwikłą, nie ciepłymi buraczkami i nie barszczem.",
        steps: [
          {
            text: "Ugotuj buraki w skórce, to zajmuje 35 do 45 minut, ostudź, obierz i pokrój w ćwiartki. Ułóż w czystych słoikach.",
            tip: "To słoik z całymi kawałkami, a nie tarta [ćwikła](/pl/rezepte/cwikla), nie ciepłe [buraczki](/pl/rezepte/buraczki) i nie [barszcz](/pl/rezepte/barszcz-czerwony).",
          },
          {
            text: "Na zalewę zagotuj 250 ml octu 5 procent, 200 ml wywaru z gotowania buraków, 3 łyżki cukru i 1 łyżeczkę soli z 2 goździkami i liściem laurowym.",
            tip: "Używaj tylko octu 5 procent, to gwarantuje trwałość, wielkanocny kontekst opisuje [menu wielkanocne](/pl/blog/menu-wielkanocne).",
          },
          {
            text: "Zalej gorącą zalewą, zamknij i trzymaj 3 dni w lodówce. Podawaj do wędlin i pieczystego.",
            tip: "Ostry chrzanowy relish zostaje przy ćwikle, słodko-kwaśnym sąsiadem w regale są [śliwki w occie](/pl/rezepte/sliwki-w-occie).",
          },
        ],
        seoTitle: "Buraki w occie przepis | Marynaty | Alemniam",
        seoDescription:
          "Buraki w occie, ćwiartki w occie 5 procent. Dwujęzycznie, wyraźnie inne niż ćwikła, buraczki i barszcz.",
      },
    },
    ingredients: [
      { id: "bw-1", name: { de: "Rote Bete", pl: "Buraki" }, amount: 1000, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "bw-2", name: { de: "Tafelessig 5 %", pl: "Ocet 5 %" }, amount: 250, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "bw-3", name: { de: "Zucker", pl: "Cukier" }, amount: 3, unit: { de: "EL", pl: "łyżki" }, group: "pantry" },
      { id: "bw-4", name: { de: "Salz", pl: "Sól" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices" },
      { id: "bw-5", name: { de: "Nelken, Lorbeer", pl: "Goździki, liść laurowy" }, amount: 1, unit: { de: "nach Bedarf", pl: "do smaku" }, group: "spices" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-ogorki-konserwowe",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-ogorki-konserwowe/1313234f-bf85-44e8-9a34-18bde4110fbe.webp",
    prepMinutes: 30,
    cookMinutes: 15,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-grill", "occasion-niedziela"],
    techniqueIds: ["technique-konserven"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED],
    videoUrl: null,
    translations: {
      de: {
        title: "Ogórki konserwowe",
        slug: "ogorki-konserwowe",
        excerpt:
          "Gurken ziehen hier in einem klaren Essigsud mit 5 Prozent Säure, Zwiebel und Senfkörnern durch und werden zum haltbaren Vorrat, ganz anders als der nur kurz gezogene Kis der Małosolne.",
        steps: [
          {
            text: "Feste kleine Gurken waschen, Enden anschneiden. Mit Zwiebelringen, Senfkörnern, Dill und Lorbeer in saubere Gläser schichten.",
            tip: "Das ist die essiggesäuerte Linie und kein Ferment, die kurz ziehenden Verwandten bleiben bei den [Ogórki małosolne](/de/rezepte/ogorki-malosolne), die lange milchsauer gegorene Lake ohne einen Tropfen Essig gehört den [Ogórki kiszone](/de/rezepte/ogorki-kiszone).",
          },
          {
            text: "Sud: 400 ml Tafelessig 5 Prozent plus 200 ml Wasser, 3 EL Zucker, 1 TL Salz. Aufkochen, 2 Minuten ziehen.",
            tip: "Immer 5-prozentigen Essig verwenden und keinen milderen Hausessig, den grundsätzlichen Unterschied zwischen Essig und Ferment erklärt der [Kiszenie-Guide](/de/blog/kiszenie-guide).",
          },
          {
            text: "Gurken mit kochendem Sud vollständig bedecken, Gläser schließen, abkühlen. Mindestens 3 Tage im Kühlschrank ziehen lassen, dann gekühlt lagern.",
            tip: "Im Essigregal daneben passen gut die [Papryka konserwowa](/de/rezepte/papryka-konserwowa) und der [Kalafior w occie](/de/rezepte/kalafior-w-occie), frische Gurken und guten Essig gibt es oft günstig im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
        ],
        seoTitle: "Ogórki konserwowe Rezept | Essiggurken polnisch | Alemniam",
        seoDescription:
          "Ogórki konserwowe in 5-Prozent-Essig. Bilingual, klar getrennt von Małosolne und Kiszone. Kühl lagern.",
      },
      pl: {
        title: "Ogórki konserwowe",
        slug: "ogorki-konserwowe",
        excerpt:
          "Ogórki marynują się tutaj w jasnej zalewie z octu 5 procent, cebulą i gorczycą, i stają się zapasem na dłużej, a nie krótkim kisem jak przy małosolnych.",
        steps: [
          {
            text: "Umyj małe twarde ogórki, przytnij końce. Ułóż w czystych słoikach z krążkami cebuli, gorczycą, koperkiem i liściem laurowym.",
            tip: "To linia octowa, a nie kis, krótko kiszone ogórki zostają przy [ogórkach małosolnych](/pl/rezepte/ogorki-malosolne), a długa zalewa bez kropli octu należy do [ogórków kiszonych](/pl/rezepte/ogorki-kiszone).",
          },
          {
            text: "Zalewa: 400 ml octu 5 procent plus 200 ml wody, 3 łyżki cukru, 1 łyżeczka soli. Zagotuj, 2 minuty.",
            tip: "Zawsze używaj octu 5 procent, a podstawową różnicę między kiszeniem i octem tłumaczy [poradnik o kiszeniu](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Zalej wrzątkiem całkowicie, zamknij, ostudź. Min. 3 dni w lodówce, potem trzymaj chłodno.",
            tip: "W regale octowym dobrze pasują obok [papryka konserwowa](/pl/rezepte/papryka-konserwowa) i [kalafior w occie](/pl/rezepte/kalafior-w-occie), świeże ogórki i dobry ocet często taniej kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
        ],
        seoTitle: "Ogórki konserwowe przepis | Marynaty | Alemniam",
        seoDescription:
          "Ogórki konserwowe w occie 5 procent. Dwujęzycznie, jasno osobno od małosolnych i kiszonych. Do lodówki.",
      },
    },
    ingredients: [
      { id: "okn-1", name: { de: "Kleine Einlegegurken", pl: "Małe ogórki gruntowe" }, amount: 1200, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "okn-2", name: { de: "Tafelessig 5 %", pl: "Ocet 5 %" }, amount: 400, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "okn-3", name: { de: "Wasser", pl: "Woda" }, amount: 200, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "okn-4", name: { de: "Zucker", pl: "Cukier" }, amount: 3, unit: { de: "EL", pl: "łyżki" }, group: "pantry" },
      { id: "okn-5", name: { de: "Salz", pl: "Sól" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices" },
      { id: "okn-6", name: { de: "Zwiebel", pl: "Cebula" }, amount: 1, unit: { de: "Stück", pl: "szt." }, group: "produce" },
      { id: "okn-7", name: { de: "Senfkörner, Dill, Lorbeer", pl: "Gorczyca, koper, liść laurowy" }, amount: 1, unit: { de: "nach Bedarf", pl: "do smaku" }, group: "spices" },
    ],
    createdAt: "2026-08-20T11:00:00.000Z",
    updatedAt: "2026-08-20T11:00:00.000Z",
  },
];
