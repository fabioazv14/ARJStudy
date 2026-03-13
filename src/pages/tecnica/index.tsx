import { bebasNeue } from "../../../public/fonts/fonts";
import TechniqueGrid, { Technique } from "@/components/technicagrid";

const techniques: Technique[] = [
  // Tsuki
  {
    imageSrc: "/images/tecnica/oitsuki.png",
    techniqueName: "Oi-tsuki",
    detail: "Soco de avanço (mesma perna e braço à frente)",
    type: "tsuki",
  },
  {
    imageSrc: "/images/tecnica/gyakutsuki.png",
    techniqueName: "Gyaku-tsuki",
    detail: "Soco contrário: perna dianteira, braço de trás",
    type: "tsuki",
  },
  {
    imageSrc: "/images/tecnica/tatetsuki.png",
    techniqueName: "Tate-tsuki",
    detail: "Soco vertical curto e rápido",
    type: "tsuki",
  },
  {
    imageSrc: "/images/tecnica/teishuushi.png",
    techniqueName: "Teishu-ushi",
    detail: "Empurrão com a base da palma",
    type: "tsuki",
  },
  {
    imageSrc: "/images/tecnica/tubitsuki.png",
    techniqueName: "Tubi-tsuki",
    detail: "Soco direto em chicote / rápido",
    type: "tsuki",
  },
  // Gueri
  {
    imageSrc: "/images/tecnica/maegueri.png",
    techniqueName: "Mae-gueri",
    detail: "Pontapé frontal",
    type: "gueri",
  },
  {
    imageSrc: "/images/tecnica/mawashigeri.jpg",
    techniqueName: "Mawashi-gueri",
    detail: "Pontapé circular",
    type: "gueri",
  },
  {
    imageSrc: "/images/tecnica/ushirogeri.png",
    techniqueName: "Ushiro-gueri",
    detail: "Pontapé traseiro",
    type: "gueri",
  },
  {
    imageSrc: "/images/tecnica/urageri.png",
    techniqueName: "Ura-gueri",
    detail: "Pontapé invertido / gancho",
    type: "gueri",
  },
  {
    imageSrc: "/images/tecnica/kinger.png",
    techniqueName: "Kinger",
    detail: "Pontapé baixo / frontal rápido",
    type: "gueri",
  },
  // Uke
  {
    imageSrc: "/images/tecnica/ageuke.png",
    techniqueName: "Age-uke",
    detail: "Defesa ascendente",
    type: "uke",
  },
  {
    imageSrc: "/images/tecnica/shutouke.png",
    techniqueName: "Shuto-uke",
    detail: "Defesa com a mão de faca",
    type: "uke",
  },
  {
    imageSrc: "/images/tecnica/gedanbarai.png",
    techniqueName: "Gedan-barai",
    detail: "Varredura baixa",
    type: "uke",
  },
  {
    imageSrc: "/images/tecnica/sotouke.png",
    techniqueName: "Soto-uke",
    detail: "Defesa de fora para dentro",
    type: "uke",
  },
  {
    imageSrc: "/images/tecnica/udeuke.png",
    techniqueName: "Ude-uke",
    detail: "Defesa com o antebraço",
    type: "uke",
  },
  {
    imageSrc: "/images/tecnica/haishuuke.png",
    techniqueName: "Haishu-uke",
    detail: "Defesa com o dorso da mão",
    type: "uke",
  },
  {
    imageSrc: "/images/tecnica/nagashiuke.png",
    techniqueName: "Nagashi-uke",
    detail: "Defesa fluida / desvio",
    type: "uke",
  },
  {
    imageSrc: "/images/tecnica/kokenuke.png",
    techniqueName: "Koken-uke",
    detail: "Defesa com o punho curvado",
    type: "uke",
  },
];

export default function Tecnica() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto mb-10">
        <div className={`${bebasNeue.variable}`}>
          <div className="w-8 h-0.5 bg-[var(--accent)] mb-4" />
          <h1 className="font-title text-5xl text-[var(--foreground)] tracking-wide">Técnica</h1>
          <p className="text-[var(--muted)] mt-2">Explore socos (tsuki), pontapés (gueri) e defesas (uke) numa só vista.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <TechniqueGrid
          techniques={techniques}
          enableTypeFilter
          title="Técnicas"
          subtitle="Filtre por tipo ou pesquise pelo nome/detalhe"
        />
      </div>
    </div>
  );
}
