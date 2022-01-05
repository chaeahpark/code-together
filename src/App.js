import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComments,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
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

      <div className="main">
        <div className="main__container">
          <div className="main__banner">
            <h2 className="banner__title">
              Find buddies and build projects together.
            </h2>
            <img
              className="banner__img"
              src={require("./img/team.png")}
              alt=""
            />
          </div>

          <div className="main__contents">
            <div className="main__sidebar">
              <div className="sidebar__tags">
                <h3 className="main__title title--tag">Tags</h3>
                <p className="tag__item">#javascript</p>
                <p className="tag__item">#python</p>
                <p className="tag__item">#php</p>
                <p className="tag__item">#java</p>
                <p className="tag__item">#golang</p>
                <p className="tag__item">#typescript</p>
                <p className="tag__item">#html</p>
                <p className="tag__item">#css</p>
                <p className="tag__item">c#</p>
              </div>
              <div className="sidebar__languages"></div>
            </div>

            <div className="main__groupList">
              <h3 className="main__title title--group">Recent projects</h3>
              <div className="group__card">
                <div className="group__langs">
                  {/* add code language */}
                  <img
                    className="group__lang"
                    src={require("./img/js.png")}
                    alt="javascript"
                  />
                  <img
                    className="group__lang"
                    src={require("./img/react.png")}
                    alt="react"
                  />
                </div>
                <p className="group__title">
                  We are looking for front-end and back-end
                </p>
                <div className="group__icons">
                  <div className="group__icons--comments">
                    <FontAwesomeIcon icon={faComments} />
                    <p className="comment__total">23</p>
                  </div>
                  <div className="group__icons--saved">
                    <FontAwesomeIcon icon={faBookmark} />
                    <p className="comment__saved--total">3</p>
                  </div>
                </div>
              </div>
              <div className="group__card">
                <div className="group__langs">
                  {/* add code language */}
                  <img
                    className="group__lang"
                    src={require("./img/js.png")}
                    alt="javascript"
                  />
                </div>
                <p className="group__title">Are you interested in ux design</p>
                <div className="group__icons">
                  <div className="group__icons--comments">
                    <FontAwesomeIcon icon={faComments} />
                    <p className="comment__total">5</p>
                  </div>
                  <div className="group__icons--saved">
                    <FontAwesomeIcon icon={faBookmark} />
                    <p className="comment__saved--total">11</p>
                  </div>
                </div>
              </div>
              <div className="group__card">
                <div className="group__langs">
                  {/* add code language */}
                  <img
                    className="group__lang"
                    src={require("./img/js.png")}
                    alt="javascript"
                  />
                </div>
                <p className="group__title">Are you interested in ux design</p>
                <div className="group__icons">
                  <div className="group__icons--comments">
                    <FontAwesomeIcon icon={faComments} />
                    <p className="comment__total">5</p>
                  </div>
                  <div className="group__icons--saved">
                    <FontAwesomeIcon icon={faBookmark} />
                    <p className="comment__saved--total">11</p>
                  </div>
                </div>
              </div>
              <div className="group__card">
                <div className="group__langs">
                  {/* add code language */}
                  <img
                    className="group__lang"
                    src={require("./img/js.png")}
                    alt="javascript"
                  />
                </div>
                <p className="group__title">Are you interested in ux design</p>

                <div className="group__icons">
                  <div className="group__icons--comments">
                    <FontAwesomeIcon icon={faComments} />
                    <p className="comment__total">5</p>
                  </div>
                  <div className="group__icons--saved">
                    <FontAwesomeIcon icon={faBookmark} />
                    <p className="comment__saved--total">11</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
