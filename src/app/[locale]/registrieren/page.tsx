import { setRequestLocale } from "next-intl/server";
import { AuthForm } from "@/components/auth/AuthForm";
import { privatePageMetadata } from "@/lib/seo/alternates";

export const metadata = privatePageMetadata;

export default async function RegisterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AuthForm mode="register" locale={locale} />;
}
