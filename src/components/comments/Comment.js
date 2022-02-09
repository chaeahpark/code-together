import Avatar from "react-avatar";

import { useAuth } from "../../contexts/AuthContext";
import CommentForm from "./CommentForm";

const Comment = ({ comment, replies }) => {
  const { user } = useAuth();
  const canReply = Boolean(user);
  const canEdit = comment.userId === user.uid;
  const canDelete = comment.userId === user.uid;
  const createdAt = new Date(comment.createdAt).toLocaleDateString;

  const handleDeleteClick = () => {};

  return (
    <div className="comment">
      <div className="comment-image-container">
        <Avatar name={user.displayName.slice(0, 1)} size="50" round={true} />
      </div>
      <div className="comment-right">
        <div className="comment-meta">
          <div className="comment-author">{comment.userName}</div>
          {/*! EDIT the date format */}
          <div className="comment-createdAt">13 Jan 2021</div>
        </div>
        <div className="comment-content">{comment.body}</div>
        <div className="comment actions">
          {canReply && <div className="comment-action">Reply</div>}
          {canEdit && <div className="comment-action">Edit</div>}
          {canDelete && (
            <div className="comment-action" onClick={handleDeleteClick}>
              Delete
            </div>
          )}
        </div>
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment comment={reply} key={reply.commentId} replies={[]} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
