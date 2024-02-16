import { Box, Button, Grid, Input } from "@mui/material";
import { useFormik } from "formik";
import { getHeroesByName } from "../../helpers/getHeroesByName.js";
import { useEffect, useState } from "react";
import { HeroCard } from "../../components/index.js";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

export const Search = () => {
  const [heroes, setHeroes] = useState([]);

  const [dataSend, setDataSend] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  let { q = "" } = queryString.parse(location.search);

  useEffect(() => {
    const queryHeroes = getHeroesByName(q);
    if (q.length !== 0) setHeroes(queryHeroes);
  }, [q]);

  const { handleChange, handleSubmit, resetForm, values } = useFormik({
    initialValues: {
      search: "",
    },
    validateOnChange: false,
    onSubmit: async (data) => {
      navigate(`?q=${data.search}`);
      const searchHeroes = getHeroesByName(data.search);
      setHeroes(searchHeroes);
      setDataSend(true);
      resetForm();
    },
  });

  return (
    <Grid container sx={{ paddingX: 8, paddingTop: 2 }}>
      <Grid item xs={3}>
        <Box component="h1">Search</Box>
        <Box component="hr" marginY={2} />
        <Box component="form" onSubmit={handleSubmit}>
          <Input
            name="search"
            placeholder="Search your heroes..."
            value={values.search}
            onChange={handleChange}
          />
          <Button
            type="submit"
            sx={{
              backgroundColor: "black",
              color: "white",
              ":hover": { backgroundColor: "#212136" },
              margin: window.innerWidth < 1215 && "20px 70px",
              height: 30,
            }}
          >
            Search
          </Button>
        </Box>
      </Grid>
      {heroes.length !== 0 && (
        <Grid item xs={9} paddingTop={3}>
          <Box textAlign={"center"} fontSize={33} fontWeight={700}>
            Results
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 5, padding: 2 }}>
            {heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </Box>
        </Grid>
      )}

      {dataSend && heroes.length === 0 && (
        <Grid
          item
          xs={9}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            paddingTop: 3,
          }}
        >
          <Box textAlign={"center"} fontSize={33} fontWeight={700}>
            <Box
              sx={{ backgroundColor: "#d71200", padding: 2, borderRadius: 3 }}
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
          xs={9}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            paddingTop: 3,
          }}
        >
          <Box textAlign={"center"} fontSize={44} fontWeight={700}>
            <Box>Make your search!!</Box>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};
