import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box component="h1">Login</Box>

      <Box>
        <Button onClick={() => navigate("/marvel", { replace: true })}>
          Login
        </Button>
      </Box>
    </Box>
  );
};
