import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
