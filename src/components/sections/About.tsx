"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content } from "@/content";

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="relative py-20 md:py-28 overflow-hidden" ref={ref}>
      {/* Foto de fundo invertida */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ transform: "scaleX(-1)" }}>
          <Image
            src={content.professional.photoAbout}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0" style={{ background: "rgba(8,8,8,0.75)" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-4">{content.about.eyebrow}</p>
          <div className="gold-divider" />
        </motion.div>

        <motion.h2
          className="font-display text-3xl md:text-4xl font-normal leading-tight tracking-tight text-foreground mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {content.about.headline}
        </motion.h2>

        <motion.div
          className="space-y-4 text-[var(--muted-foreground)] leading-relaxed text-base mb-8 text-justify"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {content.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>

        <motion.blockquote
          className="border-l-2 border-[var(--gold)] pl-6 py-2 mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="font-display text-xl font-normal italic text-foreground leading-snug">
            {content.about.quote}
          </p>
        </motion.blockquote>

        {/* Stats cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-center p-4 border border-[var(--border)] rounded-sm">
            <p className="font-display text-2xl md:text-3xl text-[var(--gold)] mb-1">
              {content.stats.yearsExperience}
            </p>
            <p className="text-xs text-[var(--muted-foreground)] leading-tight">
              anos em vendas
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
        </motion.div>
      </div>
    </section>
  );
}
