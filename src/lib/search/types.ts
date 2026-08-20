export type SearchMatchKind =
  | "title"
  | "ingredient"
  | "category"
  | "variant"
  | "excerpt"
  | "region"
  | "occasion"
  | "technique";

export type SearchHit = {
  id: string;
  kind: "recipe" | "family";
  href: string;
  title: string;
  image: string;
  minutes: number;
  matchKind: SearchMatchKind;
  matchValue: string;
};

export const SEARCH_QUERY_MAX = 80;
export const SEARCH_RESULT_LIMIT = 8;
export const SEARCH_PICKER_LIMIT = 12;
