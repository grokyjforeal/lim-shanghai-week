"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { days } from "@/lib/days";
import { photos } from "@/lib/photos";
import {
  bags,
  checked,
  essentials,
  family,
  flights,
  hotel,
  phrases,
  redPicks,
  reelPicks,
  sources,
  todos,
  tripEnd,
  tripStart,
  type Copy,
  type Day,
  type Kind,
  type Lang,
  type Place,
  type Stop,
  type Todo,
} from "@/lib/trip";

type Tab = "plan" | "book" | "info";

const LANG_KEY = "shanghai-week-lang";
const DONE_KEY = "shanghai-week-done";

const ui = {
  plan: { en: "Plan", zh: "行程" },
  book: { en: "To book", zh: "待办" },
  info: { en: "Essentials", zh: "须知" },
  today: { en: "Today", zh: "今天" },
  now: { en: "Now", zh: "现在" },
  next: { en: "Next", zh: "下一站" },
  optional: { en: "Optional", zh: "可选" },
  driver: { en: "Show driver", zh: "给司机看" },
  amap: { en: "Amap", zh: "高德地图" },
  apple: { en: "Apple Maps", zh: "苹果地图" },
  copy: { en: "Copy address", zh: "复制地址" },
  copied: { en: "Copied", zh: "已复制" },
  close: { en: "Close", zh: "关闭" },
  takeMe: { en: "Please take me here", zh: "请带我去这里" },
  leave: { en: "Leave", zh: "出发" },
  back: { en: "Back", zh: "返回" },
  walking: { en: "Walking", zh: "步行量" },
  tips: { en: "Good to know", zh: "小提示" },
  needsBooking: { en: "Book ahead", zh: "需预订" },
  booked: { en: "Booked", zh: "已订" },
  left: { en: "left", zh: "项未完成" },
  allDone: { en: "Everything is booked.", zh: "全部办好了。" },
  dueBy: { en: "By", zh: "截止" },
  overdue: { en: "Overdue", zh: "已过期" },
  beforeFly: { en: "Before you fly", zh: "出发前" },
  open: { en: "Open link", zh: "打开链接" },
  hotel: { en: "Hotel", zh: "酒店" },
  flights: { en: "Flights", zh: "航班" },
  family: { en: "Travellers", zh: "同行" },
  phrases: { en: "Phrases to show", zh: "可以亮给对方看的话" },
  sources: { en: "Sources", zh: "资料来源" },
  why: { en: "Why go", zh: "为什么去" },
  worth: { en: "Don't miss", zh: "别错过" },
  avoid: { en: "Avoid", zh: "避开" },
  red: { en: "From Rednote", zh: "小红书上说" },
  local: { en: "What locals pick", zh: "本地人的选择" },
  redMore: { en: "Search Rednote", zh: "在小红书搜" },
  didi: { en: "DiDi", zh: "滴滴" },
  didiHint: {
    en: "Address copied. If DiDi did not open, open it yourself and paste into Where to.",
    zh: "地址已复制。滴滴没有自动打开的话，请手动打开，粘贴到目的地。",
  },
  reel: { en: "From your reels", zh: "你们的 reel" },
  reels: { en: "Places from your reels", zh: "你们 reel 里的地方" },
  redPicks: { en: "What Rednote says, in short", zh: "小红书要点" },
  notPlanned: { en: "Not in the plan", zh: "未排入行程" },
  countdown: { en: "days to go", zh: "天后出发" },
  dayOf: { en: "Day", zh: "第" },
  checkIn: { en: "Check in", zh: "入住" },
  checkOut: { en: "Check out", zh: "退房" },
  hero: { en: "Shanghai week", zh: "上海一周" },
  heroSub: {
    en: "22 – 28 October 2026 · four of us, based in Xujiahui",
    zh: "2026年10月22日至28日 · 一家四口，住徐家汇",
  },
} satisfies Record<string, Copy>;

const kindLabel: Record<Kind, Copy> = {
  fly: { en: "Flight", zh: "航班" },
  cab: { en: "Cab", zh: "打车" },
  train: { en: "Train", zh: "高铁" },
  walk: { en: "Walk", zh: "步行" },
  see: { en: "See", zh: "游览" },
  eat: { en: "Eat", zh: "用餐" },
  rest: { en: "Rest", zh: "休息" },
  boat: { en: "Boat", zh: "游船" },
  coffee: { en: "Coffee", zh: "咖啡" },
};

