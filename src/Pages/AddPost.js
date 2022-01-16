import React from "react";

import Tags from "../components/Tags";
import TextEditor from "../components/textEditor/TextEditor";
import { useTag } from "../contexts/TagContext";

const AddPost = () => {
  return (
    <>
      <div className="textEditor-container">
        {/* ----- Post Title ----- */}
        <div className="textEditor-title">
          <input
            className="textEditor-title__input"
            type="text"
            placeholder="Post title here..."
          />
        </div>
        <Tags />
        <TextEditor />
      </div>
    </>
  );
};

export default AddPost;
