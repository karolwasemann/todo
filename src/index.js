import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);

// *** StrictMode ***
// StrictMode ist ein Werkzeug zum Aufzeigen potenzieller
// Probleme in einer Anwendung. StrictMode rendert wie Fragment keine
// sichtbare Benutzeroberfläche.
// Es aktiviert zusätzliche Prüfungen und Warnungen für seine Nachkommen.
// mehr hierzu: https://de.reactjs.org/docs/strict-mode.html
