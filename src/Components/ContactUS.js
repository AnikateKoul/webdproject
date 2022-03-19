import React from "react";

export default function ContactUS() {
  return (
    <>
      <div style={{ height: "75px" }}>
        <div className="container my-5 py-5 z-depth-1">
          <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
            <h3 className="font-weight-bold">Contact Us</h3>

            <p className="text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam
              sapiente molestiae <br />
              numquam quas, voluptates omnis nulla ea odio quia similique
              corrupti magnam, doloremque laborum.
            </p>

            <hr className="my-5" />

            <div className="row">
              <div className="col-lg-5 col-md-12 mb-0 mb-md-0">
                <h4 className="font-weight-bold">Call or email</h4>

                <p className="text-muted mb-4">
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

              <div className="col-lg-7 col-md-12 mb-4 mb-md-0">
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form md-outline mb-0">
                      <input
                        type="text"
                        id="form-first-name"
                        className="form-control"
                      />
                      <label htmlFor="form-first-name">First name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form md-outline mb-0">
                      <input
                        type="text"
                        id="form-last-name"
                        className="form-control"
                      />
                      <label htmlFor="form-last-name">Last name</label>
                    </div>
                  </div>
                </div>

                <div className="md-form md-outline mt-3">
                  <input
                    type="text"
                    id="form-company"
                    className="form-control"
                  />
                  <label htmlFor="form-company">Company name</label>
                </div>

                <div className="md-form md-outline mt-3">
                  <input
                    type="email"
                    id="form-email"
                    className="form-control"
                  />
                  <label htmlFor="form-email">E-mail</label>
                </div>

                <div className="md-form md-outline mt-3">
                  <input
                    type="number"
                    id="form-number"
                    className="form-control"
                  />
                  <label htmlFor="form-number">Phone</label>
                </div>

                <select
                  className="browser-default custom-select"
                  style={{color: "#757575bd"}}
                >
                  <option selected>Select department</option>
                  <option value="1">Support</option>
                  <option value="2">Sales</option>
                  <option value="3">General</option>
                </select>

                <div className="md-form md-outline">
                  <input
                    type="text"
                    id="form-subject"
                    className="form-control"
                  />
                  <label htmlFor="form-subject">Subject</label>
                </div>

                <div className="md-form md-outline mb-3">
                  <textarea
                    id="form-message"
                    className="md-textarea form-control"
                    rows="3"
                  ></textarea>
                  <label htmlFor="form-message">How we can help?</label>
                </div>

                <button type="submit" className="btn btn-info btn-sm ml-0">
                  Submit<i className="far fa-paper-plane ml-2"></i>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div style={{height: "500px"}}></div>
    </>
  );
}
