import { createContext, useContext, useReducer } from "react";
import { initialState, tagReducer } from "../reducers/tagReducer";
import {
  DISPLAY_ON,
  DISPLAY_OFF,
  ADD_TAG,
  DELETE_TAG,
} from "../reducers/types";

const TagContext = createContext(initialState);

const TagProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tagReducer, initialState);

  console.log("state", state);

  const displayOn = () => {
    dispatch({ type: DISPLAY_ON });
  };

  const displayOff = () => {
    dispatch({ type: DISPLAY_OFF });
  };

  const addTag = (tag) => {
    const updatedTags = state.selectedTags.push(tag);

    dispatch({
      type: ADD_TAG,
      payload: updatedTags,
    });
  };

  const deleteTag = (tag) => {
    dispatch({ type: DELETE_TAG, payload: tag });
  };

  const value = {
    display: state.display,
    options: state.options,
    searchTerm: state.search,
    selectedTags: state.selectedTags,
    displayOn,
    displayOff,
    addTag,
    deleteTag,
  };
  return <TagContext.Provider value={value}>{children}</TagContext.Provider>;
};

export const useTag = () => {
  const tag = useContext(TagContext);

  return tag;
};

export default TagProvider;
