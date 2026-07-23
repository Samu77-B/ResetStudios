import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Workout Plans",
    href: "#programs",
    image: "/images/img-6403.jpg",
    alt: "Outdoor lunge training session",
  },
  {
    title: "All-In-One Memberships",
    href: "#memberships",
    image: "/images/img-6391.jpg",
    alt: "Group outdoor fitness class",
  },
  {
    title: "Meal Plans",
    href: "#journal",
    image: "/images/photo-3875-singular-display-fullpicture.jpg",
    alt: "Community training with equipment",
  },
];

export function Services() {
  return (
    <section id="programs" className="bg-ink">
      {services.map((service) => (
        <Link
          key={service.title}
          href={service.href}
          className="group relative flex min-h-[220px] items-center overflow-hidden border-b border-white/10 md:min-h-[260px]"
        >
          <Image
            src={service.image}
            alt={service.alt}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/55 transition group-hover:bg-ink/45" />
          <div className="relative z-10 flex w-full items-center justify-between px-6 py-12 md:px-12 lg:px-20">
            <h3 className="font-display text-[clamp(1.75rem,5vw,3.5rem)] text-white">
              {service.title}
            </h3>
            <span
              aria-hidden
              className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/70 text-white transition group-hover:border-lemon group-hover:bg-lemon group-hover:text-ink"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}
