import TecnicaLine from "@/components/tecnicaline";
import { bebasNeue } from "../../../public/fonts/fonts";

export default function Uke() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto mb-12">
        <div className={`${bebasNeue.variable}`}>
          <div className="w-8 h-0.5 bg-[var(--accent)] mb-4" />
          <h1 className="font-title text-5xl text-[var(--foreground)] tracking-wide">Uke</h1>
          <p className="text-[var(--muted)] mt-2">Técnicas de defesa</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <TecnicaLine imageSrc="/images/tecnica/ageuke.png" techniqueName="Age-uke" />
        <TecnicaLine imageSrc="/images/tecnica/shutouke.png" techniqueName="Shuto-uke" />
        <TecnicaLine imageSrc="/images/tecnica/gedanbarai.png" techniqueName="Gedan-barai" />
        <TecnicaLine imageSrc="/images/tecnica/sotouke.png" techniqueName="Soto-uke" />
        <TecnicaLine imageSrc="/images/tecnica/udeuke.png" techniqueName="Ude-uke" />
        <TecnicaLine imageSrc="/images/tecnica/haishuuke.png" techniqueName="Haishu-uke" />
        <TecnicaLine imageSrc="/images/tecnica/nagashiuke.png" techniqueName="Nagashi-uke" />
        <TecnicaLine imageSrc="/images/tecnica/kokenuke.png" techniqueName="Koken-uke" />
      </div>
    </div>
  );
}