import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "../../contexts/AuthContext";

import {
  updateDoc,
  doc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from "firebase/firestore";
import database from "../../api/postApi";

const ProjectDetailActionBtns = () => {
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

  useEffect(() => {
    let project;

    const fetchData = async () => {
      if (saveToggle === undefined) {
        const snapShot = await getDoc(doc(database, "posts", postId));
        project = snapShot.data();
        setSaveList(project.save);
        if (project.save.includes(user.uid)) {
          setSaveToggle(true);
        }
      } else if (saveToggle) {
        const projectRef = doc(database, "posts", postId);
        await updateDoc(projectRef, {
          save: arrayUnion(user.uid),
        });

        const snapShot = await getDoc(doc(database, "posts", postId));
        const project = snapShot.data();

        setSaveList(project.heart);
        setSaveList(project.save);
      } else if (!saveToggle) {
        const projectRef = doc(database, "posts", postId);
        await updateDoc(projectRef, {
          save: arrayRemove(user.uid),
        });

        const snapShot = await getDoc(doc(database, "posts", postId));
        const project = snapShot.data();

        setSaveList(project.heart);
        setSaveList(project.save);
      }
    };

    fetchData();
  }, [saveToggle]);

  const heartClickHandler = () => {
    if (!user) {
      alert("Please log in");
    } else if (user) {
      setHeartToggle(!heartToggle);
    }
  };

  const bookmarkClickHandler = () => {
    if (!user) {
      alert("Please log in");
    } else {
      setSaveToggle(!saveToggle);
    }
  };

  return (
    <div className="projectDetail-actionBtns">
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
        <div
          className={`projectDetail-btn__save ${
            saveToggle ? "active" : "deactive"
          }`}
          onClick={bookmarkClickHandler}
        >
          <FontAwesomeIcon icon={faBookmark} size="lg" />
        </div>
        <span className="btn-counter">{saveList.length}</span>
      </div>
    </div>
  );
};

export default ProjectDetailActionBtns;
