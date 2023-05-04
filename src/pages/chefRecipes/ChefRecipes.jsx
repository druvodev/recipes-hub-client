import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../home/popularRecipes/RecipeCard";
import { AuthContext } from "../../providers/AuthProvider";
import { FaHeart } from "react-icons/fa";

const ChefRecipes = () => {
  const recipes = useLoaderData();
  const { chef } = useContext(AuthContext);
  const { chef_name, years_of_experience, num_recipes, likes, picture, bio } =
    chef;

  return (
    <div className="mb-10">
      <div className="bg-amber-50 flex flex-col sm:flex-row gap-10 py-10 px-5 sm:px-10">
        <div className="h-96 relative">
          <img
            className="h-full rounded-2xl shadow-md shadow-gray-400"
            src={
              picture ||
              "https://i.ibb.co/6H8F3BW/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
            }
            alt="avatar"
          />
          <div className="text-5xl flex gap-1 items-center bg-rose-500 bg-opacity-60 w-fit text-teal-50 rounded px-5 py-3 absolute -bottom-5 -right-5">
            <FaHeart></FaHeart>
            <small className="text-2xl text-slate-700 font-semibold">
              {likes}
            </small>
          </div>
        </div>
        <div className="sm:-2/5">
          <h5 className="text-3xl font-bold mb-3">{chef_name}</h5>
          <p className="text-lg">
            Experience:{" "}
            <span className="font-semibold">{years_of_experience} years</span>
          </p>
          <p className="text-lg mb-5">
            Total Recipes:{" "}
            <span className="font-semibold">{num_recipes} items</span>
          </p>
          <p className="text-xl font-semibold">Biography:</p>
          <p>{bio}</p>
        </div>
      </div>
      <h5 className="text-2xl sm:text-3xl font-semibold underline ml-5 sm:ml-10 mt-16">
        Recipes List
      </h5>
      <div className="mt-4 px-5 sm:px-10 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.recipe_id} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default ChefRecipes;
