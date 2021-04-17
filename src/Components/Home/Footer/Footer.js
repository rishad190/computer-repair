import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer_container">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-white">
            <div>
              <i></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque corrupti tenetur quo sequi dolor hic!
              </p>
            </div>
          </div>
          <div className="col-md-2 text-white">
            <h4>Company</h4>
            <div className="link_box">
              <a href="/">Project</a>

              <a href="/">About</a>
              <a href="/">Our Team</a>
              <a href="/">Terms of Service</a>
              <a href="/">Terms of Service</a>
              <a href="/">Submit Listing</a>
            </div>
          </div>
          <div className="col-md-2 text-white">
            <h4>Quick links</h4>
            <div className="link_box">
              <a href="/">Quick links</a>
              <a href="/">Contact</a>
              <a href="/">Service</a>
              <a href="/">Sales</a>
              <a href="/">Our blog</a>
            </div>
          </div>
          <div className="col-md-4 text-white">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              nisi eos, maxime ducimus vel nesciunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
