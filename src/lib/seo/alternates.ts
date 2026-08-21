import type { Metadata } from "next";

/** DE is the default locale — x-default must match Google's hreflang rules. */
export function localeLanguages(de: string, pl: string) {
  return {
    de,
    pl,
    "x-default": de,
  } as const;
}

export const privateRobots: Metadata["robots"] = {
  index: false,
  follow: false,
  nocache: true,
};

export const privatePageMetadata: Metadata = {
  robots: privateRobots,
};

export const noIndexFollow: Metadata["robots"] = {
  index: false,
  follow: true,
};
