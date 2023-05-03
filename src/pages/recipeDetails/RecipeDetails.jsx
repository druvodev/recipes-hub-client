import React from "react";
import { useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
  const { recipe_name, ingredients, cooking_method, rating, picture } =
    useLoaderData();
  return (
    <div>
      <div
        className="max-h-96 w-full bg-cover bg-center rounded-t-md"
        style={{
          backgroundImage: `url("${
            picture ||
            "https://i.ibb.co/6H8F3BW/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
          }")`,
        }}
      ></div>
      <h4>{recipe_name}</h4>
      <ul className="ml-10 list-disc">
        {ingredients.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <p>{cooking_method}</p>
    </div>
  );
};

export default RecipeDetails;
