import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/users">Users</Link>
      </nav>
      <p>This part is common for all navigation links</p>
    </div>
  );
};

export default Header;
