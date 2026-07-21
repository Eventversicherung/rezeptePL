import type { Recipe } from "@/types/content";
import { seedRecipesWave14A } from "./seed-recipes-wave14-a";
import { seedRecipesWave14B } from "./seed-recipes-wave14-b";
import { seedRecipesWave14C } from "./seed-recipes-wave14-c";
import { seedRecipesWave14D } from "./seed-recipes-wave14-d";

/**
 * Wave 14 — unified recipe seed (Integrator E).
 * A Bäckerei (Wuzetka + Drożdżówka) · B Ostern (Jajka + Ćwikła) ·
 * C Composed/Street (Placek po węgiersku + Zapiekanka) · D Leczo
 */
export const seedRecipesWave14: Recipe[] = [
  ...seedRecipesWave14A,
  ...seedRecipesWave14B,
  ...seedRecipesWave14C,
  ...seedRecipesWave14D,
];
