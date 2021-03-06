import ProjectDetailActionBtns from "./ProjectDetailActionBtns";

import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import database from "../../api/postApi";

import { useProjects } from "../../contexts/ProjectContext";
import { useAuth } from "../../contexts/AuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import uuid from "react-uuid";
import Comments from "../../components/comments/Comments";

const ProjectDetails = () => {
  let { postId } = useParams();
  let navigate = useNavigate();

  const { setCurrentProject, currentProject } = useProjects();
  const { user } = useAuth();

  useEffect(() => {
    let project = {};

    const fetchPostData = async () => {
      try {
        const snapShot = await getDoc(doc(database, "posts", postId));
        project = snapShot.data();
      } catch (e) {
        throw Error(e);
      }
      setCurrentProject(project);
    };

    fetchPostData();
  }, []);

  const renderTags = currentProject.tags.map((tag) => {
    return (
      <span className="projectDetail-singleTag" key={uuid()}>
        #{tag}
      </span>
    );
  });

  const renderTime = () => {
    const { createdAt } = currentProject;

    if (createdAt) {
      const fullDate = new Date(createdAt.seconds * 1000);

      const year = fullDate.getFullYear();
      const monthLong = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ];

      let month = fullDate.getMonth(); //! edit the month style to JAN, FEB, MAR etc
      month = monthLong[month];
      const date = fullDate.getDate();

      return `${date} ${month} ${year}`;
    } else if (!createdAt) return "";
  };

  const renderEditBtn = () => {
    // check if the user uid
    // and the uid of currently displayed project
    // is matching.

    if (user && user.uid && currentProject) {
      return user.uid === currentProject.userUid ? (
        <button className="editBtn" onClick={handleEditClick}>
          {" "}
          Edit{" "}
        </button>
      ) : null;
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleEditClick = () => {
    //! How to move
    navigate("/editpost/" + postId, { replace: true });
  };

  return (
    <div className="projectDetail-container">
      <div className="projectDetail-wrapper">
        <div className="projectDetail-back">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            onClick={handleBackClick}
          />
        </div>
        <div className="projectDetail-header-box">
          <h2 className="projectDetail-header-text">{currentProject.title}</h2>
        </div>
        <div className="projectDetail-meta-box projectDetail-meta-box__createdAt">
          <p className="projectDetail-meta-text projectDetail-meta-text__createdAt">
            {renderTime()}
          </p>
        </div>
        <div className="projectDetail-tag-box">
          <p className="projectDetail-tag-text">Categories: {renderTags}</p>
        </div>

        <div
          className="projectDetail-content-box"
          dangerouslySetInnerHTML={{ __html: currentProject.content }}
        ></div>
        {currentProject && user ? <ProjectDetailActionBtns /> : null}
        <div className="projectDetail-btn projectDetail-btn__edit">
          {renderEditBtn()}
        </div>
        <Comments />
      </div>
    </div>
  );
};

export default ProjectDetails;
