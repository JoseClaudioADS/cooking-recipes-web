import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/main";
import { Home } from "./pages/home";
import { ManageRecipe } from "./pages/manage-recipe";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { UserAccount } from "./pages/user-account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/manage-recipe",
        element: <ManageRecipe />,
      },
      {
        path: "/user-account",
        element: <UserAccount />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default router;
