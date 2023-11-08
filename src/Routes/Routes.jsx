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
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Ragistration";
import PrivateRoute from "./PrivateRoute";
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
          element:<PrivateRoute><AddFood></AddFood></PrivateRoute>,
        },
        {
          path:'/manageFoods',
          element:<PrivateRoute><ManageFoods></ManageFoods></PrivateRoute>,
          loader: () => fetch('https://community-food-bridge-server-ks8ciir7q.vercel.app/food')
        },
        {
          path:'/foodDetail/:id',
          element:<FoodDetails></FoodDetails>,
          loader: ({params}) => fetch(`https://community-food-bridge-server-ks8ciir7q.vercel.app/foods/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Registration></Registration>
      }
      ]
    },
  ]);
  export default routes;