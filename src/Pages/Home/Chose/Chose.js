import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHashtag } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import photo from "../../../Images/templates/template3.jpg";
import { Accordion } from "react-bootstrap";
import "./Chose.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Chose = () => {
  return (
    <div>
      <div>
        <div className="text-center">
          <h1>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <FontAwesomeIcon icon={faArrowRight} beat />{" "}
                  <span className="mx-2">Quality Commitment</span>
                </Accordion.Header>
                <Accordion.Body className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <FontAwesomeIcon icon={faArrowRight} beat />{" "}
                  <span className="mx-2">We are always improving</span>
                </Accordion.Header>
                <Accordion.Body className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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
              <h1 className="text-5xl font-bold">Our Mission</h1>
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
              <button className="btn btn-outline btn-primary">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chose;
