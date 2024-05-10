import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/main";
import { Recipe } from "./recipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Recipe></Recipe>,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <h1>Sign In</h1>,
  },
  {
    path: "/sign-up",
    element: <h1>Sign Up</h1>,
  },
]);

export default router;
