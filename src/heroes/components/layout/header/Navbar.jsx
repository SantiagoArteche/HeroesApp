import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [activeSection, setActiveSection] = useState("marvel");
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#212136",
        }}
      >
        <Container maxWidth="">
          <Toolbar disableGutters sx={{ marginX: { xs: 0, sm: 10 } }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => {
                navigate("marvel");
                setActiveSection("marvel");
              }}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              HeroesApp
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
                onClick={handleCloseNavMenu}
              >
                <MenuItem
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: activeSection === "marvel" ? "#1976d2" : "black",
                  }}
                  onClick={() => {
                    navigate("marvel");
                    setActiveSection("marvel");
                  }}
                >
                  <Typography textAlign="center">Marvel</Typography>
                </MenuItem>

                <MenuItem
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: activeSection === "dc" ? "#1976d2" : "black",
                  }}
                  onClick={() => {
                    navigate("dc");
                    setActiveSection("dc");
                  }}
                >
                  <Typography textAlign="center">DC</Typography>
                </MenuItem>
                <MenuItem
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: activeSection === "search" ? "#1976d2" : "black",
                  }}
                  onClick={() => {
                    navigate("search");
                    setActiveSection("search");
                  }}
                >
                  <Typography textAlign="center">Search</Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              onClick={() => {
                navigate("marvel");
                setActiveSection("marvel");
              }}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              HeroesApp
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                sx={{
                  color: activeSection === "marvel" ? "white" : "gray",
                  fontWeight: 700,
                  textTransform: "capitalize",
                }}
                onClick={() => {
                  navigate("marvel");
                  setActiveSection("marvel");
                }}
              >
                Marvel
              </Button>

              <Button
                sx={{
                  color: activeSection === "dc" ? "white" : "gray",
                  fontWeight: 700,
                }}
                onClick={() => {
                  navigate("dc");
                  setActiveSection("dc");
                }}
              >
                DC
              </Button>
              <Button
                sx={{
                  color: activeSection === "search" ? "white" : "gray",
                  fontWeight: 700,
                  textTransform: "capitalize",
                }}
                onClick={() => {
                  navigate("search");
                  setActiveSection("search");
                }}
              >
                Search
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                gap: 2,
              }}
            >
              <Box color="skyblue">Santiago</Box>
              <Button
                sx={{
                  color: "gray",
                  textTransform: "capitalize",
                  paddingX: { xs: 0, sm: 2 },
                }}
                onClick={() => navigate("login")}
              >
                Logout
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
