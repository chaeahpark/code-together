import { useRef, useEffect } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import { useTag } from "../contexts/TagContext";
import { useProjects } from "../contexts/ProjectContext";

const Tags = () => {
  const { options } = useTag();
  const { setTags } = useProjects();

  return (
    <div className="tag-wrapper">
      <Autocomplete
        multiple
        id="tags-standard"
        options={options}
        onChange={(e, value) => {
          setTags(value);
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
