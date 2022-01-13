import React from "react";
import { Link } from "react-router-dom";
import { useProfile } from "../contexts/ProfileContext";

const ProfileDropdown = () => {
  const { toggle, changeToggle } = useProfile();

  return (
    <div className="profileDropdown__container">
      <div className="profileDropdown__list">
        {/* add Link on each item */}
        <div className="profileList__item profile--name">My Profile</div>
        <div className="profileList__item profile--create">Create Post</div>
        <div className="profileList__item profile--saved">Saved Project</div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
