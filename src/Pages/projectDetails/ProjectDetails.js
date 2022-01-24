import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

import { getDoc, doc } from "firebase/firestore";
import database from "../../api/postApi";

import { useProjects } from "../../contexts/ProjectContext";
import { useAuth } from "../../contexts/AuthContext";

import uuid from "react-uuid";

const ProjectDetails = () => {
  let { postId } = useParams();

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
        {" "}
        {tag}{" "}
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

  const renderBtn = () => {
    // check if the user uid
    // and the uid of currently displayed project
    // is matching.

    if (user && user.uid && currentProject) {
      return user.uid === currentProject.userUid ? (
        <button className="editBtn"> Edit </button>
      ) : null;
    }
  };

  return (
    <div className="projectDetail-container">
      <div className="projectDetail-wrapper">
        <div className="proejctDetails-btn">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
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

        <div className="projectDetail-btn projectDetail-btn__edit">
          {renderBtn()}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
