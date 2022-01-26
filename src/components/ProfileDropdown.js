import { useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  let navigate = useNavigate();

  const handleMyProfileClick = () => {
    navigate("/myprofile", { replate: true });
  };

  return (
    <div className="profileDropdown__container">
      <div className="profileDropdown__list">
        {/* add Link on each item */}
        <div
          className="profileList__item profile--name"
          onClick={handleMyProfileClick}
        >
          My Profile
        </div>
        <div className="profileList__item profile--create">Create Post</div>
        <div className="profileList__item profile--saved">Saved Project</div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
