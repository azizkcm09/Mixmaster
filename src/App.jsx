import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  HomeLayout,
  Landing,
  Newsletter,
  Coctail,
  Error,
} from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
