import { createBrowserRouter } from "react-router-dom";

// Top-level routes.
import HomePage from "../pages/Home";
import CartPage from "../pages/Cart";
import ErrorPage from "../pages/Error";

import { getAllRestaurants } from "./restaurant";
import RestaurantsPage from "../pages/Restaurants";

// Recipe routes.
import { getAllRecipes, singleRecipeLoader } from "./recipe";
import RecipeListPage from "../pages/Recipes/pages/List";
import SingleRecipePage from "../pages/Recipes/pages/Single";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/cart",
        element: <CartPage />,
    },
    {
        path: "/recipes",
        element: <RecipeListPage />,
        loader: getAllRecipes,
    },
    {
        path: "/recipes/:recipeId",
        element: <SingleRecipePage />,
        loader: singleRecipeLoader,
    },
    {
        path: "/restaurants",
        element: <RestaurantsPage />,
        loader: getAllRestaurants,
    },
]);

export default router;