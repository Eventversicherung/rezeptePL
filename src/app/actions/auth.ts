"use server";

import { redirect } from "next/navigation";
import { loginLocal, logoutLocal } from "@/lib/auth/session";

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const locale = String(formData.get("locale") ?? "de");
  if (!email || !password) {
    throw new Error("Missing credentials");
  }
  await loginLocal(email, password);
  redirect(`/${locale}/profil`);
}

export async function registerAction(formData: FormData) {
  return loginAction(formData);
}

export async function logoutAction(formData: FormData) {
  const locale = String(formData.get("locale") ?? "de");
  await logoutLocal();
  redirect(`/${locale}`);
}
