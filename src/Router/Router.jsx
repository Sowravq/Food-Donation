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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Manage from "../components/Manage/Manage";
import Update from "../components/Update/Update";
 
   

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
        element:<PrivateRoute><AddFood></AddFood></PrivateRoute> 
      },
      {
        path:'/manageMyFoods',
        element:<PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>
      },
      {
        path:'/myFoodRequest',
        element:<PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>
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
        element:<PrivateRoute><SingleFood></SingleFood></PrivateRoute>,
        loader:({params})=>fetch(`https://food-donation-and-collect-server.vercel.app/foods/${params.id}`)
      },
      {
        path:'/update/:id',
      element:<Update></Update>,
        loader:({params})=>fetch(`https://food-donation-and-collect-server.vercel.app/foods/${params.id}`)
      
      },
      {
        path:'/manage/:foodId',
        element:<Manage></Manage>,
        loader:({params})=>fetch(`https://food-donation-and-collect-server.vercel.app/requests/${params.foodId}`)
      }

    ]
    },
  ]);
  export default router;