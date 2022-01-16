import { useRef, useEffect } from "react";
import { useTag } from "../contexts/TagContext";

const Tags = () => {
  const {
    display,
    options,
    searchTerm,
    displayOn,
    displayOff,
    addTag,
    deleteTag,
    selectedTags,
  } = useTag();

  const tagInput = useRef(null);

  const renderTagList = () => {
    if (display) {
      return options.map((option) => {
        return <div key={options.indexOf(option)}>{option}</div>;
      });
    } else if (display && searchTerm) {
      return console.log("onSearch");
    }
  };

  return (
    <div className="tag-wrapper" ref={tagInput}>
      <input
        type="text"
        onFocus={displayOn}
        onBlur={displayOff}
        placeholder="Select upto 4 tags..."
      />
      {renderTagList()}
    </div>
  );
};

export default Tags;
