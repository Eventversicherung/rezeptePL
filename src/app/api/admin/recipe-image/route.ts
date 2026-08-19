import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { storagePublicUrl } from "@/lib/supabase/storage";

export const runtime = "nodejs";

const MEDIA_ID_PATTERN = /^(recipe|post|category)-[a-z0-9-]+$/;
const MAX_BYTES = 8 * 1024 * 1024; // 8 MB safety cap

/**
 * Narrow, single-purpose upload endpoint: "store this WebP image under this
 * recipe id in the `recipe-media` bucket." Nothing else.
 *
 * Protected by a dedicated `ADMIN_UPLOAD_TOKEN` bearer token — deliberately
 * NOT the Supabase secret key, which never leaves the server environment.
 * A leaked upload token can only ever be used to upload images to this one
 * bucket via this one route; it has no database or delete access.
 */
export async function POST(request: Request) {
  const expectedToken = process.env.ADMIN_UPLOAD_TOKEN;
  if (!expectedToken) {
    return NextResponse.json(
      { error: "ADMIN_UPLOAD_TOKEN is not configured on this environment." },
      { status: 500 }
    );
  }

  const authHeader = request.headers.get("authorization") ?? "";
  const providedToken = authHeader.replace(/^Bearer\s+/i, "").trim();
  if (!providedToken || providedToken !== expectedToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "Expected multipart/form-data body." },
      { status: 400 }
    );
  }

  const recipeId = String(formData.get("recipeId") ?? "");
  const file = formData.get("file");

  if (!MEDIA_ID_PATTERN.test(recipeId)) {
    return NextResponse.json(
      { error: `Invalid recipeId: "${recipeId}" (expected e.g. "recipe-bigos" or "post-wigilia")` },
      { status: 400 }
    );
  }
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file field." }, { status: 400 });
  }
  if (file.size === 0 || file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: `File size ${file.size} bytes is out of allowed range (0, ${MAX_BYTES}].` },
      { status: 400 }
    );
  }
  if (file.type !== "image/webp") {
    return NextResponse.json(
      { error: `Expected image/webp, got "${file.type}". Convert before uploading.` },
      { status: 400 }
    );
  }

  const folder = recipeId.startsWith("post-")
    ? "blog"
    : recipeId.startsWith("category-")
      ? "categories"
      : "recipes";
  const objectPath = `${folder}/${recipeId}/${randomUUID()}.webp`;
  const bytes = new Uint8Array(await file.arrayBuffer());

  const supabase = getSupabaseAdminClient();
  const { error: uploadError } = await supabase.storage
    .from("recipe-media")
    .upload(objectPath, bytes, { contentType: "image/webp", upsert: false });

  if (uploadError) {
    return NextResponse.json({ error: uploadError.message }, { status: 500 });
  }

  return NextResponse.json({
    recipeId,
    path: objectPath,
    publicUrl: storagePublicUrl("recipe-media", objectPath),
  });
}
