
import useUserdata from "../../hooks/use user data/useUserdata";
import "./ProfileCard.css";

const Profile = () => {
  const { userData } = useUserdata();

  const handleUpdateProfile = () => {};

  // console.log(userData)
  // const {
  //   photourl,
  //   bloodGroup,
  //   district,
  //   email,
  //   name,
  //   role,
  //   status,
  //   upazilla,
  // } = userData;

  return (
    <div className=" grid place-items-center ml-28 mt-20">
      <div className=" p-4">
        <div className="image flex flex-col justify-center items-center ">
          {/* <h1>{userData.length}</h1> */}
          <button className=" grid place-items-center">
            <img src={userData?.photourl} className='rounded-full' height="100" width="100" alt="Profile" />
          </button>{" "}
          <br />
          <span className="name ">{userData?.name}</span>
          <br />
          <span className="idd">{userData?.email}</span>
          <div className="d-flex flex-row justify-content-center align-items-center mt-3">
            <span className="number">
              1069 <span className="follow">Followers</span>
            </span>
          </div>
          <div className="d-flex mt-2">
            <button onClick={handleUpdateProfile} className="btn1 btn-dark">
              Edit Profile
            </button>
          </div>
          <div className="text mt-3">


          


                {/* <h6>Status: {userData?.status }</h6>
              <h6>BloodGroup: {userData?.bloodGroup}</h6>
              <h6>Districta: {userData?.district}</h6>
              <h6>upazila: {userData?.upazilla}</h6> */}
              
            </div> 
          <div className="px-2 rounded mt-4 date">
            <span className="join">Joined May, 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
