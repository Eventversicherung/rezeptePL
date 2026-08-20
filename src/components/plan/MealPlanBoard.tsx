"use client";

import { useMemo, useState, useTransition } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  assignMealSlot,
  copyLastWeekAction,
} from "@/app/actions/account";
import { DayStrip } from "./DayStrip";
import { MealSlotTile } from "./MealSlotTile";
import { PlanIngredientPreview } from "./PlanIngredientPreview";
import { RecipePickerSheet } from "./RecipePickerSheet";
import { RecipeTray, TRAY_DROP_ID } from "./RecipeTray";
import { WeekSwitcher } from "./WeekSwitcher";
import type { PlanRecipe } from "@/lib/plan/recipe";
import { formatDayNumber, mondayOf, weekdayIndex } from "@/lib/plan/week";
import type { Locale, MealPlan, MealSlot } from "@/types/content";

const SLOTS: MealSlot[] = ["breakfast", "lunch", "dinner"];

type SlotKey = `${number}-${MealSlot}`;
type PickerTarget = "tray" | SlotKey;

function keyOf(weekday: number, slot: MealSlot): SlotKey {
  return `${weekday}-${slot}`;
}

function parseDrop(id: string): { weekday: number; slot: MealSlot } | null {
  const match = /^drop-slot:(\d):(breakfast|lunch|dinner)$/.exec(id);
  if (!match) return null;
  return { weekday: Number(match[1]), slot: match[2] as MealSlot };
}

function recipeFromDrag(data: Record<string, unknown> | undefined) {
  const recipe = data?.recipe;
  return recipe && typeof recipe === "object" ? (recipe as PlanRecipe) : null;
}

