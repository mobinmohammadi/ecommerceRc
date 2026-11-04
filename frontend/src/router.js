import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Shops from "./pages/Shops";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/shops",
    Component: Shops,
  },
]);


export default router
