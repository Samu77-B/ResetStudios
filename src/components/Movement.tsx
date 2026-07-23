import { MOVEMENT } from "@/lib/site";

export function Movement() {
  return (
    <section id="movement" className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          Movement & Breathwork
        </p>
        <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] text-ink">
          Move With{" "}
          <span className="font-script text-[1.05em]">Intention.</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {MOVEMENT.map((item) => (
            <article
              key={item.title}
              className="border border-ink/10 bg-bone px-6 py-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lemon font-display text-lg text-ink">
                {item.letter}
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
