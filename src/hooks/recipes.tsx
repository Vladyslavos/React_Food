import React from "react";
import axios from "axios";
import { Welcome } from "../models";

export function useRecipes() {
  const ID: string = "8a7d1c96";
  const KEY: string = "16f8ae5b772307169d8a81925b88f49a";

  const [search, setSearch] = React.useState("");
  const [query, setQuery] = React.useState<string>("salad");
  const [recipes, setRecipes] = React.useState<Welcome["hits"]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetchApi();
  }, [query]);

  async function fetchApi() {
    try {
      setLoading(true);
      const response = await axios.get<Welcome>(
        `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${KEY}`
      );
      setRecipes(response.data.hits);
      setLoading(false);
    } catch (e: unknown) {
      console.warn(e);
    }
  }

  const gainSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return { search, query, recipes, loading, gainSearch, updateSearch };
}
