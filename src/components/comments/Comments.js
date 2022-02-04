import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

import { useComment } from "../../contexts/CommentContext";
import { useAuth } from "../../contexts/AuthContext";

import { commentsCollection } from "../../api/commentApi";
import { getDocs } from "firebase/firestore";

const Comments = () => {
  const { comments, setComments, setRootComments, rootComments } = useComment();
  const { user } = useAuth();
  const { postId } = useParams();

  useEffect(() => {
    let comments = [];

    const fetchData = async () => {
      const dataSnapshot = await getDocs(commentsCollection);
      dataSnapshot.forEach((doc) => {
        comments.push(doc.data());
      });

      setComments(comments);
      setRootComments(postId);
      console.log("root", rootComments);
    };

    fetchData();
  }, []);

  return (
    <div className="comments-container">
      <div className="comments-wrapper">
        <h3 className="comments-title">Discussion ({comments.length})</h3>
        <div className="comments"></div>
      </div>
    </div>
  );
};

export default Comments;
