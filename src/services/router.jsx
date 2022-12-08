import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello Home!</div>,
        errorElement: <div>Error!</div>,
    },
    {
        path: "/account",
        element: <div>Hello Account!</div>,
    },
    {
        path: "/account/create",
        element: <div>Hello Create!</div>,
    },
    {
        path: "/account/login",
        element: <div>Hello Login!</div>,
    },
    {
        path: "/account/orders",
        element: <div>Hello Orders!</div>,
    },
    {
        path: "/account/settings",
        element: <div>Hello Settings!</div>,
    },
    {
        path: "/account/wishlist",
        element: <div>Hello Wishlist!</div>,
    },
    {
        path: "/cart",
        element: <div>Hello Cart!</div>,
    },
    {
        path: "/checkout",
        element: <div>Hello Checkout!</div>,
    },
    {
        path: "/recipes",
        element: <div>Hello Recipes!</div>,
    },
    {
        path: "/recipes/:recipeId",
        element: <div>Hello Single Recipe!</div>,
    },
]);

export default router;