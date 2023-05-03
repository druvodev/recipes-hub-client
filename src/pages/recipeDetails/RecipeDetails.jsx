import React from "react";
import { useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
  const { recipe_name, ingredients, cooking_method, rating, picture } =
    useLoaderData();
  const cookingMethodLines = cooking_method.split("\n");
  return (
    <div className="my-10 pr-5 sm:pr-10 grid items-center grid-cols-5 gap-10">
      <img
        className="w-full col-span-2 rounded-r-full"
        src={
          picture ||
          "https://i.ibb.co/6H8F3BW/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
        }
        alt=""
      />
      <div className="col-span-3">
        <h4 className="text-3xl font-bold">{recipe_name}</h4>
        <div className="mt-5">
          <h5 className="text-2xl font-semibold">Ingredients</h5>
          <ul className="ml-5 list-disc">
            {ingredients.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-5">
          <h5 className="text-2xl font-semibold">Directions</h5>
          {cookingMethodLines.map((method) => (
            <p>{method}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
