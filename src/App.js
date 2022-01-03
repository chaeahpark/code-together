import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__logo">CODE TOGETHER</h1>
        <input className="header__search" type="text" placeHolder="search" />
        <div className="header__btn">
          <button className="header__btn--post">POST</button>
          <button className="header__btn--login">LOG IN</button>
        </div>
      </header>

      <div className="banner">
        <h2 className="banner__title">
          Find buddies and build projects together.
        </h2>
      </div>

      <div className="main__container">
        <div className="main__sidebar">
          <div className="sidebar__tags"></div>
          <div className="sidebar__languages"></div>
        </div>
        <div className="main__contents">
          <div className="contents__groupList">
            <div className="group__card">
              <p className="group__title"></p>
              <div className="group__langs">
                {/* add code language */}
                <img src="/" alt="javascript" />
                <img src="/" alt="react" />
              </div>
              <div className="group__icons">
                <div className="group__icons--comments">
                  {/* add comment image */}
                  <p className="comment__total">23</p>
                </div>
                <div className="group__icons--saved">
                  {/* add bookmark image */}
                  <p className="comment__saved--total">3</p>
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
