import Link from "next/link";
import { OpenDayHeader } from "@/components/open-day/OpenDayHeader";
import { OpenDayRegistrationForm } from "@/components/open-day/OpenDayRegistrationForm";
import { ParallaxImage } from "@/components/ParallaxImage";
import { OPEN_DAY, SITE } from "@/lib/site";

export function OpenDayLanding() {
  const address = OPEN_DAY.addressLines.join(", ");

  return (
    <>
      <OpenDayHeader />
      <main>
        <section className="relative min-h-[100svh] overflow-hidden md:min-h-[92svh]">
          <div className="md:hidden">
            <ParallaxImage
              src="/images/background01.jpeg"
              alt="Reset Studios Waltham Abbey gym"
              priority
              intensity={40}
              imageClassName="object-cover object-[50%_12%]"
              sizes="100vw"
            />
          </div>
          <div className="hidden md:block">
            <ParallaxImage
              src="/images/background01.jpeg"
              alt="Reset Studios Waltham Abbey gym"
              priority
              intensity={48}
              imageClassName="object-cover object-[50%_10%]"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/65 to-ink/92 md:from-ink/70 md:via-ink/60 md:to-ink/88" />

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end gap-10 px-5 pb-12 pt-28 md:min-h-[92svh] md:flex-row md:items-end md:justify-between md:gap-12 md:px-8 md:pb-16 md:pt-32">
            <div className="max-w-xl md:pb-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lemon">
                Waltham Abbey · Free Open Day
              </p>
              <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.25rem)] text-white">
                Hit{" "}
                <span className="font-script text-[1.05em] normal-case">
                  Reset.
                </span>
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/90 md:text-lg">
                The Reset Gym is opening its doors on {OPEN_DAY.dateLabel},{" "}
                {OPEN_DAY.timeLabel.toLowerCase()} and you&apos;re invited to
                our <strong className="font-semibold">FREE Open Day</strong>.
              </p>
              <p className="mt-4 text-sm text-white/75">{address}</p>
              <a
                href="#register"
                className="mt-8 inline-flex bg-lemon px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-lemon-deep md:hidden"
              >
                Register for free access
              </a>
            </div>

            <OpenDayRegistrationForm />
          </div>
        </section>

        <section className="bg-bone px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] text-ink">
              It&apos;s Time to Hit{" "}
              <span className="font-script text-[1.05em] normal-case">
                Reset.
              </span>
            </h2>
            <div className="prose-body mt-6 space-y-4">
              <p>
                Whether you&apos;re looking to rebuild your routine, kickstart a
                new fitness journey, or find a friendly, supportive environment
                to train in, The Reset Studio was built for you.
              </p>
              <p>
                We&apos;re opening our brand-new Waltham Abbey facility on 8
                November, and we&apos;re celebrating with an all-day Free Open
                Day. Come take a look around, meet our trainers, test out the
                equipment, and see what setting a new standard for your health
                feels like.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-6xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              What to Expect on the Open Day
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {OPEN_DAY.expectations.map((item) => (
                <article key={item.title} className="bg-white px-6 py-7">
                  <h3 className="font-display text-lg leading-snug text-ink">
                    {item.title}
                  </h3>
                  <p className="prose-body mt-3 text-sm">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-ink px-5 py-14 text-white md:px-8 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lemon">
                The Reset Gym — Waltham Abbey
              </p>
              <p className="mt-3 font-display text-xl">
                Opening {OPEN_DAY.dateLabel}
              </p>
              <address className="mt-4 not-italic text-sm leading-relaxed text-white/75">
                {OPEN_DAY.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lemon">
                Open day hours
              </p>
              <p className="mt-2 font-display text-xl">{OPEN_DAY.timeLabel}</p>
              <p className="mt-6 text-sm leading-relaxed text-white/70">
                Follow us on social media for sneak peeks and updates leading up
                to launch day!{" "}
                <Link
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lemon hover:underline"
                >
                  {SITE.instagramHandle}
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
