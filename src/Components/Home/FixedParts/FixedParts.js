import React from "react";
import fixed from "../../../images/fixed.jpg";
import "./FixedParts.css";

const FixedParts = () => {
  return (
    <section id="fixed" className="fixed_container">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid rounded-3" src={fixed} alt="" />
          </div>
          <div className="col-md-6">
            <div className="fixed_header">
              <h2 className="pt-2 text-white">
                GET YOUR COMPUTER FIXED FROM US{" "}
              </h2>
              <p className="pt-5 text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
                modi cupiditate temporibus nam, magnam laboriosam optio
                excepturi harum dolorem quis atque qui ducimus consequuntur
                perspiciatis libero esse sapiente quos iure?Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Harum vero laudantium
                repudiandae exercitationem eligendi fuga consequatur accusamus
                pariatur accusantium molestiae odit corrupti est similique in
                blanditiis provident, necessitatibus mollitia facilis, eos
                labore inventore corporis maxime? Recusandae aliquid, omnis
                deleniti itaque a ex assumenda cupiditate architecto quo, vitae
                mollitia incidunt. Minima, quis obcaecati iusto enim esse at
                modi quam vero quidem rem ea magni culpa ipsa totam adipisci
                cum, nesciunt aut necessitatibus nemo distinctio illo, assumenda
                blanditiis velit? Mollitia, assumenda voluptatibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixedParts;
