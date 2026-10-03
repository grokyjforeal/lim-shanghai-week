"use client";

import { useMemo, useState } from "react";
import {
  chinaMapAttempt,
  dayColors,
  dayFilterLabels,
  mapPlaces,
  placeById,
  routeLegs,
  type PlaceId,
  type RouteLeg,
} from "@/lib/overall-route";
import { t, type Lang } from "@/lib/text";

const ui = {
  title: { en: "Overall route map", zh: "全程路线图" },
  subtitle: {
    en: "Filter by day. Each day has its own colour. City hops are Didi; Shanghai–Hangzhou and Shanghai–Suzhou are high-speed rail.",
    zh: "按天筛选。每天一条颜色。市内用滴滴；上海—杭州、上海—苏州是高铁。",
  },
  filter: { en: "Show", zh: "显示" },
  legend: { en: "Travel times", zh: "行程时间" },
  didi: { en: "Didi cab", zh: "滴滴" },
  hsr: { en: "High-speed train", zh: "高铁" },
  typical: { en: "typical, not booked", zh: "常见时长，未订票" },
  unverified: { en: "not verified on Gaode/Baidu", zh: "未用高德/百度核验" },
  sources: { en: "Map sources", zh: "地图来源" },
  fromTo: { en: "→", zh: "→" },
  min: { en: "min", zh: "分钟" },
};

function project(lat: number, lon: number, box: { minLat: number; maxLat: number; minLon: number; maxLon: number }, w: number, h: number, pad: number) {
  const x = pad + ((lon - box.minLon) / (box.maxLon - box.minLon)) * (w - pad * 2);
  const y = pad + ((box.maxLat - lat) / (box.maxLat - box.minLat)) * (h - pad * 2);
  return { x, y };
}

function formatMinutes(leg: RouteLeg, lang: Lang) {
  if (leg.minutes == null) {
    return lang === "zh" ? "未核验" : "not verified";
  }
  if (leg.minutesMax && leg.minutesMax !== leg.minutes) {
    return lang === "zh"
      ? `${leg.minutes}–${leg.minutesMax} 分钟`
      : `${leg.minutes}–${leg.minutesMax} min`;
  }
  return lang === "zh" ? `${leg.minutes} 分钟` : `${leg.minutes} min`;
}

