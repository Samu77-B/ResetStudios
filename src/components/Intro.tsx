import Image from "next/image";
import Link from "next/link";

export function Intro() {
  return (
    <section id="studio" className="bg-bone px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/img-5629.jpg"
              alt="Reset Studios coach outdoors"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 420px"
            />
          </div>
          <div className="ribbon absolute -bottom-3 left-1/2 z-10 w-[115%] -translate-x-1/2 bg-lemon py-2.5 text-center shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink md:text-xs">
              Follow Us On Instagram
            </p>
          </div>
        </div>

        <div className="pt-6 lg:pt-0">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">
            The Reset Way
          </p>
          <h2 className="font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-[0.95] text-ink">
            Strength That{" "}
            <span className="font-script text-[1.05em] font-semibold lowercase tracking-normal text-ink">
              Feels
            </span>{" "}
            Like Freedom
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted md:text-base">
            Reset Studios blends coaching, community, and intentional movement —
            indoors and out. We build programs that honour your body, sharpen
            your focus, and make showing up the easiest part of your week.
          </p>
          <Link
            href="#coaching"
            className="mt-8 inline-flex bg-ink px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-ink-soft"
          >
            Meet The Studio
          </Link>
        </div>
      </div>
    </section>
  );
}
