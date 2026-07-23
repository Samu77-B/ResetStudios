import { BookingButton } from "@/components/booking/BookingProvider";
import { ParallaxImage } from "@/components/ParallaxImage";
import { CLASSES, SITE } from "@/lib/site";

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

      <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-6xl items-center px-5 py-28 md:min-h-[80svh] md:px-8">
        <div className="w-full max-w-2xl rounded-sm border border-white/15 bg-ink/40 p-6 backdrop-blur-md md:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lemon">
            {CLASSES.label}
          </p>
          <h1 className="mt-4 font-display text-[clamp(1.75rem,5vw,3rem)] text-white">
            {CLASSES.headline.join(" · ")}
          </h1>
          <p className="mt-3 font-script text-2xl text-white/90 md:text-3xl">
            {CLASSES.subline}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {CLASSES.specs.map((spec) => (
              <div key={spec.label} className="border border-white/15 px-4 py-3">
                <p className="font-display text-lg text-white">{spec.value}</p>
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/60">
                  {spec.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="border border-white/15 px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.16em] text-lemon">
                Location
              </p>
              <p className="mt-1 text-sm text-white">{CLASSES.location}</p>
            </div>
            <div className="border border-white/15 px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.16em] text-lemon">
                Join Us
              </p>
              <p className="mt-1 text-sm text-white">{CLASSES.joinUs}</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lemon">
              What To Expect
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {CLASSES.expect.map((item) => (
                <li key={item} className="text-sm text-white/85">
                  · {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-white/15 pt-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lemon">
              Saturday Session
            </p>
            <p className="mt-2 font-display text-xl text-white">
              {CLASSES.schedule.next}
            </p>
            <p className="text-sm text-white/70">{CLASSES.schedule.recurring}</p>
            <p className="mt-3 text-sm text-white/85">
              Pricing: One class {CLASSES.pricing.single} · Two classes{" "}
              {CLASSES.pricing.two}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookingButton
              packageType="two"
              className="inline-flex justify-center bg-lemon px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-lemon-deep"
            >
              Book Two Classes · {CLASSES.pricing.two}
            </BookingButton>
            <BookingButton
              packageType="single"
              className="inline-flex justify-center border border-white/40 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition hover:border-lemon hover:text-lemon"
            >
              Book A Single Class · {CLASSES.pricing.single}
            </BookingButton>
          </div>

          <p className="mt-6 text-sm text-white/60">
            Instagram:{" "}
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lemon hover:underline"
            >
              {SITE.instagramHandle}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
