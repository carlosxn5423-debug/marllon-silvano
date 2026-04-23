import Image from "next/image";
import { content } from "@/content";

export function CredibilityBar() {
  return (
    <section className="py-10 bg-[var(--muted)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {content.credibility.logos.map((logo) => (
            <div
              key={logo.name}
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 relative rounded-sm overflow-hidden border border-[var(--border)] bg-white p-1.5 opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain p-1"
                  sizes="64px"
                />
              </div>
              <span className="text-[10px] text-[var(--muted-foreground)] tracking-wide opacity-60 group-hover:opacity-100 transition-opacity text-center leading-tight max-w-[80px]">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
