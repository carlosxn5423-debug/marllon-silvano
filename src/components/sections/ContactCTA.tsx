"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";
import { content } from "@/content";

export function ContactCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const prof = content.professional;
  const whatsappHref = `https://wa.me/${prof.whatsapp}?text=${encodeURIComponent(prof.whatsappMessage)}`;

  const channels = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "Conversa direta",
      href: whatsappHref,
      primary: true,
    },
    {
      icon: Mail,
      label: "E-mail",
      value: prof.email,
      href: `mailto:${prof.email}`,
      primary: false,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@marllonhr",
      href: prof.instagram,
      primary: false,
      external: true,
    },
  ];

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
          {channels.map((ch, i) => (
            <a
              key={i}
              href={ch.href}
              target={ch.external || ch.primary ? "_blank" : undefined}
              rel={ch.external || ch.primary ? "noopener noreferrer" : undefined}
              className={`flex items-center gap-5 px-6 py-5 rounded-sm transition-all group ${
                ch.primary
                  ? "bg-[var(--gold)] hover:bg-[var(--gold-deep)]"
                  : "border border-[#2a2a2a] hover:border-[var(--gold)] bg-[#161616]"
              }`}
            >
              <ch.icon
                size={20}
                className={
                  ch.primary
                    ? "text-[#080808] flex-shrink-0"
                    : "text-[var(--gold)] flex-shrink-0"
                }
              />
              <div className="flex-1">
                <p
                  className={`text-xs mb-0.5 ${
                    ch.primary ? "text-[#080808]/70" : "text-[#888]"
                  }`}
                >
                  {ch.label}
                </p>
                <p
                  className={`text-sm font-medium ${
                    ch.primary
                      ? "text-[#080808]"
                      : "text-white group-hover:text-[var(--gold)] transition-colors"
                  }`}
                >
                  {ch.value}
                </p>
              </div>
              <span
                className={`text-lg ${
                  ch.primary ? "text-[#080808]/60" : "text-[#555] group-hover:text-[var(--gold)] transition-colors"
                }`}
              >
                →
              </span>
            </a>
          ))}
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
