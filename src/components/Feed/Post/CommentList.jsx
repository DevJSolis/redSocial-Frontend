import React from "react";
import Comment from "./Comment";
//import "./Comment.css";
export default function CommentList({comments}) {
  return (
    <div className="commentList">
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}