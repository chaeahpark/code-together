import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  return (
    <div className="profileDropdown__container">
      <div className="profileDropdown__list">
        {/* add Link on each item */}
        <Link to="/myprofile" style={{ textDecoration: "none" }}>
          <div className="profileList__item profile--name">My Profile</div>
        </Link>
        <Link to="/addpost" style={{ textDecoration: "none" }}>
          <div className="profileList__item profile--create">Create Post</div>
        </Link>
        <div className="profileList__item profile--saved">Saved Project</div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
