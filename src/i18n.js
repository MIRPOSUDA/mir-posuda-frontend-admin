import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import cyrillic from "./languages/cyrillic";
import latin from "./languages/latin";
import ru from "./languages/ru";

i18n.use(initReactI18next).init({
  resources: {
    cyrillic: {
      translation: cyrillic,
    },
    latin: {
      translation: latin,
    },
    ru: {
      translation: ru,
    },
  },
  lng: localStorage.getItem("language") || "cyrillic",
  fallbackLng: "cyrillic",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
