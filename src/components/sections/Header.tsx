"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { content } from "@/content";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Método", href: "/#metodo" },
  { label: "Resultados", href: "/#resultados" },
  { label: "Escritórios", href: "/#escritorios" },
  { label: "Contato", href: "/#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappHref = `https://wa.me/${content.professional.whatsapp}?text=${encodeURIComponent(content.professional.whatsappMessage)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#FAFAF8]/90 border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-lg font-normal tracking-tight text-foreground hover:text-[var(--gold)] transition-colors"
        >
          {content.professional.name}
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-[var(--gold)] ${
                pathname === link.href
                  ? "text-[var(--gold)]"
                  : "text-[var(--muted-foreground)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-4 py-2 text-sm border border-[var(--gold)] text-foreground hover:bg-[var(--gold-deep)] hover:text-white hover:border-[var(--gold-deep)] transition-colors rounded-sm"
        >
          Agendar diagnóstico
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FAFAF8] border-t border-[var(--border)] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--gold)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center px-4 py-2 text-sm border border-[var(--gold)] text-foreground hover:bg-[var(--gold-deep)] hover:text-white transition-colors rounded-sm"
          >
            Agendar diagnóstico
          </a>
        </div>
      )}
    </header>
  );
}
