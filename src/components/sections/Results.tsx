"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { content } from "@/content";

export function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="resultados"
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
          <p className="eyebrow mb-4">{content.results.eyebrow}</p>
          <div className="gold-divider mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tight text-foreground">
            {content.results.headline}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {content.results.testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="relative p-8 bg-[var(--background)] border border-[var(--border)] rounded-sm hover:border-[var(--gold)] transition-colors"
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Aspas decorativas */}
              <span className="absolute top-6 left-8 font-display text-5xl text-[var(--gold)] opacity-40 leading-none select-none">
                "
              </span>

              <p className="font-display text-lg font-normal text-foreground leading-snug mb-6 pt-4">
                {t.quote}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-[var(--muted)] flex-shrink-0 border border-[var(--border)]">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    {t.role} · {t.firm}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
