import { COACHING_PACKAGES, SITE } from "@/lib/site";

export function Coaching() {
  return (
    <section id="coaching" className="bg-bone px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            1:1 Coaching
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3rem)] text-ink">
            Work With{" "}
            <span className="font-script text-[1.05em]">Fernanda</span>
          </h2>
          <p className="prose-body mt-6 max-w-md">
            A calm space to slow down, understand what is really happening, and
            begin to find your way back to yourself.
          </p>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Coming Soon
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {COACHING_PACKAGES.map((pkg) => (
            <article
              key={pkg.title}
              className="flex flex-col bg-white px-6 py-7 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            >
              <h3 className="font-display text-xl text-ink">{pkg.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {pkg.text}
              </p>
              <a
                href={SITE.enquireUrl}
                className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink transition hover:text-muted"
              >
                Enquire →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
