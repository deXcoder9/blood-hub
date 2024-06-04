
import ContactUs from "../pages/home page/contact us/ContactUs";
import Featured from "../pages/home page/featured sec/Featured";
import Heading from "../pages/home page/heading/Heading";
import Navbar from "../shared/navbar/Navbar";
// import Footer from "../shared/footer/Footer";

const Body = () => {
    return (
        <>
        <Navbar></Navbar>
        {/* <Footer></Footer> */}
        <Heading></Heading>
        <Featured></Featured>
        <ContactUs></ContactUs>
        </>
    );
};

export default Body;