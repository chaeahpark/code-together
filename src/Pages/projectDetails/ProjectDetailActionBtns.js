import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";

import { useProjects } from "../../contexts/ProjectContext";
import { useAuth } from "../../contexts/AuthContext";

import { updateDoc, doc, arrayUnion } from "firebase/firestore";
import database from "../../api/postApi";

const ProjectDetailActionBtns = () => {
  const { currentProject, setHeart, setSave } = useProjects();
  const { user } = useAuth();
  const { postId } = useParams();

  const [heartToggle, setHeartToggle] = useState(false);
  const [saveToggle, setSaveToggle] = useState(false);

  useEffect(() => {
    const { heart, save } = currentProject;

    if (heart.includes(user.uid)) {
      setHeartToggle(true);
    } else if (save.includes(user.uid)) {
      setSaveToggle(true);
    }
  }, []);

  const heartClickHandler = async () => {
    if (!user) {
      alert("Please log in");
    }

    setHeartToggle(!heartToggle);
    if (heartToggle) {
      // save the userUid to heart property
      // in the current projenct document.
      const projectRef = doc(database, "posts", postId);
      await updateDoc(projectRef, {
        heart: arrayUnion(user.uid),
      });
      setHeart(user.uid);
    }
  };

  const bookmarkClickHandler = async () => {
    if (!user) {
      alert("Please log in");
    }

    setSaveToggle(!saveToggle);
    if (saveToggle) {
      // save the userUid to heart property
      // in the current projenct document.
      const projectRef = doc(database, "posts", postId);
      await updateDoc(projectRef, {
        save: arrayUnion(user.uid),
      });
      setSave(user.uid);
    }
  };

  return (
    <div className="projectDetail-actionBtns">
      <div className="projectDetail-btn ">
        <div className="projectDetail-btn__heart" onClick={heartClickHandler}>
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </div>
        {currentProject.heart && (
          <span className="btn-counter">{currentProject.heart.length}</span>
        )}
      </div>
      <div className="projectDetail-btn">
        <div className="projectDetail-btn__save" onClick={bookmarkClickHandler}>
          <FontAwesomeIcon icon={faBookmark} size="lg" />
        </div>
        {currentProject.save && (
          <span className="btn-counter">{currentProject.save.length}</span>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailActionBtns;
