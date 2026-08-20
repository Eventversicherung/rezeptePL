"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export type AuthFormState = {
  error?: string;
  message?: string;
};

function localeFrom(formData: FormData) {
  return String(formData.get("locale") ?? "de");
}

export async function loginAction(
  _prev: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const locale = localeFrom(formData);
  if (!email || !password) {
    return { error: "missing" };
  }
  if (!isSupabaseConfigured()) {
    return { error: "not_configured" };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    return { error: "invalid" };
  }
  redirect(`/${locale}/profil`);
}

export async function registerAction(
  _prev: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const locale = localeFrom(formData);
  if (!email || !password) {
    return { error: "missing" };
  }
  if (password.length < 8) {
    return { error: "weak_password" };
  }
  if (!isSupabaseConfigured()) {
    return { error: "not_configured" };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    if (error.message.toLowerCase().includes("already")) {
      return { error: "exists" };
    }
    return { error: "signup" };
  }
  if (!data.session) {
    return { message: "confirm" };
  }
  redirect(`/${locale}/profil`);
}

export async function logoutAction(formData: FormData) {
  const locale = localeFrom(formData);
  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }
  redirect(`/${locale}`);
}
