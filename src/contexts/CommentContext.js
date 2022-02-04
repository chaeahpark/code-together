import { createContext, useReducer, useContext } from "react";
import { commentInitalState, commentReducer } from "../reducers/commentReducer";

import { commentsCollection } from "../api/commentApi";
import { getDocs } from "firebase/firestore";
import { SET_COMMENTS, SET_ROOTCOMMENTS } from "../reducers/types";

const CommentContext = createContext();

const CommentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commentReducer, commentInitalState);
  const { comments } = state;

  const setComments = (comments) => {
    dispatch({ type: SET_COMMENTS, payload: comments });
  };

  const setRootComments = (postId) => {
    const rootComments = comments.filter(
      (comment) => comment.postId === postId && comment.parentId === null
    );

    dispatch({ type: SET_ROOTCOMMENTS, payload: rootComments });
  };

  const value = {
    comments: state.comments,
    rootComments: state.rootComments,
    setComments,
    setRootComments,
  };

  return (
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
};

export const useComment = () => {
  return useContext(CommentContext);
};

export default CommentProvider;
