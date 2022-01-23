import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

import { postsCollection } from "../../api/postApi";
import { getDocs, getDoc, doc } from "firebase/firestore";
import database from "../../api/postApi";
import { useProjects } from "../../contexts/ProjectContext";

const ProjectDetails = () => {
  let { postId } = useParams();

  useEffect(() => {
    const fetchPostData = async () => {
      const snapShot = await getDoc(doc(database, "posts", postId));
      console.log("test", snapShot.data());
    };

    fetchPostData();
  }, []);

  return (
    <div className="projectDetail-container">
      <div className="projectDetail-wrapper">
        <div className="proejctDetails-btn">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
        </div>
        <div className="projectDetail-header-box">
          <h2 className="projectDetail-header-text">Hello</h2>
        </div>
        <div className="projectDetail-meta-box projectDetail-meta-box__createdAt">
          <p className="projectDetail-meta-text projectDetail-meta-text__createdAt">
            03 Jan 2022
          </p>
        </div>
        <div className="projectDetail-tag-box">
          <p className="projectDetail-tag-text">tags</p>
        </div>
        <br className="projectDetails-line" />
        <div className="projectDetail-content-box">
          his should be the accepted answer since it also removes the change in
          color. Also, is there a way to translate that CSS class into JSS? I
          had the same issue using material-ui and using the style prop helped
        </div>
        <br className="projectDetails-line" />
      </div>
    </div>
  );
};

export default ProjectDetails;
