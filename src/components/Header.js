import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__left">
            <h1 className="header__logo">DEVAROUND</h1>
            <form className="header__form" action="">
              <input
                className="form__search"
                type="text"
                placeholder="Search..."
              />
              <button className="form__searchBtn" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>

          <div className="header__right">
            <div className="header__btns">
              <button className="header__btn" id="header__btn--post">
                POST
              </button>
              <button className="header__btn" id="header__btn--login">
                LOG IN
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
