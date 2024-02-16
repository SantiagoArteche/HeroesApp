import "../../App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/layout/header/Navbar";
import { routes } from "../../menuRoutes";

export const HeroesRoutes = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
    </Routes>
  );
};
