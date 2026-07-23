import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "#workshop", label: "Workshop", external: false },
      { href: "#coaching", label: "Coaching", external: false },
      { href: "#movement", label: "Movement", external: false },
      { href: "#founders", label: "Founders", external: false },
    ],
  },
  {
    title: "Book",
    links: [
      { href: SITE.bookTwoClassesUrl, label: "Two Classes · £10", external: true },
      {
        href: SITE.bookSingleClassUrl,
        label: "Single Class · £7",
        external: true,
      },
      { href: SITE.enquireUrl, label: "Enquire", external: true },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: SITE.instagram, label: SITE.instagramHandle, external: true },
      { href: `mailto:${SITE.email}`, label: SITE.email, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:px-8 md:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/logos/logo-white.png"
            alt="Reset Studios"
            width={64}
            height={64}
            className="h-14 w-14 object-contain"
          />
          <p className="mt-5 max-w-xs text-base leading-[1.5] text-white/65">
            Reset Studios — mind, body and nervous system in one place. Fitness
            classes, workshops, coaching and movement in North London.
          </p>
          <p className="mt-4 text-sm text-white/50">{SITE.address}</p>
          <div className="mt-6 flex gap-3">
            <div className="relative h-20 w-16 rotate-[-4deg] overflow-hidden border-2 border-white/20 bg-white p-1">
              <Image
                src="/images/img-5330.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="relative h-20 w-16 rotate-[5deg] overflow-hidden border-2 border-white/20 bg-white p-1">
              <Image
                src="/images/img-6394.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-lemon">
              {col.title}
            </p>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("mailto:") ? undefined : "_blank"
                      }
                      rel={
                        link.href.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="break-all text-base leading-[1.5] text-white/70 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-base leading-[1.5] text-white/70 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-5 py-10 text-center md:px-8">
        <p className="font-display text-[clamp(1.75rem,6vw,3.5rem)] text-white">
          Work Hard · Show Up ·{" "}
          <span className="font-script text-[1.05em] text-lemon">Reset</span>
        </p>
        <a
          href={SITE.bookTwoClassesUrl}
          className="mt-6 inline-flex bg-lemon px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-lemon-deep"
        >
          Book Two Classes · £10
        </a>
        <p className="mt-8 text-[11px] uppercase tracking-[0.14em] text-white/40">
          © {new Date().getFullYear()} Reset Studios. All rights reserved.
        </p>
        <p className="mt-2 text-[11px] tracking-[0.08em] text-lemon/80">
          Mind & Body · {SITE.instagramHandle}
        </p>
        <p className="mt-5 text-sm leading-[1.5] text-white/50">
          Another amazing web project by{" "}
          <a
            href="https://paradigmhub.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 underline decoration-white/30 underline-offset-2 transition hover:text-lemon hover:decoration-lemon"
          >
            the Paradigm Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
