import type { Recipe } from "@/types/content";
import { seedRecipesWave10A } from "./seed-recipes-wave10-a";
import { seedRecipesWave10B } from "./seed-recipes-wave10-b";
import { seedRecipesWave10C } from "./seed-recipes-wave10-c";
import { seedRecipesWave10D } from "./seed-recipes-wave10-d";

/**
 * Wave 10 — unified recipe seed (Integrator E).
 * A Flaki+Schab · B Piernik+Pomidorowa · C Family variants · D Makaron
 * Family variants (C) carry familyId — catalog shows family once; switcher lists variants.
 */
export const seedRecipesWave10: Recipe[] = [
  ...seedRecipesWave10A,
  ...seedRecipesWave10B,
  ...seedRecipesWave10C,
  ...seedRecipesWave10D,
];
