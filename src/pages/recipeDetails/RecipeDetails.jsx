import React from "react";
import { useLoaderData } from "react-router-dom";
import { scrollTop } from "../../utils/utils";

const RecipeDetails = () => {
  const { recipe_name, ingredients, cooking_method, picture } = useLoaderData();
  // split cooking methods string by \n
  const cookingMethodLines = cooking_method.split("\n");

  return (
    <div
      className="sm:my-10 sm:pr-10 grid items-center sm:grid-cols-5 gap-10"
      onLoad={scrollTop()}
    >
      <img
        className="w-full sm:col-span-2 sm:rounded-r-full"
        src={
          picture ||
          "https://i.ibb.co/6H8F3BW/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
        }
        alt=""
      />
      <div className="sm:col-span-3 px-5 pb-10">
        <h4 className="text-3xl font-bold">{recipe_name}</h4>
        <div className="mt-5">
          <h5 className="text-2xl font-semibold">Ingredients</h5>
          <ul className="ml-5 list-disc">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-5">
          <h5 className="text-2xl font-semibold">Directions</h5>
          {cookingMethodLines.map((method, index) => (
            <p key={index}>{method}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
