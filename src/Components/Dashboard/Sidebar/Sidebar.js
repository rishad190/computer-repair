import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faShoppingCart,
  faBook,
  faCommentDots,
  faPlus,
  faUserPlus,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [user, setUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/isAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
      });
  }, [user.email]);
  return (
    <section className="sidebar_container">
      <div className="sidebar_link_box">
        <div className="nav_img_box">
          <img src={logo} alt="" />
          <p className="text-white">Computer Repair</p>
        </div>
        <Link to="#">
          <FontAwesomeIcon className="me-2" icon={faShoppingCart} />
          Book
        </Link>
        <Link to="/dashboard/booking">
          {" "}
          <FontAwesomeIcon className="me-2" icon={faBook} /> Booking List
        </Link>
        <Link to="/dashboard/review">
          <FontAwesomeIcon className="me-2" icon={faCommentDots} />
          Review
        </Link>
        <br />
        {isAdmin && (
          <div>
            <Link to="/dashboard/order">
              <FontAwesomeIcon className="me-2" icon={faBook} />
              Order List
            </Link>
            <br />
            <Link to="/dashboard/addService">
              <FontAwesomeIcon className="me-2" icon={faPlus} />
              Add Service
            </Link>
            <br />
            <Link to="/dashboard/makeAdmin">
              <FontAwesomeIcon className="me-2" icon={faUserPlus} />
              Make Admin
            </Link>
            <br />
            <Link to="/dashboard/manage">
              <FontAwesomeIcon className="me-2" icon={faTasks} />
              Manage Services
            </Link>{" "}
          </div>
        )}
      </div>
    </section>
  );
};

export default Sidebar;
