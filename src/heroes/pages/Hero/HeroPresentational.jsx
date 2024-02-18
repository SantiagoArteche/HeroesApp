import { Box, Button, Grid } from "@mui/material";
export const HeroPresentational = ({
  hero,
  navigateBack,
  getStringNavigate,
  id,
}) => {
  return (
    <Grid
      sx={{
        paddingY: 8,
        paddingX: 16,
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "nowrap",
      }}
      container
      spacing={3}
    >
      <Grid
        item
        xs={3}
        component="img"
        sx={{
          minWidth: 400,
          height: 600,
        }}
        src={`/assets/heroes/${id}.jpg`}
        alt={hero.id}
      />
      <Grid
        item
        xs={9}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box component="h1">{hero.superhero}</Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box component="h3">Alter ego:</Box>
          <Box fontSize={17} marginTop={0.5}>
            {hero.alter_ego}
          </Box>
        </Box>
        <Box component="hr" />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box component="h3">Publisher:</Box>
          <Box fontSize={17} marginTop={0.5}>
            {hero.publisher}
          </Box>
        </Box>
        <Box component="hr" />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box component="h3">First Appearance:</Box>{" "}
          <Box fontSize={17} marginTop={0.5}>
            {hero.first_appearance}
          </Box>
        </Box>
        <Box component="hr" />
        <Box sx={{ gap: 1, display: "flex", flexDirection: "column" }}>
          <Box component="h2">Characters:</Box>{" "}
          <Box fontSize={17}>{hero.characters}</Box>
        </Box>
        <Button
          onClick={() => navigateBack(`/${getStringNavigate}`)}
          sx={{
            width: 200,
            backgroundColor: "black",
            color: "white",
            ":hover": { backgroundColor: "#212136" },
          }}
        >
          Go Back
        </Button>
      </Grid>
    </Grid>
  );
};
