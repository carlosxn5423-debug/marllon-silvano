import { content } from "@/content";

export function CredibilityBar() {
  return (
    <section className="py-10 bg-[var(--muted)] border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-xs text-[var(--muted-foreground)] text-center uppercase tracking-widest mb-6">
          {content.credibility.label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {content.credibility.logos.map((logo) => (
            <div
              key={logo.name}
              className="h-8 w-auto opacity-40 grayscale flex items-center"
            >
              {/* [PERSONALIZAR] Substituir por <Image> quando tiver logos reais */}
              <span className="text-sm font-medium text-[var(--muted-foreground)] tracking-wide">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
