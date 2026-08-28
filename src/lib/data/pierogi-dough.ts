import type { RecipeIngredient, RecipeStep } from "@/types/content";

/**
 * Classic Polish pierogi dough: flour, boiling water, salt, oil. No egg.
 * Hot water gelatinizes starch so the dough stays soft and seals cleanly.
 * Egg is a later house variant (firmer, more pasta-like), not the default.
 */
export function pierogiDoughIngredients(
  prefix: string,
  flourGrams = 500,
): RecipeIngredient[] {
  const waterMl = Math.round(flourGrams * 0.5);
  const oilTbsp = flourGrams >= 400 ? 2 : 1;
  const saltTsp = flourGrams >= 400 ? 1 : 0.5;

  return [
    {
      id: `${prefix}-dough-flour`,
      name: { de: "Weizenmehl Type 550", pl: "Mąka pszenna typ 550" },
      amount: flourGrams,
      unit: { de: "g", pl: "g" },
      group: "pantry",
      section: "dough",
      substitute: {
        de: "Type 405 geht auch, der Teig wird zarter und braucht oft etwas weniger Wasser",
        pl: "Typ 405 też działa, ciasto będzie delikatniejsze i często weźmie trochę mniej wody",
      },
    },
    {
      id: `${prefix}-dough-salt`,
      name: { de: "Salz", pl: "Sól" },
      amount: saltTsp,
      unit: { de: "TL", pl: "łyżeczka" },
      group: "spices",
      section: "dough",
    },
    {
      id: `${prefix}-dough-water`,
      name: { de: "Kochendes Wasser", pl: "Wrząca woda" },
      amount: waterMl,
      unit: { de: "ml", pl: "ml" },
      group: "pantry",
      section: "dough",
      storeHintDe:
        "Heiß aufgießen, nicht kalt. Bei Bedarf löffelweise nachgeben",
    },
    {
      id: `${prefix}-dough-oil`,
      name: { de: "Neutrales Öl", pl: "Olej rzepakowy" },
      amount: oilTbsp,
      unit: { de: "EL", pl: "łyżki" },
      group: "pantry",
      section: "dough",
    },
  ];
}

export const pierogiDoughStepDe: RecipeStep = {
  text: "Mehl und Salz mischen, kochendes Wasser mit dem Öl unter Rühren dazugeben, 8 Minuten zu einem glatten Teig kneten und abgedeckt 20 bis 30 Minuten ruhen lassen.",
  tip: "Klassischer Pierogi-Teig braucht kein Ei. Das heiße Wasser macht ihn weich und dehnbar. Mengen und Teiggefühl stehen im [Pierogi-Teig](/de/blog/pierogi-teig).",
};

export const pierogiDoughStepPl: RecipeStep = {
  text: "Wymieszaj mąkę z solą, wlej wrzątek z olejem, zagniataj 8 minut na gładkie ciasto i odstaw przykryte na 20 do 30 minut.",
  tip: "Klasyczne ciasto na pierogi nie potrzebuje jajka. Wrzątek robi je miękkie i elastyczne. Ilości i czucie ciasta opisuje [ciasto na pierogi](/pl/blog/ciasto-na-pierogi).",
};
