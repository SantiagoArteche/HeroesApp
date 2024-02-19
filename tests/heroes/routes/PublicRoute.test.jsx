import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../../src/heroes/routes/PublicRoute";
import { AuthContext } from "../../../src/auth/context";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe("Pruebas en <PublicRoute />", () => {
  test("Debe mostrar el children si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Ruta pública")).toBeTruthy();
  });

  test("Debe navegar a /marvel si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Santiago",
        id: Date.now(),
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Ruta pública</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Marvel")).toBeTruthy();
  });
});
