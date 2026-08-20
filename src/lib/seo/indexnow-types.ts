export type IndexNowSkipReason =
  | "not-production"
  | "empty"
  | "missing-key"
  | "invalid-key";

export type IndexNowResult = {
  ok: boolean;
  host: string;
  submitted: number;
  status?: number;
  skipped?: IndexNowSkipReason;
  error?: string;
};
