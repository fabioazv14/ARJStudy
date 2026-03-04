import TecnicaLine from "@/components/tecnicaline";
import { bebasNeue } from "../../../public/fonts/fonts";

export default function Tsuki() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto mb-12">
        <div className={`${bebasNeue.variable}`}>
          <div className="w-8 h-0.5 bg-[var(--accent)] mb-4" />
          <h1 className="font-title text-5xl text-[var(--foreground)] tracking-wide">Tsuki</h1>
          <p className="text-[var(--muted)] mt-2">Técnicas de soco</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <TecnicaLine imageSrc="/images/tecnica/oitsuki.png" techniqueName="Oi-tsuki" />
        <TecnicaLine imageSrc="/images/tecnica/gyakutsuki.png" techniqueName="Gyaku-tsuki" />
        <TecnicaLine imageSrc="/images/tecnica/tatetsuki.png" techniqueName="Tate-tsuki" />
        <TecnicaLine imageSrc="/images/tecnica/teishuushi.png" techniqueName="Teishu-ushi" />
        <TecnicaLine imageSrc="/images/tecnica/tubitsuki.png" techniqueName="Tubi-tsuki" />
      </div>
    </div>
  );
}