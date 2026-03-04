"use client";

import { useState } from "react";

type Character = {
  id: string;
  src: string;
  alt: string;
  meaning: string;
  top: number;
  left: number;
  size: number;
  rotation: number;
};

const characters: Character[] = [
  {
    id: "rei",
    src: "/images/kanji/car1yellowred.png",
    alt: "Kanji Rei",
    meaning: "Cortesia, Delicadeza, Dedicação Cívica",
    top: 59,
    left: 7,
    size: 48,
    rotation: 60,
  },
  {
    id: "choku",
    src: "/images/kanji/car2yellowred.png",
    alt: "Kanji Choku",
    meaning: "Força, Vigor, Resistência, Robustez",
    top: 76,
    left: 23,
    size: 42,
    rotation: 30,
  },
  {
    id: "sei",
    src: "/images/kanji/car3yellowred.png",
    alt: "Kanji Sei",
    meaning: "Serenidade, Domínio da Emotividade, Segurança Tranquila",
    top: 78,
    left: 58,
    size: 45,
    rotation: -23,
  },
  {
    id: "ki",
    src: "/images/kanji/car4yellowred.png",
    alt: "Kanji Ki",
    meaning: "Velocidade, o Instantâneo, o Súbito",
    top: 61,
    left: 78,
    size: 42,
    rotation: -60,
  },
  {
    id: "dragon",
    src: "/images/arj/dragon.png",
    alt: "dragon",
    meaning:
      "DRAGÃO — animal fabuloso com cauda de serpente, garras e asas. Símbolo de força prodigiosa, coragem, êxitos na luta (combate) e nas situações extremamente difíceis e perigosas. Representa o guardião de todos os bens e portador de prosperidade, progresso e eficácia.",
    top: 16,
    left: 23,
    size: 196,
    rotation: -6,
  },
];

type KanjiShowerProps = {
  scale?: number;
};

export default function KanjiShower({ scale = 1 }: KanjiShowerProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  const baseSize = 300 * scale;
  const hoverRightPosX = baseSize + 500;
  const hoverRightPosY = baseSize / 2;

  const activeChar = hovered ? characters.find((c) => c.id === hovered) : null;

  return (
    <div className="relative ml-102" style={{ width: baseSize + 600, height: baseSize }}>
      {/* Base symbol */}
      <img
        src="/images/arj/arjcolornocarnodragon.png"
        alt="Símbolo ARJ"
        className="object-contain select-none"
        style={{ width: baseSize, height: baseSize }}
        draggable={false}
      />

      {/* Interactive characters */}
      {characters.map((char) => {
        const topPx = (char.top / 100) * baseSize;
        const leftPx = (char.left / 100) * baseSize;
        const sizePx = char.size * scale;
        const adjustedLeftPx = char.id === "dragon" ? leftPx + sizePx * 0.3 : leftPx;
        const adjustedTopPx = char.id === "dragon" ? topPx + sizePx * 0.05 : topPx;

        const isHovered = hovered === char.id;
        const hitboxScale = char.id === "dragon" ? 0.8 : 1;
        const hitboxSizePx = sizePx * hitboxScale;

        return (
          <div
            key={char.id}
            onMouseEnter={() => setHovered(char.id)}
            onMouseLeave={() => setHovered(null)}
            className="absolute cursor-pointer select-none"
            style={{
              top: topPx,
              left: leftPx,
              width: hitboxSizePx,
              height: hitboxSizePx,
              zIndex: isHovered ? 30 : 10,
            }}
          >
            <img
              src={char.src}
              alt={char.alt}
              draggable={false}
              className="object-contain drop-shadow-md transition-all duration-300 pointer-events-none"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: sizePx,
                height: sizePx,
                transformOrigin: "center",
                transform: isHovered
                  ? `translate(${hoverRightPosX - adjustedLeftPx}px, ${hoverRightPosY - adjustedTopPx - sizePx / 2}px) scale(${(baseSize * 1.1) / sizePx}) rotate(0deg)`
                  : `rotate(${char.rotation}deg)`,
              }}
            />
          </div>
        );
      })}

      {/* Hint box when nothing hovered */}
      {!hovered && (
        <div
          className="absolute flex items-center justify-center rounded-xl border border-dashed border-[var(--border)]"
          style={{
            top: hoverRightPosY,
            left: hoverRightPosX,
            width: 400,
            maxWidth: 400,
            padding: "3rem 2rem",
            transform: "translate(-50%, -50%)",
            zIndex: 20,
            color: "var(--muted)",
            fontStyle: "italic",
            textAlign: "center",
            opacity: 0.5,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          Coloque o rato num carácter oriental para verificar o seu significado.
        </div>
      )}

      {/* Active character meaning */}
      {activeChar && (() => {
        const isDragon = activeChar.id === "dragon";
        const parts = activeChar.meaning.split(",").map((s) => s.trim());

        return (
          <div
            className="absolute select-text"
            style={{
              top:
                hoverRightPosY +
                (baseSize * 0.9) / (activeChar.size * scale) * activeChar.size * scale * 0.6,
              left: hoverRightPosX + 30,
              transform: "translateX(-50%)",
              zIndex: 40,
              width: isDragon ? 380 : 320,
            }}
          >
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-2xl shadow-black/30 overflow-hidden">
              {/* Header with character name */}
              <div className="px-5 py-3 border-b border-[var(--border)] bg-[var(--accent)]/5">
                <h4 className="text-xs uppercase tracking-widest text-[var(--accent-light)] font-semibold">
                  {activeChar.alt.replace("Kanji ", "")}
                </h4>
              </div>

              {/* Content */}
              <div className="px-5 py-4">
                {isDragon ? (
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {activeChar.meaning}
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {parts.map((part, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--accent)]/8 border border-[var(--accent)]/15 text-sm text-[var(--foreground)]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[var(--accent-light)] flex-shrink-0" />
                        {part}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
