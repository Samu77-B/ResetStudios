import { SITE } from "@/lib/site";

export function Resources() {
  return (
    <section id="resources" className="bg-bone px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Resources
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3rem)] text-ink">
            Support Between{" "}
            <span className="font-script text-[1.05em]">Sessions.</span>
          </h2>
          <p className="prose-body mt-4">
            Free downloads, journals and practical tools to keep the reset going
            at home.
          </p>
        </div>
        <a
          href={SITE.enquireUrl}
          className="shrink-0 bg-ink px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-ink-soft"
        >
          Download Free Guide
        </a>
      </div>
    </section>
  );
}
