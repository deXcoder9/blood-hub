import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
// import Footer from "../shared/footer/Footer";

const body = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet />
        {/* <Footer></Footer> */}
        </>
    );
};

export default body;