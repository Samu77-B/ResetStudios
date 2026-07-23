import { SITE } from "@/lib/site";

const reviews = [
  {
    text: "Holistic health coaching that supports lasting lifestyle change — not just short-term motivation.",
    name: "Holistic Coaching",
  },
  {
    text: "Online personal training for UK clients who want expert guidance with flexible scheduling.",
    name: "Online Training",
  },
  {
    text: "Transformative health coaching services focused on mind, body, and sustainable habits.",
    name: "Mind & Body",
  },
  {
    text: "One-to-one appointments designed around your goals, energy, and real-life routine.",
    name: "Appointments",
  },
  {
    text: "A clear reset: structured support to help you show up consistently and feel stronger.",
    name: "Accountability",
  },
  {
    text: "Start your wellness journey today with coaching built for long-term results.",
    name: "Results Focus",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-lemon"
        >
          <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.4l1.1-6.5L2.6 9.3l6.5-.9L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="bg-ink px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto mb-12 max-w-6xl text-center">
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-white">
          Why Clients Choose Reset
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-[1.5] text-white/65">
          Transformative health coaching services for people ready to reset —
          online and in appointment-based sessions.
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.name}
            className="border border-white/10 px-6 py-7 transition hover:border-lemon/40"
          >
            <Stars />
            <p className="mt-4 text-base leading-[1.5] text-white/85">
              {review.text}
            </p>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/50">
              {review.name}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href={SITE.bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-lemon px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-lemon-deep"
        >
          Book Online
        </a>
      </div>
    </section>
  );
}
