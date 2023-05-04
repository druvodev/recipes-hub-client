import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { scrollTop } from "../../../utils/utils";

const ChefCard = ({ chef }) => {
  const {
    chef_id,
    chef_name,
    years_of_experience,
    num_recipes,
    likes,
    picture,
  } = chef;
  const { setChef } = useContext(AuthContext);
  return (
    <div className="w-full shadow-sm shadow-amber-200 pb-5 rounded-md text-gray-800">
      <div className="h-56 lg:h-60 xl:h-72 w-full rounded-t-md relative">
        <LazyLoadImage
          src={
            picture ||
            "https://i.ibb.co/6H8F3BW/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
          }
          className="w-full h-full rounded-t-md"
          alt="Chef Avatar"
        />
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
          to={`/chef/${chef_id}`}
          onClick={() => {
            setChef(chef), scrollTop();
          }}
          className="px-3 pt-1 pb-2 border border-amber-300 hover:bg-amber-500 hover:text-white hover:underline underline-offset-4 duration-200 rounded-md"
        >
          View Recipes
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;
