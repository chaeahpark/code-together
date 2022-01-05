import React from "react";
import Banner from "./Banner";
import Sidebar from "./Sidebar";
import GroupList from "./GroupList";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="main__container">
          <Banner />
          <div className="main__contents">
            <Sidebar />
            <GroupList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
