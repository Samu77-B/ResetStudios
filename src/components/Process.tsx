import { PROCESS } from "@/lib/site";

export function Process() {
  return (
    <section className="border-y border-ink/10 bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((item) => (
          <article
            key={item.step}
            className="border border-ink/10 bg-bone px-6 py-8"
          >
            <p className="font-display text-3xl text-muted">{item.step}</p>
            <h3 className="mt-4 font-display text-2xl text-ink">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
