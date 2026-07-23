export function Workshop() {
  const details = [
    { label: "Date", value: "Coming soon" },
    { label: "Location", value: "North London" },
    { label: "Time", value: "10:30 am" },
    { label: "Booking", value: "Coming soon" },
  ];

  return (
    <section id="workshop" className="bg-bone-deep px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Monthly Workshop
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] text-ink">
            The Reset{" "}
            <span className="font-script text-[1.05em]">Session</span>
          </h2>
          <p className="prose-body mt-6 max-w-lg">
            A 90 minute whole person session combining gentle movement,
            breathwork, nervous system coaching, journalling and reflection.
          </p>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Information Coming Soon
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {details.map((item) => (
            <div key={item.label} className="bg-white px-5 py-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                {item.label}
              </p>
              <p
                className={`mt-2 font-display text-lg ${
                  item.value === "Coming soon" ? "text-muted" : "text-ink"
                }`}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
