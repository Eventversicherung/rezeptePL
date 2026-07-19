export type Locale = "de" | "pl";
export type RecipeStatus = "draft" | "published";
export type IngredientGroup =
  | "produce"
  | "dairy"
  | "pantry"
  | "spices"
  | "polish"
  | "other";
export type UserRole = "user" | "admin" | "moderator";
export type SubmissionStatus = "pending" | "approved" | "rejected";
export type RecipeMode = "cook" | "shop";

export type RecipeStep = {
  text: string;
  tip?: string;
};

export type RecipeIngredient = {
  id: string;
  name: Record<Locale, string>;
  amount: number;
  unit: Record<Locale, string>;
  group: IngredientGroup;
  storeHintDe?: string;
  substitute?: Record<Locale, string>;
};

export type RecipeTranslation = {
  title: string;
  slug: string;
  excerpt: string;
  steps: RecipeStep[];
  seoTitle: string;
  seoDescription: string;
};

export type Recipe = {
  id: string;
  status: RecipeStatus;
  coverImage: string;
  prepMinutes: number;
  cookMinutes: number;
  servings: number;
  regionIds: string[];
  occasionIds: string[];
  techniqueIds: string[];
  authorId?: string;
  videoUrl?: string | null;
  translations: Record<Locale, RecipeTranslation>;
  ingredients: RecipeIngredient[];
  createdAt: string;
  updatedAt: string;
};

export type ClusterKind = "region" | "occasion" | "technique";

export type Cluster = {
  id: string;
  kind: ClusterKind;
  slug: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  seoTitle: Record<Locale, string>;
  seoDescription: Record<Locale, string>;
};

export type ShoppingListItem = {
  id: string;
  name: string;
  amount: number;
  unit: string;
  group: IngredientGroup;
  checked: boolean;
  recipeId?: string;
  storeHintDe?: string;
};

export type ShoppingList = {
  id: string;
  userId: string;
  name: string;
  items: ShoppingListItem[];
  updatedAt: string;
};

export type SavedRecipe = {
  userId: string;
  recipeId: string;
  createdAt: string;
};

export type CommunitySubmission = {
  id: string;
  userId: string;
  status: SubmissionStatus;
  locale: Locale;
  title: string;
  excerpt: string;
  steps: string[];
  ingredients: string[];
  createdAt: string;
};

export type Profile = {
  id: string;
  email: string;
  role: UserRole;
  displayName: string;
  preferredLocale: Locale;
};
