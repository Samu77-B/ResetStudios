import { ParallaxImage } from "@/components/ParallaxImage";
import { SITE } from "@/lib/site";

export function Memberships() {
  return (
    <section
      id="book"
      className="relative overflow-hidden px-5 py-24 text-center md:px-8 md:py-32"
    >
      <ParallaxImage
        src="/images/img-6404.jpg"
        alt=""
        intensity={56}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/75" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-white">
          Book Online With{" "}
          <span className="font-script text-[1.05em] text-lemon">Reset</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-base leading-[1.5] text-white/75">
          Ready to begin? Book an appointment for transformative health coaching
          and online personal training with Reset Studios.
        </p>
        <a
          href={SITE.appointmentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex bg-lemon px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-lemon-deep"
        >
          Book An Appointment
        </a>
      </div>
    </section>
  );
}
