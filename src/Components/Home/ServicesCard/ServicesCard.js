import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = (props) => {
  const { title, description, price, image, _id } = props.data;
  return (
    <div>
      <Link to={`/dashboard/book/${_id}`}>
        <button className="bg-transparent" style={{ border: "none" }}>
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
        </button>
      </Link>
    </div>
  );
};

export default ServicesCard;
