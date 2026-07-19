import { cookies } from "next/headers";
import { randomUUID } from "crypto";
import type { Profile } from "@/types/content";
import {
  getProfile,
  getProfileByEmail,
  upsertProfile,
} from "@/lib/data/repository";

const COOKIE = "alemniam_session";

export async function getSessionUser(): Promise<Profile | null> {
  const jar = await cookies();
  const id = jar.get(COOKIE)?.value;
  if (!id) return null;
  return getProfile(id);
}

export async function requireUser(): Promise<Profile> {
  const user = await getSessionUser();
  if (!user) throw new Error("UNAUTHORIZED");
  return user;
}

export async function requireAdmin(): Promise<Profile> {
  const user = await requireUser();
  if (user.role !== "admin" && user.role !== "moderator") {
    throw new Error("FORBIDDEN");
  }
  return user;
}

export async function loginLocal(
  email: string,
  _password: string,
): Promise<Profile> {
  let profile = await getProfileByEmail(email);
  if (!profile) {
    profile = await upsertProfile({
      id: `user-${randomUUID().slice(0, 8)}`,
      email,
      role: email.toLowerCase().includes("admin") ? "admin" : "user",
      displayName: email.split("@")[0] ?? "User",
      preferredLocale: "de",
    });
  }
  const jar = await cookies();
  jar.set(COOKIE, profile.id, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });
  return profile;
}

export async function logoutLocal(): Promise<void> {
  const jar = await cookies();
  jar.delete(COOKIE);
}

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}
