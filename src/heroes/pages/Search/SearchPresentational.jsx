import { HeroCard } from "../../components/index.js";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Box, Button, Grid, Input } from "@mui/material";
export const SearchPresentational = ({
  handleChange,
  handleSubmit,
  values,
  heroes,
  dataSend,
  q,
}) => {
  return (
    <>
      <Box sx={{ paddingX: 8, paddingTop: 2 }}>
        <Box component="h1">Search</Box>
        <Box component="hr" marginY={2} />
      </Box>
      <Grid container sx={{ paddingX: 8 }}>
        <Grid item xs={5}>
          <Box component="form" onSubmit={handleSubmit}>
            <Box component="h2">Searching</Box>
            <Box component="hr" marginY={2} />
            <Input
              name="search"
              placeholder="Search your heroes..."
              value={values.search}
              onChange={handleChange}
              sx={{ width: "50%" }}
            />
            <Button
              type="submit"
              sx={{
                backgroundColor: "black",
                color: "white",
                ":hover": { backgroundColor: "#212136" },
                margin: window.innerWidth < 1215 && "20px 70px",
                height: 30,
                width: "20%",
              }}
            >
              Search
            </Button>
          </Box>
        </Grid>
        {heroes.length !== 0 && (
          <Grid item xs={7} sx={{ paddingLeft: 2 }}>
            <Box component="h2" fontWeight={700}>
              Results
            </Box>
            <Box component="hr" marginY={2} />

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 5,
                padding: 2,
              }}
            >
              {heroes.map((hero) => (
                <HeroCard key={hero.id} {...hero} />
              ))}
            </Box>
          </Grid>
        )}

        {dataSend && heroes.length === 0 && (
          <Grid
            item
            xs={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              paddingLeft: 2,
            }}
          >
            <Box textAlign={"center"} fontSize={33} fontWeight={700}>
              <Box
                sx={{
                  backgroundColor: "#212136",
                  color: "white",
                  padding: 2,
                  borderRadius: 3,
                }}
              >
                We couldn't find heroes with:{" "}
                <Box sx={{ textDecoration: "underline" }} component={"span"}>
                  {q}
                </Box>{" "}
              </Box>
            </Box>
            <SentimentVeryDissatisfiedIcon sx={{ fontSize: 120 }} />
          </Grid>
        )}
        {!dataSend && heroes.length === 0 && (
          <Grid
            item
            xs={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              paddingLeft: 2,
            }}
          >
            <Box textAlign={"center"} fontSize={44} fontWeight={700}>
              <Box>Make your search!!</Box>
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
};
