import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import Cart from "./pages/Cart";

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
]);


export default router
