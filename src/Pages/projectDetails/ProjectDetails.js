import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

import { getDoc, doc } from "firebase/firestore";
import database from "../../api/postApi";
import { useProjects } from "../../contexts/ProjectContext";
import { render } from "@testing-library/react";
import uuid from "react-uuid";

const ProjectDetails = () => {
  let { postId } = useParams();
  const { setCurrentProject, currentProject } = useProjects();

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
    return <span key={uuid()}> {tag} </span>;
  });

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
          <p className="projectDetail-meta-text projectDetail-meta-text__createdAt"></p>
        </div>
        <div className="projectDetail-tag-box">
          <p className="projectDetail-tag-text">{renderTags}</p>
        </div>
        <br className="projectDetails-line" />
        <div
          className="projectDetail-content-box"
          dangerouslySetInnerHTML={{ __html: currentProject.content }}
        ></div>
        <br className="projectDetails-line" />
      </div>
    </div>
  );
};

export default ProjectDetails;
