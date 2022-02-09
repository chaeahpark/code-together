import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

import { useComment } from "../../contexts/CommentContext";
import { useAuth } from "../../contexts/AuthContext";
import { commentsCollection } from "../../api/commentApi";
import { getDocs, addDoc } from "firebase/firestore";

const Comments = () => {
  const { comments, setComments } = useComment();
  const { user } = useAuth();
  const { postId } = useParams();
  const rootComments = comments.filter(
    (comment) => comment.postId === postId && comment.parentId === null
  );
  const getReplies = (commentId) => {
    //! add sort button
    return comments.filter((comment) => comment.parentId === commentId);
  };

  useEffect(() => {
    let comments = [];

    const fetchData = async () => {
      const dataSnapshot = await getDocs(commentsCollection);
      dataSnapshot.forEach((doc) => {
        let comment = doc.data();
        comment.commentId = doc.id;
        comments.push(comment);
      });
      setComments(comments);
    };

    fetchData();
  }, []);

  const addComment = async (text, parentId) => {
    try {
      await addDoc(commentsCollection, {
        body: text,
        createdAt: new Date(),
        postId,
        userId: user.uid,
        userName: user.displayName,
        parentId: null,
      });

      let comments = [];

      const dataSnapshot = await getDocs(commentsCollection);
      dataSnapshot.forEach((doc) => {
        let comment = doc.data();
        comment.commentId = doc.id;
        comments.push(comment);
      });

      setComments(comments);
    } catch (e) {
      throw Error(e);
    }
  };

  return (
    <div className="comments-container">
      <div className="comments-wrapper">
        <h3 className="comments-title">Discussion ({comments.length})</h3>
        <div className="comment-form-title">Write Comment</div>
        <CommentForm submitLabel="Write" handleSubmit={addComment} />
        <div className="comments">
          {rootComments &&
            rootComments.map((rootComment) => {
              return (
                <Comment
                  key={rootComment.commentId}
                  comment={rootComment}
                  replies={getReplies(rootComment.commentId)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Comments;
