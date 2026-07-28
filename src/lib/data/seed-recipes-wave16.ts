import type { Recipe } from "@/types/content";
import { seedRecipesWave16A } from "./seed-recipes-wave16-a";
import { seedRecipesWave16B } from "./seed-recipes-wave16-b";
import { seedRecipesWave16C } from "./seed-recipes-wave16-c";
import { seedRecipesWave16D } from "./seed-recipes-wave16-d";

/**
 * Wave 16 — unified recipe seed (Integrator E).
 * A Surówka+De volaille · B Kasza+Tatar · C Pierniczki+Knedle · D Chrzan+Kurczak.
 */
export const seedRecipesWave16: Recipe[] = [
  ...seedRecipesWave16A,
  ...seedRecipesWave16B,
  ...seedRecipesWave16C,
  ...seedRecipesWave16D,
];
