import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Company",
    links: [
      { href: "#studio", label: "About" },
      { href: "#programs", label: "Programs" },
      { href: "#memberships", label: "Memberships" },
      { href: "#coaching", label: "Coaching" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "#contact", label: "Contact" },
      { href: "#journal", label: "Journal" },
      { href: "#memberships", label: "Pricing" },
      { href: "#home", label: "FAQs" },
    ],
  },
  {
    title: "Socials",
    links: [
      { href: "https://instagram.com", label: "Instagram" },
      { href: "https://tiktok.com", label: "TikTok" },
      { href: "https://youtube.com", label: "YouTube" },
      { href: "mailto:hello@resetstudios.co", label: "Email" },
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
            Reset Studios — mind-body training for people who want strength with
            soul. Train with intention. Live with clarity.
          </p>
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
                  <Link
                    href={link.href}
                    className="text-base leading-[1.5] text-white/70 transition hover:text-white"
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-5 py-10 text-center md:px-8">
        <p className="font-display text-[clamp(1.75rem,6vw,3.5rem)] text-white">
          Get In The <span className="text-lemon">Loop</span>
        </p>
        <p className="mt-6 text-[11px] uppercase tracking-[0.14em] text-white/40">
          © {new Date().getFullYear()} Reset Studios. All rights reserved.
        </p>
        <p className="mt-2 text-[11px] tracking-[0.08em] text-lemon/80">
          Mind · Body · Reset
        </p>
      </div>
    </footer>
  );
}