export function MealPlanBoard({
  plan,
  recipes,
  saved,
  locale,
  weekdayLabels,
}: {
  plan: MealPlan;
  recipes: PlanRecipe[];
  saved: PlanRecipe[];
  locale: Locale;
  weekdayLabels: string[];
}) {
  const t = useTranslations("plan");
  const [pending, startTransition] = useTransition();
  const [planId, setPlanId] = useState(plan.id);
  const [tray, setTray] = useState<PlanRecipe[]>([]);
  const [library, setLibrary] = useState<Record<string, PlanRecipe>>(() =>
    Object.fromEntries(recipes.map((recipe) => [recipe.id, recipe])),
  );
  const [slots, setSlots] = useState<Partial<Record<SlotKey, string>>>(() => {
    const next: Partial<Record<SlotKey, string>> = {};
    for (const item of plan.items) {
      next[keyOf(item.weekday, item.slot)] = item.recipeId;
    }
    return next;
  });
  const todayWeekday = weekdayIndex();
  const isCurrentWeek = plan.weekStart === mondayOf();
  const [selectedDay, setSelectedDay] = useState(
    isCurrentWeek ? todayWeekday : 0,
  );
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerTarget, setPickerTarget] = useState<PickerTarget>("tray");
  const [activeRecipe, setActiveRecipe] = useState<PlanRecipe | null>(null);
  const [copyMessage, setCopyMessage] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
  );

  const assignedRecipes = useMemo(() => {
    const ids = Object.values(slots).filter(Boolean) as string[];
    return ids
      .map((id) => library[id])
      .filter((recipe): recipe is PlanRecipe => Boolean(recipe));
  }, [library, slots]);

  function remember(recipe: PlanRecipe) {
    setLibrary((current) =>
      current[recipe.id] ? current : { ...current, [recipe.id]: recipe },
    );
  }

  function persist(weekday: number, slot: MealSlot, recipeId: string | null) {
    startTransition(async () => {
      const result = await assignMealSlot({
        planId,
        weekStart: plan.weekStart,
        weekday,
        slot,
        recipeId,
      });
      if (result.ok) setPlanId(result.planId);
    });
  }

  function placeInSlot(weekday: number, slot: MealSlot, recipe: PlanRecipe) {
    const key = keyOf(weekday, slot);
    const displacedId = slots[key];
    remember(recipe);
    setSlots((current) => ({ ...current, [key]: recipe.id }));
    setTray((current) => {
      const without = current.filter((item) => item.id !== recipe.id);
      if (displacedId && displacedId !== recipe.id) {
        const displaced = library[displacedId];
        if (displaced && !without.some((item) => item.id === displaced.id)) {
          return [...without, displaced];
        }
      }
      return without;
    });
    persist(weekday, slot, recipe.id);
  }

  function clearSlot(weekday: number, slot: MealSlot) {
    const key = keyOf(weekday, slot);
    const recipeId = slots[key];
    setSlots((current) => {
      const next = { ...current };
      delete next[key];
      return next;
    });
    if (recipeId && library[recipeId]) {
      setTray((current) =>
        current.some((item) => item.id === recipeId)
          ? current
          : [...current, library[recipeId]],
      );
    }
    persist(weekday, slot, null);
  }

  function openPicker(target: PickerTarget) {
    setPickerTarget(target);
    setPickerOpen(true);
  }

  function handlePick(recipe: PlanRecipe) {
    remember(recipe);
    if (pickerTarget === "tray") {
      setTray((current) =>
        current.some((item) => item.id === recipe.id)
          ? current
          : [...current, recipe],
      );
      return;
    }
    const [weekday, slot] = pickerTarget.split("-") as [string, MealSlot];
    placeInSlot(Number(weekday), slot, recipe);
  }

  function handleDragStart(event: DragStartEvent) {
    setActiveRecipe(recipeFromDrag(event.active.data.current));
  }

  function handleDragEnd(event: DragEndEvent) {
    setActiveRecipe(null);
    const recipe = recipeFromDrag(event.active.data.current);
    const overId = event.over?.id ? String(event.over.id) : "";
    if (!recipe || !overId) return;

    if (overId === TRAY_DROP_ID) {
      const from = event.active.data.current;
      if (from?.kind === "slot") {
        clearSlot(from.weekday as number, from.slot as MealSlot);
      }
      return;
    }

    const target = parseDrop(overId);
    if (!target) return;
    const from = event.active.data.current;
    if (from?.kind === "slot") {
      const fromWeekday = from.weekday as number;
      const fromSlot = from.slot as MealSlot;
      if (fromWeekday === target.weekday && fromSlot === target.slot) return;
      const incoming = slots[keyOf(target.weekday, target.slot)];
      setSlots((current) => {
        const next = { ...current };
        if (incoming) next[keyOf(fromWeekday, fromSlot)] = incoming;
        else delete next[keyOf(fromWeekday, fromSlot)];
        next[keyOf(target.weekday, target.slot)] = recipe.id;
        return next;
      });
      persist(target.weekday, target.slot, recipe.id);
      persist(fromWeekday, fromSlot, incoming ?? null);
      return;
    }

    placeInSlot(target.weekday, target.slot, recipe);
  }

  function handleCopyLastWeek() {
    startTransition(async () => {
      const result = await copyLastWeekAction(plan.weekStart, locale);
      if (!result.ok) {
        setCopyMessage(t("copyEmpty"));
        return;
      }
      setPlanId(result.planId);
      setLibrary((current) => ({
        ...current,
        ...Object.fromEntries(result.recipes.map((recipe) => [recipe.id, recipe])),
      }));
      setSlots((current) => {
        const next = { ...current };
        for (const item of result.items) {
          next[keyOf(item.weekday, item.slot)] = item.recipeId;
        }
        return next;
      });
      setCopyMessage(t("copied"));
    });
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setActiveRecipe(null)}
    >
      <div className="meal-plan">
        <WeekSwitcher weekStart={plan.weekStart} locale={locale} />

        <RecipeTray
          recipes={tray}
          onAdd={() => openPicker("tray")}
          onRemove={(recipeId) =>
            setTray((current) => current.filter((item) => item.id !== recipeId))
          }
        />

        <div className="md:hidden">
          <DayStrip
            weekStart={plan.weekStart}
            labels={weekdayLabels}
            selected={selectedDay}
            todayWeekday={todayWeekday}
            isCurrentWeek={isCurrentWeek}
            onSelect={setSelectedDay}
          />
          <div className="meal-day">
            {SLOTS.map((slot) => (
              <div key={slot} className="meal-day__row">
                <p>{t(slot)}</p>
                <MealSlotTile
                  weekday={selectedDay}
                  slot={slot}
                  recipe={
                    slots[keyOf(selectedDay, slot)]
                      ? library[slots[keyOf(selectedDay, slot)]!] ?? null
                      : null
                  }
                  today={isCurrentWeek && selectedDay === todayWeekday}
                  onAdd={() => openPicker(keyOf(selectedDay, slot))}
                  onRemove={() => clearSlot(selectedDay, slot)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="meal-grid max-md:hidden">
          <div />
          {weekdayLabels.map((label, weekday) => (
            <div
              key={label}
              className={`meal-grid__day ${
                isCurrentWeek && weekday === todayWeekday ? "is-today" : ""
              }`}
            >
              <span>{label}</span>
              <strong>{formatDayNumber(plan.weekStart, weekday)}</strong>
            </div>
          ))}
          {SLOTS.map((slot) => (
            <div key={slot} className="contents">
              <p className="meal-grid__slot">{t(slot)}</p>
              {weekdayLabels.map((_, weekday) => (
                <MealSlotTile
                  key={keyOf(weekday, slot)}
                  weekday={weekday}
                  slot={slot}
                  compact
                  today={isCurrentWeek && weekday === todayWeekday}
                  recipe={
                    slots[keyOf(weekday, slot)]
                      ? library[slots[keyOf(weekday, slot)]!] ?? null
                      : null
                  }
                  onAdd={() => openPicker(keyOf(weekday, slot))}
                  onRemove={() => clearSlot(weekday, slot)}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="meal-plan__actions">
          <button
            type="button"
            className="text-sm text-muted underline-offset-4 hover:underline"
            onClick={handleCopyLastWeek}
            disabled={pending}
          >
            {t("copyLastWeek")}
          </button>
          {copyMessage ? <span className="text-sm text-muted">{copyMessage}</span> : null}
        </div>

        <PlanIngredientPreview
          recipes={assignedRecipes}
          locale={locale}
          weekStart={plan.weekStart}
          disabled={pending || assignedRecipes.length === 0}
        />
      </div>

      <RecipePickerSheet
        open={pickerOpen}
        locale={locale}
        saved={saved}
        onOpenChange={setPickerOpen}
        onPick={handlePick}
      />

      <DragOverlay>
        {activeRecipe ? (
          <div className="meal-drag">
            <Image
              src={activeRecipe.image}
              alt=""
              fill
              sizes="80px"
              className="object-cover"
            />
            <span>{activeRecipe.title}</span>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
