import Image from "next/image";
import Link from "next/link";

export function Memberships() {
  return (
    <section
      id="memberships"
      className="relative overflow-hidden px-5 py-24 text-center md:px-8 md:py-32"
    >
      <Image
        src="/images/img-6404.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/75" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-white">
          Class Packs & Memberships
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-base leading-[1.5] text-white/75">
          Flexible packs for drop-ins, unlimited memberships for the committed —
          coaching that scales with your season.
        </p>
        <Link
          href="#contact"
          className="mt-8 inline-flex bg-lemon px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-lemon-deep"
        >
          View Options
        </Link>
      </div>
    </section>
  );
}
