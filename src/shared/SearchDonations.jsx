import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/axios public/useAxiosPublic";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { RiUserHeartLine } from "react-icons/ri";

const SearchDonations = () => {
    const axiosPublic = useAxiosPublic()
  const { register, handleSubmit } = useForm();
  const [searchedRequests,setSearchedRequests] = useState([])
  const onSubmit = (info) => {
    console.log(info)
    // axiosPublic.get(`/getsearcheddonations?bloodgroup=${info.bloodGroup}&district=${info.district}&upazilla=${info.upazilla}`)
    axiosPublic.post(`/getsearcheddonations` , info )
    .then(response =>{
        console.log(response.data)
        setSearchedRequests(response.data)
    } )
  };

  console.log(searchedRequests)

  return (
    <div className="max-w-[1200px] mx-auto  ">
      <form onSubmit={handleSubmit(onSubmit)} className=" grid grid-cols-4  place-items-center" >
        <div className="from-control">
          <label className="label">
            <span className="label-text">Blood Group+</span>
          </label>
          <select
            defaultValue="default"
            {...register("bloodGroup", { required: true })}
            className=" w-full input input-bordered"
          >
            <option disabled value="default">
              select your blood type
            </option>
            <option value="o+">O+</option>
            <option value="o-">O-</option>
            <option value="a+">A+</option>
            <option value="a-">A-</option>
            <option value="b+">B+</option>
            <option value="b-">B-</option>
            <option value="ab+">AB+</option>
            <option value="ab-">AB-</option>
          </select>
        </div>
        <div className="from-control">
          <label className="label">
            <span className="label-text">District:</span>
          </label>
          <select
            defaultValue="default"
            {...register("district", { required: true })}
            className=" w-full input input-bordered"
          >
            <option disabled value="default">
              select your district
            </option>
            <option value="bagerhat">Bagerhat</option>
            <option value="kushtia">Kushtia</option>
          </select>
        </div>

        <div className="from-control">
          <label className="label">
            <span className="label-text">Upazilla</span>
          </label>
          <select
            defaultValue="default"
            {...register("upazilla", { required: true })}
            className=" w-full input input-bordered"
          >
            <option disabled value="default">
              select your upazila
            </option>
            <option value="bagerhatSadar">Bagerhat Sadar</option>
            <option value="chitalmari">Chitalmari</option>
          </select>
        </div>
        <button className="btn mt-8 btn-primary btn-outline ">
        <input type="submit" value="Search" className="" /> <FaArrowRightLong />
        </button>
      </form>

      <div className="mt-20 grid place-items-center">
      {searchedRequests.length === '[]' && 
      <h1 className="text-3xl text-red-700">there are no blood donation available! </h1>
      }

      <div className="grid lg:grid-cols-3 grid-cols-1  space-x-4">
      {
        searchedRequests.map((item) => {
          return (
            <div key={item._id} className="mt-10 border-[1px] px-14 py-10 rounded-md grid place-items-center">
              <RiUserHeartLine className="text-4xl" />
              <h1 className="font-extrabold text-3xl pt-4">{item.name}</h1>
              <p>Blood Group: {item.bloodGroup}</p>
              <p>District: {item.district}</p>
              <p>Upazilla: {item.upazilla}</p>
            </div>
          );
          })
          }
        </div>

      </div>
    </div>
  );
};

export default SearchDonations;
