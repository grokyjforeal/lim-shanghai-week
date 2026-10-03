"use client";

import { useEffect, useMemo, useState } from "react";
import { RouteMap } from "@/components/route-map";
import { OverallRouteMap } from "@/components/overall-route-map";
import { days, family, flights, hotel, sources, type Day, type Stop } from "@/lib/trip";
import { other, t, type Bi, type Lang } from "@/lib/text";

const ui = {
  family: { en: "Lim family", zh: "Lim 一家" },
  range: { en: "Shanghai, 22 to 28 October 2026", zh: "上海，2026年10月22日到28日" },
  openDay: { en: "Open the day", zh: "看这一天" },
  kicker: { en: "Four adults, one hotel, two trains", zh: "四个大人，一家酒店，两趟火车" },
  hero: { en: "Seven days from Xujiahui.", zh: "从徐家汇出发的七天。" },
  lede: {
    en: "Hangzhou is the canal. Suzhou is the new museum on the lake. Saturday stays on the Bund, because that is Chee Onn's birthday.",
    zh: "杭州只看运河。苏州是湖边的新美术馆。周六留在外滩，因为那是 Chee Onn 的生日。",
  },
  base: { en: "Base", zh: "住" },
  checkIn: { en: "Check in", zh: "入住" },
  checkOut: { en: "Check out", zh: "退房" },
  metro: { en: "Metro", zh: "地铁" },
  keys: { en: "Arrow keys move between days.", zh: "左右方向键可以换天。" },
  birthday: { en: "Birthday", zh: "生日" },
  leave: { en: "Leave", zh: "出发" },
  meal: { en: "Meal", zh: "吃饭" },
  sleep: { en: "Sleep", zh: "住" },
  today: { en: "Every stop", zh: "今天每一站" },
  highlights: { en: "Highlights", zh: "看点" },
  said: { en: "What people say", zh: "大家怎么说" },
  avoid: { en: "What to avoid", zh: "避开" },
  earlier: { en: "Earlier", zh: "上一站" },
  later: { en: "Later", zh: "下一站" },
  of: { en: "of", zh: "/" },
  route: { en: "Route", zh: "路线" },
  scale: { en: "Diagram, not to scale", zh: "示意图，不按比例" },
  out: { en: "Out", zh: "去" },
  back: { en: "Back", zh: "回" },
  lands: { en: "Lands", zh: "落地" },
  to: { en: "to", zh: "到" },
  leftOff: { en: "Left off today", zh: "今天不去" },
  bookings: { en: "Bookings", zh: "预订" },
  held: { en: "Flights and one room.", zh: "机票和一间房。" },
  heldBody: {
    en: "The flights and one hotel room are booked. The second room, the trains, the museum tickets, and the tables are not. This page does not invent confirmation numbers. It shows the route, the pace, and how you move.",
    zh: "机票和一间酒店房订了。第二间房、火车票、博物馆门票和餐位都还没订。这一页不编确认号。只写路线、节奏和怎么走。",
  },
  checked: { en: "Checked 3 October 2026", zh: "2026年10月3日核对过" },
  long: {
    en: "The long source list, with the things that had already closed, is in ITINERARY.md.",
    zh: "更长的来源，包括已经结束的活动，在 ITINERARY.md。",
  },
  en: { en: "EN", zh: "EN" },
  zh: { en: "中文", zh: "中文" },
} satisfies Record<string, Bi>;

function findStop(day: Day, pin: string) {
  return day.stops.find((stop) => stop.pin === pin) ?? day.stops[0];
}

