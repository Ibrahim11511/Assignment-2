import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AllCars from "./Components/All Cars Page/AllCars";
import SingleCar from "./Components/Single Car Page/SingleCar";
import MainPage from "./Components/Main Page/MainPage";
import Root from "./Components/Root/Root";
import "@fontsource/poppins";
import SinglePageRoot from "./Components/All Cars Page/SinglePageRoot/SinglePageRoot";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: "cars",
          element: <SinglePageRoot />,
          children: [
            {
              index: true,
              element: <AllCars />,
            },
            {
              path: "cars",
              element: <AllCars />,
            },
            {
              path: ":IDCar",
              element: <SingleCar />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
