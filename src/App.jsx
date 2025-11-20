import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  HomeLayout,
  Landing,
  Newsletter,
  Coctail,
  Error,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoader,
        },
        {
          path: "/coctail",
          element: <Coctail />,
        },
        {
          path: "/newsletter",
          element: <Newsletter />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
