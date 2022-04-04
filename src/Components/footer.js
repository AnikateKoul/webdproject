import React from "react";
import { Link } from "react-router-dom";
// import { IconName } from "react-icons/io5";

export default function Footer(props) {
  return (
    <>
    <div className="d-flex flex-column ">
      <footer
        className={`text-center fixed-bottom text-lg-start  bg-${
          props.mode === "light" ? "light" : "dark"
        } text-${props.mode === "light" ? "dark" : "light"}`}
        style={{ position: "relative", top: "0px", zIndex: "-1" }}
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block ">
            <div>
              Get connected with us on social networks:
              <div className="d-inline-flex p-2 bd-highlight flex-fill justify-content-end">
                <div className="mx-5">
                  <a
                    href="https://www.facebook.com/iiitlucknow/"
                    target="_blank"
                  >
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </div>

                <a
                  href="https://www.instagram.com/iiitlucknow/?hl=en"
                  target="_blank"
                >  
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>

                <div className="mx-5">
                <a href="https://twitter.com/iiit_lucknow" target="_blank">  <ion-icon name="logo-twitter">
                </ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i> Wanderlusters
                </h6>
                <p style={{textAlign: 'justify'}}>
                Established in 2022, Wanderlusters has since positioned itself as one of the leading companies, providing great overview of different tourist places, exclusive details, and a seamless online booking experience to many of its customers. The experience of booking your hotel stay, and holiday package through our desktop site can be done with complete ease and no hassles at all. 
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Destinations</h6>
                <p>
                  <Link to="/place1" className="text-reset">
                    Shimla
                  </Link>
                </p>
                <p>
                  <Link to="/place2" className="text-reset">
                    Goa
                  </Link>
                </p>
                <p>
                  <Link to="/place3" className="text-reset">
                    Ooty
                  </Link>
                </p>
                <p>
                  <Link to="/place4" className="text-reset">
                    Ladakh
                  </Link>
                </p>
                <p>
                  <Link to="/place5" className="text-reset">
                    Jaisalmer
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Lucknow, UP 50012, India
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  wanderlusters@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +91 9812457861
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> +91 9725144789
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright:
          <Link className="text-reset fw-bold" to="/">
            Wanderlusters
          </Link>
        </div>
      </footer>
      </div>
    </>
  );
}
