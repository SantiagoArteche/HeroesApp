import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { loginUser } = useContext(AuthContext);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Box component="h1" fontSize={55}>
        Login
      </Box>

      <Box>
        <Button
          onClick={() => {
            const lastPath =
              JSON.parse(localStorage.getItem("lastPath")) || "/";
            loginUser("Santiago");
            navigate(lastPath, { replace: true });
          }}
          sx={{
            fontSize: 33,
            backgroundColor: "black",
            color: "white",
            ":hover": { backgroundColor: "#212136" },
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};
