import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Products from "../Components/Products";
import ProductDetails from "../Pages/ProductDetails";
import CartItem from "../Components/CartItems";
import CartItems from "../Components/CartItems";
import WishItems from "../Components/WishItems";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <p>Nothing to see</p>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <Products></Products>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:categoryId",
            element: <Products></Products>,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/product/:productId",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "cart",
            element: <CartItems></CartItems>,
          },
          {
            path: "wishlist",
            element: <WishItems></WishItems>,
          },
        ],
      },
    ],
  },
]);

export default routes;
