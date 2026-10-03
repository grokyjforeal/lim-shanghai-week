export type Lang = "en" | "zh";

export type Bi = {
  en: string;
  zh: string;
};

export function t(value: Bi, lang: Lang) {
  return value[lang];
}

export function other(value: Bi, lang: Lang) {
  return lang === "en" ? value.zh : value.en;
}

export function bi(en: string, zh: string): Bi {
  return { en, zh };
}
