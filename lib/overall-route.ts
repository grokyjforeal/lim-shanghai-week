import type { Bi } from "@/lib/text";
import { bi } from "@/lib/text";
import osrm from "@/lib/osrm-legs.json";

export type PlaceId = keyof typeof osrm.places;

export type TravelMode = "didi" | "hsr";

export type RouteLeg = {
  id: string;
  dayId: string;
  dayIndex: number;
  from: PlaceId;
  to: PlaceId;
  mode: TravelMode;
  /** Display minutes when known; null means show unverified copy. */
  minutes: number | null;
  /** Optional range for typical rail times. */
  minutesMax?: number;
  typical?: boolean;
  verified: boolean;
  sourceUrl: string;
  sourceLabel: Bi;
  note: Bi;
  /** [lat, lon][] path for drawing. */
  path: [number, number][];
};

export type MapPlace = {
  id: PlaceId;
  lat: number;
  lon: number;
  label: Bi;
  coordSource: Bi;
};

const b = bi;

export const dayColors: Record<string, string> = {
  thu: "#8c2f24",
  fri: "#2f6b8c",
  sat: "#8a5a32",
  sun: "#3d6b4f",
  mon: "#6b3d6b",
  tue: "#c45c26",
  wed: "#1d3944",
};

export const dayFilterLabels: { id: string | "all"; dayIndex?: number; label: Bi }[] = [
  { id: "all", label: b("All days", "全部行程") },
  { id: "thu", dayIndex: 1, label: b("Day 1 · Thu", "第1天 · 周四") },
  { id: "fri", dayIndex: 2, label: b("Day 2 · Fri", "第2天 · 周五") },
  { id: "sat", dayIndex: 3, label: b("Day 3 · Sat", "第3天 · 周六") },
  { id: "sun", dayIndex: 4, label: b("Day 4 · Sun", "第4天 · 周日") },
  { id: "mon", dayIndex: 5, label: b("Day 5 · Mon", "第5天 · 周一") },
  { id: "tue", dayIndex: 6, label: b("Day 6 · Tue", "第6天 · 周二") },
  { id: "wed", dayIndex: 7, label: b("Day 7 · Wed", "第7天 · 周三") },
];

export const mapPlaces: MapPlace[] = [
  {
    id: "pudong",
    ...osrm.places.pudong,
    label: b("Pudong T1", "浦东 T1"),
    coordSource: b("Wikidata Q139592594", "维基数据 Q139592594"),
  },
  {
    id: "hotel",
    ...osrm.places.hotel,
    label: b("Xujiahui hotel", "徐家汇酒店"),
    coordSource: b("Exa place listing for IntercityHotel Xujiahui", "Exa 地点库：城际徐家汇"),
  },
  {
    id: "renheguan",
    ...osrm.places.renheguan,
    label: b("Renheguan", "人和馆"),
    coordSource: b("OpenStreetMap Nominatim, Zhaojiabang Rd 407", "OSM Nominatim，肇嘉浜路407号"),
  },
  {
    id: "hongqiao",
    ...osrm.places.hongqiao,
    label: b("Hongqiao railway", "虹桥火车站"),
    coordSource: b("OpenStreetMap Nominatim", "OSM Nominatim"),
  },
  {
    id: "hzeast",
    ...osrm.places.hzeast,
    label: b("Hangzhou East", "杭州东站"),
    coordSource: b("OpenStreetMap Nominatim", "OSM Nominatim"),
  },
  {
    id: "canal",
    ...osrm.places.canal,
    label: b("Canal Museum", "运河博物馆"),
    coordSource: b("OpenStreetMap Nominatim, Canal Plaza", "OSM Nominatim，运河广场"),
  },
  {
    id: "gongchen",
    ...osrm.places.gongchen,
    label: b("Gongchen Bridge", "拱宸桥"),
    coordSource: b("OpenStreetMap Nominatim", "OSM Nominatim"),
  },
  {
    id: "xiaohe",
    ...osrm.places.xiaohe,
    label: b("Xiaohe Street", "小河直街"),
    coordSource: b("OpenStreetMap Nominatim", "OSM Nominatim"),
  },
  {
    id: "rockbund",
    ...osrm.places.rockbund,
    label: b("Rockbund", "外滩美术馆"),
    coordSource: b("OpenStreetMap Nominatim / Wikidata", "OSM Nominatim / 维基数据"),
  },
  {
    id: "broadway",
    ...osrm.places.broadway,
    label: b("Le Reflet / Broadway Mansions", "上海大厦 · Le Reflet"),
    coordSource: b("Wikidata Q23804 / OSM", "维基数据 Q23804 / OSM"),
  },
  {
    id: "sip",
    ...osrm.places.sip,
    label: b("Suzhou Industrial Park station", "苏州园区站"),
    coordSource: b("Wikidata Q7651043", "维基数据 Q7651043"),
  },
  {
    id: "moca",
    ...osrm.places.moca,
    label: b("Suzhou MoCA", "苏州当代美术馆"),
    coordSource: b("OpenStreetMap Nominatim", "OSM Nominatim"),
  },
  {
    id: "zhangyuan",
    ...osrm.places.zhangyuan,
    label: b("Zhangyuan", "张园"),
    coordSource: b("OSM Fengshengli in Zhangyuan precinct, Weihai Rd", "OSM 丰盛里（张园片区，威海路）"),
  },
  {
    id: "jinganpark",
    ...osrm.places.jinganpark,
    label: b("Jing'an Park", "静安公园"),
    coordSource: b("OpenStreetMap Nominatim", "OSM Nominatim"),
  },
  {
    id: "westbund",
    ...osrm.places.westbund,
    label: b("West Bund Museum", "西岸美术馆"),
    coordSource: b("Wikidata Q85852944", "维基数据 Q85852944"),
  },
];

