import React from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import ProfileDropdown from "../ProfileDropdown";

import { useAuth } from "../../contexts/AuthContext";
import { useProfile } from "../../contexts/ProfileContext";

import Avatar from "react-avatar";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { toggle, changeToggle } = useProfile();

  const renderBtnText = () => {
    if (user && user.email) {
      return "Log Out";
    }
    return "Log In";
  };

  const handleBtnClick = async () => {
    if (user && user.email) {
      try {
        await logout();
        navigate("/login");
      } catch (e) {
        throw Error(e);
      }
    } else {
      navigate("login");
    }
  };

  const renderAvatar = () => {
    if (user && user.email)
      return (
        <Avatar
          name={user.email.slice(0, 1)}
          email={user.email}
          size="35"
          round={true}
        />
      );
  };

  const handleProfileClick = () => {
    changeToggle(!toggle);
  };

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__left">
            <h1 className="header__logo">DEVAROUND</h1>
            <Searchbar />
          </div>

          <div className="header__right">
            <div className="header__btns">
              <button
                className="header__btn"
                id="header__btn--login"
                onClick={handleBtnClick}
              >
                {renderBtnText()}
              </button>
              <button className="header__btn" id="header__btn--createAccount">
                Create account
              </button>
            </div>
            <div className="header__avatar" onClick={handleProfileClick}>
              {renderAvatar()}
              {toggle ? <ProfileDropdown /> : null}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
