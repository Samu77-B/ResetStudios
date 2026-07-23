"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 100, suffix: "+", label: "Active Members" },
  { end: 80, suffix: "+", label: "Sessions Monthly" },
  { end: 100, suffix: "%", label: "Mind & Body Focus" },
  { end: 10, suffix: "+", label: "Years Coaching" },
];

const DURATION_MS = 700;

function CountUp({
  end,
  suffix,
  active,
}: {
  end: number;
  suffix: string;
  active: boolean;
}) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    if (!active) {
      setValue(0);
      return;
    }

    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION_MS);
      // ease-out cubic for a snappy finish
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(end * eased));
      if (t < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [active, end]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-y border-ink/10 bg-white px-5 py-14 md:px-8 md:py-16"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-0">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center text-center md:px-6 ${
              i > 0 ? "md:border-l md:border-ink/15" : ""
            }`}
          >
            <p className="font-display text-4xl text-ink md:text-5xl">
              <CountUp end={stat.end} suffix={stat.suffix} active={inView} />
            </p>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
