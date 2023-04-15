import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Service from "../Home/Service/Service";

const SERVICES = () => {
  const [services, setservices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);
  return (
    <div className="services-title">
      <h1>
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

export default SERVICES;
