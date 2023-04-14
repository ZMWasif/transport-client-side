import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Service = ({ service }) => {
  const { _id, title, description, img } = service;
  const navigate = useNavigate();

  const navigateToserviceDetail = (_id) => {
    navigate(`/services/${_id}`);
  };

  return (
    <div className="service">
      <img className="service" src={img} alt="" />
      <button
        onClick={() => navigateToserviceDetail(_id)}
        className="service-btn text-white"
      >
        {title}
        <span className="mx-2">
          <FontAwesomeIcon icon={faArrowLeft} beatFade />
        </span>
      </button>
      <br />
      <br />
      {description}
    </div>
  );
};

export default Service;
