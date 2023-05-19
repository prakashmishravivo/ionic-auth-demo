import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en_resource } from "./i18N/en/translation";
import { hi_resource } from "./i18N/hi/translation";
import { ur_rosource } from "./i18N/ur/ur_resource";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: en_resource,
  },
  hi: {
    translation: hi_resource,
  },
  ur: {
    translation: ur_rosource,
  },
};

let lng: string = "en";

if (JSON.parse(localStorage.getItem("LNG")!)?.language !== null)
  lng = JSON.parse(localStorage.getItem("LNG")!)?.language;

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: lng,
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
