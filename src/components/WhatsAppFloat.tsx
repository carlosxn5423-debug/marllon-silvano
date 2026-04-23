"use client";

import { MessageCircle } from "lucide-react";
import { content } from "@/content";

export function WhatsAppFloat() {
  const prof = content.professional;
  const href = `https://wa.me/${prof.whatsapp}?text=${encodeURIComponent("Olá, Marllon! Tenho interesse em conversar sobre uma parceria de gestão para o meu escritório.")}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-[var(--foreground)] border border-[var(--gold)] rounded-sm shadow-lg hover:bg-[var(--gold-deep)] hover:border-[var(--gold-deep)] transition-colors group"
    >
      <MessageCircle
        size={18}
        className="text-[var(--gold)] group-hover:text-white transition-colors flex-shrink-0"
      />
      <span className="hidden sm:block text-xs text-[var(--background)] group-hover:text-white transition-colors">
        WhatsApp
      </span>
    </a>
  );
}
