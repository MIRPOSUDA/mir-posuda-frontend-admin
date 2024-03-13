import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayouts from "./layouts/RootLayouts";
import Home from "./pages/Home";
import { Flowbite } from "flowbite-react";
import Admins from "./pages/Admins";
import Categories from "./pages/Categories";
import Statistics from "./pages/Statistics";
import Sales from "./pages/Sales";
import Earn from "./pages/Earn";

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
          path: "/statistics/:route",
          element: <Statistics />,
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
