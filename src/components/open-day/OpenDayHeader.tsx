import Image from "next/image";
import Link from "next/link";

export function OpenDayHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-[70] bg-ink/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="relative flex shrink-0 items-center gap-3">
          <Image
            src="/logos/logo-white.png"
            alt="Reset Studios"
            width={48}
            height={48}
            className="h-10 w-10 object-contain md:h-12 md:w-12"
            priority
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Reset Studios
            </p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/70">
              Waltham Abbey Open Day
            </p>
          </div>
        </Link>
        <Link
          href="/home"
          className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/85 transition hover:text-lemon"
        >
          Main site
        </Link>
      </div>
    </header>
  );
}
