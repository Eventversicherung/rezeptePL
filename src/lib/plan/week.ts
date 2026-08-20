export const PAST_WEEKS = 1;
export const FUTURE_WEEKS = 8;
const WEEK_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function mondayOf(date = new Date()): string {
  const copy = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = copy.getDay();
  copy.setDate(copy.getDate() + (day === 0 ? -6 : 1 - day));
  return `${copy.getFullYear()}-${pad(copy.getMonth() + 1)}-${pad(copy.getDate())}`;
}

export function addWeeks(weekStart: string, offset: number): string {
  const date = dateFromIso(weekStart) ?? new Date();
  date.setDate(date.getDate() + offset * 7);
  return mondayOf(date);
}

export function weekStartFor(offset = 0): string {
  const base = new Date();
  base.setDate(base.getDate() + offset * 7);
  return mondayOf(base);
}

export function weekdayIndex(date = new Date()): number {
  const day = date.getDay();
  return day === 0 ? 6 : day - 1;
}

export function dateFromIso(iso: string): Date | null {
  const match = WEEK_DATE.exec(iso);
  if (!match) return null;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return Number.isNaN(date.getTime()) ? null : date;
}

export function parseWeekParam(raw: string | undefined): string {
  const current = mondayOf();
  const parsed = raw ? dateFromIso(raw) : null;
  const monday = parsed ? mondayOf(parsed) : current;
  const min = addWeeks(current, -PAST_WEEKS);
  const max = addWeeks(current, FUTURE_WEEKS);
  if (monday < min) return min;
  if (monday > max) return max;
  return monday;
}

export function dateForWeekday(weekStart: string, weekday: number): Date {
  const start = dateFromIso(weekStart) ?? new Date();
  start.setDate(start.getDate() + weekday);
  return start;
}

export function formatWeekRange(weekStart: string, locale: string): string {
  const start = dateForWeekday(weekStart, 0);
  const end = dateForWeekday(weekStart, 6);
  const fmt = new Intl.DateTimeFormat(locale === "pl" ? "pl-PL" : "de-DE", {
    day: "numeric",
    month: "short",
  });
  return `${fmt.format(start)} – ${fmt.format(end)}`;
}

export function formatDayNumber(weekStart: string, weekday: number): string {
  return String(dateForWeekday(weekStart, weekday).getDate());
}

export function minWeekStart(): string {
  return addWeeks(mondayOf(), -PAST_WEEKS);
}

export function maxWeekStart(): string {
  return addWeeks(mondayOf(), FUTURE_WEEKS);
}
