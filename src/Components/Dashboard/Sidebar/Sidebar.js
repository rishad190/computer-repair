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
    fetch("https://secure-castle-59124.herokuapp.com/isAdmin", {
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
          <Link to="/">
            <img src={logo} alt="" />
            <p className="text-white">Computer Repair</p>
          </Link>
        </div>
        {!isAdmin && (
          <div>
            <Link to="/dashboard/book">
              <FontAwesomeIcon className="me-2" icon={faShoppingCart} />
              Book
            </Link>
            <br />
            <Link to="/dashboard/booking">
              <FontAwesomeIcon className="me-2" icon={faBook} /> Booking List
            </Link>
            <br />
            <Link to="/dashboard/review">
              <FontAwesomeIcon className="me-2" icon={faCommentDots} />
              Review
            </Link>
          </div>
        )}

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
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Sidebar;
