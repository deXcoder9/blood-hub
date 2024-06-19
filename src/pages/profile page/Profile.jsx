import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/axios secure/useAxiosSecure";
import useUserdata from "../../hooks/use user data/useUserdata";
import "./ProfileCard.css";
import { useForm } from "react-hook-form";

const Profile = () => {
  const [userDetails] = useUserdata();
  // console.log(userDetails);
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axiosSecure
      .patch(`/updateuserprofile/${userDetails._id}`, data)
      .then((res) => {
        // console.log(res.data)
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1000
          });
        }
      });
  };

  return (
    <div className=" grid place-items-center ml-28 mt-20">
      <div className=" p-4">
        <div className="image flex flex-col justify-center items-center ">
          {/* <h1>{userData.length}</h1> */}
          <button className=" grid place-items-center">
            <img
              src={userDetails.photourl}
              className="rounded-full"
              height="100"
              width="100"
              alt="Profile"
            />
          </button>{" "}
          <br />
          <span className="name ">{userDetails?.name}</span>
          <br />
          <span className="idd">{userDetails?.email}</span>
          <div className="d-flex flex-row justify-content-center align-items-center mt-3">
            <span className="number">
              1069 <span className="follow">Followers</span>
            </span>
          </div>
          <div className="d-flex mt-2">
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className="btn1 btn-dark"
            >
              Edit Profile
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col space-y-2 max-w-[300px] mx-auto"
                >
                  <input
                    className="border-[1px] border-black py-[2px] pl-2"
                    placeholder="name"
                    {...register("name")}
                    required
                  />
                  <input
                    className="border-[1px] border-black py-[2px] pl-2"
                    placeholder="image"
                    {...register("image")}
                    required
                  />
                  <input
                    className="border-[1px] border-black py-[2px] pl-2"
                    placeholder="bloodgroup"
                    {...register("bloodgroup")}
                    required
                  />
                  <input
                    className="border-[1px] border-black py-[2px] pl-2"
                    placeholder="district"
                    {...register("district")}
                    required
                  />
                  <input
                    className="border-[1px] border-black py-[2px] pl-2"
                    placeholder="upazila"
                    {...register("upazila")}
                    required
                  />
                  <input type="submit" className="bg-primary text-white py-2" />
                </form>
              </div>
            </dialog>
          </div>
          <div className="text mt-3">
            <h6>Status: {userDetails?.status}</h6>
            <h6>BloodGroup: {userDetails?.bloodGroup}</h6>
            <h6>Districta: {userDetails?.district}</h6>
            <h6>upazila: {userDetails?.upazilla}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
