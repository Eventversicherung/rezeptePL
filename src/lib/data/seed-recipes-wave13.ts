import type { Recipe } from "@/types/content";
import { seedRecipesWave13A } from "./seed-recipes-wave13-a";
import { seedRecipesWave13B } from "./seed-recipes-wave13-b";
import { seedRecipesWave13C } from "./seed-recipes-wave13-c";
import { seedRecipesWave13D } from "./seed-recipes-wave13-d";

/**
 * Wave 13 — unified recipe seed (Integrator E).
 * A Suppen (Krupnik + Szczawiowa) · B Wigilia-Süß + Napoleonka ·
 * C Chałka + Pasztet · D Biała kiełbasa Cook
 */
export const seedRecipesWave13: Recipe[] = [
  ...seedRecipesWave13A,
  ...seedRecipesWave13B,
  ...seedRecipesWave13C,
  ...seedRecipesWave13D,
];
