import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/use auth/useAuth";

const Navbar = () => {
  const { userInfo, logOut } = useAuth();
  console.log(userInfo);

  const navLinks = <>
      <li>
        <NavLink to="/">Home </NavLink>
      </li>
      <li>
        <NavLink to="/donationRequests"> Donation Requests</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog </NavLink>
      </li>
  </>

  const handleLogOut = () =>{
    logOut()
    .then(()=>{
      alert("Logged Out Successfully")
    })
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold ">
          blood.<span className="-ml-1 text-red-400 ">hub</span>{" "}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {userInfo?.email ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div
                title={`${userInfo.displayName}`}
                className="w-10 rounded-full"
              >
                <img
                  alt="Tailwind CSS Navbar component"
                  src={userInfo.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li  >
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                Dashboard
                </Link>
              </li>
              <li onClick={handleLogOut}> 
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-outline btn-ghost rounded-md ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
