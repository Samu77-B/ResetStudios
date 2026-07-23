import { ParallaxImage } from "@/components/ParallaxImage";
import { SITE } from "@/lib/site";

export function Intro() {
  return (
    <section id="coaching" className="bg-bone px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="relative aspect-[3/4] overflow-hidden">
            <ParallaxImage
              src="/images/img-5629.jpg"
              alt="Reset Studios health coaching"
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
            About Reset Studios
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] text-ink">
            Your Holistic Health Coach In The UK
          </h2>
          <p className="prose-body mt-6 max-w-lg text-ink">
            Reset Studios delivers transformative health coaching for people who
            want lasting change — not quick fixes. We bring together mind, body,
            and lifestyle guidance so you can build habits that actually stick.
          </p>
          <p className="prose-body mt-4 max-w-lg text-ink">
            Whether you prefer online personal training or a one-to-one
            appointment, coaching is designed around your goals, your schedule,
            and the life you want to reset into.
          </p>
          <a
            href={SITE.appointmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex bg-ink px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-ink-soft"
          >
            Book An Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
