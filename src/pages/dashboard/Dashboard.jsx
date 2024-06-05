import { Link, NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const role = "donor";

    return (
        <div className="flex">
            <div>
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
            <NavLink to="/totaldonationrequests">
                Total Donation Requests
            </NavLink>
            </li>
        </ul>
        }
        {
            role === "volunteer" && <p> Im volunteer </p>
        }
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;