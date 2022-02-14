import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProjects } from "../../contexts/ProjectContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faComments } from "@fortawesome/free-solid-svg-icons";

import { getDocs } from "firebase/firestore";
import { postsCollection } from "../../api/postApi";
import uuid from "react-uuid";

// !state changed in PROJECT CONTEXT so make sure to change project.xxx
// !to appropriate form

const ProjectCard = () => {
  const { projectList, getProjects, setSearchingProjects, searchingProjects } =
    useProjects();

  // useEffect(() => {
  //   console.log("saerching", searchingProjects);
  //   return () => setSearchingProjects([]);
  // }, []);

  useEffect(() => {
    let projects = [];
    const getData = async () => {
      const snapShot = await getDocs(postsCollection);
      snapShot.forEach((doc) => {
        const project = { ...doc.data(), postId: doc.id };
        projects.push(project);
      });
      getProjects(projects);
      console.log("get data");
    };
    getData();
  }, []);

  const renderSearchingProjects =
    searchingProjects &&
    searchingProjects.map((project) => {
      return (
        <div className="group__card" key={uuid()}>
          <Link
            to={`/project/${project.postId}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
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
            <p className="group__writer">written by {project.userUid}</p>
            <div className="group__icons">
              <div className="group__icons--comments">
                <FontAwesomeIcon icon={faComments} />
                <p className="comment__total">Edit here</p>
              </div>
              <div className="group__icons--saved">
                <FontAwesomeIcon icon={faBookmark} />
                <p className="comment__saved--total">5</p>
              </div>
            </div>
          </Link>
        </div>
      );
    });

  const renderCards = projectList.map((project) => {
    return (
      <div className="group__card" key={uuid()}>
        <Link
          to={`/project/${project.postId}`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
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
          <p className="group__writer">written by {project.userUid}</p>
          <div className="group__icons">
            <div className="group__icons--comments">
              <FontAwesomeIcon icon={faComments} />
              <p className="comment__total">Edit here</p>
            </div>
            <div className="group__icons--saved">
              <FontAwesomeIcon icon={faBookmark} />
              <p className="comment__saved--total">5</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{searchingProjects ? renderSearchingProjects : renderCards}</>;
};

export default ProjectCard;