const kindTone: Record<Kind, string> = {
  fly: "bg-river text-paper",
  train: "bg-river text-paper",
  cab: "bg-ink text-paper",
  boat: "bg-river text-paper",
  walk: "bg-paper-2 text-ink",
  rest: "bg-paper-2 text-ink",
  see: "bg-bronze text-paper",
  eat: "bg-cinnabar text-paper",
  coffee: "bg-[#5b3a29] text-paper",
};

/** Current date and minutes-since-midnight in Shanghai, wherever the phone is. */
function shanghaiNow() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "00";
  return {
    date: `${get("year")}-${get("month")}-${get("day")}`,
    minutes: (Number(get("hour")) % 24) * 60 + Number(get("minute")),
  };
}

function toMinutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function daysBetween(from: string, to: string) {
  return Math.round((Date.parse(to) - Date.parse(from)) / 86_400_000);
}

function shortDate(iso: string, lang: Lang) {
  const d = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat(lang === "zh" ? "zh-CN" : "en-GB", {
    day: "numeric",
    month: "short",
    weekday: "short",
    timeZone: "UTC",
  }).format(d);
}

function amapUrl(place: Place) {
  return `https://uri.amap.com/search?keyword=${encodeURIComponent(place.zh)}&src=shanghai-week&callnative=1`;
}

function appleUrl(place: Place) {
  return `https://maps.apple.com/?q=${encodeURIComponent(place.addr ?? place.zh)}`;
}

function redUrl(q: string) {
  return `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(q)}`;
}

