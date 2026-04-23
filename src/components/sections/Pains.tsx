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
      className="py-20 md:py-28 bg-[#161616] grain-overlay"
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
          <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tight text-white max-w-2xl mx-auto">
            {content.pains.headline}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.pains.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? BarChart2;
            return (
              <motion.div
                key={i}
                className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm hover:border-[var(--gold)] transition-colors group"
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2, delay: 0 } }}
              >
                <Icon
                  size={20}
                  className="text-[var(--gold)] mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-lg font-medium text-white mb-2 group-hover:text-[var(--gold)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#7a7a7a] leading-relaxed">
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
