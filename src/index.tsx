import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement as Element);

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
