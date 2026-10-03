import {
  hangzhouPins,
  shanghaiPins,
  suzhouPins,
  type Pin,
  type Region,
} from "@/lib/trip";
import type { Lang } from "@/lib/text";

const sets: Record<Region, Pin[]> = {
  shanghai: shanghaiPins,
  hangzhou: hangzhouPins,
  suzhou: suzhouPins,
};

function pointsFor(pins: Pin[], route: string[]) {
  return route
    .map((id) => pins.find((pin) => pin.id === id))
    .filter((pin): pin is Pin => Boolean(pin))
    .map((pin) => `${pin.x},${pin.y}`)
    .join(" ");
}

export function RouteMap({
  region,
  route,
  active,
  lang,
  onPick,
}: {
  region: Region;
  route: string[];
  active: string;
  lang: Lang;
  onPick: (id: string) => void;
}) {
  const pins = sets[region];
  const shown = pins.filter((pin) => route.includes(pin.id) || pin.id === "home");
  const poly = pointsFor(pins, route);
  const zh = lang === "zh";

  return (
    <svg
      viewBox="0 0 520 420"
      role="img"
      aria-label={zh ? "今天的路线示意，不按比例。" : "Diagram of today's route. Not to scale."}
      className="h-full w-full"
    >
      <rect width="520" height="420" fill="#efe8dc" />
      <rect x="16" y="16" width="488" height="388" fill="none" stroke="#d9d0c3" />

      {region === "shanghai" && (
        <>
          <path
            d="M430 36 C470 110 492 168 468 236 C444 308 492 360 520 400"
            fill="none"
            stroke="#1d3944"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.18"
          />
          <path
            d="M300 70 C340 96 390 108 430 118"
            fill="none"
            stroke="#1d3944"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.14"
          />
          <text x="36" y="48" fill="#6d6258" fontSize="11" letterSpacing="2">
            {zh ? "浦西" : "PUXI"}
          </text>
          <text x="430" y="48" fill="#6d6258" fontSize="11" letterSpacing="2">
            {zh ? "浦东" : "PUDONG"}
          </text>
        </>
      )}

      {region === "hangzhou" && (
        <>
          <text x="36" y="48" fill="#6d6258" fontSize="11" letterSpacing="2">
            {zh ? "上海" : "SHANGHAI"}
          </text>
          <text x="300" y="48" fill="#6d6258" fontSize="11" letterSpacing="2">
            {zh ? "拱墅运河" : "GONGSHU CANAL"}
          </text>
          <path
            d="M300 90 C360 70 430 80 480 150 C500 190 470 250 400 280"
            fill="none"
            stroke="#1d3944"
            strokeWidth="8"
            opacity="0.12"
            strokeLinecap="round"
          />
        </>
      )}

      {region === "suzhou" && (
        <>
          <text x="36" y="48" fill="#6d6258" fontSize="11" letterSpacing="2">
            {zh ? "上海" : "SHANGHAI"}
          </text>
          <ellipse
            cx="430"
            cy="168"
            rx="78"
            ry="46"
            fill="#d5e1e4"
            stroke="#1d3944"
            strokeOpacity="0.25"
          />
          <text x="368" y="64" fill="#6d6258" fontSize="11" letterSpacing="2">
            {zh ? "金鸡湖" : "JINJI LAKE"}
          </text>
        </>
      )}

      {poly && (
        <polyline
          key={poly}
          points={poly}
          fill="none"
          stroke="#8c2f24"
          strokeWidth="2.25"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="route-draw"
        />
      )}

      {shown.map((pin) => {
        const live = pin.id === active;
        const primary = zh ? pin.zh : pin.label;
        const secondary = zh ? pin.label : pin.zh;
        return (
          <g key={pin.id}>
            <circle
              cx={pin.x}
              cy={pin.y}
              r={live ? 16 : 11}
              fill={live ? "#f3eee6" : "#efe8dc"}
              stroke={live ? "#8c2f24" : "#8a5a32"}
              strokeWidth={live ? 2 : 1.25}
              className={live ? "pin-live" : undefined}
            />
            <circle cx={pin.x} cy={pin.y} r={live ? 4.5 : 3} fill={live ? "#8c2f24" : "#1c1612"} />
            <text
              x={pin.x + pin.dx}
              y={pin.y + pin.dy}
              fill="#1c1612"
              fontSize="13"
              fontFamily="Newsreader, Songti SC, PingFang SC, serif"
            >
              {primary}
            </text>
            <text
              x={pin.x + pin.dx}
              y={pin.y + pin.dy + 14}
              fill="#6d6258"
              fontSize="11"
              fontFamily="Outfit, PingFang SC, sans-serif"
            >
              {secondary}
            </text>
          </g>
        );
      })}

      {shown.map((pin) => (
        <circle
          key={`${pin.id}-hit`}
          cx={pin.x}
          cy={pin.y}
          r="18"
          fill="transparent"
          className="cursor-pointer"
          onClick={() => onPick(pin.id)}
        >
          <title>{zh ? pin.zh : pin.label}</title>
        </circle>
      ))}
    </svg>
  );
}
