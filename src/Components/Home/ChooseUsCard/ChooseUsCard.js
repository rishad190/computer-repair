import React from "react";

const ChooseUsCard = ({ choice }) => {
  return (
    <div className="col-md-4 pb-4">
      <div class="card " style={{ width: "18rem", border: "none" }}>
        <img src={choice.icon} alt="" />
        <div class="card-body">
          <h5 class="card-title">{choice.title}</h5>
          <p class="card-text">{choice.details}</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsCard;
