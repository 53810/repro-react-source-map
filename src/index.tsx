import "./index.scss";
import { App } from "./layout";
import React from "react";
import ReactDOM from "react-dom/client";
import { handlePromise } from "real-facades";
import { promiseHandler } from "real-service-providers";
import { reportWebVitals } from "./report-web-vitals";

// eslint-disable-next-line xss/no-mixed-html -- Ok
const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement
);

handlePromise.setImplementation(promiseHandler);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
