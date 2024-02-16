import { heroes } from "../data/heroes.js";

export const getHeroesByFilter = (filterSearch) => {
  const filterHeroes = heroes.filter((hero) =>
    hero.superhero.toUpperCase().includes(filterSearch.toUpperCase())
  );
  return filterHeroes;
};
