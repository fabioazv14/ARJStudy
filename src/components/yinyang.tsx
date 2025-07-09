import { bebasNeue, fjallaOne } from "../../public/fonts/fonts";


export default function YinyangTable() {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center gap-50 p-8">
  
        {/* Tabelas Yin e Yang */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Yin */}
          <div className={`${bebasNeue.variable} ${fjallaOne.variable} bg-black text-white rounded-2xl shadow-lg p-4 min-w-[300px]`}>
            <h2 className="text-7xl font-bold mb-12 text-center font-title">Yin</h2>
            <ul className="list-disc list-inside space-y-4 text-3xl font-navbut">
              <li>Passivo</li>
              <li>Princípio Negativo</li>
              <li>Feminino</li>
              <li>Húmido</li>
              <li>Frio</li>
              <li>Oculto</li>
              <li>Nebuloso</li>
              <li>Brando</li>
              <li>Obscuro</li>
            </ul>
          </div>
  
          {/* Yang */}
          <div className={`${bebasNeue.variable} ${fjallaOne.variable} bg-white text-black rounded-2xl shadow-lg p-4 min-w-[300px] border`}>
            <h2 className="text-7xl font-bold mb-12 text-center font-title">Yang</h2>
            <ul className="list-disc list-inside space-y-4 text-3xl font-navbut">
              <li>Força Activa</li>
              <li>Masculino</li>
              <li>Calor</li>
              <li>Brilhante</li>
            </ul>
            <h3 className="flex mx-auto text-center mt-18 text-3xl font-navbut w-40">Atua em tudo que é luminoso</h3>
          </div>
        </div>


        {/* Símbolo Yin-Yang */}
        <div className="flex">
          <img
            src="/images/yinyang.png"
            alt="YINYANG"
            width={500}
          />
        </div>
      </div>
    );
  }
  