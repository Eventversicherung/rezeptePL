import type { Recipe } from "@/types/content";
import { seedRecipesWave12A } from "./seed-recipes-wave12-a";
import { seedRecipesWave12B } from "./seed-recipes-wave12-b";
import { seedRecipesWave12C } from "./seed-recipes-wave12-c";
import { seedRecipesWave12D } from "./seed-recipes-wave12-d";

/**
 * Wave 12 — unified recipe seed (Integrator E).
 * A Suppen (Grzybowa + Grochówka) · B Wigilia-Pasta + Szarlotka ·
 * C Ostern + Buraczki · D Klopsy + Kluski kładzione
 */
export const seedRecipesWave12: Recipe[] = [
  ...seedRecipesWave12A,
  ...seedRecipesWave12B,
  ...seedRecipesWave12C,
  ...seedRecipesWave12D,
];
