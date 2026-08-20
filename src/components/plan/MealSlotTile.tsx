"use client";

import { useDraggable, useDroppable } from "@dnd-kit/core";
import { PlusIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { MealSlot } from "@/types/content";
import type { PlanRecipe } from "@/lib/plan/recipe";
import { cn } from "@/lib/utils";

export function slotDropId(weekday: number, slot: MealSlot) {
  return `drop-slot:${weekday}:${slot}`;
}

export function slotDragId(weekday: number, slot: MealSlot) {
  return `slot:${weekday}:${slot}`;
}

export function MealSlotTile({
  weekday,
  slot,
  recipe,
  compact,
  today,
  onAdd,
  onRemove,
}: {
  weekday: number;
  slot: MealSlot;
  recipe: PlanRecipe | null;
  compact?: boolean;
  today?: boolean;
  onAdd: () => void;
  onRemove: () => void;
}) {
  const t = useTranslations("plan");
  const ts = useTranslations("search");
  const droppable = useDroppable({ id: slotDropId(weekday, slot) });
  const draggable = useDraggable({
    id: slotDragId(weekday, slot),
    disabled: !recipe,
    data: { kind: "slot", weekday, slot, recipe },
  });

  return (
    <div
      ref={droppable.setNodeRef}
      className={cn(
        "meal-slot",
        compact && "meal-slot--compact",
        today && "meal-slot--today",
        droppable.isOver && "is-over",
        recipe && "has-recipe",
      )}
    >
      {recipe ? (
        <article
          ref={draggable.setNodeRef}
          className={cn("meal-slot__card", draggable.isDragging && "is-dragging")}
          {...draggable.listeners}
          {...draggable.attributes}
        >
          <div className="meal-slot__photo">
            <Image
              src={recipe.image}
              alt=""
              fill
              sizes={compact ? "120px" : "420px"}
              className="object-cover"
            />
          </div>
          <div className="meal-slot__copy">
            <p className="meal-slot__title">{recipe.title}</p>
            <p className="meal-slot__meta">
              {ts("minutes", { count: recipe.minutes })}
            </p>
          </div>
          <button
            type="button"
            className="meal-slot__remove"
            onClick={(event) => {
              event.stopPropagation();
              onRemove();
            }}
            aria-label={t("remove")}
          >
            <XIcon />
          </button>
        </article>
      ) : (
        <button type="button" className="meal-slot__add" onClick={onAdd}>
          <PlusIcon />
          <span>{compact ? t("emptySlot") : t("addRecipe")}</span>
        </button>
      )}
    </div>
  );
}
