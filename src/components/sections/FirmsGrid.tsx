"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, TrendingUp } from "lucide-react";
import Link from "next/link";
import { content } from "@/content";

export function FirmsGrid() {
  const prof = content.professional;
  const whatsappHref = `https://wa.me/${prof.whatsapp}?text=${encodeURIComponent("Olá, Marllon! Tenho interesse em fazer parte dos escritórios gerenciados.")}`;

  return (
    <>
      {/* Hero da página */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[var(--foreground)]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow mb-4">Portfólio</p>
            <div className="h-px w-10 bg-[var(--gold)] mb-8" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-[var(--background)] leading-tight tracking-[-0.02em] max-w-3xl mb-6">
              {content.firms.headline}
            </h1>
            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed max-w-xl">
              {content.firms.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Linha dourada de transição */}
      <div className="bg-[var(--foreground)]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="h-px bg-[var(--gold)] opacity-30" />
        </div>
      </div>

      {/* Grid de escritórios */}
      <section className="py-20 md:py-28 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {content.firms.items.map((firm, i) => (
              <motion.div
                key={i}
                className="group p-6 border border-[var(--border)] rounded-sm hover:border-[var(--gold)] transition-colors bg-[var(--background)]"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                {/* Logo placeholder / nome */}
                <div className="h-10 flex items-center mb-6">
                  <p className="font-display text-base font-medium text-foreground group-hover:text-[var(--gold)] transition-colors">
                    {firm.name}
                  </p>
                </div>

                {/* Métrica de destaque */}
                <div className="mb-6 p-4 bg-[var(--muted)] rounded-sm">
                  <div className="flex items-end gap-2">
                    <TrendingUp size={16} className="text-[var(--gold)] flex-shrink-0 mb-0.5" />
                    <p className="font-display text-2xl text-[var(--gold)] leading-none">
                      {firm.metric}
                    </p>
                  </div>
                  <p className="text-xs text-[var(--muted-foreground)] mt-1 ml-6">
                    {firm.metricLabel}
                  </p>
                </div>

                {/* Descrição */}
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-6">
                  {firm.description}
                </p>

                {/* Metadados */}
                <div className="space-y-2 pt-4 border-t border-[var(--border)]">
                  <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                    <span className="text-[var(--gold)] text-xs font-medium">Área</span>
                    <span>{firm.area}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                    <MapPin size={12} className="text-[var(--gold)]" />
                    <span>{firm.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                    <Calendar size={12} className="text-[var(--gold)]" />
                    <span>Desde {firm.since}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA — tornar-se parceiro */}
          <motion.div
            className="max-w-2xl mx-auto text-center py-16 border-t border-[var(--border)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="eyebrow mb-4">Próximo passo</p>
            <div className="gold-divider mb-8" />
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground mb-4">
              Sua banca pode estar aqui.
            </h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-8">
              Se você quer estruturar o comercial do seu escritório com método e
              previsibilidade, o primeiro passo é um diagnóstico de 30 minutos —
              gratuito, sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--foreground)] text-[var(--background)] border border-[var(--gold)] text-sm font-medium hover:bg-[var(--gold-deep)] hover:border-[var(--gold-deep)] transition-colors rounded-sm"
              >
                {content.firms.ctaLabel}
              </a>
              <Link
                href="/#metodo"
                className="inline-flex items-center justify-center px-6 py-3 border border-[var(--border)] text-sm font-medium hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors rounded-sm"
              >
                Conhecer o método
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
