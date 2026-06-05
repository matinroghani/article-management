import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ArtikelApp from "./Components/Artikel_management/ArtikelApp";
import { ArtikelManagementProvider } from "./Components/Artikel_management/ArtikelManagementContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ArtikelManagementProvider>
      <ArtikelApp />
    </ArtikelManagementProvider>
  </StrictMode>,
);
