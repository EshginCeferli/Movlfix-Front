import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';
import { ProSidebarProvider } from 'react-pro-sidebar';
import "./assets/css/animate.min.css"
import "./assets/script/main";
import "./assets/css/main.css"
import ScrollToTop from "./assets/helpers/ScrollTop";

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
 
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'localstorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false
    },

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
    <ProSidebarProvider>
  <App />
</ProSidebarProvider>;
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
