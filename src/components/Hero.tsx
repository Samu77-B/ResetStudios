import { HeroClassInfo, HeroMobileHeadline } from "@/components/HeroClassInfo";
import { ParallaxImage } from "@/components/ParallaxImage";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-visible md:min-h-[80svh] md:overflow-hidden"
    >
      <div className="md:hidden">
        <ParallaxImage
          src="/images/homePageImage-Mobile.png"
          alt="Reset Studios fitness classes"
          priority
          intensity={40}
          imageClassName="object-cover object-[center_15%]"
          sizes="100vw"
        />
      </div>
      <div className="hidden md:block">
        <ParallaxImage
          src="/images/homePageImage-Desktop2.png"
          alt="Reset Studios fitness classes"
          priority
          intensity={60}
          imageClassName="object-[54%_16%]"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/5 via-ink/15 to-ink/90 md:from-ink/70 md:via-ink/55 md:to-ink/80" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-10 pt-24 md:min-h-[80svh] md:justify-center md:px-8 md:py-28">
        <div className="mt-[38svh] md:hidden">
          <HeroMobileHeadline />
          <HeroClassInfo showHeadline={false} />
        </div>
        <div className="hidden md:block">
          <HeroClassInfo />
        </div>
      </div>
    </section>
  );
}
