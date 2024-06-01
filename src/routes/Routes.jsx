import { createBrowserRouter } from "react-router-dom";
import Body from "../layout/Body";
import Login from "../pages/authentication/login/Login";
import Signup from "../pages/authentication/signup/Signup";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Body></Body>,
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
    }
  ]);