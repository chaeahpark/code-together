import React from "react";
import profileDefault from "../../assets/images/profileDefault.png";

const MyProfile = () => {
  return (
    <div className="myProfile-container">
      <div className="myProfile-wrapper">
        <h2 className="myProfile-header">My profile</h2>
        <div className="myProfile-image">
          <div className="image-display">
            {/* add default image */}
            <img className="image-updated" src={profileDefault} alt="" />
            <div className="image-control">
              <label htmlFor="">
                Choose image
                <input
                  className="image-btn__choose"
                  type="file"
                  accept="image/*"
                />
              </label>
              <button className="image-btn__delete">Delete image</button>
            </div>
          </div>
        </div>
        <div className="myProfile-name">
          <div className="myProfile-nameForm">
            <h3>Name</h3>
            <input type="text" />
          </div>
          <p>Your name appears publically on the website.</p>
        </div>
        <div className="myProfile-resetPassword">
          <h3>Reset password</h3>
          <button>Send password reset email</button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
