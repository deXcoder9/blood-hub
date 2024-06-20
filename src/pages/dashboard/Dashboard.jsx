import {  NavLink, Outlet } from "react-router-dom";
import useSpecifiedDOnorData from "../../hooks/useSpecifiedDOnorData";
import useAuth from "../../hooks/use auth/useAuth";
import useUserdata from "../../hooks/use user data/useUserdata";


const Dashboard = () => {
    const {userInfo} = useAuth()
    const [userDetails] = useUserdata()
    const [recentReq] = useSpecifiedDOnorData()
    const openPopUp = () => {
        setTimeout(() => {
            document.getElementById('my_modal_3').showModal();
        }, 500);
    }

    openPopUp()
    return (
        <div>
            <div  className="">
                <dialog  id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div>
                            WELCOME <p className="uppercase text-4xl">{userInfo?.displayName}</p>
                        </div>
                    </div>
                </dialog>
            </div>

        <div className="flex">
            <div className="">
       
                {/* a d m i n */}
        {
           userDetails.role ==="admin"  && <div>
                <ul className="bg-gray-400 pl-10 pr-7 space-y-3">
                    <li>
                    <NavLink to="/dashboard/admin-home">
                        Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/all-users">
                        Total Users
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/all-blood-donation-request">
                        Total Donation Requests
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/content-management">
                        Content Management
                    </NavLink>
                    </li>
                </ul>

            </div>

            
        }
        {/* d o n o  r */}
        {
           userDetails.role === "donor" && <ul className="bg-gray-400 pl-10 pr-7 space-y-3">
           {
            recentReq.length > 0 &&  <li>
            <NavLink to="/dashboard/donor-home">
                Home
            </NavLink>
            </li>
           }
            <li>
            <NavLink to="/dashboard/create-donation-request">
                Create Donation Requests
            </NavLink>
            </li>
            <li>
            <NavLink to="/dashboard/my-donation-requests">
                My Donation Requests({recentReq.length})

            </NavLink>
            </li>
        </ul>
        }
        {/* Volunteer */}
        {
           userDetails.role === "volunteer" &&  <ul className="bg-gray-400 pl-10 pr-7 space-y-3">
            {
             recentReq.length > 0 &&  <li>
             <NavLink to="/dashboard/volunteer-home">
                 Home
             </NavLink>
             </li>
            }
             <li>
             <NavLink to="/dashboard/volunteer-all-blood-donation-request">
                 All Donation Requests
             </NavLink>
             </li>
             <li>
             <NavLink to="/dashboard/content-management-volunteer">
                 Content Management
             </NavLink>
             </li>
         </ul>
        }

        <hr />
        <ul className="mt-20">
            <li className="pl-10 bg-gray-400  py-2">
                <NavLink to="/" >
                    Home
                </NavLink>
            </li>
            <li className="pl-10 bg-gray-400  py-2">
                <NavLink to="/dashboard/profile" >
                    Profile
                </NavLink>
            </li>
        </ul>
            </div>
            <div className=" flex-1 max-w-[1200px]  mt-20 ml-16 " >
                <Outlet />
            </div>


            
        </div>
        </div>
    );
};

export default Dashboard;