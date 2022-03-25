import React from "react";
import { Link } from "react-router-dom";

export default function ContactUS(props) {


  return (
    <>
      <div style={{ height: "75px" }}>
        <div className="container my-5 py-5 z-depth-1">
          <section className="px-md-5 mx-md-5 text-center text-lg-left">
            <h3 className={`font-weight-bold text-${props.mode==='light'?'dark':'light'}`}>Contact Us</h3>
            <p className={`text-${props.mode==="light"?"dark":"light"}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam
              sapiente molestiae <br />
              numquam quas, voluptates omnis nulla ea odio quia similique
              corrupti magnam, doloremque laborum.
            </p>

            <hr className="my-5" />

            <div className="row">
              <div className={`col-lg-5 col-md-12 mb-0 mb-md-0 text-${props.mode==='light'?'dark':'light'}`}>
                <h4 className="font-weight-bold">Call or email</h4>

                <p className="mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                  quam sapiente molestiae.
                </p>

                <p className="font-weight-bold">Support:</p>

                <p className="mb-2">+ 800 123 456</p>

                <p className="mb-2">
                  <a href="/">Contact support</a>
                </p>

                <p className="mb-4">
                  Our technical support is available by phone or email from 11am
                  to 11pm.
                </p>

                <p className="font-weight-bold">Sales:</p>

                <p className="mb-2">+ 900 123 456</p>

                <p className="mb-2">
                  <a href="/">Contact sales</a>
                </p>

                <p className="mb-4">
                  Our sales team is available by phone or email from 11am to
                  11pm.
                </p>

                <p className="font-weight-bold">General inquiries:</p>

                <p className="mb-2">
                  <a href="/">info@mycompany.com</a>
                </p>
              </div>

              <div className="col-lg-7 col-md-12 mb-4 mb-md-0 form-floating">
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form md-outline mb-0 form-floating">
                      <input
                        type="text"
                        id="form-first-name"
                        className="form-control"
                        placeholder="First Name"
                      />
                      <label htmlFor="form-first-name">First name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form md-outline mb-0 form-floating">
                      <input
                        type="text"
                        id="form-last-name"
                        className="form-control"
                        placeholder="Last Name"
                      />
                      <label htmlFor="form-last-name">Last name</label>
                    </div>
                  </div>
                </div>

                <div className="md-form md-outline mt-3 form-floating">
                  <input
                    type="text"
                    id="form-company"
                    className="form-control"
                    placeholder="Company Name"
                  />
                  <label htmlFor="form-company">Company name</label>
                </div>

                <div className="md-form md-outline mt-3 form-floating">
                  <input
                    type="email"
                    id="form-email"
                    className="form-control"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="form-email">E-mail</label>
                </div>

                <div className="md-form md-outline mt-3 form-floating">
                  <input
                    type="text"
                    id="form-number"
                    className="form-control"
                    placeholder="Phone Number"
                    minLength={10}
                    maxLength={10}
                  />
                  <label htmlFor="form-number">Phone</label>
                </div>

                <div className="md-form md-outline my-3 form-floating">
                  <input
                    type="text"
                    id="form-subject"
                    className="form-control"
                    placeholder="Subject"
                  />
                  <label htmlFor="form-subject">Subject</label>
                </div>

                <div className="md-form md-outline mb-3 form-floating">
                  <textarea
                    id="form-message"
                    className="md-textarea form-control"
                    rows="3"
                    placeholder="How can we help?"
                  ></textarea>
                  <label htmlFor="form-message">How we can help?</label>
                </div>

                <Link to="/thank" ><button type="submit" className={`btn btn-${props.mode==='light'?'info':'light'} ml-0`}>
                  Submit<i className="far fa-paper-plane ml-2"></i>
                </button></Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div style={{height: "500px"}}></div>
    </>
  );
}
