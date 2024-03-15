import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RootLayouts from "./layouts/RootLayouts";
import Home from "./pages/Home";
import { Flowbite } from "flowbite-react";
import Admins from "./pages/Admins";
import Categories from "./pages/Categories";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import { t } from "i18next";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./layouts/ProtectedRoutes";

function App() {
  document.title = t("siteTitle");
  const { user } = useSelector((state) => state.userSlice);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <RootLayouts />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/admins",
          element: <Admins />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/statistics",
          element: <Statistics />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
  ]);

  return (
    <Flowbite>
      <RouterProvider router={routes} />;
    </Flowbite>
  );
}

export default App;
