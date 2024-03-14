import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayouts from "./layouts/RootLayouts";
import Home from "./pages/Home";
import { Flowbite } from "flowbite-react";
import Admins from "./pages/Admins";
import Categories from "./pages/Categories";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import { useTranslation } from "react-i18next";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayouts />,
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
  ]);
  return (
    <Flowbite>
      <RouterProvider router={routes} />;
    </Flowbite>
  );
}

export default App;
