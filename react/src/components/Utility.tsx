export function getUserLanguage(): string {
  const full = navigator.language || (navigator as any).userLanguage;
  const [language, country] = full.split('-');
  return language;
}