
import useAuth from '../../hooks/use auth/useAuth';
import useUserdata from '../../hooks/use user data/useUserdata';
import './ProfileCard.css';

const Profile = () => {
  const {userInfo} = useAuth()
  // console.log(userInfo)
    const {userData}= useUserdata()

    const handleUpdateProfile = () =>{
      
    }
    

    return (
        <div className=" grid place-items-center mt-20">
        <div className="card p-4">
           <div className="image flex flex-col justify-center items-center ">
            {/* <h1>{userData.length}</h1> */}
           <button className="btnSS bg-black btn-secondary grid place-items-center">
              <img src={userInfo?.photoURL} className='rounded-full' height="100" width="100" alt="Profile" />
            </button> <br />
            <span className="name ">{userInfo?.displayName}</span>
            <br />
            <span className="idd">{userInfo?.email}</span>
            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
              <span className="number">1069 <span className="follow">Followers</span></span>
            </div>
            <div className="d-flex mt-2">
              <button onClick={handleUpdateProfile} className="btn1 btn-dark">Edit Profile</button>
            </div>
            {
              userData?.map(data => <div key={data._id} className="text mt-3">
                <h6>Status: {data.status }</h6>
              <h6>BloodGroup: {data.bloodGroup}</h6>
              <h6>Districta: {data.district}</h6>
              <h6>upazila: {data.upazilla}</h6>
              
            </div> )
            }
            
            
            <div className="px-2 rounded mt-4 date">
              <span className="join">Joined May, 2021</span>
            </div>
          </div>
        </div>
      </div>
  
    );
};

export default Profile;