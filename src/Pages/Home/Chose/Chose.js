import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHashtag } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import photo from "../../../Images/templates/template3.jpg";
import { Accordion, Button } from "react-bootstrap";
import "./Chose.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Chose = () => {
  return (
    <div>
      <div>
        <div className="text-center">
          <h1 className="font-mono fw-bold">
            {" "}
            <FontAwesomeIcon className="mx-3" icon={faChevronDown} beatFade />
            Why Choose Us?
            <FontAwesomeIcon className="mx-3" icon={faChevronDown} beatFade />
          </h1>
          <div className="">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FontAwesomeIcon icon={faArrowRight} beat />{" "}
                  <span className="mx-2">We are creative and Professional</span>
                </Accordion.Header>
                <Accordion.Body className="text-white">
                  With over 60 years of providing world class service to their
                  customers on the asset side, a need to provide a one stop shop
                  for a” true customer service logistic solution” was
                  introduced. By adding this dimension to an already dynamic and
                  customer centric asset based provider, we feel we bring a
                  total solution.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <FontAwesomeIcon icon={faArrowRight} beat />{" "}
                  <span className="mx-2">Honest and Dependable</span>
                </Accordion.Header>
                <Accordion.Body className="text-white">
                  You can finally achieve 100% inventory transparency for every
                  warehouse position. The Web-based Warehouse Cockpit allows you
                  to quickly identify areas for improvement and plan for a
                  scaling operation.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <FontAwesomeIcon icon={faArrowRight} beat />{" "}
                  <span className="mx-2">Quality Commitment</span>
                </Accordion.Header>
                <Accordion.Body className="text-white">
                  Transport WMS for small warehouses includes features designed
                  to manage multiple workflow and supply chain processes.
                  Whether you own your own warehouses, work with 3PLs or a
                  combination of both, Transport provides functionality for
                  efficient inventory and warehouse management.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <FontAwesomeIcon icon={faArrowRight} beat />{" "}
                  <span className="mx-2">We are always improving</span>
                </Accordion.Header>
                <Accordion.Body className="text-white">
                  Transport is an all-in-one solution designed for small to
                  medium size businesses, primarily wholesalers and
                  distributors. As a fully integrated system, Transport provides
                  robust functionality for managing inventory, accounting, order
                  entry and processing, contact management, eCommerce
                  integration and warehouse management.Transport for small
                  warehouses provides functionality to help improve speed and
                  accuracy through automated workflows and is the ideal solution
                  for businesses with small warehouses, stock rooms and storage
                  facilities.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <br />
        <div className="hero min-h-screen bg-base-200 mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-mono fw-bold">Our Mission</h1>
              <p className="mt-4">
                <FontAwesomeIcon icon={faHashtag} spin />
                <span className="mx-2">Safety</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faHashtag} spin />
                <span className="mx-2">Community</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faHashtag} spin />
                <span className="mx-2">Sustainibility</span>
              </p>
              <Button className="btn btn-outline btn-primary text-white">
                Explore Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chose;
