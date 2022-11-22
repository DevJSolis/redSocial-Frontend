import React, { useState, useEffect } from "react";
import "./Post.css";
import Comment from "../../assets/img/comment.png";
import Heart from "../../assets/img/like.png";
import NotLike from "../../assets/img/notlike.png";
import { likePost } from "../../api/PostsRequests";
import { useSelector } from "react-redux";
import { formatDistance } from "date-fns";
import { getUser } from "../../api/UserRequests";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [postUser, setpostUser] = useState({});
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  useEffect(() => {
    const fetchPerson = () => {
      getUser(data.userId).then((response) => {
        console.log(response.data);
        setpostUser(response.data);
      });
    };
    fetchPerson();
  }, [data]);

  //const dateToFormat = format(new Date(data.createdAt), 'dd/mm/yyyy');
  const dateToFormat = formatDistance(new Date(data.createdAt), new Date(), {
    addSuffix: true,
  });

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  return (
    <div className="Post">
      <div className="detail">
        <div style={{ marginLeft: "2%" }}>
          <b>{postUser.username}</b>
          <br />
          <span style={{ color: "var(--gray)", fontSize: "12px" }}>
            {dateToFormat}
          </span>
        </div>
        <div style={{ margin: "2%" }}>
          <span>{data.desc}</span>
        </div>
        <img
          src={
            data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""
          }
          alt=""
        />
        <div className="postReact" style={{ marginLeft: "2%" }}>
          <img
            src={liked ? Heart : NotLike}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={handleLike}
          />
        </div>

        <span
          style={{ color: "var(--gray)", fontSize: "12px", marginLeft: "2%" }}
        >
          {likes} likes
        </span>
      </div>
    </div>
  );
};

export default Post;
