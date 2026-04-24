"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { content } from "@/content";
import { useEffect, useRef } from "react";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      opacityDir: Math.random() > 0.5 ? 1 : -1,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity += p.opacityDir * 0.003;
        if (p.opacity > 0.6 || p.opacity < 0.05) p.opacityDir *= -1;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184, 147, 90, ${p.opacity})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.2 + i * 0.15, ease: "easeOut" as const },
  }),
};

export function Hero() {
  const whatsappHref = `https://wa.me/${content.professional.whatsapp}?text=${encodeURIComponent(content.professional.whatsappMessage)}`;
  const lines = content.hero.headline.split(". ").filter(Boolean);

  return (
    <section className="relative min-h-screen bg-[#080808] overflow-hidden flex items-center">
      {/* Particles */}
      <ParticleCanvas />

      {/* Gold glow behind texto */}
      <div className="absolute left-[5%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(184,147,90,0.07) 0%, transparent 70%)" }}
      />

      {/* Foto — right side, full height, fundo escuro blend perfeito */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[62%] pointer-events-none">
        <Image
          src={content.professional.photoHero}
          alt={`Marllon Silvano`}
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, 62vw"
        />
        {/* Blend lateral (desktop) */}
        <div className="absolute inset-0 hidden md:block"
          style={{ background: "linear-gradient(to right, #080808 0%, #080808 5%, rgba(8,8,8,0.5) 35%, transparent 60%)" }}
        />
        {/* Overlay escuro no mobile */}
        <div className="absolute inset-0 md:hidden bg-[#080808]/75" />
        {/* Fade bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48"
          style={{ background: "linear-gradient(to top, #080808 0%, transparent 100%)" }}
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full pt-24 pb-16 md:pt-0 md:pb-0">
        <div className="max-w-xl md:max-w-2xl">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {content.hero.eyebrow}
          </motion.p>

          <motion.div
            className="gold-divider mb-7"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            style={{ originX: 0, marginLeft: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <h1 className="font-display font-normal tracking-tight text-white leading-[1.04] mb-6 overflow-hidden">
            {lines.map((line, i) => (
              <motion.span
                key={i}
                className="block"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)" }}
                variants={lineVariants}
                initial="hidden"
                animate="show"
                custom={i}
              >
                {line}{i < lines.length - 1 ? "." : ""}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="text-[#9a9a9a] text-base md:text-lg leading-relaxed mb-8 max-w-lg"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {content.hero.subheadline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-[#080808] rounded-sm overflow-hidden group"
              style={{ background: "linear-gradient(135deg, #D4B07C, #B8935A, #8A6B3F)" }}
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, #B8935A, #8A6B3F, #6d5230)" }}
              />
              <span className="relative">{content.hero.ctaPrimary}</span>
            </a>
            <Link
              href="/#metodo"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-[#2a2a2a] text-sm font-medium text-[#9a9a9a] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors rounded-sm"
            >
              {content.hero.ctaSecondary}
            </Link>
          </motion.div>

          <motion.p
            className="text-xs text-[#555] tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {content.hero.socialProof}
          </motion.p>
        </div>
      </div>

    </section>
  );
}
