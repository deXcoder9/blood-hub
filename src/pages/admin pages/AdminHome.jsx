import { FaHandHoldingHeart, FaUsers } from "react-icons/fa";


const AdminHome = () => {
    return (
        <div className="mt-20 ml-12 grid grid-cols-2  space-x-10">
            <div className="py-10 border-[1px] px-20 rounded-md grid place-items-center">
                <FaUsers className="text-red-700 text-7xl" />
                <h1 className="font-extrabold text-3xl">242342</h1>
                <p>Total Users</p>
            </div>
            <div className="py-10 border-[1px] px-20 rounded-md grid place-items-center">
                <FaHandHoldingHeart  className="text-red-700 text-7xl" />
                <h1 className="font-extrabold text-3xl">242342</h1>
                <p>Total Donatin Requests</p>
            </div>
        </div>
    );
};

export default AdminHome;