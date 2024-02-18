import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../auth/context";
import { NavbarPresentational } from "./NavbarPresentational";

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [activeSection, setActiveSection] = useState(
    JSON.parse(localStorage.getItem("activeSection")) || "marvel"
  );
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const { user, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem("activeSection", JSON.stringify(activeSection));
  }, [activeSection]);

  return (
    <NavbarPresentational
      user={user}
      logoutUser={logoutUser}
      handleCloseNavMenu={handleCloseNavMenu}
      handleOpenNavMenu={handleOpenNavMenu}
      navigate={navigate}
      anchorElNav={anchorElNav}
      setActiveSection={setActiveSection}
      activeSection={activeSection}
      Outlet={Outlet}
    />
  );
};
