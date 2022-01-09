import React, { useEffect } from "react";
import { useProjects } from "../../contexts/ProjectContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faComments } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = () => {
  const { projects } = useProjects();
  console.log("projects list", projects);

  const renderCards = projects.map((project) => {
    return (
      <div className="group__card" key={project.id}>
        <div className="group__langs">
          <img
            className="group__lang"
            src={require("../../assets/images/javascript.png")}
            alt="javascript"
          />
          <img
            className="group__lang"
            src={require("../../assets/images/react.png")}
            alt="react"
          />
        </div>
        <p className="group__title">{project.title}</p>
        <div className="group__icons">
          <div className="group__icons--comments">
            <FontAwesomeIcon icon={faComments} />
            <p className="comment__total">Edit here</p>
          </div>
          <div className="group__icons--saved">
            <FontAwesomeIcon icon={faBookmark} />
            <p className="comment__saved--total">{project.saved}</p>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderCards}</>;
};

export default ProjectCard;
