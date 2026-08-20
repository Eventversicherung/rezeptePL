"use client";

import { useTranslations } from "next-intl";
import {
  BookmarkIcon,
  CalendarDaysIcon,
  ChefHatIcon,
  LogOutIcon,
  SettingsIcon,
  ShieldIcon,
  ShoppingBasketIcon,
  UserIcon,
} from "lucide-react";
import { logoutAction } from "@/app/actions/auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@/i18n/navigation";

function initialsFrom(displayName: string, email: string) {
  const parts = displayName.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0]![0]}${parts[1]![0]}`.toUpperCase();
  }
  if (parts[0]?.length) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return email.slice(0, 2).toUpperCase() || "?";
}

export function UserMenu({
  displayName,
  email,
  locale,
  isStaff,
}: {
  displayName: string;
  email: string;
  locale: string;
  isStaff: boolean;
}) {
  const t = useTranslations("nav");
  const initials = initialsFrom(displayName, email);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        type="button"
        aria-label={t("accountMenu")}
        className="inline-flex size-11 shrink-0 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#dc143c]/45"
      >
        <Avatar size="default">
          <AvatarFallback className="bg-[var(--navy)] text-xs font-semibold text-white">
            {initials}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="w-64 min-w-64">
        <DropdownMenuLabel className="px-2 py-2">
          <p className="truncate text-sm font-semibold text-foreground">
            {displayName}
          </p>
          <p className="truncate text-xs font-normal text-muted-foreground">
            {email}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="min-h-10">
            <Link href="/profil">
              <UserIcon />
              {t("profile")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="min-h-10">
            <Link href="/profil/rezepte">
              <ChefHatIcon />
              {t("myRecipes")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="min-h-10">
            <Link href="/profil#saved">
              <BookmarkIcon />
              {t("favorites")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="min-h-10">
            <Link href="/plan">
              <CalendarDaysIcon />
              {t("plan")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="min-h-10">
            <Link href="/listen">
              <ShoppingBasketIcon />
              {t("lists")}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="min-h-10">
            <Link href="/einstellungen">
              <SettingsIcon />
              {t("settings")}
            </Link>
          </DropdownMenuItem>
          {isStaff ? (
            <DropdownMenuItem asChild className="min-h-10">
              <Link href="/admin">
                <ShieldIcon />
                {t("admin")}
              </Link>
            </DropdownMenuItem>
          ) : null}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <form action={logoutAction}>
          <input type="hidden" name="locale" value={locale} />
          <DropdownMenuItem variant="destructive" asChild className="min-h-10">
            <button type="submit" className="w-full">
              <LogOutIcon />
              {t("logout")}
            </button>
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
