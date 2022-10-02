import React from "react";
import "./App.css";
import Recipe from "./components/Recipe";
import { useRecipes } from "./hooks/recipes";

import BackToTopBtn from "./components/BackToTopBtn";
function App() {
  const { search, recipes, loading, gainSearch, updateSearch } = useRecipes();
  return (
    <div className="App">
      <div className="search">
        <form onSubmit={gainSearch}>
          <input
            className="input"
            placeholder="Enter your dish.."
            value={search}
            onChange={updateSearch}
          />
        </form>
      </div>
      <div className="recipes">
        {loading && <p className="loading">Loading..</p>}
        {recipes.map((dish, id) => (
          <Recipe
            key={id}
            title={dish.recipe.label}
            image={dish.recipe.image}
            calories={dish.recipe.calories}
            ingredientLines={dish.recipe.ingredientLines}
            ingredients={dish.recipe.ingredients}
            mealType={dish.recipe.mealType}
          />
        ))}
        <BackToTopBtn />
      </div>
    </div>
  );
}

export default App;
