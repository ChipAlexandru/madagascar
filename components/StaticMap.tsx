// Simple SVG map used on mobile — no Leaflet, no tile loading, no memory risk.
// Positions are computed from GPS (lat/lon → SVG px) once, then hard-coded.

type Spot = {
  name: string;
  x: number;
  y: number;
  align: "left" | "right" | "above";
};

const spots: Spot[] = [
  { name: "Andilana Beach", x: 307, y: 76, align: "right" },
  { name: "Mont Passot", x: 348, y: 170, align: "right" },
  { name: "Nosy Sakatia", x: 297, y: 180, align: "left" },
  { name: "Lokobe Reserve", x: 397, y: 238, align: "right" },
  { name: "Andriana Resort", x: 359, y: 260, align: "left" },
  { name: "Nosy Komba", x: 400, y: 283, align: "right" },
  { name: "Nosy Tanikely", x: 331, y: 300, align: "left" },
  { name: "Nosy Iranja", x: 60, y: 378, align: "right" },
];

const spotByName = Object.fromEntries(spots.map((s) => [s.name, s]));
const routeNames = [
  "Andriana Resort",
  "Nosy Komba",
  "Nosy Tanikely",
  "Andriana Resort",
  "Nosy Sakatia",
  "Mont Passot",
  "Andriana Resort",
  "Nosy Iranja",
  "Andriana Resort",
  "Lokobe Reserve",
  "Andriana Resort",
];
const routePoints = routeNames
  .map((n) => `${spotByName[n].x},${spotByName[n].y}`)
  .join(" ");

export default function StaticMap() {
  return (
    <div
      className="h-[380px] w-full rounded-xl shadow-2xl overflow-hidden"
      style={{ background: "#0c0a09" }}
    >
      <svg
        viewBox="0 0 480 440"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(120,113,108,0.1)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="480" height="440" fill="url(#grid)" />

        <polyline
          points={routePoints}
          fill="none"
          stroke="#f59e0b"
          strokeOpacity="0.4"
          strokeWidth="1.2"
          strokeDasharray="3 5"
        />

        <g transform="translate(445, 35)">
          <path d="M 0 5 L 0 25" stroke="#78716c" strokeWidth="1" />
          <path d="M 0 5 L -4 12 L 0 9 L 4 12 Z" fill="#78716c" />
          <text fontSize="10" fill="#78716c" textAnchor="middle" y="-2">
            N
          </text>
        </g>

        <g transform="translate(20, 415)">
          <line x1="0" y1="0" x2="60" y2="0" stroke="#78716c" strokeWidth="1" />
          <line x1="0" y1="-3" x2="0" y2="3" stroke="#78716c" strokeWidth="1" />
          <line x1="60" y1="-3" x2="60" y2="3" stroke="#78716c" strokeWidth="1" />
          <text x="30" y="-5" fontSize="9" fill="#78716c" textAnchor="middle">
            ≈ 15 km
          </text>
        </g>

        {spots.map((s) => {
          const labelX =
            s.align === "left" ? s.x - 8 : s.align === "right" ? s.x + 10 : s.x;
          const labelY = s.align === "above" ? s.y - 10 : s.y + 4;
          const anchor =
            s.align === "left"
              ? "end"
              : s.align === "right"
                ? "start"
                : "middle";
          return (
            <g key={s.name}>
              <circle
                cx={s.x}
                cy={s.y}
                r="5"
                fill="#f59e0b"
                stroke="#fbbf24"
                strokeWidth="1.5"
              />
              <text
                x={labelX}
                y={labelY}
                fontSize="11"
                fill="#fafaf9"
                textAnchor={anchor}
                style={{ fontFamily: "inherit" }}
              >
                {s.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
