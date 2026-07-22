import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/images/img-6383.jpg"
        alt="Reset Studios outdoor training lifestyle"
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ink/70" />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 pb-16 pt-28 text-center">
        <p className="animate-fade-up mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-white/80 md:text-xs">
          Mind · Body · Reset
        </p>
        <h1 className="animate-fade-up-delay font-display text-[clamp(3.2rem,12vw,7.5rem)] leading-[0.92] text-white">
          Train for{" "}
          <span className="font-script text-[1.05em] font-semibold lowercase tracking-normal text-lemon">
            Health
          </span>
          <br />
          Not Just Looks
        </h1>
        <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/85 md:text-base">
          Boutique coaching, outdoor sessions, and memberships built to reset how
          you move — for life.
        </p>
        <Link
          href="#programs"
          className="animate-fade-up-delay-2 mt-8 inline-flex bg-lemon px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-lemon-deep"
        >
          Explore Programs
        </Link>
      </div>
    </section>
  );
}
