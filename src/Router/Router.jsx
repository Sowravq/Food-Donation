import {
    createBrowserRouter
     
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import Login from "../Pages/Login/Login";
   

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
        path:'/',
        element:<Home></Home>
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
        path:'/manageMyFoods',
        element:<ManageMyFoods></ManageMyFoods>
      },
      {
        path:'/myFoodRequest',
        element:<MyFoodRequest></MyFoodRequest>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
    },
  ]);
  export default router;