"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Manifesto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28 bg-[#0f0f0f] grain-overlay overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        {/* Linha dourada decorativa */}
        <motion.div
          className="w-12 h-px bg-[var(--gold)] mx-auto mb-10"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6 }}
        />

        {/* Headline manifesto */}
        <motion.h2
          className="font-display text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-tight tracking-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Aqui não tem promessa.
          <br />
          <span className="text-[var(--gold)]">Tem trabalho feito.</span>
        </motion.h2>

        {/* Corpo */}
        <motion.p
          className="text-[#888] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Sem curso gravado. Sem promessa de guru. Sem terceirização.{" "}
          <span className="text-[#bbb]">
            Sou eu quem vai com você na operação — de mão na massa, dia a dia,
            visando previsibilidade e recorrência de contratos protocolados no seu escritório
            de advocacia. No operacional e no comercial.
          </span>{" "}
          Aqui é a vida real.
        </motion.p>

        {/* Assinatura */}
        <motion.p
          className="font-display text-lg text-[var(--gold)] italic"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          — Marllon Silvano
        </motion.p>

        <motion.div
          className="w-12 h-px bg-[var(--gold)] mx-auto mt-10"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
      </div>
    </section>
  );
}
