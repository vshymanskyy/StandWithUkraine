import { defaultProps } from "./SaveUkraineRibbon/SaveUkraineRibbon";

export function getUserLanguage(): string {
  const full = navigator.language || (navigator as any).userLanguage;
  const [language, country] = full.split('-');
  return language;
}

/**
 *
 * @collboard-modules-sdk
 */
export function randomItem<T>(...items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export const url  = {
  table: {
    defaultValue: { summary: defaultProps.url }
  },
  description:  'The Url to redierect to on click',
}