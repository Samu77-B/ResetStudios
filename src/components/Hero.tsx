import { ParallaxImage } from "@/components/ParallaxImage";
import { HeroClassInfo } from "@/components/HeroClassInfo";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[70svh] overflow-hidden md:min-h-[80svh]"
    >
      <div className="md:hidden">
        <ParallaxImage
          src="/images/homePageImage-Mobile.png"
          alt="Reset Studios fitness classes"
          priority
          intensity={60}
          imageClassName="object-center"
          sizes="100vw"
        />
      </div>
      <div className="hidden md:block">
        <ParallaxImage
          src="/images/homePageImage-Desktop.png"
          alt="Reset Studios fitness classes"
          priority
          intensity={60}
          imageClassName="object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/80" />

      <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-6xl items-center px-5 py-28 md:min-h-[80svh] md:px-8">
        <HeroClassInfo />
      </div>
    </section>
  );
}
