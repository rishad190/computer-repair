import React from "react";

const BookingCard = (props) => {
  const { service, status } = props.booking;
  return (
    <div className="col-md-6 mt-5">
      <div class="card border-success mb-3">
        <div class="card-body text-success">
          <h5 class="card-title">{service}</h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam
            incidunt, libero nesciunt veritatis perspiciatis ex cumque nihil!
            Vitae, nostrum.
          </p>
        </div>
        <div class="card-footer bg-info border-success text-center">
          <b className=" p-2 bg-primary text-white shadow p-3 mb-5  rounded">
            {status}
          </b>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
