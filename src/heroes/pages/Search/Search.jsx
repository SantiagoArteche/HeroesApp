import { useFormik } from "formik";
import { getHeroesByName } from "../../helpers/getHeroesByName.js";
import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { SearchPresentational } from "./SearchPresentational.jsx";

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
      if (data.search.length < 1) return;
      navigate(`?q=${data.search}`);
      const searchHeroes = getHeroesByName(data.search);
      setHeroes(searchHeroes);
      setDataSend(true);
      resetForm();
    },
  });

  return (
    <SearchPresentational
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      values={values}
      heroes={heroes}
      dataSend={dataSend}
      q={q}
    />
  );
};
