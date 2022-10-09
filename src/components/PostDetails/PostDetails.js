import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./PostDetails.css";

const PostDetails = () => {
  const post = useLoaderData();
  console.log(post)
  const { id, title, body, userId } = post;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/user/${userId}`);
  };
  return (
    <div className="postDetail">
      <h1>Post ID: {id}</h1>
      <h3>Title: {title}</h3>
      <h4>{body}</h4>
      <button className="btn-author" onClick={handleNavigate}>Find Author Details</button>
    </div>
  );
};

export default PostDetails;
