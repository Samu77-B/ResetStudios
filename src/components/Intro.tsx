import Link from "next/link";
import { ParallaxImage } from "@/components/ParallaxImage";

export function Intro() {
  return (
    <section id="studio" className="bg-bone px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="relative aspect-[3/4] overflow-hidden">
            <ParallaxImage
              src="/images/img-5629.jpg"
              alt="Reset Studios coach outdoors"
              intensity={36}
              sizes="(max-width: 1024px) 90vw, 420px"
            />
          </div>
          <div className="ribbon absolute -bottom-3 left-1/2 z-10 w-[115%] -translate-x-1/2 bg-lemon py-2.5 text-center shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink md:text-xs">
              Follow Us On Instagram
            </p>
          </div>
        </div>

        <div className="pt-6 lg:pt-0">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            The Reset Way
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] text-ink">
            Strength That Feels Like Freedom
          </h2>
          <p className="prose-body mt-6 max-w-lg text-ink">
            Reset Studios blends coaching, community, and intentional movement —
            indoors and out. We build programs that honour your body, sharpen
            your focus, and make showing up the easiest part of your week.
          </p>
          <Link
            href="#coaching"
            className="mt-8 inline-flex bg-ink px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-ink-soft"
          >
            Meet The Studio
          </Link>
        </div>
      </div>
    </section>
  );
}
