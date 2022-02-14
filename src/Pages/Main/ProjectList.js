import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <>
      <div className="main__groupList">
        <h3 className="main__title title--group">Recent projects</h3>
        <ProjectCard />
      </div>
    </>
  );
};

export default ProjectList;
