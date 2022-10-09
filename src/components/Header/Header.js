import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/users"
        >
          Users
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/posts"
        >
          Posts
        </NavLink>
      </nav>
      <p>This part is common for all navigation NavLinks</p>
    </div>
  );
};

export default Header;
