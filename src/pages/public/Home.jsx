import ContactUs from "../home page/contact us/ContactUs";
// import Featured from "../home page/featured sec/Featured";
import Heading from "../home page/heading/Heading";
import About from "./About";

const Home = () => {
    return (
        <div>
            <Heading></Heading>
            <About></About>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;