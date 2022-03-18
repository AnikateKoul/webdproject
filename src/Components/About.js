import React from "react";

export default function About() {
  return (
    <div className="container" style={{paddingTop: "70px"}}>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Our Mission
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Our team of creative and driven entrepreneurs come together to
              build a hotel search that is fast, intuitive and unbiased, with
              the longstanding mission… To be the traveler's first and
              independent source of information for finding the ideal hotel.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Our Vision
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              We want to enable all our advertisers, from independent hoteliers
              to the largest hotel chains, to grow their businesses by accessing
              our broad audience of monthly users. We also want to enable our
              users to search for best hotels without wasting any of their
              precious time.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Our Modus Operandi
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              We are an API based website that fetch the best results based on
              the users choice and liking. Our hard-working team aspires to
              deliver the best possible user experience to our customer through
              advanced technology. The results are delivered to the website in
              json format which are re-rendered on our website in a beautiful
              way to help our users find the best possible hotel and save their
              hard earned money and precious time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
