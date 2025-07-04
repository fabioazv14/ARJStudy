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
    src: '/images/kanji/car1yellowred.png',
    alt: 'Kanji Rei',
    meaning: 'Cortesia, Delicadeza, Dedicação Cívica',
    top: 59,
    left: 7,
    size: 64,
    rotation: 60,
  },
  {
    id: 'choku',
    src: '/images/kanji/car2yellowred.png',
    alt: 'Kanji Choku',
    meaning: 'Força, Vigor, Resistência, Robustez',
    top: 76,
    left: 23,
    size: 56,
    rotation: 30,
  },
  {
    id: 'sei',
    src: '/images/kanji/car3yellowred.png',
    alt: 'Kanji Sei',
    meaning: 'Serenidade, Domínio da Emotividade, Segurança Tranquila',
    top: 78,
    left: 58,
    size: 60,
    rotation: -23,
  },
  {
    id: 'ki',
    src: '/images/kanji/car4yellowred.png',
    alt: 'Kanji Ki',
    meaning: 'Velocidade, o Instantâneo, o Súbito',
    top: 61,
    left: 78,
    size: 56,
    rotation: -60,
  },
  {
    id: 'dragon',
    src: '/images/arj/dragon.png',
    alt: 'dragon',
    meaning: 'DRAGÂO - animal fabuloso com cauda de serpente, garras e asas. Símbolo de força prodigiosa, coragem, êxitos na luta (combate) e nas situações extremamente difíceis e perigosas. Representa o guardião de todos os bens e portador de prosperidade, progresso e eficácia.',
    top: 16,
    left: 23,
    size: 262,
    rotation: -6
  },
];

type KanjiShowerProps = {
  scale?: number;
};

export default function KanjiShower({ scale = 1 }: KanjiShowerProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  const baseSize = 400 * scale;
  const hoverRightPosX = baseSize + 500;
  const hoverRightPosY = baseSize / 2;

  const activeChar = hovered ? characters.find((c) => c.id === hovered) : null;

  return (
    <div
      className="relative mt-12 ml-12"
      style={{ width: baseSize + 250, height: baseSize }}
    >
      {/* Símbolo base */}
      <img
        src="/images/arj/arjcolornocarnodragon.png"
        alt="Símbolo ARJ"
        className="object-contain select-none"
        style={{ width: baseSize, height: baseSize }}
        draggable={false}
      />

      {/* Caracteres interativos */}
      {characters.map((char) => {
        const topPx = (char.top / 100) * baseSize;
        const leftPx = (char.left / 100) * baseSize;
        const sizePx = char.size * scale;
        // Corrige posição do dragão ao fazer hover
        const adjustedLeftPx = char.id === 'dragon' ? leftPx + sizePx * 0.3 : leftPx;
        const adjustedTopPx = char.id === 'dragon' ? topPx + sizePx * 0.05 : topPx;


        const isHovered = hovered === char.id;

        // 🔽 Aplica escala menor só no DRAGÃO (para reduzir a área de hover)
        const hitboxScale = char.id === 'dragon' ? 0.8 : 1;
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
                position: 'absolute',
                top: 0,
                left: 0,
                width: sizePx,
                height: sizePx,
                transformOrigin: 'center',
                transform: isHovered
                  ? `translate(${hoverRightPosX - adjustedLeftPx}px, ${hoverRightPosY - adjustedTopPx - sizePx / 2}px) scale(${(baseSize * 1.1) / sizePx}) rotate(0deg)`
                  : `rotate(${char.rotation}deg)`,

              }}
            />
          </div>
        );
      })}

      {/* Caixa de dica quando nada está em hover */}
      {!hovered && (
        <div
          className="relative px-30 py-40 rounded-xl"
          style={{
            top: hoverRightPosY,
            left: hoverRightPosX,
            position: 'absolute',
            width: 600,
            maxWidth: 500,
            transform: 'translate(-50%, -50%)',
            zIndex: 20,
            color: '#1e40af',
            fontWeight: 'bold',
            fontSize: '1.125rem',
            fontStyle: 'italic',
            textAlign: 'center',
            backgroundColor: 'white',
            userSelect: 'none',
            opacity: 0.2,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          {/* Linhas azuis só nos cantos */}
          <div className="absolute top-0 left-0 w-8 h-1 bg-blue-500" />
          <div className="absolute top-0 left-0 w-1 h-8 bg-blue-500" />
          <div className="absolute top-0 right-0 w-8 h-1 bg-blue-500" />
          <div className="absolute top-0 right-0 w-1 h-8 bg-blue-500" />
          <div className="absolute bottom-0 left-0 w-8 h-1 bg-blue-500" />
          <div className="absolute bottom-0 left-0 w-1 h-8 bg-blue-500" />
          <div className="absolute bottom-0 right-0 w-8 h-1 bg-blue-500" />
          <div className="absolute bottom-0 right-0 w-1 h-8 bg-blue-500" />

          Coloque o rato num carácter oriental para verificar o seu significado.
        </div>
      )}

      {/* Texto explicativo do caractere ativo */}
      {activeChar && (
        <div
          className="absolute bg-gray-200 text-gray-900 text-2xl font-semibold rounded-2xl shadow-lg p-8 w-300 max-w-4xl text-center select-text"
          style={{
            top: hoverRightPosY + (baseSize * 0.9) / (activeChar.size * scale) * activeChar.size * scale * 0.6,
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
