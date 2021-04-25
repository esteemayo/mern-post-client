import React from "react";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaSlack,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const date = new Date();

  return (
    <footer id="footer" className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="/"
            role="button"
          >
            <FaReact />
          </Link>
          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="/"
            role="button"
          >
            <FaNodeJs />
          </Link>
          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="/"
            role="button"
          >
            <FaDatabase />
          </Link>
          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="/"
            role="button"
          >
            <FaGithub />
          </Link>
          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="/"
            role="button"
          >
            <FaSlack />
          </Link>
          <div>All rights reserved. Design by Emmanuel Adebayo&trade;</div>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {date.getFullYear()} Copyright: MERN <FaReact /> <FaNodeJs />{" "}
        <FaDatabase />
      </div>
    </footer>
  );
};

export default Footer;
