"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  loginAction,
  registerAction,
  type AuthFormState,
} from "@/app/actions/auth";

export function AuthForm({
  mode,
  locale,
}: {
  mode: "login" | "register";
  locale: string;
}) {
  const t = useTranslations("auth");
  const action = mode === "login" ? loginAction : registerAction;
  const [state, formAction, pending] = useActionState<AuthFormState, FormData>(
    action,
    {},
  );

  const errorKey = state.error
    ? (`error_${state.error}` as
        | "error_missing"
        | "error_invalid"
        | "error_exists"
        | "error_signup"
        | "error_not_configured"
        | "error_weak_password")
    : null;

  return (
    <div className="mx-auto max-w-md space-y-6">
      <h1 className="font-display text-3xl font-semibold">
        {mode === "login" ? t("loginTitle") : t("registerTitle")}
      </h1>
      <p className="text-sm text-muted">{t("hint")}</p>
      {state.message === "confirm" ? (
        <p className="rounded-[var(--radius)] bg-accent-soft px-4 py-3 text-sm">
          {t("confirmEmail")}
        </p>
      ) : null}
      {errorKey ? (
        <p
          className="rounded-[var(--radius)] border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-accent"
          role="alert"
        >
          {t(errorKey)}
        </p>
      ) : null}
      <form action={formAction} className="space-y-4">
        <input type="hidden" name="locale" value={locale} />
        <label className="block space-y-1 text-sm">
          <span>{t("email")}</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-h-12 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
          />
        </label>
        <label className="block space-y-1 text-sm">
          <span>{t("password")}</span>
          <input
            name="password"
            type="password"
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            required
            minLength={mode === "register" ? 8 : 6}
            className="min-h-12 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
          />
        </label>
        <button type="submit" className="btn-primary w-full" disabled={pending}>
          {mode === "login" ? t("login") : t("register")}
        </button>
      </form>
      <p className="text-sm text-muted">
        {mode === "login" ? t("noAccount") : t("hasAccount")}{" "}
        <Link
          href={mode === "login" ? "/registrieren" : "/anmelden"}
          className="text-foreground underline"
        >
          {mode === "login" ? t("register") : t("login")}
        </Link>
      </p>
    </div>
  );
}
