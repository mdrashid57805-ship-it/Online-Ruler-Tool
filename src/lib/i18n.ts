import {
  ui,
  languages,
  defaultLang,
  type SupportedLanguage,
  type TranslationDict,
  type FaqItem,
} from '../i18n/ui';
import {
  getLangFromUrl,
  useTranslations,
  useTranslatedPath,
  getCleanPathname,
  getHreflangLinks,
} from '../i18n/utils';

export type Language = SupportedLanguage;
export type { TranslationDict, FaqItem };
export { languages, defaultLang, getLangFromUrl, useTranslations, useTranslatedPath, getCleanPathname, getHreflangLinks };

export const TRANSLATIONS: Record<Language, TranslationDict> = ui;

/**
 * Updates all text elements in the footer according to the active language.
 */
export function updateFooterTranslations(lang: Language): void {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const desc = document.getElementById('footer-brand-desc');
  if (desc) desc.textContent = t.footer.brandDesc;

  const hTools = document.getElementById('footer-heading-tools');
  if (hTools) hTools.textContent = t.footer.toolsHeading;

  const hInfo = document.getElementById('footer-heading-info');
  if (hInfo) hInfo.textContent = t.footer.infoHeading;

  const fHome = document.getElementById('footer-link-home');
  if (fHome) fHome.textContent = t.footer.home;

  const fCal = document.getElementById('footer-link-cal');
  if (fCal) fCal.textContent = t.footer.calGuide;

  const fAbout = document.getElementById('footer-link-about');
  if (fAbout) fAbout.textContent = t.footer.about;

  const fContact = document.getElementById('footer-link-contact');
  if (fContact) fContact.textContent = t.footer.contact;

  const fPrivacy = document.getElementById('footer-link-privacy');
  if (fPrivacy) fPrivacy.textContent = t.footer.privacy;

  const fTerms = document.getElementById('footer-link-terms');
  if (fTerms) fTerms.textContent = t.footer.terms;

  const fCopy = document.getElementById('footer-copyright');
  if (fCopy) fCopy.textContent = t.footer.copyright;
}
