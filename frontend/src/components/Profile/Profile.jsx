import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import profileimg from "./profile.png";
import "./profile.css";
import { AuthContext } from "../../context/AuthContext";


const Profile = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className="profile animate__animated animate__fadeInDown">
      <Navbar />
      <div className="profilecard container animate__animated animate__fadeInDown">
        <div className="left">
          <div className="profileimg">
            <img src={profileimg} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="toprow">
            <div className="username">
              <label htmlFor="username">Username</label>
              <p className="profiletext">{user.username}</p>
            </div>
            <div className="mailaddress">
              <label htmlFor="mail">Email</label>
              <p className="profiletext">{user.email}</p>
            </div>
          </div>
          <div className="secondrow">
            <div className="mobileno">
              <label htmlFor="mobileno">Mobile no.</label>
              <p className="profiletext">+91-{user.phone}</p>
            </div>
            {/* <div className="address">
              <label htmlFor="address">Address</label>
              <p className="profiletext">PICT Canteen </p>

            </div> */}
          </div>
          {/* <div className="lastrow">
            <button> 
            <i class="fa-solid fa-pen"></i>

            </button>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Profile;
