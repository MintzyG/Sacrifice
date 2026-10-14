import type { CSSProperties } from 'react';

// The summoning circle on the home page, drawn in blood.

// The Elder Futhark, in order.
const futhark = 'ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ'.split('');

// "Sacrifice" in Elder Futhark, repeated around the outer ring.
const inscription = Array(9).fill('ᛋᚨᚲᚱᛁᚠᛁᚲᛖ').join(' ᛫ ') + ' ᛫';

// The six demons, one per colour, at the points of the hexagram (clockwise from the top).
const demons = ['#c0262d', '#d4a72c', '#2f8a55', '#2f62b5', '#0c0e11', '#ecebe7'];

const c = 300;

// Sets the stagger of the page-load animation.
const order = (i: number) => ({ '--i': i }) as CSSProperties;

function point(radius: number, degrees: number) {
  const rad = ((degrees - 90) * Math.PI) / 180;
  return [c + radius * Math.cos(rad), c + radius * Math.sin(rad)] as const;
}

function polygon(radius: number, offset: number) {
  return [0, 120, 240].map((a) => point(radius, a + offset).map((n) => n.toFixed(1)).join(',')).join(' ');
}

export function SummoningCircle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      role="img"
      aria-label="A summoning circle drawn in blood, with the Sacrificial Dagger at its centre"
    >
      <defs>
        <path id="inscription-path" d={`M ${c} ${c - 276} a 276 276 0 1 1 0 552 a 276 276 0 1 1 0 -552`} />
        <linearGradient id="blade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8a949f" />
          <stop offset="50%" stopColor="#d5dae0" />
          <stop offset="51%" stopColor="#5a636e" />
          <stop offset="100%" stopColor="#363d46" />
        </linearGradient>
        <linearGradient id="blade-blood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a4161a" stopOpacity="0" />
          <stop offset="100%" stopColor="#a4161a" stopOpacity="0.95" />
        </linearGradient>
        <filter id="candle-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* The lines, drawn in one by one when the page loads. */}
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <circle className="circle-ink" style={order(0)} cx={c} cy={c} r="292" pathLength={1} strokeWidth="2.5" />
        <circle className="circle-ink" style={order(1)} cx={c} cy={c} r="260" pathLength={1} strokeWidth="1.5" />
        <polygon className="circle-ink" style={order(2)} points={polygon(260, 0)} pathLength={1} strokeWidth="2" />
        <polygon className="circle-ink" style={order(3)} points={polygon(260, 60)} pathLength={1} strokeWidth="2" />
        <circle className="circle-ink" style={order(4)} cx={c} cy={c} r="130" pathLength={1} strokeWidth="1.5" />
        <circle className="circle-ink" style={order(5)} cx={c} cy={c} r="88" pathLength={1} strokeWidth="1" />
      </g>

      {/* The inscription between the outer rings. */}
      <g className="circle-turn circle-reveal" style={order(2)}>
        <text className="font-runic" fontSize="17" fill="currentColor" letterSpacing="3">
          <textPath href="#inscription-path" textLength={2 * Math.PI * 276 - 6} lengthAdjust="spacing">
            {inscription}
          </textPath>
        </text>
      </g>

      {/* The Futhark around the inner ring, turning the other way. */}
      <g className="circle-turn-back circle-reveal" style={order(5)}>
        {futhark.map((rune, i) => {
          const angle = (i * 360) / futhark.length;
          const [x, y] = point(109, angle);
          return (
            <text
              key={rune}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              transform={`rotate(${angle} ${x} ${y})`}
              className="font-runic"
              fontSize="17"
              fill="currentColor"
            >
              {rune}
            </text>
          );
        })}
      </g>

      {/* A candle for each demon at the points of the hexagram. */}
      {demons.map((color, i) => {
        const [x, y] = point(260, i * 60);
        return (
          <g key={color} className="circle-candle" style={order(i)}>
            <circle cx={x} cy={y} r="17" className="fill-fd-background" stroke="currentColor" strokeWidth="1.5" />
            <circle cx={x} cy={y} r="8" fill={color} stroke="#7d8692" strokeWidth="0.75" filter="url(#candle-glow)" />
          </g>
        );
      })}

      {/* The Sacrificial Dagger, point down. */}
      <g className="circle-dagger">
        <path d="M 288 252 L 312 252 L 309 360 L 300 392 L 291 360 Z" fill="url(#blade)" stroke="#14181d" strokeWidth="1.5" />
        <path d="M 291 330 L 309 330 L 309 360 L 300 392 L 291 360 Z" fill="url(#blade-blood)" />
        <path d="M 264 244 Q 300 236 336 244 L 334 254 Q 300 248 266 254 Z" fill="#363d46" stroke="#14181d" strokeWidth="1.5" />
        <rect x="292" y="206" width="16" height="38" rx="3" fill="#4a1520" stroke="#14181d" strokeWidth="1.5" />
        <path d="M 292 216 L 308 222 M 292 226 L 308 232 M 292 236 L 308 242" stroke="#14181d" strokeWidth="1" opacity="0.6" />
        <circle cx="300" cy="199" r="9" fill="#363d46" stroke="#14181d" strokeWidth="1.5" />
        <circle cx="300" cy="199" r="3.5" fill="#a4161a" />
      </g>

      {/* A drop of blood, falling from the point now and then. */}
      <path className="circle-drop" d="M 300 394 C 300 394 294 402 294 406 A 6 6 0 0 0 306 406 C 306 402 300 394 300 394 Z" fill="#a4161a" />
    </svg>
  );
}
