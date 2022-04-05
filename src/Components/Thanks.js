import React from "react";
import { Link } from "react-router-dom";

export default function Thanks(props) {
  // This page will appear when you successfully submit a query on the thanks page
  return (
    <div style={{ position: "relative", marginTop: "70px" }}>
      <div className={`jumbotron text-center text-${props.mode==='light'?'dark':'light'}`}>
        <h1 className="display-3">Thank You for the feedback!</h1>
        <p className="lead">
          <strong>We will solve your query at the earliest.
          <br />
          Please keep checking your mail for further communication.
          </strong>
        </p>
        <hr />
        <p className="lead">
          <Link
            className="btn btn-primary btn-sm"
            to="/"
            role="button"
          >
            Continue to homepage
          </Link>
        </p>
      </div>
    </div>
  );
}
