import React from "react";
import "./About.css";
import MyVideo from "./MyVideo.mp4";

export default function About(props) {
  // This is for the dark mode toggling
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#212529",
    backgroundColor: props.mode === "dark" ? "#212529" : "white",
    width: "85vw",
    margin: "5px"
  };


  return (
    <div className="container" style={{ paddingTop: "70px" }}>
      <div className="aboutUs">
      <div id="gif">
      {/* This is the Wanderlusters animation video */}
        <video width="100%" height="100%" autoPlay muted loop id="giffy">
          <source src={MyVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      {/* These are the accordion items */}
      <div
        className="accordion accordion-flush container aboutContent"
        id="accordionFlushExample"
        style={myStyle}
      >
        <div className="accordion-item">
          <h2 className="accordion-header aboutHead" id="flush-headingOne" style={myStyle}>
            <button
              className="accordion-button collapsed title title"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={myStyle}
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
            <div className="accordion-body" style={myStyle}>
              Our Mission is to perform and deliver excellent quality service to
              our clients. Providing them unforgettable travel, enjoyable, with
              guaranteed services that exceed their expectations With this
              objective, we aim to earn the reputation as "Your Preferred Travel
              Agency". Our team of creative and driven entrepreneurs come
              together to build a hotel search that is fast, intuitive and
              unbiased, with the longstanding mission… To be the traveler's
              first and independent source of information for finding the ideal
              hotel. The satisfaction of our customers and extraordinary service
              is the main aim, saving your time and money while providing the
              best value for your trip.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header aboutHead" id="flush-headingTwo" style={myStyle}>
            <button
              className="accordion-button collapsed title"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={myStyle}
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
            <div className="accordion-body" style={myStyle}>
              To become the leading travel operator in India, by relying on a
              well-motivated workforce, applying appropriate technology, and
              providing maximum satisfaction to the customer. This vision is
              progressively being achieved by the following:
              <ul>
                {" "}
                <li>An increased focus on improved profitability </li>
                <li>
                  Enhancing employee motivation and loyalty to the company
                </li>
                <li>
                  {" "}
                  Implementing cutting-edge reservation and marketing tools
                  available in the industry.{" "}
                </li>
                <li>
                  Seeking out-of-the-box strategies in distinguishing ourselves
                  from the competition in order to get the most customer
                  satisfaction possible.
                </li>
              </ul>
              We want to enable all our advertisers, from independent hoteliers
              to the largest hotel chains, to grow their businesses by accessing
              our broad audience of monthly users. We also want to enable our
              users to search for best hotels without wasting any of their
              precious time.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header aboutHead" id="flush-headingThree" style={myStyle}>
            <button
              className="accordion-button collapsed title"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={myStyle}
            >
              Our Values
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse title"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              <ul>
                <li>
                  <b>Solve it together </b>
                  <br />
                  &nbsp; Collaboration connects us. There’s no problem so tough
                  that we can’t tackle it together. Working as a team, we
                  harness the wisdom (and energy!) of the crowd.
                </li>
                <br />
                <li>
                  <b>Act with purpose </b>
                  <br />
                  &nbsp; We embrace change and foster innovation. Our creativity
                  and drive are positively contagious – and they get results.
                </li>
                <br />
                <li>
                  <b>Do what’s right </b>
                  <br />
                  &nbsp; We operate openly and foster transparency. Our team
                  members, clients and communities always know where we stand.
                </li>
                <br />
                <li>
                  <b>Feed the future </b>
                  <br />
                  &nbsp; When we give others the tools, skills and opportunities
                  to succeed, they flourish. When we give ourselves the same,
                  we’re unstoppable.
                </li>
                <br />
                <li>
                  <b>Give your best </b>
                  <br />
                  &nbsp; Passion powers us. We believe the only way to do great
                  work is to love what you do. We’re inspired by the people and
                  places around us.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header aboutHead" id="flush-headingFour" style={myStyle}>
            <button
              className="accordion-button collapsed title"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
              style={myStyle}
            >
              Our Modus Operandi
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
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
        <div className="accordion-item">
          <h2 className="accordion-header aboutHead" id="flush-headingFive" style={myStyle}>
            <button
              className="accordion-button collapsed title "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
              style={myStyle}
            >
              Our Team
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              We are a group of hardworking and talented individuals who aspire
              to make this world a better place
              <h4>People : </h4>
              <ul>
                <li>Achal Gupta</li>
                <li>Anikate Koul</li>
                <li>Nikhil Ranjan</li>
                <li>Sahil Singh</li>
                <li>Vikrant Kumar</li>
                <li>Dhruv Sangra</li>
                <li>Kundan Pratap Singh</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
