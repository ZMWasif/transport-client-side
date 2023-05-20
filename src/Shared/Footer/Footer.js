import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-white bg-dark"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Transport
              </h6>
              <p>
                Transport offers a host of logistic management services and
                supply chain solutions. We provide innovative solutions with the
                best people, processes, and technology.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Information</h6>
              <p>
                <a href="#!" className="text-reset">
                  <FontAwesomeIcon icon={faShare} />
                  <span className="mx-2">About Us</span>
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  <FontAwesomeIcon icon={faShare} />
                  <span className="mx-2">Cart</span>
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  <FontAwesomeIcon icon={faShare} />
                  <span className="mx-2">Contact</span>
                </a>
              </p>
              <p>
                <a href="/services" className="text-reset">
                  <FontAwesomeIcon icon={faShare} />
                  <span className="mx-2">Our Services</span>
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  <FontAwesomeIcon icon={faShare} />
                  <span className="mx-2">Pricing</span>
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  <FontAwesomeIcon icon={faShare} />
                  <span className="mx-2">Settings</span>
                </a>
              </p>
              <p>
                <a href="/manage" className="text-reset">
                  <FontAwesomeIcon icon={faShare} />
                  <span className="mx-2">Orders</span>
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  <FontAwesomeIcon icon={faShare} />
                  <span className="mx-2">Help</span>
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Holländische Straße 103, Germany
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                ziauddinwasif@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <small className="ml-2 ">
          &copy; <span className="text-reset fw-bold">Transport</span>, @ {year}{" "}
          All rights Reserved.
        </small>
      </div>
    </MDBFooter>
  );
}
