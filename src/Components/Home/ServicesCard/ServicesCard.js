import React from "react";
import { Link } from "react-router-dom";
import "./ServicesCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ServicesCard = (props) => {
  const { title, description, price, image, _id } = props.data;
  return (
    <div>
      <Link to={`/dashboard/book/${_id}`}>
        <button
          className="bg-transparent service_box"
          style={{ border: "none" }}
        >
          <div className="card " style={{ width: "18rem", height: "500px" }}>
            <img
              className="img-fluid w-100 "
              style={{ height: "200px" }}
              src={image}
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text" style={{ height: "130px" }}>
                {description}
              </p>
              <h5 className="card-text">${price}</h5>
            </div>
          </div>
          <div className="service_overlay ">
            <p className="text-white text-center">{description}</p>

            <div className="text-center d-flex text-white">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default ServicesCard;
