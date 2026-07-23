import { BUSINESSES } from "@/lib/site";

export function Businesses() {
  return (
    <section className="bg-bone-deep px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          Individual Businesses
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4.5vw,3rem)] text-ink">
          Meet The Founders&apos; Businesses{" "}
          <span className="font-script text-[1.05em]">Beyond The Studio.</span>
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {BUSINESSES.map((biz) => (
            <article key={biz.title} className="bg-white px-8 py-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                {biz.label}
              </p>
              <h3 className="mt-3 font-display text-2xl text-ink">
                {biz.title}
              </h3>
              <p className="prose-body mt-4">{biz.text}</p>
              <a
                href={biz.href}
                className="mt-8 inline-flex bg-ink px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-ink-soft"
              >
                {biz.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
