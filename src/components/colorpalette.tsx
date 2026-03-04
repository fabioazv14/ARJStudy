import { useState } from "react";
import { bebasNeue, fjallaOne } from "../../public/fonts/fonts";

const colors = [
  {
    name: "Vermelho",
    color: "#c0392b",
    description: [
      "Cor combativa",
      "Excitante da vida",
      "Dá-lhe ardor",
      "Impele à acção",
      "Provoca a luta",
    ],
  },
  {
    name: "Amarelo Dourado",
    color: "#f1c40f",
    description: [
      "Radiante",
      "Ofusca",
      "Deslumbra glória, vitória e triunfo",
    ],
  },
  {
    name: "Branco",
    color: "#e5e5e5",
    description: [
      "Clareza",
      "Pureza perfeita",
      "Verdade",
      "Evidência",
      "Virtude sem macha",
      "Cor fraternal",
      "Harmonia",
      "Agrada a toda a gente",
    ],
  },
  {
    name: "Preto",
    color: "#525252",
    description: ["Figura na insígnia", "Adorno e destaque"],
  },
];

export default function ColorPalette() {
  const [selected, setSelected] = useState(colors[0]);

  return (
    <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 p-6 w-full max-w-4xl mx-auto">
      <div className={`${bebasNeue.variable} flex flex-col`}>
        <h2 className="font-title text-4xl mb-6 text-[var(--foreground)] tracking-wide">
          Significado das cores
        </h2>
        {/* Color palette */}
        <div className="flex flex-col w-[240px] p-5 gap-3 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          <p className="text-xs text-[var(--muted)] text-center italic mb-1">
            Selecione uma cor
          </p>
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setSelected(c)}
              className={`w-full h-14 rounded-lg border-2 transition-all duration-200 hover:scale-[1.03] ${
                selected.name === c.name
                  ? "border-[var(--accent-light)] shadow-md"
                  : "border-[var(--border)] hover:border-[var(--muted)]"
              }`}
              style={{ backgroundColor: c.color }}
              title={c.name}
            />
          ))}
        </div>
      </div>

      {/* Selected color meaning */}
      <div
        className={`${bebasNeue.variable} ${fjallaOne.variable} flex-1 flex flex-col p-8 rounded-xl bg-[var(--surface)] border-l-4 min-w-[280px] transition-all duration-300`}
        style={{ borderLeftColor: selected.color }}
      >
        <h2 className="text-5xl font-bold font-title text-[var(--foreground)] tracking-wide mb-6">
          {selected.name}
        </h2>
        <ul className="space-y-3 text-base font-navbut text-[var(--muted)]">
          {selected.description.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: selected.color }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
