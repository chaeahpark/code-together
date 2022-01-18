import React from "react";

import Tags from "../components/Tags";
import TextEditor from "../components/textEditor/TextEditor";
import { useTag } from "../contexts/TagContext";
import { useProjects } from "../contexts/ProjectContext";

const AddPost = () => {
  const { setTitle } = useProjects();

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
        <button>Submit</button>
      </div>
    </div>
  );
};

export default AddPost;
