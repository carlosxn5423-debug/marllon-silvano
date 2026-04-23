"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingDown, Users, GitBranch, BarChart2 } from "lucide-react";
import { content } from "@/content";

const iconMap: Record<string, React.ElementType> = {
  TrendingDown,
  Users,
  GitBranch,
  BarChart2,
};

export function Pains() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="dores"
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
          <p className="eyebrow mb-4">{content.pains.eyebrow}</p>
          <div className="gold-divider mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tight text-foreground max-w-2xl mx-auto">
            {content.pains.headline}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.pains.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? BarChart2;
            return (
              <motion.div
                key={i}
                className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-sm hover:border-[var(--gold)] transition-colors"
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Icon
                  size={20}
                  className="text-[var(--gold)] mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
