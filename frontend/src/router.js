import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import Cart from "./pages/Cart";
import Shipping from "./pages/Shipping";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CategoryShop from "./pages/CategoryShop";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/shops",
    Component: Shops,
  },

  {
    path: "/cart",
    Component: Cart,
  },
  {
    path: "/shipping",
    Component: Shipping,
  },
  {
    
    path: "/product/details/:slug",
    Component: Details,
  },
  {
    
    path: "/products/?",
    Component: CategoryShop,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);

export default router;
