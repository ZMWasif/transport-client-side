import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import wasif from "../../Images/wasif.jpg";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.jpg";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="bg-base">
      <div className="navbar bg-dark-100">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img className="logo" src={logo} height={45} alt="" />
            </Navbar.Brand>
            <Navbar.Brand className="pages" href="home">
              Transport
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className="pages" href="home">
                Home
              </Nav.Link>
              <Nav.Link className="pages" href="features">
                Features
              </Nav.Link>
              <Nav.Link className="pages" href="services">
                Services
              </Nav.Link>
            </Nav>
          </Container>
          <div className="flex-none text-white mx-auto">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator text-white">
                  <FontAwesomeIcon icon={faWarehouse} bounce />
                </div>
              </label>
              <div className="dropdown dropdown-end">
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
                >
                  <li>
                    <a className="justify-between">8 Items</a>
                  </li>
                  <li>
                    <a>Subtotal</a>
                  </li>
                  <button className="btn btn-primary btn-block">
                    View Inventory
                  </button>
                </ul>
              </div>

              {/* <div
                tabIndex={0}
                className="mt-3 p-5 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg text-black">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View Inventory
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={wasif} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
