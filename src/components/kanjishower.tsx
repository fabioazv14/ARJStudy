'use client';

import { useState } from 'react';

type Character = {
  id: string;
  src: string;
  alt: string;
  meaning: string;
  top: number;    // %
  left: number;   // %
  size: number;   // px base
  rotation: number; // graus
};

const characters: Character[] = [
  {
    id: 'rei',
    src: '/images/kanji/car1yellow.png',
    alt: 'Kanji Rei',
    meaning: 'Cortesia, Delicadeza, Dedicação Cívica',
    top: 59,
    left: 7,
    size: 64,
    rotation: 60,
  },
  {
    id: 'choku',
    src: '/images/kanji/car2yellow.png',
    alt: 'Kanji Choku',
    meaning: 'Força, Vigor, Resistência, Robustez',
    top: 76,
    left: 23,
    size: 56,
    rotation: 30,
  },
  {
    id: 'sei',
    src: '/images/kanji/car3yellow.png',
    alt: 'Kanji Sei',
    meaning: 'Serenidade, Domínio da Emotividade, Segurança Tranquila',
    top: 78,
    left: 58,
    size: 60,
    rotation: -23,
  },
  {
    id: 'ki',
    src: '/images/kanji/car4yellow.png',
    alt: 'Kanji Ki',
    meaning: 'Velocidade, o Instantâneo, o Súbito',
    top: 61,
    left: 78,
    size: 56,
    rotation: -60,
  },
];

type KanjiShowerProps = {
  scale?: number;
};

export default function KanjiShower({ scale = 1 }: KanjiShowerProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  const baseSize = 400 * scale;

  // Posição fixa para o caractere ativo ir (à direita do símbolo)
  const hoverRightPosX = baseSize + 200;
  const hoverRightPosY = baseSize / 2; // vertical center

  // Busca o caractere ativo
  const activeChar = hovered ? characters.find((c) => c.id === hovered) : null;

  return (
    <div
      className="relative mt-12 ml-12"
      style={{ width: baseSize + 250, height: baseSize }}
    >
      {/* Símbolo base */}
      <img
        src="/images/arjcolornocar.png"
        alt="Símbolo ARJ"
        className="object-contain select-none"
        style={{ width: baseSize, height: baseSize }}
        draggable={false}
      />

      {characters.map((char) => {
        const topPx = (char.top / 100) * baseSize;
        const leftPx = (char.left / 100) * baseSize;
        const sizePx = char.size * scale;

        const isHovered = hovered === char.id;

        return (
          <div
            key={char.id}
            onMouseEnter={() => setHovered(char.id)}
            onMouseLeave={() => setHovered(null)}
            className="absolute cursor-pointer select-none"
            style={{
              top: topPx,
              left: leftPx,
              width: sizePx,
              height: sizePx,
              zIndex: isHovered ? 30 : 10,
            }}
          >
            <img
              src={char.src}
              alt={char.alt}
              draggable={false}
              className="object-contain drop-shadow-md transition-all duration-300"
              style={{
                width: '100%',
                height: '100%',
                transformOrigin: 'center',
                transform: isHovered
                  ? `translate(${hoverRightPosX - leftPx}px, ${hoverRightPosY - topPx - sizePx / 2}px) scale(${(baseSize * 0.9) / sizePx}) rotate(0deg)`
                  : `rotate(${char.rotation}deg)`,
              }}
            />
          </div>
        );
      })}

      {/* Descrição do caractere ativo, fora do container original */}
      {activeChar && (
        <div
          className="absolute bg-gradient-to-b  from-red-100 to-red-300 text-gray-900 text-xl font-semibold rounded-lg shadow-lg p-4 w-72 max-w-xs text-center select-text"
          style={{
            top: hoverRightPosY + (baseSize * 0.9) / (activeChar.size * scale) * activeChar.size * scale * 0.6, // embaixo da imagem ampliada
            left: hoverRightPosX + 30,
            transform: 'translateX(-50%)',
            zIndex: 40,
            userSelect: 'text',
          }}
        >
          {activeChar.meaning}
        </div>
      )}
    </div>
  );
}
