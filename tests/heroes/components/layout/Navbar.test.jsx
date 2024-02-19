import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../../src/heroes/components/layout/header/Navbar";
import { AuthContext } from "../../../../src/auth/context";
import { MemoryRouter, useNavigate } from "react-router-dom";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));
describe("Pruebas <Navbar />", () => {
  const contextValue = {
    logged: true,
    user: {
      name: "Santiago",
    },
    logoutUser: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test("Debe mostrar el nombre del usuario logeado", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Santiago")).toBeTruthy();
  });
  test("Debe llamar el logout y navigate al clickear el boton", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const logoutBtn = screen.getByText("Logout");
    fireEvent.click(logoutBtn);

    expect(contextValue.logoutUser).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("login");
  });
});
