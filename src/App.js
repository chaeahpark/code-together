import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faComments, faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__logo">CODE TOGETHER</h1>
        <form className="header__form" action="">
          <input
            className="form__search"
            type="text"
            placeholder="Search..."
          />
          <button className="form__searchBtn" type="submit"><FontAwesomeIcon icon={faSearch}/></button>
        </form>
        <div className="header__btns">
          <button className="header__btn" id="header__btn--post">
            POST
          </button>
          <button className="header__btn" id="header__btn--login">
            LOG IN
          </button>
        </div>
      </header>

      <div className="banner">
        <h2 className="banner__title">
          Find buddies and build projects together.
        </h2>
        <img className="banner__img" src={require("./img/team.png")} alt="" />
      </div>

      <div className="main__container">
        <div className="main__sidebar">
          <div className="sidebar__tags">
            <p className="tag">#javascript</p>
            <p className="tag">#python</p>
            <p className="tag">#php</p>
            <p className="tag">#java</p>
            <p className="tag">#golang</p>
            <p className="tag">#typescript</p>
          </div>
          <div className="sidebar__languages"></div>
        </div>
        <div className="main__contents">
          <div className="contents__groupList">
            <div className="group__card">
              <p className="group__title">
                We are looking for front-end and back-end
              </p>
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
              <p className="group__title">Are you interested in ux design</p>
              <div className="group__langs">
                {/* add code language */}
                <img
                  className="group__lang"
                  src={require("./img/js.png")}
                  alt="javascript"
                />
              </div>
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
              <p className="group__title">Are you interested in ux design</p>
              <div className="group__langs">
                {/* add code language */}
                <img
                  className="group__lang"
                  src={require("./img/js.png")}
                  alt="javascript"
                />
              </div>
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
              <p className="group__title">Are you interested in ux design</p>
              <div className="group__langs">
                {/* add code language */}
                <img
                  className="group__lang"
                  src={require("./img/js.png")}
                  alt="javascript"
                />
              </div>
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
  );
}

export default App;
