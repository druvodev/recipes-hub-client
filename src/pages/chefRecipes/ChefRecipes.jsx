import React, { useContext } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import RecipeCard from "../home/popularRecipes/RecipeCard";
import { AuthContext } from "../../providers/AuthProvider";

const ChefRecipes = () => {
  const recipes = useLoaderData();
  const { chef } = useContext(AuthContext);
  const { chef_name, years_of_experience, num_recipes, likes, picture } = chef;

  return (
    <div>
      <div>{chef_name}</div>
      <div className="mt-16 px-5 sm:px-10 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.recipe_id} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default ChefRecipes;