const placeMap = Object.fromEntries(mapPlaces.map((p) => [p.id, p])) as Record<PlaceId, MapPlace>;

function osmLeg(from: PlaceId, to: PlaceId) {
  const key = `${from}->${to}` as keyof typeof osrm.legs;
  const leg = osrm.legs[key];
  if (!leg) throw new Error(`Missing OSRM leg ${from}->${to}`);
  return leg;
}

function didi(
  id: string,
  dayId: string,
  dayIndex: number,
  from: PlaceId,
  to: PlaceId,
): RouteLeg {
  const leg = osmLeg(from, to);
  return {
    id,
    dayId,
    dayIndex,
    from,
    to,
    mode: "didi",
    minutes: leg.minutes,
    verified: false,
    sourceUrl: "https://router.project-osrm.org/",
    sourceLabel: b(
      "OpenStreetMap OSRM (Gaode/Baidu API unavailable)",
      "OpenStreetMap OSRM（高德/百度接口不可用）",
    ),
    note: b(
      "Didi cab. Minutes are an OSM drive estimate — not from Gaode or Baidu. Gaode Web Service returned INVALID_USER_KEY; Baidu directionlite rejected the key.",
      "滴滴打车。分钟数来自 OSM 驾车估算，不是高德或百度。高德 Web 服务返回 INVALID_USER_KEY；百度 directionlite 拒绝密钥。",
    ),
    path: leg.coords as [number, number][],
  };
}

function hsr(
  id: string,
  dayId: string,
  dayIndex: number,
  from: PlaceId,
  to: PlaceId,
  minutes: number,
  minutesMax: number,
  sourceUrl: string,
  sourceLabel: Bi,
  note: Bi,
): RouteLeg {
  const a = placeMap[from];
  const bPlace = placeMap[to];
  return {
    id,
    dayId,
    dayIndex,
    from,
    to,
    mode: "hsr",
    minutes,
    minutesMax,
    typical: true,
    verified: true,
    sourceUrl,
    sourceLabel,
    note,
    path: [
      [a.lat, a.lon],
      [bPlace.lat, bPlace.lon],
    ],
  };
}

