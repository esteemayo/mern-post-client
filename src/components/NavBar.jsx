import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaReact, FaHome, FaBook } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MERN <FaReact />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home <FaHome />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About <FaBook />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
