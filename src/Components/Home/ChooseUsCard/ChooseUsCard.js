import React from "react";

const ChooseUsCard = ({ choice }) => {
  return (
    <div className="col-md-4 col-sm-12 pb-4 d-flex justify-content-center ">
      <div className="card  " style={{ width: "18rem", border: "none" }}>
        <img src={choice.icon} alt="" />
        <div className="card-body">
          <h5 className="card-title">{choice.title}</h5>
          <p className="card-text">{choice.details}</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsCard;
