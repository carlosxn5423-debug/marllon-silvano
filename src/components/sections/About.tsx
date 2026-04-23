"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content } from "@/content";

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-20 md:py-28 bg-[var(--background)] grain-overlay" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-4">{content.about.eyebrow}</p>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Duas fotos complementares */}
          <motion.div
            className="w-full max-w-sm mx-auto"
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex flex-col gap-4">
              {/* Studio2 — fundo removido, flutua no dark */}
              <div className="aspect-[3/4] relative">
                <Image
                  src={content.professional.photoAbout}
                  alt={`${content.professional.name}`}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Palco — fundo removido, autoridade */}
              <div className="aspect-[4/3] relative">
                <Image
                  src={(content.professional as Record<string, string>).photoAbout2}
                  alt={`${content.professional.name} — palestrante`}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-normal leading-tight tracking-tight text-foreground mb-8">
              {content.about.headline}
            </h2>

            <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed text-base mb-8">
              {content.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <blockquote className="border-l-2 border-[var(--gold)] pl-6 py-2 mb-10">
              <p className="font-display text-xl font-normal italic text-foreground leading-snug">
                {content.about.quote}
              </p>
            </blockquote>

            {/* Stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 border border-[var(--border)] rounded-sm">
                <p className="font-display text-2xl md:text-3xl text-[var(--gold)] mb-1">
                  {content.stats.yearsExperience}
                </p>
                <p className="text-xs text-[var(--muted-foreground)] leading-tight">
                  anos em vendas jurídicas
                </p>
              </div>
              <div className="text-center p-4 border border-[var(--border)] rounded-sm">
                <p className="font-display text-xl md:text-2xl text-[var(--gold)] mb-1">
                  {content.stats.contractsValue}
                </p>
                <p className="text-xs text-[var(--muted-foreground)] leading-tight">
                  em contratos gerados
                </p>
              </div>
              <div className="text-center p-4 border border-[var(--border)] rounded-sm">
                <p className="font-display text-2xl md:text-3xl text-[var(--gold)] mb-1">
                  {content.stats.lawyersTrained}
                </p>
                <p className="text-xs text-[var(--muted-foreground)] leading-tight">
                  advogados treinados
                </p>
              </div>
              <div className="text-center p-4 border border-[var(--border)] rounded-sm">
                <p className="font-display text-2xl md:text-3xl text-[var(--gold)] mb-1">
                  {content.stats.commercialsImplemented}
                </p>
                <p className="text-xs text-[var(--muted-foreground)] leading-tight">
                  comerciais implementados
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
