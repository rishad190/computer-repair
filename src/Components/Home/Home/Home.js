import React from "react";
import ChooseUs from "../ChooseUs/ChooseUs";
import FixedParts from "../FixedParts/FixedParts";
import Footer from "../Footer/Footer";
import HeaderSlider from "../HeaderSlider/HeaderSlider";
import Navbar from "../Navbar/Navbar";
import ServicesData from "../ServicesData/ServicesData";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeaderSlider></HeaderSlider>
      <ServicesData></ServicesData>
      <FixedParts></FixedParts>
      <ChooseUs></ChooseUs>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
