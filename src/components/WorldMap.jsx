import { memo, useMemo } from 'react'

// Minimal world map via SVG paths (simplified). Colored countries from visited set.
// Light, friendly palette for an adventurous vibe.

const countries = [
  { id: 'IRL', name: 'Irland', path: 'M200 120 l10 -5 l10 5 l-5 15 l-12 -3 z' },
  { id: 'NLD', name: 'Niederlande', path: 'M250 150 l6 -4 l4 6 l-5 7 l-6 -3 z' },
  { id: 'DEU', name: 'Deutschland', path: 'M270 160 l8 -6 l8 4 l-2 12 l-10 2 z' },
  { id: 'POL', name: 'Polen', path: 'M320 160 l10 -5 l10 5 l-2 10 l-12 2 z' },
  { id: 'HUN', name: 'Ungarn', path: 'M330 185 l10 -3 l8 3 l-3 7 l-12 1 z' },
  { id: 'FRA', name: 'Frankreich', path: 'M250 180 l12 -8 l12 6 l-2 14 l-14 2 z' },
  { id: 'ESP', name: 'Spanien', path: 'M240 200 l14 -8 l14 8 l-4 10 l-18 2 z' },
  { id: 'MCO', name: 'Monaco', path: 'M278 188 l1 0.5 l-0.5 1 z' },
  { id: 'ITA', name: 'Italien', path: 'M300 190 l14 -6 l12 4 l-6 12 l-16 2 z' },
  { id: 'EGY', name: 'Ägypten', path: 'M360 240 l14 -10 l14 10 l-4 14 l-18 2 z' },
  { id: 'MNE', name: 'Montenegro', path: 'M345 200 l6 -3 l5 3 l-2 6 l-7 1 z' },
]

function WorldMap({ visited = new Set(), onCountryClick, markers = [] }) {
  const visitedSet = useMemo(() => new Set(visited), [visited])

  return (
    <svg viewBox="0 0 600 350" className="w-full h-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <rect x="0" y="0" width="600" height="350" fill="#ffffff" />
      {/* Subtle grid for a map vibe */}
      <g opacity="0.15">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v-${i}`} x1={(i+1)*50} y1={0} x2={(i+1)*50} y2={350} stroke="#93c5fd" strokeWidth={0.5} />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h-${i}`} x1={0} y1={(i+1)*50} x2={600} y2={(i+1)*50} stroke="#a7f3d0" strokeWidth={0.5} />
        ))}
      </g>
      {/* Countries */}
      {countries.map((c) => (
        <path
          key={c.id}
          d={c.path}
          fill={visitedSet.has(c.id) ? '#10b981' : '#cbd5e1'}
          fillOpacity={visitedSet.has(c.id) ? 0.9 : 0.7}
          stroke={visitedSet.has(c.id) ? '#0ea5e9' : '#94a3b8'}
          strokeWidth={visitedSet.has(c.id) ? 1.5 : 0.8}
          className={visitedSet.has(c.id) ? 'cursor-pointer hover:opacity-80' : ''}
          onClick={() => visitedSet.has(c.id) && onCountryClick?.(c.id)}
        >
        </path>
      ))}

      {/* Markers */}
      {markers.map((m, idx) => (
        <circle key={idx} cx={m.x} cy={m.y} r={4} fill="#10b981" stroke="#065f46" strokeWidth={1} />
      ))}
    </svg>
  )
}

export default memo(WorldMap)
