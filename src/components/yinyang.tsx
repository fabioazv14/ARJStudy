import { bebasNeue, fjallaOne } from "../../public/fonts/fonts";

export default function YinyangTable() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 p-8 max-w-5xl mx-auto">
      {/* Yin & Yang tables */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Yin */}
        <div
          className={`${bebasNeue.variable} ${fjallaOne.variable} bg-[var(--background)] border border-[var(--border)] rounded-2xl p-8 min-w-[260px]`}
        >
          <h2 className="text-5xl font-bold mb-8 text-center font-title text-[var(--foreground)] tracking-wider">
            Yin
          </h2>
          <ul className="space-y-3 text-base font-navbut text-[var(--muted)]">
            {["Passivo", "Princípio Negativo", "Feminino", "Húmido", "Frio", "Oculto", "Nebuloso", "Brando", "Obscuro"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Yang */}
        <div
          className={`${bebasNeue.variable} ${fjallaOne.variable} bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 min-w-[260px]`}
        >
          <h2 className="text-5xl font-bold mb-8 text-center font-title text-[var(--foreground)] tracking-wider">
            Yang
          </h2>
          <ul className="space-y-3 text-base font-navbut text-[var(--muted)]">
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
  