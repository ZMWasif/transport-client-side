import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const [services, setservices] = useState([]);

  useEffect(() => {
    fetch("https://hidden-bastion-31828.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);
  return (
    <div className="services-title">
      <h1 className="font-mono fw-bold">
        <FontAwesomeIcon className="mx-3" icon={faChevronDown} beatFade />
        Our Services
        <FontAwesomeIcon className="mx-3" icon={faChevronDown} beatFade />
      </h1>

      <div className="services-container">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
