"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CLASSES, SITE } from "@/lib/site";

export type BookingPackage = "two" | "single";

type BookingFormPanelProps = {
  packageType?: BookingPackage;
  onClose?: () => void;
};

export function BookingFormPanel({
  packageType = "two",
  onClose,
}: BookingFormPanelProps) {
  const [selectedPackage, setSelectedPackage] =
    useState<BookingPackage>(packageType);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSelectedPackage(packageType);
    setSubmitted(false);
  }, [packageType]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const notes = String(data.get("notes") ?? "").trim();
    const pkg = data.get("package") as BookingPackage;

    const packageLabel =
      pkg === "two"
        ? `Two Classes · ${CLASSES.pricing.two}`
        : `Single Class · ${CLASSES.pricing.single}`;

    const body = [
      "New class booking request",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Class: ${packageLabel}`,
      `Session: ${CLASSES.schedule.next}`,
      `Location: ${CLASSES.location}`,
      notes ? `Notes: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const subject = encodeURIComponent(`Class Booking — ${packageLabel}`);
    const mailBody = encodeURIComponent(body);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${mailBody}`;
    setSubmitted(true);
  };

  const inputClassName =
    "mt-2 w-full border border-white/15 bg-ink/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-lemon";

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lemon">
            Saturday Session
          </p>
          <h2
            id="booking-title"
            className="mt-2 font-display text-xl text-white md:text-2xl"
          >
            {CLASSES.schedule.next}
          </h2>
          <p className="mt-1 text-sm text-white/70">{CLASSES.schedule.recurring}</p>
          <p className="mt-3 text-sm text-white/85">
            Pricing: One class {CLASSES.pricing.single} · Two classes{" "}
            {CLASSES.pricing.two}
          </p>
        </div>

        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking form"
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-white transition hover:border-lemon hover:text-lemon"
          >
            <span aria-hidden className="text-xl leading-none">
              ×
            </span>
          </button>
        ) : null}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-1 flex-col overflow-y-auto pt-6"
      >
        <fieldset className="space-y-3">
          <legend className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lemon">
            Choose your class
          </legend>
          <label className="flex cursor-pointer items-start gap-3 border border-white/15 bg-ink/30 p-4 has-[:checked]:border-lemon has-[:checked]:bg-white/5">
            <input
              type="radio"
              name="package"
              value="two"
              checked={selectedPackage === "two"}
              onChange={() => setSelectedPackage("two")}
              className="mt-1 accent-lemon"
            />
            <span>
              <span className="block font-display text-base text-white">
                Two Classes · {CLASSES.pricing.two}
              </span>
              <span className="mt-1 block text-sm text-white/65">
                Best value for regular Saturday sessions
              </span>
            </span>
          </label>
          <label className="flex cursor-pointer items-start gap-3 border border-white/15 bg-ink/30 p-4 has-[:checked]:border-lemon has-[:checked]:bg-white/5">
            <input
              type="radio"
              name="package"
              value="single"
              checked={selectedPackage === "single"}
              onChange={() => setSelectedPackage("single")}
              className="mt-1 accent-lemon"
            />
            <span>
              <span className="block font-display text-base text-white">
                Single Class · {CLASSES.pricing.single}
              </span>
              <span className="mt-1 block text-sm text-white/65">
                One Saturday session at {CLASSES.location}
              </span>
            </span>
          </label>
        </fieldset>

        <div className="mt-8 space-y-4">
          <label className="block">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lemon">
              Full name
            </span>
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              className={inputClassName}
            />
          </label>

          <label className="block">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lemon">
              Email
            </span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              className={inputClassName}
            />
          </label>

          <label className="block">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lemon">
              Phone{" "}
              <span className="normal-case tracking-normal text-white/50">
                (optional)
              </span>
            </span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              className={inputClassName}
            />
          </label>

          <label className="block">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lemon">
              Notes{" "}
              <span className="normal-case tracking-normal text-white/50">
                (optional)
              </span>
            </span>
            <textarea
              name="notes"
              rows={3}
              placeholder="Anything we should know before your session?"
              className={`${inputClassName} resize-none`}
            />
          </label>
        </div>

        <div className="mt-auto space-y-3 pt-8">
          {submitted ? (
            <p className="rounded-sm border border-lemon/40 bg-lemon/10 px-4 py-3 text-sm text-white">
              Your email app should open with the booking details. If it
              doesn&apos;t, email us at{" "}
              <a href={`mailto:${SITE.email}`} className="text-lemon underline">
                {SITE.email}
              </a>
              .
            </p>
          ) : null}

          <button
            type="submit"
            className="w-full bg-lemon px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-lemon-deep"
          >
            Send booking request
          </button>

          <p className="text-center text-sm text-white/60">
            Instagram:{" "}
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lemon hover:underline"
            >
              {SITE.instagramHandle}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
