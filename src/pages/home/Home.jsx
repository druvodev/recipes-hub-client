import React from "react";
import Hero from "./heroSection/HeroSection";
import ChefSection from "./chefSection/ChefSection";
import CateringSection from "./cateringSection/CateringSection";
import PopularRecipes from "./popularRecipes/PopularRecipes";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <ChefSection></ChefSection>
      <CateringSection></CateringSection>
      <PopularRecipes></PopularRecipes>
    </div>
  );
};

export default Home;
