import React from "react";
import Banner from "../../components/Banner";
import Sidebar from "./Sidebar";
import ProjectList from "./ProjectList";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="main__container">
          <Banner />
          <div className="main__contents">
            <Sidebar />
            <ProjectList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
