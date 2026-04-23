"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { content } from "@/content";

export function Method() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="metodo"
      className="py-20 md:py-28 bg-[var(--background)]"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-4">{content.method.eyebrow}</p>
          <div className="gold-divider mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tight text-foreground max-w-2xl mx-auto mb-4">
            {content.method.headline}
          </h2>
          {content.method.subheadline && (
            <p className="text-[var(--muted-foreground)] text-base max-w-xl mx-auto leading-relaxed">
              {content.method.subheadline}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {content.method.steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden p-8 border border-[var(--border)] rounded-sm bg-[var(--muted)] hover:border-[var(--gold)] transition-colors duration-300 group"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2, delay: 0 } }}
            >
              {/* Letra decorativa de fundo */}
              <span className="absolute -top-4 right-4 font-display text-[9rem] text-[var(--gold)] opacity-[0.07] leading-none select-none pointer-events-none group-hover:opacity-[0.11] transition-opacity duration-300">
                {step.numeral}
              </span>

              <div className="relative z-10">
                {/* Letra do pilar */}
                <span className="font-display text-5xl text-[var(--gold)] font-normal leading-none mb-5 block">
                  {step.numeral}
                </span>

                <h3 className="font-display text-2xl font-medium text-foreground mb-3">
                  {step.title}
                </h3>

                <p className="text-[var(--muted-foreground)] leading-relaxed text-sm mb-6">
                  {step.description}
                </p>

                <ul className="space-y-2 pt-4 border-t border-[var(--border)]">
                  {step.deliverables.map((d, j) => (
                    <li
                      key={j}
                      className="text-sm text-[var(--muted-foreground)] flex items-start gap-2"
                    >
                      <span className="text-[var(--gold)] mt-0.5 flex-shrink-0">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
