import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import RecipeDetails from "../pages/recipeDetails/RecipeDetails";
import ChefRecipes from "../pages/chefRecipes/ChefRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chef/:id",
        element: <ChefRecipes></ChefRecipes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetails></RecipeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipe/${params.id}`),
      },
    ],
  },
]);

export default router;
