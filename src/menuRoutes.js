import { Home, Hero, MarvelPage, DcPage, Search } from "./heroes/pages";

export const routes = [
  {
    id: "MARVEL",
    path: `/marvel`,
    Element: MarvelPage,
  },
  {
    id: "DC",
    path: "/dc",
    Element: DcPage,
  },

  {
    id: "HOME",
    path: "/",
    Element: Home,
  },
  {
    id: "Search",
    path: "/search",
    Element: Search,
  },
  {
    id: "Hero",
    path: "/hero/:id",
    Element: Hero,
  },
];
