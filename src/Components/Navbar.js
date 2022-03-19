import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" style={{boxShadow: "10px 10px 10px grey", opacity: "0.85"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Title
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
                <Link className="nav-link active mx-3" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Destinations
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Place1</a></li>
            <li><a className="dropdown-item" href="#">Place2</a></li>
            <li><a className="dropdown-item" href="#">Place3</a></li>
            <li><a className="dropdown-item" href="#">Place4</a></li>
            <li><a className="dropdown-item" href="#">Place5</a></li>
          </ul>
        </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" to="/gallery">
                  Gallery
                </Link>
              </li>
            </ul>            
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
