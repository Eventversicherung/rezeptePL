import type { Recipe } from "@/types/content";
import { seedRecipesWave9A } from "./seed-recipes-wave9-a";
import { seedRecipesWave9B } from "./seed-recipes-wave9-b";
import { seedRecipesWave9C } from "./seed-recipes-wave9-c";
import { seedRecipesWave9D } from "./seed-recipes-wave9-d";

/**
 * Wave 9 — unified recipe seed (Integrator E).
 * A Fleisch/Sonntag · B Beilage+Suppe · C Babka · D Kaszanka
 */
export const seedRecipesWave9: Recipe[] = [
  ...seedRecipesWave9A,
  ...seedRecipesWave9B,
  ...seedRecipesWave9C,
  ...seedRecipesWave9D,
];
