import { SET_COMMENTS, SET_ROOTCOMMENTS, SET_REPLIES } from "./types";

const commentInitalState = {
  comments: [],
  rootComments: [],
  replies: [],
};

const commentReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_COMMENTS:
      return { ...state, comments: payload };
    case SET_ROOTCOMMENTS:
      return { ...state, rootComments: payload };
    case SET_REPLIES:
      return { ...state, replies: payload };
    default:
      return { ...state };
  }
};

export { commentInitalState, commentReducer };
