import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./auth/pages/LoginPage/LoginPage";
import { AuthContextProvider } from "./auth/context";
import { PrivateRoute, PublicRoute, HeroesRoutes } from "./heroes/routes";

function HeroesApp() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path="/*"
            element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default HeroesApp;
