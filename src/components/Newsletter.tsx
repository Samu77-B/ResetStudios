"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  return (
    <section className="bg-bone px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[0.95] text-ink">
            Retake Control Of Workouts{" "}
            <span className="font-script text-[1.05em] font-semibold lowercase tracking-normal text-ink">
              From Home
            </span>
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            Get fresh session ideas, recovery tips, and member drops straight to
            your inbox — no spam, just signal.
          </p>

          {done ? (
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-ink">
              You&apos;re in. Welcome to the loop.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="h-12 flex-1 border border-ink/20 bg-white px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-ink"
              />
              <button
                type="submit"
                className="h-12 bg-ink px-7 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-ink-soft"
              >
                Join
              </button>
            </form>
          )}
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="animate-float relative mx-auto aspect-[9/16] w-[70%] overflow-hidden rounded-[2rem] border-[10px] border-ink bg-ink shadow-2xl">
            <Image
              src="/images/apparel-mockup.png"
              alt="Reset Studios apparel"
              fill
              className="object-cover object-top"
              sizes="280px"
            />
          </div>
          <div className="absolute -right-2 bottom-10 hidden w-40 overflow-hidden border-4 border-white shadow-lg sm:block md:-right-6">
            <Image
              src="/images/img-5319-2.jpg"
              alt=""
              width={160}
              height={200}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
