import Image from "next/image";

const cards = [
  {
    quote:
      "The outdoor sessions completely changed how I show up for myself. Stronger, calmer, clearer.",
    name: "Amina K.",
    image: "/images/img-6385.jpg",
  },
  {
    quote:
      "Coaching that actually listens. My plan flexes with my life without losing intensity.",
    name: "Jordan P.",
    image: "/images/img-6386.jpg",
  },
  {
    quote:
      "Community without the ego. Reset made fitness feel like belonging again.",
    name: "Sofia R.",
    image: "/images/img-6388.jpg",
  },
];

export function Testimonials() {
  return (
    <section id="coaching" className="bg-bone px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Image
          src="/images/img-5319-2.jpg"
          alt="Reset Studios members"
          width={72}
          height={72}
          className="mx-auto h-16 w-16 rounded-full object-cover"
        />
        <blockquote className="mt-8 font-display text-[clamp(1.5rem,3.5vw,2.25rem)] text-ink">
          “Reset isn’t a workout. It’s the ritual that keeps me grounded.”
        </blockquote>
        <p className="mt-4 text-sm font-medium uppercase tracking-[0.14em] text-muted">
          — Maya L., Member
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.name}
            className="flex flex-col bg-white px-7 py-8 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-lemon"
              aria-hidden
            >
              <path d="M7.2 18c-1.9 0-3.4-1.6-3.4-3.6 0-2.8 2.2-5.8 5.4-8.1L10.5 8c-1.6 1.2-2.6 2.5-2.9 3.8.6-.3 1.3-.4 2-.4 1.8 0 3.2 1.4 3.2 3.2S11.4 18 9.5 18H7.2zm9.3 0c-1.9 0-3.4-1.6-3.4-3.6 0-2.8 2.2-5.8 5.4-8.1L19.8 8c-1.6 1.2-2.6 2.5-2.9 3.8.6-.3 1.3-.4 2-.4 1.8 0 3.2 1.4 3.2 3.2S20.7 18 18.8 18h-2.3z" />
            </svg>
            <p className="mt-5 flex-1 text-base leading-[1.5] text-ink/80">
              {card.quote}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Image
                src={card.image}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                {card.name}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
