'use client';
import { useEffect, useState } from 'react';

// The Elder Futhark, in order.
const futhark = 'ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ'.split('');

// A regular octagon around (200, 200), flat sides facing up, down and to the sides.
function octagon(radius: number) {
  return Array.from({ length: 8 }, (_, i) => {
    const angle = ((22.5 + i * 45) * Math.PI) / 180;
    return `${(200 + radius * Math.cos(angle)).toFixed(1)},${(200 + radius * Math.sin(angle)).toFixed(1)}`;
  }).join(' ');
}

// Hand-drawn cracks running in from the edges of the stone.
const cracks = [
  'M 62 168 L 88 174 L 101 166 L 124 181 L 139 177',
  'M 101 166 L 108 148 L 121 139',
  'M 230 62 L 226 84 L 238 97 L 232 118 L 244 131',
  'M 238 97 L 256 104',
  'M 338 236 L 314 232 L 302 246 L 281 240 L 270 254 L 252 251',
  'M 302 246 L 306 266',
  'M 150 338 L 158 316 L 148 300 L 161 284',
  'M 158 316 L 176 322 L 186 312',
  'M 312 92 L 296 108 L 300 121',
  'M 88 302 L 104 290 L 101 276',
];

export function RuneStone() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % futhark.length), 2800);
    return () => clearInterval(timer);
  }, []);

  const glyph = futhark[index];

  return (
    <svg viewBox="-20 -20 440 440" className="mx-auto w-72 sm:w-96" role="img" aria-label="A cracked slate rune stone">
      <defs>
        <radialGradient id="stone-face" cx="40%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#5a636e" />
          <stop offset="55%" stopColor="#363d46" />
          <stop offset="100%" stopColor="#1c2127" />
        </radialGradient>
        <linearGradient id="stone-bevel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7a848f" />
          <stop offset="50%" stopColor="#3a414a" />
          <stop offset="100%" stopColor="#14181d" />
        </linearGradient>
        <filter id="stone-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="7" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.5  0 0 0 0 0.52  0 0 0 0 0.56  0 0 0 0.22 0" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
        <filter id="rune-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="orbit-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="stone-clip">
          <polygon points={octagon(150)} />
        </clipPath>
      </defs>

      {/* The ring of runes orbiting the stone. */}
      <g className="rune-orbit" filter="url(#orbit-glow)">
        {futhark.map((rune, i) => {
          const angle = (i * 360) / futhark.length;
          const rad = ((angle - 90) * Math.PI) / 180;
          const x = 200 + 192 * Math.cos(rad);
          const y = 200 + 192 * Math.sin(rad);
          return (
            <text
              key={rune}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              transform={`rotate(${angle} ${x} ${y})`}
              className="rune-orbit-glyph font-runic"
              style={{ animationDelay: `${(i % 6) * -0.7}s` }}
            >
              {rune}
            </text>
          );
        })}
      </g>

      {/* The stone: bevel, face, grain and cracks. */}
      <polygon points={octagon(162)} fill="url(#stone-bevel)" />
      <polygon points={octagon(150)} fill="url(#stone-face)" />
      <polygon points={octagon(150)} fill="#000" filter="url(#stone-grain)" />
      <polygon points={octagon(150)} fill="none" stroke="#0f1216" strokeWidth="2" opacity="0.7" />
      <g clipPath="url(#stone-clip)" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {cracks.map((d) => (
          <g key={d}>
            <path d={d} stroke="#6d7782" strokeWidth="1" opacity="0.35" transform="translate(0.9 0.9)" />
            <path d={d} stroke="#0d1013" strokeWidth="1.8" />
          </g>
        ))}
      </g>

      {/* The etched rune in the centre: a carved shadow, then the red glow. */}
      <g key={glyph} className="rune-center">
        <text
          x="201.5"
          y="203"
          textAnchor="middle"
          dominantBaseline="central"
          className="font-runic"
          fontSize="150"
          fill="#0d1013"
          opacity="0.8"
        >
          {glyph}
        </text>
        <text
          x="200"
          y="200"
          textAnchor="middle"
          dominantBaseline="central"
          className="rune-center-glow font-runic"
          fontSize="150"
          fill="#e5484d"
          filter="url(#rune-glow)"
        >
          {glyph}
        </text>
      </g>
    </svg>
  );
}
