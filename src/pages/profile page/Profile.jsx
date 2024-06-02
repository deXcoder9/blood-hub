import useAuth from '../../hooks/use auth/useAuth';
import './ProfileCard.css';

const Profile = () => {
    const {userInfo} = useAuth()
    const {email, displayName,} = userInfo
    return (
        <div className=" grid place-items-center mt-20">
        <div className="card p-4">
          <div className="image flex flex-col justify-center items-center ">
            <button className="btnSS bg-black btn-secondary grid place-items-center">
              <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" alt="Profile" />
            </button> <br />
            <span className="name ">{displayName}</span>
            <br />
            <span className="idd">{email}</span>
            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
              <span className="number">1069 <span className="follow">Followers</span></span>
            </div>
            <div className="d-flex mt-2">
              <button className="btn1 btn-dark">Edit Profile</button>
            </div>
            <div className="text mt-3">
              <span>
                Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.<br /><br />
                Artist/ Creative Director by Day #NFT minting@ with FND night.
              </span>
            </div>
            <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
              <span><i className="fa fa-twitter"></i></span>
              <span><i className="fa fa-facebook-f"></i></span>
              <span><i className="fa fa-instagram"></i></span>
              <span><i className="fa fa-linkedin"></i></span>
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