import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { FirmsGrid } from "@/components/sections/FirmsGrid";

export const metadata: Metadata = {
  title: "Escritórios Gerenciados | Marllon Silvano",
  description:
    "Bancas jurídicas que estruturaram o comercial com método e hoje operam com previsibilidade de receita.",
};

export default function EscritoriosPage() {
  return (
    <>
      <Header />
      <main>
        <FirmsGrid />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
