import { bebasNeue } from "../../public/fonts/fonts";


export default function YinyangTable() {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8">
        {/* Símbolo Yin-Yang */}
        <div className="text-7xl">
          ☯
        </div>
  
        {/* Tabelas Yin e Yang */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Yin */}
          <div className={`${bebasNeue.variable} bg-black text-white rounded-2xl shadow-lg p-4 min-w-[300px]`}>
            <h2 className="text-7xl font-bold mb-12 text-center font-title">Yin</h2>
            <ul className="list-disc list-inside space-y-4 text-3xl">
              <li>Escuridão</li>
              <li>Passividade</li>
              <li>Frio</li>
              <li>Feminino</li>
              <li>Noite</li>
              <li>Interior</li>
            </ul>
          </div>
  
          {/* Yang */}
          <div className={`${bebasNeue.variable} bg-white text-black rounded-2xl shadow-lg p-4 min-w-[300px] border`}>
            <h2 className="text-7xl font-bold mb-12 text-center font-title">Yang</h2>
            <ul className="list-disc list-inside space-y-4 text-3xl">
              <li>Luz</li>
              <li>Atividade</li>
              <li>Calor</li>
              <li>Masculino</li>
              <li>Dia</li>
              <li>Exterior</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  