import Link from "next/link";
import { ParallaxImage } from "@/components/ParallaxImage";

const services = [
  {
    line: "Workout",
    accent: "Plans",
    href: "#programs",
    image: "/images/img-6403.jpg",
    alt: "Outdoor lunge training session",
    align: "center" as const,
  },
  {
    line: "All In One",
    accent: "Membership",
    href: "#memberships",
    image: "/images/img-6391.jpg",
    alt: "Group outdoor fitness class",
    align: "center" as const,
  },
  {
    line: "Meal",
    accent: "Plans",
    href: "#journal",
    image: "/images/photo-3875-singular-display-fullpicture.jpg",
    alt: "Community training with equipment",
    align: "end" as const,
  },
];

export function Services() {
  return (
    <section id="programs" className="bg-bone px-0 py-3 md:py-4">
      <div className="flex flex-col gap-3 md:gap-4">
        {services.map((service) => (
          <Link
            key={`${service.line}-${service.accent}`}
            href={service.href}
            className={`group relative flex min-h-[200px] overflow-hidden md:min-h-[240px] lg:min-h-[280px] ${
              service.align === "end"
                ? "items-end pb-8 md:pb-10"
                : "items-center"
            }`}
          >
            <ParallaxImage
              src={service.image}
              alt={service.alt}
              intensity={40}
              imageClassName="transition duration-700 group-hover:brightness-110"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-ink/50 transition group-hover:bg-ink/40" />
            <div className="relative z-10 flex w-full items-end justify-between gap-6 px-6 md:px-10 lg:px-16">
              <h3 className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-white">
                <span className="font-display text-[clamp(1.75rem,5vw,3.75rem)]">
                  {service.line}
                </span>
                <span className="font-script text-[clamp(2.25rem,6vw,4.25rem)]">
                  {service.accent}
                </span>
              </h3>
              <span className="mb-1 shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-lemon transition group-hover:text-lemon-deep md:text-xs">
                Learn More
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
