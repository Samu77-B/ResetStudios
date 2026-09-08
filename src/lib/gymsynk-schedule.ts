import { TIMETABLE } from "@/lib/site";

export type TimetableSession = {
  name: string;
  start: string;
  end: string;
  durationMinutes: number;
};

export type TimetableDay = {
  day: string;
  classes: TimetableSession[];
};

const DAY_ORDER = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

type GymsynkClass = {
  classTitle: string;
  startTime: string;
  endTime: string;
  durationMinutes: number;
};

type GymsynkDay = {
  day: string;
  classes: GymsynkClass[];
};

function formatClassTime(iso: string) {
  const date = new Date(iso);
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  hours %= 12;
  if (hours === 0) {
    hours = 12;
  }
  return `${hours}:${minutes} ${period}`;
}

export function staticTimetable(): TimetableDay[] {
  return TIMETABLE.map((day) => ({
    day: day.day,
    classes: day.classes.map((session) => ({
      name: session.name,
      start: session.start,
      end: session.end,
      durationMinutes: 45,
    })),
  }));
}

function mergeApiDays(apiDays: GymsynkDay[]): TimetableDay[] {
  return DAY_ORDER.map((day) => {
    const entry = apiDays.find((item) => item.day === day);
    return {
      day,
      classes:
        entry?.classes.map((session) => ({
          name: session.classTitle,
          start: formatClassTime(session.startTime),
          end: formatClassTime(session.endTime),
          durationMinutes: session.durationMinutes,
        })) ?? [],
    };
  });
}

export async function fetchLiveTimetable(): Promise<TimetableDay[]> {
  const base = process.env.NEXT_PUBLIC_GYMSYNK_API_URL?.replace(/\/$/, "");
  const tenant = process.env.NEXT_PUBLIC_GYMSYNK_TENANT ?? "reset";

  if (!base) {
    return staticTimetable();
  }

  const response = await fetch(
    `${base}/api/public/${encodeURIComponent(tenant)}/schedule`,
    { next: { revalidate: 60 } },
  );

  if (!response.ok) {
    throw new Error(`GymSynk schedule unavailable (${response.status})`);
  }

  const data = (await response.json()) as { days: GymsynkDay[] };
  return mergeApiDays(data.days ?? []);
}

export async function loadTimetable(): Promise<{
  days: TimetableDay[];
  source: "live" | "static";
}> {
  try {
    const days = await fetchLiveTimetable();
    return { days, source: "live" };
  } catch {
    return { days: staticTimetable(), source: "static" };
  }
}

export function defaultActiveDayIndex(days: TimetableDay[]) {
  const jsDay = new Date().getDay();
  const todayName = DAY_ORDER[jsDay === 0 ? 6 : jsDay - 1];
  const index = days.findIndex((day) => day.day === todayName);
  if (index >= 0 && days[index]?.classes.length) {
    return index;
  }

  const firstWithClasses = days.findIndex((day) => day.classes.length > 0);
  return firstWithClasses >= 0 ? firstWithClasses : 0;
}
