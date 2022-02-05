import { useEffect } from "react";
import Avatar from "react-avatar";

import { useAuth } from "../../contexts/AuthContext";
import { useComment } from "../../contexts/CommentContext";
import { commentInitalState } from "../../reducers/commentReducer";

const Comment = ({ comment }) => {
  const { user } = useAuth();
  const { rootComments } = useComment();

  return (
    <div className="comment">
      <div className="comment-image-container">
        <Avatar name={user.displayName.slice(0, 1)} size="50" round={true} />
      </div>
      <div className="comment-right">
        <div className="comment-meta">
          <div className="comment-author">{comment.userName}</div>
          <div className="comment-createdAt">31 Jan 2021</div>
        </div>
        <div className="comment-content">{comment.body}</div>
      </div>
    </div>
  );
};

export default Comment;
