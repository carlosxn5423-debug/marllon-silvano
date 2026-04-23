"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { content } from "@/content";

const fade = {
  hidden: { opacity: 0, y: 8 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

export function Hero() {
  const whatsappHref = `https://wa.me/${content.professional.whatsapp}?text=${encodeURIComponent(content.professional.whatsappMessage)}`;

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-center">
          {/* Coluna esquerda */}
          <div>
            <motion.p
              className="eyebrow mb-4"
              variants={fade}
              initial="hidden"
              animate="show"
              custom={0}
            >
              {content.hero.eyebrow}
            </motion.p>

            <motion.h1
              className="font-display text-4xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-[-0.02em] text-foreground mb-6"
              variants={fade}
              initial="hidden"
              animate="show"
              custom={0.1}
            >
              {content.hero.headline}
            </motion.h1>

            <motion.p
              className="text-lg text-[var(--muted-foreground)] leading-relaxed mb-8 max-w-xl"
              variants={fade}
              initial="hidden"
              animate="show"
              custom={0.2}
            >
              {content.hero.subheadline}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-8"
              variants={fade}
              initial="hidden"
              animate="show"
              custom={0.3}
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--foreground)] text-[var(--background)] border border-[var(--gold)] text-sm font-medium hover:bg-[var(--gold-deep)] hover:border-[var(--gold-deep)] transition-colors rounded-sm"
              >
                {content.hero.ctaPrimary}
              </a>
              <Link
                href="/#metodo"
                className="inline-flex items-center justify-center px-6 py-3 border border-[var(--border)] text-sm font-medium hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors rounded-sm"
              >
                {content.hero.ctaSecondary}
              </Link>
            </motion.div>

            <motion.p
              className="text-xs text-[var(--muted-foreground)] tracking-wide"
              variants={fade}
              initial="hidden"
              animate="show"
              custom={0.4}
            >
              {content.hero.socialProof}
            </motion.p>
          </div>

          {/* Coluna direita — foto */}
          <motion.div
            className="photo-frame relative mx-auto w-full max-w-sm"
            variants={fade}
            initial="hidden"
            animate="show"
            custom={0.2}
          >
            <div className="aspect-[4/5] relative rounded-sm overflow-hidden border border-[var(--border)]">
              <Image
                src={content.professional.photoHero}
                alt={`Foto de ${content.professional.name}`}
                fill
                className="object-cover grayscale"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
