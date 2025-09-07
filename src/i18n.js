import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "uk"],
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          welcome: "Welcome to React + Vite + i18n!",
          language: "Language",
        },
      },
      uk: {
        translation: {
          welcome: "Ласкаво просимо до React + Vite + i18n!",
          language: "Мова",
        },
      },
    },
  });

export default i18n;
