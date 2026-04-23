import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Marllon Silvano | Consultoria Comercial para Escritórios de Advocacia",
  description:
    "Estruturação comercial para bancas jurídicas que querem crescer com previsibilidade. Captação, funil, processos e gestão respeitando a ética da OAB.",
  keywords: [
    "consultoria jurídica comercial",
    "marketing jurídico",
    "gestão de escritórios de advocacia",
    "captação de clientes para advogados",
    "Marllon Silvano",
  ],
  openGraph: {
    title: "Marllon Silvano | Consultoria Comercial para Escritórios de Advocacia",
    description:
      "Estruturação comercial para bancas jurídicas que querem crescer com previsibilidade.",
    url: "https://marllonsilvano.com",
    siteName: "Marllon Silvano",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marllon Silvano | Consultoria Comercial para Escritórios de Advocacia",
    description:
      "Estruturação comercial para bancas jurídicas que querem crescer com previsibilidade.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${fraunces.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
