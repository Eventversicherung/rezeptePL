import "server-only";

import { after } from "next/server";
import { listPublicPageUrls } from "@/lib/seo/public-urls";
import type { IndexNowResult } from "@/lib/seo/indexnow-types";
import { siteUrl } from "@/lib/utils";

/**
 * Ownership key hosted at /{key}.txt (IndexNow option 1).
 * Override with INDEXNOW_KEY only when rotating; then replace the public file too.
 */
const COMMITTED_INDEXNOW_KEY = "89c5ac649f2ae35af9a8081453eb4668";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const BATCH_SIZE = 10_000;
const KEY_PATTERN = /^[A-Za-z0-9-]{8,128}$/;

export function getIndexNowKey(): string | null {
  const key = (process.env.INDEXNOW_KEY?.trim() || COMMITTED_INDEXNOW_KEY).trim();
  if (!KEY_PATTERN.test(key)) return null;
  return key;
}

export function getIndexNowHost(): { origin: string; host: string } | null {
  try {
    const origin = siteUrl();
    const url = new URL(origin);
    if (url.hostname === "localhost" || url.hostname === "127.0.0.1") {
      return null;
    }
    if (url.hostname.endsWith(".vercel.app")) {
      return null;
    }
    return { origin, host: url.host };
  } catch {
    return null;
  }
}

function sameHostUrls(urls: string[], host: string): string[] {
  const unique = new Set<string>();
  for (const raw of urls) {
    try {
      const parsed = new URL(raw);
      if (parsed.host !== host) continue;
      unique.add(parsed.toString());
    } catch {
      /* skip invalid */
    }
  }
  return [...unique];
}

export async function submitUrlsToIndexNow(
  urls: string[],
): Promise<IndexNowResult> {
  const site = getIndexNowHost();
  if (!site) {
    return {
      ok: false,
      host: "",
      submitted: 0,
      skipped: "not-production",
    };
  }

  const key = getIndexNowKey();
  if (!key) {
    return {
      ok: false,
      host: site.host,
      submitted: 0,
      skipped: process.env.INDEXNOW_KEY ? "invalid-key" : "missing-key",
    };
  }

  const urlList = sameHostUrls(urls, site.host);
  if (urlList.length === 0) {
    return { ok: false, host: site.host, submitted: 0, skipped: "empty" };
  }

  const keyLocation = `${site.origin}/${key}.txt`;
  let lastStatus = 0;

  try {
    for (let i = 0; i < urlList.length; i += BATCH_SIZE) {
      const batch = urlList.slice(i, i + BATCH_SIZE);
      const response = await fetch(INDEXNOW_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          host: site.host,
          key,
          keyLocation,
          urlList: batch,
        }),
        signal: AbortSignal.timeout(15_000),
      });
      lastStatus = response.status;
      if (response.status !== 200 && response.status !== 202) {
        const detail = await response.text().catch(() => "");
        console.error(
          `[indexnow] submit failed status=${response.status} count=${batch.length}`,
        );
        return {
          ok: false,
          host: site.host,
          submitted: i,
          status: response.status,
          error: detail.slice(0, 200) || `HTTP ${response.status}`,
        };
      }
    }

    console.info(
      `[indexnow] submitted ${urlList.length} urls host=${site.host} status=${lastStatus}`,
    );
    return {
      ok: true,
      host: site.host,
      submitted: urlList.length,
      status: lastStatus,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "IndexNow request failed";
    console.error("[indexnow] request error");
    return {
      ok: false,
      host: site.host,
      submitted: 0,
      error: message,
    };
  }
}

export async function submitAllPublicUrlsToIndexNow(): Promise<IndexNowResult> {
  const urls = await listPublicPageUrls();
  return submitUrlsToIndexNow(urls);
}

/** Fire-and-forget after the HTTP response (publish/save). */
export function notifyIndexNowAfterResponse(urls: string[]) {
  if (urls.length === 0) return;
  after(() => {
    void submitUrlsToIndexNow(urls);
  });
}
