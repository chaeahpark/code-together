import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

import { useComment } from "../../contexts/CommentContext";

import { commentsCollection } from "../../api/commentApi";
import { getDocs } from "firebase/firestore";

const Comments = () => {
  const { comments, setComments, setRootComments, rootComments } = useComment();
  const { postId } = useParams();

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
      setRootComments(postId);
    };

    fetchData();
  }, [rootComments]);

  return (
    <div className="comments-container">
      <div className="comments-wrapper">
        <h3 className="comments-title">Discussion ({comments.length})</h3>
        <div className="comments">
          {rootComments.map((rootComment) => {
            return (
              <Comment key={rootComment.commentId} comment={rootComment} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Comments;
