import { Box } from "@mui/material";
import { HeroList } from "../../components/";

export const MarvelPage = () => {
  return (
    <Box sx={{ paddingX: 5, paddingTop: 2 }}>
      <Box component="h1">Marvel Comics</Box>
      <Box component="hr" sx={{ marginY: 2 }}></Box>
      <HeroList publisher="Marvel Comics" />
    </Box>
  );
};
