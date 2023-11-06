import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FeaturedFoods from "../Pages/FeaturedFoods/FeaturedFoods";
import Volunter from "../Pages/Home/Volunter/Volunter";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFood from "../Pages/AddFood/AddFood";
import ManageFoods from "../Pages/ManageFoods/ManageFoods";
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/featuredFoods',
          element:<FeaturedFoods></FeaturedFoods>
        },
        {
          path:'/about',
          element:<Volunter></Volunter>
        },
        {
          path:'/availableFoods',
          element:<AvailableFoods></AvailableFoods>
        },
        {
          path:'/addFood',
          element:<AddFood></AddFood>
        },
        {
          path:'/manageFoods',
          element:<ManageFoods></ManageFoods>
        }
      ]
    },
  ]);
  export default routes;