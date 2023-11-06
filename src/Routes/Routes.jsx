import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FeaturedFoods from "../Pages/FeaturedFoods/FeaturedFoods";
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
          element:<FeaturedFoods></FeaturedFoods>,
          // loader: () => fetch('foods.json')
        }
      ]
    },
  ]);
  export default routes;