import { bebasNeue, fjallaOne } from "../../public/fonts/fonts";

export default function YinyangTable() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 p-8 max-w-5xl mx-auto">
      {/* Yin & Yang tables */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Yin */}
        <div
          className={`${bebasNeue.variable} ${fjallaOne.variable} relative overflow-hidden bg-[var(--black)] text-[var(--white)] border border-[var(--border)] rounded-2xl p-8 min-w-[260px] shadow-inner`}
        >
          {/* Dark accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--foreground)]" />
          <h2 className="text-5xl font-bold mb-2 text-center font-title tracking-wider">
            Yin
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--black)] text-[var(--white)] text-[11px] tracking-[0.14em] uppercase font-semibold border border-[var(--white)]/70">
              ● Preto
            </span>
            <span className="text-[10px] uppercase tracking-[0.16em] text-white/60">(Escuro)</span>
          </div>
          <ul className="space-y-3 text-base font-navbut text-white/75">
            {["Passivo", "Princípio Negativo", "Feminino", "Húmido", "Frio", "Oculto", "Nebuloso", "Brando", "Obscuro"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--white)] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Yang */}
        <div
          className={`${bebasNeue.variable} ${fjallaOne.variable} relative overflow-hidden bg-[var(--white)] text-[var(--black)] border border-[var(--border)] rounded-2xl p-8 min-w-[260px] shadow-inner`}
        >
          {/* Light accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--border)]" />
          <h2 className="text-5xl font-bold mb-2 text-center font-title tracking-wider">
            Yang
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[var(--black)] text-[11px] tracking-[0.14em] uppercase font-semibold border border-[var(--border)]">
              ○ Branco
            </span>
            <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">(Claro)</span>
          </div>
          <ul className="space-y-3 text-base font-navbut text-[var(--black)]/70">
            {["Força Activa", "Masculino", "Calor", "Brilhante"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-[var(--muted)] text-center italic">
            Atua em tudo que é luminoso
          </p>
        </div>
      </div>

      {/* Yin-Yang Symbol */}
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="absolute -inset-4 bg-[var(--accent)]/5 rounded-full blur-2xl" />
          <img
            src="/images/yinyang/yinyang.png"
            alt="YINYANG"
            width={280}
            className="relative drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
  