import type { Metadata } from "next";
import { Businesses } from "@/components/Businesses";
import { Footer } from "@/components/Footer";
import { Founders } from "@/components/Founders";
import { FoundersHero } from "@/components/FoundersHero";
import { Header } from "@/components/Header";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Founders | ${SITE.name}`,
  description:
    "Meet Fernanda Goncalves and Andrenys Garcia — the founders of Reset Studios and their individual businesses.",
};

export default function FoundersPage() {
  return (
    <>
      <Header solid />
      <main>
        <FoundersHero />
        <Founders />
        <Businesses />
      </main>
      <Footer />
    </>
  );
}
