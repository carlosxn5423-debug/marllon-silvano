"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { content } from "@/content";

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-20 md:py-28 bg-[var(--background)]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Eyebrow + divider */}
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
          {/* Foto */}
          <motion.div
            className="photo-frame relative mx-auto w-full max-w-xs"
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="aspect-square relative rounded-sm overflow-hidden border border-[var(--border)]">
              <Image
                src={content.professional.photoAbout}
                alt={`${content.professional.name} — ambiente de trabalho`}
                fill
                className="object-cover grayscale"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
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
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 border border-[var(--border)] rounded-sm">
                <p className="font-display text-2xl md:text-3xl text-[var(--gold)] mb-1">
                  {content.stats.yearsInSector}
                </p>
                <p className="text-xs text-[var(--muted-foreground)] leading-tight">
                  anos no setor jurídico
                </p>
              </div>
              <div className="text-center p-4 border border-[var(--border)] rounded-sm">
                <p className="font-display text-2xl md:text-3xl text-[var(--gold)] mb-1">
                  {content.stats.firmsStructured}
                </p>
                <p className="text-xs text-[var(--muted-foreground)] leading-tight">
                  escritórios estruturados
                </p>
              </div>
              <div className="text-center p-4 border border-[var(--border)] rounded-sm">
                <p className="font-display text-2xl md:text-3xl text-[var(--gold)] mb-1">
                  {content.stats.revenueGrowth}
                </p>
                <p className="text-xs text-[var(--muted-foreground)] leading-tight">
                  crescimento médio em receita
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
