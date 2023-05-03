import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { chef_name, years_of_experience, num_recipes, likes, picture } = chef;
  return (
    <div className="w-80 border border-amber-200 shadow shadow-amber-400 pb-5 rounded-md text-gray-800 ml-6">
      <div
        className="h-52 w-full bg-cover bg-center rounded-t-md relative"
        style={{
          backgroundImage: `url("${
            picture ||
            "https://i.ibb.co/6H8F3BW/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
          }")`,
        }}
      >
        <div className="flex gap-1 items-center bg-rose-200 bg-opacity-60 w-fit text-rose-500 rounded p-1 absolute bottom-1 left-1">
          <FaHeart></FaHeart>
          <small className="text-sm text-slate-600 font-semibold">
            {likes}
          </small>
        </div>
      </div>
      <div className="ml-2">
        <h5 className="text-xl font-semibold mt-2 mb-1">{chef_name}</h5>

        <p className="text-md">
          Experience:{" "}
          <span className="font-semibold">{years_of_experience} years</span>
        </p>
        <p className="text-md mb-5">
          Total Recipes:{" "}
          <span className="font-semibold">{num_recipes} items</span>
        </p>
        <Link
          to={"/"}
          className="px-3 py-1 border border-amber-300 hover:bg-amber-500 hover:text-white hover:underline underline-offset-4 duration-200 rounded-md"
        >
          View Recipes
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;
