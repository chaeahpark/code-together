import React from "react";
import Searchbar from "./Searchbar";

const Header = () => {
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
                Log in
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
