import { ParallaxImage } from "@/components/ParallaxImage";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[70svh] overflow-hidden md:min-h-[75svh]"
    >
      <ParallaxImage
        src="/images/photoroom-20260520-54717-pm.jpg"
        alt="Reset Studios holistic health coaching"
        priority
        intensity={60}
        imageClassName="object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ink/70" />

      <div className="relative z-10 flex min-h-[70svh] flex-col items-center justify-center px-5 pb-14 pt-28 text-center md:min-h-[75svh]">
        <p className="animate-fade-up mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 md:text-xs">
          Holistic Health Coach · UK
        </p>
        <h1 className="animate-fade-up-delay font-display text-[clamp(2.4rem,7vw,5rem)] text-white">
          Transformative{" "}
          <span className="text-lemon">Health</span>
          <br />
          Coaching Services
        </h1>
        <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-lg text-base leading-[1.5] text-white/85">
          {SITE.description}
        </p>
        <a
          href={SITE.bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-up-delay-2 mt-8 inline-flex bg-lemon px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-lemon-deep"
        >
          Book Online
        </a>
      </div>
    </section>
  );
}
