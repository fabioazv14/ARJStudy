import TecnicaLine from "@/components/tecnicaline";
import { bebasNeue } from "../../../public/fonts/fonts";

export default function Gueri() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto mb-12">
        <div className={`${bebasNeue.variable}`}>
          <div className="w-8 h-0.5 bg-[var(--accent)] mb-4" />
          <h1 className="font-title text-5xl text-[var(--foreground)] tracking-wide">Gueri</h1>
          <p className="text-[var(--muted)] mt-2">Técnicas de pontapé</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <TecnicaLine imageSrc="/images/tecnica/maegueri.png" techniqueName="Mae-gueri" />
        <TecnicaLine imageSrc="/images/tecnica/mawashigeri.jpg" techniqueName="Mawashi-gueri" />
        <TecnicaLine imageSrc="/images/tecnica/ushirogeri.png" techniqueName="Ushiro-gueri" />
        <TecnicaLine imageSrc="/images/tecnica/urageri.png" techniqueName="Ura-gueri" />
        <TecnicaLine imageSrc="/images/tecnica/kinger.png" techniqueName="Kinger" />
      </div>
    </div>
  );
}