import React from "react";
import Temple from "../../assets/temple.svg";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="logo" />
          <span>Streamline</span>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <button className="btn">Log Out</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
