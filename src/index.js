import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./DashboardPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> {/* Головна сторінка */}
      <Route path="/dashboard" element={<DashboardPage />} />{" "}
      {/* Сторінка Dashboard */}
    </Routes>
  </BrowserRouter>
);
