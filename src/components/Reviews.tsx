const reviews = [
  {
    text: "Best decision I made this year. The coaching is sharp and the community is genuine.",
    name: "Ellie M.",
  },
  {
    text: "Outdoor sessions are next level. I leave every class clearer and stronger.",
    name: "Chris T.",
  },
  {
    text: "Finally a studio that treats mind and body as one practice — not a slogan.",
    name: "Priya S.",
  },
  {
    text: "Memberships are flexible, the vibe is premium without the pretence.",
    name: "Noah B.",
  },
  {
    text: "I’ve tried everything. Reset is the first place that stuck for longer than a month.",
    name: "Lauren H.",
  },
  {
    text: "From first session to now — progressive, personal, and properly motivating.",
    name: "Marcus W.",
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
        <h2 className="font-display text-4xl text-white md:text-5xl">
          What Members{" "}
          <span className="font-script text-[1.1em] font-semibold lowercase tracking-normal text-lemon">
            Say
          </span>
        </h2>
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.name}
            className="border border-white/10 px-6 py-7 transition hover:border-lemon/40"
          >
            <Stars />
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              “{review.text}”
            </p>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
              {review.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
