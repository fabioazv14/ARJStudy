import Hero from "@/components/hero";
import Card from "@/components/card";

export default function Home() {
  return (
    <div>
      <Hero
        title="ARJ Study"
        description="Aprende a arte Alex Ryu Jitsu, a sua história, os seus símbolos, as graduações e muito mais..."
        imageSrcDark="/images/arj/arjlogowhite.svg"
        imageSrcLight="/images/arj/arjlogoblack.svg"
        imageAlt="ARJLOGO"
      />

      <section id="explore" className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <div className="w-8 h-0.5 bg-[var(--accent)] mb-4" />
          <h2 className="text-3xl font-bold text-[var(--foreground)] tracking-tight">Explorar</h2>
          <p className="text-[var(--muted)] mt-2">Descobre os diferentes aspectos da arte marcial.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            imageSrc="/images/mestrealexcarv.png"
            imageAlt="MESTREALEX"
            title="História"
            linkHref="/historia"
            linkText="Ver história"
          />
          <Card
            imageSrc="/images/arj/arjcolor.png"
            imageAlt="ARJLOGO"
            title="Símbolos"
            linkHref="/simbolos/alexryujitsu/"
            linkText="Ver símbolos"
          />
          <Card
            imageSrc="/images/tecnica.png"
            imageAlt="TECNICA"
            title="Técnica"
            linkHref="/tecnica/tsuki/"
            linkText="Ver técnica"
          />
          <Card
            imageSrc="/images/belts.webp"
            imageAlt="BELTS"
            title="Graduações"
            linkHref="/graduacoes"
            linkText="Ver graduações"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8 text-center">
        <p className="text-sm text-[var(--muted)]">
          ARJ Study — Alex Ryu Jitsu
        </p>
      </footer>
    </div>
  );
}
