import { SET_COMMENTS, SET_ROOTCOMMENTS } from "./types";

const commentInitalState = {
  comments: [],
  rootComments: [],
};

const commentReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_COMMENTS:
      return { ...state, comments: payload };
    case SET_ROOTCOMMENTS:
      return { ...state, rootComments: payload };
    default:
      return { ...state };
  }
};

export { commentInitalState, commentReducer };
