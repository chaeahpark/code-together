import {} from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

import { useComment } from "../../contexts/CommentContext";
import { useAuth } from "../../contexts/AuthContext";

const Comments = () => {
  const { setComment } = useComment();
  const { user } = useAuth();

  return <div className="comments-container">comments</div>;
};

export default Comments;
