"use client";

import { useState } from "react";
import { BookingButton } from "@/components/booking/BookingProvider";
import { TIMETABLE } from "@/lib/site";

export function TimeTable() {
  const [activeDay, setActiveDay] = useState(0);
  const selected = TIMETABLE[activeDay];

  return (
    <section id="timetable" className="bg-bone-deep px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          Time Table
        </p>
        <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] text-ink">
          Weekly Class{" "}
          <span className="font-script text-[1.05em]">Schedule</span>
        </h2>
        <p className="prose-body mt-6 max-w-lg">
          All classes run for 45 minutes. Pick a day to see what&apos;s on.
        </p>

        <div
          className="mt-10 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Days of the week"
        >
          {TIMETABLE.map((day, index) => {
            const isActive = index === activeDay;
            return (
              <button
                key={day.day}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveDay(index)}
                className={`shrink-0 px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] transition ${
                  isActive
                    ? "bg-ink text-white"
                    : "bg-white text-ink hover:bg-ink/5"
                }`}
              >
                <span className="md:hidden">{day.day.slice(0, 3)}</span>
                <span className="hidden md:inline">{day.day}</span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          aria-label={selected.day}
          className="mt-6 bg-white"
        >
          <div className="border-b border-ink/10 px-6 py-5">
            <p className="font-display text-2xl text-ink">{selected.day}</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              {selected.classes.length}{" "}
              {selected.classes.length === 1 ? "class" : "classes"}
            </p>
          </div>

          <ul className="divide-y divide-ink/10">
            {selected.classes.map((session) => (
              <li
                key={`${selected.day}-${session.name}-${session.start}`}
                className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <p className="font-display text-lg text-ink">{session.name}</p>
                <p className="shrink-0 text-sm text-muted">
                  {session.start} – {session.end}
                  <span className="mx-2 text-ink/20">·</span>
                  45 mins
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <BookingButton className="inline-flex bg-ink px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-ink-soft">
            Book a Class
          </BookingButton>
        </div>
      </div>
    </section>
  );
}
