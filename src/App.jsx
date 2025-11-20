import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  HomeLayout,
  Landing,
  Newsletter,
  Coctail,
  Error,
  SinglePageError,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
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
          errorElement: <SinglePageError />,
          loader: landingLoader,
        },
        {
          path: "/coctail/:id",
          element: <Coctail />,
          errorElement: <SinglePageError />,
          loader: singleCocktailLoader,
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
