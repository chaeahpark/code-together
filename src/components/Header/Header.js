import React from "react";
import Searchbar from "./Searchbar";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const { user } = useAuth();
  const renderBtnText = () => {
    if (user && user.email) {
      return "Log Out";
    }
    return "Log In";
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
              <button className="header__btn" id="header__btn--login">
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
