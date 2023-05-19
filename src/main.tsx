import { createRoot } from "react-dom/client";
import App from "./App";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import "./i18n";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18next from "./i18n";

import { StoreProvider } from "./store";
defineCustomElements(window);

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <StoreProvider>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StoreProvider>
);
