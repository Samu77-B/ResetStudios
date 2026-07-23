import { BookingButton } from "@/components/booking/BookingProvider";
import { ParallaxImage } from "@/components/ParallaxImage";
import { CLASSES } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[70svh] overflow-hidden md:min-h-[80svh]"
    >
      <div className="md:hidden">
        <ParallaxImage
          src="/images/homePageImage-Mobile.png"
          alt="Reset Studios fitness classes"
          priority
          intensity={60}
          imageClassName="object-center"
          sizes="100vw"
        />
      </div>
      <div className="hidden md:block">
        <ParallaxImage
          src="/images/homePageImage-Desktop.png"
          alt="Reset Studios fitness classes"
          priority
          intensity={60}
          imageClassName="object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/80" />

      <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-6xl items-end px-5 py-28 md:min-h-[80svh] md:items-center md:px-8">
        <div className="w-full max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lemon">
            {CLASSES.label}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.5rem)] text-white">
            {CLASSES.headline.join(" · ")}
          </h1>
          <p className="mt-3 font-script text-2xl text-white/90 md:text-3xl">
            {CLASSES.subline}
          </p>
          <BookingButton className="mt-8 inline-flex bg-lemon px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-lemon-deep">
            Book a Class
          </BookingButton>
        </div>
      </div>
    </section>
  );
}
