import { Box, Button, Grid, Input } from "@mui/material";
import { useFormik } from "formik";
import { getHeroesByFilter } from "../../helpers/getHeroesByFilter.js";
import { useState } from "react";
import { HeroCard } from "../../components/index.js";

export const Search = () => {
  const [heroes, setHeroes] = useState("");
  const { handleChange, handleSubmit, resetForm, values } = useFormik({
    initialValues: {
      search: "",
    },
    validateOnChange: false,
    onSubmit: (data) => {
      const searchHeroes = getHeroesByFilter(data.search);

      setHeroes(searchHeroes);
      resetForm();
    },
  });

  return (
    <Grid container sx={{ padding: 8 }}>
      <Grid item xs={3}>
        <Box component="h1">Searching</Box>
        <Box component="hr" />
        <Box component="form" onSubmit={handleSubmit}>
          <Input
            name="search"
            placeholder="Busca tu heroe..."
            value={values.search}
            onChange={handleChange}
          />
          <Button type="submit">Buscar...</Button>
        </Box>
      </Grid>
      {heroes != "" && (
        <Grid item xs={9}>
          <Box textAlign={"center"} component="h2">
            Results
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 5, padding: 2 }}>
            {heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </Box>
        </Grid>
      )}
    </Grid>
  );
};
