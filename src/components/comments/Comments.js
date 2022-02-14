import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

import { useComment } from "../../contexts/CommentContext";
import { useAuth } from "../../contexts/AuthContext";
import { commentsCollection } from "../../api/commentApi";
import { getDocs, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import database from "../../api/postApi";

const Comments = () => {
  const { comments, setComments } = useComment();
  const [activeComment, setActiveComment] = useState(null);

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
        parentId: parentId ? parentId : null,
      });

      let comments = [];

      const dataSnapshot = await getDocs(commentsCollection);
      dataSnapshot.forEach((doc) => {
        let comment = doc.data();
        comment.commentId = doc.id;
        comments.push(comment);
      });

      setComments(comments);
      setActiveComment(null);
    } catch (e) {
      throw Error(e);
    }
  };

  const deleteComment = async (commentId) => {
    if (window.confirm("Are you sure that you want to remove comment?")) {
      try {
        const commentDocRef = doc(database, "comments", commentId);
        await deleteDoc(commentDocRef);

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
    }
  };

  const updateComment = async (text, commentId) => {
    try {
      const commentDocRef = doc(database, "comments", commentId);
      await updateDoc(commentDocRef, {
        body: text,
      });

      let comments = [];

      const dataSnapshot = await getDocs(commentsCollection);
      dataSnapshot.forEach((doc) => {
        let comment = doc.data();
        comment.commentId = doc.id;
        comments.push(comment);
      });

      setComments(comments);
      setActiveComment(null);
    } catch (e) {
      throw Error(e);
    }
  };

  return (
    <div className="comments-container">
      <div className="comments-wrapper">
        <h3 className="comments-title">Discussion ({comments.length})</h3>
        <div className="comment-form-title">Write Comment</div>
        <CommentForm
          submitLabel="Write"
          handleSubmit={addComment}
          deleteComment={deleteComment}
        />
        <div className="comments">
          {rootComments &&
            rootComments.map((rootComment) => {
              return (
                <Comment
                  key={rootComment.commentId}
                  comment={rootComment}
                  replies={getReplies(rootComment.commentId)}
                  deleteComment={deleteComment}
                  activeComment={activeComment}
                  setActiveComment={setActiveComment}
                  addComment={addComment}
                  updateComment={updateComment}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Comments;