export const routeLegs: RouteLeg[] = [
  didi("thu-1", "thu", 1, "pudong", "hotel"),
  didi("thu-2", "thu", 1, "hotel", "renheguan"),
  didi("thu-3", "thu", 1, "renheguan", "hotel"),

  didi("fri-1", "fri", 2, "hotel", "hongqiao"),
  hsr(
    "fri-2",
    "fri",
    2,
    "hongqiao",
    "hzeast",
    45,
    59,
    "https://www.gaotie.com.cn/lieche/shanghaihongqiao-hangzhoudong.html",
    b("gaotie.com.cn timetable", "高铁网时刻表"),
    b(
      "High-speed train. Typical duration 45–59 min on current G trains (fastest listed 45). Not a booked train — tickets are not on sale yet.",
      "高铁。现行列车常见 45–59 分钟（表上最快 45 分）。不是已订车次——票还没开售。",
    ),
  ),
  didi("fri-3", "fri", 2, "hzeast", "canal"),
  didi("fri-4", "fri", 2, "canal", "gongchen"),
  didi("fri-5", "fri", 2, "gongchen", "xiaohe"),
  didi("fri-6", "fri", 2, "xiaohe", "hzeast"),
  hsr(
    "fri-7",
    "fri",
    2,
    "hzeast",
    "hongqiao",
    45,
    59,
    "https://www.gaotie.com.cn/lieche/shanghaihongqiao-hangzhoudong.html",
    b("gaotie.com.cn timetable", "高铁网时刻表"),
    b(
      "High-speed train return. Typical 45–59 min. Not booked.",
      "高铁返程。常见 45–59 分钟。未订票。",
    ),
  ),
  didi("fri-8", "fri", 2, "hongqiao", "hotel"),

  didi("sat-1", "sat", 3, "hotel", "rockbund"),
  didi("sat-2", "sat", 3, "rockbund", "broadway"),
  didi("sat-3", "sat", 3, "broadway", "hotel"),

  didi("sun-1", "sun", 4, "hotel", "hongqiao"),
  hsr(
    "sun-2",
    "sun",
    4,
    "hongqiao",
    "sip",
    24,
    31,
    "https://www.gaotie.com.cn/lieche/shanghai-suzhouyuanqu.html",
    b("gaotie.com.cn timetable", "高铁网时刻表"),
    b(
      "High-speed train to Suzhou Industrial Park station (not Suzhou / Suzhou North). Typical Hongqiao–SIP G trains about 24–31 min (some D trains longer). Not booked.",
      "高铁到苏州园区站（不是苏州站/苏州北）。虹桥到园区 G 字头常见约 24–31 分钟（部分 D 字头更长）。未订票。",
    ),
  ),
  didi("sun-3", "sun", 4, "sip", "moca"),
  didi("sun-4", "sun", 4, "moca", "sip"),
  hsr(
    "sun-5",
    "sun",
    4,
    "sip",
    "hongqiao",
    24,
    31,
    "https://www.gaotie.com.cn/lieche/shanghai-suzhouyuanqu.html",
    b("gaotie.com.cn timetable", "高铁网时刻表"),
    b(
      "High-speed train return. Typical 24–31 min. Not booked.",
      "高铁返程。常见 24–31 分钟。未订票。",
    ),
  ),
  didi("sun-6", "sun", 4, "hongqiao", "hotel"),

  didi("mon-1", "mon", 5, "hotel", "zhangyuan"),
  didi("mon-2", "mon", 5, "zhangyuan", "jinganpark"),
  didi("mon-3", "mon", 5, "jinganpark", "hotel"),

  didi("tue-1", "tue", 6, "hotel", "westbund"),
  didi("tue-2", "tue", 6, "westbund", "hotel"),

  didi("wed-1", "wed", 7, "hotel", "pudong"),
];

export const chinaMapAttempt: Bi = b(
  "Tried Gaode Web Service direction API (INVALID_USER_KEY) and Baidu directionlite (invalid / disabled AK). Public Gaode SPA pages did not expose drive minutes without auth. Didi times below are OpenStreetMap OSRM estimates, clearly marked unverified against China maps. Rail times are typical durations from gaotie.com.cn, not booked trains.",
  "已试过高德 Web 服务路径规划（INVALID_USER_KEY）和百度 directionlite（密钥无效/禁用）。高德网页端未在未登录时给出驾车分钟。下方滴滴时长为 OpenStreetMap OSRM 估算，并标明未用中国地图校验。高铁时长来自高铁网常见车次，不是已订票。",
);

export function placeById(id: PlaceId) {
  return placeMap[id];
}
