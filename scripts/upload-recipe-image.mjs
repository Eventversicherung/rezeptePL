#!/usr/bin/env node
/**
 * Upload a generated recipe cover image via the deployed admin API route
 * (`/api/admin/recipe-image`). This script never touches the Supabase
 * secret key — that lives only in the Vercel server environment. This
 * script only needs the narrow, single-purpose `ADMIN_UPLOAD_TOKEN`.
 *
 * Usage:
 *   node scripts/upload-recipe-image.mjs <recipe-id> <path-to-source-image>
 *
 * Example:
 *   node scripts/upload-recipe-image.mjs recipe-bigos ~/Downloads/bigos.png
 *
 * Requires (local-only, never committed, in .env.local):
 *   RECIPE_IMAGE_UPLOAD_URL   e.g. https://rezepte-pl.vercel.app/api/admin/recipe-image
 *   ADMIN_UPLOAD_TOKEN        the narrow upload-only token (not the Supabase secret key)
 *
 * Requires `cwebp` on PATH (macOS: `brew install webp`).
 */

import { existsSync, mkdtempSync, readFileSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, extname, basename } from "node:path";
import { execFileSync } from "node:child_process";

function loadEnvLocal() {
  const envPath = join(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;
  const content = readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const value = trimmed.slice(eqIdx + 1).trim();
    if (!(key in process.env)) process.env[key] = value;
  }
}

function fail(message) {
  console.error(`\n✖ ${message}\n`);
  process.exit(1);
}

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function main() {
  loadEnvLocal();

  const [recipeId, sourcePath] = process.argv.slice(2);
  if (!recipeId || !sourcePath) {
    fail("Usage: node scripts/upload-recipe-image.mjs <recipe-id> <path-to-source-image>");
  }
  if (!/^(recipe|post|category)-[a-z0-9-]+$/.test(recipeId)) {
    fail(`id looks wrong: "${recipeId}" (expected e.g. "recipe-bigos", "post-wigilia", or "category-suppen")`);
  }
  if (!existsSync(sourcePath)) {
    fail(`Source image not found: ${sourcePath}`);
  }

  const uploadUrl = process.env.RECIPE_IMAGE_UPLOAD_URL;
  const token = process.env.ADMIN_UPLOAD_TOKEN;
  if (!uploadUrl) fail("RECIPE_IMAGE_UPLOAD_URL is not set (.env.local).");
  if (!token) fail("ADMIN_UPLOAD_TOKEN is not set (.env.local).");

  try {
    execFileSync("cwebp", ["-version"], { stdio: "ignore" });
  } catch {
    fail("`cwebp` not found on PATH. Install with: brew install webp");
  }

  const tmpDir = mkdtempSync(join(tmpdir(), "recipe-img-"));
  const webpPath = join(tmpDir, `${basename(sourcePath, extname(sourcePath))}.webp`);

  console.log(`→ Converting ${basename(sourcePath)} to WebP (max width 1600px, q=82)…`);
  execFileSync("cwebp", ["-q", "82", "-resize", "1600", "0", sourcePath, "-o", webpPath], {
    stdio: "inherit",
  });

  const beforeSize = statSync(sourcePath).size;
  const afterSize = statSync(webpPath).size;
  console.log(
    `  ${formatBytes(beforeSize)} → ${formatBytes(afterSize)} (${Math.round(
      (1 - afterSize / beforeSize) * 100
    )}% smaller)`
  );

  console.log(`→ Uploading ${recipeId} to ${uploadUrl}…`);
  const webpBuffer = readFileSync(webpPath);
  const form = new FormData();
  form.set("recipeId", recipeId);
  form.set("file", new Blob([webpBuffer], { type: "image/webp" }), "cover.webp");

  const response = await fetch(uploadUrl, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  });

  const body = await response.json().catch(() => ({}));
  rmSync(tmpDir, { recursive: true, force: true });

  if (!response.ok) {
    fail(`Upload failed (${response.status}): ${body.error ?? "unknown error"}`);
  }

  console.log(`\n✔ Done for ${recipeId}`);
  console.log(`  ${body.publicUrl}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
