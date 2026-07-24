import { ParallaxImage } from "@/components/ParallaxImage";

export function FoundersHero() {
  return (
    <section className="relative min-h-[48svh] overflow-hidden md:min-h-[56svh]">
      <div className="md:hidden">
        <ParallaxImage
          src="/images/Founders-hero-mobile.png"
          alt="Reset Studios founders Fernanda Goncalves and Andrenys Garcia"
          priority
          intensity={24}
          imageClassName="object-cover object-[50%_12%]"
          sizes="100vw"
        />
      </div>
      <div className="hidden md:block">
        <ParallaxImage
          src="/images/Founders-hero-desktop.png"
          alt="Reset Studios founders Fernanda Goncalves and Andrenys Garcia"
          priority
          intensity={32}
          imageClassName="object-cover object-[50%_18%]"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
