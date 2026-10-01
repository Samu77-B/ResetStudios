"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { OPEN_DAY } from "@/lib/site";

const inputClassName =
  "mt-1.5 w-full border border-white/15 bg-ink/50 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-lemon";

export function OpenDayRegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const formspreeUrl = OPEN_DAY.formspreeFormId
    ? `https://formspree.io/f/${OPEN_DAY.formspreeFormId}`
    : null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!formspreeUrl) {
      setError(
        "Registration is not configured yet. Please email us to reserve your pass.",
      );
      return;
    }

    setSubmitting(true);
    try {
      const form = event.currentTarget;
      const response = await fetch(formspreeUrl, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError(
        "Something went wrong. Please try again or email us to register.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      id="register"
      className="w-full max-w-xl rounded-sm border border-white/15 bg-ink/40 p-6 backdrop-blur-md md:p-8"
    >
      <h2 className="font-display text-[clamp(1.25rem,4vw,1.65rem)] leading-snug text-white">
        {OPEN_DAY.formHeading}
      </h2>

      {submitted ? (
        <div className="mt-6 rounded-sm border border-lemon/40 bg-lemon/10 px-4 py-5">
          <p className="font-display text-lg text-white">You&apos;re on the list.</p>
          <p className="mt-2 text-sm text-white/85">
            Your free Open Day pass is registered for {OPEN_DAY.dateLabel}. We
            can&apos;t wait to welcome you — see you from 2pm.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lemon">
              First name
            </span>
            <input
              type="text"
              name="firstName"
              required
              autoComplete="given-name"
              className={inputClassName}
            />
          </label>

          <label className="block">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lemon">
              Email address
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
              Phone number{" "}
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

          <fieldset className="space-y-2">
            <legend className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lemon">
              What are your primary goals?
            </legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {OPEN_DAY.goals.map((goal) => (
                <label
                  key={goal.value}
                  className="flex cursor-pointer items-center gap-3 border border-white/15 bg-ink/30 p-3 has-[:checked]:border-lemon has-[:checked]:bg-white/5"
                >
                  <input
                    type="checkbox"
                    name="goals"
                    value={goal.value}
                    className="accent-lemon"
                  />
                  <span className="relative h-8 w-8 shrink-0">
                    <Image
                      src={goal.icon}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="32px"
                    />
                  </span>
                  <span className="text-sm text-white">{goal.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <input type="hidden" name="_subject" value="Open Day registration" />

          {error ? (
            <p className="rounded-sm border border-red-400/40 bg-red-950/40 px-3 py-2 text-xs text-white">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-lemon px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-lemon-deep disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Sending…" : "Claim My Free Open Day Pass"}
          </button>
        </form>
      )}
    </div>
  );
}
