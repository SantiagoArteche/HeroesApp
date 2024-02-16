import { Box } from "@mui/material";
import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher.js";
import { HeroCard } from "../HeroCard/HeroCard.jsx";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        gap: 4,
        flexWrap: "wrap",
        justifyContent: "center",
        marginY: 3,
      }}
    >
      {heroes.map((hero) => (
        <HeroCard {...hero} key={hero.id} />
      ))}
    </Box>
  );
};
