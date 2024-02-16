import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HeroesRoutes } from "./heroes/routes/HeroesRoutes";
import { LoginPage } from "./auth/pages/LoginPage/LoginPage";

function HeroesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default HeroesApp;
