import Image from "next/image";
import Link from "next/link";

export function Memberships() {
  return (
    <section
      id="memberships"
      className="relative overflow-hidden px-5 py-24 text-center md:px-8 md:py-32"
    >
      <Image
        src="/images/photoroom-20260520-54717-pm.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/75" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="font-display text-[clamp(2.4rem,7vw,5rem)] leading-[0.95] text-white">
          Class Packs &{" "}
          <span className="font-script text-[1.1em] font-semibold lowercase tracking-normal text-lemon">
            Memberships
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/75 md:text-base">
          Flexible packs for drop-ins, unlimited memberships for the committed —
          coaching that scales with your season.
        </p>
        <Link
          href="#contact"
          className="mt-8 inline-flex bg-lemon px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-lemon-deep"
        >
          View Options
        </Link>
      </div>
    </section>
  );
}
