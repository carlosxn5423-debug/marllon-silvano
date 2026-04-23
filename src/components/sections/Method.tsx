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
          <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tight text-foreground max-w-2xl mx-auto">
            {content.method.headline}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {content.method.steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex gap-8 mb-10 last:mb-0"
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Numeral + linha */}
              <div className="flex flex-col items-center">
                <span className="font-display text-xl text-[var(--gold)] font-medium w-8 text-center flex-shrink-0">
                  {step.numeral}
                </span>
                {i < content.method.steps.length - 1 && (
                  <div className="flex-1 w-px bg-[var(--border)] mt-3" />
                )}
              </div>

              {/* Conteúdo */}
              <div className="pb-10 last:pb-0">
                <h3 className="font-display text-xl font-medium text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed text-base mb-4">
                  {step.description}
                </p>
                <ul className="space-y-1">
                  {step.deliverables.map((d, j) => (
                    <li
                      key={j}
                      className="text-sm text-[var(--muted-foreground)] flex items-start gap-2"
                    >
                      <span className="text-[var(--gold)] mt-1 flex-shrink-0">—</span>
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
