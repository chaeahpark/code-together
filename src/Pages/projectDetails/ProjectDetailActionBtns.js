import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";

import { useProjects } from "../../contexts/ProjectContext";
import { useAuth } from "../../contexts/AuthContext";

import { updateDoc, doc, arrayUnion, arrayRemove } from "firebase/firestore";
import database from "../../api/postApi";

const ProjectDetailActionBtns = () => {
  const { currentProject, setHeart, setSave } = useProjects();
  const { user } = useAuth();
  const { postId } = useParams();

  const [heartToggle, setHeartToggle] = useState();
  const [saveToggle, setSaveToggle] = useState();

  useEffect(() => {
    const { heart, save } = currentProject;
    if (heart.includes(user.uid)) {
      setHeartToggle(true);
    } else if (!heart.includes(user.uid)) {
      setHeartToggle(false);
    } else if (save.includes(user.uid)) {
      setSaveToggle(true);
    } else if (!save.includes(user.uid)) {
      setSaveToggle(false);
    }
  }, []);

  const heartClickHandler = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please log in");
    }

    setHeartToggle(!heartToggle);

    if (heartToggle === true) {
      // save the userUid to heart property
      // in the current projenct document.
      const projectRef = doc(database, "posts", postId);
      await updateDoc(projectRef, {
        heart: arrayUnion(user.uid),
      });

      const isAlreadyHeart = currentProject.heart.find(
        (heartId) => heartId === user.uid
      );

      if (!isAlreadyHeart) {
        const newList = currentProject.heart.push(user.uid);
        setHeart(newList);
        console.log("heart list", currentProject.heart);
      }
    } else if (heartToggle === false) {
      const projectRef = doc(database, "posts", postId);
      await updateDoc(projectRef, {
        heart: arrayRemove(user.uid),
      });

      const updatedList = currentProject.heart.filter((heartId) => {
        return heartId !== user.uid;
      });

      console.log("updatedList", updatedList);
      // setHeart(updatedList);
      console.log("deactivate", currentProject.heart);
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

      const alreadySave = currentProject.save.find(
        (saveId) => saveId === user.uid
      );

      if (alreadySave) return;
      else {
        setSave(user.uid);
      }
    }
  };

  return (
    <div className="projectDetail-actionBtns">
      {console.log(heartToggle)}
      <div className="projectDetail-btn ">
        <div
          className={`projectDetail-btn__heart ${
            heartToggle ? "active" : "deactive"
          }`}
          onClick={heartClickHandler}
        >
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
