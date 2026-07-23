import Link from "next/link";
import { ParallaxImage } from "@/components/ParallaxImage";
import { SITE } from "@/lib/site";

const shots = [
  "/images/img-6385.jpg",
  "/images/img-6386.jpg",
  "/images/img-6387.jpg",
  "/images/img-6388.jpg",
  "/images/img-6390.jpg",
  "/images/img-6393.jpg",
];

export function Instagram() {
  const ribbon = "FOLLOW US ON INSTAGRAM  ·  ";

  return (
    <section className="relative overflow-hidden bg-bone">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {shots.map((src, i) => (
          <Link
            key={src}
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square overflow-hidden"
          >
            <ParallaxImage
              src={src}
              alt={`Reset Studios Instagram ${i + 1}`}
              intensity={28}
              imageClassName="transition duration-500 group-hover:brightness-110"
              sizes="(max-width: 768px) 50vw, 16vw"
            />
          </Link>
        ))}
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[140%] -translate-x-1/2 -translate-y-1/2 -rotate-3 overflow-hidden bg-lemon py-3 shadow-md">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          <span className="px-2 text-sm font-semibold uppercase tracking-[0.28em] text-ink">
            {ribbon.repeat(8)}
          </span>
          <span
            aria-hidden
            className="px-2 text-sm font-semibold uppercase tracking-[0.28em] text-ink"
          >
            {ribbon.repeat(8)}
          </span>
        </div>
      </div>
    </section>
  );
}
