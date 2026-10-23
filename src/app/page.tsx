import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function HomePage() {
  return (
    <main className="fixed inset-0 flex items-center justify-center bg-ink-soft">
      <h1 className="sr-only">{SITE.name}</h1>
      <Image
        src="/logos/logo-white.png"
        alt="Reset Studios"
        width={512}
        height={512}
        className="h-20 w-20 object-contain sm:h-24 sm:w-24 md:h-28 md:w-28"
        priority
      />
    </main>
  );
}
