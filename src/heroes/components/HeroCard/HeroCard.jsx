import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
export const HeroCard = ({
  alter_ego,
  characters,
  superhero,
  first_appearance,
  id,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  const charactersByHero = alter_ego !== characters && characters;
  return (
    <>
      <Grid
        container
        sx={{ border: "1px solid black", height: 250, width: 400 }}
      >
        <Grid
          item
          xs={4}
          component="img"
          sx={{ height: "100%" }}
          src={heroImageUrl}
          alt={superhero}
        />
        <Grid item xs={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              justifyContent: "space-around",
            }}
          >
            <Box sx={{ fontWeight: 700, fontSize: 22 }}>{superhero}</Box>
            <Box sx={{ fontSize: 18 }}>{alter_ego}</Box>
            <Box textAlign="center">{charactersByHero}</Box>
            <Box>
              <Box component="small" color="gray">
                {first_appearance}
              </Box>
            </Box>
            <Link to={`/hero/${id}`}>Mas información...</Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
