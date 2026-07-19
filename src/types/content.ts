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
  /** Long-form SEO body (~800–1200 words), shown below cook/shop UI */
  article?: string;
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
  /** When set, recipe is a variant inside a RecipeFamily */
  familyId?: string;
  /** Short label in the variant switcher */
  variantLabel?: Record<Locale, string>;
  /** Optional thumb for switcher (falls back to coverImage) */
  variantImage?: string;
  /** Related blog post ids for internal links */
  relatedPostIds?: string[];
  authorId?: string;
  videoUrl?: string | null;
  translations: Record<Locale, RecipeTranslation>;
  ingredients: RecipeIngredient[];
  createdAt: string;
  updatedAt: string;
};

export type RecipeFamilyTranslation = {
  title: string;
  slug: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
};

export type RecipeFamily = {
  id: string;
  defaultVariantId: string;
  coverImage: string;
  regionIds: string[];
  occasionIds: string[];
  techniqueIds: string[];
  /** Ordered for the switcher UI */
  variantIds: string[];
  relatedPostIds?: string[];
  translations: Record<Locale, RecipeFamilyTranslation>;
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

/** Affiliate / partner product shown as inline cards in long-form articles */
export type AffiliatePartner = "amazon" | "other";

export type AffiliateProduct = {
  id: string;
  partner: AffiliatePartner;
  /** Full tracking URL (Amazon associate tag etc.) */
  url: string;
  imageUrl: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  cta: Record<Locale, string>;
  tags: string[];
  /** Prefer these products on matching recipe pages */
  recipeIds?: string[];
  /** Prefer on matching blog posts */
  postIds?: string[];
  active: boolean;
  sortOrder: number;
};

export type BlogPostType =
  | "guide"
  | "lexicon"
  | "culture"
  | "diaspora"
  | "buying-guide";

export type BlogPostStatus = "draft" | "published";

export type BlogPostTranslation = {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  seoTitle: string;
  seoDescription: string;
};

export type BlogPost = {
  id: string;
  status: BlogPostStatus;
  postType: BlogPostType;
  coverImage: string;
  /** Silo keys: region|occasion|technique|dishFamily|ingredient|diaspora|gear|culture */
  siloIds: string[];
  relatedRecipeIds: string[];
  relatedPostIds: string[];
  relatedProductIds: string[];
  clusterIds?: string[];
  translations: Record<Locale, BlogPostTranslation>;
  publishedAt: string;
  updatedAt: string;
};

/** Catalog row for recipe index: family once, or standalone recipe */
export type RecipeCatalogItem =
  | { kind: "family"; family: RecipeFamily; defaultRecipe: Recipe }
  | { kind: "recipe"; recipe: Recipe };
