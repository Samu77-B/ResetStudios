import Image from "next/image";
import Link from "next/link";

export function BlogMarquee() {
  const phrase = "RECIPES  /  WORKOUT TIPS  /  HEALTHY HABITS  /  ";

  return (
    <section
      id="journal"
      className="relative overflow-hidden bg-ink-soft py-20 md:py-28"
    >
      <Image
        src="/images/img-6404.jpg"
        alt=""
        fill
        className="object-cover opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/70" />

      <div className="relative z-10">
        <div className="overflow-hidden border-y border-white/15 py-3">
          <div className="animate-marquee flex w-max whitespace-nowrap">
            <span className="font-display text-[clamp(2rem,6vw,4rem)] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.55)]">
              {phrase.repeat(4)}
            </span>
            <span
              aria-hidden
              className="font-display text-[clamp(2rem,6vw,4rem)] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.55)]"
            >
              {phrase.repeat(4)}
            </span>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-6xl flex-col items-start justify-between gap-10 px-5 md:flex-row md:items-end md:px-8">
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-white">
              From The Journal
            </h2>
            <p className="mt-4 max-w-sm text-base leading-[1.5] text-white/75">
              Movement cues, recovery ideas, and fuel that fits real life.
            </p>
            <Link
              href="#contact"
              className="mt-6 inline-flex bg-lemon px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-lemon-deep"
            >
              Read More
            </Link>
          </div>

          <article className="w-full max-w-sm overflow-hidden bg-white">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/img-6387.jpg"
                alt="Outdoor coaching session"
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
            <div className="px-5 py-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                Training · 5 Min Read
              </p>
              <h3 className="mt-2 font-display text-xl text-ink">
                Why Outdoor Sessions Unlock Better Focus
              </h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
