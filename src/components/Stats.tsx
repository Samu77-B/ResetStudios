const stats = [
  { value: "100+", label: "Active Members" },
  { value: "80+", label: "Sessions Monthly" },
  { value: "100%", label: "Mind & Body Focus" },
  { value: "10+", label: "Years Coaching" },
];

export function Stats() {
  return (
    <section className="border-y border-ink/10 bg-white px-5 py-14 md:px-8 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-0">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center text-center md:px-6 ${
              i > 0 ? "md:border-l md:border-ink/15" : ""
            }`}
          >
            <p className="font-display text-5xl text-ink md:text-6xl">
              {stat.value}
            </p>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
