import React from "react";
import "./profile.css";

const Profile = (props) => {
  const { userDetails } = props;
  return (
    <div className="profile">
      <img src={userDetails.imgUrl} alt="img" />
      <div className="profile-content">
        <h3>{userDetails.name}</h3>
        <p>{userDetails.role}</p>
      </div>
    </div>
  );
};

export default Profile;
