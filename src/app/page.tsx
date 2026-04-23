import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { CredibilityBar } from "@/components/sections/CredibilityBar";
import { About } from "@/components/sections/About";
import { Pains } from "@/components/sections/Pains";
import { Method } from "@/components/sections/Method";
import { Results } from "@/components/sections/Results";
import { FirmsGrid } from "@/components/sections/FirmsGrid";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CredibilityBar />
        <About />
        <Pains />
        <Method />
        <Results />
        <FirmsGrid />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
