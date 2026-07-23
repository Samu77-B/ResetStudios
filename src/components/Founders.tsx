import Image from "next/image";
import Link from "next/link";
import { FOUNDERS } from "@/lib/site";

export function Founders() {
  return (
    <section id="founders" className="bg-bone px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          The Founders
        </p>
        <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] text-ink">
          Two Women. One{" "}
          <span className="font-script text-[1.05em]">Reset.</span>
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {FOUNDERS.map((founder) => (
            <article
              key={founder.name}
              className="flex flex-col bg-white px-8 py-10 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            >
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <h3 className="mt-6 text-center font-display text-2xl text-ink">
                {founder.name}
              </h3>
              <p className="mt-2 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                {founder.roles}
              </p>
              <p className="prose-body mt-5 text-center">{founder.bio}</p>
              <Link
                href={founder.href}
                className="mt-8 inline-flex justify-center bg-ink px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-ink-soft"
              >
                {founder.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
