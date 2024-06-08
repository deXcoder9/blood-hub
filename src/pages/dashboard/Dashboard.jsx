import { Link, NavLink, Outlet } from "react-router-dom";
import useDonationReq from "../../hooks/useDonationReq";


const Dashboard = () => {
    const role = "donor";

    const [requests] = useDonationReq()



    return (
        <div className="flex">
            <div className="">
        <Link to="/dashboard/profile">
        <button className="btn">Pfp</button>
        </Link>
                {/* a d m i n */}
        {
            role ==="admin"  && <div>
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
                    <NavLink to="/totaldonationrequests">
                        Total Donation Requests
                    </NavLink>
                    </li>
                </ul>

            </div>

            
        }
        {/* d o n o  r */}
        {
            role === "donor" && <ul className="bg-gray-400 pl-10 pr-7 space-y-3">
            <li>
            <NavLink to="/dashboard/admin-home">
                Home
            </NavLink>
            </li>
            <li>
            <NavLink to="/dashboard/create-donation-request">
                Create Donation Requests
            </NavLink>
            </li>
            <li>
            <NavLink to="/dashboard/my-donation-requests">
                My Donation Requests({requests.length})

            </NavLink>
            </li>
        </ul>
        }
        {
            role === "volunteer" && <p> Im volunteer </p>
        }
            </div>
            <div className=" max-w-[1200px] mt-20 ml-16 " >
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;