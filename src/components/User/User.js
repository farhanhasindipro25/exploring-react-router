import React from "react";
import { Link } from "react-router-dom";
import './User.css';

const User = ({ user }) => {
  const { id, name, email, username } = user;
  return (
    <div className="user">
      <h3>Name: {name}</h3>
      <p>Email ID: {email}</p>
      <p>
        <small>
            UserName: <Link to={`/friend/${id}`}>
                {username}
            </Link>
        </small>
      </p>
    </div>
  );
};

export default User;
