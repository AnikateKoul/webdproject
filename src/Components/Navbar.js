import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode==="light"?"light":"dark"}`}
        style={{ boxShadow: "10px 10px 10px grey", opacity: "0.85", marginBottom: "30px"}}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Wanderlusters
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active mx-3"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Destinations
                </a>
                <ul className={`dropdown-menu bg-${props.mode==="light"?"light":"dark"} text-${props.mode==="light"?"dark":"light"}`} aria-labelledby="navbarDropdown">
                  <li>
                    <Link className={`dropdown-item text-${props.mode==="light"?"dark":"light"}`} to="/place1">
                      Shimla
                    </Link>
                  </li>
                  <li>
                    <Link className={`dropdown-item text-${props.mode==="light"?"dark":"light"}`} to="/place2">
                      Goa
                    </Link>
                  </li>
                  <li>
                    <Link className={`dropdown-item text-${props.mode==="light"?"dark":"light"}`} to="/place3">
                      Ooty
                    </Link>
                  </li>
                  <li>
                    <Link className={`dropdown-item text-${props.mode==="light"?"dark":"light"}`} to="/place4">
                      Ladakh
                    </Link>
                  </li>
                  <li>
                    <Link className={`dropdown-item text-${props.mode==="light"?"dark":"light"}`} to="/place5">
                      Jaisalmer
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" to="/gallery">
                  Gallery
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav ml-auto">
              {/* <li className="nav-item">
                <Link className="nav-link" to="/login">
                <button className="btn btn-success ">Login</button>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  <button className="btn btn-primary mx-2">Sign Up</button>
                </Link>
              </li>
            </ul>
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-3`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    Enable dark mode
              </label>
            </div>
        </div>
      </nav>
    </>
  );
}
