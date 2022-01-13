import React from "react";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  return (
    <div className="profileDropdown__container">
      <div className="profileDropdown__list">
        <div className="profileList__item profile--name">Name</div>
        <div className="profileList__item profile--create">Create Post</div>
        <div className="profileList__item profile--saved">Saved Project</div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
