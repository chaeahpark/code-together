import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";

import { useProjects } from "../../contexts/ProjectContext";
import { useAuth } from "../../contexts/AuthContext";

import {
  updateDoc,
  doc,
  arrayUnion,
  arrayRemove,
  getDoc,
  collection,
} from "firebase/firestore";
import database from "../../api/postApi";

const ProjectDetailActionBtns = () => {
  const { currentProject, setHeart, setSave } = useProjects();
  const { user } = useAuth();
  const { postId } = useParams();

  const [heartToggle, setHeartToggle] = useState();
  const [saveToggle, setSaveToggle] = useState();
  const [heartList, setHeartList] = useState([]);
  const [saveList, setSaveList] = useState([]);

  useEffect(() => {
    let project;

    const fetchData = async () => {
      if (heartToggle === undefined) {
        const snapShot = await getDoc(doc(database, "posts", postId));
        project = snapShot.data();
        setHeartList(project.heart);
        if (project.heart.includes(user.uid)) {
          setHeartToggle(true);
        }
      } else if (heartToggle) {
        console.log("true!!!!");
        const projectRef = doc(database, "posts", postId);
        await updateDoc(projectRef, {
          heart: arrayUnion(user.uid),
        });

        const snapShot = await getDoc(doc(database, "posts", postId));
        const project = snapShot.data();

        setHeartList(project.heart);
        setSaveList(project.save);
      } else if (!heartToggle) {
        const projectRef = doc(database, "posts", postId);
        await updateDoc(projectRef, {
          heart: arrayRemove(user.uid),
        });

        const snapShot = await getDoc(doc(database, "posts", postId));
        const project = snapShot.data();

        setHeartList(project.heart);
        setSaveList(project.save);
      }
    };

    fetchData();
  }, [heartToggle]);

  const heartClickHandler = async () => {
    if (!user) {
      alert("Please log in");
    } else if (user) {
      setHeartToggle(!heartToggle);
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
      {console.log("heartToggle", heartToggle)}
      {console.log("heart", heartList)}
      <div className="projectDetail-btn ">
        <div
          className={`projectDetail-btn__heart ${
            heartToggle ? "active" : "deactive"
          }`}
          onClick={heartClickHandler}
        >
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </div>

        <span className="btn-counter">{heartList.length}</span>
      </div>
      <div className="projectDetail-btn">
        <div className="projectDetail-btn__save" onClick={bookmarkClickHandler}>
          <FontAwesomeIcon icon={faBookmark} size="lg" />
        </div>
        {currentProject.save && (
          <span className="btn-counter">{saveList.length}</span>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailActionBtns;

// if (!prevState === true) {
//   console.log("true!!!!");
//   const projectRef = doc(database, "posts", postId);
//   await updateDoc(projectRef, {
//     heart: arrayUnion(user.uid),
//   });
//   const snapShot = await getDoc(doc(database, "posts", postId));
//   const project = snapShot.data();

//   setHeartList(project.heart);
//   setSaveList(project.save);

//   return !prevState;
// } else if (!prevState === false) {
//   console.log("false!!!");
//   const projectRef = doc(database, "posts", postId);
//   await updateDoc(projectRef, {
//     heart: arrayRemove(user.uid),
//   });
//   const snapShot = await getDoc(doc(database, "posts", postId));
//   const project = snapShot.data();

//   setHeartList(project.heart);
//   setSaveList(project.save);

//   return !prevState;
// }
