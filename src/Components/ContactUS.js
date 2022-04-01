import React from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";
import {BsFillTelephoneFill} from "react-icons/bs";
import {FaMailBulk} from "react-icons/fa";
import {FaAddressCard} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";

export default function ContactUS(props) {


  return (
    <>
    <div style={{marginTop: "70px"}}></div>
    <div className="main2">
      <div style={{ height: "75px" }}>
        <div className="container my-5 py-5 z-depth-1 containerTemp">
          <section className="px-md-5 mx-md-5 text-center text-lg-left">
            <h1 className={`font-weight-bold text-${props.mode==='light'?'dark':'light'} heading`}>Contact Us</h1>
            <p className={`text-${props.mode==="light"?"dark":"light"} sub-heading`}>
              We'd love to hear from you.
            </p>

            <hr className="my-5" />

            <div className="row">
              <div className={`col-lg-5 col-md-12 mb-0 mb-md-0 text-${props.mode==='light'?'dark':'light'} leftDiv`}>
              <div className="innerLeftDiv">
                <h1 className="font-weight-bold leftDivHeading">Contact Information</h1>

                <p className="mb-4 sub-heading2">
                  <i>
                  Fill up the form and our team will get back to you within 24 hours.</i>
                </p>
                <div className="phone">
                <p><BsFillTelephoneFill /> +800 123 456</p>
                </div>
                <div className="email">
                <p><FaEnvelope/> wanderlust@gmail.com</p>
                </div>
                <div className="address">
                <p><FaAddressCard/> 221B, Baker Street</p>
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
                      <label htmlFor="form-first-name">First name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form md-outline mb-0 form-floating lastName">
                      <input
                        type="text"
                        id="form-last-name"
                        className="form-control colorChange"
                      />
                      <label htmlFor="form-last-name">Last name</label>
                    </div>
                  </div>
                </div>

                <div className="md-form md-outline mt-3 form-floating">
                  <input
                    type="text"
                    id="form-company"
                    className="form-control colorChange"
                  />
                  <label htmlFor="form-company">Company name</label>
                </div>

                <div className="md-form md-outline mt-3 form-floating">
                  <input
                    type="email"
                    id="form-email"
                    className="form-control colorChange"
                  />
                  <label htmlFor="form-email">E-mail</label>
                </div>

                <div className="md-form md-outline mt-3 form-floating">
                  <input
                    type="text"
                    id="form-number"
                    className="form-control colorChange"
                    minLength={10}
                    maxLength={10}
                  />
                  <label htmlFor="form-number">Phone</label>
                </div>

                <div className="md-form md-outline my-3 form-floating">
                  <input
                    type="text"
                    id="form-subject"
                    className="form-control colorChange"
                  />
                  <label htmlFor="form-subject">Subject</label>
                </div>

                <div className="md-form md-outline mb-3 form-floating">
                  <textarea
                    id="form-message"
                    className="md-textarea form-control colorChange"
                    rows="3"
                  ></textarea>
                  <label htmlFor="form-message">How we can help?</label>
                </div>

                <Link to="/thank" ><button type="submit" className={`btn btn-${props.mode==='light'?'info':'light'} ml-0 my-10 contactButton`}>
                  Submit<i className="far fa-paper-plane ml-2"></i>
                </button></Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div style={{height: "500px"}}></div>
      </div>
    </>
  );
}
