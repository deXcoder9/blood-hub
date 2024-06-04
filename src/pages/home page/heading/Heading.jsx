import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div className="flex justify-center items-center my-10 space-x-7 ">
      <Link to="/signup">
        <button className="btn text-4xl btn-primary btn-outline px-10">
          Join As a Donor{" "}
        </button>
      </Link>
      <button className="btn btn-primary text-3xl px-10">Search</button>
    </div>
  );
};

export default Heading;
