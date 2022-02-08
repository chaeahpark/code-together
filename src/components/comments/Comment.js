import Avatar from "react-avatar";

import { useAuth } from "../../contexts/AuthContext";

const Comment = ({ comment, replies }) => {
  const { user } = useAuth();

  return (
    <div className="comment">
      {console.log(replies)}
      <div className="comment-image-container">
        <Avatar name={user.displayName.slice(0, 1)} size="50" round={true} />
      </div>
      <div className="comment-right">
        <div className="comment-meta">
          <div className="comment-author">{comment.userName}</div>
          <div className="comment-createdAt">31 Jan 2021</div>
        </div>
        <div className="comment-content">{comment.body}</div>
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
