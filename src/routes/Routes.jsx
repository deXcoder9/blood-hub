import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/authentication/login/Login";
import Signup from "../pages/authentication/signup/Signup";
import Profile from "../pages/profile page/Profile";
import Body from "../layout/Body";
import Dashboard from "../pages/dashboard/Dashboard";
import AllUsers from "../pages/admin pages/AllUsers";
import AdminHome from "../pages/admin pages/AdminHome";
import CreateDonation from "../pages/donor pages/CreateDonation";
import DonationRequests from "../pages/donor pages/DonationRequests";
import DRDetails from "../shared/donation req details/DRDetails";
import UpdateDonation from "../shared/update donation req/UpdateDonation";
import DonorHome from "../pages/donor pages/DonorHome";
import TotalDonationRequests from "../pages/admin pages/TotalDonationRequests";
import VolunteerHome from "../pages/volunteer pages/VolunteerHome";
import VolunterDonationReq from "../pages/volunteer pages/VolunterDonationReq";

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
        },
        {
          path: "admin-home",
          element: <AdminHome></AdminHome>
        },
        {
          path: "create-donation-request",
          element:<CreateDonation></CreateDonation>
        },
        {
          path: "my-donation-requests",
          element: <DonationRequests></DonationRequests>
        },
        {
          path: "donor-home",
          element: <DonorHome></DonorHome>
        },
        {
          path: "all-blood-donation-request",
          element: <TotalDonationRequests></TotalDonationRequests>
        },
        {
          path: "volunteer-home",
          element: <VolunteerHome></VolunteerHome>
        },
        {
          path: "volunteer-all-blood-donation-request",
          element: <VolunterDonationReq></VolunterDonationReq>
        },
        
      ]
    },
    {
      path:"/donation-request-details/:id",
      element: <DRDetails></DRDetails>
    },
    {
      path:"/update-donation-request/:id",
      element: <UpdateDonation></UpdateDonation>
    }
  ]);