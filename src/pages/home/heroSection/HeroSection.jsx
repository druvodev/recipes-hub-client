import React from "react";

const Hero = () => {
  return (
    <div className="h-screen sm:h-[700px] relative rounded-b flex items-center bg-cover bg-center bg-blend-darken bg-[url('https://yti.edu/sites/default/files/styles/blogfeature_large/public/field/image/Common-Skills-Needed-to-be-a-Chef.jpg?itok=L2nowuxH')]">
      <div className="bg-black opacity-40 h-full w-full absolute"></div>
      <div className="sm:w-2/3 p-5 sm:pl-10 z-10 text-center mx-auto">
        <h2 className="text-4xl sm:text-6xl font-bold text-white ">
          Welcome & Enjoy <br /> World-Class Cuisine Recipes
        </h2>
        <p className="text-slate-400 text-xl sm:text-2xl mt-5">
          Family Dinner, date night, brunches, parties, get-togethers and even
          meals for the entire week.
        </p>
        <button className="mt-10 px-3 py-2 hover:bg-amber-500 border border-amber-500 text-white text-2xl shadow shadow-amber-500">
          SEE OUR RECIPES
        </button>
      </div>
    </div>
  );
};

export default Hero;
