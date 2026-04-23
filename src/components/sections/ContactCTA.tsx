"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, Link2, Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { content } from "@/content";

const schema = z.object({
  name: z.string().min(2, "Nome obrigatório"),
  email: z.string().email("E-mail inválido"),
  whatsapp: z.string().min(10, "WhatsApp inválido"),
  firm: z.string().min(2, "Nome do escritório obrigatório"),
  partners: z.string().min(1, "Selecione uma opção"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function ContactCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const msg = `Olá, Marllon! Me chamo ${data.name}, sou do escritório ${data.firm} (${data.partners}). ${data.message || ""}`.trim();
    const href = `https://wa.me/${content.professional.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(href, "_blank");
  };

  const prof = content.professional;

  return (
    <section
      id="contato"
      className="py-20 md:py-28 bg-[#111111]"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-4">{content.contact.eyebrow}</p>
          <div className="gold-divider mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tight text-white max-w-2xl mx-auto">
            {content.contact.headline}
          </h2>
          <p className="text-[var(--muted-foreground)] mt-4 max-w-xl mx-auto leading-relaxed">
            {content.contact.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {isSubmitSuccessful ? (
              <div className="flex items-center justify-center h-full py-16">
                <p className="font-display text-xl text-[var(--gold)] text-center">
                  Mensagem enviada. Falaremos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div>
                  <label className="block text-xs text-[var(--muted-foreground)] mb-1.5">
                    Nome *
                  </label>
                  <Input
                    {...register("name")}
                    placeholder="Seu nome completo"
                    className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-[#888] focus:border-[var(--gold)] rounded-sm"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[var(--muted-foreground)] mb-1.5">
                      E-mail *
                    </label>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-[#888] focus:border-[var(--gold)] rounded-sm"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs text-[var(--muted-foreground)] mb-1.5">
                      WhatsApp *
                    </label>
                    <Input
                      {...register("whatsapp")}
                      placeholder="(11) 99999-9999"
                      className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-[#888] focus:border-[var(--gold)] rounded-sm"
                    />
                    {errors.whatsapp && (
                      <p className="text-xs text-red-400 mt-1">{errors.whatsapp.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[var(--muted-foreground)] mb-1.5">
                    Nome do escritório *
                  </label>
                  <Input
                    {...register("firm")}
                    placeholder="Ex.: Silva & Associados"
                    className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-[#888] focus:border-[var(--gold)] rounded-sm"
                  />
                  {errors.firm && (
                    <p className="text-xs text-red-400 mt-1">{errors.firm.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-[var(--muted-foreground)] mb-1.5">
                    Nº de sócios *
                  </label>
                  <Select onValueChange={(v: string | null) => setValue("partners", v ?? "")}>
                    <SelectTrigger className="bg-[#1a1a1a] border-[#2a2a2a] text-[var(--muted-foreground)] focus:border-[var(--gold)] rounded-sm">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
                      {content.contact.partnersSocietyOptions.map((opt) => (
                        <SelectItem
                          key={opt}
                          value={opt}
                          className="text-white focus:bg-[#2a2a2a] focus:text-[var(--gold)]"
                        >
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.partners && (
                    <p className="text-xs text-red-400 mt-1">{errors.partners.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-[var(--muted-foreground)] mb-1.5">
                    Mensagem (opcional)
                  </label>
                  <Textarea
                    {...register("message")}
                    placeholder="Conte brevemente o principal desafio comercial da banca..."
                    rows={3}
                    className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-[#888] focus:border-[var(--gold)] rounded-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[var(--gold)] hover:bg-[var(--gold-deep)] text-white text-sm font-medium transition-colors rounded-sm disabled:opacity-60"
                >
                  {isSubmitting ? "Enviando..." : content.contact.submitLabel}
                </button>

                <p className="text-xs text-[#888] text-center">
                  Sem compromisso · 30 minutos · Gratuito
                </p>
              </form>
            )}
          </motion.div>

          {/* Contato direto */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: 8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <a
              href={`https://wa.me/${prof.whatsapp}?text=${encodeURIComponent(prof.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-[#2a2a2a] rounded-sm hover:border-[var(--gold)] group transition-colors"
            >
              <Phone size={18} className="text-[var(--gold)] flex-shrink-0" />
              <div>
                <p className="text-xs text-[#888] mb-0.5">WhatsApp</p>
                <p className="text-sm text-white group-hover:text-[var(--gold)] transition-colors">
                  Conversa direta
                </p>
              </div>
            </a>

            <a
              href={`mailto:${prof.email}`}
              className="flex items-center gap-4 p-4 border border-[#2a2a2a] rounded-sm hover:border-[var(--gold)] group transition-colors"
            >
              <Mail size={18} className="text-[var(--gold)] flex-shrink-0" />
              <div>
                <p className="text-xs text-[#888] mb-0.5">E-mail</p>
                <p className="text-sm text-white group-hover:text-[var(--gold)] transition-colors">
                  {prof.email}
                </p>
              </div>
            </a>

            <a
              href={prof.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-[#2a2a2a] rounded-sm hover:border-[var(--gold)] group transition-colors"
            >
              <Camera size={18} className="text-[var(--gold)] flex-shrink-0" />
              <div>
                <p className="text-xs text-[#888] mb-0.5">Instagram</p>
                <p className="text-sm text-white group-hover:text-[var(--gold)] transition-colors">
                  @marllonsilvano
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
