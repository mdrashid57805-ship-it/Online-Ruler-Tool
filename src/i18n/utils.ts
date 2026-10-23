import { ui, defaultLang, showDefaultLang, languages, type SupportedLanguage, type TranslationDict } from './ui';

/**
 * Extracts language code from the current URL pathname.
 * E.g., /es/ -> 'es', /ja/about -> 'ja', / -> 'en'.
 */
export function getLangFromUrl(url: URL | string): SupportedLanguage {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const candidate = segments[0];

  if (candidate && candidate in languages) {
    return candidate as SupportedLanguage;
  }
  return defaultLang;
}

/**
 * Returns a typed translator function t(key) for the given language.
 */
export function useTranslations(lang: SupportedLanguage) {
  const dict: TranslationDict = ui[lang] || ui[defaultLang];
  return function t<K extends keyof TranslationDict>(key: K): TranslationDict[K] {
    return dict[key] ?? ui[defaultLang][key];
  };
}

/**
 * Strips the language prefix from a pathname to get the base canonical route.
 * E.g., '/es/' -> '/', '/ja/cara-kalibrasi' -> '/cara-kalibrasi', '/' -> '/'.
 */
export function getCleanPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && segments[0] in languages) {
    segments.shift();
  }
  return segments.length === 0 ? '/' : `/${segments.join('/')}/`;
}

/**
 * Generates translated path for a given language.
 * E.g., translatePath('/', 'es') -> '/es/'
 * E.g., translatePath('/', 'en') -> '/'
 */
export function useTranslatedPath(currentLang: SupportedLanguage) {
  return function translatePath(path: string, targetLang: SupportedLanguage = currentLang): string {
    const clean = getCleanPathname(path);
    const base = import.meta.env.BASE_URL.replace(/\/$/, '').replace(/\/Online-Ruler-Tool$/, '');
    
    let translated: string;
    if (!showDefaultLang && targetLang === defaultLang) {
      translated = clean;
    } else {
      const suffix = clean === '/' ? '' : clean.replace(/\/$/, '');
      translated = `/${targetLang}${suffix}/`;
    }

    return `${base}${translated}` || '/';
  };
}


export interface HreflangEntry {
  lang: string;
  href: string;
}

/**
 * Returns complete list of hreflang tags for international SEO.
 * Crucially:
 * - `x-default` points to the English version (so non-matching global visitors default to English).
 * - `en` points to the English version.
 * - Each target language has its own distinct URL.
 */
export function getHreflangLinks(currentPath: string, siteUrl: string = 'https://onlinepenggaris.com'): HreflangEntry[] {
  const clean = getCleanPathname(currentPath);
  const cleanNorm = clean === '/' ? '' : clean.replace(/\/$/, '');
  const pathSuffix = cleanNorm ? `${cleanNorm}/` : '/';

  // English is the default / global fallback (x-default)
  const enUrl = `${siteUrl}${pathSuffix}`;

  const links: HreflangEntry[] = [
    { lang: 'x-default', href: enUrl },
    { lang: 'en', href: enUrl },
    { lang: 'es', href: `${siteUrl}/es${pathSuffix}` },
    { lang: 'ja', href: `${siteUrl}/ja${pathSuffix}` },
    { lang: 'fr', href: `${siteUrl}/fr${pathSuffix}` },
    { lang: 'de', href: `${siteUrl}/de${pathSuffix}` },
    { lang: 'pt', href: `${siteUrl}/pt${pathSuffix}` },
    { lang: 'ko', href: `${siteUrl}/ko${pathSuffix}` },
    { lang: 'it', href: `${siteUrl}/it${pathSuffix}` },
    { lang: 'id', href: `${siteUrl}/id${pathSuffix}` },
  ];

  return links;
}
