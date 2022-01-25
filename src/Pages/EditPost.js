import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Tags from "../components/Tags";
import TextEditor from "../components/textEditor/TextEditor";
import { useProjects } from "../contexts/ProjectContext";

import { getDoc, doc } from "firebase/firestore";
import database from "../api/postApi";

const EditPost = () => {
  const { postId } = useParams();
  const { setTitle, postTitle, postContent, postTags, setCurrentProject } =
    useProjects();

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

  //! Customize the handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (postTitle && postContent && postTags.length > 0) {
      // take the user info (uid)
      // set the timestamp
      //   try {
      //     const docRef = await addDoc(postsCollection, {
      //       title: postTitle,
      //       content: postContent,
      //       tags: postTags,
      //       userUid: user.uid,
      //       createdAt: new Date(),
      //     });
      //     setPostId(docRef.id);
      //   } catch (e) {
      //     console.error("Error adding document: ", e);
      //   }
      //   // save to the firestore
      // } else return console.log("please complete the form");
    }
  };

  return (
    <div className="addPost-container">
      <div className="addPost-wrapper">
        {/* ----- Post Title ----- */}
        <div className="textEditor-title">
          <input
            className="textEditor-title__input"
            type="text"
            placeholder="Post title here..."
            value={postTitle}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <Tags />
        <TextEditor />
      </div>
      <div className="addPost-btn addPost-btn__submit">
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Publish
        </button>
      </div>
    </div>
  );
};

export default EditPost;
