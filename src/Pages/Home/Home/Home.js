import React from "react";
import Banner from "../Banner/Banner";
import cover from "../../../Images/cover.png";
import "./Home.css";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <img className="cover" src={cover} alt="" />
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Home;
