import { BrandPromise } from "@/components/BrandPromise";
import { Businesses } from "@/components/Businesses";
import { Coaching } from "@/components/Coaching";
import { Footer } from "@/components/Footer";
import { Founders } from "@/components/Founders";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Instagram } from "@/components/Instagram";
import { Movement } from "@/components/Movement";
import { Process } from "@/components/Process";
import { Quote } from "@/components/Quote";
import { Resources } from "@/components/Resources";
import { Workshop } from "@/components/Workshop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandPromise />
        <Workshop />
        <Process />
        <Founders />
        <Businesses />
        <Coaching />
        <Movement />
        <Quote />
        <Resources />
        <Instagram />
      </main>
      <Footer />
    </>
  );
}
