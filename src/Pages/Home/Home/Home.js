import React from "react";
import Banner from "../Banner/Banner";
import cover from "../../../Images/cover.png";
import "./Home.css";
import Services from "../Services/Services";
import Templates from "../Templates/Templates";
import Chose from "../Chose/Chose";

const Home = () => {
  return (
    <div>
      <img className="cover" src={cover} alt="" />
      <br />
      <h2>Unbeatable Trucking and Trasportation Services</h2>
      <button className="btn btn-outline btn-primary">Learn More</button>
      <Templates></Templates>

      <Services></Services>
      <Banner></Banner>
      <Chose></Chose>
      <br />
    </div>
  );
};

export default Home;
