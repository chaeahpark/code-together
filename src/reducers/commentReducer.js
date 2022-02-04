import { SET_COMMENTS } from "./types";

const commentInitalState = {
  comments: [],
};

const commentReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_COMMENTS:
      return { comments: [...payload] };
    default:
      return { ...state };
  }
};

export { commentInitalState, commentReducer };
