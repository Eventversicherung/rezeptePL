import type { Recipe } from "@/types/content";
import { seedRecipesWave15A } from "./seed-recipes-wave15-a";
import { seedRecipesWave15B } from "./seed-recipes-wave15-b";
import { seedRecipesWave15C } from "./seed-recipes-wave15-c";
import { seedRecipesWave15D } from "./seed-recipes-wave15-d";

/**
 * Wave 15 — unified recipe seed (Integrator E).
 * A Festfleisch (Kaczka + Pieczeń) · B Fest/Buffet (Galareta + Śledziowa) ·
 * C Beilagen (Marchewka + Fasolka szparagowa) · D Suppe+Kisiel (Koperkowa + Kisiel).
 */
export const seedRecipesWave15: Recipe[] = [
  ...seedRecipesWave15A,
  ...seedRecipesWave15B,
  ...seedRecipesWave15C,
  ...seedRecipesWave15D,
];
