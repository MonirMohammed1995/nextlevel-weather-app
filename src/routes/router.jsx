import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Weather from "../pages/Weather";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
          path: "/weather",
          element: <Weather/>
        }
    ]
  },
]);