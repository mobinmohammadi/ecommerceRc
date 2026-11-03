import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);


export default router
