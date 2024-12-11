import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Navigate } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {!(
        localStorage.getItem("token") && localStorage.getItem("token").length
      ) ? (
        <Navigate to="/login" />
      ) : (
        ""
      )}
    </BrowserRouter>
  </StrictMode>
);
