import { createContext, useReducer, useContext } from "react";
import { commentInitalState, commentReducer } from "../reducers/commentReducer";

import { commentsCollection } from "../api/commentApi";
import { getDocs } from "firebase/firestore";
import { SET_COMMENTS } from "../reducers/types";

const CommentContext = createContext();

const CommentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commentReducer, commentInitalState);

  const setComments = (comments) => {
    dispatch({ type: SET_COMMENTS, payload: comments });
  };

  const value = {
    setComments,
  };

  return <CommentContext value={value}>{children}</CommentContext>;
};

export const useComment = () => {
  return useContext(CommentContext);
};

export default CommentProvider;
