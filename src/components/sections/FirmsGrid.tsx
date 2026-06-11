"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { content } from "@/content";

export function FirmsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="escritorios"
      className="py-20 md:py-28 bg-[var(--muted)]"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-4">VI — Escritórios</p>
          <div className="gold-divider mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tight text-foreground max-w-2xl mx-auto">
            {content.firms.headline}
          </h2>
          <p className="text-[var(--muted-foreground)] mt-4 max-w-xl mx-auto leading-relaxed">
            {content.firms.subheadline}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.firms.items.map((firm, i) => (
            <motion.div
              key={i}
              className="p-6 border border-[var(--gold)] rounded-sm bg-[var(--background)] flex flex-col"
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -6, transition: { duration: 0.2, delay: 0 } }}
            >
              {/* Inicial + Nome */}
              <div className="mb-5 pb-4 border-b border-[var(--border)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm border border-[var(--gold)] flex-shrink-0 flex items-center justify-center">
                  <span className="font-display text-sm text-[var(--gold)] leading-none">
                    {firm.name.charAt(0)}
                  </span>
                </div>
                <p className="font-display text-base font-medium text-foreground leading-tight">
                  {firm.name}
                </p>
              </div>

              {/* Métrica — só exibe quando há um número real */}
              {firm.metric && firm.metric !== "Parceiro" && (
                <div className="mb-4 p-3 bg-[var(--muted)] rounded-sm">
                  <div className="flex items-end gap-2">
                    <TrendingUp size={14} className="text-[var(--gold)] flex-shrink-0 mb-0.5" />
                    <p className="font-display text-2xl text-[var(--gold)] leading-none">
                      {firm.metric}
                    </p>
                  </div>
                  <p className="text-xs text-[var(--muted-foreground)] mt-1 ml-5">
                    {firm.metricLabel}
                  </p>
                </div>
              )}

              {/* Descrição */}
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed flex-1">
                {firm.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
