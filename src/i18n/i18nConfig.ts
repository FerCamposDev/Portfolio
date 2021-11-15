import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enTranslations } from './translations/en';
import { esTranslations } from './translations/es';

const userLang = navigator.language;
let defaultLocale = userLang.substring(0, 2);

if (window.location.href.includes('/es')) {
  defaultLocale = 'es';
} else {
  defaultLocale = 'en';
}

localStorage.setItem("lang", defaultLocale);

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      es: {
        translation: esTranslations,
      }
    },
    lng: defaultLocale,
    fallbackLng: "es",

    interpolation: {
      escapeValue: false
    }
  });