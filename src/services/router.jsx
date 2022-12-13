import { createBrowserRouter } from "react-router-dom";

// Top-level routes.
import HomePage from "../pages/Home";
import CartPage from "../pages/Cart";
import CheckoutPage from "../pages/Checkout";

// Account routes.
import AccountDashboardPage from "../pages/Account/pages/Dashboard";
import AccountCreatePage from "../pages/Account/pages/Create";
import AccountLoginPage from "../pages/Account/pages/Login";
import AccountOrderListPage from "../pages/Account/pages/Orders/pages/List";
import AccountSingleOrderPage from "../pages/Account/pages/Orders/pages/Single";
import AccountSettingsPage from "../pages/Account/pages/Settings";
import AccountWishlistPage from "../pages/Account/pages/Wishlist";

// Recipe routes.
import { getAllRecipes, getSingleRecipe } from "./recipe"
import RecipeListPage from "../pages/Recipes/pages/List";
import SingleRecipePage from "../pages/Recipes/pages/Single";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <div>Error!</div>,
    },
    {
        path: "/account",
        element: <AccountDashboardPage />,
    },
    {
        path: "/account/create",
        element: <AccountCreatePage />,
    },
    {
        path: "/account/login",
        element: <AccountLoginPage />,
    },
    {
        path: "/account/orders",
        element: <AccountOrderListPage />,
    },
    {
        path: "/account/orders/:orderId",
        element: <AccountSingleOrderPage />,
    },
    {
        path: "/account/settings",
        element: <AccountSettingsPage />
    },
    {
        path: "/account/wishlist",
        element: <AccountWishlistPage />,
    },
    {
        path: "/cart",
        element: <CartPage />,
    },
    {
        path: "/checkout",
        element: <CheckoutPage />,
    },
    {
        path: "/recipes",
        element: <RecipeListPage />,
        loader: getAllRecipes,
    },
    {
        path: "/recipes/:recipeId",
        element: <SingleRecipePage />,
        loader: getSingleRecipe,
    },
]);

export default router;