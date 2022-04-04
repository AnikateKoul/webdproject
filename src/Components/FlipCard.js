import React from "react";
import "./FlipCard.css";

export default function FlipCard() {
  return (
    <div>
      <div className="container d-flex align-items-center justify-content-center flex-wrap">
        <div className="box">
          <div className="body">
            <div className="imgContainer">
              {" "}
              <img
                src="https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />{" "}
            </div>
            <div className="content d-flex flex-column align-items-center justify-content-center">
              <div>
                <h3 className="text-white fs-5">Post Title</h3>
                <p className="fs-6 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo sed cum neque, rem provident ex. Laboriosam
                  perspiciatis modi eveniet in?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="body">
            <div className="imgContainer">
              {" "}
              <img
                src="https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />{" "}
            </div>
            <div className="content d-flex flex-column align-items-center justify-content-center">
              <div>
                <h3 className="text-white fs-5">Post Title</h3>
                <p className="fs-6 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo sed cum neque, rem provident ex. Laboriosam
                  perspiciatis modi eveniet in?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="body">
            <div className="imgContainer">
              {" "}
              <img
                src="https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
              />{" "}
            </div>
            <div className="content d-flex flex-column align-items-center justify-content-center">
              <div>
                <h3 className="text-white fs-5">Post Title</h3>
                <p className="fs-6 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo sed cum neque, rem provident ex. Laboriosam
                  perspiciatis modi eveniet in?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
