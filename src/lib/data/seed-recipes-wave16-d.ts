import type { Recipe } from "@/types/content";

/**
 * Wave 16 Paket D — Chrzan + Kurczak pieczony.
 * Affiliate: guide-only. NO SEED_VERSION bump here.
 */
export const seedRecipesWave16D: Recipe[] = [

  {
    id: "recipe-chrzan",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-chrzan/ed3bc151-402e-42be-a2df-116273ad1caa.webp",
    prepMinutes: 15,
    cookMinutes: 0,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-wielkanoc", "occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-vegetarisch", "category-schnell"],
    relatedPostIds: ["post-wielkanoc", "post-polenladen", "post-smietana-schmand"],
    videoUrl: null,
    translations: {
      de: {
        title: "Chrzan tarty",
        slug: "chrzan",
        excerpt:
          "Chrzan tarty ist scharf geriebener Meerrettich mit Sahne, der weiße Dip zu Ostern und zu Wurst und Braten.",
        steps: [
          {
            text: "Frische Meerrettichwurzel schälen und fein reiben, am besten draußen oder bei geöffnetem Fenster, weil die Dämpfe stark in die Augen ziehen. Alternativ ein gutes Glas Meerrettich gut abtropfen lassen und nachwürzen.",
            tip: "Weiß und scharf bleibt der Charakter dieses Rezepts, die Rote-Bete-Variante gehört zur [Ćwikła](/de/rezepte/cwikla). Frische Wurzel bekommst du oft im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Mit drei bis vier Esslöffeln Sahne oder Schmand, Salz und einem Teelöffel Essig oder Zitronensaft abschmecken. Wer es milder mag, reibt einen halben Apfel dazu.",
            tip: "Bei Fragen zur Sahne hilft der Beitrag zu [Śmietana und Schmand](/de/blog/smietana-schmand). Der Anlassrahmen dafür steht im Beitrag zu [Wielkanoc](/de/blog/wielkanoc-speiseplan).",
          },
          {
            text: "Kalt stellen und zu Schinken, Wurst oder Braten servieren.",
            tip: "Besonders gut passt Chrzan zu [Biała kiełbasa](/de/rezepte/biala-kielbasa) und zu [Pasztet](/de/rezepte/pasztet). Fehlt eine Zutat, hilft der Überblick zu [Ersatzprodukten](/de/blog/ersatzprodukte-de).",
          },
        ],
        seoTitle: "Chrzan tarty Rezept | Meerrettich polnisch | Alemniam",
        seoDescription:
          "Chrzan tarty mit Sahne, scharfer weißer Meerrettich für Ostern und für Wurst und Braten.",
      },
      pl: {
        title: "Chrzan tarty",
        slug: "chrzan",
        excerpt:
          "Chrzan tarty to ostro starty korzeń chrzanu ze śmietaną, biały dodatek na Wielkanoc i do wędlin.",
        steps: [
          {
            text: "Obierz świeży korzeń chrzanu i zetrzyj go drobno, najlepiej na powietrzu albo przy otwartym oknie, bo pary mocno szczypią w oczy. Możesz też odsączyć dobry słoik chrzanu i doprawić go od nowa.",
            tip: "Biały i ostry charakter zostaje tu na pierwszym miejscu, buraczana wersja to [ćwikła](/pl/rezepte/cwikla). Świeży korzeń często znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Dopraw trzema do czterech łyżkami śmietany, solą i łyżeczką octu lub soku z cytryny. Kto lubi łagodniej, dodaje jeszcze pół startego jabłka.",
            tip: "W temacie śmietany pomoże wpis o [śmietanie i Schmandzie](/pl/blog/smietana-czy-schmand). Okazję do tego opisuje wpis o [Wielkanocy](/pl/blog/menu-wielkanocne).",
          },
          {
            text: "Schłodź i podawaj do szynki, kiełbasy lub pieczystego.",
            tip: "Chrzan szczególnie dobrze smakuje z [białą kiełbasą](/pl/rezepte/biala-kielbasa) i [pasztetem](/pl/rezepte/pasztet). Jeśli brakuje składnika, sprawdź [zamienniki](/pl/blog/zamienniki-skladnikow).",
          },
        ],
        seoTitle: "Chrzan tarty przepis | Meerrettich | Alemniam",
        seoDescription:
          "Chrzan tarty ze śmietaną, ostry biały dodatek na Wielkanoc i do wędlin.",
      },
    },
    ingredients: [
      { id: "ch-1", name: { de: "Meerrettichwurzel (oder Glas)", pl: "Korzeń chrzanu (lub słoik)" }, amount: 150, unit: { de: "g", pl: "g" }, group: "produce", storeHintDe: "Im Polenladen, frisch oder im Glas" },
      { id: "ch-2", name: { de: "Sahne oder Schmand", pl: "Śmietana" }, amount: 80, unit: { de: "ml", pl: "ml" }, group: "dairy" },
      { id: "ch-3", name: { de: "Essig oder Zitrone", pl: "Ocet lub cytryna" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "pantry" },
      { id: "ch-4", name: { de: "Salz", pl: "Sól" }, amount: 0.5, unit: { de: "TL", pl: "łyżeczki" }, group: "spices" },
      { id: "ch-5", name: { de: "Apfel (optional)", pl: "Jabłko (opcjonalnie)" }, amount: 0.5, unit: { de: "Stück", pl: "szt." }, group: "produce" },
    ],
    createdAt: "2026-07-28T12:00:00.000Z",
    updatedAt: "2026-07-28T12:00:00.000Z",
  },
  {
    id: "recipe-kurczak-pieczony",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-kurczak-pieczony/67b5c610-7a51-4c18-9467-74428ee6fda5.webp",
    prepMinutes: 20,
    cookMinutes: 90,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: ["post-sonntagsessen", "post-majeranek", "post-polenladen"],
    videoUrl: null,
    translations: {
      de: {
        title: "Kurczak pieczony",
        slug: "kurczak-pieczony",
        excerpt:
          "Kurczak pieczony ist ein ganzes Hähnchen aus dem Ofen mit Majeranek, das klassische polnische Sonntagsgeflügel.",
        steps: [
          {
            text: "Das Hähnchen, etwa 1,6 kg, gut trocken tupfen und innen und außen mit Salz, Pfeffer und Majeranek einreiben. Zwiebel- oder Apfelstücke locker in die Höhlung füllen.",
            tip: "Majeranek ist die polnische Kräuterseele dieses Gerichts, mehr dazu erklärt der [Majeranek-Guide](/de/blog/majeranek). Das ist ein ganzer Ofenvogel, keine [Kaczka](/de/rezepte/kaczka) und kein paniertes Filet wie beim [Kotlet de volaille](/de/rezepte/de-volaille).",
          },
          {
            text: "In eine Auflaufform legen, etwas Wasser auf den Boden geben und bei 190 Grad etwa 75 bis 90 Minuten braten, dabei alle 20 Minuten mit dem Bratensaft begießen, bis die Haut goldbraun ist.",
            tip: "Ein Bratenthermometer schafft Sicherheit, an der dicksten Stelle der Brust sollten es etwa 75 Grad sein, dann bleibt das Fleisch saftig und die Haut trotzdem knusprig.",
          },
          {
            text: "Zehn Minuten ruhen lassen, dann tranchieren und mit Kartoffeln und Surówka servieren.",
            tip: "Als Beilage passt die [Surówka z kapusty](/de/rezepte/surowka) besonders gut. Wer statt Huhn Schweinekamm möchte, findet das beim [Schab pieczony](/de/rezepte/schab-pieczony).",
          },
        ],
        seoTitle: "Kurczak pieczony Rezept | Huhn polnisch Ofen | Alemniam",
        seoDescription:
          "Kurczak pieczony mit Majeranek, ganzes Ofenhuhn für den polnischen Sonntagstisch.",
      },
      pl: {
        title: "Kurczak pieczony",
        slug: "kurczak-pieczony",
        excerpt:
          "Kurczak pieczony to cały kurczak z pieca z majerankiem, klasyczny polski niedzielny ptak.",
        steps: [
          {
            text: "Osusz kurczaka, około 1,6 kg, i natrzyj go solą, pieprzem i majerankiem od wewnątrz i od zewnątrz. Włóż luźno kawałki cebuli lub jabłka do środka.",
            tip: "Majeranek to polska dusza tego dania, więcej o nim pisze [leksykon majeranku](/pl/blog/majeranek-leksykon). To cały ptak z pieca, nie [kaczka](/pl/rezepte/kaczka) i nie panierowany filet jak w [kotlecie de volaille](/pl/rezepte/de-volaille).",
          },
          {
            text: "Ułóż w naczyniu do pieczenia z odrobiną wody na dnie i piecz w 190 stopniach około 75 do 90 minut, polewając sokiem co 20 minut, aż skóra będzie złota.",
            tip: "Termometr do mięsa daje pewność, w najgrubszym miejscu piersi powinno być około 75 stopni, wtedy mięso zostaje soczyste, a skóra chrupiąca.",
          },
          {
            text: "Odstaw na dziesięć minut, potem porcjuj i podawaj z ziemniakami i surówką.",
            tip: "Jako dodatek świetnie sprawdza się [surówka z kapusty](/pl/rezepte/surowka). Kto woli schab, znajdzie go w [schabie pieczonym](/pl/rezepte/schab-pieczony).",
          },
        ],
        seoTitle: "Kurczak pieczony przepis | Huhn z pieca | Alemniam",
        seoDescription:
          "Kurczak pieczony z majerankiem, cały ptak z pieca na niedzielny obiad.",
      },
    },
    ingredients: [
      { id: "ku-1", name: { de: "Ganzes Hähnchen", pl: "Cały kurczak" }, amount: 1600, unit: { de: "g", pl: "g" }, group: "other" },
      { id: "ku-2", name: { de: "Majoran getrocknet", pl: "Majeranek suszony" }, amount: 2, unit: { de: "TL", pl: "łyżeczki" }, group: "spices", storeHintDe: "Im Polenladen" },
      { id: "ku-3", name: { de: "Zwiebel oder Apfel", pl: "Cebula lub jabłko" }, amount: 1, unit: { de: "Stück", pl: "szt." }, group: "produce" },
      { id: "ku-4", name: { de: "Salz", pl: "Sól" }, amount: 2, unit: { de: "TL", pl: "łyżeczki" }, group: "spices" },
      { id: "ku-5", name: { de: "Pfeffer", pl: "Pieprz" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices" },
      { id: "ku-6", name: { de: "Öl oder Butter", pl: "Olej lub masło" }, amount: 2, unit: { de: "EL", pl: "łyżki" }, group: "pantry" },
      { id: "ku-7", name: { de: "Wasser (Form)", pl: "Woda (do naczynia)" }, amount: 150, unit: { de: "ml", pl: "ml" }, group: "pantry" },
    ],
    createdAt: "2026-07-28T12:00:00.000Z",
    updatedAt: "2026-07-28T12:00:00.000Z",
  },

];
