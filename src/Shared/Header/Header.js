import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import wasif from "../../Images/wasif.jpg";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.jpg";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWarehouse,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="bg-base">
      <div className="navbar bg-dark-100">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img className="logo" src={logo} height={45} alt="" />
            </Navbar.Brand>
            <Navbar.Brand className="pages" href="/home">
              Transport
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className="pages" href="/home">
                Home
              </Nav.Link>
              <Nav.Link className="pages" href="/features">
                Features
              </Nav.Link>
              <Nav.Link className="pages" href="/services">
                Services
              </Nav.Link>
            </Nav>
          </Container>
          <div className="flex-none text-white mx-auto">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="text-white">
                  <FontAwesomeIcon icon={faWarehouse} />
                </div>
              </label>
              <div className="dropdown dropdown-end">
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
                >
                  <li>
                    <Nav.Link
                      as={Link}
                      to="addservice"
                      className="justify-between"
                    >
                      Add
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link as={Link} to="manage" className="justify-between">
                      Manage
                    </Nav.Link>
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
              {user ? (
                <div className="dropdown dropdown-end">
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
                  >
                    <li>
                      <a className="justify-between">{user.displayName}</a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <button
                      className="btn btn-primary btn-block signout-btn"
                      onClick={handleSignOut}
                    >
                      Sign Out
                      <FontAwesomeIcon
                        className="mx-2"
                        icon={faSignOut}
                      ></FontAwesomeIcon>
                    </button>
                  </ul>

                  <Button>
                    <FontAwesomeIcon icon={faUser} />
                  </Button>
                </div>
              ) : (
                /* {<ul
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
                </ul>} */
                <Nav.Link className="pages" as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={wasif} />
                </div>
              </label> */}
            </div>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
