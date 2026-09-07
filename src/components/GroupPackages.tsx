import { BookingButton } from "@/components/booking/BookingProvider";
import { GROUP_PACKAGES } from "@/lib/site";

export function GroupPackages() {
  return (
    <section id="packages" className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          {GROUP_PACKAGES.label}
        </p>
        <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] text-ink">
          Group Training{" "}
          <span className="font-script text-[1.05em]">
            {GROUP_PACKAGES.headline}
          </span>
        </h2>
        <p className="prose-body mt-6 max-w-lg">
          Monthly class packs by tier. Pick the sessions that match how often
          you train.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {GROUP_PACKAGES.tiers.map((tier) => (
            <article
              key={tier.name}
              className="flex flex-col border border-ink/10 bg-bone px-6 py-8"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                {tier.name}
              </p>
              <h3 className="mt-3 font-display text-xl text-ink">{tier.rate}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {tier.examples}
              </p>
              <ul className="mt-6 flex-1 space-y-4">
                {tier.plans.map((plan) => (
                  <li key={plan.name} className="border-t border-ink/10 pt-4">
                    <p className="font-display text-base text-ink">
                      {plan.name}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-ink">
                      {plan.price}
                    </p>
                    {"note" in plan && plan.note ? (
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {plan.note}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <BookingButton className="inline-flex bg-ink px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-ink-soft">
            Book a Session
          </BookingButton>
        </div>
      </div>
    </section>
  );
}
