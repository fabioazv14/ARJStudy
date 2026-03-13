import { useMemo, useState } from "react";
import Image from "next/image";
import { bebasNeue, fjallaOne } from "../../public/fonts/fonts";

export type Technique = {
  imageSrc: string;
  techniqueName: string;
  detail?: string;
  altText?: string;
  type?: string; // ex: "tsuki", "gueri", "uke"
};

interface TechniqueGridProps {
  techniques: Technique[];
  title?: string;
  subtitle?: string;
  enableTypeFilter?: boolean;
}

export default function TechniqueGrid({ techniques, title, subtitle, enableTypeFilter = false }: TechniqueGridProps) {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("todos");

  const types = useMemo(() => {
    const unique = new Set<string>();
    techniques.forEach((t) => {
      if (t.type) unique.add(t.type);
    });
    return ["todos", ...Array.from(unique)];
  }, [techniques]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return techniques.filter((t) => {
      const matchesQuery = `${t.techniqueName} ${t.detail ?? ""}`.toLowerCase().includes(q);
      const matchesType = typeFilter === "todos" || (t.type?.toLowerCase() ?? "") === typeFilter;
      return matchesQuery && matchesType;
    });
  }, [query, techniques, typeFilter]);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 shadow-sm w-full sm:w-auto flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[var(--muted)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar técnica..."
            className="flex-1 bg-transparent outline-none text-[var(--foreground)] placeholder:text-[var(--muted)] text-sm"
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              className="text-[var(--muted)] text-xs uppercase tracking-[0.14em] hover:text-[var(--foreground)]"
            >
              Limpar
            </button>
          ) : null}
        </div>

        {enableTypeFilter && types.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-3 py-1 text-xs uppercase tracking-[0.16em] rounded-full border transition ${
                  typeFilter === t
                    ? "bg-[var(--accent)]/10 border-[var(--accent)] text-[var(--accent-light)]"
                    : "bg-[var(--surface)] border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)]"
                }`}
              >
                {t === "todos" ? "Todos" : t}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((t) => (
          <article
            key={t.techniqueName}
            className={`${bebasNeue.variable} ${fjallaOne.variable} group rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-[0_10px_40px_-26px_rgba(0,0,0,0.6)] transition hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-[0_16px_60px_-26px_rgba(0,0,0,0.7)]`}
          >
            <div className="relative h-40 bg-[var(--surface-light)]">
              <Image
                src={t.imageSrc}
                alt={t.altText ?? t.techniqueName}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-contain p-4 transition duration-300 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-4 top-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] drop-shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                Técnica
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-title text-xl text-[var(--foreground)] leading-snug">{t.techniqueName}</h3>
              {t.detail ? (
                <p className="font-navbut text-sm text-[var(--muted)] leading-relaxed">{t.detail}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center text-sm text-[var(--muted)] border border-[var(--border)] rounded-xl py-6 bg-[var(--surface)]">
          Nenhuma técnica encontrada.
        </div>
      )}
    </section>
  );
}
