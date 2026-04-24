"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { content } from "@/content";

function InstagramIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ContactCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const prof = content.professional;
  const whatsappHref = `https://wa.me/${prof.whatsapp}?text=${encodeURIComponent(prof.whatsappMessage)}`;

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#111111]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-4">{content.contact.eyebrow}</p>
          <div className="gold-divider mb-6" />
          <h2 className="font-display text-3xl md:text-5xl font-normal tracking-tight text-white max-w-2xl mx-auto leading-tight">
            {content.contact.headline}
          </h2>
          <p className="text-[var(--muted-foreground)] mt-5 max-w-xl mx-auto leading-relaxed">
            {content.contact.description}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* WhatsApp — primário */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 px-6 py-5 rounded-sm bg-[var(--gold)] hover:bg-[var(--gold-deep)] transition-all group"
          >
            <Phone size={20} className="text-[#080808] flex-shrink-0" />
            <div className="flex-1">
              <p className="text-xs text-[#080808]/70 mb-0.5">WhatsApp</p>
              <p className="text-sm font-medium text-[#080808]">Conversa direta</p>
            </div>
            <span className="text-lg text-[#080808]/60">→</span>
          </a>

          {/* E-mail */}
          <a
            href={`mailto:${prof.email}`}
            className="flex items-center gap-5 px-6 py-5 rounded-sm border border-[#2a2a2a] hover:border-[var(--gold)] bg-[#161616] transition-all group"
          >
            <Mail size={20} className="text-[var(--gold)] flex-shrink-0" />
            <div className="flex-1">
              <p className="text-xs text-[#888] mb-0.5">E-mail</p>
              <p className="text-sm font-medium text-white group-hover:text-[var(--gold)] transition-colors">
                Enviar mensagem
              </p>
            </div>
            <span className="text-lg text-[#555] group-hover:text-[var(--gold)] transition-colors">→</span>
          </a>

          {/* Instagram */}
          <a
            href={prof.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 px-6 py-5 rounded-sm border border-[#2a2a2a] hover:border-[var(--gold)] bg-[#161616] transition-all group"
          >
            <InstagramIcon size={20} className="text-[var(--gold)] flex-shrink-0" />
            <div className="flex-1">
              <p className="text-xs text-[#888] mb-0.5">Instagram</p>
              <p className="text-sm font-medium text-white group-hover:text-[var(--gold)] transition-colors">
                @marllonhr
              </p>
            </div>
            <span className="text-lg text-[#555] group-hover:text-[var(--gold)] transition-colors">→</span>
          </a>
        </motion.div>

        <motion.p
          className="text-xs text-[#555] text-center mt-8 tracking-wide"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          Sem compromisso · 30 minutos · Gratuito
        </motion.p>
      </div>
    </section>
  );
}
