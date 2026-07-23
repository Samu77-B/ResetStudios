const pillars = [
  { value: "1:1", label: "Personal Coaching" },
  { value: "Online", label: "Personal Training" },
  { value: "Mind", label: "& Body Focus" },
  { value: "Book", label: "An Appointment" },
];

export function Stats() {
  return (
    <section className="border-y border-ink/10 bg-white px-5 py-14 md:px-8 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-0">
        {pillars.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col items-center text-center md:px-6 ${
              i > 0 ? "md:border-l md:border-ink/15" : ""
            }`}
          >
            <p className="font-display text-4xl text-ink md:text-5xl">
              {item.value}
            </p>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
