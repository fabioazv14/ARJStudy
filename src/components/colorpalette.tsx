import { useState } from 'react';
import { bebasNeue, fjallaOne } from '../../public/fonts/fonts';

const colors = [
  {
    name: 'Vermelho',
    color: '#e63946',
    description: [
        'Cor combativa',
        'Excitante da vida',
        'Dá-lhe ardor',
        'Impele à acção',
        'Provoca a luta',
    ],
  },
  {
    name: 'Amarelo Dourado',
    color: '#f1c40f',
    description: [
        'Radiante',
        'Ofusca',
        'Deslumbra glória, vitória e triunfo',
    ],
  },
  {
    name: 'Branco',
    color: '#ffffff',
    description: [
        'Clareza',
        'Pureza perfeita',
        'Verdade',
        'Evidência',
        'Virtude sem macha',
        'Cor fraternal',
        'Harmonia',
        'Agrada a toda a gente',
    ],
  },
  {
    name: 'Preto',
    color: '#282828',
    description: [
        'Figura na insígnia',
        'Adorno e destaque',
    ],
  },
];

export default function ColorPalette() {
  const [selected, setSelected] = useState(colors[0]);

  return (
    <div className="flex flex-col md:flex-row items-start gap-60 p-6 w-full max-w-[1200px] mx-auto">
      <div className={`${bebasNeue.variable} flex flex-col`}>
        <h1 className='flex text-center mx-auto font-title text-6xl mb-8'>Significado das cores</h1>
        {/* Paleta de Cores */}
        <div className="flex flex-col w-[320px] p-6 gap-4 rounded-2xl bg-gray-300 border-8 border-black">
          <h1 className='text-xl text-center'
              style={{
                  color: '#1e40af',
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  fontStyle: 'italic',
                  opacity: 0.4,
              }}
          >
              Selecione uma cor
          </h1>
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setSelected(c)}
              className={`w-full h-20 rounded-lg border-4 ${selected.name === c.name ? 'border-blue-500' : 'border-black'} hover:scale-105 transition`}
              style={{ backgroundColor: c.color }}
              title={c.name}
            />
          ))}
        </div>
      </div>

      {/* Significado da cor selecionada */}
      <div
        className={`${bebasNeue.variable} ${fjallaOne.variable} flex-1 flex flex-col my-auto p-10 rounded-xl shadow-xl border-8 bg-gray-100 text-black space-y-8 min-w-[300px] max-w-[900px]`}
        style={{ borderColor: selected.color }}
      >
        <h2 className="text-6xl font-bold font-title">{selected.name}</h2>
        <ul className="list-disc list-inside text-2xl font-navbut space-y-1">
            {selected.description.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>

      </div>
    </div>
  );
}
