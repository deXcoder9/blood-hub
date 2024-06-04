import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/authentication/login/Login";
import Signup from "../pages/authentication/signup/Signup";
import Profile from "../pages/profile page/Profile";
import Body from "../layout/Body";
import Dashboard from "../pages/dashboard/Dashboard";
import AllUsers from "../pages/admin pages/AllUsers";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Body></Body>   , 
      children:[
      ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/signup",
        element: <Signup></Signup>
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children:[
        {
          path: 'profile',
          element: <Profile></Profile>
        },
        {
          path: "all-users",
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);