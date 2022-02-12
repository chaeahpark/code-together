import Avatar from "react-avatar";

import { useAuth } from "../../contexts/AuthContext";
import CommentForm from "./CommentForm";

const Comment = ({
  comment,
  replies,
  deleteComment,
  activeComment,
  setActiveComment,
  addComment,
  updateComment,
  parentId = null,
}) => {
  const { user } = useAuth();
  const canReply = Boolean(user);
  const canEdit = comment.userId === user.uid;
  const canDelete = comment.userId === user.uid;
  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment.commentId;
  const isEditing =
    activeComment &&
    activeComment.type === "editing" &&
    activeComment.id === comment.commentId;
  const replyId = parentId ? parentId : comment.commentId;
  const createdAt = new Date(comment.createdAt).toLocaleDateString;

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
        {!isEditing && <div className="comment-content">{comment.body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => {
              updateComment(text, comment.id);
            }}
            handleCancel={() => setActiveComment(null)}
          />
        )}
        <div className="comment actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({
                  type: "replying",
                  id: comment.commentId,
                })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({
                  type: "editing",
                  id: comment.commentId,
                })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment.commentId)}
            >
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.commentId}
                replies={[]}
                parentId={comment.commentId}
                addComment={addComment}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
