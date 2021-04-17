import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServicesCard from "../ServicesCard/ServicesCard";
import "./ServicesData.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ServicesData = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/showServices")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);

  return (
    <section className="services_container">
      <div>
        <h3 className="text-center mb-5">SERVICES</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <Carousel responsive={responsive}>
              {services.map((data) => (
                <ServicesCard key={data._id} data={data}></ServicesCard>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesData;
