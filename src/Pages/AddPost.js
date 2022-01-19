import { colTest } from "../api/postApi";
import { collection, addDoc } from "firebase/firestore";

import Tags from "../components/Tags";
import TextEditor from "../components/textEditor/TextEditor";

import { useTag } from "../contexts/TagContext";
import { useProjects } from "../contexts/ProjectContext";
import { useAuth } from "../contexts/AuthContext";

const AddPost = () => {
  const {
    setTitle,
    postTitle,
    postContent,
    postTags,
    postWriter,
    postCreatedAt,
  } = useProjects();

  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (postTitle && postContent && postTags.length > 0) {
      // take the user info (uid)

      // set the timestamp
      try {
        const docRef = await addDoc(colTest, {
          title: postTitle,
          content: postContent,
          tags: postTags,
          userUid: user.uid,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      console.log(colTest);

      // save to the firestore
    } else return console.log("please complete the form");
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

export default AddPost;
