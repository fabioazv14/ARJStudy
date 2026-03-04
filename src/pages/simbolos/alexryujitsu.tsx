import KanjiShower from "@/components/kanjishower";
import { bebasNeue } from "../../../public/fonts/fonts";
import YinyangTable from "@/components/yinyang";
import ColorPalette from "@/components/colorpalette";

export default function AlexRyuJitsu() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className={`${bebasNeue.variable}`}>
          <div className="w-8 h-0.5 bg-[var(--accent)] mb-4" />
          <h1 className="font-title text-5xl text-[var(--foreground)] tracking-wide">
            Símbolo do Alex Ryu Jitsu
          </h1>
          <p className="text-[var(--muted)] mt-2">
            Explore os caracteres orientais e os seus significados
          </p>
        </div>
      </div>

      {/* Kanji interactive section */}
      <div className="px-6">
        <KanjiShower scale={1.2} />
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center mt-20 mb-8">
        <div className="flex flex-col items-center gap-2 opacity-30">
          <span className="text-xs tracking-widest uppercase text-[var(--muted)]">Continuar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[var(--muted)] animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px max-w-4xl mx-auto my-16 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

      {/* Yin Yang section */}
      <section className="px-6">
        <YinyangTable />
      </section>

      {/* Divider */}
      <div className="h-px max-w-4xl mx-auto my-16 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

      {/* Color palette section */}
      <section className="px-6 pb-12">
        <ColorPalette />
      </section>
    </div>
  );
}