function Guide({ stop, lang }: { stop: Stop; lang: Lang }) {
  return (
    <div className="pb-5 pr-1">
      {stop.photo && (
        <figure className="mb-4 max-w-xl">
          <img
            src={stop.photo.src}
            alt={t(stop.photo.alt, lang)}
            className="aspect-[3/2] w-full object-cover"
          />
          <figcaption className="mt-1.5 text-xs leading-relaxed text-muted">
            {t(stop.photo.credit, lang)}
          </figcaption>
        </figure>
      )}
      <p className="max-w-xl text-[16px] leading-relaxed">{t(stop.body, lang)}</p>

      {stop.highlights.length > 0 && (
        <div className="mt-5 max-w-xl">
          <h3 className="font-serif text-xl">{t(ui.highlights, lang)}</h3>
          <ul className="mt-2 space-y-2 text-[15px] leading-relaxed">
            {stop.highlights.map((item) => (
              <li key={item.en}>{t(item, lang)}</li>
            ))}
          </ul>
        </div>
      )}

      {stop.said && (
        <div className="mt-5 max-w-xl">
          <h3 className="font-serif text-xl">{t(ui.said, lang)}</h3>
          <p className="mt-2 text-[15px] leading-relaxed">{t(stop.said.text, lang)}</p>
          <a
            href={stop.said.href}
            className="mt-2 inline-block text-sm text-muted underline decoration-line underline-offset-4 hover:text-cinnabar"
          >
            {t(stop.said.source, lang)}
          </a>
        </div>
      )}

      {stop.avoid.length > 0 && (
        <div className="mt-5 max-w-xl">
          <h3 className="font-serif text-xl">{t(ui.avoid, lang)}</h3>
          <ul className="mt-2 space-y-2 text-[15px] leading-relaxed text-muted">
            {stop.avoid.map((item) => (
              <li key={item.en}>{t(item, lang)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function TripApp() {
  const [lang, setLang] = useState<Lang>("en");
  const [dayId, setDayId] = useState(days[0].id);
  const [stopId, setStopId] = useState(days[0].stops[0].id);
  const day = days.find((item) => item.id === dayId) ?? days[0];
  const stopIndex = Math.max(0, day.stops.findIndex((item) => item.id === stopId));
  const stop = day.stops[stopIndex];

  useEffect(() => {
    const saved = window.localStorage.getItem("shanghai-week-lang");
    if (saved === "zh" || saved === "en") setLang(saved);
  }, []);

  function chooseLang(next: Lang) {
    setLang(next);
    window.localStorage.setItem("shanghai-week-lang", next);
    document.documentElement.lang = next === "zh" ? "zh-Hans" : "en";
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        const index = days.findIndex((item) => item.id === dayId);
        const next = days[event.key === "ArrowRight" ? Math.min(days.length - 1, index + 1) : Math.max(0, index - 1)];
        setDayId(next.id);
        setStopId(next.stops[0].id);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dayId]);

  const progress = useMemo(() => {
    if (lang === "zh") return `${stopIndex + 1} / ${day.stops.length}`;
    return `${stopIndex + 1} of ${day.stops.length}`;
  }, [day.stops.length, lang, stopIndex]);

  function chooseDay(next: Day) {
    setDayId(next.id);
    setStopId(next.stops[0].id);
  }

  function choosePin(pin: string) {
    setStopId(findStop(day, pin).id);
  }

  function step(delta: number) {
    const next = day.stops[stopIndex + delta];
    if (next) setStopId(next.id);
  }

  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
          <p className="font-serif text-lg tracking-tight">{t(ui.family, lang)}</p>
          <p className="hidden text-sm text-muted sm:block">{t(ui.range, lang)}</p>
          <div className="flex items-center gap-3">
            <div className="flex border border-ink" role="group" aria-label={lang === "zh" ? "语言" : "Language"}>
              <button
                type="button"
                onClick={() => chooseLang("en")}
                aria-pressed={lang === "en"}
                className={`px-3 py-1.5 text-sm ${lang === "en" ? "bg-ink text-paper" : "bg-transparent"}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => chooseLang("zh")}
                aria-pressed={lang === "zh"}
                className={`px-3 py-1.5 text-sm ${lang === "zh" ? "bg-ink text-paper" : "bg-transparent"}`}
              >
                中文
              </button>
            </div>
            <a href="#overall-map" className="hidden text-sm text-muted hover:text-cinnabar sm:inline">
              {lang === "zh" ? "路线图" : "Map"}
            </a>
            <a href="#day" className="hidden text-sm text-cinnabar sm:inline">
              {t(ui.openDay, lang)}
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-8 pt-8 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-end lg:pt-10">
        <div>
          <p className="text-sm text-bronze">{t(ui.kicker, lang)}</p>
          <h1 className="mt-3 max-w-xl font-serif text-[2.5rem] leading-[1.05] tracking-tight sm:text-5xl">
            {t(ui.hero, lang)}
          </h1>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted">{t(ui.lede, lang)}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {family.map((person) => (
              <li key={person.name} className="rounded-full border border-line bg-white/40 px-3 py-1.5 text-sm">
                <span className="font-medium">{person.name}</span>
                <span className="text-muted">, {t(person.note, lang)}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="border border-line bg-white/35 p-5">
          <p className="text-sm text-bronze">{t(ui.base, lang)}</p>
          <p className="mt-2 font-serif text-2xl leading-tight">{hotel.name}</p>
          {lang === "zh" ? <p className="mt-1 text-sm text-muted">{hotel.nameZh}</p> : null}
          <p className="mt-2 text-sm leading-relaxed text-muted">{t(hotel.address, lang)}</p>
          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-muted">{t(ui.checkIn, lang)}</dt>
              <dd>{t(hotel.checkIn, lang)}</dd>
            </div>
            <div>
              <dt className="text-muted">{t(ui.checkOut, lang)}</dt>
              <dd>{t(hotel.checkOut, lang)}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-muted">{t(ui.metro, lang)}</dt>
              <dd>{t(hotel.metro, lang)}</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm leading-relaxed">{t(hotel.room, lang)}</p>
        </aside>
      </section>

      <OverallRouteMap lang={lang} />

      <section id="day" className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="day-rail -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
          {days.map((item) => {
            const on = item.id === day.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => chooseDay(item)}
                aria-pressed={on}
                className={`min-w-[9.5rem] shrink-0 border px-3 py-3 text-left transition ${
                  on ? "border-ink bg-ink text-paper" : "border-line bg-transparent hover:border-bronze"
                }`}
              >
                <span className="flex items-baseline justify-between gap-3 text-xs">
                  <span className={on ? "text-paper/70" : "text-muted"}>{t(item.weekday, lang)}</span>
                  <span>{item.dayNum}</span>
                </span>
                <span className="mt-2 block font-serif text-lg leading-tight">{t(item.date, lang)}</span>
                <span className={`mt-1 block text-sm ${on ? "text-paper/80" : "text-muted"}`}>
                  {t(item.area, lang)}
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-xs text-muted">{t(ui.keys, lang)}</p>
      </section>

      <section
        className="mx-auto mt-6 grid max-w-6xl gap-6 px-5 pb-16 sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
        aria-live="polite"
      >
        <div className="order-2 lg:order-1">
          <p className="text-sm text-cinnabar">
            {t(day.weekday, lang)} {t(day.date, lang)}
            {day.id === "sat" ? `  ·  ${t(ui.birthday, lang)}` : ""}
          </p>
          <h2 className="mt-2 font-serif text-4xl leading-tight tracking-tight">{t(day.title, lang)}</h2>
          <p className="mt-1 text-sm text-muted">{other(day.title, lang)}</p>
          <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-muted">{t(day.summary, lang)}</p>
          <dl className="mt-5 grid gap-3 border-y border-line py-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-muted">{t(ui.leave, lang)}</dt>
              <dd className="mt-1">{t(day.leave, lang)}</dd>
            </div>
            <div>
              <dt className="text-muted">{t(ui.meal, lang)}</dt>
              <dd className="mt-1">{t(day.meal, lang)}</dd>
            </div>
            <div>
              <dt className="text-muted">{t(ui.sleep, lang)}</dt>
              <dd className="mt-1">{t(day.sleep, lang)}</dd>
            </div>
          </dl>

          <p className="mt-6 text-sm text-bronze">{t(ui.today, lang)}</p>
          <ol className="mt-1">
            {day.stops.map((item, index) => {
              const on = item.id === stop.id;
              return (
                <li key={item.id} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setStopId(item.id)}
                    className="flex w-full items-start gap-4 py-4 text-left"
                    aria-expanded={on}
                  >
                    <span className={`mt-0.5 w-8 shrink-0 font-serif text-lg ${on ? "text-cinnabar" : "text-muted"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-bronze">{t(item.kicker, lang)}</span>
                      <span className="mt-1 block font-serif text-2xl leading-tight">{t(item.title, lang)}</span>
                      {other(item.title, lang) !== t(item.title, lang) && (
                        <span className="mt-0.5 block text-sm text-muted">{other(item.title, lang)}</span>
                      )}
                      <span className="mt-1 block text-sm text-muted">{t(item.where, lang)}</span>
                    </span>
                  </button>
                  {on && (
                    <div className="pl-12">
                      <Guide stop={item} lang={lang} />
                      <div className="flex items-center gap-3 pb-5">
                        <button
                          type="button"
                          onClick={() => step(-1)}
                          disabled={stopIndex === 0}
                          className="border border-line px-3 py-1.5 text-sm disabled:opacity-35"
                        >
                          {t(ui.earlier, lang)}
                        </button>
                        <button
                          type="button"
                          onClick={() => step(1)}
                          disabled={stopIndex === day.stops.length - 1}
                          className="border border-ink bg-ink px-3 py-1.5 text-sm text-paper disabled:opacity-35"
                        >
                          {t(ui.later, lang)}
                        </button>
                        <span className="text-sm text-muted">{progress}</span>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>

          <div className="mt-6">
            <p className="text-sm text-muted">{t(ui.leftOff, lang)}</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              {day.skip.map((item) => (
                <li key={item.en}>{t(item, lang)}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="order-1 lg:sticky lg:top-20 lg:order-2 lg:self-start">
          <div className="border border-line bg-[#efe8dc]">
            <div className="flex items-center justify-between px-4 py-3 text-xs text-muted">
              <span>{t(ui.route, lang)}</span>
              <span>{t(ui.scale, lang)}</span>
            </div>
            <div className="aspect-[520/420]">
              <RouteMap region={day.region} route={day.route} active={stop.pin} lang={lang} onPick={choosePin} />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div className="border border-line p-3">
              <p className="text-xs text-muted">{t(ui.out, lang)}</p>
              <p className="mt-1 font-medium">{flights.out.code}</p>
              <p className="text-muted">
                {t(flights.out.depart, lang)}
                <br />
                {t(flights.out.from, lang)} {t(ui.to, lang)} {t(flights.out.to, lang)}
              </p>
              <p className="mt-1">
                {t(ui.lands, lang)} {t(flights.out.arrive, lang).split(" ").at(-1)}
              </p>
            </div>
            <div className="border border-line p-3">
              <p className="text-xs text-muted">{t(ui.back, lang)}</p>
              <p className="mt-1 font-medium">{flights.back.code}</p>
              <p className="text-muted">
                {t(flights.back.depart, lang)}
                <br />
                {t(flights.back.from, lang)} {t(ui.to, lang)} {t(flights.back.to, lang)}
              </p>
              <p className="mt-1">
                {t(ui.lands, lang)} {t(flights.back.arrive, lang).split(" ").at(-1)}
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{t(flights.bags, lang)}</p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-sm text-bronze">{t(ui.bookings, lang)}</p>
            <h2 className="mt-2 font-serif text-3xl leading-tight">{t(ui.held, lang)}</h2>
            <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-muted">{t(ui.heldBody, lang)}</p>
          </div>
          <div>
            <p className="text-sm text-bronze">{t(ui.checked, lang)}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    className="text-ink underline decoration-line underline-offset-4 hover:text-cinnabar"
                  >
                    {t(source.label, lang)}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">{t(ui.long, lang)}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