export function OverallRouteMap({ lang }: { lang: Lang }) {
  const [filter, setFilter] = useState<string>("all");
  const zh = lang === "zh";

  const visibleLegs = useMemo(
    () => (filter === "all" ? routeLegs : routeLegs.filter((leg) => leg.dayId === filter)),
    [filter],
  );

  const visiblePlaceIds = useMemo(() => {
    const ids = new Set<PlaceId>();
    for (const leg of visibleLegs) {
      ids.add(leg.from);
      ids.add(leg.to);
    }
    return ids;
  }, [visibleLegs]);

  const box = useMemo(() => {
    const pts = mapPlaces.filter((p) => visiblePlaceIds.has(p.id));
    const use = pts.length ? pts : mapPlaces;
    const lats = use.map((p) => p.lat);
    const lons = use.map((p) => p.lon);
    const minLat = Math.min(...lats) - 0.04;
    const maxLat = Math.max(...lats) + 0.04;
    const minLon = Math.min(...lons) - 0.05;
    const maxLon = Math.max(...lons) + 0.05;
    return { minLat, maxLat, minLon, maxLon };
  }, [visiblePlaceIds]);

  const W = 920;
  const H = 560;
  const pad = 36;

  const pathD = (leg: RouteLeg) =>
    leg.path
      .map((pair, i) => {
        const { x, y } = project(pair[0], pair[1], box, W, H, pad);
        return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(" ");

  const dayIdsOnMap = [...new Set(visibleLegs.map((l) => l.dayId))];

  return (
    <section id="overall-map" className="mx-auto max-w-6xl px-5 pb-4 pt-2 sm:px-8">
      <div className="border border-line bg-white/40">
        <div className="border-b border-line px-5 py-4 sm:px-6">
          <p className="text-sm text-bronze">{lang === "zh" ? "七天总览" : "Seven-day overview"}</p>
          <h2 className="mt-1 font-serif text-3xl leading-tight tracking-tight">{t(ui.title, lang)}</h2>
          <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-muted">{t(ui.subtitle, lang)}</p>

          <div className="mt-4">
            <p className="mb-2 text-xs uppercase tracking-wide text-muted">{t(ui.filter, lang)}</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label={t(ui.filter, lang)}>
              {dayFilterLabels.map((item) => {
                const on = filter === item.id;
                const color = item.id === "all" ? "#1c1612" : dayColors[item.id];
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setFilter(item.id)}
                    className={`border px-3 py-1.5 text-sm transition ${
                      on ? "text-paper" : "bg-transparent hover:border-bronze"
                    }`}
                    style={
                      on
                        ? { background: color, borderColor: color }
                        : { borderColor: "var(--line)", color: "var(--ink)" }
                    }
                  >
                    <span className="inline-flex items-center gap-2">
                      {item.id !== "all" && (
                        <span
                          className="inline-block h-2.5 w-2.5 rounded-full"
                          style={{ background: on ? "#fff" : color }}
                          aria-hidden
                        />
                      )}
                      {t(item.label, lang)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.25fr)_minmax(260px,0.75fr)]">
          <div className="relative bg-[#efe8dc]">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              role="img"
              aria-label={zh ? "全程地理路线图" : "Geographic map of the whole trip"}
              className="h-auto w-full"
            >
              <rect width={W} height={H} fill="#efe8dc" />
              <text x={pad} y={22} fill="#6d6258" fontSize="11" letterSpacing="1.5">
                {zh ? "地理示意 · 市内路网来自 OSM" : "GEOGRAPHIC · CITY ROADS FROM OSM"}
              </text>

              {/* water hint for Huangpu when Shanghai-heavy */}
              {filter !== "fri" && filter !== "sun" && (
                <path
                  d={`M ${project(31.12, 121.48, box, W, H, pad).x} ${project(31.12, 121.48, box, W, H, pad).y}
                      C ${project(31.2, 121.5, box, W, H, pad).x} ${project(31.2, 121.5, box, W, H, pad).y}
                        ${project(31.28, 121.52, box, W, H, pad).x} ${project(31.28, 121.52, box, W, H, pad).y}
                        ${project(31.35, 121.56, box, W, H, pad).x} ${project(31.35, 121.56, box, W, H, pad).y}`}
                  fill="none"
                  stroke="#1d3944"
                  strokeWidth="10"
                  opacity="0.12"
                  strokeLinecap="round"
                />
              )}

              {visibleLegs.map((leg) => {
                const color = dayColors[leg.dayId];
                const dashed = leg.mode === "hsr";
                return (
                  <path
                    key={leg.id}
                    d={pathD(leg)}
                    fill="none"
                    stroke={color}
                    strokeWidth={dashed ? 3.5 : 4.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray={dashed ? "10 7" : undefined}
                    opacity={0.92}
                  />
                );
              })}

              {[...visiblePlaceIds].map((id) => {
                const place = placeById(id);
                const { x, y } = project(place.lat, place.lon, box, W, H, pad);
                const label = t(place.label, lang);
                return (
                  <g key={id}>
                    <circle cx={x} cy={y} r={6.5} fill="#1c1612" />
                    <circle cx={x} cy={y} r={3} fill="#f3eee6" />
                    <text
                      x={x + 10}
                      y={y + 4}
                      fill="#1c1612"
                      fontSize="12"
                      fontFamily="var(--font-outfit), sans-serif"
                    >
                      {label}
                    </text>
                  </g>
                );
              })}

              <g transform={`translate(${pad}, ${H - 28})`}>
                {dayIdsOnMap.map((dayId, i) => (
                  <g key={dayId} transform={`translate(${i * 88}, 0)`}>
                    <rect width="14" height="4" y="6" fill={dayColors[dayId]} rx="1" />
                    <text x="20" y="11" fill="#6d6258" fontSize="11">
                      {zh ? `第${dayFilterLabels.find((d) => d.id === dayId)?.dayIndex}天` : `Day ${dayFilterLabels.find((d) => d.id === dayId)?.dayIndex}`}
                    </text>
                  </g>
                ))}
              </g>
            </svg>
          </div>

          <aside className="border-t border-line lg:border-l lg:border-t-0">
            <div className="px-5 py-4">
              <p className="text-sm text-bronze">{t(ui.legend, lang)}</p>
              <ul className="mt-3 max-h-[28rem] space-y-3 overflow-y-auto pr-1 text-sm">
                {visibleLegs.map((leg) => {
                  const from = placeById(leg.from);
                  const to = placeById(leg.to);
                  return (
                    <li key={leg.id} className="border-b border-line pb-3 last:border-0">
                      <div className="flex items-start gap-2">
                        <span
                          className="mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full"
                          style={{ background: dayColors[leg.dayId] }}
                          aria-hidden
                        />
                        <div className="min-w-0">
                          <p className="font-medium leading-snug">
                            {t(from.label, lang)} {t(ui.fromTo, lang)} {t(to.label, lang)}
                          </p>
                          <p className="mt-1 text-muted">
                            {leg.mode === "hsr" ? t(ui.hsr, lang) : t(ui.didi, lang)}
                            {" · "}
                            <span className="text-ink">{formatMinutes(leg, lang)}</span>
                            {leg.typical ? ` · ${t(ui.typical, lang)}` : ""}
                            {!leg.verified ? ` · ${t(ui.unverified, lang)}` : ""}
                          </p>
                          <a
                            href={leg.sourceUrl}
                            className="mt-1 inline-block text-xs text-muted underline decoration-line underline-offset-2 hover:text-cinnabar"
                          >
                            {t(leg.sourceLabel, lang)}
                          </a>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>

        <div className="border-t border-line px-5 py-4 text-xs leading-relaxed text-muted sm:px-6">
          <p className="font-medium text-ink">{t(ui.sources, lang)}</p>
          <p className="mt-1">{t(chinaMapAttempt, lang)}</p>
          <p className="mt-2">
            {zh ? "虚线 = 高铁直线示意（非轨道几何）。实线 = OSM 驾车路径，不是高德/百度路网。" : "Dashed = high-speed rail as a straight station-to-station line (not track geometry). Solid = OSM driving path, not Gaode/Baidu road network."}
          </p>
        </div>
      </div>
    </section>
  );
}
