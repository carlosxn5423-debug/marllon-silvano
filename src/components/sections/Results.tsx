"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { content } from "@/content";

function CountUp({ target, suffix = "", prefix = "", duration = 1800 }: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count >= 1000 ? count.toLocaleString("pt-BR") : count}{suffix}
    </span>
  );
}

const outcomes = [
  {
    metric: "1.674",
    metricNum: 1674,
    metricSuffix: "",
    label: "contratos gerenciados em 30 dias",
    context: "Laquila Advogados:operação com 22+ vendedores simultâneos",
  },
  {
    metric: "2×",
    metricNum: 2,
    metricSuffix: "×",
    label: "contratos dobrados em menos de 1 mês",
    context: "Carlos Cruz Advocacia:mesmo investimento em tráfego, resultado dobrado",
  },
  {
    metric: "Top 5",
    metricNum: null,
    metricSuffix: "",
    label: "maior escritório trabalhista do Brasil",
    context: "Gustavo Souza Advogados:estruturação de operações comerciais complexas",
  },
];

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

        {/* Stats com contador animado */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { target: 12, suffix: "", label: "anos em vendas jurídicas", size: "text-3xl md:text-4xl" },
            { target: 23, prefix: "R$", suffix: "M+", label: "em contratos gerados", size: "text-2xl md:text-3xl" },
            { target: 200, suffix: "+", label: "advogados treinados", size: "text-3xl md:text-4xl" },
            { target: 14, prefix: "+", suffix: "", label: "comerciais implementados", size: "text-3xl md:text-4xl" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-6 bg-[var(--background)] border border-[var(--border)] rounded-sm"
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2, delay: 0 } }}
            >
              <p className={`font-display ${stat.size} text-[var(--gold)] mb-2`}>
                <CountUp target={stat.target} suffix={stat.suffix} prefix={stat.prefix} />
              </p>
              <p className="text-xs text-[var(--muted-foreground)] leading-tight">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Casos reais */}
        <div className="grid md:grid-cols-3 gap-6">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              className="p-8 bg-[var(--background)] border border-[var(--border)] rounded-sm hover:border-[var(--gold)] transition-colors"
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2, delay: 0 } }}
            >
              <p className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-2 leading-none">
                {item.metricNum !== null ? (
                  <CountUp target={item.metricNum} suffix={item.metricSuffix} duration={1200} />
                ) : (
                  item.metric
                )}
              </p>
              <p className="text-sm font-medium text-foreground mb-3">{item.label}</p>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed pt-3 border-t border-[var(--border)]">
                {item.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
