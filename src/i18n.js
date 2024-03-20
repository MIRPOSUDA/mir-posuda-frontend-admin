import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import cr from "./languages/cr";
import uz from "./languages/uz";
import ru from "./languages/ru";

i18n.use(initReactI18next).init({
  resources: {
    cr: {
      translation: cr,
    },
    uz: {
      translation: uz,
    },
    ru: {
      translation: ru,
    },
  },
  lng: localStorage.getItem("language") || "cr",
  fallbackLng: "cr",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
