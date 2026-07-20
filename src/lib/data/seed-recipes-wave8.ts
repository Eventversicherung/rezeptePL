import type { Recipe } from "@/types/content";
import { seedRecipesWave8A } from "./seed-recipes-wave8-a";
import { seedRecipesWave8B } from "./seed-recipes-wave8-b";
import { seedRecipesWave8C } from "./seed-recipes-wave8-c";
import { seedRecipesWave8D } from "./seed-recipes-wave8-d";

/**
 * Wave 8 — unified recipe seed (Integrator E).
 * A Beilagen · B Suppen · C Pączki · D Knedle
 */
export const seedRecipesWave8: Recipe[] = [
  ...seedRecipesWave8A,
  ...seedRecipesWave8B,
  ...seedRecipesWave8C,
  ...seedRecipesWave8D,
];