function Photo({ id, alt }: { id: string; alt: string }) {
  const set = photos[id] ?? [];
  const [index, setIndex] = useState(0);
  if (set.length === 0) return null;
  const current = set[Math.min(index, set.length - 1)];
  return (
    <figure className="-mx-4 -mt-4 mb-3">
      <div className="relative">
        <div
          className="day-rail flex snap-x snap-mandatory overflow-x-auto rounded-t-2xl"
          onScroll={(event) => {
            const el = event.currentTarget;
            setIndex(Math.round(el.scrollLeft / el.clientWidth));
          }}
        >
          {set.map((photo, i) => (
            // Plain img: files are pre-sized in public/photos so the service worker can cache them as-is.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={photo.src}
              src={photo.src}
              alt={`${alt} ${i + 1}`}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              className="aspect-[16/10] w-full shrink-0 snap-center bg-paper-2 object-cover"
            />
          ))}
        </div>
        {set.length > 1 ? (
          <>
            <span className="absolute right-2 top-2 rounded-full bg-ink/70 px-2 py-0.5 text-xs font-medium tabular-nums text-paper">
              {index + 1} / {set.length}
            </span>
            <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
              {set.map((photo, i) => (
                <span
                  key={photo.src}
                  className={`h-1.5 rounded-full transition-all ${i === index ? "w-4 bg-paper" : "w-1.5 bg-paper/60"}`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <figcaption className="px-4 pt-1 text-[11px] text-muted">
        <a href={current.href} target="_blank" rel="noreferrer">
          {current.by} · {current.license}
        </a>
      </figcaption>
    </figure>
  );
}

function PlaceActions({
  place,
  t,
  onDriver,
}: {
  place: Place;
  t: (copy: Copy) => string;
  onDriver: (place: Place) => void;
}) {
  const [copied, setCopied] = useState(false);
  const [didi, setDidi] = useState(false);
  const btn =
    "inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-medium active:bg-paper-2";
  return (
    <div className="mt-3">
      <p className="font-zh text-[15px] leading-snug text-ink">{place.zh}</p>
      {place.addr ? <p className="font-zh text-sm leading-snug text-muted">{place.addr}</p> : null}
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onDriver(place)}
          className="inline-flex min-h-11 items-center rounded-full bg-cinnabar px-4 text-sm font-medium text-paper active:opacity-80"
        >
          {t(ui.driver)}
        </button>
        <button
          type="button"
          className={`${btn} border-[#ff7a00] text-[#c25e00]`}
          onClick={async () => {
            // DiDi has no public link that takes a place name, so copy the address and open the app.
            try {
              await navigator.clipboard.writeText(place.addr ?? place.zh);
            } catch {
              /* clipboard blocked: the address is on screen to copy by hand */
            }
            setDidi(true);
            setTimeout(() => setDidi(false), 6000);
            window.location.href = "diditaxi://";
          }}
        >
          {t(ui.didi)}
        </button>
        <a className={btn} href={amapUrl(place)} target="_blank" rel="noreferrer">
          {t(ui.amap)}
        </a>
        <a className={btn} href={appleUrl(place)} target="_blank" rel="noreferrer">
          {t(ui.apple)}
        </a>
        <button
          type="button"
          className={btn}
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(`${place.zh} ${place.addr ?? ""}`.trim());
              setCopied(true);
              setTimeout(() => setCopied(false), 1600);
            } catch {
              /* clipboard blocked: the address is on screen to copy by hand */
            }
          }}
        >
          {copied ? t(ui.copied) : t(ui.copy)}
        </button>
      </div>
      {didi ? <p className="mt-2 text-sm text-[#c25e00]">{t(ui.didiHint)}</p> : null}
    </div>
  );
}

function StopCard({
  stop,
  state,
  done,
  t,
  onDriver,
  onBook,
}: {
  stop: Stop;
  state: "past" | "now" | "next" | "later";
  done: Record<string, boolean>;
  t: (copy: Copy) => string;
  onDriver: (place: Place) => void;
  onBook: () => void;
}) {
  const needsBooking = stop.book ? !done[stop.book] : false;
  return (
    <li className={`relative pl-[4.25rem] ${state === "past" ? "opacity-55" : ""}`}>
      <div className="absolute left-0 top-0 w-14 text-right">
        <p className="text-[17px] font-semibold tabular-nums leading-6">{stop.time}</p>
      </div>
      <span
        aria-hidden
        className={`absolute left-[3.72rem] top-2 h-2.5 w-2.5 rounded-full ring-4 ring-paper ${
          state === "now" ? "bg-cinnabar" : "bg-line"
        }`}
      />
      <div
        className={`rounded-2xl border p-4 ${
          state === "now" ? "border-cinnabar bg-white/70" : "border-line bg-white/40"
        }`}
      >
        {stop.photo ? <Photo id={stop.photo} alt={t(stop.title)} /> : null}
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${kindTone[stop.kind]}`}>
            {t(kindLabel[stop.kind])}
          </span>
          {state === "now" || state === "next" ? (
            <span className="rounded-full bg-cinnabar/10 px-2.5 py-0.5 text-xs font-semibold text-cinnabar">
              {t(state === "now" ? ui.now : ui.next)}
            </span>
          ) : null}
          {stop.fromReel ? (
            <span className="rounded-full bg-river-soft px-2.5 py-0.5 text-xs font-medium text-river">
              {t(ui.reel)}
            </span>
          ) : null}
          {stop.optional ? (
            <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
              {t(ui.optional)}
            </span>
          ) : null}
          {stop.book ? (
            <button
              type="button"
              onClick={onBook}
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                needsBooking ? "bg-cinnabar/10 text-cinnabar underline" : "bg-river-soft text-river"
              }`}
            >
              {t(needsBooking ? ui.needsBooking : ui.booked)}
            </button>
          ) : null}
        </div>
        <h3 className="mt-2 font-serif text-xl leading-snug">{t(stop.title)}</h3>
        <p className="mt-1.5 text-[15px] leading-relaxed text-ink/85">{t(stop.note)}</p>
        {stop.cost ? <p className="mt-2 text-sm font-medium text-bronze">{t(stop.cost)}</p> : null}
        {stop.guide ? (
          <dl className="mt-3 space-y-2 border-t border-line pt-3 text-[15px] leading-relaxed">
            {(
              [
                ["why", ui.why, "text-river"],
                ["worth", ui.worth, "text-bronze"],
                ["avoid", ui.avoid, "text-cinnabar"],
              ] as const
            ).map(([key, label, tone]) =>
              stop.guide?.[key] ? (
                <div key={key}>
                  <dt className={`text-xs font-semibold uppercase tracking-wide ${tone}`}>{t(label)}</dt>
                  <dd className="text-ink/85">{t(stop.guide[key])}</dd>
                </div>
              ) : null,
            )}
          </dl>
        ) : null}
        {stop.red ? (
          <div className="mt-3 rounded-xl bg-[#fdecea] p-3 text-sm leading-relaxed">
            <p className="text-xs font-semibold uppercase tracking-wide text-cinnabar">{t(ui.red)}</p>
            <ul className="mt-1 space-y-1.5">
              {[stop.red.tip, ...(stop.red.more ?? [])].map((line) =>
                line ? (
                  <li key={line.en} className="flex gap-2">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cinnabar" />
                    <span>{t(line)}</span>
                  </li>
                ) : null,
              )}
            </ul>
            {stop.red.q ? (
              <a
                href={redUrl(stop.red.q)}
                target="_blank"
                rel="noreferrer"
                className="font-zh mt-1 inline-flex min-h-9 items-center font-medium text-cinnabar underline underline-offset-2"
              >
                {t(ui.redMore)}: {stop.red.q}
              </a>
            ) : null}
          </div>
        ) : null}
        {stop.local ? (
          <div className="mt-3 rounded-xl bg-river-soft p-3 text-sm leading-relaxed">
            <p className="text-xs font-semibold uppercase tracking-wide text-river">{t(ui.local)}</p>
            <ul className="mt-1 space-y-1.5">
              {stop.local.map((line) => (
                <li key={line.en} className="flex gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-river" />
                  <span>{t(line)}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {stop.alt ? (
          <details className="mt-3 rounded-xl border border-river/30 bg-river-soft/50 p-3">
            <summary className="cursor-pointer text-[15px] font-semibold text-river">{t(stop.alt.title)}</summary>
            <ul className="mt-2 space-y-2 text-[15px] leading-relaxed">
              {stop.alt.body.map((line) => (
                <li key={line.en}>{t(line)}</li>
              ))}
            </ul>
          </details>
        ) : null}
        {stop.place ? <PlaceActions place={stop.place} t={t} onDriver={onDriver} /> : null}
      </div>
    </li>
  );
}

function DayView({
  day,
  index,
  lang,
  t,
  done,
  now,
  onDriver,
  onBook,
}: {
  day: Day;
  index: number;
  lang: Lang;
  t: (copy: Copy) => string;
  done: Record<string, boolean>;
  now: { date: string; minutes: number } | null;
  onDriver: (place: Place) => void;
  onBook: () => void;
}) {
  const isToday = now?.date === day.date;
  // The stop in progress is the last one whose start time has passed.
  let current = -1;
  if (isToday && now) {
    day.stops.forEach((stop, i) => {
      if (toMinutes(stop.time) <= now.minutes) current = i;
    });
  }
  const facts: [Copy, Copy][] = [
    [ui.leave, day.leave],
    [ui.back, day.back],
    [ui.walking, day.walking],
  ];
  return (
    <article>
      <header className="px-5 pt-6">
        <p className="text-sm font-medium text-cinnabar">
          {lang === "zh" ? `第 ${index + 1} 天` : `Day ${index + 1}`} · {shortDate(day.date, lang)}
          {isToday ? ` · ${t(ui.today)}` : ""}
        </p>
        <h2 className="mt-1 font-serif text-[1.9rem] leading-tight">{t(day.title)}</h2>
        <p className="mt-1 text-sm text-muted">{t(day.area)}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/85">{t(day.summary)}</p>
        <dl className="mt-4 divide-y divide-line rounded-2xl border border-line bg-white/40">
          {facts.map(([label, value]) => (
            <div key={label.en} className="flex gap-3 px-4 py-2.5 text-sm">
              <dt className="w-20 shrink-0 text-muted">{t(label)}</dt>
              <dd className="font-medium">{t(value)}</dd>
            </div>
          ))}
        </dl>
      </header>

      <ol className="relative mt-6 space-y-4 px-5 before:absolute before:bottom-2 before:left-[5.2rem] before:top-2 before:w-px before:bg-line">
        {day.stops.map((stop, i) => (
          <StopCard
            key={`${day.id}-${i}`}
            stop={stop}
            state={
              !isToday ? "later" : i < current ? "past" : i === current ? "now" : i === current + 1 ? "next" : "later"
            }
            done={done}
            t={t}
            onDriver={onDriver}
            onBook={onBook}
          />
        ))}
      </ol>

      <section className="mx-5 mt-6 rounded-2xl bg-paper-2 p-4">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">{t(ui.tips)}</h3>
        <ul className="mt-2 space-y-2 text-[15px] leading-relaxed">
          {day.tips.map((tip) => (
            <li key={tip.en} className="flex gap-2">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
              <span>{t(tip)}</span>
            </li>
          ))}
        </ul>
      </section>

      {day.planB ? (
        <details className="mx-5 mt-3 rounded-2xl border border-line p-4">
          <summary className="min-h-6 cursor-pointer text-[15px] font-semibold">{t(day.planB.title)}</summary>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/85">{t(day.planB.body)}</p>
        </details>
      ) : null}
    </article>
  );
}

function TodoRow({
  todo,
  checked: isDone,
  today,
  lang,
  t,
  onToggle,
}: {
  todo: Todo;
  checked: boolean;
  today: string | null;
  lang: Lang;
  t: (copy: Copy) => string;
  onToggle: () => void;
}) {
  const overdue = !isDone && todo.due !== null && today !== null && todo.due < today;
  return (
    <li className={`rounded-2xl border p-4 ${isDone ? "border-line opacity-60" : "border-line bg-white/50"}`}>
      <label className="flex cursor-pointer gap-3">
        <input
          type="checkbox"
          checked={isDone}
          onChange={onToggle}
          className="mt-0.5 h-6 w-6 shrink-0 accent-[#8c2f24]"
        />
        <span className="min-w-0">
          <span className={`block text-base font-semibold leading-snug ${isDone ? "line-through" : ""}`}>
            {t(todo.title)}
          </span>
          <span className="mt-1 flex flex-wrap gap-2 text-xs font-medium">
            <span className={overdue || (todo.urgent && !isDone) ? "text-cinnabar" : "text-muted"}>
              {todo.due
                ? `${overdue ? t(ui.overdue) : t(ui.dueBy)} ${shortDate(todo.due, lang)}`
                : t(ui.beforeFly)}
            </span>
          </span>
        </span>
      </label>
      {!isDone ? (
        <div className="pl-9">
          <p className="mt-2 text-[15px] leading-relaxed text-ink/85">{t(todo.detail)}</p>
          {todo.href ? (
            <a
              href={todo.href}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-medium active:bg-paper-2"
            >
              {t(ui.open)}
            </a>
          ) : null}
        </div>
      ) : null}
    </li>
  );
}

export function TripApp() {
  const [lang, setLang] = useState<Lang>("en");
  const [tab, setTab] = useState<Tab>("plan");
  const [dayIndex, setDayIndex] = useState(0);
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [now, setNow] = useState<{ date: string; minutes: number } | null>(null);
  const [driver, setDriver] = useState<Place | null>(null);

  // Restore saved state and jump to today's page once we are travelling.
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(LANG_KEY);
      if (savedLang === "en" || savedLang === "zh") setLang(savedLang);
      const savedDone = localStorage.getItem(DONE_KEY);
      if (savedDone) setDone(JSON.parse(savedDone));
    } catch {
      /* private mode: run without saved state */
    }
    const current = shanghaiNow();
    setNow(current);
    const todayIndex = days.findIndex((day) => day.date === current.date);
    if (todayIndex >= 0) setDayIndex(todayIndex);
    const timer = setInterval(() => setNow(shanghaiNow()), 60_000);
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => navigator.serviceWorker.ready)
        // Pull every photo through the worker once so the whole plan works offline.
        .then(() => Object.values(photos)
            .flat()
            .forEach((photo) => fetch(photo.src).catch(() => {})))
        .catch(() => {});
    }
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
  }, [lang]);

  // Changing day or tab starts the reader at the top. Runs after the new content has rendered,
  // and jumps instantly so the page's smooth scrolling cannot be cut short by the re-render.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [dayIndex, tab]);

  const t = useCallback((copy: Copy) => copy[lang], [lang]);

  const chooseLang = (next: Lang) => {
    setLang(next);
    try {
      localStorage.setItem(LANG_KEY, next);
    } catch {
      /* ignore */
    }
  };

  const toggle = (id: string) => {
    setDone((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(DONE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const openDay = (index: number) => {
    setDayIndex(index);
    window.scrollTo({ top: 0 });
  };

  const remaining = todos.filter((todo) => !done[todo.id]).length;
  const sortedTodos = useMemo(
    () =>
      [...todos].sort((a, b) => {
        const da = Number(Boolean(done[a.id]));
        const db = Number(Boolean(done[b.id]));
        if (da !== db) return da - db;
        return (a.due ?? "9999").localeCompare(b.due ?? "9999");
      }),
    [done],
  );

  const toGo = now && now.date < tripStart ? daysBetween(now.date, tripStart) : null;
  const travelling = now ? now.date >= tripStart && now.date <= tripEnd : false;
  const nextTodo = sortedTodos.find((todo) => !done[todo.id]);

  const tabs: { id: Tab; label: Copy; badge?: number }[] = [
    { id: "plan", label: ui.plan },
    { id: "book", label: ui.book, badge: remaining },
    { id: "info", label: ui.info },
  ];

  return (
    <div className={`mx-auto min-h-dvh max-w-2xl pb-28 ${lang === "zh" ? "font-zh" : ""}`}>
      <header className="flex items-start justify-between gap-4 px-5 pt-[max(1.25rem,env(safe-area-inset-top))]">
        <div>
          <h1 className="font-serif text-2xl leading-tight">{t(ui.hero)}</h1>
          <p className="mt-0.5 text-sm text-muted">{t(ui.heroSub)}</p>
        </div>
        <div className="flex shrink-0 rounded-full border border-line p-0.5 text-sm" role="group" aria-label="Language">
          {(["en", "zh"] as const).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => chooseLang(code)}
              aria-pressed={lang === code}
              className={`min-h-9 rounded-full px-3 font-medium ${lang === code ? "bg-ink text-paper" : "text-muted"}`}
            >
              {code === "en" ? "EN" : "中文"}
            </button>
          ))}
        </div>
      </header>

      {tab === "plan" ? (
        <>
          {!travelling && toGo !== null && nextTodo ? (
            <button
              type="button"
              onClick={() => setTab("book")}
              className="mx-5 mt-4 flex w-[calc(100%-2.5rem)] items-center gap-4 rounded-2xl bg-river p-4 text-left text-paper"
            >
              <span className="font-serif text-4xl tabular-nums leading-none">{toGo}</span>
              <span className="min-w-0 text-sm leading-snug">
                <span className="block opacity-80">{t(ui.countdown)}</span>
                <span className="block truncate font-medium">
                  {t(ui.next)}: {t(nextTodo.title)}
                </span>
              </span>
            </button>
          ) : null}

          <nav
            aria-label="Days"
            className="day-rail sticky top-0 z-20 mt-4 flex gap-2 overflow-x-auto border-b border-line bg-paper/95 px-5 py-3 backdrop-blur"
          >
            {days.map((day, i) => {
              const active = i === dayIndex;
              const isToday = now?.date === day.date;
              return (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => openDay(i)}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-14 min-w-[4.6rem] shrink-0 flex-col items-center justify-center rounded-2xl border px-3 ${
                    active ? "border-ink bg-ink text-paper" : "border-line bg-white/40"
                  }`}
                >
                  <span className={`text-xs ${active ? "opacity-80" : isToday ? "text-cinnabar" : "text-muted"}`}>
                    {isToday ? t(ui.today) : t(day.weekday).slice(0, lang === "zh" ? 3 : 3)} {Number(day.date.slice(8))}
                  </span>
                  <span className="whitespace-nowrap text-sm font-semibold">{t(day.label)}</span>
                </button>
              );
            })}
          </nav>

          <DayView
            day={days[dayIndex]}
            index={dayIndex}
            lang={lang}
            t={t}
            done={done}
            now={now}
            onDriver={setDriver}
            onBook={() => {
              setTab("book");
              window.scrollTo({ top: 0 });
            }}
          />

          <div className="mx-5 mt-6 flex gap-3">
            <button
              type="button"
              disabled={dayIndex === 0}
              onClick={() => openDay(dayIndex - 1)}
              className="min-h-12 flex-1 rounded-full border border-line text-sm font-medium disabled:opacity-30"
            >
              ← {dayIndex > 0 ? t(days[dayIndex - 1].label) : ""}
            </button>
            <button
              type="button"
              disabled={dayIndex === days.length - 1}
              onClick={() => openDay(dayIndex + 1)}
              className="min-h-12 flex-1 rounded-full bg-ink text-sm font-medium text-paper disabled:opacity-30"
            >
              {dayIndex < days.length - 1 ? t(days[dayIndex + 1].label) : ""} →
            </button>
          </div>
        </>
      ) : null}

      {tab === "book" ? (
        <section className="px-5 pt-6">
          <h2 className="font-serif text-[1.9rem] leading-tight">{t(ui.book)}</h2>
          <p className="mt-1 text-sm text-muted">
            {remaining === 0 ? t(ui.allDone) : `${remaining} / ${todos.length} ${t(ui.left)}`}
          </p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-paper-2">
            <div
              className="h-full rounded-full bg-cinnabar transition-[width]"
              style={{ width: `${((todos.length - remaining) / todos.length) * 100}%` }}
            />
          </div>
          <ul className="mt-5 space-y-3">
            {sortedTodos.map((todo) => (
              <TodoRow
                key={todo.id}
                todo={todo}
                checked={Boolean(done[todo.id])}
                today={now?.date ?? null}
                lang={lang}
                t={t}
                onToggle={() => toggle(todo.id)}
              />
            ))}
          </ul>
        </section>
      ) : null}

      {tab === "info" ? (
        <section className="space-y-6 px-5 pt-6">
          <div>
            <h2 className="font-serif text-[1.9rem] leading-tight">{t(ui.info)}</h2>
          </div>

          <div className="rounded-2xl bg-ink p-5 text-paper">
            <p className="text-xs font-semibold uppercase tracking-wide opacity-70">{t(ui.hotel)}</p>
            <h3 className="mt-1 font-serif text-2xl leading-snug">{hotel.name}</h3>
            <p className="mt-1 text-sm opacity-80">{t(hotel.address)}</p>
            <p className="font-zh mt-3 text-lg leading-snug">{hotel.place.zh}</p>
            <p className="font-zh text-sm opacity-80">{hotel.place.addr}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setDriver(hotel.place)}
                className="inline-flex min-h-11 items-center rounded-full bg-cinnabar px-4 text-sm font-medium"
              >
                {t(ui.driver)}
              </button>
              <a
                href={amapUrl(hotel.place)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-full border border-paper/30 px-4 text-sm font-medium"
              >
                {t(ui.amap)}
              </a>
            </div>
            <dl className="mt-4 space-y-1.5 text-sm">
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 opacity-70">{t(ui.checkIn)}</dt>
                <dd>{t(hotel.checkIn)}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 opacity-70">{t(ui.checkOut)}</dt>
                <dd>{t(hotel.checkOut)}</dd>
              </div>
            </dl>
            <p className="mt-3 text-sm leading-relaxed opacity-90">{t(hotel.metro)}</p>
            <p className="mt-2 text-sm leading-relaxed opacity-90">{t(hotel.room)}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">{t(ui.flights)}</h3>
            <div className="mt-2 space-y-3">
              {flights.map((flight) => (
                <div key={flight.code} className="rounded-2xl border border-line bg-white/40 p-4">
                  <p className="text-sm text-muted">
                    {t(flight.dir)} · {t(flight.date)} · {flight.code}
                  </p>
                  <div className="mt-2 flex items-end justify-between gap-3">
                    <div>
                      <p className="font-serif text-3xl tabular-nums leading-none">{flight.dep}</p>
                      <p className="mt-1 text-sm font-medium">{flight.from}</p>
                    </div>
                    <span aria-hidden className="mb-4 h-px flex-1 bg-line" />
                    <div className="text-right">
                      <p className="font-serif text-3xl tabular-nums leading-none">{flight.arr}</p>
                      <p className="mt-1 text-sm font-medium">{flight.to}</p>
                    </div>
                  </div>
                </div>
              ))}
              <p className="text-sm text-muted">{t(bags)}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">{t(ui.family)}</h3>
            <ul className="mt-2 divide-y divide-line rounded-2xl border border-line bg-white/40">
              {family.map((person) => (
                <li key={person.name} className="flex items-center justify-between gap-3 px-4 py-3 text-[15px]">
                  <span className="font-medium">{person.name}</span>
                  <span className="text-sm text-muted">{t(person.note)}</span>
                </li>
              ))}
            </ul>
          </div>

          {essentials.map((group) => (
            <div key={group.id}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">{t(group.title)}</h3>
              <ul className="mt-2 space-y-2.5 rounded-2xl border border-line bg-white/40 p-4 text-[15px] leading-relaxed">
                {group.items.map((item) => (
                  <li key={item.en} className="flex gap-2">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                    <span>{t(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">{t(ui.reels)}</h3>
            <ul className="mt-2 divide-y divide-line rounded-2xl border border-line bg-white/40">
              {reelPicks.map((pick) => (
                <li key={pick.name} className="px-4 py-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-[15px] font-semibold">
                      {pick.name} <span className="font-zh font-normal text-muted">{pick.zh}</span>
                    </p>
                    <span
                      className={`shrink-0 text-xs font-medium ${pick.planned ? "text-river" : "text-cinnabar"}`}
                    >
                      {pick.planned ? t(pick.planned) : t(ui.notPlanned)}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink/85">{t(pick.note)}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">{t(ui.redPicks)}</h3>
            <ul className="mt-2 divide-y divide-line rounded-2xl border border-line bg-white/40">
              {redPicks.map((pick) => (
                <li key={pick.q} className="px-4 py-3">
                  <p className="text-[15px] font-semibold">{t(pick.title)}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink/85">{t(pick.take)}</p>
                  <a
                    href={redUrl(pick.q)}
                    target="_blank"
                    rel="noreferrer"
                    className="font-zh mt-1 inline-flex min-h-9 items-center text-sm font-medium text-cinnabar underline underline-offset-2"
                  >
                    {t(ui.redMore)}: {pick.q}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">{t(ui.phrases)}</h3>
            <ul className="mt-2 divide-y divide-line rounded-2xl border border-line bg-white/40">
              {phrases.map((phrase) => (
                <li key={phrase.en} className="px-4 py-3">
                  <p className="font-zh text-xl leading-snug">{phrase.zh}</p>
                  <p className="mt-0.5 text-sm text-muted">{phrase.pinyin}</p>
                  <p className="text-sm">{phrase.en}</p>
                </li>
              ))}
            </ul>
          </div>

          <details className="rounded-2xl border border-line p-4">
            <summary className="cursor-pointer text-[15px] font-semibold">{t(ui.sources)}</summary>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t(checked)}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </section>
      ) : null}

      <nav
        aria-label="Sections"
        className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur"
      >
        <div className="mx-auto flex max-w-2xl">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setTab(item.id);
                window.scrollTo({ top: 0 });
              }}
              aria-current={tab === item.id ? "page" : undefined}
              className={`relative min-h-14 flex-1 text-sm font-semibold ${
                tab === item.id ? "text-cinnabar" : "text-muted"
              }`}
            >
              {tab === item.id ? <span aria-hidden className="absolute inset-x-6 top-0 h-0.5 bg-cinnabar" /> : null}
              {t(item.label)}
              {item.badge ? (
                <span className="ml-1.5 rounded-full bg-cinnabar px-1.5 py-0.5 text-[11px] text-paper">
                  {item.badge}
                </span>
              ) : null}
            </button>
          ))}
        </div>
      </nav>

      {driver ? (
        <div
          role="dialog"
          aria-modal="true"
          className="font-zh fixed inset-0 z-50 flex flex-col justify-between bg-cinnabar p-6 pt-[max(1.5rem,env(safe-area-inset-top))] text-paper"
          onClick={() => setDriver(null)}
        >
          <p className="text-lg opacity-90">师傅您好，请带我去这里：</p>
          <div>
            <p className="text-[2.6rem] font-bold leading-tight">{driver.zh}</p>
            {driver.addr ? <p className="mt-5 text-2xl leading-snug">{driver.addr}</p> : null}
          </div>
          <button
            type="button"
            className="min-h-14 rounded-full border border-paper/50 text-base font-medium"
            onClick={() => setDriver(null)}
          >
            {t(ui.close)} · {ui.takeMe.en}
          </button>
        </div>
      ) : null}
    </div>
  );
}
