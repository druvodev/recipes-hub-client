import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../home/popularRecipes/RecipeCard";

const ChefRecipes = () => {
  const recipes = useLoaderData();
  return (
    <div className="mt-16 px-5 sm:px-10 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe}></RecipeCard>
      ))}
    </div>
  );
};

export default ChefRecipes;
