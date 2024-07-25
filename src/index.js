import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "./i18next/en/global.json";
import global_es from "./i18next/es/global.json";
import global_po from "./i18next/po/global.json";

const userDataStorage = localStorage.getItem("userDataLang");
const lang = [{ lang: "es" }, { lang: "en" }];

const sessionLang =
  userDataStorage == null || userDataStorage === "es"
    ? lang[0].lang
    : lang[1].lang;

i18next.init({
  interpolation: { escapeValue: false },
  lng: sessionLang,
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    po: {
      global: global_po,
    },
  },
});
ReactDOM.render(
  <HashRouter>
    <ScrollToTop />
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </HashRouter>,
  document.getElementById("root")
);
