import { BookingButton } from "@/components/booking/BookingProvider";
import { CLASSES, SITE } from "@/lib/site";

type HeroClassInfoProps = {
  showHeadline?: boolean;
};

export function HeroClassInfo({ showHeadline = true }: HeroClassInfoProps) {
  return (
    <div className="w-full max-w-2xl rounded-sm border border-white/15 bg-ink/40 p-6 backdrop-blur-md md:p-10">
      {showHeadline ? (
        <>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lemon">
            {CLASSES.label}
          </p>
          <h1 className="mt-4 font-display text-[clamp(1.75rem,5vw,3rem)] text-white">
            {CLASSES.headline.join(" · ")}
          </h1>
          <p className="mt-3 font-script text-2xl text-white/90 md:text-3xl">
            {CLASSES.subline}
          </p>
        </>
      ) : null}

      <div
        className={`grid gap-4 sm:grid-cols-2 ${showHeadline ? "mt-8" : "mt-0"}`}
      >
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

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <BookingButton className="inline-flex justify-center bg-lemon px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-lemon-deep">
          Book a Class
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
  );
}

export function HeroMobileHeadline() {
  return (
    <div className="mb-5 w-full max-w-2xl md:hidden">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lemon">
        {CLASSES.label}
      </p>
      <h1 className="mt-3 font-display text-[clamp(1.65rem,7vw,2.25rem)] leading-tight text-white">
        {CLASSES.headline.join(" · ")}
      </h1>
      <p className="mt-2 font-script text-xl text-white/90">{CLASSES.subline}</p>
    </div>
  );
}
