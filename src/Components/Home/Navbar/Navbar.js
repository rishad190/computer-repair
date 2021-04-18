import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      {}
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand" href="/home">
            <div className="nav_img_box">
              <img src={logo} alt="" />
              <p>Computer Repair</p>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#fixed">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link ">
                  DASHBOARD
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link to="/login">
                {user.success && (
                  <img
                    className="w-50 rounded-circle"
                    src={user.image}
                    alt=""
                  />
                )}
                {!user.success && (
                  <button className="btn btn-primary" variant="outline-success">
                    Login
                  </button>
                )}
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
