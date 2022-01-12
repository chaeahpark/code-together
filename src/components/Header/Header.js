import React from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const renderBtnText = () => {
    if (user && user.email) {
      return "Log Out";
    }
    return "Log In";
  };

  const handleBtnClick = () => {
    if (user && user.email) {
      logout();
    } else {
      navigate("login");
    }
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
