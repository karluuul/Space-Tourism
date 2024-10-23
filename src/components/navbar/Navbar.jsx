import React from "react";
import logo from "../../assets/shared/logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/">
              <span className="bold-number">00</span> Home
            </Link>
          </li>
          <li>
            <Link to="/destination">
              <span className="bold-number">01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/crew">
              <span className="bold-number">02</span> Crew
            </Link>
          </li>
          <li>
            <Link to="/technology">
              <span className="bold-number">03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
