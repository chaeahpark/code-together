import { useRef, useEffect } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

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

  return (
    <div className="tag-wrapper">
      <Autocomplete
        multiple
        id="tags-standard"
        options={options}
        onChange={(e, value) => {
          console.log("value", value);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="What do you mainly use for the project?"
            placeholder="Select tags..."
          />
        )}
      />
    </div>
  );
};

export default Tags;
