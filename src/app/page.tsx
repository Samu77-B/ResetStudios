import { BlogMarquee } from "@/components/BlogMarquee";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Instagram } from "@/components/Instagram";
import { Intro } from "@/components/Intro";
import { Memberships } from "@/components/Memberships";
import { Newsletter } from "@/components/Newsletter";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Stats />
        <Services />
        <Testimonials />
        <BlogMarquee />
        <Newsletter />
        <Memberships />
        <Reviews />
        <Instagram />
      </main>
      <Footer />
    </>
  );
}
