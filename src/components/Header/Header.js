import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import { useAuth } from "../../contexts/AuthContext";
import Searchbar from "./Searchbar";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

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
            <div
              className="header__avatar"
              onMouseEnter={() => {
                console.log("Mouse");
              }}
            >
              {renderAvatar()}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
