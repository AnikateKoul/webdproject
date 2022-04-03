import React from "react";
import "./ContactUs.css";
// import "./validation.js";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
// import { FaMailBulk } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function ContactUS(props) {
  return (
    <>
      <div style={{ marginTop: "105px" }}></div>
      <div className="main2">
        <div style={{ height: "75px" }}>
        <div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Your query has been successfully submitted!
         </div>
          <div id="failure" class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error!</strong> Your query has not been sent due to errors.
          </div>

          <div className="container my-5 py-5 z-depth-1 containerTemp">
            <section className="px-md-5 mx-md-5 text-center text-lg-left">
              <h1
                className={`font-weight-bold text-${props.mode === "light" ? "dark" : "light"
                  } heading`}
              >
                Contact Us
              </h1>
              <p
                className={`text-${props.mode === "light" ? "dark" : "light"
                  } sub-heading`}
              >
                We'd love to hear from you.
              </p>

              <hr className="my-5" />

              <div className="row">
                <div
                  className={`col-lg-5 col-md-12 mb-0 mb-md-0 text-${props.mode === "light" ? "dark" : "light"
                    } leftDiv`}
                >
                  <div className="innerLeftDiv">
                    <h1 className="font-weight-bold leftDivHeading">
                      Contact Information
                    </h1>

                    <p className="mb-4 sub-heading2">
                      <i>
                        Fill up the form and our team will get back to you
                        within 24 hours.
                      </i>
                    </p>
                    <div className="phone">
                      <p>
                        <BsFillTelephoneFill /> +91 9725144789
                      </p>
                    </div>
                    <div className="email">
                      <p>
                        <FaEnvelope /> wanderlusters@gmail.com
                      </p>
                    </div>
                    <div className="address">
                      <p>
                        <FaAddressCard /> Lucknow, UP 50012, India
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12 mb-4 mb-md-0 form-floating rightDiv">
                  <div className="row">
                    <div className="col-md-6 name1">
                      <div className="md-form md-outline mb-0 form-floating">
                        <input
                          type="text"
                          id="form-first-name"
                          className="form-control colorChange"
                        />
                        <small
                          id="namevalid"
                          class="form-text text-muted invalid-feedback"
                        >
                          Your First Name must be 2-10 characters long and
                          should not start with a number.
                        </small>
                        <label htmlFor="form-first-name" className='contactLab'>First name</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="md-form md-outline mb-0 form-floating lastName">
                        <input
                          type="text"
                          id="form-last-name"
                          className="form-control colorChange"
                        />
                        <small
                          id="namevalid"
                          class="form-text text-muted invalid-feedback"
                        >
                          Your Last Name must be 2-10 characters long and should
                          not start with a number.
                        </small>
                        <label htmlFor="form-last-name" className='contactLab'>Last name</label>
                      </div>
                    </div>
                  </div>

                  <div className="md-form md-outline mt-3 form-floating">
                    <input
                      type="text"
                      id="form-company"
                      className="form-control colorChange"
                    />
                    <label htmlFor="form-company" className='contactLab'>Company name</label>
                  </div>

                  <div className="md-form md-outline mt-3 form-floating">
                    <input
                      type="email"
                      id="form-email"
                      className="form-control colorChange"
                    />
                    <small
                      id="emailvalid"
                      class="form-text text-muted invalid-feedback"
                    >
                      Your email must be a valid email
                    </small>
                    <label htmlFor="form-email" className='contactLab'>E-mail</label>
                  </div>

                  <div className="md-form md-outline mt-3 form-floating">
                    <input
                      type="text"
                      id="form-number"
                      className="form-control colorChange"
                      minLength={10}
                      maxLength={10}
                    />
                    <small
                      id="phonevalid"
                      class="form-text text-muted invalid-feedback"
                    >
                      Your phone must be a valid 10 digit phone number.
                    </small>
                    <label htmlFor="form-number" className='contactLab'>Phone</label>
                  </div>

                  <div className="md-form md-outline my-3 form-floating">
                    <input
                      type="text"
                      id="form-subject"
                      className="form-control colorChange"
                    />
                    <label htmlFor="form-subject" className='contactLab'>Subject</label>
                  </div>
                  <small
                    id="subjectvalid"
                    class="form-text text-muted invalid-feedback"
                  >
                    Please elaborate your issue in a bit more detail.
                  </small>
                  <div className="md-form md-outline mb-3 form-floating">
                    <textarea
                      id="form-message"
                      className="md-textarea form-control colorChange"
                      rows="3"
                    ></textarea>
                    <label htmlFor="form-message" className='contactLab'>How we can help?</label>
                  </div>
                  {/* <Link to="/thank"> */}
                  <button
                    type="submit"
                    className={`btn btn-${props.mode === "light" ? "info" : "light"
                      } ml-0 my-10 contactButton`}
                    id="submit"
                  >
                    Submit
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div style={{ height: "100px" }}></div>
    </>
  );
}
