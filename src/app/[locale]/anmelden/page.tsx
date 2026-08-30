import { setRequestLocale } from "next-intl/server";
import { AuthForm } from "@/components/auth/AuthForm";
import { privatePageMetadata } from "@/lib/seo/alternates";
import { safeNextPath } from "@/lib/auth/safe-next";

export const metadata = privatePageMetadata;

export default async function LoginPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ next?: string }>;
}) {
  const { locale } = await params;
  const { next: nextRaw } = await searchParams;
  setRequestLocale(locale);
  const next = safeNextPath(nextRaw, locale);
  return (
    <AuthForm
      mode="login"
      locale={locale}
      next={next === `/${locale}/profil` ? "" : next}
    />
  );
}
