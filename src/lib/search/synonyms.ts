import { fold } from "./normalize";

/**
 * DE ↔ PL cooking aliases. Each group is bidirectional: typing any member
 * also matches the others (Quark → Twaróg, Kohlrouladen → Gołąbki).
 */
const GROUPS: readonly (readonly string[])[] = [
  ["pierogi", "piroggen", "teigtaschen"],
  ["ruskie", "ruthenisch"],
  ["twarog", "twaróg", "quark"],
  ["golabki", "gołąbki", "kohlrouladen", "kohlroulade"],
  ["bigos", "jageeintopf", "krauttopf"],
  ["barszcz", "borschtsch", "borscht"],
  ["zurek", "żurek", "sauerteigsuppe"],
  ["rosol", "rosół", "huhnerbruhe", "huhnersuppe", "hühnersuppe", "hühnerbrühe"],
  ["kotlet", "schnitzel", "mielony", "schabowy"],
  ["paczki", "pączki", "berliner", "krapfen"],
  ["faworki", "chrust", "chrusciki", "liebesschleifen"],
  ["makowiec", "mohnkuchen", "mohnrolle", "mohn"],
  ["sernik", "kasekuchen", "käsekuchen"],
  ["kielbasa", "kiełbasa", "polnische wurst", "wurst"],
  ["kabanos", "kabanosy"],
  ["smietana", "śmietana", "schmand"],
  ["kapusta", "kohl", "sauerkraut", "kwaszona"],
  ["ogorek", "ogórek", "gurke", "essiggurke", "kiszone"],
  ["grzyby", "pilze", "steinpilze"],
  ["kasza", "gryka", "buchweizen", "grutze", "grütze"],
  ["zakwas", "sauerteig"],
  ["chrzan", "meerrettich"],
  ["oscypek", "schafskase", "schafskäse"],
  ["zapiekanka"],
  ["placki", "puffer", "kartoffelpuffer", "racuchy"],
  ["nalesniki", "naleśniki", "palatschinken", "pfannkuchen"],
  ["kluski", "knodel", "knödel", "knedle"],
  ["kopytka", "gnocchi"],
  ["lazanki", "łazanki"],
  ["mizeria", "gurkensalat"],
  ["surowka", "surówka", "salat"],
  ["gulasz", "gulasch"],
  ["pasztet", "pastete"],
  ["tatar", "tartar"],
  ["zupa", "suppe", "suppen", "zupy", "soup"],
  ["wigilia", "heiligabend", "weihnachten"],
  ["wielkanoc", "ostern"],
  ["schnell", "schnellerezepte", "szybkie", "feierabend"],
  ["vegetarisch", "wegetarianskie", "wegetariańskie"],
  ["suess", "süß", "süßes", "geback", "gebäck", "slodkosci", "słodkości"],
];

const INDEX = new Map<string, string[]>();

for (const group of GROUPS) {
  const folded = group.map((term) => fold(term)).filter(Boolean);
  const unique = [...new Set(folded)];
  for (const term of unique) {
    const prev = INDEX.get(term) ?? [];
    INDEX.set(term, [...new Set([...prev, ...unique])]);
  }
}

/** Query token plus every alias in its synonym group. */
export function expandToken(token: string): string[] {
  const folded = fold(token);
  if (!folded) return [];
  const aliases = INDEX.get(folded);
  if (aliases) return aliases;

  const partial: string[] = [folded];
  if (folded.length >= 4) {
    for (const [key, group] of INDEX) {
      if (key.startsWith(folded) || folded.startsWith(key)) {
        partial.push(...group);
      }
    }
  }
  return [...new Set(partial)];
}
