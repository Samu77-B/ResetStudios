import { ParallaxImage } from "@/components/ParallaxImage";

export function FoundersHero() {
  return (
    <section className="relative min-h-[42svh] overflow-hidden md:min-h-[48svh]">
      <div className="md:hidden">
        <ParallaxImage
          src="/images/Founders-hero-mobile.png"
          alt="Reset Studios founders Fernanda Goncalves and Andrenys Garcia"
          priority
          intensity={32}
          imageClassName="object-cover object-[center_40%]"
          sizes="100vw"
        />
      </div>
      <div className="hidden md:block">
        <ParallaxImage
          src="/images/Founders-hero-desktop.png"
          alt="Reset Studios founders Fernanda Goncalves and Andrenys Garcia"
          priority
          intensity={40}
          imageClassName="object-cover object-[center_38%]"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
