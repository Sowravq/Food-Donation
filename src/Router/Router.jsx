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
import SingUp from "../Pages/SingUp/SingUp";
import SingleFood from "../components/SingleFood/SingleFood";
   

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
      },
      {
        path:'/singUp',
        element:<SingUp></SingUp>
      },
      {
        path:'/singleFood/:id',
        element:<SingleFood></SingleFood>,
        loader:({params})=>fetch(`http://localhost:4000/foods/${params.id}`)
      }
    ]
    },
  ]);
  export default router;