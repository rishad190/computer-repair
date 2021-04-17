import React from "react";
import slider from "../../../images/slider.jpg";
import "./HeaderSlider.css";

const HeaderSlider = () => {
  return (
    <section className="mt-5 header_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="slider_contain">
              <h1>
                WE ARE SATISFIED <br />
                WITH OUR WORK
              </h1>
              <p className="w-75">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt sed minima assumenda vitae error itaque accusantium
                enim earum culpa officia.
              </p>
              <button className="btn btn-primary">BOOK NOW !</button>
            </div>
          </div>
          <div className="col-md-6 ">
            <img className="w-100 rounded-3" src={slider} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSlider;
