import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from "@radix-ui/themes";

import { App } from "./app";

import "@radix-ui/themes/styles.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Theme accentColor="bronze" appearance="inherit" radius="medium">
      <App />
    </Theme>
  </React.StrictMode>
);
