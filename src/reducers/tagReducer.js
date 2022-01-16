import { DISPLAY_ON, DISPLAY_OFF, ADD_TAG, DELETE_TAG } from "./types";

const initialState = {
  display: false,
  options: [
    "javascript",
    "react",
    "html",
    "java",
    "php",
    "golang",
    "c++",
    "c#",
  ],
  searchTerm: "",
  selectedTags: [],
};

const tagReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case DISPLAY_ON:
      return { ...state, display: true };
    case DISPLAY_OFF:
      return { ...state, display: false };
    case ADD_TAG:
      return {
        ...state,
        selectedTags: payload,
      };
    case DELETE_TAG:
      return {
        ...state,
        selectedTags: state.selectedTags.filter((tag) => tag !== payload),
      };
    default:
      return state;
  }
};

export { initialState, tagReducer };
