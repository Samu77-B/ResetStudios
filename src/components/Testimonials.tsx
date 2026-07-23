import Image from "next/image";
import { SITE } from "@/lib/site";

const cards = [
  {
    quote:
      "Holistic coaching that looks at the whole picture — habits, mindset, movement, and the routines that hold it all together.",
    name: "Whole-Person Focus",
    image: "/images/img-6385.jpg",
  },
  {
    quote:
      "Online personal training for UK clients who need flexibility without losing structure, accountability, or results.",
    name: "Online Personal Training",
    image: "/images/img-6386.jpg",
  },
  {
    quote:
      "Transformative health coaching services built to help you reset — then keep going with a plan that fits real life.",
    name: "Lasting Change",
    image: "/images/img-6388.jpg",
  },
];

export function Testimonials() {
  return (
    <section id="approach" className="bg-bone px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Image
          src="/images/img-5319-2.jpg"
          alt="Reset Studios"
          width={72}
          height={72}
          className="mx-auto h-16 w-16 rounded-full object-cover"
        />
        <blockquote className="mt-8 font-display text-[clamp(1.5rem,3.5vw,2.25rem)] text-ink">
          “Discover Reset Studios — your holistic health coach in the UK.”
        </blockquote>
        <p className="mt-4 text-sm font-medium uppercase tracking-[0.14em] text-muted">
          Start Your Wellness Journey Today
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

      <div className="mt-12 text-center">
        <a
          href={SITE.bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-ink px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-ink-soft"
        >
          Explore Coaching
        </a>
      </div>
    </section>
  );
}
