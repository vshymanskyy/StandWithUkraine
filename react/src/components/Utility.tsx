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