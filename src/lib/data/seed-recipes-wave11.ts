import type { Recipe } from "@/types/content";
import { seedRecipesWave11D } from "./seed-recipes-wave11-d";

/**
 * Wave 11 — unified recipe seed (Integrator E).
 * A–C: cover retrofit only (in place on existing seeds).
 * D: +3 recipes (Ryba po grecku, Golonka, Kompot z suszu).
 */
export const seedRecipesWave11: Recipe[] = [...seedRecipesWave11D];
