import { bebasNeue } from "../../public/fonts/fonts";

export default function Historia() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className={`${bebasNeue.variable} mb-12`}>
          <div className="w-8 h-0.5 bg-[var(--accent)] mb-4" />
          <h1 className="font-title text-5xl text-[var(--foreground)] tracking-wide">História</h1>
          <p className="text-[var(--muted)] mt-2">A origem do Alex Ryu Jitsu</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-2 bg-[var(--accent)]/10 rounded-2xl blur-xl" />
              <img
                src="/images/arj/arjfull.png"
                alt="ARJ TITLE"
                width={360}
                className="relative rounded-xl"
              />
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <p className="text-[var(--muted)] text-lg leading-relaxed">
              O Alex Ryu Jitsu é uma arte marcial com raízes profundas na tradição e disciplina oriental,
              adaptada e desenvolvida para o contexto moderno.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}