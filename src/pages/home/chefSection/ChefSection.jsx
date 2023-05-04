import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const ChefSection = () => {
  const [chef, setChef] = useState([]);
  useEffect(() => {
    fetch("https://chef-recipes-hut-prodipdev.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="mt-10 px-5 sm:px-10">
      <h2 className="text-3xl font-bold text-center">Popular Chef</h2>
      <p className="text-lg text-center mt-2">GOOD FOOD || GOOD LIFE</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
        {chef.map((chefBio) => (
          <ChefCard key={chefBio.chef_id} chef={chefBio}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default ChefSection;
