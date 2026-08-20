import { createClient } from "@/lib/supabase/server";
import { mapProfile } from "@/lib/data/supabase-account";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import type { Profile, UserRole } from "@/types/content";

export { isSupabaseConfigured };

function isStaffRole(role: UserRole | undefined) {
  return role === "admin" || role === "moderator";
}

export async function getSessionUser(): Promise<Profile | null> {
  if (!isSupabaseConfigured()) return null;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: row } = await supabase
    .from("profiles")
    .select("id, email, display_name, role, preferred_locale")
    .eq("id", user.id)
    .maybeSingle();

  if (row) return mapProfile(row);

  return {
    id: user.id,
    email: user.email ?? "",
    role: "user",
    displayName: user.email?.split("@")[0] ?? "User",
    preferredLocale: "de",
  };
}

export async function requireUser(): Promise<Profile> {
  const user = await getSessionUser();
  if (!user) throw new Error("UNAUTHORIZED");
  return user;
}

export async function requireAdmin(): Promise<Profile> {
  const user = await requireUser();
  if (!isStaffRole(user.role)) {
    throw new Error("FORBIDDEN");
  }
  return user;
}

export function isStaff(user: Profile | null): boolean {
  return Boolean(user && isStaffRole(user.role));
}
