import Link from "next/link";
import { content } from "@/content";

export function Footer() {
  const year = new Date().getFullYear();
  const prof = content.professional;

  return (
    <footer className="bg-[var(--foreground)] pt-12 pb-8">
      {/* Linha dourada */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-[var(--gold)] opacity-30 mb-12" />

        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Identidade */}
          <div>
            <p className="font-display text-lg text-[var(--background)] mb-3">
              {prof.name}
            </p>
            <p className="text-sm text-[#888] leading-relaxed">
              {content.footer.tagline}
            </p>
          </div>

          {/* Navegação */}
          <div>
            <p className="text-xs text-[#888] uppercase tracking-widest mb-4">
              Navegação
            </p>
            <ul className="space-y-2">
              {content.footer.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#888] hover:text-[var(--gold)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-xs text-[#888] uppercase tracking-widest mb-4">
              Contato
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${prof.email}`}
                  className="text-sm text-[#888] hover:text-[var(--gold)] transition-colors"
                >
                  E-mail
                </a>
              </li>
              <li>
                <a
                  href={prof.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#888] hover:text-[var(--gold)] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={prof.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#888] hover:text-[var(--gold)] transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-[#1a1a1a] mb-6" />

        <div className="flex flex-col md:flex-row justify-between gap-2 text-xs text-[#666]">
          <p>
            © {year} {prof.name}. Todos os direitos reservados.
          </p>
          <p>{content.footer.cnpj}</p>
        </div>
      </div>
    </footer>
  );
}
